import React from "react";
import { Routes, Route } from "react-router-dom";
import MainWrapper from "./components/SiteContent/MainWrapper";
import "./assets/styles/main.css";
import Home from "./components/Sections/Home/Home";

const AboutLazy = React.lazy(() => import("./components/Sections/About/About"));
const BlogLazy = React.lazy(() => import("./components/Sections/Blog/Blog"));
const ContactLazy = React.lazy(() =>
  import("./components/Sections/Contact/Contact")
);
const DealLazy = React.lazy(() => import("./components/Sections/Deal/Deal"));
const FruitsLazy = React.lazy(() =>
  import("./components/Sections/Fruits/Fruits")
);
const ServiceLazy = React.lazy(() =>
  import("./components/Sections/Service/Service")
);
const SubscribeLazy = React.lazy(() =>
  import("./components/Sections/Subscribe/Subscribe")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainWrapper />}>
        <Route index element={<Home />} />
        <Route
          path="blog"
          element={
            <React.Suspense fallback={<h1>Loading...</h1>}>
              <BlogLazy />
            </React.Suspense>
          }
        />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<h1>Loading...</h1>}>
              <AboutLazy />
            </React.Suspense>
          }
        />
        <Route
          path="deal"
          element={
            <React.Suspense fallback={<h1>Loading...</h1>}>
              <DealLazy />
            </React.Suspense>
          }
        />
        <Route
          path="fruits"
          element={
            <React.Suspense fallback={<h1>Loading...</h1>}>
              <FruitsLazy />
            </React.Suspense>
          }
        />
        <Route
          path="service"
          element={
            <React.Suspense fallback={<h1>Loading...</h1>}>
              <ServiceLazy />
            </React.Suspense>
          }
        />
        <Route
          path="subscribe"
          element={
            <React.Suspense fallback={<h1>Loading...</h1>}>
              <SubscribeLazy />
            </React.Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <React.Suspense fallback={<h1>Loading...</h1>}>
              <ContactLazy />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
