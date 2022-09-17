import React from "react";
import NavTrigger from "./NavTrigger";
import SiteContent from "./SiteContent";
import { useData } from "../Layout/Global";

const SiteContentWrapper = () => {
  const { isScaled } = useData();
  return (
    <div
      className={
        isScaled ? "site-content-wrapper scaled" : "site-content-wrapper"
      }
    >
      <NavTrigger />
      <SiteContent />
    </div>
  );
};

export default SiteContentWrapper;
