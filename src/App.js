import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Products from "./pages/Products/Products";
import ContactUs from "./pages/ContactUs/ContactUs";
import Services from "./pages/Services/Services";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import { NavRoutes } from "./components/NavRoutes";

const App = () => {
  let routes = [];
  NavRoutes.map((route) => {
    routes.push(route);
    routes = routes.concat(route.subRoutes);
  });
  console.log("routes", routes);
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <MainHeader />

          <Routes>
            {routes.map((r, i) => {
              return (
                <Route
                  exact
                  path={r.path}
                  element={<r.component></r.component>}
                />
              );
            })}
            {/* <Route exact path="/" element={<Home />} />

            <Route path="/about" element={<AboutUs />} />

            <Route path="/contact" element={<ContactUs />} />

            <Route path="/products" exact element={<Products />} />
            <Route path="/services" exact element={<Services />} /> */}
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
