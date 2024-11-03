// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    { id: 1, name: "Declare a Variable", due_at: "2023-01-25", points_possible: 50 },
    { id: 2, name: "Write a Function", due_at: "2023-02-27", points_possible: 150 },
    { id: 3, name: "Code the World", due_at: "3156-11-15", points_possible: 500 } // far future date
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  { learner_id: 125, assignment_id: 1, submission: { submitted_at: "2023-01-25", score: 47 }},
  { learner_id: 125, assignment_id: 2, submission: { submitted_at: "2023-02-12", score: 150 }}, 
  { learner_id: 125, assignment_id: 3, submission: { submitted_at: "2023-01-25", score: 400 }}, 
  { learner_id: 132, assignment_id: 1, submission: { submitted_at: "2023-01-24", score: 39 }}, 
  { learner_id: 132, assignment_id: 2, submission: { submitted_at: "2023-03-07", score: 140 }} // late submission
];

// Function to process the learner data and return formatted results
function getLearnerData(course, assignmentGroup, submissions) {
  // Step 1: Ensure the assignment group belongs to the right course
  if (assignmentGroup.course_id !== course.id) { 
    throw new Error("Assignment group does not belong to the specified course.");
  }

  const results = [];
  const assignmentById = {};

  // Map each assignment by its ID for easier look-up
  assignmentGroup.assignments.forEach((assignment) => {
    assignmentById[assignment.id] = assignment;
  });

  // Group submissions by learner
  const learnerData = {};

  submissions.forEach((submission) => {
    const learnerId = submission.learner_id;
    const assignmentId = submission.assignment_id;
    const assignment = assignmentById[assignmentId];
    const submittedAt = new Date(submission.submission.submitted_at);
    const dueAt = new Date(assignment.due_at);

    
    if (submittedAt < dueAt) { // This excludes timely submissions
      return;
    }

    //  Initialize learner's data if not already present
    if (!learnerData[learnerId]) {
      learnerData[learnerId] = { id: learnerId, totalScore: 0, totalPoints: 0, scores: {} };
    }

    const learner = learnerData[learnerId];
    let score = submission.submission.score;

    //  Apply a high penalty for late submissions
    if (submittedAt > dueAt) {
      score -= assignment.points_possible * 0.1; //  penalty
    }

    //  percentage incorrectly
    const assignmentPercentage = (score / assignment.points_possible) * 100; 

    // Update learner total score and points
    learner.scores[assignmentId] = assignmentPercentage;

    // Incorrect calculation of total score
    learner.totalScore += score; 
    learner.totalPoints += assignment.points_possible; //  might not be due to the previous logic error

    // 
    console.log(`Learner ${learnerId} - Total Score: ${learner.totalScore`); 
    console.log(`Assignment ${assignmentId}: ${assignmentPercentage`);

  
