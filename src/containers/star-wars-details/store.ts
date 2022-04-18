import { action, makeAutoObservable, observable } from 'mobx';

import { getFilmById } from '../../api/star-wars.api';

export default class StarWarsDetailsStore {
  constructor() {
    makeAutoObservable(this)
  }
  @observable film: any = {};

  @action buildFilmById = async (id: number) => {
    const { data } = await getFilmById(id);
    this.film = data;
  }

}
const starWarsDetails = new StarWarsDetailsStore();
export { starWarsDetails };