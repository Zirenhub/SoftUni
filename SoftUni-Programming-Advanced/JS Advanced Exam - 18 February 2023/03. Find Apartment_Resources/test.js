const { expect } = require('chai');
const findNewApartment = require('./findApartment');

describe('Tests …', function () {
  it('tests location', function () {
    expect(findNewApartment.isGoodLocation('Paris', true)).to.equal(
      'This location is not suitable for you.'
    );

    expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal(
      'There is no public transport in area.'
    );

    expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal(
      'You can go on home tour!'
    );

    expect(() => findNewApartment.isGoodLocation(123, true)).to.throw(
      'Invalid input!'
    );

    expect(() =>
      findNewApartment.isGoodLocation('Sofia', 'true')
    ).to.throw('Invalid input!');
  });

  it('tests size', function () {
    expect(
      findNewApartment.isLargeEnough([40, 50, 60, 70], 50)
    ).to.equal('50, 60, 70');
    expect(
      findNewApartment.isLargeEnough([40, 45, 48, 49], 50)
    ).to.equal('');

    expect(() =>
      findNewApartment.isLargeEnough('not an array', 50)
    ).to.throw('Invalid input!');

    expect(() => findNewApartment.isLargeEnough([], 50)).to.throw(
      'Invalid input!'
    );

    expect(() =>
      findNewApartment.isLargeEnough([40, 50, 60], 'not a number')
    ).to.throw('Invalid input!');
  });

  it('tests affordable', function () {
    expect(findNewApartment.isItAffordable(100000, 150000)).to.equal(
      'You can afford this home!'
    );
    expect(findNewApartment.isItAffordable(150000, 100000)).to.equal(
      "You don't have enough money for this house!"
    );
    expect(() => findNewApartment.isItAffordable(0, 0)).to.throw(
      'Invalid input!'
    );
    expect(() =>
      findNewApartment.isItAffordable('100000', 150000)
    ).to.throw('Invalid input!');
    expect(() =>
      findNewApartment.isItAffordable(100000, '150000')
    ).to.throw('Invalid input!');
    expect(() => findNewApartment.isItAffordable(100000, 0)).to.throw(
      'Invalid input!'
    );
    expect(() => findNewApartment.isItAffordable(0, 150000)).to.throw(
      'Invalid input!'
    );
  });
});
