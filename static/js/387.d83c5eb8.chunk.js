"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var r,a,c,u,o=e(861),s=e(885),i=e(757),p=e.n(i),l=e(739),f=e(791),h=e(233),v=e(168),d=e(444),x=d.ZP.ul(r||(r=(0,v.Z)(["\n  margin: 0;\n  margin-top: 20px;\n  padding: 0;\n  display: flex;\n  gap: 30px;\n  flex-wrap: wrap;\n  list-style: none;\n"]))),w=d.ZP.li(a||(a=(0,v.Z)(["\n  width: 180px;\n  height: 340px;\n"]))),m=d.ZP.img(c||(c=(0,v.Z)(["\n  object-fit: cover;\n  width: 100%;\n  height: 80%;\n"]))),g=d.ZP.p(u||(u=(0,v.Z)(["\n  margin: 0;\n"]))),k=e(184),y=function(){var t=(0,f.useState)([]),n=(0,s.Z)(t,2),e=n[0],r=n[1],a=(0,l.UO)().movieId;return(0,f.useEffect)((function(){function t(){return(t=(0,o.Z)(p().mark((function t(){var n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,h.Wd)(a);case 3:n=t.sent,r(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a]),(0,k.jsx)(k.Fragment,{children:e.length>0?(0,k.jsx)(x,{children:e.map((function(t){var n=t.id,e=t.profile_path,r=t.name,a=t.character;return(0,k.jsxs)(w,{children:[(0,k.jsx)(m,{src:e?"".concat(h.X3).concat(e):h.pi,alt:r,width:"200"}),(0,k.jsx)(g,{children:r}),(0,k.jsxs)(g,{children:["Character: ",a]})]},n)}))}):(0,k.jsx)("p",{children:"We dont`t have any information about actors"})})}},233:function(t,n,e){e.d(n,{QX:function(){return l},TP:function(){return h},Wd:function(){return v},X3:function(){return s},pi:function(){return i},tx:function(){return d},z1:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(44),o="0166c28893f9efa335e2a16915462c94",s="https://image.tmdb.org/t/p/original",i="https://www.windhorsepublications.com/wp-content/uploads/2019/11/image-coming-soon-placeholder-300x300.png",p=u.ZP.create({baseURL:"https://api.themoviedb.org/"}),l=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.get("3/trending/movie/day?api_key=".concat(o));case 3:return n=t.sent,t.next=6,n.data;case 6:return e=t.sent,t.abrupt("return",e);case 10:throw t.prev=10,t.t0=t.catch(0),console.error(t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.get("3/search/movie?api_key=".concat(o,"&query=").concat(n,"&include_adult=false"));case 3:return e=t.sent,t.next=6,e.data;case 6:return r=t.sent,t.abrupt("return",r.results);case 10:throw t.prev=10,t.t0=t.catch(0),console.error(t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.get("3/movie/".concat(n,"?api_key=").concat(o));case 3:return e=t.sent,t.next=6,e.data;case 6:return r=t.sent,t.abrupt("return",r);case 10:throw t.prev=10,t.t0=t.catch(0),console.error(t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.get("3/movie/".concat(n,"/credits?api_key=").concat(o));case 3:return e=t.sent,t.next=6,e.data;case 6:return r=t.sent,t.abrupt("return",r.cast);case 10:throw t.prev=10,t.t0=t.catch(0),console.error(t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.get("3/movie/".concat(n,"/reviews?api_key=").concat(o));case 3:return e=t.sent,t.next=6,e.data;case 6:return r=t.sent,t.abrupt("return",r.results);case 10:throw t.prev=10,t.t0=t.catch(0),console.error(t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.d83c5eb8.chunk.js.map