/* Routes Types */
export type routeChildren = { path: string; element: JSX.Element };

export type route = {
  path?: string;
  element: JSX.Element;
  index?: boolean;
  children?: routeChildren[];
};

export type routeType = {
  path?: string;
  index?: boolean;
  element: JSX.Element;
  children?: route[];
};

export type routesType = routeType[];

/* Context Types */
export type initialStateType = {
  isScaled: boolean;
};

export type actionType = {
  type: string;
  payload?: boolean;
};

export type appContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<actionType>;
  handleScroll: (props: HTMLDivElement) => void;
  aboutRef: React.MutableRefObject<HTMLDivElement>;
  blogRef: React.MutableRefObject<HTMLDivElement>;
  contactRef: React.MutableRefObject<HTMLDivElement>;
  dealRef: React.MutableRefObject<HTMLDivElement>;
  fruitsRef: React.MutableRefObject<HTMLDivElement>;
  homeRef: React.MutableRefObject<HTMLDivElement>;
  serviceRef: React.MutableRefObject<HTMLDivElement>;
  subscribeRef: React.MutableRefObject<HTMLDivElement>;
};

/* Intersection Observer(IO) Types */
export type IOOptionsType = {
  root: null;
  rootMargin: string;
  threshold: number;
};

export type IOEntryType = {
  isIntersecting: boolean;
};

/* Section Component Types */
export type BlogType = {
  id: number;
  image: string;
  datePublished: string;
  author: string;
  comments: number;
  title: string;
  description: string;
};

export type BlogsType = {
  key: string;
  blog: BlogType;
};

export type DealType = {
  id: number;
  time: string;
  count: number;
};

export type DealsType = {
  key: string;
  deal: DealType;
};

export type FruitType = {
  id: number;
  image: string;
  name: string;
  stars: number;
  price: number;
};

export type FruitsType = {
  key: string;
  fruit: FruitType;
};

export type ServiceType = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export type ServicesType = {
  key: string;
  service: ServiceType;
};

/* Miscellaneous Types */
export type children = {
  children: React.ReactNode;
};

export type ImageType = {
  name: string;
  altText: string;
  className?: string;
  width?: string;
  height?: string;
  onClick?: React.Dispatch<actionType>;
};

export type IsActiveType = {
  isActive: boolean;
};

export type HeadingType = {
  heading: string;
};
