import React from "react";
import { routesType } from "../types";

// React Normal Loading Component
import AppWrapper from "../components/AppStructure/AppWrapper";
import Home from "../components/Sections/Home";

// React Lazy Loading Component
const AboutLazy = React.lazy(() => import("../components/Sections/About"));
const BlogLazy = React.lazy(() => import("../components/Sections/Blog"));
const ContactLazy = React.lazy(
  () => import("../components/Sections/Contact/index.")
);
const DealLazy = React.lazy(() => import("../components/Sections/Deal/index."));
const FruitsLazy = React.lazy(
  () => import("../components/Sections/Fruits/index.")
);
const ServiceLazy = React.lazy(
  () => import("../components/Sections/Service/index.")
);
const SubscribeLazy = React.lazy(
  () => import("../components/Sections/Subscribe/index.")
);

export const routes: routesType = [
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "blog",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <BlogLazy />
          </React.Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <AboutLazy />
          </React.Suspense>
        ),
      },
      {
        path: "deal",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <DealLazy />
          </React.Suspense>
        ),
      },
      {
        path: "fruits",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <FruitsLazy />
          </React.Suspense>
        ),
      },
      {
        path: "service",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <ServiceLazy />
          </React.Suspense>
        ),
      },
      {
        path: "subscribe",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <SubscribeLazy />
          </React.Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <ContactLazy />
          </React.Suspense>
        ),
      },
    ],
  },
  // { path:'*', element: <NavigateWithQuery to="/" />, },
];
