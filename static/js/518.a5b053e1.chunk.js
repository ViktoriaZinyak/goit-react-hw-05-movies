"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[518],{233:function(e,t,n){n.d(t,{QX:function(){return l},TP:function(){return h},Wd:function(){return v},X3:function(){return i},pi:function(){return u},tx:function(){return f},z1:function(){return d}});var r=n(861),c=n(757),a=n.n(c),s=n(44),o="0166c28893f9efa335e2a16915462c94",i="https://image.tmdb.org/t/p/original",u="https://www.windhorsepublications.com/wp-content/uploads/2019/11/image-coming-soon-placeholder-300x300.png",p=s.ZP.create({baseURL:"https://api.themoviedb.org/"}),l=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("3/trending/movie/day?api_key=".concat(o));case 3:return t=e.sent,e.next=6,t.data;case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("3/search/movie?api_key=".concat(o,"&query=").concat(t,"&include_adult=false"));case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r.results);case 10:throw e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("3/movie/".concat(t,"?api_key=").concat(o));case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("3/movie/".concat(t,"/credits?api_key=").concat(o));case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r.cast);case 10:throw e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("3/movie/".concat(t,"/reviews?api_key=").concat(o));case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r.results);case 10:throw e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},518:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r,c=n(861),a=n(885),s=n(757),o=n.n(s),i=n(731),u=n(739),p=n(233),l=n(791),d=n(168),h=n(444).ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  gap: 40px;\n  padding: 40px;\n"]))),v=n(184),f=function(){var e,t,n=(0,l.useState)([]),r=(0,a.Z)(n,2),s=r[0],d=r[1],f=(0,u.UO)().movieId,x=(0,u.TH)();(0,l.useEffect)((function(){function e(){return(e=(0,c.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.TP)(f);case 3:t=e.sent,d(t),console.log(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]);var w=s.title,m=s.poster_path,g=s.original_title,j=s.popularity,k=s.release_date,y=s.overview,b=s.genres,_="".concat(p.X3).concat(m);return(0,v.jsx)(v.Fragment,{children:s&&(0,v.jsxs)("section",{children:[(0,v.jsx)(i.OL,{to:null!==(e=null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies",children:"Go Back"}),(0,v.jsxs)(h,{children:[(0,v.jsx)("img",{src:m?_:p.pi,alt:w,width:"300"}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h1",{children:[g," (",k,")"]}),(0,v.jsxs)("p",{children:["User score: ",Math.round(j)]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsxs)("p",{children:["Overview: ",y]}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsxs)("p",{children:[b&&b.map((function(e){return"".concat(e.name+" ")}))," "]})]})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsx)(i.OL,{to:"cast",children:"Cast"}),(0,v.jsx)(i.OL,{to:"review",children:"Review"}),(0,v.jsx)(l.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(u.j3,{})})]})]})})}}}]);
//# sourceMappingURL=518.a5b053e1.chunk.js.map