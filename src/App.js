import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { HomeContainer } from './ContainerLayout/HomeContainer';
import { ExploreContainer } from './ContainerLayout/ExploreContainer';
import { MessageContainer } from './ContainerLayout/MessageContainer';
import { NotificationsContainer } from './ContainerLayout/NotificationsContainer';
import { Sidebar } from './layout/Sidebar';

function App() {
  document.title = "Twitter.com"

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route exact path="/home" element={<HomeContainer />} />
          <Route path="/explore" element={<ExploreContainer />} />
          <Route path="/messages" element={<MessageContainer />} />
          <Route path="/notifications" element={<NotificationsContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
