(this["webpackJsonptodo-draggable"]=this["webpackJsonptodo-draggable"]||[]).push([[0],{21:function(t,e,n){},28:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(2),i=n.n(a),c=n(5),s=n.n(c),r=(n(21),n(16)),o=n(10),l=n(7),u=n(15),p=n(14),d=n.n(p),j=(n(28),["#A2C523","#C6D166","#6FB98F","#7DA3A1","#4CB5F5","#B7B8B6","#B3C100","#68A225","#EB8A44","#F9DC24","#EE693F","#F69454","#C7DB00","#7AA802","#F78B2D","#E4B600","#EBDF00","#B38540","#F79B77","#D4DDE1","#AA4B41","#90AFC5","#336B87","#F34A4A","#1B4B5A","#217CA3","#E29930","#FB6542","#375E97","#80BD9E","#FF420E","#F98866","#89DA59","#F52549","#FA6775","#9BC01C","#CB6318","#CF3721","#31A9B8","#258039","#344D90","#F25C00","#F9A603","#4897D8","#D13525","#486824","#F2C057","#E73F0B","#BBCF4A","#F56C57","#F77604","#B38867","#FFEC5C","#E1315B","#008DCB","#00CFFA","#FFB745","#E7552C","#138D90","#DDBC95","#CDAB81","#98DBC6","#E6D72A","#A0B084"]);var b=n(1);var A=function(){var t=Object(a.useState)(""),e=Object(o.a)(t,2),n=e[0],i=e[1],c=Object(a.useState)(JSON.parse(localStorage.getItem("tasks"))||[]),s=Object(o.a)(c,2),p=s[0],A=s[1];Object(a.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(p))}),[p]);var C=function(){n&&n.trim()?(A([].concat(Object(r.a)(p),[{task:n,id:Date.now(),color:j[Math.round(Math.random()*(j.length-1))],defaultPosition:{x:0,y:0},isComplete:!1,isWarrning:!1}])),i("")):(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443"),i(""))};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"App__tasks",children:p.map((function(t){return Object(b.jsx)(d.a,{grid:[10,10],defaultPosition:t.defaultPosition,onStop:function(e,n){!function(t,e){var n=p.map((function(n){return n.id===e?n.defaultPosition={x:t.x,y:t.y}:n}));A(n)}(n,t.id)},children:Object(b.jsxs)("div",{className:"App__task-drag",children:[Object(b.jsx)("div",{style:{backgroundColor:t.color},className:t.isComplete?"App__task-title complete--active":"App__task-title",children:Object(b.jsx)("p",{className:"App__task-text",children:t.task})}),Object(b.jsxs)("div",{className:"App__btn-group",children:[Object(b.jsx)("button",{className:t.isComplete?"complete-btn--active":"App__btn-complete",onClick:function(){return function(t){var e=p.map((function(e){return e.id===t?e.isComplete=!e.isComplete:e}));A(e)}(t.id)},title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e",children:Object(b.jsx)(u.a,{})}),Object(b.jsx)("button",{className:t.isWarrning?"warning-btn--active":"App__btn-warning",onClick:function(){return function(t){var e=p.map((function(e){return e.id===t?e.isWarrning=!e.isWarrning:e}));A(e)}(t.id)},title:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043a\u0430\u043a \u0432\u0430\u0436\u043d\u043e\u0435",children:Object(b.jsx)(l.b,{})}),Object(b.jsx)("button",{className:"App__btn-remove",onClick:function(){return e=t.id,void A(p.filter((function(t){return t.id!==e})));var e},title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",children:Object(b.jsx)(l.a,{})})]})]})},t.id)}))}),Object(b.jsxs)("div",{className:"App__header",children:[Object(b.jsx)("input",{className:"App__input",type:"text",value:n,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443...",onChange:function(t){return e=t.target.value,void(n.length<40?i(e):alert("\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c!"));var e},onKeyPress:function(t){return function(t){"Enter"===t.key&&C()}(t)}}),Object(b.jsx)("button",{className:"App__btn-set",onClick:C,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})};s.a.render(Object(b.jsx)(i.a.Fragment,{children:Object(b.jsx)(A,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.b0e27831.chunk.js.map