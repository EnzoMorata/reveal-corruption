import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import App from './App.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello world!</div>,
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
