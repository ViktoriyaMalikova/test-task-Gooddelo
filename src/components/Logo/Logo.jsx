import "./Logo.css";
import logo from "../../images/logo.svg";

function Logo() {
  return (
    <section className="logo">
      <img className="logo__img" src={logo} alt="Логотип" />
    </section>
  );
}

export default Logo;
