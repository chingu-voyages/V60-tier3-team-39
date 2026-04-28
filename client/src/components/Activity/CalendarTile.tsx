import Calendar from "react-calendar";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export function MyDatePicker() {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      navLayout="around"
      captionLayout="dropdown"
      showOutsideDays
      animate
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}

export function MyCalendar() {
  return <Calendar calendarType="gregory" />;
}
