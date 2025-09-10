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
      dueDate: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      dueDate: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      dueDate: "3156-11-15",
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
//     submission: { submitted_at: "3156-11-15", score: 480 },
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
//     submission: { submitted_at: "2023-02-27", score: 0 },
//   },
// ];

// ------------------- EDGE CASE 5: PERFECT SCORES -------------------
// const LearnerSubmissions = [
//   {
//     learner_id: 125,
//     assignment_id: 1,
//     submission: { submitted_at: "2023-01-25", score: 50 },
//   },
//   {
//     learner_id: 125,
//     assignment_id: 2,
//     submission: { submitted_at: "2023-02-27", score: 150 },
//   },
//   {
//     learner_id: 125,
//     assignment_id: 3,
//     submission: { submitted_at: "3156-11-15", score: 500 },
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
//     submission: { submitted_at: "2023-02-27", score: 75 },
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

// Date checks
function isLate(submissionDate, dueDate) {
  return new Date(submissionDate) > new Date(dueDate);
}

function isOnTime(submissionDate, dueDate) {
  return new Date(submissionDate).getTime() === new Date(dueDate).getTime();
}

// Score calculations
function calculateScore(score, points_possible) {
  return +(score / points_possible).toFixed(2);
}

function applyLatePenalty(score, points_possible) {
  let lateScore = score - points_possible * 0.1;
  if (lateScore < 0) lateScore = 0;
  return lateScore;
}

function updateTotals(totals, score, points_possible) {
  totals.total_score += score;
  totals.total_points_possible += points_possible;
  return totals;
}

// ---------------------------- MAIN FUNCTION ----------------------------
function getLearnerData(course, ag, submissions) {
  try {
    if (course.id !== ag.course_id)
      throw new Error(
        "Assignment group does not belong to the specified course"
      );

    if (ag.assignments.length === 0) return [];
    if (submissions.length === 0) return [];

    const learnerIds = new Set(submissions.map((sub) => sub.learner_id));

    const result = [];

    for (let id of learnerIds) {
      let totals = { total_score: 0, total_points_possible: 0 };
      let assignmentScore = {};

      for (let sub of submissions) {
        if (sub.learner_id !== id) continue;

        const matchedAssignment = ag.assignments.find(
          (a) => a.id === sub.assignment_id
        );

        if (!matchedAssignment) continue;

        const { submitted_at, score } = sub.submission;
        const { dueDate, points_possible } = matchedAssignment;

        // On-time submission: full score
        if (isOnTime(submitted_at, dueDate)) {
          totals = updateTotals(totals, score, points_possible);
          assignmentScore[matchedAssignment.id] = calculateScore(
            score,
            points_possible
          );
        } // Late submission: deduct 10% of points possible
        else if (isLate(submitted_at, dueDate)) {
          let lateScore = applyLatePenalty(score, points_possible);
          totals = updateTotals(totals, lateScore, points_possible);
          assignmentScore[matchedAssignment.id] = calculateScore(
            lateScore,
            points_possible
          );
        } // Early submission: Results not included in average
        else {
          continue;
        }
      }

      let avg =
        totals.total_points_possible > 0
          ? +(totals.total_score / totals.total_points_possible).toFixed(2)
          : 0;

      console.log(
        "Total Score:",
        totals.total_score,
        "Points Possible:",
        totals.total_points_possible
      );

      let learnerResult = { id, avg };
      for (let [key, value] of Object.entries(assignmentScore)) {
        learnerResult[key] = value;
      }

      result.push(learnerResult);
    }
    return result;
  } catch (error) {
    console.error("Error processing learner data:", error.message);
  }
}

// ---------------------------- RUN THE FUNCTION ----------------------------
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
