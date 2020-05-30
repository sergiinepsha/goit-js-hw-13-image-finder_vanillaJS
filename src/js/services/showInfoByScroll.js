'use strict';

import successPnotify from './pnotify/success';

/*
 * Observer notify user
 */
export default function (btnsWrapper) {
  const options = {
    threshold: 0.2,
  };
  const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        successPnotify('To get more, click the "load more" button or scroll down the page');
        observer.disconnect();
      }
    });
  }, options);
  intersectionObserver.observe(btnsWrapper);
}
