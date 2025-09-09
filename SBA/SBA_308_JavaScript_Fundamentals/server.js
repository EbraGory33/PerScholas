// ----------------------------- PROVIDED DATA ----------------------------
// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// ---------------------------- TEST CASES ----------------------------
// The provided learner submission data.

// --------------------- BASE CASE -------------------
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-29",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

// ------------------- EDGE CASE 1: NO SUBMISSIONS -------------------
// Learner has no submissions at all
// const LearnerSubmissions = [];

// ------------------- EDGE CASE 2: MISSING ASSIGNMENT -------------------
// Learner submits only some assignments (skips one)
// const LearnerSubmissions = [
//   {
//     learner_id: 125,
//     assignment_id: 1,
//     submission: { submitted_at: "2023-01-25", score: 47 },
//   },
//   // Skips assignment_id: 2
//   {
//     learner_id: 125,
//     assignment_id: 3,
//     submission: { submitted_at: "2023-02-15", score: 480 },
//   },
// ];

// ------------------- EDGE CASE 3: LATE SUBMISSION -------------------
// Submits after the due date (should still count in your current code)
// const LearnerSubmissions = [
//   {
//     learner_id: 125,
//     assignment_id: 1,
//     submission: { submitted_at: "2023-02-01", score: 50 }, // late by 1 week
//   },
// ];

// ------------------- EDGE CASE 4: ZERO SCORES -------------------
// Learner attempts but scores 0
// const LearnerSubmissions = [
//   {
//     learner_id: 125,
//     assignment_id: 1,
//     submission: { submitted_at: "2023-01-25", score: 0 },
//   },
//   {
//     learner_id: 125,
//     assignment_id: 2,
//     submission: { submitted_at: "2023-02-20", score: 0 },
//   },
// ];

// ------------------- EDGE CASE 5: PERFECT SCORES -------------------
// const LearnerSubmissions = [
//   {
//     learner_id: 125,
//     assignment_id: 1,
//     submission: { submitted_at: "2023-01-20", score: 50 },
//   },
//   {
//     learner_id: 125,
//     assignment_id: 2,
//     submission: { submitted_at: "2023-02-10", score: 150 },
//   },
//   {
//     learner_id: 125,
//     assignment_id: 3,
//     submission: { submitted_at: "2023-02-15", score: 500 },
//   },
// ];

// ------------------- EDGE CASE 6: MULTIPLE LEARNERS -------------------
// const LearnerSubmissions = [
//   {
//     learner_id: 125,
//     assignment_id: 1,
//     submission: { submitted_at: "2023-01-25", score: 40 },
//   },
//   {
//     learner_id: 126,
//     assignment_id: 1,
//     submission: { submitted_at: "2023-01-25", score: 50 },
//   },
//   {
//     learner_id: 127,
//     assignment_id: 2,
//     submission: { submitted_at: "2023-02-20", score: 75 },
//   },
// ];

// ------------------- EDGE CASE 7: MIXED GOOD + BAD -------------------
// One learner is strong, the other is weak
// const LearnerSubmissions = [
//   {
//     learner_id: 200,
//     assignment_id: 1,
//     submission: { submitted_at: "2023-01-25", score: 50 },
//   },
//   {
//     learner_id: 200,
//     assignment_id: 2,
//     submission: { submitted_at: "2023-02-27", score: 150 },
//   },
//   {
//     learner_id: 201,
//     assignment_id: 1,
//     submission: { submitted_at: "2023-01-25", score: 10 },
//   },
//   {
//     learner_id: 201,
//     assignment_id: 2,
//     submission: { submitted_at: "2023-02-28", score: 20 },
//   },
// ];

// ---------------------------- HELPER FUNCTIONS ----------------------------
// function isEarly(submissionDate, dueDate) {
//   return new Date(submissionDate) < new Date(dueDate);
// }

// function isAssignmetLate(submissionDate, dueDate) {
//   return new Date(submissionDate) > new Date(dueDate);
// }

// function isOnTime(submissionDate, dueDate) {
//   return new Date(submissionDate) === new Date(dueDate);
// }

// function calculateScore(Score, pointsPossible) {
//   return Score / pointsPossible;
// }

// function updateAvg(Score, points_possible) {
//   return Score / points_possible;
// }

// ---------------------------- HELPER FUNCTIONS ----------------------------

// Date checks
function isEarly(submissionDate, dueDate) {
  return new Date(submissionDate) < new Date(dueDate);
}

function isLate(submissionDate, dueDate) {
  return new Date(submissionDate) > new Date(dueDate);
}

