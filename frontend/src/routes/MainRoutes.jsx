import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import TrainingMenuList from 'pages/training/TrainingMenuList';
import RegistrationTrainingDetail from 'pages/training/RegistrationTrainingDetail';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const Training = Loadable(lazy(() => import('pages/training/index')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'training',
      element: <Training />
    },
    {
      path: 'training-menu-list',
      element: <TrainingMenuList />
    },
    {
      path: 'registration-training-detail',
      element: <RegistrationTrainingDetail />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    }
  ]
};

export default MainRoutes;
