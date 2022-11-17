function matchFullName(input) {
  const pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

  const matches = [...input.matchAll(pattern)];

  let output = '';

  matches.forEach((match) => {
    output += `${match[0]} `;
  });

  console.log(output);
}

matchFullName(
  'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov'
);
