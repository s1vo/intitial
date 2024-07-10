import { Component } from '../core/Component';
import { ListItem } from './ListItem';

export class List extends Component {
  setup(props) {
    this.props = props;
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $title = document.createElement('h2');
    $title.className = 'donates-container__title';
    $title.textContent = 'Список донатов';
    this.$rootElement.appendChild($title);

    const $donatesListContainer = document.createElement('div');
    $donatesListContainer.className = 'donates-container__donates';
    this.$donatesListContainer = $donatesListContainer;
    this.$rootElement.appendChild($donatesListContainer);

    this.update(this.props.donates);
  }

  update(donates) {
    this.$donatesListContainer.innerHTML = '';

    donates.forEach((donate) => {
      const listItem = new ListItem(donate);
      this.$donatesListContainer.appendChild(listItem.$rootElement);
    });
  }

  addItem(item) {
    this.$donatesListContainer.appendChild(item.$rootElement);
  }
}
