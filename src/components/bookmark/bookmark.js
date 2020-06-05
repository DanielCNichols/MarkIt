import styles from './bookmark.module.css';

const bookmark = {
  bookmarkCollapsed(bookmark, starRating) {
    return `
     <li class="${styles.bookmarkItem} bookmark-item" data-item-id="${bookmark.id}">
        <div class="${styles.head}">
          <h3>${bookmark.title}</h3>
        </div>
        <div class="${styles.rating}">
         ${starRating}
        </div>
        <div class="${styles.itemControlsContainer}">
          <div class="${styles.itemControls}">
            <div class="${styles.toolTip}">
              <span class="${styles.toolTipText}">Edit</span>
            </div>
            <div class="${styles.toolTip} ${styles.delete}>
              <span class="${styles.toolTipText}">Delete</span>
            </div>
            <div class="${styles.toolTip}">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="${bookmark.url}"
              >
              </a>
              <span class="${styles.toolTip}text">Visit</span>
            </div>
          </div>
        </div>
        <div class="expand ${styles.itemExpand} expand">
          <span>More</span>
        </div>
      </li>
    `;
  },

  bookmarkExpanded(bookmark, starRating) {
    return `
    <li class="${styles.bookmarkItemExpanded} bookmark-item" data-item-id="${
      bookmark.id
    }">
            <div class="${styles.headExpanded}">
              <h3>${bookmark.title}</h3>
            </div>
            <div class="${styles.ratingExpanded}">
            ${starRating}
            </div>
            <div class="${styles.url}">
              <p>${bookmark.url}</p>
            </div>
            <div class="${styles.desc}">
              <p>${bookmark.desc || 'Add a description'}</p >
            </div>
            <div class="${styles.itemControlsContainerExpand}">
              <div class="${styles.itemControlsExpand}">
                <div class="${styles.less} expand">
                  <span>Less</span>
                </div>
                <div class="${styles.toolTip}">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="${bookmark.url}"
                  >
                  </a>
                  <span class="${styles.toolTipText}">Visit</span>
                </div>
              </div>
            </div>
          </li>
        ) 
    `;
  },
};

export default bookmark;
