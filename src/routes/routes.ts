import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyPage01 = lazy(() => import("../01-lazyload/pages/LazyPage01"));
const LazyPage02 = lazy(() => import("../01-lazyload/pages/LazyPage02"));
const LazyPage03 = lazy(() => import("../01-lazyload/pages/LazyPage03"));

export const routes: Route[] = [
  {
    to: "/lazy-01",
    path: "lazy-01",
    Component: LazyPage01,
    name: "Lazy 01",
  },
  {
    to: "/lazy-02",
    path: "lazy-02",
    Component: LazyPage02,
    name: "Lazy 02",
  },
  {
    to: "/lazy-03",
    path: "lazy-03",
    Component: LazyPage03,
    name: "Lazy 03",
  },
];
