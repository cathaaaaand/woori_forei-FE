import moment from 'moment';
import React, { useState } from 'react';
import { Calendar as CustomCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useRecoilState } from 'recoil';
import * as St from './style';
import { dateState } from 'recoil/dataState';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const ChooseCalendar = () => {
  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));
  const [date, setDate] = useState<Value>(today);
  const [dateSave, setDateSave] = useRecoilState<string[]>(dateState);
  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
    if (newDate && Array.isArray(newDate)) {
      const newDate0 =
        newDate[0] !== null
          ? new Date(
              newDate[0].getTime() - newDate[0].getTimezoneOffset() * 90000,
            )
          : null;
      const newDate1 =
        newDate[1] !== null
          ? new Date(newDate[1].getTime() - newDate[1].getTimezoneOffset())
          : null;
      const dateTrans = [
        `${newDate0?.toISOString()}`,
        `${newDate1?.toISOString()}`,
      ];
      setDateSave(dateTrans);
    }
  };
  const dateString = Array.isArray(date)
    ? dateSave[0].slice(0, 10) + '~' + dateSave[1].slice(0, 10)
    : moment(`${today}`).format('YYYY-MM-DD');
  return (
    <>
      <St.DateShow>{dateString}</St.DateShow>
      <St.CalendarWrapper>
        <CustomCalendar
          value={date}
          showDoubleView={true}
          minDate={tomorrow}
          onChange={handleDateChange}
          formatDay={(locale, date) => moment(date).format('D')}
          formatYear={(locale, date) => moment(date).format('YYYY')}
          formatMonthYear={(locale, date) => moment(date).format('YYYY. MM')}
          calendarType="gregory"
          next2Label={null}
          prev2Label={null}
          minDetail="year"
          selectRange={true}
        />
      </St.CalendarWrapper>
    </>
  );
};
interface SimpleCalendarType {
  programDate?: Array<Date>;
}
export const SimpleCalendar = (props: SimpleCalendarType) => {
  const { programDate } = props;
  const today = new Date();
  const [date, setDate] = useState<Value>(today);
  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
  };

  return (
    <>
      <St.CalendarSimpleWrapper>
        <CustomCalendar
          value={date}
          minDate={new Date()}
          onChange={handleDateChange}
          formatDay={(locale, date) => moment(date).format('D')}
          formatYear={(locale, date) => moment(date).format('YYYY')}
          formatMonthYear={(locale, date) => moment(date).format('YYYY. MM')}
          calendarType="gregory"
          next2Label={null}
          prev2Label={null}
          minDetail="year"
          tileClassName={({ date }) => {
            if (
              programDate &&
              moment(programDate[0]).format('YYYY-MM-DD') <=
                moment(date).format('YYYY-MM-DD') &&
              moment(programDate[1]).format('YYYY-MM-DD') >
                moment(date).format('YYYY-MM-DD')
            ) {
              return 'highlight';
            }
          }}
        />
      </St.CalendarSimpleWrapper>
    </>
  );
};
