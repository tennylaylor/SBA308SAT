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

 

    // Main function to get basic data on each learner
function getLearnerData(course, assignmentGroup, submissions) {
    // 1. Check course association
    if (assignmentGroup.course_id !== course.id) {
      console.log("Assignment group does not belong to the course.");
      return []; // Early exit if the course ID doesn't match
    }
  
    
}
 // Run the function and check results
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log("Result:", result); 