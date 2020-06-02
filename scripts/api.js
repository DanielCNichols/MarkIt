const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/daniel';

  function getBookmarks() {
    return fetch(`${BASE_URL}/bookmarks`, {
      headers: {
        'content-type': 'application/json',
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }

  function createBookmark(newItem) {
    return fetch(`${BASE_URL}/bookmarks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }

  function editBookmark(id, updated) {
    return fetch(`${BASE_URL}/bookmarks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updated),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }

  function deleteBookmark(id) {
    return fetch(`${BASE_URL}/bookmarks/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : null));
  }

  return {
    getBookmarks,
    deleteBookmark,
    editBookmark,
    createBookmark,
  };
})();
