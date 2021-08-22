(this["webpackJsonpwallet-frontend"]=this["webpackJsonpwallet-frontend"]||[]).push([[0],{55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(20),s=a.n(r),i=a(7),o=a(4),l=a.n(o),d=a(6),u=a(5),b=a(3),j=a.n(b),h=a(21),p=a.n(h).a.create({baseURL:"https://wallet--backend.herokuapp.com/api",headers:{"Content-Type":"application/json"}}),m=(a(55),a(0)),f={allowEscapeKey:!1,backdrop:!0,allowOutsideClick:!1},x=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(u.a)(r,2),o=s[0],b=s[1],h=Object(n.useState)(1),x=Object(u.a)(h,2),O=x[0],v=x[1],g=Object(n.useState)(0),w=Object(u.a)(g,2),y=w[0],N=w[1],k=Object(n.useState)(!1),C=Object(u.a)(k,2),S=C[0],E=C[1],I=10,M=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/wallet/".concat(t.id));case 3:a=e.sent,n=a.data.data,c(n),localStorage.setItem("user",JSON.stringify(t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),localStorage.clear();case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/transactions",{params:{walletId:t.id,skip:a,limit:I}});case 3:return n=e.sent,(c=n.data.data)instanceof Array&&c.length&&b(c),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),B=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,c,r,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),e.next=4,p.get("/transactions/all1/".concat(a.id));case 4:t=e.sent,n=(n=t.data).replace(/}/g,"},").replace(/,]/,"]"),(n=JSON.parse(n))instanceof Array&&n.length&&(c=[Object.keys(n[0])],n.forEach((function(e){return c.push(Object.values(e))})),r="data:text/csv;charset=utf-8,"+c.join("\n"),s=encodeURI(r),(i=document.createElement("a")).setAttribute("href",s),i.setAttribute("download","".concat(a.name," - transactions.csv")),document.body.appendChild(i),i.click(),E(!1)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),E(!1),j.a.fire("Error",e.t0.toString(),"error");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),D=function(e){var t=e.target.dataset.action;j.a.fire(Object(i.a)(Object(i.a)({title:"".concat(t," Money"),html:'\n            <form>\n             <label>Enter the amount(with max 4 decimal point). e.g. "1000" or "10.5555"</label><br/>\n             <input id="amount" autocomplete="off" class="swal2-input" placeholder="Amount" type="number" />\n             <input id="description" autocomplete="off" class="swal2-input" placeholder="Description" type="text" />\n            </form>\n        ',showCancelButton:!0,confirmButtonText:t,showLoaderOnConfirm:!0},f),{},{preConfirm:function(){var e=+document.getElementById("amount").value,n=document.getElementById("description").value;if(!e||e<1e-4||e>1e6||!new RegExp(/^\d*(\.\d{1,4})?$/).test(e))return j.a.showValidationMessage("Amount should be between 0.0001 to 1000000. Max. decimal points are 4");if(!n)return j.a.showValidationMessage("Description can't be empty");var c="You added INR ".concat(e," in your wallet!");return"Pay"===t&&(c="You paid INR ".concat(e," from your wallet!"),e=-e),p.post("/transact/".concat(a.id),{amount:e,description:n}).then((function(e){j.a.fire("Good job! ".concat(a.name),c,"success"),M(a),A(a,y)})).catch((function(e){var t="Request failed: ".concat(e);e&&e.response&&e.response.data&&(t=e.response.data.prettyMsg),j.a.showValidationMessage(t)}))}})),document.getElementById("amount").focus()},R=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("prev"!==t){e.next=6;break}if(0!==y){e.next=3;break}return e.abrupt("return");case 3:n=y-I,e.next=9;break;case 6:if(!(o.length<I)){e.next=8;break}return e.abrupt("return");case 8:n=y+I;case 9:return e.next=11,A(a,n);case 11:(c=e.sent)instanceof Array&&0===c.length&&(n="prev"===t?n+I:n-I),N(n),v(Math.ceil((n+1)/I));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e;try{e=JSON.parse(localStorage.getItem("user"))}catch(t){}p.get("/health"),e&&e.id?(M(e),A(e,y)):j.a.fire(Object(i.a)(Object(i.a)({title:"Setup new wallet",text:'Enter your name. e.g. "Madhav Sharma".',input:"text",inputPlaceholder:"Name",showCancelButton:!1,confirmButtonText:"Create!",showLoaderOnConfirm:!0},f),{},{preConfirm:function(e){return!e||e.length<4||e.length>25?j.a.showValidationMessage("Name length should be between 4 to 25 characters"):p.post("/wallet/setup",{name:e,balance:0}).then((function(e){var t=e.data.data;c(t),localStorage.setItem("user",JSON.stringify(t)),j.a.fire("Good job! ".concat(e.data.data.name),"Your wallet is ready to use!","success")})).catch((function(e){var t="Request failed: ".concat(e);e&&e.response&&e.response.data&&(t=e.response.data.prettyMsg),j.a.showValidationMessage(t)}))}}))}),[]),Object(m.jsxs)(m.Fragment,{children:[a&&a.id?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"ui raised very padded text container segment",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{className:"content",children:[Object(m.jsxs)("div",{className:"header",children:["Hello, ",a.name," \ud83d\udc4b"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"description",children:["Current Balance: INR ",Object(m.jsx)("b",{children:a.balance})]})]}),Object(m.jsx)("div",{className:"extra content",children:Object(m.jsxs)("div",{className:"ui two buttons",children:[Object(m.jsx)("div",{className:"ui basic green button","data-action":"Add",onClick:function(e){return D(e)},children:"Add Money"}),Object(m.jsx)("div",{className:"ui basic red button","data-action":"Pay",onClick:function(e){return D(e)},children:"Pay"})]})})]})})}):Object(m.jsx)("div",{className:"ui active inverted dimmer",children:Object(m.jsx)("div",{className:"ui large text loader",children:"Loading"})}),o&&o.length?Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"ui raised very padded text container segment",children:[Object(m.jsx)("h1",{children:"Transactions"}),Object(m.jsx)("button",{title:"Export in CSV",className:"ui icon button basic positive right floated ".concat(S?"loading disabled":""),onClick:function(){return B()},children:Object(m.jsx)("i",{className:"download icon"})}),Object(m.jsx)("div",{}),Object(m.jsxs)("table",{className:"ui celled table fixed unstackable",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Date"}),Object(m.jsx)("th",{children:"Description"}),Object(m.jsx)("th",{children:"Amount"}),Object(m.jsx)("th",{children:"Balance"})]})}),Object(m.jsx)("tbody",{children:o.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{"data-label":"Date",children:new Date(e.date).toLocaleString()}),Object(m.jsx)("td",{"data-label":"Description",children:e.description}),Object(m.jsxs)("td",{className:"CREDIT"===e.type?"positive":"negative","data-label":"Amount",children:[Math.abs(e.amount)," (","CREDIT"===e.type?"Cr":"Dr",")"]}),Object(m.jsx)("td",{"data-label":"Balance",children:e.balance})]},t)}))})]}),Object(m.jsxs)("div",{className:"ui buttons three",children:[Object(m.jsxs)("button",{className:"ui button ".concat(0===y?"disabled":"active"),onClick:function(){return R("prev")},children:[Object(m.jsx)("i",{className:"left arrow icon"}),"Previous"]}),Object(m.jsx)("div",{className:"or","data-Text":O}),Object(m.jsxs)("button",{className:"ui button ".concat(I>o.length?"disabled":"active"),onClick:function(){return R("next")},children:["Next",Object(m.jsx)("i",{className:"right arrow icon"})]})]})]})}):null]})};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.3ca1ec3f.chunk.js.map