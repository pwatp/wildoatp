exports.optionMaker = (options) => {
  const opts = new Array();
  options.forEach((opt, index) => {
    const str = `\r\n${index + 1} = ${opt}`;
    opts.push(str);
  });
  return opts;
}