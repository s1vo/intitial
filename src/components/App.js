import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';

export class App extends Component {
    setup() {
        this.state = {
            donates: [],
            totalAmount: 0,
        };

        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'app';

        // Заголовок с общей суммой
        const $totalAmount = document.createElement('h1');
        $totalAmount.className = 'total-amount';
        $totalAmount.innerHTML = `Итого: $<span>${this.state.totalAmount}</span>`;
        this.$totalAmount = $totalAmount;
        this.$rootElement.appendChild($totalAmount);

        // Форма доната
        const form = new Form({
            onDonate: this.handleDonate.bind(this),
        });
        this.$rootElement.appendChild(form.$rootElement);

        // Список донатов
        const list = new List({
            donates: this.state.donates,
        });
        this.$list = list;
        this.$rootElement.appendChild(list.$rootElement);
    }

    handleDonate(amount) {
        const newDonate = {
            date: new Date().toLocaleString(),
            amount,
        };

        this.state.donates.push(newDonate);
        this.state.totalAmount += amount;

        this.$totalAmount.querySelector('span').textContent = this.state.totalAmount;
        this.$list.update(this.state.donates);
    }
}
