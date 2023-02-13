import './App.css';
import React, { useState } from "react";
import Calendar from "./Component/Calendar";

function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());

  return (
    <div className="App">
      <Calendar
        year={year}
        month={month}
        date={date}
      ></Calendar>
    </div>
  );
}

export default App;
