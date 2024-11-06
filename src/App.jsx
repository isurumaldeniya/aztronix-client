import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Login,
  Register,
  About,
  Error,
  UserProfile,
  Landing,
  Organization,
  Dashboard,
  AddOrg,
} from './pages';

// Actions
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';

// importing store
import { store } from './store';
import { useEffect, useState } from 'react';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/profile',
        element: <UserProfile />,
      },
      {
        path: '/org',
        element: <Organization />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: 'addOrg',
        element: <AddOrg />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    // here if we pass the store like this we are already invoking the function
    // But we need to invoke the function only when we submit the form. SO what we can do
    // is make loginAction function return another function
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);
function App() {  
  return <RouterProvider router={router} />;
}

export default App;
