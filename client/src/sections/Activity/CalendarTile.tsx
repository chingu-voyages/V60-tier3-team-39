// import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface MyDatePickerProps {
  selectedDate: Date;
  updateDate: (newDate: Date) => void;
}

export function MyDatePicker({ 
  selectedDate, 
  updateDate }: MyDatePickerProps) {
  // const [selected, setSelected] = useState<Date>();

  // function handleCalSelect ()

  return (
    <DayPicker
      mode="single"
      navLayout="around"
      captionLayout="dropdown"
      showOutsideDays
      animate
      selected={selectedDate}
      onSelect={(date) => {
        if (date) updateDate(date); 
      }}
      required={false}
      footer={
        selectedDate ? `Selected: ${selectedDate.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}
