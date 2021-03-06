'use strict';

// Task #1
function meeting(guestList) {

  const arrangeName = (el, divider) => {
    const [name, lastName] = el.toUpperCase().split(divider);
    return `(${ lastName }, ${ name })`;
  };

  const sortNames = (a, b) => a < b ? -1: 0;

  return guestList
    .split(';')
    .map(el => arrangeName(el, ':'))
    .sort(sortNames)
    .join('');
}

const guestList = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log(meeting(guestList));


// Task #2
function meeting2(chairs, count) {
  let spare = 0;
  const freeChairs = [];
  if (count === 0 || count === undefined) return 'Game On';
  const result = chairs.some(el => {
    const persons = el[0].length;
    let free = el[1] - persons >= 0 ? el[1] - persons : 0;
    spare = spare + free;
    freeChairs.push(free < 0 ? 0 : free);
    return spare >= count;
  });
  return result ? freeChairs : 'Not enough!';
}

console.log(meeting2([['XXXXX', 18], ['XXXXX', 6], ['XX', 4], ['XX', 5]], 21));
console.log(meeting2([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)); // [0, 1, 3]
console.log(meeting2([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)); // [0, 0, 1, 2, 2]
console.log(meeting2([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0)); // 'Game On'


// Task #3
function findPoints(points) {
  let closestPoints = [];
  let min = Infinity;
  points.forEach((point, i) => {
    for (let j = i; j < points.length; j++) {
      if (j !== i) {
        let res = Math.sqrt(Math.pow(point[0] -points[j][0], 2) + Math.pow(point[1] -points[j][1], 2));
        if (res < min) {
          min = res;
          closestPoints = [point, points[j]];
        }
      }
    }
  });
  return closestPoints;
}

let points = [[2, 2], [2, 8], [5, 5], [6, 3], [6, 7], [7, 4], [7, 9]];
console.log(findPoints(points));

//[[6,3], [7,4]] или [[7,4], [6,3]]
