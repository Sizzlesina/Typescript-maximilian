/** @format */

{/* prettier-ignore */ }

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

@ How to create the provider of the context in typesafe way/
++ Example:
type TimersContextProviderProps = {
  children: ReactNode;
};
function TimersContextProvider({ children }: TimersContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {},
    startTimers() {},
    stopTimers() {},
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
export default TimersContextProvider;

@ How to use the context api?;
- Create our own custom hook and then use it whenever we need

function useTimersContext(){
  const context = useContext(TimersContext);
  if(context ===null) throw new Error("TimersContext is null - that should not be the case!");
  return context;
}
export (TimersContextProvider,useTimersContext);

!HINT: Now we can use the context whenever we need it insisde an component
*/
