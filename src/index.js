import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/calendar.css';
import './styles/styles.css';

import Calendar from './calendar';
import CalendarView from './calendar-view';

const input = document.querySelector('[type="date"]');
input.type = 'text';
input.placeholder = 'год/месяц/день';

const calendar = new Calendar();
const view = new CalendarView(
    calendar,
    document.querySelector('#root'),
    ({year, month, day}) => input.value = `${year}/${month + 1}/${day}`
);
