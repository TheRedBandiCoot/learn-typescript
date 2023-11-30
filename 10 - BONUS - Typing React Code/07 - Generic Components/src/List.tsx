import type { ReactNode, Key } from 'react';

export type ListProps<T> = {
  items: T[];
  getKey: (item: T) => Key;
  renderItem: (item: T) => ReactNode;
};

export function List<T>({ items, getKey, renderItem }: ListProps<T>) {
  return (
    <>
      {items.map((item) => (
        <h1 key={getKey(item)}>{renderItem(item)}</h1>
      ))}
    </>
  );
}
