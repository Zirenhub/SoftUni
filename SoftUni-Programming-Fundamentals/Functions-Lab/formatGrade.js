function formatGrade(num) {
  let grade = '';

  if (num < 3.0) {
    grade = 'Fail';
  } else if (num >= 3.0 && num < 3.5) {
    grade = 'Poor';
  } else if (num >= 3.5 && num < 4.5) {
    grade = 'Good';
  } else if (num >= 4.5 && num < 5.5) {
    grade = 'Very good';
  } else {
    grade = 'Excellent';
  }

  if (grade === 'Fail') {
    console.log('Fail (2)');
  } else {
    console.log(`${grade} (${num.toFixed(2)})`);
  }
}

formatGrade(5.5);
