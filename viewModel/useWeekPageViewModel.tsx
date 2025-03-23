import { useDateModel } from "@/model/DateModel";
import { useEventModel } from "@/model/EventModel";

interface EnhancedDate extends Date {
  day: number;
}

export const useWeekPageViewModel = () => {
  const dateModel = useDateModel();
  const eventModel = useEventModel();

  const groupEventsByDayAndHour = () => {
    const groupedEvents: Record<number, Record<number, any[]>> = {};

    eventModel.value?.forEach((event) => {
      const eventDate = new Date(event.startDate);
      const eventDay = eventDate.getDate();
      const eventHour = eventDate.getHours();

      if (!groupedEvents[eventDay]) {
        groupedEvents[eventDay] = {};
      }
      if (!groupedEvents[eventDay][eventHour]) {
        groupedEvents[eventDay][eventHour] = [];
      }

      groupedEvents[eventDay][eventHour].push(event);
    });

    return groupedEvents;
  };

  const getFirstDayOfWeek = (date: Date) => {
    const dayOfWeek = date.getDay();
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + diff);
  };

  const getWeekDates = (): (EnhancedDate | null)[] => {
    const weekDates = dateModel.getWeekDates();

    return weekDates.map((date) => {
      const enhancedDate = date as EnhancedDate;
      enhancedDate.day = date.getDate();
      return enhancedDate;
    });
  };

  return {
    state: {
      week: getWeekDates(),
      eventsByDayAndHour: groupEventsByDayAndHour(),
      currentDay: dateModel.day,
      currentMonth: dateModel.month,
    },
    functions: {
      next: dateModel.nextWeek,
      prev: dateModel.prevWeek,
      getWeekDates,
    },
  };
};
