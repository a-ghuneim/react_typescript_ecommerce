export function readSavedItems<Item>(key: string): Item[] {
  try {
    const items = JSON.parse(localStorage.getItem(key) ?? "[]");
    return Array.isArray(items) ? items : [];
  } catch {
    return [];
  }
}

export function saveItems<Item>(key: string, items: Item[]) {
  try {
    localStorage.setItem(key, JSON.stringify(items));
  } catch {
    // The store still works for the current visit if storage is unavailable.
  }
}
