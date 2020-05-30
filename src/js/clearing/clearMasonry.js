'use strict';

import masonryInstance from '../services/masonry/masonryInstance';

/*
 * Clearing the masonry
 */
export default function () {
  if (masonryInstance.hasOwnProperty('instance')) {
    delete masonryInstance.instance;
  }
}
