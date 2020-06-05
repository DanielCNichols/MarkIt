import styles from './form.module.css';

const form = {
  formTemp() {
    return `
    <div class="${styles.overlay}">
      <div class="${styles.modal}">
    <form id="add-form" class="${styles.addForm}">
          <fieldset>
            <legend>Add Bookmark
              <label class="${styles.addFormTitle}">
                Title
                <input
                  type="text"
                  name="title"
                  aria-required="true"
                  aria-label="Title"
                />
              </label>
              <label class="${styles.addFormUrl}">
                Url
                <input
                  type="text"
                  name="url"
                  aria-required="true"
                  aria-label="Url"
                />
              </label>
              <label class="${styles.addFormRating}">
                Rating
                <select
                  name="rating"
                  aria-required="false"
                  aria-label="Select Rating"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label class="${styles.addFormDesc}">
                Description
                <textarea
                  name="desc"
                  rows="5"
                  class="desc"
                  aria-required="false"
                  aria-label="Description"
                ></textarea>
              </label>
              </legend>
          </fieldset>
          <div class="${styles.addFormControls}">
          <button id="cancel" type="button" class="cancel">
          <span>Cancel</span>
          </button>
          <button class="save" type="submit">
          <span>Save</span>
          </button>
          </div>
          <div class="${styles.error}" id = "add-error" > <div>
        </form>
        </div>
        </div>
        `;
  },
};

export default form;
