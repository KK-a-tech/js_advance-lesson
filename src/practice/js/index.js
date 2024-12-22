import {$axios} from './axiosHelper.js';
import {createErrorElement, createElements} from './createElement.js';

window.addEventListener('DOMContentLoaded', () => {

  const listElement = document.getElementById('list');
  const allUrl = `https://pokeapi.co/api/v2/pokemon/?limit=151`;
  const pokeInfoHtml = (image, name) =>
    `
      <li class="list-item">
        <div class="character">
          <img src="${image}" width="475" height="475" alt="${name}" class="character__img">
        </div>
        <p class="character__name">${name}</p>
      </li>
    `;
  
  $axios(allUrl).then(res => {
    res.data.results.forEach(val => {
      const pokeUrl = val.url;
      $axios(pokeUrl).then(res => {
        const image = res.data.sprites.other['official-artwork'].front_default;
        const pokeUrlJa = res.data.species.url;
        $axios(pokeUrlJa).then(res => {
          const name = res.data.names[0].name;
          const element = createElements(pokeInfoHtml(image, name));
          listElement.appendChild(element);
        }).catch(err => listElement.appendChild(createErrorElement(err)));
      }).catch(err => listElement.appendChild(createErrorElement(err)));
    });
  }).catch(err => listElement.appendChild(createErrorElement(err)));
});
