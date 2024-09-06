
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const ReactDatePicker = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange; 

  const importantDates = ["09/06/2024", "09/17/2024"];
  
  const highlightImportantDates = importantDates.map(
    (dateString) => new Date(dateString)
  );

  return (
    <div className="p-10 m-10 text-2xl bg-slate-600 rounded-lg shadow-lg">
      <h1 className="mb-4">React Date Picker with Range</h1>
      <h3>Highlighted Dates are holidays</h3>

      <DatePicker
        selected={startDate}
        onChange={(update) => {
          setDateRange(update); // Update both start and end date in the state
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange // Enable range selection
        dateFormat="MM/dd/yyyy"
        className="p-2 rounded text-center text-xs m-10"
        highlightDates={highlightImportantDates} // Highlight important dates
        isClearable
        placeholderText="Select a date range"
      />
    </div>
  );
};

export default ReactDatePicker;
