import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import GlobalLoader from "../../components/GlobalLoader/GlobalLoader";

const Root = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <div>
      <Navbar />
      {isPageLoading && <GlobalLoader />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
