'use strict';

const list = (function() {
  function generateItemString(bookmarklist) {
    let entries = bookmarklist.map(item => generateItemHTML(item));
    return entries.join('');
  }

  function getId(bookmark) {
    return $(bookmark)
      .closest('.bookmark-element')
      .data('item-id');
  }

  function generateForm() {
    return components.addForm();
  }

  function handleCancelAdd() {
    $('body').on('click', '#cancel', function() {
      store.resetAdd();
      render();
    });
  }

  function addForm() {
    $('#main-add').click(function() {
      store.addState();
      let form = generateForm();
      $('.add-item').html(form);
      handleCancelAdd();
    });
  }

  function generateError(message) {
    return `
      <section class="error">
        <button id="cancel-error">X</button>
        <p>${message}</p>
      </section>
    `;
  }

  function renderError() {
    if (store.error) {
      const el = generateError(store.error);
      $('.error').html(el);
    } else {
      $('.error').empty();
    }
  }

  function renderStars(rating) {
    let i = 0;
    let stars = '';
    while (i < rating) {
      stars += `<span class="fa fa-star"></span>`;
      i++;
    }
    return stars;
  }

  function generateItemHTML(bookmark) {
    let starRating =
      bookmark.rating >= 1 ? renderStars(bookmark.rating) : 'Not Rated';

    if (bookmark.expanded === true) {
      return components.bookmarkExpanded(bookmark, starRating);
    } else {
      return components.bookmarkCollapsed(bookmark, starRating);
    }
  }

  function render() {
    let bookmarksStore = [...store.bookmarks];

    if (store.adding === true) {
      const bookmarksString = generateForm();
      $('.add-item').html(bookmarksString);
    } else {
      $('.add-item').empty();
    }

    if (store.filterVal !== undefined) {
      bookmarksStore = bookmarksStore.filter(
        bookmark => bookmark.rating >= store.filterVal
      );
    }
    const bookmarksString = generateItemString(bookmarksStore);
    $('.list-display').html(bookmarksString);
  }

  function serializeJson(form) {
    const formData = new FormData(form);
    const o = {};
    formData.forEach((val, name) => (o[name] = val));
    return o;
  }

  function handleBookmarkSubmit() {
    $('body').on('submit', '#add-form', async function(event) {
      event.preventDefault();
      store.resetAdd();
      let form = document.querySelector('#add-form');
      let item = serializeJson(form);
      let newItem = bookmark.create(item);
      try {
        let newBookmark = await api.createBookmark(newItem);
        store.addBookmark(newBookmark);
        render();
      } catch (error) {
        store.setError(error.message);
        renderError();
      }
    });
  }

  function handleBookmarkDelete() {
    $('.list-display').on('click', '.delete', async function(event) {
      const id = getId(event.currentTarget);
      try {
        await api.deleteBookmark(id).then(() => store.deleteBookmark(id));
        render();
      } catch (error) {
        store.setError(error.message);
        renderError();
      }
    });
  }

  function handleFilter() {
    $('#main-filter').on('mouseup', function() {
      let filterVal = $('#main-filter').val();
      store.filterAdd(filterVal);
      render();
    });
  }

  function toggleExpanded(bookmark) {
    bookmark.expanded = !bookmark.expanded;
  }

  function handleBookmarkExpand() {
    $('.list-display').on('click', '.expand', function(event) {
      const id = getId(event.currentTarget);
      const bookmark = store.findBookmark(id);
      toggleExpanded(bookmark);
      render();
    });
  }

  function eventListeners() {
    handleBookmarkExpand();
    handleBookmarkDelete();
    addForm();
    handleFilter();
    handleBookmarkSubmit();
  }

  return {
    eventListeners,
    render,
  };
})();
