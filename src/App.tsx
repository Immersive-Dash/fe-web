import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/layout';
import Landing from './pages/landing/landing';
import Dashboard from './pages/dashboard/dashboard';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
