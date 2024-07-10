import { App } from './components/App';
import { DemoCounter } from './components/Demo/DemoCounter';
import './index.css';

document.addEventListener('DOMContentLoaded', function () {
  const app = new App();
  document.body.appendChild(app.$rootElement);
});