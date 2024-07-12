import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import Landing from './pages/Landing.tsx';
import BarPlot from './charts/barplot.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: 'barplot',    //route for testing chart
        element: <BarPlot />
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
