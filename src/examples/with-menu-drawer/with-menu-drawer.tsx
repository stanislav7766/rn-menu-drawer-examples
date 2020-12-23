import React, {useState} from 'react';

import {MenuDrawer} from '@stanislav7766/rn-menu-drawer';
import YourApp from '../../your-app';
import MenuContent from '../../menu-content';

const WithMenuDrawer = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const App = <YourApp />;
  const SomeMenuContent = <MenuContent />;

  const ScreenWithMenu = (
    <MenuDrawer
      open={showMenu}
      onShowMenu={setShowMenu}
      MenuContent={SomeMenuContent}
      animationTime={250}
      backgroundColor="#000"
      position="left"
      drawerWidth={300}
      paddingGesture={50}
      tapToClose
      opacity={0.35}>
      {App}
    </MenuDrawer>
  );

  return <>{ScreenWithMenu}</>;
};

export default WithMenuDrawer;
