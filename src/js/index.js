const arr = [12, 33, 122];

let myFunc = (a) => {
  console.log(`too : ${a}`);
};

const arr2 = [...arr, 44, 565];

myFunc(arr2[1]);
