'use strict';

const bookmark = (function() {
  const create = function(newItem) {
    return {
      title: newItem.title,
      url: newItem.url,
      desc: newItem.desc || null,
      rating: newItem.rating || null,
    };
  };

  return {
    create,
  };
})();
