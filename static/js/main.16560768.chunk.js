(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),i=(n(14),n(3)),s=n(4),l=n(6),u=n(5),h=n(7),d=(n(15),function(e){return c.a.createElement("div",{className:"card-container"},c.a.createElement("img",{alt:"cat",src:"https://robohash.org/".concat(e.cat.id,"?set=set4&size=180x180")}),c.a.createElement("h2",null,e.cat.name),c.a.createElement("p",null,e.cat.email))}),m=(n(16),function(e){return c.a.createElement("div",{className:"card-list"},e.cats.map(function(e){return c.a.createElement(d,{key:e.id,cat:e})}))}),f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return c.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(18),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={cats:[],searchField:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({cats:t})})}},{key:"render",value:function(){var e=this.state,t=e.cats,n=e.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Kitty Cards"),c.a.createElement(f,{placeholder:"searh kittens",handleChange:this.handleChange}),c.a.createElement(m,{cats:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.16560768.chunk.js.map