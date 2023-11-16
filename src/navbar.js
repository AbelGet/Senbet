import { NavLink } from "react-router-dom";
import logo from "./images/logo semit giyorgis final.png";

const NavBar = () => {
  return (
    <div className="allNav">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="" className="logopic" />
        </NavLink>
      </div>
      <div className="links">
        <NavLink exact to="/" className="link">
          ዋና ገጽ
        </NavLink>
        <NavLink to="/QnA" className="link">
          ጥያቄ እና መልስ
        </NavLink>
        <NavLink to="/contact" className="link">
          ያግኙን
        </NavLink>
        <NavLink to="/about" className="link">
          ስለ እኛ
        </NavLink>
        <NavLink to="/login" className="link">
          ለአባላት
        </NavLink>
      </div>
      <div></div>
    </div>
  );
};

export default NavBar;
