import { useState } from "react";
import "./App.css";

function App() {
  // the initial teamAvailability is all available
  const [teamAvailability, setTeamAvailability] = useState([...dailyTimeSlots]);

  // console.log(teamAvailability);

  return (
    <div>
      <h1>Availability Checker</h1>
    </div>
  );
}

// we want to output times where all of the team is available for a meeting

// the initial teamAvailability is all available
const teamAvailability = [true, true, true, true, true, true, true, true, true];

// template for each days timeslots
const dailyTimeSlots = [
  { id: 1, isAvailable: true, timeBlock: "9-10" },
  { id: 2, isAvailable: true, timeBlock: "10-11" },
  { id: 3, isAvailable: true, timeBlock: "11-12" },
  { id: 4, isAvailable: true, timeBlock: "12-13" },
  { id: 5, isAvailable: true, timeBlock: "13-14" },
  { id: 6, isAvailable: true, timeBlock: "14-15" },
  { id: 7, isAvailable: true, timeBlock: "15-16" },
  { id: 8, isAvailable: true, timeBlock: "16-17" },
  { id: 9, isAvailable: true, timeBlock: "17-18" },
];

// each team members individuall schedules
const DanSchedule = [
  { id: 1, isAvailable: false, timeBlock: "9-10" },
  { id: 2, isAvailable: false, timeBlock: "10-11" },
  { id: 3, isAvailable: false, timeBlock: "11-12" },
  { id: 4, isAvailable: true, timeBlock: "12-13" },
  { id: 5, isAvailable: true, timeBlock: "13-14" },
  { id: 6, isAvailable: true, timeBlock: "14-15" },
  { id: 7, isAvailable: true, timeBlock: "15-16" },
  { id: 8, isAvailable: false, timeBlock: "16-17" },
  { id: 9, isAvailable: false, timeBlock: "17-18" },
];

const WillSchedule = [
  { id: 1, isAvailable: true, timeBlock: "9-10" },
  { id: 2, isAvailable: true, timeBlock: "10-11" },
  { id: 3, isAvailable: false, timeBlock: "11-12" },
  { id: 4, isAvailable: true, timeBlock: "12-13" },
  { id: 5, isAvailable: false, timeBlock: "13-14" },
  { id: 6, isAvailable: false, timeBlock: "14-15" },
  { id: 7, isAvailable: true, timeBlock: "15-16" },
  { id: 8, isAvailable: true, timeBlock: "16-17" },
  { id: 9, isAvailable: true, timeBlock: "17-18" },
];

const StevenSchedule = [
  { id: 1, isAvailable: true, timeBlock: "9-10" },
  { id: 2, isAvailable: false, timeBlock: "10-11" },
  { id: 3, isAvailable: true, timeBlock: "11-12" },
  { id: 4, isAvailable: true, timeBlock: "12-13" },
  { id: 5, isAvailable: true, timeBlock: "13-14" },
  { id: 6, isAvailable: true, timeBlock: "14-15" },
  { id: 7, isAvailable: true, timeBlock: "15-16" },
  { id: 8, isAvailable: false, timeBlock: "16-17" },
  { id: 9, isAvailable: false, timeBlock: "17-18" },
];

// all team members and their schedules
const teamSchedule = [DanSchedule, WillSchedule, StevenSchedule];

// write a function that checks each team members availability and filter for when they are available

// const checkAvailability = (allSchedules) =>

// function to check a persons availability
// check availability of one persons schedule and return a new array of when they are available
const checkAvailability = (schedule) => {
  const isAvailable = schedule.filter(
    (timeslot) => timeslot.isAvailable === true
  );

  console.log(isAvailable);
};

// call function
// checkAvailability(StevenSchedule);

// function to check all persons 
// check all members schedules
const checkAllSchedules = (allSchedules) => {
  // for each schedule check availability
  allSchedules.map((schedule) => checkAvailability(schedule));
};

// call function
checkAllSchedules(teamSchedule);

// after all team members are checked return the updated teamAvailability

export default App;
