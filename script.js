const meme = document.querySelector('#meme-content img');

// Generate the calendar
const calendar = document.querySelector('#calendar');
const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// Add days of the week
daysOfWeek.forEach((day) => {
  const dayCell = document.createElement('div');
  dayCell.textContent = day;
  dayCell.classList.add('days');
  calendar.appendChild(dayCell);
});

// Get December 1st and determine blank cells
const decemberFirst = new Date(2025, 11, 1);
const firstDayOfWeek = decemberFirst.getDay();
for (let i = 0; i < firstDayOfWeek; i++) {
  const blankCell = document.createElement('div');
  calendar.appendChild(blankCell);
}

// Get today's date for styling
const today = new Date().getDate();

// Populate the calendar with days
for (let day = 1; day <= 25; day++) {
  const dayCell = document.createElement('div');
  dayCell.textContent = day;

  if (day === today) {
    dayCell.classList.add('today');
    meme.setAttribute('src', `memes/${today}.png`);
  } else if (day < today) {
    dayCell.classList.add('past');
  } else {
    dayCell.classList.add('eachDay');
  }
gi
  calendar.appendChild(dayCell);
}

// Handle click to reveal the meme
const presentContainer = document.querySelector('#present-container');
const memeContent = document.querySelector('#meme-content');

presentContainer.addEventListener('pointerdown', () => {
  setTimeout(() => {
    memeContent.classList.remove('hidden');
  }, 250);
});

const canvas = document.querySelector('canvas');
canvas.addEventListener('pointerdown', (e) => {
  canvas.style.pointerEvents = 'none';
});
