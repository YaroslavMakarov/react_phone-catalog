(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),l=n.n(r),s=n(7),o=n(5),u=(n(24),n(6)),m=n.n(u),i=n(8),p=function(e){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(fetch("http://localhost:5000"+e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}))},E=function(e){return function(e,t){var n;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.a.awrap(fetch("http://localhost:5000"+e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=utf-8"}}));case 2:return n=a.sent,a.abrupt("return",n.json());case 4:case"end":return a.stop()}}))}("/basket-items",{item:e})},h=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=function(){p("/basket-items").then(c)};Object(a.useEffect)(r,[]);return{basketItems:n,refreshBasket:r,removeItem:function(e){alert("Removing ".concat(e,"... Please implement"))}}},b=function(e){return"https://mate-academy.github.io/react_phone-catalog/"+e},f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],l=h().refreshBasket;Object(a.useEffect)((function(){p("/phones").then(r)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Phone catalog"),c.a.createElement("ul",{className:"phones"},n.map((function(e){return c.a.createElement("li",{className:"thumbnail",key:e.id},c.a.createElement(s.b,{to:"/phones/".concat(e.id),className:"thumb"},c.a.createElement("img",{alt:e.name,src:b(e.imageUrl)})),c.a.createElement("div",{className:"phones__btn-buy-wrapper"},c.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return t=e.id,m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.awrap(E(t));case 2:l();case 3:case"end":return e.stop()}}));var t}},"Add")),c.a.createElement(s.b,{to:"/phones/".concat(e.id)},e.name),c.a.createElement("p",null,e.snippet))}))))},d=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(""),s=Object(i.a)(l,2),u=s[0],m=s[1],E=Object(o.g)().phoneId;return Object(a.useEffect)((function(){(function(e){return p("".concat("/phones","/").concat(e))})(E).then(r).catch(m)}),[E]),u?c.a.createElement("p",null,u):n?c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{className:"phone",src:b(n.images[0]),alt:"phone preview"}),c.a.createElement("h1",null,n.name),c.a.createElement("p",null,n.description),c.a.createElement("button",{type:"button",className:"btn btn-success"},"Add"),c.a.createElement("ul",{className:"phone-thumbs"},n.images.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement("img",{src:b(e),alt:"thumbnail"}))})))):c.a.createElement("p",null,"Loading...")},v=function(){var e=h(),t=e.basketItems,n=e.refreshBasket,r=e.removeItem;return Object(a.useEffect)(n,[]),c.a.createElement("section",null,c.a.createElement("h2",null,"Shopping Cart"),t.length>0?c.a.createElement("ul",null,t.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement("button",{type:"button",onClick:function(){return r(e)}},"x"),c.a.createElement("b",null,e))}))):c.a.createElement("p",null,"No items yet"))},g=function(){return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement("section",null,c.a.createElement("h2",null,"Filter"),c.a.createElement("label",null,c.a.createElement("div",null,"Search:"),c.a.createElement("input",null)),c.a.createElement("label",null,c.a.createElement("div",null,"Sort by:"),c.a.createElement("select",null,c.a.createElement("option",{value:"name"},"Alphabetical"),c.a.createElement("option",{value:"age"},"Newest")))),c.a.createElement(v,null)),c.a.createElement("div",{className:"col-md-10"},c.a.createElement(o.d,null,c.a.createElement(o.b,{path:"/phones",exact:!0,component:f}),c.a.createElement(o.b,{path:"/phones/:phoneId",component:d}),c.a.createElement(o.a,{to:"/phones"})))))},N=Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_BASENAME||"react_phone-catalog";l.a.render(c.a.createElement(s.a,{basename:N},c.a.createElement(g,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1cfbd66d.chunk.js.map