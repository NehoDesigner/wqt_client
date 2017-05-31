/**
 * Created by Neho
 */
export const routes = [{
	name: 'home',
	path: '/',
	component: (resolve) => {
		require(['../components/pages/home.vue'], resolve)
	}
},{
  name: 'layout',
  path: '/layout',
  component: (resolve)=> {
    require(['../components/layout/layout.vue'], resolve)
  },children: [
    {
      name: 'index',
      path: '/index',
      component: (resolve)=> {
        require(['../components/pages/index.vue'], resolve)
      },
       meta: { routeLevel: 1 }
    },{
      name: 'resume',
      path: '/resume',
      component: (resolve)=> {
        require(['../components/pages/resume.vue'], resolve)
      },
       meta: { routeLevel: 1 }
    },{
      name: 'production',
      path: '/production/:id',
      component: (resolve)=> {
        require(['../components/pages/production.vue'], resolve)
      },
       meta: { routeLevel: 1 }
    }
  ]
}];