import { NavLink, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { LazyPage01, LazyPage02, LazyPage03 } from "../pages";

export const LazyLayout = () => {
  return (
    <>
      <div>LazyLayout</div>
      <ul>
        <li>
          <NavLink to="lazy-01">Lazy 01</NavLink>
        </li>
        <li>
          <NavLink to="lazy-02">Lazy 02</NavLink>
        </li>
        <li>
          <NavLink to="lazy-03">Lazy 03</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy-01" element={<LazyPage01 />} />
        <Route path="lazy-02" element={<LazyPage02 />} />
        <Route path="lazy-03" element={<LazyPage03 />} />

        <Route path="/*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
};

export default LazyLayout;
