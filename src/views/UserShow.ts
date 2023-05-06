import { IUserProps, User } from '../models/User';
import { View } from './View';

export class UserShow extends View<User, IUserProps> {
  template(): string {
    return `
        <div>
            <h1>User Form</h1>
            <div>User name: ${this.model.get('name')}</div>
            <div>User age: ${this.model.get('age')}</div>
            <input placeholder="${this.model.get('name')}"/>
            </div>
    `;
  }
}
