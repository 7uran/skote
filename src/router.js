import { createBrowserRouter, Navigate } from 'react-router-dom';
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
                path: "/job-list",
                element: <HomePage />
            },
            {
                path: "/job-grid",
                element: <JobGridPage />
            },
            {
                index: true,
                element: <Navigate to="/job-list" replace />
            }
        ]
    },
    {
        path: "*",
        element: <ErrorBoundary />
    }
]);

export default router;
