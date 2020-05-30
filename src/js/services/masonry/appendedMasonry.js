'use strict';

import galleryItemTemplate from '../../../templates/galleryItem.hbs';
import masonryInstance from './masonryInstance';

/*
 * Adding new elements to masonry, reloading them and making layout masonry
 */
export default function (imgsArr) {
  const masonryElems = imgsArr.forEach(img => {
    const div = document.createElement('div');
    div.insertAdjacentHTML('beforeend', galleryItemTemplate(img));
    return div.children;
  });
  masonryInstance.instance.addItems(masonryElems);
  masonryInstance.instance.reloadItems();
  masonryInstance.instance.layout();
}
