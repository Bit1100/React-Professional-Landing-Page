import React from "react";
import Footer from "../Layout/Footer";
import Home from "../Sections/Home";

const AboutLazy = React.lazy(() => import("../Sections/About"));
const BlogLazy = React.lazy(() => import("../Sections/Blog"));
const ContactLazy = React.lazy(() => import("../Sections/Contact/index."));
const DealLazy = React.lazy(() => import("../Sections/Deal/index."));
const FruitsLazy = React.lazy(() => import("../Sections/Fruits/index."));
const ServiceLazy = React.lazy(() => import("../Sections/Service/index."));
const SubscribeLazy = React.lazy(() => import("../Sections/Subscribe/index."));

const AppContent = () => {
  return (
    <div className="site-content">
      <Home />
      <React.Suspense fallback="LOADING...">
        <FruitsLazy />
        <AboutLazy />
        <ServiceLazy />
        <DealLazy />
        <BlogLazy />
        <SubscribeLazy />
        <ContactLazy />
        <Footer />
      </React.Suspense>
    </div>
  );
};

export default AppContent;
