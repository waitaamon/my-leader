import { Dashboard } from '../components'

export default [
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        meta: {
            needsAuth: true
        }
    }
]