import { User } from './models/User';

const user = new User({ id: 1, name: 'new name', age: 30 });

user.on('change', () => {
  console.log(user);
});

user.on('save', () => {
  console.log(user);
});

user.save();
