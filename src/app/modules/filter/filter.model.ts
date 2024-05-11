import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Selectitem } from '@shared/models/select-items.model';

@Injectable()
export class FilterViewModel {

  public filterForm = new FormGroup({
    searchField: new FormControl(null),
    multiSelect: new FormControl(null),
    singleSelect: new FormControl(null)
  })

  public multiSelectItems: Selectitem[] = [
    {
      id: 1,
      name: "Я участник"
    },
    {
      id: 2,
      name: "Строгий поиск"
    },
    {
      id: 3,
      name: "В заголовках"
    }
  ]

  public singleSelectItems: Selectitem[] = [
    {
      id: 1,
      name: "Теги"
    },
    {
      id: 2,
      name: "Просьбы"
    },
    {
      id: 3,
      name: "Контакты"
    }
  ]

  constructor(

  ){

  }

}
