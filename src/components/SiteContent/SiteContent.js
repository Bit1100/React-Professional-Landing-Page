import React from "react";
import Footer from "../Layout/Footer";
import Home from "../Sections/Home/Home";

const AboutLazy = React.lazy(() => import("../Sections/About/About"));
const BlogLazy = React.lazy(() => import("../Sections/Blog/Blog"));
const ContactLazy = React.lazy(() => import("../Sections/Contact/Contact"));
const DealLazy = React.lazy(() => import("../Sections/Deal/Deal"));
const FruitsLazy = React.lazy(() => import("../Sections/Fruits/Fruits"));
const ServiceLazy = React.lazy(() => import("../Sections/Service/Service"));
const SubscribeLazy = React.lazy(() =>
  import("../Sections/Subscribe/Subscribe")
);

const SiteContent = () => {
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

export default SiteContent;
