import React from "react";
import "../Style/calendar.css";

function CalendarDate(props) {
  let dateArr = [];
  let datePrint = [];
  const startday = new Date(props.year, props.month, 1).getDay();
  const endday = new Date(props.year, props.month + 1, 0).getDay();
  const fulldate = new Date(props.year, props.month + 1, 0).getDate();
  let week = 0;

  let todayYear = new Date().getFullYear();
  let todayMonth = new Date().getMonth();
  let todayDate = new Date().getDate();
  // ~ 1일 까지 td
  for (let i = 0; i < startday; i++) {
    dateArr.push(<td key={"prev" + i}></td>);
  }
  // 1일 ~ 각 달의 마지막 날까지 td
  for (let i = 0; i < fulldate; i++) {
    if (
      props.year === todayYear &&
      props.month === todayMonth &&
      i + 1 === todayDate
    ) {
      // 현재 날짜로 '오늘'인 날
      dateArr.push(
        <td
          key={"date" + (i + 1)}
          className={"date date-" + (i + 1) + " date-today"}
        >
          {i + 1}
          <br />
          <div></div>
        </td>
      );
    } else if (i + 1 === props.date) {
      // 클릭한 날
      dateArr.push(
        <td
          key={"date" + (i + 1)}
          className={"date date-" + (i + 1) + " date-check"}
        >
          {i + 1}
          <br />
          <div></div>
        </td>
      );
    } else {
      // 그 외의 모든 날
      dateArr.push(
        <td
          key={"date" + (i + 1)}
          className={"date date-" + (i + 1)}
        >
          {i + 1}
          <br />
          <div></div>
        </td>
      );
    }
    if (dateArr.length === 7) {
      // 한 줄(tr)이 채워지면 다음 줄로 이동
      week++;
      datePrint.push(<tr key={"week" + week}>{dateArr}</tr>);
      dateArr = [];
    }
  }
  // 각 달의 마지막 날 ~
  for (let i = 0; i < 6 - endday; i++) {
    dateArr.push(<td key={"next" + i}></td>);
    if (dateArr.length === 7) {
      datePrint.push(<tr key={week}>{dateArr}</tr>);
      dateArr = [];
    }
  }

  return <tbody>{datePrint}</tbody>;
}

export default CalendarDate;