function isOnTime(submissionDate, dueDate) {
  return new Date(submissionDate).getTime() === new Date(dueDate).getTime();
}

// Score calculations
function calculateScore(score, pointsPossible) {
  return +(score / pointsPossible).toFixed(2);
}

function applyLatePenalty(score, pointsPossible) {
  let lateScore = score - pointsPossible * 0.1;
  if (lateScore < 0) lateScore = 0;
  return lateScore, 0;
}

function updateTotals(totals, score, pointsPossible) {
  totals.total_score += score;
  totals.total_points_possible += pointsPossible;
  return totals;
}

// ---------------------------- MAIN FUNCTION ----------------------------
function getLearnerData(course, ag, submissions) {
  try {
    if (course.id !== ag.course_id)
      throw new Error(
        "Assignment group does not belong to the specified course"
      );

    const learnerIds = [...new Set(submissions.map((sub) => sub.learner_id))];
    const result = [];

    for (let id of learnerIds) {
      let avg = 0.0;
      let total_Score = 0;
      let total_Points_Possible = 0;
      let assignmentScore = {};

      for (let sub of submissions) {
        const matchedAssignment = ag.assignments.find(
          (a) => a.id === sub.assignment_id
        );
        if (!matchedAssignment) continue;
        if (sub.learner_id === id) {
          let sub_score = sub.submission.score;
          let sub_points_possible = matchedAssignment.points_possible;
          let submitted_at = sub.submission.submitted_at;
          let due_at = matchedAssignment.due_at;
          if (isOnTime(submitted_at, due_at)) {
            // On-time submission: full score
            total_score += sub_score;
            total_points_possible += sub_points_possible;

            avg = updateAvg(total_score, total_points_possible);

            assignmentScore[matchedAssignment.id] = +calculateScore(
              sub_score,
              sub_points_possible
            ).toFixed(2);
          } else if (isAssignmetLate(submitted_at, due_at)) {
            // Late submission: deduct 10% of points possible
            let late_Score = applyLatePenalty(score, pointsPossible);
            // total_score += late_Score;
            total_Score = updateTotals(totals, late_Score, pointsPossible);
            total_points_possible += sub_points_possible;

            avg = updateAvg(total_score, total_points_possible);

            assignmentScore[matchedAssignment.id] = +calculateScore(
              late_Score,
              sub_points_possible
            ).toFixed(2);
          } else {
            // Early submission: Results not included in average
            continue;
          }
        }
      }
      console.log("Total Score:", score, "Points Possible:", points_possible);
      avg = +(score / points_possible).toFixed(2);
      let learnerResult = { id, avg };
      for (let [key, value] of Object.entries(assignmentScore)) {
        learnerResult[key] = value;
      }
      result.push(learnerResult);
    }
    return result;
  } catch (error) {
    console.error("Error processing learner data:", error.message);
    return [];
  }
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

// // The provided course information.
// const CourseInfo = {
//   id: 451,
//   name: "Introduction to JavaScript"
// };

// // The provided assignment group.
// const AssignmentGroup = {
//   id: 12345,
//   name: "Fundamentals of JavaScript",
//   course_id: 451,
//   group_weight: 25,
//   assignments: [
//     {
//       id: 1,
//       name: "Declare a Variable",
//       due_at: "2023-01-25",
//       points_possible: 50
//     },
//     {
//       id: 2,
//       name: "Write a Function",
//       due_at: "2023-02-27",
//       points_possible: 150
//     },
//     {
//       id: 3,
//       name: "Code the World",
//       due_at: "3156-11-15",
//       points_possible: 500
//     }
//   ]
// };

// // The provided learner submission data.
// const LearnerSubmissions = [
//   {
//     learner_id: 125,
//     assignment_id: 1,
//     submission: {
//       submitted_at: "2023-01-25",
//       score: 47
//     }
//   },
//   {
//     learner_id: 125,
//     assignment_id: 2,
//     submission: {
//       submitted_at: "2023-02-12",
//       score: 150
//     }
//   },
//   {
//     learner_id: 125,
//     assignment_id: 3,
//     submission: {
//       submitted_at: "2023-01-25",
//       score: 400
//     }
//   },
//   {
//     learner_id: 132,
//     assignment_id: 1,
//     submission: {
//       submitted_at: "2023-01-24",
//       score: 39
//     }
//   },
//   {
//     learner_id: 132,
//     assignment_id: 2,
//     submission: {
//       submitted_at: "2023-03-07",
//       score: 140
//     }
//   }
// ];

// function getLearnerData(course, ag, submissions) {
//   // here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

//   return result;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);
