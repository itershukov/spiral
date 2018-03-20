/**
 * Created by itersh on 19.03.2018.
 */
const {generateNextDirection, untwist} = require('../spiral')
  , {expect} = require('chai');

describe('Check direction generator', function() {
  it('Proper sequence', function() {
    const generator = generateNextDirection();
    let steps = 7;
    let res = [];
    let expectRes = [1,0,-1,-0,1,0,-1];
    while (steps){
      steps--;
      res.push(generator.next().value)
    }
    expect(res).to.deep.equal(expectRes);
  });
});

describe('Check untwist', function() {
  it('5x5', function() {
    const src = [
      [11,12,13,14,15],
      [21,22,23,24,25],
      [31,32,33,34,35],
      [41,42,43,44,45],
      [51,52,53,54,55]
    ];

    const expectRes = [33,32,42,43,44,34,24,23,22,21,31,41,51,52,53,54,55,45,35,25,15,14,13,12,11];
    const res = untwist(src);

    expect(res).to.deep.equal(expectRes);
  });

  it('3x3', function() {
    const src = [
      [11,12,13],
      [21,22,23],
      [31,32,33]
    ];

    const expectRes = [22,21,31,32,33,23,13,12,11];
    const res = untwist(src);

    expect(res).to.deep.equal(expectRes);
  });

  it('3x3 (base)', function() {
    const src = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];

    const expectRes = [5, 4, 7, 8, 9, 6, 3, 2, 1];
    const res = untwist(src);

    expect(res).to.deep.equal(expectRes);
  });

  it('1x1', function() {
    const src = [
      [11]
    ];

    const expectRes = [11];
    const res = untwist(src);

    expect(res).to.deep.equal(expectRes);
  });

  it('Empty src', function() {
    const src = [];

    expect(function(){
      untwist(src);
    }).to.throw('Bad params');
  });

  it('Wrong type of src', function() {
    const src = [];

    expect(function(){
      untwist(src);
    }).to.throw('Bad params');
  });
});