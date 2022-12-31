

// export type tile = {
//   id: string
//   edges: edge[]
// }

// type edge = {
//   name: string
// }


export interface tile {
  edges: string[]
  rotation: number
  terminatesRoads: boolean
}