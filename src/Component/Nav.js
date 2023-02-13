import React, { useState, useEffect } from "react";

function Nav(props) {
  const [prevMonth, setPrevMonth] = useState(0);
  const [nextMonth, setNextMonth] = useState(0);
  useEffect(() => {
    setPrevMonth(props.month - 1);
    setNextMonth(props.month + 1);
  }, [props.month]);

  return (
    <div>
      <div className="dateDiv">
        <span
          onClick={() => {
            if (prevMonth === 11) {
              props.changeMonth(props.year - 1, prevMonth);
            } else {
              props.changeMonth(props.year, prevMonth);
            }
          }}
        >
          {prevMonth === -1 ? setPrevMonth(11) : prevMonth + 1}월
        </span>
        <span>
          {props.year}년 {props.month + 1}월 {props.date}일
        </span>
        <span
          onClick={() => {
            if (nextMonth === 0) {
              props.changeMonth(props.year + 1, nextMonth);
            } else {
              props.changeMonth(props.year, nextMonth);
            }
          }}
        >
          {nextMonth === 12 ? setNextMonth(0) : nextMonth + 1}월
        </span>
      </div>
    </div>
  );
}

export default Nav;
