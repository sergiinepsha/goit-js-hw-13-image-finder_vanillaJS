'use strict';

import refs from '../refs';

/*
 * Object for starting and hiding the spinner
 */
export default {
  show() {
    refs.spinner.classList.remove('is-hidden');
  },
  hide() {
    refs.spinner.classList.add('is-hidden');
  },
};
