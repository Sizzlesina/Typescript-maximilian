/** @format */

import { NavLink } from "react-router-dom";
import Button from "../Ui/Button";
import { useState } from "react";
import UpcomingSession from "../Sessions/UpcomingSession";

function MainHeader() {
  const [upcomingSessionVisible, setUpcomingSessionVisible] = useState(false);

  function showUpcomingSession() {
    setUpcomingSessionVisible(true);
  }

  function hideUpcomingSession() {
    setUpcomingSessionVisible(false);
  }

  return (
    <>
      {upcomingSessionVisible && (
        <UpcomingSession onClose={hideUpcomingSession} />
      )}
      <header id='main-header'>
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "active" : "")}
                end>
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/sessions"}
                className={({ isActive }) => (isActive ? "active" : "")}>
                Browse Sessions
              </NavLink>
            </li>
            <li>
              <Button onClick={showUpcomingSession}>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
