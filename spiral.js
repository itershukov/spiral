/**
 * Created by itersh on 18.03.2018.
 */

/**
 * untwist
 * @param {Array} src - src matrix
 * @return {Array} res - result array
 */
exports.untwist = (src) => {
  if (!src || !src.length) throw new Error('Bad params')

  const directionGenerator = this.generateNextDirection()
  let stepX = 0
    , stepY = 0;
  let numSteps = src.length;
  let res = [];

  let I = 0
    , J = -1;

  while(numSteps){

    let currentNumSteps = numSteps;
    stepX === 0 && numSteps--;
    stepY = stepX;
    stepX = directionGenerator.next().value;
    while(currentNumSteps){
      currentNumSteps--;

      I = I + stepY;
      J = J + stepX;
      res.unshift(src[I][J]);
    }

  }

  return res;
}

/**
 *
 */
exports.generateNextDirection = function* generateNextDirection() {
  let a = 0;
  while(true){
    a+=Math.PI/2;
    yield Math.round(Math.sin(a));
  }
}


