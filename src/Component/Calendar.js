import React from "react";
import CalendarDay from "./CalendarDay";
import CalendarDate from "./CalendarDate";
import "../Style/calendar.css";

function Calendar(props) {
  return (
    <div className="calendar-area">
      <table>
        <CalendarDay></CalendarDay>
        <CalendarDate
          year={props.year}
          month={props.month}
          date={props.date}
        ></CalendarDate>
      </table>
    </div>
  );
}

export default Calendar;
