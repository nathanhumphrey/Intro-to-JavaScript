// imports
import 'bootstrap/dist/css/bootstrap.min.css'; // default bootsrap styling
import Chart from 'chart.js/auto';
import {budget} from './budget-data.js';

// main logic/code
const labels = [
  'Food',
  'Entertainment',
  'Utilities',
  'Transportation',
  'Miscellaneous',
];

const data = {
  labels,
  datasets: [{
    label: 'Monthly $',
    barThickness: 50,
    maxBarThickness: 60,
    minBarLength: 2,
    data: budget,
  }],
};

const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const ctx = document.querySelector('#budget-chart');
new Chart(ctx, config);
