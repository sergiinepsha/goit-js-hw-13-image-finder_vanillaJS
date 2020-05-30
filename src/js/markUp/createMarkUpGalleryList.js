'use strict';

import refs from '../refs';

/*
 * Inserting all elements into the gallery
 */
export default function (allItems) {
  refs.gallery.insertAdjacentHTML('beforeend', allItems);
}
