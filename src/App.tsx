import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/layout';
import Landing from './pages/landing/landing';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import UserPage from './pages/user/userPage';
import DetailUserPage from './pages/user/detailUserPage';
import ClassPage from './pages/class/classPage';
import MenteePage from './pages/mentee/menteePage';
import MenteeAddPage from './pages/mentee/menteeAddPage';
import DetailFeedPage from './pages/mentee/detailFeedPage';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
function App() {
  axios.defaults.baseURL = 'http://34.136.141.80:443';
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/detail-user/:id" element={<DetailUserPage />} />
            <Route path="/class" element={<ClassPage />} />
            <Route path="/mentee" element={<MenteePage />} />
            <Route path="/mentee-add" element={<MenteeAddPage />} />
            <Route path="/feedback/:id" element={<DetailFeedPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
