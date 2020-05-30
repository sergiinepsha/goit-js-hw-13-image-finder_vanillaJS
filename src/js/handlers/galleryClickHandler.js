'use strict';

import * as basicLightbox from 'basiclightbox';

/*
 * By clicking on the element, we launch a modal window with a large image
 */
export default function ({ target }) {
  const instance = basicLightbox.create(`<img src="${target.dataset.source}" />`);
  instance.show();
}
