"use strict";(self.webpackChunklanding=self.webpackChunklanding||[]).push([[357],{6180:function(e,n,t){t(2791);var r=t(184);n.Z=function(e){var n=e.heading;return(0,r.jsx)("h2",{className:"section-heading",children:n})}},3357:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(8214),a=t(5861),c=t(8152),i=t(2791),s=t(6180),u=t(184),o=function(e){var n=e.deal,t=n.count,r=n.time;return(0,u.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,u.jsx)("h2",{className:"counter","data-count":t,children:t}),(0,u.jsx)("span",{children:r})]})},f=t(4569),l=t.n(f),d=t(4811),h=function(){var e=(0,d.e)().dealRef,n=(0,i.useState)([]),t=(0,c.Z)(n,2),f=t[0],h=t[1],v=function(e,n){var t=(0,i.useState)(!1),r=(0,c.Z)(t,2),a=r[0],s=r[1];return(0,i.useEffect)((function(){var t=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?s(!0):s(!1)}))}),n);return t.observe(e.current),function(){t.unobserve(e.current)}}),[e,n]),a}(e,{root:null,rootMargin:"0px",threshold:.05});return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("http://localhost:3001/api/deals");case 2:n=e.sent,h(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,i.useEffect)((function(){v&&function(e){Array.from(e.current.lastElementChild.children).forEach((function(e){var n=e.firstElementChild;n.innerText=0;var t=+n.dataset.count;!function e(){var r=+n.innerText;r<t?(n.innerText=""+Math.ceil(r+.3),setTimeout(e,100)):n.innerText=t}()}))}(e)}),[e,v]),(0,u.jsxs)("section",{ref:e,className:"deal",id:"deal",children:[(0,u.jsx)(s.Z,{heading:"Deals of the Week"}),(0,u.jsx)("div",{className:"container flex justify-center wrap items-center",children:f.map((function(e){return(0,u.jsx)(o,{deal:e},e.id)}))})]})}}}]);
//# sourceMappingURL=357.7db1ea6d.chunk.js.map