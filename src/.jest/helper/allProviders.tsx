import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@src/store';

const AllProviders = ({children}: {children: React.ReactNode}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AllProviders;
