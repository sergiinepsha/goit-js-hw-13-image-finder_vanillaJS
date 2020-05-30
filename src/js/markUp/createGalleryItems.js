'use strict';

import galleryItemTemplate from '../../templates/galleryItem.hbs';

/*
 * Creating an array of gallery elements based on a template
 */
export default function (imgsArr) {
  return imgsArr.map(img => galleryItemTemplate(img)).join('');
}
