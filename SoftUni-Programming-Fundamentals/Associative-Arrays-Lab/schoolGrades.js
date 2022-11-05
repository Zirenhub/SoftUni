function schoolGrades(arr) {
  const studentsObj = {};

  arr.forEach((student) => {
    const currentStundet = student.split(' ');
    const studentName = currentStundet.shift();
    let grades = currentStundet.map(Number);

    if (studentsObj[studentName]) {
      studentsObj[studentName].push(...grades);
    } else {
      studentsObj[studentName] = [...grades];
    }
  });

  const studentsArr = Object.entries(studentsObj).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  studentsArr.forEach((student) => {
    const studentName = student[0];
    const grades = student[1];

    const average = grades.reduce((a, b) => a + b, 0) / grades.length;

    studentsObj[studentName] = average;

    console.log(`${studentName}: ${average.toFixed(2)}`);
  });
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
