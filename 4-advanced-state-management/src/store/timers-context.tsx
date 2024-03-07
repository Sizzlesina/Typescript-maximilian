/** @format */

import { ReactNode, createContext, useContext } from "react";
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

function useTimersContext() {
  const context = useContext(TimersContext);
  if (context == null)
    throw new Error("TimersContext is null - that should not be the case!");
  return context;
}
export { TimersContextProvider, useTimersContext };
