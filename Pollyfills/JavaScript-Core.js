// 1. Map
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
// console.log(arr.myMap(double));

// 2. Filter

const filterFn = (val) => val > 2;

Array.prototype.myFilter = function (func) {
  let res = [];
  const thisArr = this;
  for (let i = 0; i < thisArr.length; i++) {
    func(thisArr[i]) && res.push(thisArr[i]);
  }
  return res;
};
// console.log(arr.myFilter(filterFn));

// 3. reduce

const reduceFn = (acc, curr) => acc + curr;
const initalValue = 0;

Array.prototype.myReduce = function (func, initialVal = 0) {
  const thisArr = this;
  let finalRes = initalValue;
  for (let i = 0; i < thisArr.length; i++) {
    finalRes = func(finalRes, thisArr[i]);
  }
  console.log(finalRes);
};

// arr.myReduce(reduceFn);

// 4. forEach

const forEachArr = [1, 2, 3, 4, 5];

const forEachFn = (val) => val + "mutate";

Array.prototype.myForEach = function (func) {
  const thisArr = this;
  for (let i = 0; i < thisArr.length; i++) {
    thisArr[i] = func(thisArr[i]);
  }
};

// forEachArr.myForEach(forEachFn);
// console.log(forEachArr);
