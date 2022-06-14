import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Main } from './Pages/Main/Main';
import { About } from './Pages/About';
import { PageNotFound } from './Pages/PageNotFound';
import { GlobalState } from './context/globalState';

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
