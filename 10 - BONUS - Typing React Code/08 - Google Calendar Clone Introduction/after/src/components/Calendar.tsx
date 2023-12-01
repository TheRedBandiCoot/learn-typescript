import {
    addMonths,
  eachDayOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  isBefore,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { useMemo, useState } from "react";
import { formatDate } from "../utils/formatDate";
import { cc } from "../utils/cc";

export default function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const calenderDays = useMemo(() => {
    const firstWeekStart = startOfWeek(startOfMonth(selectedMonth));
    const lastWeekend = endOfWeek(endOfMonth(selectedMonth));
    return eachDayOfInterval({ start: firstWeekStart, end: lastWeekend });
  }, [selectedMonth]);

  return (
    <div className="calendar">
      <div className="header">
        <button className="btn" onClick={()=> setSelectedMonth(new Date())}>Today</button>
        <div>
          <button className="month-change-btn" onClick={()=>setSelectedMonth(m=> subMonths(m,1))}>&lt;</button>
          <button className="month-change-btn" onClick={()=>setSelectedMonth(m=> addMonths(m,1))}>&gt;</button>
        </div>
        <span className="month-title">{formatDate(selectedMonth,{month:"long",year:"numeric"})}</span>
      </div>
      <div className="days">
        {calenderDays.map((day, index) => (
          <CalendarDays
            key={day.getTime()}
            day={day}
            showWeekName={index < 7}
            selectedMonth={selectedMonth}
          />
        ))}
      </div>
    </div>
  );
}

type CalendarDaysProps = {
  day: Date;
  showWeekName: boolean;
  selectedMonth: Date;
};

function CalendarDays({ day, showWeekName, selectedMonth }: CalendarDaysProps) {
  return (
    <div
      className={cc(
        "day",
        !isSameMonth(day, selectedMonth) && "non-month-day",
        isBefore(endOfDay(day), new Date()) && "old-month-day"
      )}
    >
      <div className="day-header">
        {showWeekName && (
          <div className="week-name">
            {formatDate(day, { weekday: "short" })}
          </div>
        )}
        <div className={cc("day-number", isToday(day) && "today")}>
          {formatDate(day, { day: "numeric" })}
        </div>
        <button className="add-event-btn">+</button>
      </div>
      {/* <div className="events">
              <button className="all-day-event blue event">
                <div className="event-name">Short</div>
              </button>
              <button className="all-day-event green event">
                <div className="event-name">
                  Long Event Name That Just Keeps Going
                </div>
              </button>
              <button className="event">
                <div className="color-dot blue"></div>
                <div className="event-time">7am</div>
                <div className="event-name">Event Name</div>
              </button>
            </div> */}
    </div>
  );
}