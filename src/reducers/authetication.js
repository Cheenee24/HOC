import { CHANGE_AUTH } from '../utils/actionType';

import React from 'react';

const componentName = (state=true, action) => {
  switch (action.type){
  case CHANGE_AUTH: 
    return action.payload;
  }
	
  return state;
};

export default componentName;
