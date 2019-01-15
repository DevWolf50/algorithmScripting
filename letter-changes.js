function leterChhanges(str) {
  return str.replace(/[a-z]/gi, match => {
    const asccii = match.charCodeAt(0);
    const base = asccii > 96 ? 97 : 65;

    const other = ((asccii + 1 - base) % base) + base;

    const conv = String.fromCharCode(other);
    return conv.replace(/[aeiou]/, match => match.toUpperCase());
  });
}

leterChhanges('hello');

console.log(leterChhanges('fun times!'));
