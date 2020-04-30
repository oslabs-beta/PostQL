import {
  Inst,
  InstActionTypes,
  SET_INSTANCE,
} from './types';

const initialState: Inst = {
  instanceData: {},
};

export function queryReducer(
  state = initialState,
  action: InstActionTypes,
): Inst {
  switch (action.type) {
    case SET_INSTANCE:
      return {
        ...state,
        instanceData: {
          ...state.instanceData,
          ...action.payload.instanceData,
        },
      };
    default:
      return state;
  }
}
