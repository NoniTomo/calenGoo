import { MONTH } from "@/constants/Month";
import { useDateModel } from "@/model/DateModel";
import { useEventModel } from "@/model/EventModel";

export interface EnhancedDate extends Date {
  isCurrentMonth: boolean;
  day: number;
}

export const useMonthPageViewModel = () => {
  const dateModel = useDateModel();
  const eventModel = useEventModel();

  const year = dateModel.day.getFullYear();
  const monthIndex = dateModel.month;

  // Get the first day of the month
  const firstDayOfMonth = new Date(year, monthIndex, 1);

  // Get the last day of the month
  const lastDayOfMonth = new Date(year, monthIndex + 1, 0);

  // Get day of week of the first day (0 = Sunday, 6 = Saturday)
  const firstDayOfWeek = firstDayOfMonth.getDay();

  interface EnhancedDate extends Date {
    isCurrentMonth: boolean;
    day: number;
  }

  // Функция для группировки событий по дням
  const groupEventsByDay = () => {
    const groupedEvents: Record<number, any[]> = {};

    eventModel.value?.forEach((event) => {
      const eventDate = new Date(event.startDate);
      const eventDay = eventDate.getDate();

      if (!groupedEvents[eventDay]) {
        groupedEvents[eventDay] = [];
      }

      groupedEvents[eventDay].push(event);
    });

    return groupedEvents;
  };

  // Returns a 2D array of enhanced dates, grouped by weeks
  const getWeeksDates = (): EnhancedDate[][] => {
    // Calculate the first date to display (might be from the previous month)
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(1 - firstDayOfWeek);

    // Calculate how many weeks we need to display
    const totalDays = firstDayOfWeek + lastDayOfMonth.getDate();
    const totalWeeks = Math.ceil(totalDays / 7);

    // Create a 2D array to hold the weeks and days
    const weeksArray: EnhancedDate[][] = [];

    // Fill the 2D array with dates
    for (let weekIndex = 0; weekIndex < totalWeeks; weekIndex++) {
      const week: EnhancedDate[] = [];

      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + weekIndex * 7 + dayIndex);

        // Create enhanced date object with the isCurrentMonth flag and day property
        const enhancedDate = currentDate as EnhancedDate;
        enhancedDate.isCurrentMonth = currentDate.getMonth() === monthIndex;
        enhancedDate.day = currentDate.getDate();

        week.push(enhancedDate);
      }

      weeksArray.push(week);
    }

    return weeksArray;
  };

  console.log(groupEventsByDay());
  console.log(eventModel.value);

  return {
    state: {
      month: getWeeksDates(),
      eventsByDay: groupEventsByDay(),
      monthName: MONTH[dateModel.month],
    },
    functions: {
      next: dateModel.nextMonth,
      prev: dateModel.prevMonth,
    },
  };
};
