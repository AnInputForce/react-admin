export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/analysis' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
        ],
      },
      {
        path: '/form',
        name: 'form',
        icon: 'form',
        authority: ['admin'],
        routes: [
          {
            path: '/form/basic-form',
            name: 'basic-form',
            routes: [
              {
                path: '/form/basic-form/basic-one',
                name: 'basic-one',
                component: './Form/BasicForm/BasicOne',
                exact: false,
              },
              {
                path: '/form/basic-form/basic-two',
                name: 'basic-two',
                component: './Form/BasicForm/BasicTwo',
                exact: false,
              },
            ],
          },
          {
            path: '/form/column-form',
            name: 'column-form',
            routes: [
              {
                path: '/form/column-form/single-column',
                name: 'single-column',
                component: './Form/ColumnForm/SingleColumn',
                exact: false,
              },
              {
                path: '/form/column-form/two-columns',
                name: 'two-columns',
                component: './Form/ColumnForm/TwoColumns',
                exact: false,
              },
              {
                path: '/form/column-form/three-columns',
                name: 'three-columns',
                component: './Form/ColumnForm/ThreeColumns',
                exact: false,
              },
            ],
          },
          {
            path: '/form/step-form',
            name: 'step-form',
            component: './Form/StepForm',
            exact: false,
          },
          {
            path: '/form/advanced-form',
            name: 'advanced-form',
            component: './Form/AdvancedForm',
            exact: false,
          },
        ],
      },
      {
        name: 'exception',
        path: '/exception',
        hideInMenu: true,
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
