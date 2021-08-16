import { Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "../dashboard/Dashboard";

function App() {
  return (
    <div>
      {/* İsmail Şentürk Cv Template  */}
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
      </Switch>
    </div>
  );
}

export default App;
