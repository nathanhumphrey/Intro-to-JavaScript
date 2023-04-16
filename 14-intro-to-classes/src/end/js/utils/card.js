import {createCardElement} from '../dom/card.js';

class Card {
  constructor({title, description}) {
    this.element = createCardElement({title, description});
    this.toLearnList = document.querySelector('.to-learn-stickies');
    this.understoodList = document.querySelector('.understood-stickies');
    this.addEventListeners();
    this.render();
  }

  render() {
    this.toLearnList.append(this.element);
  }

  remove() {
    this.element.remove();
  }

  moveToTop() {
    this.toLearnList.insertBefore(this.element, this.toLearnList.firstElementChild);
  }

  moveToUnderstood() {
    this.understoodList.append(this.element);
    const understoodButton = this.element.firstElementChild.children[4];
    understoodButton.remove();
  }

  addEventListeners() {
    const cardBody = this.element.firstElementChild;
    const removeButton = cardBody.children[2];
    const topPriorityButton = cardBody.children[3];
    const understoodButton = cardBody.children[4];

    removeButton.addEventListener('click', () => {
      this.remove();
    });

    topPriorityButton.addEventListener('click', () => {
      this.moveToTop();
    });

    understoodButton.addEventListener('click', () => {
      this.moveToUnderstood();
    });
  }
}

export {Card};
