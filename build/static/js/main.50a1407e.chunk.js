(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),i=c(26),a=c.n(i),r=(c(58),c(8)),o=(c(59),c(60),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("d257d35c9a71497c878d30c88576a802","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true")),l=c(1),j=function(){return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(l.jsx)("a",{href:o,children:"LOGIN WITH SPOTIFY"})]})},d=c(37),b=c.n(d),u=(c(62),c(63),c(28)),O=c.n(u),h=c(89),x=Object(s.createContext)(),m=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(l.jsx)(x.Provider,{value:Object(s.useReducer)(t,c),children:n})},_=function(){return Object(s.useContext)(x)},p=function(){var e,t=_(),c=Object(r.a)(t,2),s=c[0].user;c[1];return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"header__left",children:[Object(l.jsx)(O.a,{}),Object(l.jsx)("input",{type:"text",placeholder:"Search for Artist, Songs "})]}),Object(l.jsxs)("div",{className:"header__right",children:[Object(l.jsx)(h.a,{src:null===s||void 0===s||null===(e=s.images[0])||void 0===e?void 0:e.url,alt:null===s||void 0===s?void 0:s.display_name}),Object(l.jsx)("h4",{children:null===s||void 0===s?void 0:s.display_name})]})]})},f=c(30),v=c.n(f),y=c(41),g=c.n(y),N=c(40),S=c.n(N),k=(c(69),function(e){var t=e.track,c=void 0===t?"test":t;return Object(l.jsxs)("div",{className:"songRow",children:[Object(l.jsx)("img",{className:"songRow__album",src:c.album.images[0].url,alt:""}),Object(l.jsxs)("div",{className:"songRow__info",children:[Object(l.jsx)("h1",{children:c.name}),Object(l.jsxs)("p",{children:[c.artists.map((function(e){return e.name})).join(", ")," -"," ",c.album.name]})]})]})}),T=function(e){var t=e.spotify,c=_(),s=Object(r.a)(c,2),n=s[0].discovery_weekly;s[1];return Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)(p,{spotify:t}),Object(l.jsxs)("div",{className:"body__info",children:[Object(l.jsx)("img",{src:null===n||void 0===n?void 0:n.images[0].url,alt:""}),Object(l.jsxs)("div",{className:"body__infoText",children:[Object(l.jsx)("strong",{children:"PLAYLIST "}),Object(l.jsx)("h2",{children:"Discover Weekly"}),Object(l.jsx)("p",{children:null===n||void 0===n?void 0:n.description})]})]}),Object(l.jsxs)("div",{className:"body__song",children:[Object(l.jsxs)("div",{className:"body__icons",children:[Object(l.jsx)(v.a,{className:"body__shuffle"}),Object(l.jsx)(S.a,{fontSize:"large"}),Object(l.jsx)(g.a,{})]}),null===n||void 0===n?void 0:n.tracks.items.map((function(e){return Object(l.jsx)(k,{track:e.track})}))]})]})},E=(c(70),c(43)),w=c.n(E),I=c(44),L=c.n(I),Y=c(42),P=c.n(Y),R=c(45),A=c.n(R),C=c(87),z=c(88),D=c(46),F=c.n(D),U=c(47),B=c.n(U),K=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("div",{className:"footer__left",children:[Object(l.jsx)("img",{className:"footer__albumLogo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Davido_-_A_Better_Time.jpg/220px-Davido_-_A_Better_Time.jpg"}),Object(l.jsxs)("div",{className:"footer__songInfo",children:[Object(l.jsx)("h4",{children:"Yeah!"}),Object(l.jsx)("p",{children:"Usher"})]})]}),Object(l.jsxs)("div",{className:"footer__center",children:[Object(l.jsx)(P.a,{className:"footer__green"}),Object(l.jsx)(w.a,{className:"footer__icon"}),Object(l.jsx)(v.a,{className:"footer__icon",fontSize:"large"}),Object(l.jsx)(L.a,{className:"footer__icon"}),Object(l.jsx)(A.a,{className:"footer__green"})]}),Object(l.jsx)("div",{className:"footer__right",children:Object(l.jsxs)(C.a,{container:!0,spacing:2,children:[Object(l.jsx)(C.a,{item:!0,children:Object(l.jsx)(F.a,{})}),Object(l.jsx)(C.a,{item:!0,children:Object(l.jsx)(B.a,{})}),Object(l.jsx)(C.a,{item:!0,xs:!0,children:Object(l.jsx)(z.a,{})})]})})]})},V=(c(71),c(72),c(73),function(e){var t=e.title,c=e.Icon;return Object(l.jsxs)("div",{className:"sidebarOption",children:[c&&Object(l.jsx)(c,{className:"sidebarOption__icon"}),c?Object(l.jsx)("h4",{children:t}):Object(l.jsx)("p",{children:t})]})}),W=c(48),J=c.n(W),M=c(49),H=c.n(M),G=function(){var e,t=_(),c=Object(r.a)(t,2),s=c[0].playlists;c[1];return console.log(s),Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)("img",{className:"sidebar__logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(l.jsx)(V,{Icon:J.a,title:"Home"}),Object(l.jsx)(V,{Icon:O.a,title:"Search"}),Object(l.jsx)(V,{Icon:H.a,title:"Your Library"}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{className:"sidebar__title",children:"PLAYLISTS"}),Object(l.jsx)("hr",{}),null===s||void 0===s||null===(e=s.items)||void 0===e?void 0:e.map((function(e){return Object(l.jsx)(V,{title:e.name})}))]})},Q=function(e){var t=e.spotify;return Object(l.jsxs)("div",{className:"player",children:[Object(l.jsxs)("div",{className:"player_body",children:[Object(l.jsx)(G,{}),Object(l.jsx)(T,{spotify:t})]}),Object(l.jsx)(K,{})]})},X=new b.a;var Z=function(){var e=_(),t=Object(r.a)(e,2),c=t[0],n=(c.user,c.token),i=t[1];return Object(s.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var c=t.split("=");return e[c[0]]=decodeURIComponent(c[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(i({type:"SET_TOKEN",token:t}),X.setAccessToken(t),X.getMe().then((function(e){i({type:"SET_USER",user:e})})),X.getUserPlaylists().then((function(e){i({type:"SET_PLAYLISTS",playlists:e})})),X.getPlaylist("37i9dQZEVXcIJazRV9ISoM").then((function(e){i({type:"SET_DISCOVERY_WEEKLY",discovery_weekly:e})})))}),[]),Object(l.jsx)("div",{className:"App",children:n?Object(l.jsx)(Q,{spotify:X}):Object(l.jsx)(j,{})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))},$=c(14),ee=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object($.a)(Object($.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object($.a)(Object($.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object($.a)(Object($.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVERY_WEEKLY":return Object($.a)(Object($.a)({},e),{},{discovery_weekly:t.discovery_weekly});default:return e}};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{initialState:{user:null,playlists:[],playing:!1,item:null},reducer:ee,children:Object(l.jsx)(Z,{})})}),document.getElementById("root")),q()}},[[74,1,2]]]);
//# sourceMappingURL=main.50a1407e.chunk.js.map