import { getLibs } from '../../scripts/utils.js';

export default async function init(el) {
  const { createTag } = await import(`${getLibs()}/utils/utils.js`);
  const titleEl = el.querySelector(':scope > div > div');
  const picture = el.querySelector('picture');
  const listEl = el.querySelector('ol');
  el.innerHTML = '';
  titleEl.classList.add('how-to-header');
  const pictureEl = createTag('div', {class: 'how-to-image'}, picture);
  el.append(titleEl, pictureEl, listEl);
}