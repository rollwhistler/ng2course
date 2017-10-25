import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface ListItem {
  id: number;
  name: string;
}

export interface State extends EntityState<ListItem> {
  // additional entities state properties
  selectedListItemId: number | null;
}

export function sortByName(a: ListItem, b: ListItem): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<ListItem> = createEntityAdapter<ListItem>({
  sortComparer: sortByName,
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedListItemId: null
});

export function reducer(state = initialState, action): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
