# SBA308SAT
Course Data Analysis - SBA308SAT
Repository Overview
This project contains code to analyze learner submissions and calculate their weighted averages for assignments in an "Introduction to JavaScript" course. The goal is to process data from each learner, applying penalties for late submissions and ensuring data accuracy through validation checks.

Objectives
The project meets the following objectives:

Employ JavaScript basics: Utilize fundamental JavaScript syntax, including variables, operators, and control flow.
Data Validation: Implement error handling for potential mismatches in the provided data.
Weighted Average Calculation: Calculate learners' scores based on assignment weights, with a 10% penalty applied to late submissions.
Structured Data: Use arrays and objects to organize and manage course, assignment, and submission data effectively.
Output: The final output is a array of objects for each learner’s performance data.

Code Structure
CourseInfo: Contains the basic course ID and name.
AssignmentGroup: Includes assignment details, such as ID, due date, and assignment points.
LearnerSubmissions: An array of objects representing individual learner submissions.
The main function in this project is getLearnerData, processes the data and returns each the students total score, including any deductions for late submissions.

Code Breakdown
Here's a brief overview of the steps within getLearnerData:

Data Validation: Checks that the assignment group belongs to the course.
Data Processing: run through submissions to calculate each learner's score.
Late Submission Penalty: Applies a 10% penalty if a submission is past the due date.
Console Logging: Used strategically to display intermediate results for testing purposes.
Usage

To run this code:
git clone https://github.com/tennylaylor/SBA308SAT.git

Navigate to the project folder:
cd SBA308SAT

Execute the JavaScript file in Node.js:
node sab308sat.js
