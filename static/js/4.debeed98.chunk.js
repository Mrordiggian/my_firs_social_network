(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[4],{295:function(e,n,t){e.exports=t.p+"static/media/user.36daa457.png"},296:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(0),a=t.n(r),o=t(12),i=t(29),u=(t(49),function(e){return Object(o.b)((function(e){return{isAuthData:e.auth.isAuthData}}))((function(n){return n.isAuthData?a.a.createElement(e,n):a.a.createElement(i.a,{to:"/login"})}))})},297:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return t}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(n,"a",(function(){return r}))},303:function(e,n,t){e.exports={activePage:"Paginator_activePage__1DPxU",page:"Paginator_page__1NeX4",paginator:"Paginator_paginator__2m-7Z",pointer:"Paginator_pointer__3MRVv"}},304:function(e,n,t){e.exports={photo:"FindFriens_photo__1F3wZ",block__photo:"FindFriens_block__photo__3ZsR1",item:"FindFriens_item__2caUr"}},306:function(e,n,t){"use strict";t.r(n);var r=t(52),a=t(53),o=t(64),i=t(54),u=t(65),c=t(0),l=t.n(c),s=t(12),f=t(133),p=t(71),g=t(297),d=t(303),m=t.n(d),h=t(51),v=t(23),P=function(e){for(var n=e.totalCountPage,t=e.countOnPage,r=e.onChangedPage,a=e.currentPage,o=e.portionSize,i=void 0===o?10:o,u=Math.ceil(n/t),s=[],f=1;f<=u;f++)s.push(f);var p=Math.ceil(u/i),d=Object(c.useState)(1),P=Object(g.a)(d,2),b=P[0],y=P[1],E=(b-1)*i+1,_=b*i;return l.a.createElement("div",{className:m.a.paginator},b>1&&l.a.createElement("span",{onClick:function(){y(--b),r(--E)},className:m.a.pointer}," ",l.a.createElement(h.a,{icon:v.a,size:"lg"})),s.filter((function(e){return e>=E&&e<=_})).map((function(e){return l.a.createElement("span",{onClick:function(){r(e)},className:a==e&&m.a.activePage+" "+m.a.page||m.a.page}," ",e)})),b<p&&l.a.createElement("span",{className:m.a.pointer,onClick:function(){r(++_),y(++b)}}," ",l.a.createElement(h.a,{icon:v.b,size:"lg"})))},b=t(304),y=t.n(b),E=t(295),_=t.n(E),w=t(24),F=function(e){var n=e.user,t=e.inProgress,r=e.unfollow,a=e.follow;return l.a.createElement("div",{key:n.id},l.a.createElement("div",{className:y.a.item},l.a.createElement("div",{className:y.a.block__photo},l.a.createElement(w.b,{to:"/profile/".concat(n.id)},l.a.createElement("img",{src:n.photos.large||_.a,className:y.a.photo})),n.followed?l.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)}},"Unfollow"):l.a.createElement("button",{disabled:t.some((function(e){return e==n.id})),onClick:function(){a(n.id)}},"Follow")),l.a.createElement("div",null,l.a.createElement(w.b,{to:"/profile/".concat(n.id)},l.a.createElement("div",null,l.a.createElement("h3",null,n.name))),l.a.createElement("div",null,n.status))))},O=function(e){var n=e.countOnPage,t=e.currentPage,r=e.onChangedPage,a=e.totalCountPage,o=Object(p.a)(e,["countOnPage","currentPage","onChangedPage","totalCountPage"]);return l.a.createElement("div",null,o.state.map((function(e){return l.a.createElement(F,{user:e,inProgress:o.inProgress,follow:o.follow,unfollow:o.unfollow})})),l.a.createElement("div",{style:{padding:"15px"}},l.a.createElement(P,{countOnPage:n,currentPage:t,onChangedPage:r,totalCountPage:a,portionSize:"5"})))},C=t(49),j=t(45),k=t(296),A=t(8);function N(e,n){return e===n}function x(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}function S(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var U=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var o=0,i=r.pop(),u=S(r),c=e.apply(void 0,[function(){return o++,i.apply(null,arguments)}].concat(t)),l=e((function(){for(var e=[],n=u.length,t=0;t<n;t++)e.push(u[t].apply(null,arguments));return c.apply(null,e)}));return l.resultFunc=i,l.dependencies=u,l.recomputations=function(){return o},l.resetRecomputations=function(){return o=0},l}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N,t=null,r=null;return function(){return x(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var D=function(e){return e.FindFriends.users},z=function(e){return e.FindFriends.currentPage},M=function(e){return e.FindFriends.totalCountPage},q=function(e){return e.FindFriends.countOnPage},R=function(e){return e.FindFriends.isFetching},Z=function(e){return e.common.inProgress},I=(U(D,(function(e){return e.filter((function(e){return!0}))})),function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(u)))).onChangedPage=function(e){t.props.requestUsers(e,t.props.countOnPage)},t}return Object(u.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.countOnPage)}},{key:"render",value:function(){return l.a.createElement("div",{className:"block"},this.props.isFetching&&l.a.createElement(C.a,null),l.a.createElement(O,Object.assign({},this.props,{onChangedPage:this.onChangedPage})))}}]),n}(l.a.Component));n.default=Object(A.d)(Object(s.b)((function(e){return{state:D(e),currentPage:z(e),totalCountPage:M(e),countOnPage:q(e),isFetching:R(e),inProgress:Z(e)}}),{follow:f.b,unfollow:f.d,toggleInProgress:j.b,requestUsers:f.c}),k.a)(I)}}]);
//# sourceMappingURL=4.debeed98.chunk.js.map