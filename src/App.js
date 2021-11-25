import React from 'react';
import {Container} from './layout/Container';
import {Sidebar} from './layout/Sidebar';
import {Contents} from './layout/Contents';
import {Widgets} from './layout/Widgets';
import './App.css';
// import { ExploreContent } from './link/ExploreContent';
// import { ExploreWidget } from './link/ExploreWidget'
// import { MessageContent } from './link/MessageContent';
// import { MessageWidget } from './link/MessageWidget';
// import { NotificationsContent } from './link/NotificationsContent';
// import { NotificationsWidget } from './link/NotificationsWidget';


function App() {
  return (
    <div className="App">
      <Container>
        <Sidebar />
        <Contents />
        <Widgets />
      </Container>      
    </div>
  );
}

export default App;
