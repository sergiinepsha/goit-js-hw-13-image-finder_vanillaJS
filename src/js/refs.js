' use strict';

/*
 * DOM-link object
 */
export default {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.js-gallery'),
  btnsWrapper: document.querySelector('.js-buttons-wrapper'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
  clearBtn: document.querySelector('button[data-action="clear"]'),
  spinner: document.querySelector('#spinner'),
  controlInfiniteScroll: document.querySelector('.control-infinite-scroll'),
};
