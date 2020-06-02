const components = (function() {
  function addForm() {
    return `<form id="add-form">
    <fieldset>
    <div><label for="title"><span>Title</span></label></div>
    <div><input name="title" id="title" type="text" placeholder="Reddit" required></div>

      <div><label for="url"><span>URL</span></label></div>
      <div><input name="url" id="url" type="url" placeholder="https://www.reddit.com"></div>

      <div><label for="desc"><span>Description</span></label></div>
      <div><textarea name="desc"type="textarea" placeholder="A short description of the website"></textarea></div>

      <div><label for="rating"><span>Rating</span></label></div>
      <div><select name="rating"id="rating"></div>
      <option value=''>Select Rating</option>
      <option value="1">&#x2605;</option> 
      <option value="2">&#x2605;&#x2605;</option>
      <option value="3">&#x2605;&#x2605;&#x2605;</option>
      <option value="4">&#x2605;&#x2605;&#x2605;&#x2605;</option>
      <option value="5">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</option>
    </select></div>
    </fieldset>
    <button class="button" type="submit">Submit</button>
    <button class="button" type="button" id="cancel">Cancel</button>
  </form>`;
  }

  function bookmarkExpanded(bookmark, starRating) {
    return `<li class="bookmark-element" data-item-id="${bookmark.id}">
        <div class="star-rating">Your rating: ${starRating}</div>
        <div class="title-element"><p><a target="_blank" href="${
          bookmark.url
        }">${bookmark.title}</p></a></div>
        <div class = "bookmark-info ${bookmark.expanded}">
            <p>${bookmark.desc || "You haven't written a description"}</p>
            <div class="visit">
              <a target="_blank" href="${bookmark.url}">Visit Site</a>
            </div>
          </div>
        <div  class="bookmark-controls">
            <button class="item-controls expand">Less</button>
            <button class="item-controls delete">Delete</button>
        </div>
      </li>`;
  }

  function bookmarkCollapsed(bookmark, starRating) {
    return `<li class="bookmark-element" data-item-id="${bookmark.id}"> 
      <div class="star-rating">Your rating: ${starRating}</div>
      <div class="title-element"><p><a target="_blank" href="${bookmark.url}">${bookmark.title}</p></a></div>
      <div  class="bookmark-controls">
          <button class="expand">More</button>
      </div>
    </li>`;
  }

  return {
    bookmarkExpanded,
    bookmarkCollapsed,
    addForm,
  };
})();
