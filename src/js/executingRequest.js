'use strict';

import apiService from '../js/api/apiService';
import spinner from './services/spinner';
import checkingNoneNextPage from './checks/checkingNoneNextPage';
import checkingResponseEmpty from './checks/checkingResponseEmpty';
import createMarkUpGalleryList from './markUp/createMarkUpGalleryList';
import createGalleryItems from './markUp/createGalleryItems';
import createMasonry from './services/masonry/createMasonry';
import errorPnotify from './services/pnotify/error';

/*
 * Making an API request and processing the server response
 */
export default function () {
  spinner.show();

  checkingNoneNextPage();

  apiService
    .getImages()
    .then(({ total, hits }) => {
      if (apiService.getTotal() === 0) {
        apiService.setTotal(total);
      }
      checkingResponseEmpty();

      createMarkUpGalleryList(createGalleryItems(hits));
      createMasonry(hits);
    })
    .catch(error => errorPnotify(error.stack));
}
