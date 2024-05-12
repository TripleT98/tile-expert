import { Injectable } from "@angular/core";
import { FormGroup, FormControl, AbstractControl } from "@angular/forms";
import { Selectitem } from '@shared/models/select-items.model';

@Injectable({
  providedIn: 'root'
})
export class FilterViewModel {

  public filterForm = new FormGroup({
    searchField: new FormControl(null),
    multiSelect: new FormGroup({}),
    singleSelect: new FormGroup({})
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

  public history: string[] = [
    "Закрыть теги",
    "Кнопка",
    "Приложение",
    "Форма",
    "Текстовое поле",
    "Закрыть теги",
    "Кнопка",
    "Приложение",
    "Форма",
    "Текстовое поле",
  ]

  public searchPlaceholder: string = "Имя или должность"
  public searchLabel: string = "Автор"

  constructor(

  ){
    this.initForm(this.multiSelectItems, this.filterForm.controls.multiSelect);
    this.initForm(this.singleSelectItems, this.filterForm.controls.singleSelect);
    //this.filterForm.valueChanges.subscribe(console.log)
  }

  private initForm(items: Selectitem[], form: FormGroup){
    items.forEach(item => {
      form.addControl(String(item.id), new FormControl(false));
    })
  }

  public singleFormChange(itemId: number){
    const controls: Record<string, FormControl> = this.filterForm.controls.singleSelect.controls;
    const control: FormControl = controls['' + itemId];
    const value = control.value;
    if (!value) {
      return;
    }
    for(let i in controls){
      const anotherControl = controls[i];
      if (control === anotherControl){
        continue;
      }
      anotherControl.setValue(false);
    }
  }

}
