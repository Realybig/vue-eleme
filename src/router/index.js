import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';

import '@/common/scss/_index.scss';

Vue.use(Router);
Vue.use(Resource);

export default new Router({
  linkActiveClass: 'active', // 修改默认选中a标签样式
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
});
