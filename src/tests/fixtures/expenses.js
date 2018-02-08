import moment from 'moment';

export default [{
  id: '1',
  description: 'Gum',
  note: "don't swallow it",
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Mortgage',
  note: "house payment",
  amount: 115523,
  createdAt: moment(0).add(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit card',
  note: "pay off and close",
  amount: 3700,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}]