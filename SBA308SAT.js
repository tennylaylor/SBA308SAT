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

  // Function to retrieve and calculate learner data
function getLearnerData(course, ag, submissions) {
    // Validate course_id
    if (ag.course_id !== course.id) {
        throw new Error("Invalid AssignmentGroup: course_id does not match CourseInfo");
    }

    const results = []; // Array to hold the result objects
