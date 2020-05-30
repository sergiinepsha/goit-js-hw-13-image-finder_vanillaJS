'use strict';

import btnsWrapper from '../buttonsWrapper';
import Masonry from 'masonry-layout';
import masonryInstance from './masonryInstance';

/*
 * Creating masonry and showing " buttons-wrapper"
 */
export default function () {
  const masonry = new Masonry('.js-gallery', {
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    gutter: 20,
    fitWidth: true,
    transitionDuration: '0.6s',
    stagger: 20,
  });
  masonryInstance.instance = masonry;
  btnsWrapper.show();
}
