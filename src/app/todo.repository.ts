import { createStore, select, setProps, withProps } from '@ngneat/elf';

interface TodoProps {
  id: number | null;
  title: string;
  description: string;
}

// Store Creation
const todoStore = createStore(
  { name: 'auth' },
  withProps<TodoProps>({ id: null, title: '', description: '' })
);

// Query
export const title$ = todoStore.pipe(select((state) => state.title));

// Update
export function updateTitle(title: TodoProps['title']) {
  todoStore.update((state) => ({
    ...state,
    title,
  }));
}

export function setState(state: any) {
  todoStore.update(setProps(state));
}
