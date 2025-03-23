import React from "react";

import { EventContext } from "./EventContext";

export interface EventProviderModelProps {
  children: React.ReactNode;
}

export function EventProviderModel({ children }: EventProviderModelProps) {
  const [events, setEvents] = React.useState<IEvent[]>([]);

  const add = (event: IEvent) => {
    const newEvents = [...events, event];
    newEvents.sort((event1, event2) =>
      event1.startDate <= event2.startDate ? 1 : 0
    );
    setEvents([...events, event]);
  };

  const value = React.useMemo(
    () => ({ value: events, set: setEvents, add }),
    [events]
  );

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
}
