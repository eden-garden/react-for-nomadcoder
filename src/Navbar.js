import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import Button from "./Button.js";

function Navbar({text}){
  return (
    <nav className={styles.navbar}>
      <Button text={"I am Navbar"} />
      <Button text={"I am Navbar"} />
      <Button text={"I am Navbar"} />
      <Button text={"I am Navbar"} />
      <Button text={"I am Navbar"} />
    </nav>
  );
}
export default Navbar;

Button.propTypes = {
  text : PropTypes.string.isRequired,
}
