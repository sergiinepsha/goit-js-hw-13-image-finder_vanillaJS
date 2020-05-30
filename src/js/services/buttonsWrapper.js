'use strict';

import refs from '../refs';

/*
 * The object of hiding or showing the "buttons-wrapper"
 */
export default {
  show() {
    refs.btnsWrapper.classList.remove('is-hidden');
  },
  hide() {
    refs.btnsWrapper.classList.add('is-hidden');
  },
};
