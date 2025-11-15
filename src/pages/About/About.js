import logo from "../../images/logo.png";

import classes from "./About.module.scss";

export default function AboutPage() {
  return (
    <div className={classes.about}>
      <img src={logo} alt="Pixel Cosmos Logo" />
      <div>Welcome to Pixel Cosmos Website</div>
    </div>
  );
}
