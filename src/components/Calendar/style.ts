import { styled } from 'styled-components';

export const CalendarWrapper = styled.div`
  margin-top: 30px;

  .react-calendar {
    border: none;
  }
  .react-calendar--doubleView {
    border: 1px solid white;
  }
  .react-calendar__viewContainer {
    gap: 25px;
    margin: -1em;
  }

  .react-calendar__navigation {
    align-items: center;
  }
  .react-calendar__navigation__arrow {
    border: 1px solid #b2b2b2;
    padding: 0;
    width: 32px;
    height: 32px;
    font-size: 19pt;
  }
  .react-calendar__navigation__label {
    font-size: 22pt;
    font-weight: bold;
  }
  .react-calendar__navigation__label__divider {
    color: transparent;
    margin: auto 100px auto 100px;
  }
  .react-calendar__navigation button {
    min-width: 32px;
  }
  .react-calendar__navigation button:disabled {
    background: white;
  }
  .react-calendar__navigation button:enabled:focus {
    background: white;
  }
  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }

  .react-calendar__tile {
    border: 5px solid white;
  }

  .react-calendar__tile--now {
    background: white;
    border: 5px solid white;
    border-radius: 10px;
    color: black;
  }
  .react-calendar__tile--now:hover {
    background: white;
    border: 5px solid white;
    border-radius: 10px;
    color: black;
  }

  .react-calendar__tile--rangeStart {
    background: #0084e3 !important;
    border: 5px solid white !important;
    border-radius: 10px;
    color: white !important;
  }
  .react-calendar__tile--rangeEnd {
    background: #0084e3 !important;
    border: 5px solid white !important;
    border-radius: 10px;
    color: white !important;
  }

  .react-calendar__tile:disabled {
    border: 5px solid white;
    background: none;
  }

  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    border: 5px solid white;
    border-radius: 10px;
  }
  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile--active {
    border: 5px solid #f0f0f0;
    background: #f0f0f0;
    color: black;
  }
`;
export const CalendarSimpleWrapper = styled.div`
  margin-top: 30px;
  border: 26px solid white;
  border-radius: 10px;
  .react-calendar {
    border: none;
  }
  .react-calendar--doubleView {
    border: 1px solid white;
  }
  .react-calendar__viewContainer {
    gap: 25px;
    margin: -1em;
  }

  .react-calendar__navigation {
    align-items: center;
    padding-bottom: 10px;
  }
  .react-calendar__navigation__arrow {
    border: 1px solid #b2b2b2;
    padding: 0;
    width: 32px;
    height: 32px;
    font-size: 19pt;
  }
  .react-calendar__navigation__label {
    font-size: 22pt;
    span {
      font-weight: bold;
    }
  }
  .react-calendar__navigation__label__divider {
    color: transparent;
    margin: auto 100px auto 100px;
  }
  .react-calendar__navigation button {
    min-width: 32px;
  }
  .react-calendar__navigation button:disabled {
    background: white;
  }
  .react-calendar__navigation button:enabled:focus {
    background: white;
  }
  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
    font-size: 20px;
  }

  .react-calendar__tile {
    border: 5px solid white;
  }

  .react-calendar__tile--now {
    background: white;
    border: 5px solid white;
    border-radius: 10px;
    color: black;
  }
  .react-calendar__tile--now:hover {
    background: white;
    border: 5px solid white;
    border-radius: 10px;
    color: black;
  }

  .react-calendar__tile--rangeStart {
    background: #0084e3 !important;
    border: 5px solid white !important;
    border-radius: 10px;
    color: white !important;
  }
  .react-calendar__tile--rangeEnd {
    background: #0084e3 !important;
    border: 5px solid white !important;
    border-radius: 10px;
    color: white !important;
  }

  .react-calendar__tile:disabled {
    border: 5px solid white;
    background: none;
  }

  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    border: 5px solid white;
    border-radius: 10px;
  }
  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile--active {
    border: 5px solid #f0f0f0;
    background: #f0f0f0;
    color: black;
  }
  .highlight {
    background: #30a8ff;
    border: 5px solid #30a8ff;
  }
`;
export const DateShow = styled.div`
  font-size: 22pt;
  margin: 50px;
`;
