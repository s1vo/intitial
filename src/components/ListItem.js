import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.props = props;
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.innerHTML = `
      ${this.props.date} - <b>$${this.props.amount}</b>
    `;
  }
}
