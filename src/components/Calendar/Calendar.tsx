import moment from 'moment';
import React, { useState } from 'react';
import { Calendar as CustomCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as St from './style';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calendar = () => {
  // view로 확인한 버전과 날짜 선택 버전으로.
  // const initialValue = { startDate: '', endDate: '' };
  // const { startDate, endDate } = value;
  const today = new Date();
  const [date, setDate] = useState<Value>(today);
  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
    console.log(date);
  };
  const dateString = Array.isArray(date)
    ? date.map((item) => moment(`${item}`).format('YYYY-MM-DD')).join(' ~ ')
    : moment(`${today}`).format('YYYY-MM-DD');
  return (
    <>
      <St.DateShow>{dateString}</St.DateShow>
      <St.CalendarWrapper>
        <CustomCalendar
          value={date}
          showDoubleView={true}
          minDate={new Date()}
          onChange={handleDateChange}
          formatDay={(locale, date) => moment(date).format('D')}
          formatYear={(locale, date) => moment(date).format('YYYY')} // 네비게이션 눌렀을때 숫자 년도만 보이게
          formatMonthYear={(locale, date) => moment(date).format('YYYY. MM')} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
          calendarType="gregory" // 일요일 부터 시작
          next2Label={null} // +1년 & +10년 이동 버튼 숨기기
          prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
          minDetail="year" // 10년단위 년도 숨기기
          selectRange={true}
        />
      </St.CalendarWrapper>
    </>
  );
};
export default Calendar;
