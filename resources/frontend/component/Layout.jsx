import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Layout = () => {

  return (
    <div className="relative flex flex-col min-h-screen sm:bg-[#FAFAFA] bg-[#FFFFFF]">
      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      {/*<Footer /> */}
    </div>
  );
}; 

export default Layout;
