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
import { elements } from "./view/base";
import * as searchView from "./view/searchView";

// let search = new Search("pasta");

// search.doSearch().then((r) => console.log(r));

/**
 * Web app төлөв
 * - Хайлтын query, үр дүн
 * - Тухайн үзүүлж байгаа жор
 * - Лайкласан жорууд
 * - Захиалж байгаа жорын найрлагууд
 */

const state = {};

const controlSearch = async () => {
  // 1. Вэбээс хайлтын түлхүүр үгийг гаргаж авна.
  const query = searchView.getInput();

  if (query) {
    // 2. Шинээр хайлтын обьектийг үүсгэж өгнө.
    state.search = new Search(query);

    // 3. Хайлт хийхэд зориулж дэлгэцийн UI-г бэлтгэнэ.
    searchView.clearSearchQuery();
    searchView.clearSearchResult();

    // 4. Хайлтыг гүйцэтгэнэ.
    await state.search.doSearch();

    // 5. Хайлтын үр дүнг дэлгэцэнд үзүүлнэ.
    if (state.search.result === undefined) alert("Хайлтаар илэрцгүй...");
    else searchView.renderRecipes(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
