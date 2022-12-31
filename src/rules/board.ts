import { infastructureType } from './infastructure'
import { tupleMap } from './map'
import { tile } from './tile'

export type coord = [number, number]

export class boardClass {
  private tiles: tupleMap<tile> = new tupleMap<tile>()
  placeableLocations: tupleMap<boolean> = new tupleMap<boolean>()
  infastructure: {[key in 'roads' | 'castles' | 'monasteries']: infastructureType} = 
    {'roads': {} as infastructureType,
     'castles': {} as infastructureType,
     'monasteries': {} as infastructureType}

  range: {size: [number, number], start: [number, number], end: [number, number]} = 
    {size: [1,1], start: [0,0], end: [0,0]}

  get(coords: coord): tile | undefined {
    return this.tiles.get(coords)
  }
  exists(coords: coord): boolean {
    return this.tiles.get(coords) === undefined
  }

  neighbors(coords: coord): tupleMap<tile> {
    const returnValue = new tupleMap<tile>()
    for (const dx of [-1, 0, 1]) {
      for (const dy of [-1, 0, 1]) {
        const neighborCoords = coords.map((v, i) => v + [dx,dy][i]) as coord
        const neighbor = this.get(neighborCoords)
        if(neighbor) returnValue.set(neighborCoords, neighbor)
      }
    }
    return returnValue
  }

  place(coords: coord, tile: tile) {
    this.tiles.set(coords, tile)

    // update grid values
    this.range.start = this.range.start.map((v,i) => Math.min(v, coords[i])) as [number, number]
    this.range.end = this.range.end.map((v,i) => Math.max(v, coords[i])) as [number, number]
    this.range.size = this.range.size.map((v,i) => 1 + this.range.end[i] - this.range.start[i]) as [number, number]

    // update placeable locations
    this.placeableLocations.delete(coords)
    for (const neighbor of this.directNeighbor(coords)) {
      if(!this.tiles.has(neighbor)) this.placeableLocations.set(neighbor, true)
    }

  }

  // helper function to get cardinal directions of tile
  private directNeighbor(coords: coord): coord[] {
    const returnValue: coord[] = []

    for (const dy of [-1,1]) returnValue.push([coords[0], coords[1] + dy])
    for (const dx of [-1,1]) returnValue.push([coords[0] + dx, coords[1]])

    return returnValue
  }

  get keys() {
    return this.tiles.keys
  }

  public toString() {
    return 'aaaa'
  }
}