(this["webpackJsonpreact-spa-study"]=this["webpackJsonpreact-spa-study"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),o=c.n(r),a=c(20),s=c.n(a),i=(c(28),c(18)),j=c(11),l=c(9),h=c(13),u=c(12),b=c.p+"static/media/logo.6ce24c58.svg",d=(c(29),c(22)),O=c(8),p=c(2);function x(){return Object(n.jsx)("h2",{children:"Home"})}function f(){return Object(n.jsx)("h2",{children:"About"})}function g(e){var t=e.match,c=e.location;Object(d.a)(e,["match","location"]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Topics"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(O.b,{to:"".concat(t.url,"/components"),children:"Components"})}),Object(n.jsx)("li",{children:Object(n.jsx)(O.b,{to:"".concat(t.url,"/props-v-state"),children:"Props v. State"})})]}),Object(n.jsxs)(p.c,{location:c,children:[Object(n.jsx)(p.a,{path:"".concat(t.path,"/:topicId"),component:v}),Object(n.jsx)(p.a,{path:t.path,render:function(){return Object(n.jsx)("h3",{children:"Please select a topic."})}})]})]})}function v(){var e=Object(p.f)().topicId;return Object(n.jsxs)("h3",{children:["Requested topic ID: ",e]})}var m=function(){return Object(n.jsx)(O.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(O.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(O.b,{to:"/about",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(O.b,{to:"/topics",children:"Topics"})})]}),Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{path:"/about",children:Object(n.jsx)(f,{})}),Object(n.jsx)(p.a,{path:"/topics",component:g}),Object(n.jsx)(p.a,{path:"/",children:Object(n.jsx)(x,{})})]})]})})},k={light:{foreground:"#000000",background:"#eeeeee"},dark:{foreground:"#ffffff",background:"#222222"}},y=Object(r.createContext)(k.dark);y.displayName="\u8fa3\u9e21";var C=function(e){Object(h.a)(c,e);var t=Object(u.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props,t=this.context;return Object(n.jsx)("button",Object(i.a)(Object(i.a)({},e),{},{style:{backgroundColor:t.background}}))}}]),c}(o.a.Component);C.contextType=y;var T=function(e){Object(h.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(j.a)(this,c),(n=t.call(this,e)).toggleTheme=function(){n.setState((function(e){return{theme:e.theme===k.dark?k.light:k.dark}}))},n.state={hasError:!1,theme:k.light,toggleTheme:n.toggleTheme},n}return Object(l.a)(c,null,[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),Object(l.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsx)("img",{src:b,className:"App-logo",alt:"logo"}),Object(n.jsx)("pre",{dangerouslySetInnerHTML:{__html:"Edit <code>src/App.js</code> and save to reload"}}),Object(n.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(n.jsx)(m,{}),Object(n.jsx)(y.Provider,{value:this.state,children:Object(n.jsx)(A,{children:Object(n.jsx)(E,{})})})]})})}}]),c}(o.a.Component);function E(){return Object(n.jsx)("div",{children:Object(n.jsx)(S,{})})}var S=function(e){Object(h.a)(c,e);var t=Object(u.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(y.Consumer,{children:function(e){var t=e.theme,c=e.toggleTheme;return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){c()},style:{backgroundColor:t.background},children:"Toggle Theme"}),Object(n.jsxs)("div",{children:["\u5f53\u524d\u7684\u989c\u8272 ",t.background]})]})}})}}]),c}(o.a.Component),A=function(e){Object(h.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(j.a)(this,c),(n=t.call(this,e)).state={hasError:!1},n}return Object(l.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?Object(n.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),c}(o.a.Component),D=T,F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),o(e),a(e)}))};s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),F()}},[[35,1,2]]]);
//# sourceMappingURL=main.a489d95d.chunk.js.map