'use strict';

import apiService from '../api/apiService';
import clearGallery from './clearGallery';
import clearMasonry from './clearMasonry';

/*
 * Clearing the gallery, masonry, apiService before a new request
 */
export default function () {
  apiService.resetPage();
  apiService.setTotal(0);
  clearGallery();
  clearMasonry();
}
