import React from "react";

import { CalendarEvent } from "./components/calendar-event/calendar-event";

import "./assets/scss/styles.scss";

function App() {
  return (
    <div className="App">
      <CalendarEvent event={{
        group: 'Homies'
      }} />
    </div>
  );
}

export default App;
