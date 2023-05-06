import { Collection } from './models/Collection';
import { IUserProps, User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
