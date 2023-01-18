function cityTaxes(name, population, treasury) {
  const city = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage) {
      this.population += Math.floor(this.population * (percentage / 100));
    },
    applyRecession(percentage) {
      this.treasury -= Math.ceil(this.treasury * (percentage / 100));
    },
  };
  return city;
}

const tortuga = cityTaxes('Tortuga', 7000, 15000);
tortuga.collectTaxes();
console.log(tortuga.treasury);
tortuga.applyGrowth(5);
console.log(tortuga.population);
