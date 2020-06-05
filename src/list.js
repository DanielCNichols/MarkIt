'use strict';
import $ from 'jquery';
import store from './store';
import components from './components';
import bookmark from './bookmark';
import api from './api';
import form from './components/addForm/add-form';
import mark from './components/bookmark/bookmark';
const list = {
  generateItemString(bookmarklist) {
    let entries = bookmarklist.map((item) => list.generateItemHTML(item));
    return entries.join('');
  },

  getId(bookmark) {
    return $(bookmark).closest('.bookmark-item').data('item-id');
  },

  generateForm() {
    // return components.addForm();
    return form.formTemp();
  },

  handleCancelAdd() {
    $('body').on('click', '#cancel', function () {
      store.resetAdd();
      list.render();
    });
  },

  addForm() {
    $('#main-add').click(function () {
      store.addState();
      let form = list.generateForm();
      $('.add-item').html(form);
      list.handleCancelAdd();
    });
  },

  generateError(message) {
    return `
      <section class="error">
        <button id="cancel-error">X</button>
        <p>${message}</p>
      </section>
    `;
  },

  renderError() {
    if (store.error) {
      const el = list.generateError(store.error);
      $('.error').html(el);
    } else {
      $('.error').empty();
    }
  },

  renderSubmitError() {
    if (store.error) {
      const el = `<p>${store.error}</p>`;
      $('#add-error').html(el);
    } else {
      $('#add-error').empty();
    }
  },

  renderStars(rating) {
    let i = 0;
    let stars = '';
    while (i < rating) {
      stars += `<span>*</span>`;
      i++;
    }
    return stars;
  },

  generateItemHTML(bookmark) {
    let starRating =
      bookmark.rating >= 1 ? list.renderStars(bookmark.rating) : 'Not Rated';

    if (bookmark.expanded === true) {
      return mark.bookmarkExpanded(bookmark, starRating);
    } else {
      return mark.bookmarkCollapsed(bookmark, starRating);
    }
  },

  render() {
    let bookmarksStore = [...store.bookmarks];

    if (store.adding === true) {
      const bookmarksString = list.generateForm();
      $('.add-item').html(bookmarksString);
    } else {
      $('.add-item').empty();
    }

    if (store.filterVal !== undefined) {
      bookmarksStore = bookmarksStore.filter(
        (bookmark) => bookmark.rating >= store.filterVal
      );
    }
    const bookmarksString = list.generateItemString(bookmarksStore);
    $('.list-display').html(bookmarksString);
  },

  serializeJson(form) {
    const data = new FormData(form);
    const formObject = {};
    data.forEach((val, name) => (formObject[name] = val));
    return formObject;
  },

  handleBookmarkSubmit() {
    $('body').on('submit', '#add-form', async function (event) {
      event.preventDefault();
      store.resetAdd();
      let form = document.querySelector('#add-form');
      let item = list.serializeJson(form);
      let newItem = bookmark.create(item);
      try {
        let newBookmark = await api.createBookmark(newItem);
        store.addBookmark(newBookmark);
        list.render();
      } catch (error) {
        store.setError(error.message);
        list.renderSubmitError();
      }
    });
  },

  handleBookmarkDelete() {
    $('.list-display').on('click', '.delete', async function (event) {
      const id = list.getId(event.currentTarget);
      try {
        await api.deleteBookmark(id).then(() => store.deleteBookmark(id));
        list.render();
      } catch (error) {
        store.setError(error.message);
        list.renderError();
      }
    });
  },

  handleFilter() {
    $('#main-filter').on('mouseup', function () {
      let filterVal = $('#main-filter').val();
      store.filterAdd(filterVal);
      list.render();
    });
  },

  toggleExpanded(bookmark) {
    bookmark.expanded = !bookmark.expanded;
  },

  handleBookmarkExpand() {
    $('.list-display').on('click', '.expand', function (event) {
      const id = list.getId(event.currentTarget);
      console.log(event.currentTarget);
      console.log(id);
      const bookmark = store.findBookmark(id);
      list.toggleExpanded(bookmark);
      list.render();
    });
  },

  eventListeners() {
    list.handleBookmarkExpand();
    list.handleBookmarkDelete();
    list.addForm();
    list.handleFilter();
    list.handleBookmarkSubmit();
  },
};

export default list;
