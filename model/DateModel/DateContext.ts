import React from "react";

export interface DateContextParams {
  day: Date;
  week: number;
  month: number;
  nextDay: () => void;
  nextMonth: () => void;
  nextWeek: () => void;
  prevDay: () => void;
  prevMonth: () => void;
  prevWeek: () => void;
  getMonthDates: () => Date[];
  getWeekDates: () => Date[];
}

export const DateContext = React.createContext<DateContextParams>({
  day: undefined!,
  week: undefined!,
  month: undefined!,
  nextDay: () => {},
  nextMonth: () => {},
  nextWeek: () => {},
  prevDay: () => {},
  prevMonth: () => {},
  prevWeek: () => {},
  getMonthDates: () => [] as Date[],
  getWeekDates: () => [] as Date[],
});
