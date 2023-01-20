function constructionCrew(worketObj) {
  if (worketObj.dizziness) {
    return {
      ...worketObj,
      levelOfHydrated: worketObj.weight * 0.1 * worketObj.experience,
      dizziness: false,
    };
  }
  return worketObj;
}

console.log(
  constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true,
  })
);
console.log(
  constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false,
  })
);
