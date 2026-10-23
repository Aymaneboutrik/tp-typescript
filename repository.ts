export class Repository<T extends { id: number }> {
  private items: T[] = [];
  private nextId = 1;

  add(item: Omit<T, "id">): T {
    const entity = { id: this.nextId++, ...item } as T;
    this.items.push(entity);
    return entity;
  }

  findAll(): T[] {
    return [...this.items];
  }
}