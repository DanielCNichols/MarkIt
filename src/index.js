import $ from 'jquery';
import list from './list';
import api from './api';
import store from './store';

function main() {
  list.eventListeners();
  list.render();
  api.getBookmarks().then((items) => {
    items.forEach((item) => store.addBookmark(item));
    list.render();
  });
}

$(main);
