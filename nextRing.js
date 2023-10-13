const lessons = [
  {
    "start": "07:30",
    "end": "8:15"
  },
  {
    "start": "08:25",
    "end": "9:10"
  },
  {
    "start": "09:20",
    "end": "10:05"
  },
  {
    "start": "10:20",
    "end": "11:05"
  },
  {
    "start": "11:15",
    "end": "12:00"
  },
  {
    "start": "12:10",
    "end": "12:55"
  },
  {
    "start": "13:05",
    "end": "13:50"
  },
  {
    "start": "14:00",
    "end": "14:45"
  },
  {
    "start": "14:55",
    "end": "15:40"
  },
  {
    "start": "15:50",
    "end": "16:35"
  }
];

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function isCorrectTimeOrder(time1, time2) {
  // Parse the time strings into Date objects for comparison
  const date1 = new Date(`1970-01-01T${time1}:00`);
  const date2 = new Date(`1970-01-01T${time2}:00`);

  // Compare the two Date objects
  if (date1 < date2) {
    return true; // time1 is before time2
  } else {
    return false; // time1 is equal to or after time2
  }
}

function getNextRing() {
  // Get current time
  const currTime = getCurrentTime();

  // Loop over times and find the first time that is after current time
  for (const lesson of lessons) {
    if (isCorrectTimeOrder(currTime, lesson.start)) {
      return { time: lesson.start, type: "start" };
    }
    else if (isCorrectTimeOrder(currTime, lesson.end)) {
      return { time: lesson.end, type: "end" };
    } 
  }

  return { time: "", type: "free"};

}

const nextRing = getNextRing();

// console.log(nextRing.time);

const widget = new ListWidget();

let mainCol = widget.addStack();

let text = mainCol.addText(`${nextRing.time || "Freedom"}`);
  text.color = new Color('#ffffff') // white

Script.setWidget(widget);