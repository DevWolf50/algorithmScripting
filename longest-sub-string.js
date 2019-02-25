//given a string find the longest substring that does not contain repeating chars and return the length

function lengthOfLongestSubstring(str = '') {
  let longestSub = str[0];
  let currentSub = '';

  for (let i = 0; i < str.length; i++) {
    currentSub = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (currentSub.includes(str[j])) {
        break;
      }
      currentSub = currentSub.concat(str[j]);
      currentSub;

      if (currentSub.length < longestSub.length) {
        continue;
      }

      longestSub = currentSub;
    }
  }

  return longestSub.length;
}

function slidingWindow(s) {
  let i = 0;
  let j = 0;
  let longestLength = 0;

  while (i < s.length && j < s.length) {
    const sub = s.slice(i, j);
    if (sub.includes(s[j])) {
      i++;
      continue;
    }

    sub;

    longestLength = Math.max(longestLength, j - i + 1);
    j++;
  }

  return longestLength;
}

function slidingWindow2(s) {
  let map = {};
  let ans = 0;

  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.hasOwnProperty(s[j])) {
      i = Math.max(map[s[j]], i);
    }

    ans = Math.max(ans, j - i + 1);

    map[s[j]] = j + 1;
  }

  return ans;
}
const test2 = slidingWindow2('pwwkew');
test2;

abcdec;
