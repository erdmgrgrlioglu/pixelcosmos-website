import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Navbar.module.scss";

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <div className={classes.dropdownItem}>
        <div
          className={classes.text}
          onClick={() => {
            setActive(false);
            navigate("");
          }}
        >
          <p>{"Pixel Cosmos"}</p>
        </div>
        <div className={classes.menu}>
          <div
            onClick={() => {
              setActive(!isActive);
            }}
            className={`${classes.container} ${
              isActive ? classes.change : null
            }`}
          >
            <div className={classes.bar1}></div>
            <div className={classes.bar2}></div>
            <div className={classes.bar3}></div>
          </div>
        </div>
      </div>
      <div className={isActive ? classes.dropdown.open : classes.dropdown}>
        <div
          className={classes.dropdownItem}
          onClick={() => {
            navigate("/about");
            setActive(false);
          }}
        >
          <p>{"About"}</p>
        </div>
        <div
          className={classes.dropdownItem}
          onClick={() => {
            setActive(false);
            navigate("/projects");
          }}
        >
          <p>{"Projects"}</p>
        </div>
      </div>
    </header>
  );
}
