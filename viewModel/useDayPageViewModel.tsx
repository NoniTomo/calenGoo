import { useDateModel } from "@/model/DateModel";
import { useEventModel } from "@/model/EventModel";

export const useDayPageViewModel = () => {
  const dateModel = useDateModel();
  const eventModel = useEventModel();

  const startOfDay = new Date(dateModel.day);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(dateModel.day);
  endOfDay.setHours(23, 59, 59, 999);

  const groupEventsByHour = () => {
    const groupedEvents: Record<number, any[]> = {};

    eventModel.value?.forEach((event) => {
      const eventStart = new Date(event.startDate);
      const eventHour = eventStart.getHours();

      if (eventStart >= startOfDay && eventStart <= endOfDay) {
        if (!groupedEvents[eventHour]) {
          groupedEvents[eventHour] = [];
        }
        groupedEvents[eventHour].push(event);
      }
    });

    return groupedEvents;
  };
  return {
    state: {
      day: dateModel.day.getUTCDate(),
      eventsByHour: groupEventsByHour(),
    },
    functions: { next: dateModel.nextDay, prev: dateModel.prevDay },
  };
};
