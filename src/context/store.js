import {createContext} from 'react';

export const initialState = {
  selectedCity: {},
};

const Context = createContext(initialState);

export default Context;
