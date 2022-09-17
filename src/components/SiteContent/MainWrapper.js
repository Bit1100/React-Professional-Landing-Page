import React from "react";
import SiteContentWrapper from "./SiteContentWrapper";
import NavBgWrapper from "../NavBg/NavBgWrapper";
import Global from "../Layout/Global";

const MainWrapper = () => {
  return (
    <Global>
      <div className="main-wrapper">
        <SiteContentWrapper />
        <NavBgWrapper />
      </div>
    </Global>
  );
};

export default MainWrapper;
