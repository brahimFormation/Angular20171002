import  * as fromItems from './item';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ItemState {
  items: fromItems.State;
}

export interface State extends fromItems.State {
  'items': ItemState;
}

export const reducers = {
  items: fromItems.reducer
}

export const getItemState = createFeatureSelector<ItemState>('items');

export const getItemsEntitiesState = createSelector(
  getItemState,
  (state: ItemState) => state.items
);

export const getItemsEntities = createSelector(
  getItemsEntitiesState,
  fromItems.getItems
)
