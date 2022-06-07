import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import { HomePage } from "./pages/home";
import { Provider } from "react-redux";
import { store } from "./store";
import { CityPage } from "./pages/city";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:city" element={<CityPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
