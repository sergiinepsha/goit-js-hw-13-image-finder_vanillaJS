'use strict';

import apiService from '../api/apiService';
import noticePnotify from '../services/pnotify/notice';

/*
 * If nothing is found for the query, we will notify the user:
 * "Nothing was found for your search!"
 */
export default function () {
  if (apiService.getTotal() === 0) {
    noticePnotify('Nothing was found for your search!');
  }
}
