function main() {
  list.eventListeners();
  list.render();

  api.getBookmarks().then(items => {
    items.forEach(item => store.addBookmark(item));
    list.render();
  });
}

$(main);
