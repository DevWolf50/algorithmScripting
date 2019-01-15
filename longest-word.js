//given a string
//return the longest word within that string

//separate words into an array
//loop through array and clean each word and find the largest word

const LongestWord = (sen = '') =>
  sen.split(' ').reduce((longest, curr) => {
    const cleaned = curr.replace(/[_\W]+/g, '');
    return cleaned.length > longest.length ? cleaned : longest;
  }, '');

console.log(LongestWord('fun&!! time'));

