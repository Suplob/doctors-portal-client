import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import ExpectionalDental from "../../ExceptinalDental/ExpectionalDental";
import Bannerfeatured from "../BannerFeatured/Bannerfeatured";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../../Shared/Footer/Footer";
import Doctors from "../Doctors/Doctors";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Bannerfeatured></Bannerfeatured>
      <Services></Services>
      <ExpectionalDental></ExpectionalDental>
      <AppointmentBanner></AppointmentBanner>
      <Testimonial></Testimonial>
      <Doctors></Doctors>
      <Footer></Footer>
    </div>
  );
};

export default Home;
