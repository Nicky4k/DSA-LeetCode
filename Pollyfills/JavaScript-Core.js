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

let audioGear = {
  brandName: "Universal Audio",
  pluginsType: "VST, AU",
  pluginName: ["Compressor", "VOX", "Limiter", "EQ"],
  description(date) {
    console.log(
      `${this.brandName} makes audio plugins, and their top ${
        this.pluginsType
      } plugins are ${audioGear.pluginName
        .slice(0, -1)
        .join(", ")}, and ${this.pluginName.at(-1)}.`,
      date
    );
  },
};
// audioGear.description(new Date().toDateString());

let izotope = {
  brandName: "Izotope",
  pluginsType: "VST, VST3, AU and AAX",
  pluginName: ["Ozone", "Trash", "Nectar", "Imager", "VocalSynth"],
};

// audioGear.description.call(izotope, new Date().toDateString());

// call polyfill
Object.prototype.myCall = function (arg, params) {
  const func = this;
  arg.fn = func;
  arg.fn(params);
};
// audioGear.description.myCall(izotope, new Date().toDateString());

// apply polyfill
// console.log("\n");
const msg = ["Warm", "Greetings", new Date().toDateString()];
// audioGear.description.apply(izotope, [msg]);

Object.prototype.myApply = function (scope, args) {
  scope.func = this;
  scope.func(...args);
};
// audioGear.description.myApply(izotope, [msg]);

// bind polyfill
// console.log("\n");
const pluginDesc = audioGear.description.bind(
  izotope,
  new Date().toDateString()
);
// pluginDesc();
Object.prototype.myBind = function (scope, args) {
  if (typeof this !== "function") return new Error("please try again");

  scope.func = this;
  return function () {
    scope.func(args);
  };
};
const pluginDescBinded = audioGear.description.myBind(
  izotope,
  new Date().toDateString()
);
// pluginDescBinded();

// Promises polyfill
// race
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 200);
});

const fastP = Promise.race([p1, p2, p3]);
// fastP.then((res) => console.log(res));

Object.prototype.myRace = function (promises) {
  for (let i = 0; i < promises.length; i++) {
    return promises[i].then((res) => res);
  }
};
const fastProm = Promise.myRace([p1, p2, p3]);
// fastProm.then((res) => console.log(res));

// all
const allFullfilled = Promise.all([p1, p2, p3]);
allFullfilled.then((res) => console.log(res)).catch((err) => console.log(err));

const customAll = (promises) => {
  let result = [];
  let settledP = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise
        .then((value) => {
          result[i] = value;
          settledP++;
          if (settledP === promises.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
};

Promise.all = customAll;

const customAllP = Promise.all([p1, p2, p3]);
customAllP.then((res) => console.log(res)).catch((err) => console.log(err));
