import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface MyDatePickerProps {
  selectedDate: Date;
  updateDate: (newDate: Date) => void;
}

export function MyDatePicker({ 
  selectedDate, 
  updateDate }: MyDatePickerProps) {

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
