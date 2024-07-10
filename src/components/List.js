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

    this.$donatesList = document.createElement('div');
    this.$donatesList.className = 'donates-container__donates';
    this.$rootElement.appendChild(this.$donatesList);

    this.update(this.props.donates);
  }

  update(donates) {
    this.$donatesList.innerHTML = '';

    donates.forEach((donate) => {
      const listItem = new ListItem(donate);
      this.$donatesList.appendChild(listItem.$rootElement);
    });
  }
}
