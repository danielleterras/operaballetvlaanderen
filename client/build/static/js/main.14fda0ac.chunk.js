(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(54)},37:function(e,t,n){},38:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),s=(n(37),n(38),n(9)),c="/",l="/performances",u="/stories",m="/about",h=n(8),p=n(17),d=Object(p.b)("storiesStore")(Object(p.c)(function(e){var t=e.storiesStore,n=t.stories;console.log(n);var a=r.a.createRef(),i=r.a.createRef(),o=r.a.createRef(),s=r.a.createRef(),c=r.a.createRef(),l=r.a.createRef();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Stories"),r.a.createElement("ul",null,n.map(function(e){return r.a.createElement("article",{key:e.id},r.a.createElement("h2",null,e.title),r.a.createElement("span",null,e.type)," - ",r.a.createElement("span",null,e.genre)," -"," ",r.a.createElement("span",null,e.author),r.a.createElement("p",null,e.synopsys))})),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.addStory({type:a.current.value,genre:i.current.value,author:o.current.value,title:s.current.value,synopsis:c.current.value,story:l.current.value}),a.current.value="",i.current.value="",o.current.value="",s.current.value="",c.current.value="",l.current.value=""}},r.a.createElement("label",{htmlFor:"type"},"Type",r.a.createElement("input",{type:"text",name:"type",id:"type",ref:a})),r.a.createElement("label",{htmlFor:"genre"},"Genre",r.a.createElement("select",{id:"genre",name:"genre",ref:i},r.a.createElement("option",null,"-- Select a category --"),r.a.createElement("option",{value:"Opera"},"Opera"),r.a.createElement("option",{value:"Ballet"},"Ballet"),r.a.createElement("option",{value:"Experimenteel"},"Experimenteel"))," "),r.a.createElement("label",{htmlFor:"author"},"Auteur",r.a.createElement("input",{type:"text",name:"author",id:"author",ref:o})),r.a.createElement("label",{htmlFor:"title"},"Titel",r.a.createElement("input",{type:"text",name:"title",id:"title",ref:s})),r.a.createElement("label",{htmlFor:"synopsys"},"Synopsis",r.a.createElement("input",{type:"text",name:"synopsys",id:"synopsys",ref:c})),r.a.createElement("label",{htmlFor:"story"},"Verhaal",r.a.createElement("textarea",{type:"text",name:"story",id:"story",ref:l})),r.a.createElement("input",{type:"submit",value:"add"})))})),y=n(3),f=n(7),v=n(13),E=n(12),b=n(14),g=function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Performances"),r.a.createElement("p",null,"testing"))}}]),t}(a.Component),O=(n(48),n(30)),j=n.n(O),w=n(16),S=n(11),x=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(v.a)(this,Object(E.a)(t).call(this,e))).start=n.start.bind(Object(w.a)(n)),n.stop=n.stop.bind(Object(w.a)(n)),n.animate=n.animate.bind(Object(w.a)(n)),n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.mount.clientWidth,t=this.mount.clientHeight,n=new S.e,a=new S.d(75,e/t,.1,1e3),r=new S.f({antialias:!0}),i=new S.a(1,1,1),o=new S.c({color:"#433F81"}),s=new S.b(i,o);a.position.z=4,n.add(s),r.setClearColor("#000000"),r.setSize(e,t),this.scene=n,this.camera=a,this.renderer=r,this.material=o,this.cube=s,this.mount.appendChild(this.renderer.domElement),this.start()}},{key:"componentWillUnmount",value:function(){this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"start",value:function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(){this.cube.rotation.x+=.01,this.cube.rotation.y+=.01,this.renderScene(),this.frameId=window.requestAnimationFrame(this.animate)}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{width:"400px",height:"400px"},ref:function(t){e.mount=t}})}}]),t}(a.Component),k=(n(49),function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{navigation:!0,sectionsColor:["#282c34","#ff5f45","#0798ec"],render:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"section"},"Cube needs to go here",r.a.createElement(x,null)),r.a.createElement("div",{className:"section"},r.a.createElement(d,null)),r.a.createElement("div",{className:"section"},r.a.createElement("h3",null,"Section 3"),r.a.createElement(g,null)))}})}}]),t}(a.Component)),F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("article",null,r.a.createElement("h2",null,"Opera Ballet Vlaanderen"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))},A=Object(s.e)(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:u,component:d}),r.a.createElement(s.a,{path:l,component:g}),r.a.createElement(s.a,{path:m,component:F}),r.a.createElement(s.a,{path:c,exact:!0,strict:!0,component:k})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=n(1),I=n(31),T=n.n(I),q=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T.a.v4(),a=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,c=arguments.length>6?arguments[6]:void 0;Object(y.a)(this,e),this.setId=function(e){return t.id=e},this.setType=function(e){return t.type=e},this.setGenre=function(e){return t.genre=e},this.setAuthor=function(e){return t.author=e},this.setTitle=function(e){return t.title=e},this.setSynopsys=function(e){return t.synopsys=e},this.setStory=function(e){return t.story=e},this.updateFromServer=function(e){t.setId(e._id),t.setType(e.type),t.setGenre(e.genre),t.setAuthor(e.author),t.setTitle(e.title),t.setSynopsys(e.synopsys),t.setStory(e.story)},this.id=n,this.type=a,this.genre=r,this.author=i,this.title=o,this.synopsys=s,this.story=c}return Object(f.a)(e,[{key:"values",get:function(){return{type:this.type,genre:this.genre,author:this.author,title:this.title,synopsys:this.synopsys,story:this.story}}}]),e}();Object(C.h)(q,{id:C.m,setId:C.d,values:C.e,type:C.m,setType:C.d,genre:C.m,setGenre:C.d,author:C.m,setAuthor:C.d,title:C.m,setTitle:C.d,synopsys:C.m,setSynopsys:C.d,story:C.m,setStory:C.d});var R=q,B=n(18),G=n.n(B),N=n(22),W=function e(t){var n=this;Object(y.a)(this,e),this.getAll=Object(N.a)(G.a.mark(function e(){var t;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(n.entity));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)})),this.create=function(){var e=Object(N.a)(G.a.mark(function e(t){var a;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(n.entity),n.getOptions("post",t.values));case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getOptions=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={method:e.toUpperCase(),headers:{"content-type":"application/json"}};return t&&(n.body=JSON.stringify(t)),n},this.entity=t};Object(C.f)({enforceActions:"observed"});var D=function e(t){var n=this;Object(y.a)(this,e),this.stories=[],this.addStory=function(e){var t=e.type,a=e.author,r=e.genre,i=e.story,o=e.title,s=e.synopsis,c=new R(t,r,a,o,s,i);n.stories.push(c),n.api.create(c).then(function(e){return c.updateFromServer(e)})},this._addStory=function(e){console.log("test  api");var t=new R;t.updateFromServer(e),Object(C.n)(function(){return n.stories.push(t)})},this.rootStore=t,this.api=new W("stories"),this.api.getAll().then(function(e){return e.forEach(n._addStory)})};Object(C.h)(D,{stories:C.m,addStory:C.d});var J=D,U=new function e(){Object(y.a)(this,e),this.storiesStore=new J(this)};o.a.render(r.a.createElement(p.a,U,r.a.createElement(h.a,null,r.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.14fda0ac.chunk.js.map