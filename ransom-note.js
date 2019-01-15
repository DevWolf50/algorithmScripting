'use strict';

function checkMagazine(magazine = [], note = []) {
  // create object of magazine
  let map = createMap(magazine);

  let noteMap = createMap(note);

  for (let word in noteMap) {
    if (!map.hasOwnProperty(word) || map[word].length < noteMap[word].length) {
      return false;
    }

      map[word].splice(word, 1);
  }

  return true;
}



function createMap(arr) {
  return arr.reduce(
    (obj, elem) =>
      Object.assign(obj, {
        [elem]: obj[elem] ? [...obj[elem], elem] : [elem]
      }),
    {}
  );
}


console.log(
    checkMagazine(
      ['give', 'me', 'one', 'grand', 'today', 'night', 'one'],
      ['give', 'one', 'grand', 'today', 'today']
    )
  );