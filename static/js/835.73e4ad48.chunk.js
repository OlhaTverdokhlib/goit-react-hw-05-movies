"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[835],{835:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(861),a=n(439),u=n(757),i=n.n(u),c=n(881),o=n(791),s=n(87),f="Search_formSection__NuBHj",p="Search_input__La3Ww",l="Search_button__CmfhD",v=n(184),d=function(e){var t=e.onSelectName,n=void 0===t?function(){}:t,r=(0,o.useState)(""),u=(0,a.Z)(r,2),i=u[0],c=u[1],d=(0,s.lr)(),h=(0,a.Z)(d,2)[1],m=function(){c("")};return(0,v.jsx)("div",{className:f,children:(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=i.trim();n(t),h({query:t}),m()},children:[(0,v.jsx)("input",{className:p,type:"text",name:"name",value:i,placeholder:"Enter name to find the movie",onChange:function(e){c(e.target.value)},required:!0}),(0,v.jsx)("button",{className:l,type:"submit",children:"Search"})]})})},h=n(689),m=n(390),g="MoviesPage_moviesList__RPIho",b="MoviesPage_titleMovie__PvyjT",_=function(){var e,t=(0,o.useState)(""),n=(0,a.Z)(t,2),u=n[0],f=n[1],p=(0,o.useState)(null),l=(0,a.Z)(p,2),_=l[0],x=l[1],Z=(0,o.useState)(!1),w=(0,a.Z)(Z,2),y=w[0],k=w[1],S=(0,o.useState)(""),j=(0,a.Z)(S,2),N=j[0],B=j[1],P=(0,h.TH)(),q=(0,s.lr)(),C=null!==(e=(0,a.Z)(q,1)[0].get("query"))&&void 0!==e?e:"";C&&!u&&f(C),(0,o.useEffect)((function(){if(u){var e=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,m.gH)(t);case 4:n=e.sent,r=n.results,x(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),B(e.t0.message);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();e(u)}}),[u]);return(0,v.jsxs)("div",{className:g,children:[(0,v.jsx)(d,{onSelectName:function(e){f(e),x([])}}),N.length>0&&(0,v.jsxs)("p",{children:["Upss, Some error occured... ",N]}),y&&(0,v.jsx)(c.Z,{}),(0,v.jsx)("ul",{children:Boolean(null===_||void 0===_?void 0:_.length)&&_.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(s.rU,{to:"/movies/".concat(e.id),state:{from:P},children:(0,v.jsx)("h2",{className:b,children:e.title})})},e.id)}))})]})}},390:function(e,t,n){n.d(t,{Df:function(){return c},TP:function(){return o},gH:function(){return p},tx:function(){return f},zv:function(){return s}});var r=n(861),a=n(757),u=n.n(a),i=n(243),c=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=55bbd5b4793347702f14e57aeb59d8e4&language=en-GB");case 2:return t=e.sent,n=t.data,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(){var t,n,r,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=55bbd5b4793347702f14e57aeb59d8e4&language=en-GB"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n,r,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=55bbd5b4793347702f14e57aeb59d8e4&language=en-GB"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(){var t,n,r,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=55bbd5b4793347702f14e57aeb59d8e4&language=en-GB&page=1"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(){var t,n,r,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,i.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=55bbd5b4793347702f14e57aeb59d8e4&language=en-US&page=1&include_adult=false"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=835.73e4ad48.chunk.js.map