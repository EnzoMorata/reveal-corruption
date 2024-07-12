import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import Landing from './pages/Landing.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: 'about',
        element: <div>About</div>
    },
    {
        path: 'default',
        element: <App />
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    );
}
