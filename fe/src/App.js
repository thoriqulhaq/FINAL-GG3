import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home/Home';
import VideoDetail from './pages/VideoDetail/VideoDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "/video/:id",
      element: (
        <VideoDetail />
      ),
    }
  ]);
  
  return <RouterProvider router={router} />
}

export default App;
