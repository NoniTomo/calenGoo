import React from "react";

export interface EventContextParams {
  value?: IEvent[];
  set: (events: IEvent[]) => void;
  add: (event: IEvent) => void;
}

export const EventContext = React.createContext<EventContextParams>({
  value: undefined,
  set: () => {},
  add: () => {},
});
