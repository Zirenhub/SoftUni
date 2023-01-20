function fromJSONToHTMLTable(string) {
  const output = [];
  output.push('<table>');
  const data = JSON.parse(string);
  const keys = Object.keys(data[0]);

  output.push(`  <tr>${keys.map((p) => `<th>${p}</th>`).join('')}</tr>`);

  for (const entry of data) {
    output.push(
      `  <tr>${keys.map((p) => `<td>${entry[p]}</td>`).join('')}</tr>`
    );
  }

  output.push('</table>');

  return output.join('\n');
}

console.log(
  fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`)
);
