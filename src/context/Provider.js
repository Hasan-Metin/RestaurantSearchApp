import React, {useReducer} from 'react';

import {reducer} from './reducer';
import Context, {initialState} from './store';

const Provider = ({childeren}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{state, dispatch}}>{childeren}</Context.Provider>
  );
};

export default Provider;
