'use strict';

const bookmark = {
  create(newItem) {
    return {
      title: newItem.title,
      url: newItem.url,
      desc: newItem.desc || null,
      rating: newItem.rating || null,
    };
  },
};

export default bookmark;
