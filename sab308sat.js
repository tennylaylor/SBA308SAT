// Basic course information
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // Assignment group details
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    assignments: [
      { id: 1, name: "Declare a Variable", due_at: "2023-01-25", points_possible: 50 },
      { id: 2, name: "Write a Function", due_at: "2023-02-27", points_possible: 150 },
      { id: 3, name: "Code the World", due_at: "3156-11-15", points_possible: 500 } // far future date
    ]
  };
  // Array of learner submissions
const LearnerSubmissions = [
    { learner_id: 125, assignment_id: 1, submission: { submitted_at: "2023-01-25", score: 47 }},
    { learner_id: 125, assignment_id: 2, submission: { submitted_at: "2023-02-12", score: 150 }},
    { learner_id: 132, assignment_id: 1, submission: { submitted_at: "2023-01-24", score: 39 }},
    { learner_id: 132, assignment_id: 2, submission: { submitted_at: "2023-03-07", score: 140 }} // late submission
  ];
 

    //  Filter assignments by due date, ensuring only past-due assignments are included
    const validAssignments = ag.assignments.filter(assignment => {
      const dueDate = new Date(assignment.due_at);
      const now = new Date();
      return dueDate <= now; // Include only if due date is in the past


//  Check for late submissions and apply a 10% penalty if needed
if (submittedAt > dueAt) {
  // Error introduced: Score calculation should not let score fall below 0
  score -= assignment.points_possible * 0.1; // This applies a penalty of 10% of the points possible
  console.log(`Penalty applied for late submission: ${score}`);
}
score = Math.max(0, score); // Avoid negative scores

// : Calculate percentage for this assignment
const assignmentPercentage = score / assignment.points_possible;
learner.scores[assignmentId] = assignmentPercentage;

//  Update total score and points
learner.totalScore += score;
learner.totalPoints += assignment.points_possible;

// Log each learner's running total for debugging
console.log(`Learner ${learnerId} - Running Total Score: ${learner.totalScore}, Total Points: ${learner.totalPoints}`);
});

;
  
  console.log("Valid Assignments (Past Due Dates Only):", validAssignments); // Check valid assignments

