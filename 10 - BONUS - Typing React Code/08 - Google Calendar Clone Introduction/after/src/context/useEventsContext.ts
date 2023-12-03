import { useContext } from "react";
import { Context } from "./Events";

export const EVENT_COLORS = ["red", "green", "blue"] as const;

export const useEventsContext = () => {
  const context = useContext(Context);
  if (context == null) {
    throw new Error("useEventsContext must be used within an EventsProvider");
  }
  return context;
};
