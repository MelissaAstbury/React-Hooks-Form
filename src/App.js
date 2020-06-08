import React from "react";

import "./App.scss";

const App = () => {
  return (
    <form>
      <input type="text" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input type="submit" />
    </form>
  );
};

export default App;
