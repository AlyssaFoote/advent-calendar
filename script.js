// Dynamically adding dates to the calendar
// For each grid box, add the days of the week
// via .TextContent

const calendar = document.querySelector('#calendar');
const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

for (day of daysOfWeek) {
  const dayCell = document.createElement('div');
  dayCell.textContent = day;
  dayCell.classList.add('days');
  calendar.appendChild(dayCell);
}

const decemberFirst = new Date(2024, 11, 1);
const dayOfWeek = decemberFirst.getDay();

// Depending on which day of the week December 1st falls on,
// create that many blank number of cells in the grid

for (let index = 0; index < dayOfWeek; index++) {
  const blankCell = document.createElement('div');
  calendar.appendChild(blankCell);
}

// Get the current date for individual styling

function getTodaysDate() {
  const today = new Date().getDate();
  return today;
}

let today = getTodaysDate();

// Populate the rest of the calendar with the days of the week
for (let index = 1; index <= 25; index++) {
  const calendarCell = document.createElement('div');
  calendarCell.textContent = index;

  // Add class if the day matches today's date
  if (today === index) {
    calendarCell.classList.add('today');
  } else {
    calendarCell.classList.add('eachDay');
  }

  calendar.appendChild(calendarCell);
}
