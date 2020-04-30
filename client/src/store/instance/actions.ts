import { Graph, SET_GRAPH } from './types';

export function setGraph(grap: Graph) {
  return {
    type: SET_GRAPH,
    payload: grap,
  };
}
