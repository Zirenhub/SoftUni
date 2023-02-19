class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space <= this.wines.length) {
      throw new Error('Not enough space in the cellar.');
    }

    const newWine = {
      wineName,
      wineType,
      price,
      paid: false,
    };
    this.wines.push(newWine);
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    const foundWine = this.wines.find(
      (wine) => wine.wineName === wineName
    );
    if (!foundWine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }
    if (foundWine.paid) {
      throw new Error(`${wineName} has already been paid.`);
    }

    foundWine.paid = true;
    this.bill += foundWine.price;

    return `You bought a ${wineName} for a ${price}$.`;
  }

  openBottle(wineName) {
    const wineIndex = this.wines.findIndex(
      (wine) => wine.wineName === wineName
    );
    if (wineIndex === -1) {
      throw new Error("The wine, you're looking for, is not found.");
    }
    const foundWine = this.wines[wineIndex];
    if (!foundWine.paid) {
      throw new Error(
        `${wineName} need to be paid before open the bottle.`
      );
    }

    this.wines.splice(wineIndex, 1);

    return `You drank a bottle of ${wineName}.`;
  }

  cellarRevision(wineType) {
    if (!wineType) {
      const emptySlots = this.space - this.wines.length;
      const cellarInformation = [
        `You have space for ${emptySlots} bottles more.`,
      ];
      cellarInformation.push(`You paid ${this.bill}$ for the wine.`);

      const sortedWines = this.wines.sort((a, b) =>
        a.wineName.localeCompare(b.wineName)
      );

      sortedWines.forEach((wine) => {
        const paid = wine.paid;
        cellarInformation.push(
          `${wine.wineName} > ${wine.wineType} - ${
            paid ? 'Has Paid' : 'Not Paid'
          }.`
        );
      });

      return cellarInformation.join('\n');
    }

    const winesWithType = this.wines.filter(
      (x) => x.wineType === wineType
    );

    if (winesWithType.length) {
      const logWines = [];
      for (const wine of winesWithType) {
        const paid = wine.paid;

        logWines.push(
          `${wine.wineName} > ${wine.wineType} - ${
            paid ? 'Has Paid' : 'Not Paid'
          }.`
        );
      }

      return logWines.join('\n');
    } else {
      throw new Error(`There is no ${wineType} in the cellar.`);
    }
  }
}

const selection = new WineSelection(5);
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 120);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle(
  'Cabernet Sauvignon Napa Valley',
  'Red',
  120
);
console.log(selection.cellarRevision('asd'));
