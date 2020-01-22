var randomKey = (obj) => {
  var keys = Object.keys(obj)
  return keys[ keys.length * Math.random() << 0];
};

var getNotationsWithRange = (fromLetter, toLetter) => {
  var res = [];
  // console.log(`from: ${fromLetter} to: ${toLetter}`);
  for (var i = fromLetter.charCodeAt(0); i <= toLetter.charCodeAt(0); i++) {
    res.push(String.fromCharCode(i));
  }
  return res;
}

export default { randomKey, getNotationsWithRange };