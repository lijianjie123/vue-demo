/**
 *
 * @param  {Array} userRouter 后台返回的用户权限json   需要验证的路由
 * @param  {Array} allRouter  前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */

// {  userRouter
//     "code": 0,
//     "message": "获取权限成功",
//     "data": [
//         {
//             "name": "订单管理",
//             "children": [
//                 {
//                     "name": "订单列表"
//                 },
//                 {
//                     "name": "生产管理",
//                     "children": [
//                         {
//                             "name": "生产列表"
//                         },
//                         {
//                             "name": "审核管理"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "退货管理"
//                 }
//             ]
//         },
//         {
//             "name": "产品管理",
//             "children": [
//                 {
//                     "name": "产品列表"
//                 },
//                 {
//                     "name": "产品分类"
//                 }
//             ]
//         }
//     ]
// }
// /* 需要权限判断的路由 */
// const dynamicRoutes = [
//     {
//         path: '/order',
//         component: Order,
//         name: 'order-manage',
//         meta: {
//             name: '订单管理',
//             icon: 'icon-email'
//         },
//         children: [
//             {
//                 path: 'list',
//                 name: 'order-list',
//                 component: OrderList,
//                 meta: {
//                     name: '订单列表',
//                     icon: 'icon-quit'
//                 }
//             },
//             {
//                 path: 'product',
//                 name: 'product-manage',
//                 component: ProductManage,
//                 meta: {
//                     name: '生产管理',
//                     icon: 'icon-service'
//                 },
//                 children: [
//                     {
//                         path: 'list',
//                         name: 'product-list',
//                         component: ProductionList,
//                         meta: {
//                             name: '生产列表',
//                             icon: 'icon-nav'
//                         }
//                     },
//                     {
//                         path: 'review',
//                         name: 'review-manage',
//                         component: ReviewManage,
//                         meta: {
//                             name: '审核管理',
//                             icon: 'icon-finance-manage'
//                         }
//                     }
//                 ]
//             },
//             {
//                 path: 'returnGoods',
//                 name: 'return-goods',
//                 component: ReturnGoods,
//                 meta: {
//                     name: '退货管理',
//                     icon: 'icon-product-manage'
//                 }
//             }
//         ]
//     },
//     {
//         path: '/goods',
//         component: Goods,
//         name: 'goods',
//         meta: {
//             name: '产品管理',
//             icon: 'icon-order-manage'
//         },
//         children: [
//             {
//                 path: 'list',
//                 name: 'goods-list',
//                 component: GoodsList,
//                 meta: {
//                     name: '产品列表',
//                     icon: 'icon-home'
//                 }
//             },
//             {
//                 path: 'classify',
//                 name: 'goods-classify',
//                 component: GoodsClassify,
//                 meta: {
//                     name: '产品分类',
//                     icon: 'icon-product-manage'
//                 }
//             }
//         ]
//     },
    
// ]


//递归路由  recursionRouter    得到的是  根据用户不同的权限 过滤后的路由
export function recursionRouter(userRouter = [], allRouter = []) {
    var realRoutes = [] //真实路由
    allRouter.forEach((v, i) => {
        userRouter.forEach((item, index) => {
            if (item.name === v.meta.name) {
                if (item.children && item.children.length > 0) {
                    v.children = recursionRouter(item.children, v.children)
                }
                realRoutes.push(v)
            }
        })
    })
    return realRoutes
}

/**
 *
 * @param {Array} routes 用户过滤后的路由
 *
 * 递归为所有有子路由的路由设置第一个children.path为默认路由
 */
export function setDefaultRoute(routes) {
    routes.forEach((v, i) => {
        if (v.children && v.children.length > 0) {
            v.redirect = { name: v.children[0].name }
            setDefaultRoute(v.children)
        }
    })
}
