import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../Shared/Loading";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar></Navbar>

      {navigation.state === "loading" ? (
        <Loading></Loading>
      ) : (
        <main className="w-11/12 mx-auto">
          <Outlet></Outlet>
        </main>
      )}

      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainLayout;
