"use strict";(self.webpackChunktweets=self.webpackChunktweets||[]).push([[709],{9709:function(e,s,r){r.r(s),r.d(s,{default:function(){return L}});var t=r(9439),n=r(2791),a=r(1087),l=r(5093),o=r(5218),i=r(5421),c=r(6098),u=r.n(c),d=function(e){return u()(e).format("0,0")},f="UserCard_userCard__tT-6-",_="UserCard_userName__kJqX5",w="UserCard_avatarDekor__TxL4t",g="UserCard_avatar__1Ax7k",h="UserCard_cardText__Mx7e2",x="UserCard_followBtn__BxdQi",m="UserCard_followingBtn__K4nlu",j=r(184),p=function(e){var s=e.user,r=e.tweets,a=e.followres,l=e.avatar,c=e.following,u=e.id,p=(0,i.kD)(),v=(0,t.Z)(p,2),b=v[0],N=v[1],C=N.isLoading,k=N.isSuccess,F=N.isError,T=function(){var e=!c,s=e?a+=1:a-=1;b({id:u,updatedFollowersAmount:s,followingStatus:e})};return(0,n.useEffect)((function(){k&&!c&&o.Am.success("You are following ".concat(s," now")),k&&c&&o.Am.success("You stoped following ".concat(s)),F&&o.Am.error("Ooops, something going wrong...")}),[k,F]),(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)("p",{className:_,children:s}),(0,j.jsx)("div",{className:w,children:(0,j.jsx)("img",{className:g,src:l,alt:"avatar"})}),(0,j.jsxs)("p",{className:h,children:[d(r)," tweets"]}),(0,j.jsxs)("p",{className:h,children:[d(a)," followers"]}),c?(0,j.jsx)("button",{onClick:T,disabled:C,type:"button",className:m,children:C?(0,j.jsx)(j.Fragment,{children:"Changing status..."}):(0,j.jsx)(j.Fragment,{children:"Following"})}):(0,j.jsx)("button",{onClick:T,disabled:C,className:x,type:"button",children:C?(0,j.jsx)(j.Fragment,{children:"Changing status..."}):(0,j.jsx)(j.Fragment,{children:"Follow"})})]})},v="UsersList_usersList__91BD0",b=function(e){var s=e.users;return(0,j.jsx)("ul",{className:v,children:s&&s.map((function(e){var s=e.user,r=e.tweets,t=e.followres,n=e.avatar,a=e.id,l=e.following;return(0,j.jsx)("li",{children:(0,j.jsx)(p,{user:s,tweets:r,followres:t,avatar:n,id:a,following:l})},a)}))})},N=r(304),C="ErrorMessage_errorText__HBUoT",k=function(){return(0,j.jsx)("p",{className:C,children:"Oooops, something going wrong, refresh the page"})},F="Tweets_btnWraper__pz2fO",T="Tweets_paginationBtn__NOWZi",U="Tweets_currentPage__bdLSB",B="Tweets_tweetsHeader__ZiIYB",S="Tweets_backLink__yzW7-",Z="Tweets_select__noGrM",L=function(){var e=(0,n.useState)(1),s=(0,t.Z)(e,2),r=s[0],o=s[1],c=(0,n.useState)([]),u=(0,t.Z)(c,2),d=u[0],f=u[1],_=(0,n.useState)({label:"Show all",value:"all"}),w=(0,t.Z)(_,2),g=w[0],h=w[1],x=(0,i.zQ)(r),m=x.data,p=x.isFetching,v=x.isError;return(0,n.useEffect)((function(){f(function(e,s){switch(s.value){case"followings":return e.filter((function(e){return e.following}));case"follow":return e.filter((function(e){return!e.following}));default:return e}}(m,g))}),[m,g]),(0,j.jsx)(j.Fragment,{children:v?(0,j.jsx)(k,{}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:B,children:[(0,j.jsx)(l.ZP,{className:Z,defaultValue:g,onChange:h,options:[{value:"all",label:"Show all"},{value:"follow",label:"Follow"},{value:"followings",label:"Followings"}]}),(0,j.jsx)(a.rU,{className:S,to:"/",children:"Back to Home"})]}),p&&(0,j.jsx)(N.a,{}),(0,j.jsx)(b,{users:d}),(0,j.jsxs)("div",{className:F,children:[(0,j.jsx)("button",{className:T,type:"button",disabled:1===r,onClick:function(){return o(r-1)},children:"Previous"}),(0,j.jsx)("span",{className:U,children:r}),(0,j.jsx)("button",{className:T,type:"button",disabled:3===r,onClick:function(){return o(r+1)},children:"Next"})]})]})})}}}]);
//# sourceMappingURL=709.0ff4f652.chunk.js.map