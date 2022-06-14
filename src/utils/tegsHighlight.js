export const tegsHighlight = (value, className) => {
  if (value) {
    let splitValue = value.split(' ');
    splitValue.forEach((item, index) => {
      if (item.includes('#')) {
        splitValue[index] = `<span className=${className}>${item}</span>`;
      }
    });
    return splitValue.join(' ');
  }
  return value;
};
