(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{16:function(e,t,n){},2:function(e,t,n){e.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),s=(n(16),n.p+"static/media/logo.b2e5a01e.svg"),u=n(11),i=n(3),l=i.c,d=n(8),j=n.n(d),b=n(10),p=n(4);function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var x=Object(p.b)("counter/fetchCount",function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(p.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(x.pending,(function(e){e.status="loading"})).addCase(x.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),m=f.actions,O=m.increment,v=m.decrement,g=m.incrementByAmount,_=function(e){return e.counter.value},k=f.reducer,N=n(2),A=n.n(N),C=n(1);function w(){var e=l(_),t=Object(i.b)(),n=Object(r.useState)("2"),a=Object(u.a)(n,2),c=a[0],o=a[1],s=Number(c)||0;return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:A.a.row,children:[Object(C.jsx)("button",{className:A.a.button,"aria-label":"Decrement value",onClick:function(){return t(v())},children:"-"}),Object(C.jsx)("span",{className:A.a.value,children:e}),Object(C.jsx)("button",{className:A.a.button,"aria-label":"Increment value",onClick:function(){return t(O())},children:"+"})]}),Object(C.jsxs)("div",{className:A.a.row,children:[Object(C.jsx)("input",{className:A.a.textbox,"aria-label":"Set increment amount",value:c,onChange:function(e){return o(e.target.value)}}),Object(C.jsx)("button",{className:A.a.button,onClick:function(){return t(g(s))},children:"Add Amount"}),Object(C.jsx)("button",{className:A.a.asyncButton,onClick:function(){return t(x(s))},children:"Add Async"}),Object(C.jsx)("button",{className:A.a.button,onClick:function(){return t((e=s,function(t,n){_(n())%2===1&&t(g(e))}));var e},children:"Add If Odd"})]})]})}n(25);var y=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)("header",{className:"App-header",children:[Object(C.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(C.jsx)(w,{}),Object(C.jsxs)("p",{children:["Edit ",Object(C.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(C.jsxs)("span",{children:[Object(C.jsx)("span",{children:"Learn "}),Object(C.jsx)("a",{className:"App-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer",children:"React"}),Object(C.jsx)("span",{children:", "}),Object(C.jsx)("a",{className:"App-link",href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux"}),Object(C.jsx)("span",{children:", "}),Object(C.jsx)("a",{className:"App-link",href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux Toolkit"}),",",Object(C.jsx)("span",{children:" and "}),Object(C.jsx)("a",{className:"App-link",href:"https://react-redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"React Redux"})]})]})})},B=Object(p.a)({reducer:{counter:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(i.a,{store:B,children:Object(C.jsx)(y,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.e8d4acec.chunk.js.map