(window["webpackJsonpchallenge-2"]=window["webpackJsonpchallenge-2"]||[]).push([[0],{10:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},39:function(e,t,a){e.exports=a(70)},44:function(e,t,a){},68:function(e,t,a){},69:function(e,t){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),s=a.n(c),l=(a(44),a(1)),i=a(2),o=a(4),u=a(3),m=a(5),p=(a(9),a(10),a(22)),h=a.n(p),d=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{className:"header-logo",src:h.a,alt:""})),r.a.createElement("td",null,"KabarKabar"))))}}]),t}(r.a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("table",{className:"table-center"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"menu-item-list"},"Masuk"),r.a.createElement("td",{className:"menu-item-list"},"Daftar"))))}}]),t}(r.a.Component),A=a(8),b=a.n(A),g=a(16),f=a(17),O=a(15),I=a(7),C=a(36),j=Object(C.a)({username:"abc",email:"",status:"",searchInput:"",articles:[]}),v=function(){return{setNama:function(e,t){return{username:t}},setEmail:function(e,t){return{email:t}},setStatus:function(e,t){return{status:t}},setSearchInput:function(e,t){return{searchInput:t}},setArticle:function(e,t){return{articles:t}}}},x=a(19),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).sepakBola=Object(g.a)(b.a.mark(function e(){var t,n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.setSearchInput("premier league");case 2:"q=Indonesia&",r=(t="https://newsapi.org/v2/everything?")+"q=Indonesia&"+(n="apikey=f36d39ed6dca46759870db4ee3c9e304"),""==a.props.searchInput?(console.log(r),x.get(r).then(function(e){a.props.setArticle(e.data.articles)})):(r=t+"q="+a.props.searchInput+"&"+n,console.log(r),x.get(r).then(function(e){a.props.setArticle(e.data.articles)}));case 7:case"end":return e.stop()}},e)})),a.ekonomi=Object(g.a)(b.a.mark(function e(){var t,n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.setSearchInput("economy");case 2:"q=Indonesia&",r=(t="https://newsapi.org/v2/everything?")+"q=Indonesia&"+(n="apikey=f36d39ed6dca46759870db4ee3c9e304"),""==a.props.searchInput?(console.log(r),x.get(r).then(function(e){a.props.setArticle(e.data.articles)})):(r=t+"q="+a.props.searchInput+"&"+n,console.log(r),x.get(r).then(function(e){a.props.setArticle(e.data.articles)}));case 7:case"end":return e.stop()}},e)})),a.politik=Object(g.a)(b.a.mark(function e(){var t,n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.setSearchInput("politics");case 2:"q=Indonesia&",r=(t="https://newsapi.org/v2/everything?")+"q=Indonesia&"+(n="apikey=f36d39ed6dca46759870db4ee3c9e304"),""==a.props.searchInput?(console.log(r),x.get(r).then(function(e){a.props.setArticle(e.data.articles)})):(r=t+"q="+a.props.searchInput+"&"+n,console.log(r),x.get(r).then(function(e){a.props.setArticle(e.data.articles)}));case 7:case"end":return e.stop()}},e)})),a.hiburan=Object(g.a)(b.a.mark(function e(){var t,n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.setSearchInput("hiburan");case 2:"q=Indonesia&",r=(t="https://newsapi.org/v2/everything?")+"q=Indonesia&"+(n="apikey=f36d39ed6dca46759870db4ee3c9e304"),""==a.props.searchInput?(console.log(r),x.get(r).then(function(e){a.props.setArticle(e.data.articles)})):(r=t+"q="+a.props.searchInput+"&"+n,console.log(r),x.get(r).then(function(e){a.props.setArticle(e.data.articles)}));case 7:case"end":return e.stop()}},e)})),a.signup=function(){a.props.setStatus("false")},a.renderRedirect=function(){if("false"===a.props.status)return r.a.createElement(f.a,{to:"/"})},a.state={category:"",status:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({status:localStorage.getItem("status")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"menu-header"},this.renderRedirect(),r.a.createElement("table",{className:"table-center"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"align-center"},r.a.createElement("td",{className:"menu-item-list"},r.a.createElement(O.b,{to:"/sepak_bola",onClick:this.sepakBola},"SepakBola")),r.a.createElement("td",{className:"menu-item-list"},r.a.createElement(O.b,{to:"/ekonomi",onClick:this.ekonomi},"Ekonomi")),r.a.createElement("td",{className:"menu-item-list"},r.a.createElement(O.b,{to:"/politik",onClick:this.politik},"Politik")),r.a.createElement("td",{className:"menu-item-list"},r.a.createElement(O.b,{to:"/hiburan",onClick:this.hiburan},"Hiburan")),r.a.createElement("td",{className:"menu-item-list",onClick:this.signup},"Signup"),r.a.createElement("td",{className:"menu-item-list"},r.a.createElement(O.b,{to:"/profil"},"Profil"))))))}}]),t}(r.a.Component),w=Object(I.connect)("status, searchInput, articles",v)(Object(f.g)(S)),y=a(19),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){},a.onChange=function(){var e=Object(g.a)(b.a.mark(function e(t){var n,r,c,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,e.next=3,a.props.setSearchInput(n);case 3:"q=Indonesia&",s=(r="https://newsapi.org/v2/everything?")+"q=Indonesia&"+(c="apikey=f36d39ed6dca46759870db4ee3c9e304"),""==a.props.searchInput?y.get(s).then(function(e){a.props.setArticle(e.data.articles)}):(s=r+"q="+a.props.searchInput+"&"+c,y.get(s).then(function(e){a.props.setArticle(e.data.articles)}));case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("table",{className:"table-center search"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"search",placeholder:"search",onChange:this.onChange})))))}}]),t}(r.a.Component),z=Object(I.connect)("searchInput",v)(k),N=function(e){function t(e){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid header-bg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("table",{className:"height100"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"align-middle"},r.a.createElement(d,null)))))),r.a.createElement("div",{className:"col-4"},r.a.createElement("table",{className:"height100"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"align-middle"},r.a.createElement(w,null)))))),r.a.createElement("div",{className:"col-4"},r.a.createElement("table",{className:"height100"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"align-middle"},r.a.createElement(z,null)))))),r.a.createElement("div",{className:"col-2"},r.a.createElement("table",{className:"height100"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"align-middle"},r.a.createElement(E,null))))))))}}]),t}(r.a.Component),Q=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("table",{className:"table-center berita-terkini-bar"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"align-left width"},"Berita Terkini"),r.a.createElement("td",{className:"align-right"},r.a.createElement("a",{href:""},"lihat semua")))))}}]),t}(r.a.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("table",{className:"table-center berita-terkini"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"text red"},this.props.title)),r.a.createElement("tr",null,r.a.createElement("td",{className:"text"},this.props.content))))}}]),t}(r.a.Component),P=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"headline"},r.a.createElement("div",{className:"photo"},r.a.createElement("img",{src:this.props.headlineNews.urlToImage,alt:""})),r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,this.props.headlineNews.title),r.a.createElement("p",null,this.props.headlineNews.content),r.a.createElement("div",{className:"feedback"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",{className:"size"},r.a.createElement("td",null,r.a.createElement("img",{src:"http://pngimg.com/uploads/like/like_PNG89.png",alt:""})),r.a.createElement("td",null,r.a.createElement("img",{src:"data:image/jpeg;base64,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",alt:""})),r.a.createElement("td",null,r.a.createElement("img",{src:"data:image/png;base64,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",alt:""}))))))))}}]),t}(r.a.Component),Z=(a(19),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=[],t=[];return this.props.articles.length>0&&(e=this.props.articles[0],t=this.props.articles.slice(1,4)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement(Q,null),t.map(function(e){return r.a.createElement(B,{content:e.content,title:e.title})})),r.a.createElement("div",{className:"col-8"},r.a.createElement(P,{headlineNews:e}))))}}]),t}(r.a.Component)),W=Object(I.connect)("articles, searchInput",v)(Z),L=(a(19),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).hostNews="https://newsapi.org/v2/everything?",a.query="q=Indonesia&",a.apikey="apikey=1bc92a837b9f46b6a433a86582beab5b",a.state={news:[{description:"description",title:"title"}],searchInput:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props.searchInput),r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{className:"blank"}),r.a.createElement(W,{content:this.state.news}),r.a.createElement("div",{className:"blank"}))}}]),t}(r.a.Component)),G=Object(I.connect)("searchInput",v)(L),T=(a(68),a(19)),V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleLogin=Object(g.a)(b.a.mark(function e(){var t,n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.props.setNama(a.state.username),a.props.setEmail(a.state.password),a.props.setStatus("true"),e.next=5,a.props.setSearchInput("");case 5:"q=Indonesia&",r=(t="https://newsapi.org/v2/everything?")+"q=Indonesia&"+(n="apikey=f36d39ed6dca46759870db4ee3c9e304"),console.log(a.props.searchInput),""==a.props.searchInput?T.get(r).then(function(e){a.props.setArticle(e.data.articles)}):(r=t+"q="+a.props.searchInput+"&"+n,T.get(r).then(function(e){a.props.setArticle(e.data.articles)})),a.props.history.push("/home");case 12:case"end":return e.stop()}},e)})),a.renderRedirect=function(){if("true"===a.state.status)return r.a.createElement(f.a,{to:"/home"})},a.handlePassword=function(e){var t=e.target.value;a.setState({password:t})},a.handleUsername=function(e){var t=e.target.value;a.setState({username:t})},a.state={username:"",password:"",status:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({status:localStorage.getItem("status")}),this.renderRedirect()}},{key:"render",value:function(){return r.a.createElement("div",{class:"login"},r.a.createElement(N,null),r.a.createElement("h1",null,"Yuk diisi user sama emailnya biar bisa di liat di profil(sembarang juga boleh)"),r.a.createElement("p",null,"sekali aja mas 'ngeclick submitnya' ini banyak pake 'await', ty :)"),r.a.createElement("label",{for:"username"},"Username:")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"username",id:"username",onChange:this.handleUsername}),r.a.createElement("br",null),r.a.createElement("label",{for:"password"},"Email:")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"password",id:"password",onChange:this.handlePassword}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleLogin},"submit"))}}]),t}(r.a.Component),J=Object(I.connect)("username, email, status, searchInput",v)(Object(f.g)(V)),H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(){a.setState({status:!a.state.status})},a.handlePassword=function(e){var t=e.target.value;a.setState({password:t})},a.handleUsername=function(e){var t=e.target.value;a.setState({password:t})},a.state={username:"",password:"",status:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"login-box"},r.a.createElement("label",{for:"username"},"Username:")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"username",placeholder:"mau kemana",id:"username",onChange:this.handleUsername}),r.a.createElement("br",null),r.a.createElement("label",{for:"password"},"Password:")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"password",id:"password",placeholder:"hayo",onChange:this.handlePassword}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleSubmit},"submit"))}}]),t}(r.a.Component),R=Object(I.connect)("",v)(H),F=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:""},r.a.createElement(N,null),r.a.createElement("h1",null,this.props.username),r.a.createElement("h1",null,this.props.email))}}]),t}(r.a.Component),M=Object(I.connect)("username, email",v)(F);var U=function(e){return r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/home",component:G}),r.a.createElement(f.b,{exact:!0,path:"/sepak_bola",component:G}),r.a.createElement(f.b,{exact:!0,path:"/hiburan",component:G}),r.a.createElement(f.b,{exact:!0,path:"/politik",component:G}),r.a.createElement(f.b,{exact:!0,path:"/ekonomi",component:G}),r.a.createElement(f.b,{exact:!0,path:"/",component:J}),r.a.createElement(f.b,{exact:!0,path:"/tes",component:R}),r.a.createElement(f.b,{exact:!0,path:"/profil",component:M}))};var q=function(){return r.a.createElement(O.a,null,r.a.createElement(U,null))};a(69),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(I.Provider,{store:j},r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){}},[[39,1,2]]]);
//# sourceMappingURL=main.8e97083c.chunk.js.map