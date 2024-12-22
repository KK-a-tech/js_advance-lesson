import { createErrorElement, createElements } from './createElement.js';
import { $axios } from './axiosHelper.js';

window.addEventListener('DOMContentLoaded', () => {

  const characterElement = document.getElementById('character');
  const messageElement = document.getElementById('error-message');
  const mainElement = document.querySelector('main');
  const listElement = document.getElementById("list");

  const pokeInfoHtml = (image, name) =>
    `
      <li class="list-item">
        <div class="character">
          <img src="${image}" width="475" height="475" alt="${name}" class="character__img">
        </div>
        <p class="character__name">${name}</p>
      </li>
    `;
  
  const allUrl = `https://pokeapi.co/api/v2/pokemon/?limit=151`;

  if (messageElement !== null) messageElement.remove();

  if (characterElement) {
    while (characterElement.lastChild) {
      characterElement.removeChild(characterElement.lastChild);
    }
  }

  const getInfo = $axios(allUrl);
  getInfo.then(res => {
    res.data.results.forEach(val => {
      const getImage = $axios(val.url);
      getImage.then(res => {
        const image = res.data.sprites.other['official-artwork'].front_default;
        const jaUrl = res.data.species.url;
        const getName = $axios(jaUrl);
        getName.then(res => {
          const name = res.data.names[0].name;
          if (listElement) {
            const element = createElements(pokeInfoHtml(image, name));
            list.appendChild(element);
          }
        }).catch(err => {
          mainElement.appendChild(createErrorElement(err));
        });
      }).catch(err => {
        maimainElementn.appendChild(createErrorElement(err));
      });
    });
  }).catch(err => {
    mainElement.appendChild(createErrorElement(err));
  });
});