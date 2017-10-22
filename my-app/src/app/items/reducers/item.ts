import { Item } from "@app/items";
import  * as item from "@app/items/actions/items";

export interface State {
  entities: Item[];
}

export const initialState: State = {
  entities: []
}

export function reducer(state = initialState, action: item.Actions): State {
  switch (action.type) {
    case item.LOAD: return state;
    case item.LOAD_SUCCESS: {
      return {
        entities: Object.assign(action.payload)
      }
    }
    default: return state;
  }
}

export const getItems = (state: State) => state.entities;
