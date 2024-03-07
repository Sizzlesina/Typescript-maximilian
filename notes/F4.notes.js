/*
@ How to create context in typescript?:
++ Example :

import { createContext } from "react";
type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};
const TimersContext = createContext<TimersContextValue | null>(null);

!HINT: In this piece of code we create a Timer type for the data in the state of the timers and a type for the states that exists in the context and a type for the methods that lives inside the context then we set a initial value for the context so we dont get an error


*/