const letterCap = (str = '') =>
  str
    .split(' ')
    .map(word => {
      const cap = word[0].toUpperCase;
      return `${cap}${word.slice(1)}`;
    })
    .join(' ');

const letterCap2 = (str = '') => str.replace(/\b(\w)/g, m => m.toUpperCase());

console.log(letterCap2('hi my name is joe'));
