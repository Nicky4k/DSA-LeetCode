const arr = [1, 2, 3, 4];

const double = (el) => el + "a";

Array.prototype.myMap = function (func) {
  const toMapArray = this;
  const res = [];
  for (let i = 0; i < toMapArray.length; i++) {
    res.push(func(toMapArray[i]));
  }
  return res;
};
console.log(arr.myMap(double));
