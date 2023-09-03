import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/layout';
import Landing from './pages/landing/landing';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import UserPage from './pages/user/userPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<UserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
