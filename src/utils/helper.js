var randomKey = (obj) => {
  var keys = Object.keys(obj)
  return keys[ keys.length * Math.random() << 0];
};

export default { randomKey };