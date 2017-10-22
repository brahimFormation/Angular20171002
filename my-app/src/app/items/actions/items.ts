import { Action } from "@ngrx/store";
import { Item } from "@app/items";

export const LOAD = '[ITEMS] Load';
export const LOAD_SUCCESS = '[ITEMS] Load Success';

export class LoadItemAction implements Action {
  readonly type = LOAD;
}

export class LoadItemSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Item[]) {

  }
}

export type Actions = LoadItemAction | LoadItemSuccessAction;
