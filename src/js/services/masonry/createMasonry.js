'use strict';

import refs from '../../refs';
import imagesLoaded from 'imagesloaded';
import masonryInstance from './masonryInstance';
import appendedMasonry from './appendedMasonry';
import activateMasonry from './activateMasonry';
import spinner from '../spinner';

/*
 * Creating masonry or adding elements to it again
 */
export default function (imgsArr) {
  imagesLoaded(refs.gallery, () => {
    !masonryInstance.hasOwnProperty('instance') ? activateMasonry() : appendedMasonry(imgsArr);
    spinner.hide();
  });
}
