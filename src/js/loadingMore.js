'use strict';

import refs from './refs';
import executingRequest from './executingRequest';

/*
 * Loading the next request page and scrolling the screen
 */
export default function () {
  const galleryBottom = refs.gallery.getBoundingClientRect().bottom + pageYOffset;
  executingRequest();
  setTimeout(() => scrollPage(galleryBottom), 1500);
}

function scrollPage(pageY) {
  window.scrollTo({ top: pageY, behavior: 'smooth' });
}
