import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import Mobile from "../pages/Products/Mobile";
import Products from "../pages/Products/Products";
import Laptop from "../pages/Services/Laptop";
import Services from "../pages/Services/Services";

export const NavRoutes = [
  {
    title: "Home",
    path: "/home",
    cName: "dropdown-link",
    name: "home",
    component: Home,
    subRoutes: [],
  },
  {
    title: "Products",
    path: "/products",
    cName: "dropdown-link",
    component: Products,
    subRoutes: [
      {
        title: "Laptop",
        path: "/products/laptop",
        cName: "dropdown-link",
        name: "laptop",
        component: null,
      },
      {
        title: "Mobile",
        path: "/mobile",
        cName: "dropdown-link",
        name: "mobile",
        component: Mobile,
      },
      {
        title: "Desktop",
        path: "/desktop",
        cName: "dropdown-link",
        name: "desktop",
        component: null,
      },
    ],
    name: "product",
  },
  {
    title: "AboutUs",
    path: "/about",
    cName: "dropdown-link",
    name: "aboutUs",
    component: AboutUs,
    subRoutes: [],
  },
  {
    title: "ContactUs",
    path: "/contact",
    cName: "dropdown-link",
    name: "contactUs",
    component: ContactUs,
    subRoutes: [],
  },
  {
    title: "Services",
    path: "/services",
    cName: "dropdown-link",
    name: "services",
    component: Services,
    subRoutes: [
      {
        title: "Mobile",
        path: "/services/mobile",
        cName: "dropdown-link",
        name: "mobile",
        component: null,
      },
      {
        title: "Laptop",
        path: "/services/laptop",
        cName: "dropdown-link",
        name: "laptop",
        component: Laptop,
      },

      {
        title: "Desktop",
        path: "/services/desktop",
        cName: "dropdown-link",
        name: "desktop",
        component: null,
      },
    ],
  },
];
