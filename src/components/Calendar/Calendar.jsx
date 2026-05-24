import { useEffect, useState } from "react";
import {
  CalendarPopNewCard,
  CalendarSubtitle,
  CalendarBlock,
  CalendarNav,
  CalendarMonth,
  CalendarAction,
  CalendarActions,
  CalendarSvg,
  CalendarContent,
  CalendarDaysNames,
  DayName,
  CalendarCells,
  CalendarCell,
  CalendarPeriod,
  CalendarPeriodText,
} from "./Calendar.styled.js";

const Calendar = ({ onSelectDate, initialDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  function handleSelect(day) {
    setSelectedDay(day);

    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );
    onSelectDate(selectedDate.toISOString());
  }
  function prevMonth() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
    );
  }

  function nextMonth() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
    );
  }
  useEffect(() => {
    if (initialDate) {
      const d = new Date(initialDate);
      setCurrentDate(d);
      setSelectedDay(d.getDate());
    }
  }, [initialDate]);
  return (
    <CalendarPopNewCard>
      <CalendarSubtitle>Даты</CalendarSubtitle>

      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>
            {currentDate.toLocaleString("ru-RU", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </CalendarMonth>

          <CalendarActions>
            <CalendarAction data-action="prev" onClick={prevMonth}>
              <CalendarSvg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </CalendarSvg>
            </CalendarAction>

            <CalendarAction data-action="next" onClick={nextMonth}>
              <CalendarSvg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </CalendarSvg>
            </CalendarAction>
          </CalendarActions>
        </CalendarNav>

        <CalendarContent>
          <CalendarDaysNames>
            <DayName>пн</DayName>
            <DayName>вт</DayName>
            <DayName>ср</DayName>
            <DayName>чт</DayName>
            <DayName>пт</DayName>
            <DayName $weekend>сб</DayName>
            <DayName $weekend>вс</DayName>
          </CalendarDaysNames>

          <CalendarCells>
            {(() => {
              const year = currentDate.getFullYear();
              const month = currentDate.getMonth();

              const firstDay = new Date(year, month, 1).getDay() || 7;
              const daysInMonth = new Date(year, month + 1, 0).getDate();

              const cells = [];

              for (let i = firstDay - 2; i >= 0; i--) {
                cells.push(
                  <CalendarCell key={"prev" + i} $other>
                    {" "}
                  </CalendarCell>,
                );
              }

              for (let day = 1; day <= daysInMonth; day++) {
                const date = new Date(year, month, day);
                const isWeekend = date.getDay() === 0 || date.getDay() === 6;

                cells.push(
                  <CalendarCell
                    key={day}
                    $weekend={isWeekend}
                    onClick={() => handleSelect(day)}
                    style={{
                      background: selectedDay === day ? "#565eef" : "",
                    }}
                  >
                    {day}
                  </CalendarCell>,
                );
              }

              return cells;
            })()}
          </CalendarCells>
        </CalendarContent>

        <input type="hidden" id="datepick_value" value="08.09.2023" />

        <CalendarPeriod>
          <CalendarPeriodText>
            Выберите срок исполнения{" "}
            <span>
              {selectedDay
                ? new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    selectedDay,
                  ).toLocaleDateString("ru-RU")
                : ""}
            </span>
            .
          </CalendarPeriodText>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarPopNewCard>
  );
};

export default Calendar;
