(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,t,n){e.exports={error:"login_error__3gTDQ"}},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n(137),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"42ada78a-68af-4959-975c-6cdcc2441ad1"}}),c={getUsers:function(e,t){return a.get("users?page= ".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followOnUser:function(e){return a.post("follow/"+e).then((function(e){return e.data}))},unfollowOnUser:function(e){return a.delete("follow/"+e).then((function(e){return e.data}))}},o={getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},getProfileData:function(e){return a.get("profile/"+e).then((function(e){return e.data}))},updateProfileData:function(e){return a.put("profile",e)},saveMainPhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipatr/form-data"}})}},i={authUser:function(){return a.get("auth/me").then((function(e){return e.data}))},authLogin:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},Logout:function(){return a.delete("auth/login")}},u={getCaptcha:function(){return a.get("security/get-captcha-url")}}},130:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(36),a=n(9);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={messages:[{id:0,message:"Hello",send:"receive"}],dialogs:[{id:0,name:"Kate",ava:"https://img.rg.ru/img/content/164/59/36/1_d_850.jpeg"},{id:1,name:"Sasha",ava:"http://cdn.ok-magazine.ru/files/presets/795_547/media_wysiwyg/16.3.2018_ok_cover40924__vid218897e.jpg"},{id:2,name:"Mila",ava:"https://www.ivi.ru/titr/uploads/2018/08/14/9988d81a98e2d9826e2340a7af4a7f48.jpg/1400x0"},{id:3,name:"Megan",ava:"https://pix-feed.com/wp-content/uploads/2018/04/maxresdefault-4.jpg"},{id:4,name:"Lesli",ava:"https://cs.pikabu.ru/post_img/2013/04/21/10/1366556575_1547025030.jpg"}]},u=function(e){return{type:"SEND-MESSAGE",message:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n={id:5,message:t.message,send:"send"};return o({},e,{messages:[].concat(Object(r.a)(e.messages),[n]),newtextMessage:""});default:return e}}},134:function(e,t,n){"use strict";var r=n(7),a=n.n(r),c=n(12),o=n(9),i=n(13),u=n(48);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var l=function(e,t,n,r){return e.map((function(e){return e[t]===n?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},r):e}))};function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return y})),n.d(t,"d",(function(){return _}));var d="users_FOLLOW",m={users:[],currentPage:1,totalCountPage:0,countOnPage:10,isFetching:!1},b=function(e){return{type:d,userID:e}},h=function(e){return{type:"users_UNFOLLOW",userID:e}},O=function(e){return{type:"users_SET_CURRENT_PAGE",page:e}},g=function(e){return{type:"users_TOGGLE_IS_FETCHING",isFetching:e}},v=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(!0)),r(O(e)),n.next=4,i.d.getUsers(e,t);case 4:c=n.sent,r({type:"users_SET_USER",users:c.items}),r(g(!1)),r({type:"users_SET_TOTAL_COUNT",count:c.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(Object(u.b)(t,!0)),e.next=3,n(t);case 3:0===e.sent.resultCode&&c(r(t)),c(Object(u.b)(t,!1));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),y=function(e){return function(t){E(e,i.d.followOnUser,b,t)}},_=function(e){return function(t){E(e,i.d.unfollowOnUser,h,t)}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return f({},e,{users:l(e.users,"id",t.userID,{followed:!0})});case"users_UNFOLLOW":return f({},e,{users:l(e.users,"id",t.userID,{followed:!1})});case"users_SET_USER":return f({},e,{users:t.users});case"users_SET_CURRENT_PAGE":return f({},e,{currentPage:t.page});case"users_SET_TOTAL_COUNT":return f({},e,{totalCountPage:t.count});case"users_TOGGLE_IS_FETCHING":return f({},e,{isFetching:t.isFetching});default:return e}}},139:function(e,t,n){e.exports=n.p+"static/media/preloader.fc9cb5ff.svg"},166:function(e,t,n){e.exports=n(294)},171:function(e,t,n){},172:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(62),o=n.n(c),i=(n(171),n(63)),u=n(64),s=n(67),l=n(65),p=n(68),f=(n(172),n(29)),d=function(){return a.a.createElement("div",null,"Music")},m=function(){return a.a.createElement("div",null,"News")},b=function(){return a.a.createElement("div",null,"Setting")},h=n(70),O=n.n(h),g=n(74),v=n.n(g),E=n(24),y=n(53),_=function(e){var t=e.path,n=e.content,r=e.icon;return a.a.createElement(E.b,{className:v.a.item,to:t,activeClassName:v.a.active},a.a.createElement("div",null,a.a.createElement("span",{className:v.a.awesome},a.a.createElement(y.a,{icon:r,size:"lg"})),n))},w=n(75),j=n.n(w),P=function(e){return a.a.createElement("div",{className:j.a.sidebar},a.a.createElement("div",{className:j.a.sidebar__header},"You know these people?"),e.state.map((function(e){return a.a.createElement("div",{className:j.a.sidebar__item},a.a.createElement("img",{src:e.ava,alt:""}),a.a.createElement("span",null,e.name))})))},S=n(23),D=function(e){return a.a.createElement("nav",{className:O.a.nav},a.a.createElement(_,{path:"/profile/".concat(e.id),content:"Profile",icon:S.l}),a.a.createElement(_,{path:"/message",content:"Message",icon:S.e}),a.a.createElement(_,{path:"/news",content:"News",icon:S.c}),a.a.createElement(_,{path:"/music",content:"Music",icon:S.h}),a.a.createElement(_,{path:"/findfriends",content:"Find Friends",icon:S.i}),a.a.createElement(_,{path:"/setting",content:"Setting",icon:S.d}),a.a.createElement("div",{className:O.a.sidebar},a.a.createElement(P,{state:e.state})))},T=n(14),x=Object(T.b)((function(e){return{state:e.Sidebar,id:e.auth.id}}))(D),k=n(49),U=n.n(k),N=function(e){var t=e.Logout,n=e.state;return a.a.createElement("header",{className:U.a.header},a.a.createElement("img",{src:"https://static-s.aa-cdn.net/img/ios/1447600759/a3eb54155fccad3e3b91d8a0da36513e?v=1",alt:""}),a.a.createElement("div",{className:U.a.log},n.isAuthData?a.a.createElement("div",null,n.login,a.a.createElement("span",{className:U.a.logOut,onClick:t},a.a.createElement(y.a,{icon:S.j,size:"lg"}))):a.a.createElement(E.b,{to:"/login"},"Login")))},C=n(7),L=n.n(C),A=n(12),I=n(9),M=n(13),R=n(32);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach((function(t){Object(I.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z={id:null,login:null,email:null,isAuthData:!1,captchaUrl:null},H=function(e,t,n,r){return{type:"auth_SET_AUTH_DATA",data:{id:e,login:t,email:n,isAuthData:r}}},W=function(){return function(){var e=Object(A.a)(L.a.mark((function e(t){var n,r,a,c,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.authUser();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,c=r.login,o=r.email,t(H(a,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(){return function(){var e=Object(A.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.c.getCaptcha();case 2:n=e.sent,t({type:"auth_SGET_CAPTCHA_URL_SUCCESS",data:{captchaUrl:n.data.url}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth_SET_AUTH_DATA":case"auth_SGET_CAPTCHA_URL_SUCCESS":return G({},e,{},t.data);default:return e}},B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getAuthData()}},{key:"render",value:function(){return a.a.createElement(N,this.props)}}]),t}(a.a.Component),J=Object(T.b)((function(e){return{state:e.auth}}),{getAuthData:W,Logout:function(){return function(){var e=Object(A.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.Logout();case 2:0===e.sent.data.resultCode&&t(H(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(B),Z=n(109),Y=n.n(Z),Q=n(131),X=n(132),$=n(43),q=n(45),ee=Object(q.a)(30),te=Object(X.a)({form:"login"})((function(e){var t=e.captchaUrl,n=e.handleSubmit,r=e.error;return a.a.createElement("form",{onSubmit:n},a.a.createElement("div",null,"email"),a.a.createElement(Q.a,{validate:[q.b,ee],name:"email",type:"text",placeholder:"email",component:$.a}),a.a.createElement("div",null,"Password"),a.a.createElement(Q.a,{validate:[q.b,ee],name:"password",type:"password",placeholder:"password",component:$.a}),a.a.createElement(Q.a,{name:"rememberMe",type:"checkbox",component:$.a}),"remember me",a.a.createElement("div",null,t&&a.a.createElement("img",{src:t,alt:"captcha"}),t&&a.a.createElement(Q.a,{validate:[q.b,ee],name:"captcha",type:"text",placeholder:"Enter symbols from the picture",component:$.a})),a.a.createElement("div",null,a.a.createElement("button",null,"Login")),r&&a.a.createElement("div",{className:Y.a.error},"  ",r," "))})),ne=Object(T.b)((function(e){return{isAuth:e.auth.isAuthData,id:e.auth.id,captchaUrl:e.auth.captchaUrl}}),{sendLoginData:function(e){return function(){var t=Object(A.a)(L.a.mark((function t(n){var r,a,c,o,i,u;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=G({},e),a=r.email,c=r.password,o=r.rememberMe,i=r.captcha,t.next=3,M.a.authLogin(a,c,o,i);case 3:0===(u=t.sent).data.resultCode?n(W()):(10===u.data.resultCode&&n(K()),n(Object(R.a)("login",{_error:u.data.messages[0]})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(f.a,{to:"/profile/".concat(e.id)}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(te,{captchaUrl:e.captchaUrl,onSubmit:function(t){e.sendLoginData(t)}}))}));function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(n,!0).forEach((function(t){Object(I.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce={initialized:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app_INITIALIZED_SUCCESS":return ae({},e,{initialized:!0});default:return e}},ie=n(52),ue=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(ie.a,null)},a.a.createElement(e,t))}},se=a.a.lazy((function(){return n.e(3).then(n.bind(null,306))})),le=a.a.lazy((function(){return n.e(5).then(n.bind(null,308))})),pe=a.a.lazy((function(){return n.e(4).then(n.bind(null,307))})),fe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).catchALLUnhandledErrors=function(e,t){alert("Some error occurred")},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchALLUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchALLUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"App-wrapper"},a.a.createElement(J,null),a.a.createElement(x,null),a.a.createElement("div",{className:"App-wrapper-content"},a.a.createElement(f.d,null,a.a.createElement(f.b,{exact:!0,path:"/",render:ue(se)}),a.a.createElement(f.b,{path:"/profile/:userID?",render:ue(se)}),a.a.createElement(f.b,{path:"/message",render:ue(le)}),a.a.createElement(f.b,{path:"/news",render:function(){return a.a.createElement(m,null)}}),a.a.createElement(f.b,{path:"/music",render:function(){return a.a.createElement(d,null)}}),a.a.createElement(f.b,{path:"/findfriends",render:ue(pe)}),a.a.createElement(f.b,{path:"/setting",render:function(){return a.a.createElement(b,null)}}),a.a.createElement(f.b,{path:"/login",render:function(){return a.a.createElement(ne,null)}}),a.a.createElement(f.b,{path:"*",render:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"404 NOT FOUND"))}})))):a.a.createElement(ie.a,null)}}]),t}(r.Component),de=Object(f.g)(Object(T.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(A.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(W()),e.next=3,Promise.all([n]);case 3:t({type:"app_INITIALIZED_SUCCESS"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(fe));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=n(8),be=n(97),he=n(130),Oe=[{id:0,name:"Dima",ava:"https://sun9-10.userapi.com/c638320/v638320921/504bc/A-GirlzJ1VA.jpg"},{id:1,name:"Pasha",ava:"https://sun9-1.userapi.com/c855416/v855416468/cb450/6knywvCs0Us.jpg?ava=1"},{id:2,name:"Roma",ava:"https://sun9-21.userapi.com/c855328/v855328105/d08c/SD6Kt0_ewQ4.jpg?ava=1"},{id:3,name:"Sasha",ava:"https://sun9-62.userapi.com/c850020/v850020647/2a8d2/WZv-RMVWys0.jpg?ava=1"},{id:4,name:"Lesha",ava:"https://vk.com/images/camera_200.png?ava=1"}],ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ve=n(134),Ee=n(48),ye=n(140),_e=n(133),we=Object(me.c)({ProfilePage:be.b,MessagePage:he.a,Sidebar:ge,FindFriends:ve.a,auth:V,common:Ee.a,app:oe,form:_e.a}),je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.d,Pe=Object(me.e)(we,je(Object(me.a)(ye.a)));o.a.render(a.a.createElement(E.a,null,a.a.createElement(T.a,{store:Pe},a.a.createElement(de,null))),document.getElementById("root")),window.store=Pe,"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},40:function(e,t,n){e.exports={eror:"FormsControl_eror__1vV8K",erorblock:"FormsControl_erorblock__3ITgm",textarea:"FormsControl_textarea__3PxuN"}},43:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return d}));var r=n(9),a=n(71),c=n(0),o=n.n(c),i=n(40),u=n.n(i);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=l({},e),n=(t.input,t.meta),r=(Object(a.a)(t,["input","meta"]),n.touched&&n.error);return o.a.createElement("div",null,e.children,o.a.createElement("div",{className:u.a.eror},r&&o.a.createElement("span",null,n.error)))},f=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error,i=l({input:t,meta:n},r);return o.a.createElement(p,i,o.a.createElement("textarea",Object.assign({},t,r,{className:c&&u.a.erorblock+u.a.textarea||u.a.textarea})))},d=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error,i=l({input:t,meta:n},r);return o.a.createElement(p,i,o.a.createElement("input",Object.assign({},t,r,{className:c&&u.a.erorblock||""})))}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));n(0);var r=function(e){return function(t){if(t.length>e)return"Max length message ".concat(e," symbols")}},a=function(e){if(!e)return"This field dont empty"}},48:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(36),a=n(9);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={inProgress:[]},u=function(e,t){return{type:"TOGGLE_IS_PROGRESS",userId:e,isProgress:t}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_IS_PROGRESS":return o({},e,{inProgress:t.isProgress?[].concat(Object(r.a)(e.inProgress),[t.userId]):e.inProgress.filter((function(e){return e!=t.userId}))});default:return e}}},49:function(e,t,n){e.exports={header:"Header_header__1zKbY",log:"Header_log__193tM",logOut:"Header_logOut__1HMUr"}},52:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(139),o=n.n(c);t.a=function(){return a.a.createElement("div",null,a.a.createElement("img",{src:o.a,alt:"preloader"}))}},70:function(e,t,n){e.exports={nav:"NavBar_nav__1uwe6",sidebar:"NavBar_sidebar__3aJHP"}},74:function(e,t,n){e.exports={item:"Navitem_item__37iES",active:"Navitem_active__3lxWZ",awesome:"Navitem_awesome__4rK8N"}},75:function(e,t,n){e.exports={sidebar__item:"Sidebar_sidebar__item__1SVVe",sidebar__header:"Sidebar_sidebar__header__2PvPA",sidebar:"Sidebar_sidebar__27Upr"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return v})),n.d(t,"g",(function(){return E})),n.d(t,"f",(function(){return y})),n.d(t,"e",(function(){return _}));var r=n(7),a=n.n(r),c=n(12),o=n(36),i=n(9),u=n(13),s=n(32);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f="profile_ADD_POST",d={posts:[{id:0,message:"My post",likecounts:"10"},{id:1,message:"My post",likecounts:"15"},{id:2,message:"My post",likecounts:"20"}],profileInfo:null,status:null,isOwner:!1},m=function(e){return{type:f,message:e}},b=function(e){return{type:"profile_SET_STATUS",status:e}},h=function(e){return{type:"profile_SET_OWNER",isOwner:e}},O=function(e){return{type:"profile_SET_PHOTO",photo:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r(),e==c.auth.id?n(h(!0)):n(h(!1)),t.next=4,u.b.getProfileData(e);case 4:o=t.sent,n({type:"profile_SET_USER_PROFILE",profileInfo:o});case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r(),t.next=3,u.b.updateProfileData(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}n(g(c.auth.id)),t.next=10;break;case 8:return n(Object(s.a)("profileData",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject());case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,u.b.saveMainPhoto(e);case 3:0===(r=t.sent).data.resultCode&&n(O(r.data.data.photos));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var n={id:5,message:t.message,likecounts:0};return p({},e,{posts:[].concat(Object(o.a)(e.posts),[n]),newtext:""});case"profile_DELETE_POST":return p({},e,{posts:e.posts.filter((function(e){return e.id!=t.id}))});case"profile_SET_OWNER":return p({},e,{isOwner:t.isOwner});case"profile_SET_USER_PROFILE":return p({},e,{profileInfo:t.profileInfo});case"profile_SET_STATUS":return p({},e,{status:t.status});case"profile_SET_PHOTO":return p({},e,{profileInfo:p({},e.profileInfo,{photos:t.photo})});default:return e}}}},[[166,1,2]]]);
//# sourceMappingURL=main.a8901273.chunk.js.map