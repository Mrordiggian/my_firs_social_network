(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[4],{290:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var s=t(0),n=t.n(s),i=t(12),c=t(28),m=(t(45),function(e){return Object(i.b)((function(e){return{isAuthData:e.auth.isAuthData}}))((function(a){return a.isAuthData?n.a.createElement(e,a):n.a.createElement(c.a,{to:"/login"})}))})},295:function(e,a,t){e.exports={dialogs:"Message_dialogs__2OqUn",dialogsName:"Message_dialogsName__pK0gd",dialogsMessage:"Message_dialogsMessage__TsjrE"}},298:function(e,a,t){e.exports={item:"Dialogitem_item__2kdit",active:"Dialogitem_active__1_NEW"}},299:function(e,a,t){e.exports={message:"DialogMessage_message__1I5DS",right:"DialogMessage_right__25iFb"}},310:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(295),c=t.n(i),m=t(124),r=t(298),l=t.n(r),o=t(23),g=function(e){return n.a.createElement("div",{className:l.a.item},n.a.createElement("img",{src:e.ava}),n.a.createElement(o.b,{to:"/message/"+e.id,activeClassName:l.a.active},e.name))},u=t(299),d=t.n(u),E=function(e){return"receive"==e.send?n.a.createElement("div",{className:d.a.message},n.a.createElement("span",null,e.message)):"send"==e.send?n.a.createElement("div",{className:"".concat(d.a.message," + ").concat(d.a.right)},n.a.createElement("span",null,e.message)):void 0},_=t(125),f=t(126),v=t(61),p=t(62),b=function(e){var a=e.state.dialogs.map((function(e){return n.a.createElement(g,{id:e.id,name:e.name,ava:e.ava})})),t=e.state.messages.map((function(e){return n.a.createElement(E,{message:e.message,send:e.send})}));return n.a.createElement("div",{className:c.a.dialogs},n.a.createElement("div",{className:c.a.dialogsName},a),n.a.createElement("div",{className:c.a.dialogsMessage},t,n.a.createElement(w,{onSubmit:function(a){e.sendMessage(a.newMessage)}})))},M=Object(p.a)(100),w=Object(f.a)({form:"message"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement(_.a,{validate:[p.b,M],name:"newMessage",placeholder:"Enter your message...",cols:"30",rows:"3",component:v.b}),n.a.createElement("div",null,n.a.createElement("button",null,"Send message")))})),N=t(12),h=t(290),D=t(7),j=Object(D.d)(Object(N.b)((function(e){return{state:e.MessagePage,newtextMessage:e.MessagePage.newtextMessage}}),{sendMessage:m.b}),h.a)(b);a.default=j}}]);
//# sourceMappingURL=4.209ba002.chunk.js.map