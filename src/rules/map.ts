export class tupleMap<T> {
  private map = new Map<string, T>()

  private p(key: [number, number]) {
    return JSON.stringify(key)
  }


  set(key: [number, number], value: T): this {
      this.map.set(this.p(key), value)
      return this
  }

  get(key: [number, number]): T | undefined {
      return this.map.get(this.p(key))
  }

  clear() {
      this.map.clear()
  }

  delete(key: [number, number]): boolean {
      return this.map.delete(this.p(key))
  }

  has(key: [number, number]): boolean {
      return this.map.has(this.p(key))
  }

  get size() {
      return this.map.size
  }

  get keys() {
    return Array.from(this.map.keys()).map(v => JSON.parse(v))
  }
}