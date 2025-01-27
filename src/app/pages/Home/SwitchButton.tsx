import React from 'react';

import { setView } from '@app/store/homeSearchSlice';
import { useAppDispatch, useAppSelector } from '@app/store/hooks';

function SwitchButton() {
  const dispatch = useAppDispatch();
  const currentView = useAppSelector((state) => state.homeSearch);

  return <button onClick={() => dispatch(setView(currentView.view === 'grid' ? 'list' : 'grid'))}>SwitchButton</button>;
}

export default SwitchButton;
