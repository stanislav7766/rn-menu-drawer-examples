import React from 'react';

import {useMenuDrawer} from '@stanislav7766/rn-menu-drawer';
import YourApp from '../../your-app';
import MenuContent from '../../menu-content';

const WithUseMenuDrawerDefault = () => {
  const App = <YourApp />;

  const SomeMenuContent = <MenuContent />;

  const [ScreenWithMenu] = useMenuDrawer({
    MenuContent: SomeMenuContent,
    children: App,
  });

  return <>{ScreenWithMenu}</>;
};

export default WithUseMenuDrawerDefault;
