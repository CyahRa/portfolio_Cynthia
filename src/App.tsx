import {BrowserRouter} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css"; // Importez les styles CSS
import { ToastContainer } from "react-toastify";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux";


const App = () => {
  
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Router />
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default App;