(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(7),i=a.n(n),r=(a(13),a(0));function l(){return Object(r.jsx)("nav",{className:"blue darken-2",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"#",className:"brand-logo",children:"React Movies"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#",children:"Login"})})})]})})}function o(){return Object(r.jsx)("footer",{className:"page-footer blue lighten-4",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Kovalevskiy Production",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"More Links"})]})})})}var h=a(2),d=a(3),j=a(5),b=a(4),p=a(8);function u(e){var t=e.Title,a=e.Year,c=e.imdbID,s=e.Type,n=e.Poster;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{id:c,className:"card movie",children:[Object(r.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:Object(r.jsx)("img",{className:"activator",src:n})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(r.jsxs)("p",{children:[a,Object(r.jsx)("span",{className:"right ",children:s})]})]}),Object(r.jsxs)("div",{className:"card-reveal",children:[Object(r.jsxs)("span",{className:"card-title grey-text text-darken-4",children:["Card Title",Object(r.jsx)("i",{className:"material-icons right",children:"close"})]}),Object(r.jsx)("p",{children:"Here is some more information about this product that is only revealed once clicked on."})]})]})})}function v(e){var t=e.movies,a=void 0===t?[]:t;return Object(r.jsx)("div",{className:"movies",children:a.length?a.map((function(e){return Object(r.jsx)(u,Object(p.a)({},e),e.imdbID)})):Object(r.jsx)("h4",{children:" Nothing was found"})})}function m(){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})}var O=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={search:[],type:"all"},e.handleKey=function(t){"Enter"===t.key&&e.props.SeachMovies(e.state.search,e.state.type)},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){return e.props.SeachMovies(e.state.search,e.state.type)}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"input-field ",children:[Object(r.jsx)("input",{id:"search",type:"search",placeholder:"Search",className:"validate",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey}),Object(r.jsx)("button",{className:"btn search-btn",onClick:function(){return e.props.SeachMovies(e.state.search,e.state.type)},children:"Search"}),Object(r.jsxs)("p",{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(r.jsx)("span",{children:"All"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(r.jsx)("span",{children:"Movies"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(r.jsx)("span",{children:"Series"})]})]})]})})}}]),a}(s.a.Component),x="84d48609",f=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={movies:[],loading:!0},e.SeachMovies=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("http://www.omdbapi.com/?apikey=".concat(x,"&s=").concat(t).concat("all"!==a?"&type=".concat(a):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://www.omdbapi.com/?apikey=".concat(x,"&s=iron man")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(O,{SeachMovies:this.SeachMovies}),a?Object(r.jsx)(m,{}):Object(r.jsx)(v,{movies:t})]})}}]),a}(s.a.Component);var y=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsx)(f,{}),Object(r.jsx)(o,{})]})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.69647459.chunk.js.map