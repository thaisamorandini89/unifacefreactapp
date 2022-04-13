import { action, makeAutoObservable, observable } from 'mobx';
import swal from 'sweetalert2';

export default class CombustivelStore {
  constructor() {
    makeAutoObservable(this)
  }
  
  @observable etanol = 0;
  @observable gasolina = 0;

  @action submit = () => {

    const { etanol, gasolina } = this;
    if (!isNaN(Number(etanol)) && !isNaN((Number(gasolina)))) {
      const value = Number(etanol) / Number(gasolina);

      if (value > 0.70) {
        swal.fire('Vale a pena gasolina', '', 'success');
      } else if (value < 0.70) {
        swal.fire('Vale a pena etanol', '', 'success');
      } else {
        swal.fire('São equivalentes', '', 'info');
      }
    } else {
      swal.fire('Preencha valores válidos', '', 'warning');
    }
  }

  @action handleForm = (event: any, select?: any) => {
    const { name, value } = select || event.target;
    this[name] = value;
  }
}

const combustivel = new CombustivelStore();
export { combustivel };