(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(54)},37:function(e,t,n){},38:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(10),o=n.n(i),s=(n(37),n(38),n(9)),c="/",l="/performances",u="/stories",m="/about",h=n(8),p=n(17),d=Object(p.b)("storiesStore")(Object(p.c)(function(e){var t=e.storiesStore,n=t.stories;console.log(n);var r=a.a.createRef(),i=a.a.createRef(),o=a.a.createRef(),s=a.a.createRef(),c=a.a.createRef(),l=a.a.createRef();return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Stories"),a.a.createElement("ul",null,n.map(function(e){return a.a.createElement("article",{key:e.id},a.a.createElement("h2",null,e.title),a.a.createElement("span",null,e.type)," - ",a.a.createElement("span",null,e.genre)," -"," ",a.a.createElement("span",null,e.author),a.a.createElement("p",null,e.synopsys))})),a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.addStory({type:r.current.value,genre:i.current.value,author:o.current.value,title:s.current.value,synopsis:c.current.value,story:l.current.value}),r.current.value="",i.current.value="",o.current.value="",s.current.value="",c.current.value="",l.current.value=""}},a.a.createElement("label",{htmlFor:"type"},"Type",a.a.createElement("input",{type:"text",name:"type",id:"type",ref:r})),a.a.createElement("label",{htmlFor:"genre"},"Genre",a.a.createElement("select",{id:"genre",name:"genre",ref:i},a.a.createElement("option",null,"-- Select a category --"),a.a.createElement("option",{value:"Opera"},"Opera"),a.a.createElement("option",{value:"Ballet"},"Ballet"),a.a.createElement("option",{value:"Experimenteel"},"Experimenteel"))," "),a.a.createElement("label",{htmlFor:"author"},"Auteur",a.a.createElement("input",{type:"text",name:"author",id:"author",ref:o})),a.a.createElement("label",{htmlFor:"title"},"Titel",a.a.createElement("input",{type:"text",name:"title",id:"title",ref:s})),a.a.createElement("label",{htmlFor:"synopsys"},"Synopsis",a.a.createElement("input",{type:"text",name:"synopsys",id:"synopsys",ref:c})),a.a.createElement("label",{htmlFor:"story"},"Verhaal",a.a.createElement("textarea",{type:"text",name:"story",id:"story",ref:l})),a.a.createElement("input",{type:"submit",value:"add"})))})),y=n(3),f=n(7),v=n(13),E=n(12),b=n(14),g=function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Performances"),a.a.createElement("p",null,"testing"))}}]),t}(r.Component),w=(n(48),n(30)),O=n.n(w),j=n(16),S=n(11),x=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(v.a)(this,Object(E.a)(t).call(this,e))).start=n.start.bind(Object(j.a)(n)),n.stop=n.stop.bind(Object(j.a)(n)),n.animate=n.animate.bind(Object(j.a)(n)),n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.mount.clientWidth,this.mount.clientHeight;var e=new S.e,t=new S.d(70,window.innerWidth/window.innerHeight,1,1e3),n=new S.f({antialias:!0}),r=new S.a(1,1,1),a=new S.c({color:"#fff"}),i=new S.b(r,a);t.position.z=4,e.add(i),n.setClearColor("#000"),n.setSize(window.innerWidth,window.innerHeight),this.scene=e,this.camera=t,this.renderer=n,this.material=a,this.cube=i,this.mount.appendChild(this.renderer.domElement),this.start()}},{key:"componentWillUnmount",value:function(){this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"start",value:function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(){this.cube.rotation.x+=.01,this.cube.rotation.y+=.01,this.renderScene(),this.frameId=window.requestAnimationFrame(this.animate)}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"section",style:{width:"400px",height:"400px"},ref:function(t){e.mount=t}})}}]),t}(r.Component),k=(n(49),function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return a.a.createElement(O.a,{navigation:!0,sectionsColor:["#282c34","#ff5f45","#0798ec"],render:function(){return a.a.createElement("div",null,a.a.createElement(x,null),a.a.createElement("div",{className:"section"},a.a.createElement(d,null)),a.a.createElement("div",{className:"section"},a.a.createElement("h3",null,"Section 3"),a.a.createElement(g,null)))}})}}]),t}(r.Component)),F=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",null,a.a.createElement("article",null,a.a.createElement("h2",null,"Opera Ballet Vlaanderen"),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))},A=Object(s.e)(function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{path:u,component:d}),a.a.createElement(s.a,{path:l,component:g}),a.a.createElement(s.a,{path:m,component:F}),a.a.createElement(s.a,{path:c,exact:!0,strict:!0,component:k})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=n(1),I=n(31),T=n.n(I),q=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T.a.v4(),r=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,c=arguments.length>6?arguments[6]:void 0;Object(y.a)(this,e),this.setId=function(e){return t.id=e},this.setType=function(e){return t.type=e},this.setGenre=function(e){return t.genre=e},this.setAuthor=function(e){return t.author=e},this.setTitle=function(e){return t.title=e},this.setSynopsys=function(e){return t.synopsys=e},this.setStory=function(e){return t.story=e},this.updateFromServer=function(e){t.setId(e._id),t.setType(e.type),t.setGenre(e.genre),t.setAuthor(e.author),t.setTitle(e.title),t.setSynopsys(e.synopsys),t.setStory(e.story)},this.id=n,this.type=r,this.genre=a,this.author=i,this.title=o,this.synopsys=s,this.story=c}return Object(f.a)(e,[{key:"values",get:function(){return{type:this.type,genre:this.genre,author:this.author,title:this.title,synopsys:this.synopsys,story:this.story}}}]),e}();Object(C.h)(q,{id:C.m,setId:C.d,values:C.e,type:C.m,setType:C.d,genre:C.m,setGenre:C.d,author:C.m,setAuthor:C.d,title:C.m,setTitle:C.d,synopsys:C.m,setSynopsys:C.d,story:C.m,setStory:C.d});var R=q,W=n(18),B=n.n(W),G=n(22),N=function e(t){var n=this;Object(y.a)(this,e),this.getAll=Object(G.a)(B.a.mark(function e(){var t;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(n.entity));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)})),this.create=function(){var e=Object(G.a)(B.a.mark(function e(t){var r;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(n.entity),n.getOptions("post",t.values));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getOptions=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={method:e.toUpperCase(),headers:{"content-type":"application/json"}};return t&&(n.body=JSON.stringify(t)),n},this.entity=t};Object(C.f)({enforceActions:"observed"});var D=function e(t){var n=this;Object(y.a)(this,e),this.stories=[],this.addStory=function(e){var t=e.type,r=e.author,a=e.genre,i=e.story,o=e.title,s=e.synopsis,c=new R(t,a,r,o,s,i);n.stories.push(c),n.api.create(c).then(function(e){return c.updateFromServer(e)})},this._addStory=function(e){console.log("test  api");var t=new R;t.updateFromServer(e),Object(C.n)(function(){return n.stories.push(t)})},this.rootStore=t,this.api=new N("stories"),this.api.getAll().then(function(e){return e.forEach(n._addStory)})};Object(C.h)(D,{stories:C.m,addStory:C.d});var H=D,J=new function e(){Object(y.a)(this,e),this.storiesStore=new H(this)};o.a.render(a.a.createElement(p.a,J,a.a.createElement(h.a,null,a.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.5e0b29e0.chunk.js.map