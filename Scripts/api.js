'use strict';


const api = (function() {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/daniel';


  const getBookmarks = function() {
    return fetch(`${BASE_URL}/bookmarks`);
  };

  const createBookmark = function(newItem) {
    const newBookmark = JSON.stringify({
      title: newItem.title,
      url: newItem.url,
      desc: newItem.desc,
      rating: newItem.rating,
    });

    return fetch(`${BASE_URL}/bookmarks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newBookmark
    });
  };

  const editBookmark = function(id, updateInfo) {
    return fetch(`${BASE_URL}/bookmarks/${id}`, {
      methd: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateInfo)
    });
  };

  const deleteBookmark = function(id) {
    let url = `${BASE_URL}/bookmarks/${id}`;
 

    return fetch(`${BASE_URL}/bookmarks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };



  return {
    getBookmarks,
    deleteBookmark,
    editBookmark,
    createBookmark

  };




})();