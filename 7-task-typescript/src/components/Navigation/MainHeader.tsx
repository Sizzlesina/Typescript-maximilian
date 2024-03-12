/** @format */

import { NavLink } from "react-router-dom";
import Button from "../Ui/Button";




function MainHeader() {
  return (
    <header id='main-header'>
      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Our Mission</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Browse Sessions</NavLink>
          </li>
          <li>
            <Button>Upcoming Sessions</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
