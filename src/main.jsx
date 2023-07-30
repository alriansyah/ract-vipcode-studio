import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import ErrorPage from './pages/404';
import ProductPage from './pages/product';
import ProfilePage from './pages/profile';
import DetailProdukPage from './pages/detailProduk';
import { Provider } from 'react-redux';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/products",
    element: <ProductPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/product/:id",
    element: <DetailProdukPage />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
