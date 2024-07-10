import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.props = props;
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const $label = document.createElement('label');
    $label.className = 'donate-form__input-label';
    $label.innerHTML = `
      Введите сумму в $
      <input class="donate-form__donate-input" name="amount" type="number" max="100" min="1" required>
    `;

    this.$input = $label.querySelector('input');
    this.$input.addEventListener('input', this.handleInput.bind(this));

    const $button = document.createElement('button');
    $button.disabled = true;
    $button.className = 'donate-form__submit-button';
    $button.type = 'submit';
    $button.textContent = 'Задонатить';
    $button.addEventListener('click', this.handleSubmit.bind(this));

    this.$button = $button;
    this.$rootElement.appendChild($label);
    this.$rootElement.appendChild($button);
  }

  handleInput() {
    const value = this.$input.value;
    const isValid = value >= 1 && value <= 100;
    this.$button.disabled = !isValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    const value = parseInt(this.$input.value, 10);

    if (value >= 1 && value <= 100) {
      this.props.onDonate(value);
      this.$input.value = '';
      this.$button.disabled = true;
    }
  }
}
