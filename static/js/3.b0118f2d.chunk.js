(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[3],{296:function(e,t,a){e.exports=a.p+"static/media/user.36daa457.png"},297:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),o=a.n(n),l=a(14),r=a(30),c=(a(52),function(e){return Object(l.b)((function(e){return{isAuthData:e.auth.isAuthData}}))((function(t){return t.isAuthData?o.a.createElement(e,t):o.a.createElement(r.a,{to:"/login"})}))})},298:function(e,t,a){e.exports={wapper:"MyPost_wapper__KhOUe",postForm:"MyPost_postForm__3QL-Q",newPost:"MyPost_newPost__KsTMw"}},300:function(e,t,a){e.exports={wapper:"Profile_wapper__3hLyB"}},301:function(e,t,a){e.exports={post:"Post_post__1mla9",header:"Post_header__35SvX",body:"Post_body__3ikh7",name:"Post_name__1kx6U",bottom:"Post_bottom__20ozi"}},302:function(e,t,a){e.exports={info:"ProfileInfo_info__3TQ08",photo:"ProfileInfo_photo__vu84q",about_element:"ProfileInfo_about_element__RwM7S",ava:"ProfileInfo_ava__UQWQ7",status:"ProfileInfo_status__2HdzN",about:"ProfileInfo_about__gdq7h",faEdit:"ProfileInfo_faEdit__2RgFI",saveForm:"ProfileInfo_saveForm__1qfrN",pointer:"ProfileInfo_pointer__2dFY6",dataInfo:"ProfileInfo_dataInfo__3DeV2",status_item:"ProfileInfo_status_item__FW2x2"}},304:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(14),r=(a(300),a(298)),c=a.n(r),i=a(98),u=a(23);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,o=!1,l=void 0;try{for(var r,c=e[Symbol.iterator]();!(n=(r=c.next()).done)&&(a.push(r.value),!t||a.length!==t);n=!0);}catch(i){o=!0,l=i}finally{try{n||null==c.return||c.return()}finally{if(o)throw l}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=a(301),f=a.n(m),p=a(24),d=a(53),E=a(296),b=a.n(E),v=function(e){var t=e.photo,a=e.fullName,n=e.message,l=e.likeCounts,r=e.deletePost,c=e.id;return o.a.createElement("div",{className:f.a.post+" block"},o.a.createElement("div",{className:f.a.header},o.a.createElement("img",{src:t||b.a,alt:"Photo"}),o.a.createElement("div",{className:f.a.name},a," ",o.a.createElement("button",{onClick:function(){return r(c)}},o.a.createElement(d.a,{icon:p.i,size:"lg"})))),o.a.createElement("div",{className:f.a.body},n),o.a.createElement("div",{className:f.a.bottom},o.a.createElement("span",null,o.a.createElement(d.a,{icon:p.e,size:"lg"})," ",l)))},_=a(132),P=a(133),g=a(46),h=a(44),N=o.a.memo((function(e){var t=e.posts,a=e.photo,l=e.fullName,r=e.addPost,i=e.deletePost,m=s(Object(n.useState)(!1),2),f=m[0],p=m[1],d=Object(u.a)(t).reverse().map((function(e){return o.a.createElement(v,{key:e.id,id:e.id,message:e.message,likeCounts:e.likecounts,photo:a,fullName:l,deletePost:i})}));return o.a.createElement("div",null,o.a.createElement("div",{className:c.a.postForm+" block"},!f&&o.a.createElement(y,{setEditMode:p}),f&&o.a.createElement(I,{setEditMode:p,onSubmit:function(e){r(e.newPost),p(!1)}})),d)})),y=function(e){var t=e.setEditMode;return o.a.createElement("div",{onClick:function(){t(!0)},className:c.a.newPost},o.a.createElement("span",null,"What`s new?"))},k=Object(g.a)(100),I=Object(P.a)({form:"addNewPost"})((function(e){var t=e.handleSubmit,a=e.setEditMode;return o.a.createElement("form",{onSubmit:t},o.a.createElement(_.a,{autoFocus:!0,name:"newPost",validate:[g.b,k],placeholder:"Enter your message...",component:h.b}),o.a.createElement("div",null,o.a.createElement("button",null,"Post"),o.a.createElement("button",{onClick:function(){return a(!1)}},"Cancel")))})),j=function(e){return e.ProfilePage.profileInfo},w=function(e){return e.ProfilePage.posts},O=function(e){return e.ProfilePage.status},S=function(e){return e.ProfilePage.isOwner},F=function(e){return e.ProfilePage.profileInfo.photos.small},D=function(e){return e.ProfilePage.profileInfo.fullName},M=Object(l.b)((function(e){return{posts:w(e),photo:F(e),fullName:D(e)}}),{addPost:i.a,deletePost:i.c})(N),A=a(302),x=a.n(A),C=function(e){var t=s(Object(n.useState)(!1),2),a=t[0],l=t[1],r=s(Object(n.useState)(e.status),2),c=r[0],i=r[1];return Object(n.useEffect)((function(){i(e.status)}),[e.status]),o.a.createElement("div",null,!a&&o.a.createElement("div",null,o.a.createElement("span",{onDoubleClick:function(){l(!0)}},e.status||"Set status")),a&&o.a.createElement("div",null,o.a.createElement("input",{autoFocus:!0,onBlur:function(){l(!1),e.updateProfileStatus(c)},value:c,onChange:function(e){i(e.currentTarget.value)}})))},J=a(110),z=a.n(J),Q=function(e){var t=e.profileInfo,a=e.isOwner,l=e.status,r=e.updateProfileStatus,c=e.updateProfileData,i=e.saveMainPhoto,u=s(Object(n.useState)(!1),2),m=u[0],f=u[1];return o.a.createElement("div",{className:x.a.info},o.a.createElement("div",{className:x.a.ava+" block"},o.a.createElement("div",{className:x.a.photo,style:{background:"url(".concat(t.photos.large||b.a,") 50% 50% no-repeat /cover")}}),a&&o.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])},accept:".jpg, .jpeg, .png"})),o.a.createElement("div",{className:x.a.dataInfo+" block"},o.a.createElement("h3",null,t.fullName),o.a.createElement("div",{className:x.a.status},a&&o.a.createElement(C,{status:l,updateProfileStatus:r}),!a&&o.a.createElement("div",{className:x.a.status_item},l)),a&&!m&&o.a.createElement("div",{className:x.a.faEdit,onClick:function(){f(!0)}},o.a.createElement(d.a,{className:x.a.pointer,icon:p.d,size:"lg"})),!m&&o.a.createElement(T,{profileInfo:t}),m&&o.a.createElement(q,{setEditMode:f,initialValues:t,onSubmit:function(e){c(e).then((function(){f(!1)}))},profileInfo:t})))},L=function(e){var t=e.title,a=e.value;return o.a.createElement("div",{className:x.a.about_element},o.a.createElement("b",null,t,": "),o.a.createElement("a",{href:a,target:"_blank"},a," "))},T=function(e){var t=e.profileInfo;return o.a.createElement("div",{className:x.a.about},o.a.createElement("div",{className:x.a.about_element},o.a.createElement("b",null,"About me: "),o.a.createElement("span",null,t.aboutMe)),o.a.createElement("div",{className:x.a.about_element},o.a.createElement("b",null,"Looking for a job: "),o.a.createElement("span",null,t.lookingForAJob?"yes":"no")),t.lookingForAJob&&o.a.createElement("div",{className:x.a.about_element},o.a.createElement("b",null,"Description a job: "),o.a.createElement("span",null,t.lookingForAJobDescription)),o.a.createElement("div",null,Object.keys(t.contacts).map((function(e){return t.contacts[e]&&o.a.createElement(L,{key:e,title:e,value:t.contacts[e]})}))))},q=Object(P.a)({form:"profileData"})((function(e){var t=e.profileInfo,a=e.handleSubmit,n=e.setEditMode,l=e.error;return o.a.createElement("form",{onSubmit:a},o.a.createElement("div",{className:x.a.saveForm},o.a.createElement("button",{className:x.a.pointer},"Save"),o.a.createElement(d.a,{className:x.a.pointer,onClick:function(){return n(!1)},icon:p.i,size:"lg"})),l&&o.a.createElement("div",{className:z.a.error},"  ",l," "),o.a.createElement(_.a,{validate:[],name:"fullName",type:"text",component:h.a}),o.a.createElement("div",null,o.a.createElement("b",null,"About me: ")),o.a.createElement(_.a,{validate:[],name:"aboutMe",type:"text",component:h.b}),o.a.createElement("div",null,o.a.createElement("b",null,"Looking for a job: ")),o.a.createElement("label",null,o.a.createElement(_.a,{name:"lookingForAJob",type:"radio",value:!0,component:"input",checked:!0}),"Yes"),o.a.createElement("label",null,o.a.createElement(_.a,{name:"lookingForAJob",type:"radio",value:!1,component:"input"}),"No"),o.a.createElement("div",null,o.a.createElement("b",null,"Description a job: ")),o.a.createElement(_.a,{validate:[],name:"lookingForAJobDescription",type:"text",component:h.b}),o.a.createElement("div",null,o.a.createElement("b",null,"Contacts: "),Object.keys(t.contacts).map((function(e){return o.a.createElement("div",null,e,o.a.createElement(_.a,{validate:[],name:"contacts."+e,type:"text",component:h.a}))}))))})),U=a(52),W=function(e){return e.profileInfo?o.a.createElement("div",null,o.a.createElement(Q,e),o.a.createElement(M,null)):o.a.createElement(U.a,null)},B=a(30),K=a(297),R=a(8),V=a(66);t.default=Object(R.d)(Object(l.b)((function(e){return{profileInfo:j(e),id:Object(V.a)(e),status:O(e),isOwner:S(e)}}),{getProfile:i.d,getProfileStatus:i.e,updateProfileStatus:i.h,updateProfileData:i.g,saveMainPhoto:i.f}),B.g,K.a)((function(e){return Object(n.useEffect)((function(){e.getProfile(e.match.params.userID||e.id),e.getProfileStatus(e.match.params.userID||e.id)}),[e.match.params.userID]),o.a.createElement(W,e)}))}}]);
//# sourceMappingURL=3.b0118f2d.chunk.js.map