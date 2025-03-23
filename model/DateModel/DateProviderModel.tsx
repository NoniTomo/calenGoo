import React from "react";

import { DateContext } from "./DateContext";

export interface DateProviderModelProps {
  children: React.ReactNode;
}

export function DateProviderModel({ children }: DateProviderModelProps) {
  const [day, setDay] = React.useState<Date>(new Date());
  const [month, setMonth] = React.useState<number>(new Date().getMonth()); // 0-11
  const [week, setWeek] = React.useState<number>(getWeekOfMonth(new Date())); // 0-5/6

  function getWeekOfMonth(date: Date): number {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDayOfWeek = firstDayOfMonth.getDay();

    return Math.floor((date.getDate() - 1 + firstDayOfWeek) / 7);
  }

  const nextDay = () => {
    const tomorrow = new Date(day);
    tomorrow.setDate(day.getDate() + 1);
    setDay(tomorrow);
    setMonth(tomorrow.getMonth());
    setWeek(getWeekOfMonth(tomorrow));
  };

  const nextMonth = () => {
    const nextMonthDate = new Date(day);
    nextMonthDate.setMonth(day.getMonth() + 1);
    setDay(nextMonthDate);
    setMonth(nextMonthDate.getMonth());
    setWeek(getWeekOfMonth(nextMonthDate));
  };

  const nextWeek = () => {
    const nextWeekDate = new Date(day);
    nextWeekDate.setDate(day.getDate() + 7);
    setDay(nextWeekDate);
    setMonth(nextWeekDate.getMonth());
    setWeek(getWeekOfMonth(nextWeekDate));
  };

  const prevDay = () => {
    const yesterday = new Date(day);
    yesterday.setDate(day.getDate() - 1);
    setDay(yesterday);
    setMonth(yesterday.getMonth());
    setWeek(getWeekOfMonth(yesterday));
  };

  const prevMonth = () => {
    const prevMonthDate = new Date(day);
    prevMonthDate.setMonth(day.getMonth() - 1);
    setDay(prevMonthDate);
    setMonth(prevMonthDate.getMonth());
    setWeek(getWeekOfMonth(prevMonthDate));
  };

  const prevWeek = () => {
    const prevWeekDate = new Date(day);
    prevWeekDate.setDate(day.getDate() - 7);
    setDay(prevWeekDate);
    setMonth(prevWeekDate.getMonth());
    setWeek(getWeekOfMonth(prevWeekDate));
  };

  const getMonthDates = (): Date[] => {
    const year = day.getFullYear();
    const monthIndex = day.getMonth();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    const dates: Date[] = [];

    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(new Date(year, monthIndex, i));
    }

    return dates;
  };

  const getWeekDates = (): Date[] => {
    const currentDate = new Date(day);
    const currentDay = currentDate.getDay();
    const dates: Date[] = [];

    const firstDayOfWeek = new Date(currentDate);
    firstDayOfWeek.setDate(currentDate.getDate() - currentDay);

    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDayOfWeek);
      date.setDate(firstDayOfWeek.getDate() + i);
      dates.push(date);
    }

    return dates;
  };

  const value = React.useMemo(
    () => ({
      day,
      week,
      month,
      nextDay,
      nextMonth,
      nextWeek,
      prevDay,
      prevMonth,
      prevWeek,
      getMonthDates,
      getWeekDates,
    }),
    [day, week, month]
  );

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
}
