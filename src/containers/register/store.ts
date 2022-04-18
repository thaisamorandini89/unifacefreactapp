import { action, makeAutoObservable, observable } from 'mobx';

import { assign } from '../../utils/object.util';

export default class RegisterStore {
  constructor() {
    makeAutoObservable(this)
  }
  @observable zipcode?: number;
  @observable github?: string;

  @action handleForm = (event: any, select?: any) => {
    const { name, value } = select || event.target;
    assign(this, name, value);
  };

}
const register = new RegisterStore();
export { register };