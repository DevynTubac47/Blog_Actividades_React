import { element } from "prop-types";
import { DashboardPage } from './pages/dashboard/DashboardPage'
import { PublicationsPage } from './pages/publications/PublicationsPage'

export const routes = [
    { path: '/', element: <DashboardPage/> },  
    { path: '/publicaciones', element: <PublicationsPage/> },
]

