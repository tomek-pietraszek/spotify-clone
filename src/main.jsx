import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./utils/StateProvider.jsx";
import reducer, { initialState } from "./utils/reducer.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <StateProvider initialState={initialState} reducer={reducer} >
      <App />
    </StateProvider>
  
);
