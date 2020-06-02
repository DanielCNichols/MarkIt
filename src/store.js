'use strict';

const store = {
  bookmarks: [],
  adding: false,
  editing: false,
  showError: false,
  filterVal: null,
  error: null,

  addBookmark(newBookmark) {
    this.bookmarks.push(newBookmark);
  },

  setError(error) {
    this.error = error;
  },

  deleteBookmark(id) {
    this.bookmarks = this.bookmarks.filter(item => item.id !== id);
  },

  findBookmark(id) {
    return this.bookmarks.find(bookmark => bookmark.id === id);
  },

  addState() {
    console.log('running');
    this.adding = true;
  },

  resetAdd() {
    this.adding = false;
  },

  filterAdd(filterVal) {
    this.filterVal = filterVal;
  },
};

export default store;
