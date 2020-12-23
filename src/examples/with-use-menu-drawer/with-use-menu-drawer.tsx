import React from 'react';

import {useMenuDrawer} from '@stanislav7766/rn-menu-drawer';
import YourApp from '../../your-app';
import MenuContent from '../../menu-content';

const WithUseMenuDrawer = () => {
  const App = <YourApp />;

  const SomeMenuContent = <MenuContent />;

  const [ScreenWithMenu] = useMenuDrawer({
    MenuContent: SomeMenuContent,
    children: App,
    animationTime: 250,
    backgroundColor: '#000',
    position: 'left',
    drawerWidth: 300,
    paddingGesture: 50,
    tapToClose: true,
    opacity: 0.35,
  });

  return <>{ScreenWithMenu}</>;
};

export default WithUseMenuDrawer;
