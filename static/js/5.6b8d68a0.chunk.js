(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[5],{67:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(19),l=a(20),r=a(23),o=a(21),i=a(22),s=a(0),c=a.n(s),m=a(24),p=a(45),u=a(50),g=a.n(u),h=(a(66),a(67),function(e){return c.a.createElement("div",{className:""},c.a.createElement("h2",{onClick:e.toggleFilter}," ",c.a.createElement("i",{className:"fa fa-filter filter__icon"}),"Filters"),c.a.createElement("br",null),c.a.createElement("div",{className:e.showFilter?"filter__mobile show":"hide"},c.a.createElement("div",{className:"filter__content"},e.showFilter?c.a.createElement("h5",{className:"mb-5"},"Filter option"):null,c.a.createElement(g.a,{maxValue:1e4,minValue:100,value:e.rangevalue,onChange:function(t){return e.onChange(t)}}),c.a.createElement("label",{id:"price-label"}," Price "),c.a.createElement("br",null),c.a.createElement("button",{className:"cancel__btn",type:"button",onClick:e.toggleFilter},"Cancel"),c.a.createElement("button",{className:"apply__btn",type:"button",onClick:e.onApplyFilter},"Apply"))))}),d=function(e){return c.a.createElement(h,{rangevalue:e.rangevalue,onChange:e.onChange,onApplyFilter:e.onApplyFilter,toggleFilter:e.toggleFilter,showFilter:e.showFilter})},b=a(49),E=(a(70),function(e){return c.a.createElement("div",{className:"navbar"},c.a.createElement("label",{className:"sort__by",onClick:e.toggleSort},c.a.createElement("i",{className:"fa fa-sort sort__icon"}),"Sort By"),c.a.createElement("div",{className:e.showSort?"sortby__mobile show ":"hide"},c.a.createElement("div",{className:"sortby__content"},c.a.createElement("h5",{className:"mb-4"},"Sort Options"),c.a.createElement("label",{className:"cursor",onClick:e.sortShoppingList.bind(void 0,"HTL")},"Price -- High Low",c.a.createElement("input",{type:"radio",name:"radio",className:"sortby__input"}),c.a.createElement("span",{className:"checkmark"})),c.a.createElement("label",{className:"cursor",onClick:e.sortShoppingList.bind(void 0,"LTH")},"Price -- Low High",c.a.createElement("input",{type:"radio",name:"radio",className:"sortby__input"}),c.a.createElement("span",{className:"checkmark"})),c.a.createElement("label",{className:"cursor",onClick:e.sortShoppingList.bind(void 0,"Discount")},"Discount",c.a.createElement("input",{type:"radio",name:"radio",className:"sortby__input"}),c.a.createElement("span",{className:"checkmark"})),c.a.createElement("div",{className:"sortby__btns"},c.a.createElement("button",{className:"cancel__btn",type:"button",onClick:e.toggleSort},"Cancel")))))}),f=(a(71),a(48)),v=(a(73),function(){return c.a.createElement("img",{id:"loader",src:"loader.gif",alt:"Loading..."})}),_=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).onChangeRangeValue=function(e){a.props.onChangeRangeValue(e)},a.toggleFilterList=function(){a.setState({showFilter:!a.state.showFilter},console.log("toggle filter clicked",a.state.showFilter))},a.toggleSortList=function(){console.log("toggle sort clicked"),a.setState({showSort:!a.state.showSort})},a.state={showFilter:!1,showSort:!1},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.shoppingList,a=e.isLoading;return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{showCart:!0}),c.a.createElement("div",{className:"container-fluid mb__fluid"},c.a.createElement("div",{className:"row mx-auto",style:{minHeight:"85vh"}},c.a.createElement("div",{className:"side"},c.a.createElement(d,{rangevalue:this.props.rangevalue,onChange:this.onChangeRangeValue,onApplyFilter:this.props.onApplyFilter,toggleFilter:this.toggleFilterList,showFilter:this.state.showFilter})),c.a.createElement("div",{className:"main"},c.a.createElement(E,{sortShoppingList:this.props.sortShoppingList,toggleSort:this.toggleSortList,showSort:this.state.showSort}),a?c.a.createElement(v,null):c.a.createElement(f.b,{productList:t,addToCart:this.props.addToCart,showAddCart:!0})))),c.a.createElement("footer",null,c.a.createElement("div",null,"@copyright")))}}]),t}(c.a.Component),F={sortShoppingList:p.h,addToCart:p.a,onChangeInput:p.d,onChangeRangeValue:p.e,onApplyFilter:p.c};t.default=Object(m.b)((function(e){var t=e.shopingListReducer;return{shoppingList:t.shoppingList,cartList:t.cartList,rangevalue:t.rangevalue,isLoading:t.isLoading,itemFound:t.itemFound}}),F)(_)}}]);
//# sourceMappingURL=5.6b8d68a0.chunk.js.map