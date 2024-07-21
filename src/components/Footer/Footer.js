import React, { useState } from "react";

import {
  FaCreativeCommons,
  FaCreativeCommonsBy,
  FaCreativeCommonsNc,
  FaCreativeCommonsSa,
  FaBug,
} from "react-icons/fa";
import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>
        <FaCreativeCommons />
        <FaCreativeCommonsBy />
        <FaCreativeCommonsNc />
        <FaCreativeCommonsSa />
      </div>
      <div>
        <div className={classes.bug}>
          <FaBug size="10" />V 1 . 0 . 1
        </div>
      </div>
    </footer>
  );
}
