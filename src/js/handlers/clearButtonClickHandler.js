'use strict';

import clearGallery from '../clearing/clearGallery';
import btnsWrapper from '../services/buttonsWrapper';

/*
 * When you click the "Clear" button: clear the gallery,
 * go to the top of the page, hide "buttons-wrapper"
 */
export default function () {
  clearGallery();
  window.scrollTo(0, 0);
  btnsWrapper.hide();
}
