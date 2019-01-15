//given an array of clouds: 1 rep bad 0 rep good
//figure out how many jumps it will take to win the game
//she can jump clouds up to two spots ahead

//cant have two 1 clouds in a row
//recursion is fun :)

function jump(n, c) {
  if (c.length === 1) {
    return 0;
  }

  const [curr, ...rest] = c;

  if (rest[1] === 0) {
    return 1 + jump(n, rest.slice(1));
  }
  return 1 + jump(n, rest);
}

console.log(jump(6, [0, 0, 1, 0, 0, 1, 0]));
