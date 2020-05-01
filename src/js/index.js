// const arr = [12, 33, 122];

// let myFunc = (a) => {
//   console.log(`too : ${a}`);
// };

// const arr2 = [...arr, 44, 565];

// myFunc(arr2[1]);

// import p from "lodash";
// import query from "./model/Search";
// import { add, multiply as mul } from "./view/searchView";

// console.log("Хайлт : " + query);

// console.log("Хоёр тооны нийлбэр :" + mul(4, 3));
require("@babel/polyfill");
import Search from "./model/Search";

let search = new Search("pasta");

search.doSearch().then((r) => console.log(r));
