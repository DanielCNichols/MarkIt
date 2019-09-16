
const api = (function() {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/daniel';


  const getBookmarks = function() {
    return fetch(`${BASE_URL}/bookmarks`);
  };

  const createBookmark = function(newItem) {
    let bookmarkString = {};

    bookmarkString.title = newItem.title;

    bookmarkString.url = newItem.url;

    if (newItem.desc) {
      bookmarkString.desc = newItem.desc;
    }
    if (newItem.rating) {
      bookmarkString.rating = newItem.rating;
    }
    const newBookmark = JSON.stringify(bookmarkString);
    return fetch(`${BASE_URL}/bookmarks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newBookmark
    }).then(res=>res)
      .catch(err => console.log(err));
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
 

    return fetch(url, {
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