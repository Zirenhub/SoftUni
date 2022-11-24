function destinationMapper(string) {
  const pattern = /(=|\/{1})(?<location>[A-Z][a-z|A-Z]{2,})\1/g;

  const validLocations = string.matchAll(pattern);

  let travelPoints = 0;
  const locations = [];

  for (const location of validLocations) {
    const locationName = location.groups.location;
    const locationLength = locationName.length;
    travelPoints += locationLength;
    locations.push(locationName);
  }

  console.log(`Destinations: ${locations.join(', ')}`);
  console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
