

function main() {
  list.eventListeners();
  list.render();
}


$(main);

api.getBookmarks()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addBookmark(item));
    list.render();
  });