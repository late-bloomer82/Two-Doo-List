import webIcon from './images/webIcon.jpg';
import homeIcon from './images/home.svg';
import todayIcon from './images/calendar-today.svg';
import weekIcon from './images/calendar-week.svg';
import priorityIconGreen from './images/priorityIconGreen.svg';
import priorityIconYellow from './images/priorityIconYellow.svg';
import priorityIconRed from './images/priorityIconRed.svg';
import priorityIconDarkRed from './images/priorityIconDarkRed.svg';
import checkIcon from './images/check-circle.svg';
import dotsIcon from './images/dots-horizontal.svg';
import completedCheck from './images/check-completed.svg'
import closeIcon from './images/close.svg';
import './styles.css';
import { mainPageContent } from './dom';

export{ closeIcon,webIcon,homeIcon,todayIcon,weekIcon,priorityIconGreen,priorityIconYellow,priorityIconRed, priorityIconDarkRed,checkIcon,dotsIcon,completedCheck}

document.addEventListener('DOMContentLoaded', mainPageContent);
