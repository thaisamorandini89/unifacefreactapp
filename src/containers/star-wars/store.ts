import { action, makeAutoObservable, observable } from 'mobx';

import { getFilms } from '../../api/star-wars.api';

export default class StarWarsStore {
  constructor() {
    makeAutoObservable(this)
  }
  @observable films: any[] = [];

  @action buildFilms = async () => {
    const { data } = await getFilms();
    this.films = data;
  }

}
const starWars = new StarWarsStore();
export { starWars };