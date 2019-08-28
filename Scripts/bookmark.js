'use strict'; 

const bookmark = (function() {

  const create = function(newItem) {
    return {
      // id: cuid(),
      title: newItem.title,
      url: newItem.url,
      desc: newItem.desc,
      rating: newItem.rating,
      // expanded: false
    };
  };





  return {
    create
  };

})();