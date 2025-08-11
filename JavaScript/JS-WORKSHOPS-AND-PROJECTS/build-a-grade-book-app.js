//For this lab, you'll create a gradebook app.

//You'll practice conditionals to determine the student's grade based on their score.

// 1. Function to calculate average of an array of scores
function getAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

// 2. Function to return letter grade based on a score
function getGrade(score) {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

// 3. Function to check if the student has a passing grade
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// 4. Function to return the student message
function studentMsg(scores, studentScore) {
  const average = getAverage(scores);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);

  const status = passed ? "passed" : "failed";
  return `Class average: ${average}. Your grade: ${grade}. You ${status} the course.`;
}