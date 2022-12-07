import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import PostDetails from './components/PostDetails';
import PostList from './components/PostList';
import UserList from './components/UserList';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <UserList />,
      },
      {
        path: 'user/:id',
        element: <PostList />,
      },
      {
        path: 'post/:id',
        element: <PostDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
