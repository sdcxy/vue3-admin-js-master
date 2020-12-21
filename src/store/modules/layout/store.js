import { readonly } from "vue";
import { createState } from "./state";
import { createActions } from "./actions";


const state = createState();
const actions = createActions(state);

export const useStore = () => { 
  const store = { 
    state: readonly(state),
    actions: readonly(actions)
  }

  return store;
}