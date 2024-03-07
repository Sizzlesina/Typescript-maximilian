/** @format */

import { useTimersContext } from "../store/timers-context.tsx";
import Button from "./UI/Button.tsx";

export default function Header() {
  const { isRunning } = useTimersContext();
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{isRunning ? "Stop" : "Start"} Timers</Button>
    </header>
  );
}
