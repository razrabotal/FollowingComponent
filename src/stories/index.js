import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from '../App';
import FollowingWrap from '../components/FollowingWrap/FollowingWrap';
import FollowingComponent from '../components/FollowingComponent/FollowingComponent';
import InputsGroup from '../components/InputsGroup/InputsGroup';
const state = {
  open: false,
  selectValues: [
    { value: 0, text: 'None' },
    { value: 1, text: 'Single' },
    { value: 2, text: 'Twin' },
    { value: 3, text: 'Triple' },
    { value: 4, text: 'Quadro' },
  ],
  settings: [
    {
      id: 1,
      type: 1,
      size: 12
    },
    {
      id: 2,
      type: 2,
      size: 22
    },
    {
      id: 3,
      type: 1,
      size: 25
    }
  ]
};

storiesOf('FollowingComponent', module)
  .add('Together', () => <App /> )
  .add('Wrap', () => {
    return <FollowingWrap
      settings={state.settings}
      selectValues={state.selectValues} />
  } )
  .add('Component', () => { 
    return <FollowingComponent
      settings={state.settings}
      selectValues={state.selectValues} /> })
  .add('InputsGroup', () => { 
    return <InputsGroup
      item={state.settings[0]} 
      selectValues={state.selectValues || []} /> }
  );