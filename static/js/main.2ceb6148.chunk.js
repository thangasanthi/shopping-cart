(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{31:function(e,t,a){e.exports=a(43)},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),o=(a(36),a(19)),s=a(20),p=a(23),l=a(21),u=a(22),h=(a(37),a(12)),d=a(9),m=Object(n.lazy)((function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,76))})),L=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,75))})),O=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Suspense,{fallback:"Loading..."},r.a.createElement(h.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:m}),r.a.createElement(d.b,{exact:!0,path:"/cart",component:L}))))}}]),t}(n.Component),g=a(24);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=a(10),f=a(30),E=a(4),j={shoppingList:[],tempShoppingList:[],cartList:[],searchValue:null,rangevalue:{min:100,max:1e4},isLoading:!1,itemFound:!0},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LOADING_STATUS":return Object(E.a)({},e,{isLoading:t.payload});case"GET_SHOPPING_LIST_SUCCESS":return Object(E.a)({},e,{shoppingList:t.payload,tempShoppingList:t.payload,isLoading:!1});case"SORT_SHOPPING_LIST":var a=e.shoppingList.slice();return"HTL"===t.payload.toUpperCase()&&a.sort((function(e,t){return t.price-e.price})),"LTH"===t.payload.toUpperCase()&&a.sort((function(e,t){return e.price-t.price})),"DISCOUNT"===t.payload.toUpperCase()&&a.sort((function(e,t){return t.discount-e.discount})),Object(E.a)({},e,{shoppingList:a});case"ADD_TO_CART":var n=e.cartList.slice(),r=n.some((function(e){return e.id===t.payload.id}));return r||n.push(Object(E.a)({},t.payload,{qty:1})),Object(E.a)({},e,{cartList:n});case"ON_CHANGE_INPUT":return Object(E.a)({},e,{searchValue:t.payload});case"ON_SUBMIT_SEARCH":var i=e.tempShoppingList.slice(),c=[];return e.tempList=e.tempShoppingList,null===e.searchValue?(alert("Please enter something to search in search box"),e):""===e.searchValue.trim()?Object(E.a)({},e,{shoppingList:e.tempList}):(i.forEach((function(t){t.name.toLowerCase()===e.searchValue.toLowerCase()&&c.push(t)})),0===c.length&&alert("No item found"),c.length>0?Object(E.a)({},e,{shoppingList:c}):e);case"ON_CHANGE_RANGE_VALUE":return Object(E.a)({},e,{rangevalue:t.payload});case"ON_APPLY_FILTER":var o=e.tempShoppingList,s=e.rangevalue,p=!0,l=o.filter((function(e){return e.price>=s.min&&e.price<=s.max}));return 0===l.length&&(alert("No item found"),p=!1),Object(E.a)({},e,{shoppingList:l,itemFound:p});case"REMOVE_ITEM":var u=t.payload;return Object(E.a)({},e,{cartList:e.cartList.filter((function(e){return e.id!==u.id}))});case"UPDATE_ITEM_QTY":var h=t.payload,d=e.cartList.slice();return"ADD"===h.action.toUpperCase()&&d.forEach((function(e){e.id===h.id&&(e.qty+=1)})),"REMOVE"===h.action.toUpperCase()&&d.forEach((function(e){e.id===h.id&&e.qty>1&&(e.qty-=1)})),Object(E.a)({},e,{cartList:d});default:return e}};c.a.render(r.a.createElement(g.a,{store:Object(b.e)(Object(b.c)({shopingListReducer:y}),Object(b.d)(Object(b.a)(f.a)))},r.a.createElement(h.a,null,r.a.createElement(O,null))," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.2ceb6148.chunk.js.map