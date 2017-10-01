import React from 'react';
import { CHANGE_AUTH } from '../utils/actionType';

const auth = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};

export default auth;



