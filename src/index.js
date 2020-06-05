import $ from 'jquery';
import list from './list';
import api from './api';
import store from './store';
import test from './test.module.css';
console.log(test);

function main() {
  document.getElementById('main-add').classList.add(`${test.boosh}`);
  list.eventListeners();
  list.render();
  api.getBookmarks().then((items) => {
    items.forEach((item) => store.addBookmark(item));
    list.render();
  });
}

$(main);
