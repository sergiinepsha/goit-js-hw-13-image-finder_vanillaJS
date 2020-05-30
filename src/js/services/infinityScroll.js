'use strict';
import refs from '../refs';
import loadingMore from '../loadingMore';

/*
 * Observer of the infinite scroll
 */
export default function (controlInfiniteScroll) {
  const options = {
    rootMargin: '10px',
    threshold: 1.0,
  };
  const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (galleryIsNotEmpty()) {
          loadingMore();
        }
      }
    });
  }, options);
  intersectionObserver.observe(controlInfiniteScroll);
}

function galleryIsNotEmpty() {
  return refs.gallery.hasChildNodes();
}
