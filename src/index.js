'use strict';

import refs from './js/refs';

import searchFormSubmitHandler from './js/handlers/searchFormSubmitHandler';
import loadMoreBtnHandler from './js/handlers/loadMoreBtnHandler';
import clearButtonClickHandler from './js/handlers/clearButtonClickHandler';
import galleryClickHandler from './js/handlers/galleryClickHandler';
import infinityScroll from './js/services/infinityScroll';
import showInfoByScroll from './js/services/showInfoByScroll';

import 'material-design-icons/iconfont/material-icons.css';
import './css/styles.css';

/*
 * Processing the "Submit" form and forming the executing request
 */
refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

/*
 * Processing a click on the "Upload more" button and adding new content
 */
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

/*
 * Processing a click on the "Clear" button and clearing the page
 */
refs.clearBtn.addEventListener('click', clearButtonClickHandler);

/*
 * Processing a click on the gallery and opening a modal window
 */
refs.gallery.addEventListener('click', galleryClickHandler);

/*
 * Execute infinity scroll when entering "controlInfiniteScroll" the viewport
 */
infinityScroll(refs.controlInfiniteScroll);

/*
 * Show information: "To get more, click the "load more" button or scroll down the page"
 */
showInfoByScroll(refs.btnsWrapper);
