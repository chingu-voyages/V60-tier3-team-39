import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export function MyDatePicker() {
  const [selected, setSelected] = useState<Date>();

  // function handleCalSelect ()

  return (
    <DayPicker
      mode="single"
      navLayout="around"
      captionLayout="dropdown"
      showOutsideDays
      animate
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}
