// router.js
import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from './featured/ErrorBoundary';
import HomePage from './pages/home';
import JobGridPage from './pages/job-grid';
import Layout from './featured/layout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/job-grid",
                element: <JobGridPage />
            }
        ]
    },
    {
        path: "*",
        element: <ErrorBoundary />
    }
]);

export default router;
