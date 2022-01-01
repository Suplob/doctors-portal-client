import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import DashboardHome from "./DashboardHome/DashboardHome";
import { ListItemButton } from "@mui/material";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AddDoctor from "./AddDoctor/AddDoctor";
import AdminRoute from "../Login/AdminRoute/AdminRoute";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [appointments, setAppointments] = React.useState([]);
  const [date, setDate] = React.useState(new Date());

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { user, admin } = useAuth();

  useEffect(() => {
    fetch(
      `https://doctors-portal-server-suplob.herokuapp.com/order?email=${user.email}&date=${date}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, [date]);

  const { path, url } = useRouteMatch();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Link
          className="default-link"
          to={`/appointment`}
          style={{ color: "black " }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>

              <ListItemText primary="Appointments" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          className="default-link"
          to={`${url}`}
          style={{ color: "black " }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>

              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>
        {admin && (
          <Box>
            <Link
              className="default-link"
              to={`${url}/makeAdmin`}
              style={{ color: "black " }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>

                  <ListItemText primary="Make Admin" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              className="default-link"
              to={`${url}/addDoctor`}
              style={{ color: "black " }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>

                  <ListItemText primary="Add Doctor" />
                </ListItemButton>
              </ListItem>
            </Link>
          </Box>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link to="/home" className="default-link">
              Doctors Portal
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashboardHome
              date={date}
              setDate={setDate}
              appointments={appointments}
            ></DashboardHome>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addDoctor`}>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
