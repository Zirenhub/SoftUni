function companyUsers(arr) {
  const companies = {};

  arr.forEach((employee) => {
    const [company, employeeID] = employee.split(' -> ');

    if (!companies.hasOwnProperty(company)) {
      companies[company] = [];
      companies[company].push(employeeID);
    } else {
      if (!companies[company].includes(employeeID)) {
        companies[company].push(employeeID);
      }
    }
  });

  const sortedCompanies = Object.entries(companies).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  sortedCompanies.forEach((company) => {
    console.log(`${company[0]}`);
    company[1].forEach((employee) => {
      console.log(`-- ${employee}`);
    });
  });
}

companyUsers([
  'SoftUni -> AA12345',
  'SoftUni -> BB12345',
  'Microsoft -> CC12345',
  'HP -> BB12345',
]);
