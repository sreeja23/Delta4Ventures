import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <ul>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
        <div className={classes.row}>
          {/* col4 */}
          <div className={classes.col}>
            <p className={classes.colSM}>
              &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved
              | Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
