import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import ExpectionalDental from "../../ExceptinalDental/ExpectionalDental";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <ExpectionalDental></ExpectionalDental>
      <AppointmentBanner></AppointmentBanner>
    </div>
  );
};

export default Home;
