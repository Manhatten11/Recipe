import { elements } from "./base";

const renderRecipe = (recipe) => {
  console.log(recipe);
  const markup = `
         <li>
            <a class="results__link results__link--active" href="#${recipe.recipe_id}">
              <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test" />
              </figure>
              <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
              </div>
            </a>
          </li>
  `;

  //   ul рүүгээ нэмнэ.
  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};

export const clearSearchQuery = () => {
  elements.searchInput.value = "";
};

export const clearSearchResult = () => {
  elements.searchResultList.innerHTML = "";
};

export const getInput = () => elements.searchInput.value;

export const renderRecipes = (recipes, currentPage = 1, resPerPage = 10) => {
  // Хайлтын үр дүнг хуудаслаж үзүүлэх
  // page = 2, start =10, end 20
  const start = (currentPage - 1) * resPerPage;
  const end = currentPage * resPerPage;

  recipes.slice(start, end).forEach(renderRecipe);

  // Хуудаслалтын товчуудыг гаргаж ирэх
  const totalPages = Math.ceil(recipes / resPerPage);
  renderButtons(currentPage, totalPages);
};

const renderButtons => (currentPage, totalPages) {
  let button;

  if(currentPage === 1 && totalPages > 1) {
    // 1-р хуудсан дээр байна, 2-р хуудас гэдэг товчийг гарга
  } else if(currentPage < totalPages) {
    // Өмнөх болон дараачийн хуудас руу шилжүүлэх товчуудыг үзүүл
  }
  else if (currentPage === totalPages) {
    // Хамгийн сүүлийн хуудсан дээр байна. Өмнөх рүү шилжүүлэх товчийг л үзүүлнэ.
  }
}

// type ===> `prev`, `next`
const createButton = (page, type) =>