import './App.css';
import React, { useState } from "react";
import Nav from "./Component/Nav";
import Calendar from "./Component/Calendar";

function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());

  return (
    <div className="App">
      <Nav
        year={year}
        month={month}
        date={date}
        changeMonth={(year, month) => {
          setYear(year);
          setMonth(month);
          setDate(1);
        }}
      ></Nav>
      <Calendar
        year={year}
        month={month}
        date={date}
        changeDate={(date) => {
          setDate(date);
        }}
      ></Calendar>
    </div>
  );
}

export default App;
