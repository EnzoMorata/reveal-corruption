import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import Landing from './pages/Landing.tsx';
import { BarPlot } from './charts/BarPlot.tsx';
import App from './App.tsx';

// test barplot 
const size = {
    width: 600,
    height: 500
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // eventually this will be a fetch

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: 'barplot',    //route for testing chart
        element: <BarPlot size={size} data={data} />
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
