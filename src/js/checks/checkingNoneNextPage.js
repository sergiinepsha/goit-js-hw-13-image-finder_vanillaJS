'use strict';

import apiService from '../api/apiService';
import refs from '../refs';
import noticePnotify from '../services/pnotify/notice';

/*
 * If the page is the last, we inform user:
 * "There are no more elements for your request!"
 */
export default function () {
  if (apiService.getTotal() !== 0) {
    if (!(refs.gallery.children.length < apiService.getTotal())) {
      noticePnotify('There are no more elements for your request!');
    }
  }
}
