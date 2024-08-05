"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[1636],{88083:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(67294);const a=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/button",text:"Button"},{id:10,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:11,link:"/projects/sistent/components/button/code",text:"Button"},{id:12,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:13,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:14,link:"/projects/sistent/components/text-input/code",text:"Text Input"}];var o=n(63689);var s=n(67268).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var l=()=>{var e,t;const{0:n,1:l}=(0,i.useState)(0);return(0,i.useEffect)((()=>{const e=window.location.pathname,t=a.findIndex((t=>t.link===e));l(t)}),[]),i.createElement(s,null,n>0?i.createElement(o.default,{secondary:!0,url:null===(e=a[n-1])||void 0===e?void 0:e.link},"← Previous"):null,n<a.length-1?i.createElement(o.default,{primary:!0,url:null===(t=a[n+1])||void 0===t?void 0:t.link},"Next →"):null)}},82616:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(67294),a=n(66158),o=n(63689),s=n(71082),l=n(23631),r=n.p+"static/confirmation-30cc3286cf9ef35cd167cbac94912318.png",c=n.p+"static/confirmation-dark-b134135994ade5258153506e95b76d1a.png",m=n(37242),d=n(89192);var p=()=>{const e=(0,l.useLocation)(),{isDark:t}=(0,d.I)();return i.createElement(a.y,{title:"Modal"},i.createElement("div",{className:"content"},i.createElement("a",{id:"Identity"},i.createElement("h2",null,"Modal")),i.createElement("p",null,"A modal is a container that appears in front of the main content on a page, providing important information or an actionable piece of content for users to execute."),i.createElement("div",{className:"filterBtns"},i.createElement(o.default,{className:"/projects/sistent/components/modal"===e.pathname?"active":"",onClick:()=>(0,s.navigate)("/projects/sistent/components/modal"),title:"Overview"}),i.createElement(o.default,{className:"/projects/sistent/components/modal/code"===e.pathname?"active":"",onClick:()=>(0,s.navigate)("/projects/sistent/components/modal/code"),title:"Code"})),i.createElement("div",{className:"main-content"},i.createElement("p",null,"A modal is an interface element that assists users by providing added information in the form of a message or prompting an action as users interact with and navigate a solution."),i.createElement("a",{id:"Types"},i.createElement("h2",null,"Types")),i.createElement("p",null,"Modals can be used for various purposes. From conveying information that does not require much action to having a series of other components embedded in them to ensure that users are able to begin tasks and successfully complete them, modals can provide versatility to interfaces while ensuring a simple, intuitive, and efficient design."),i.createElement("h3",null,"Basic"),i.createElement("p",null,"The basic modal is one that helps users carry out common actions while navigating our solutions. These modals help to pass across important messages to the user, or assist them in completing common actions that do not require intricate knowledge of the subject matter. Some examples of basic modals can be share links, confirmation messages, feedback prompts and other similarly common actions. These type of modals can be easily identified by the lack of an icon at the top left corner of the modal. They may sometimes include form fields but mostly will just require users to either confirm and cancel actions or make progress while carrying out a particular task."),i.createElement(m.X2,{className:"image-container",Hcenter:!0},i.createElement(m.JX,{md:8,lg:8,sm:12},i.createElement("img",{width:"100%",src:t?c:r,alt:"confirmation"}))),i.createElement("h3",null,"Action"),i.createElement("p",null,"Action modals help users carry out specific tasks. These would naturally involve more steps than just confirming or rejecting an action. They may include forms, links, and feature specific elements that ensure that users complete crucial tasks along their given flow. They will usually have an icon at the top left corner of the modal to signify what the purpose of this modal is in relation to the given flow as well as help users familiarize with said custom icons for easy identification across our solutions however, this might not be applicable in all cases."))))};var u=()=>i.createElement(p,null)},66158:function(e,t,n){n.d(t,{y:function(){return d}});var i=n(67294),a=n(56678),o=n(25661),s=n(37242),l=n(88083),r=n(71082);const c=n(67268).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-q3x19t-0"})(["\n  width: 18rem;\n\n  @media screen and (max-width: 750px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);var m=function(){const{0:e,1:t}=(0,i.useState)([]);(0,i.useEffect)((()=>{const e=document.querySelectorAll(".main-content > a");console.log(e),e&&t(Array.from(e).map((e=>({id:e.id,link:`#${e.id}`,text:e.id}))))}),[]);const{0:n,1:a}=(0,i.useState)(null);return(0,i.useEffect)((()=>{const e=window.location.pathname;a(e)}),[]),i.createElement(c,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,e.map((e=>i.createElement("li",{key:e.id,className:"list"},i.createElement(r.Link,{to:`${n}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))};const d=e=>{let{title:t,children:n}=e;return i.createElement(a.Z,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,t)),i.createElement(o.Z,null),i.createElement("div",{className:"page-section"},i.createElement(s.W2,null,n," ",i.createElement(l.Z,null)),i.createElement(m,null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-sistent-components-modal-index-js-edad66639d14161f186f.js.map