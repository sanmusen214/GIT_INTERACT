(this["webpackJsonpweb-code-editor"]=this["webpackJsonpweb-code-editor"]||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){},157:function(e,t){},162:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(31),c=n.n(r),l=(n(114),n(5)),i=(n(115),n(9)),s=function(e){var t=e.title,n=e.onClick;return Object(i.jsx)("div",{children:Object(i.jsx)("button",{style:{maxWidth:"140px",minWidth:"80px",height:"30px",marginRight:"5px",cursor:"pointer"},onClick:n,children:t})})},u=n(21),d=n(30),h=(n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(126),n(127),n(130),n(88),n(131),n(87),n(132),n(133),n(97)),m=n(169),p=n(170),f=n(168),g=n(165),j=n(166),b=n(171),v=n(167),O=n(37),x=n.n(O),y="user_key",S="user_name",w="token",k="user_id",T={saveUser:function(e){x.a.set(y,e)},getUser:function(){return x.a.get(y)||{}},removeUser:function(){x.a.remove(y)},saveUserId:function(e){x.a.set(k,e)},getUserId:function(){return x.a.get(k)},saveUserName:function(e){x.a.set(S,e)},removeUserName:function(){x.a.remove(S)},getUserName:function(){return x.a.get(S)},saveToken:function(e){x.a.set(w,e)},removeToken:function(){x.a.remove(w)},getToken:function(){return x.a.get(w)}},E=v.a.create({baseURL:"http://127.0.0.1:5000"});E.interceptors.request.use((function(e){var t=T.getToken();return t&&(e.headers.Authorization=t),e}),(function(e){console.log("\u53d1\u9001\u5931\u8d25\u4e86"),Promise.reject(e)})),E.interceptors.response.use((function(e){return e}),(function(e){T.removeToken(),T.removeUser()}));var I=E,C=n(66),N=n.n(C),_=function(e){var t=N.a.stringify({repodir:e});return I({method:"post",url:"/repo/clone",data:t})},D=function(e){console.log(e);var t=e.file_content,n=e.reponame,o=e.file_rel_path;console.log("\u63a5\u53e3\u91cc\u7684\u7f16\u8f91\u6846\u6570\u636efile_content: ",t),console.log("\u63a5\u53e3\u91cc\u7684\u7f16\u8f91\u6846\u6570\u636ereponame: ",n),console.log("\u63a5\u53e3\u91cc\u7684\u7f16\u8f91\u6846\u6570\u636erel_path: ",o);var a=new File([t],"fileToUpload.html",{type:""}),r=new FormData,c=new Headers;return c.append("User-Agent","Apifox/1.0.0 (https://www.apifox.cn)"),r.append("reponame",n),r.append("file_rel_path",o),r.append("file_content",a),console.log(r),I({url:"/commit/file",headers:c,method:"POST",data:r})},F=function(e){var t=N.a.stringify(e);return I({url:"/git/push",method:"POST",data:t})},B=function(e){var t=N.a.stringify(e);return I({url:"/git/pull",method:"POST",data:t})},L=n(14),P=n(15),U=n(24),A=n(23),J=n(107),M=function(e){Object(U.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(L.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={InputValue:"git@github.com:zhyAmber/FYP.git",content:""},e.handleGetInputValue=function(t){e.setState({InputValue:t.target.value})},e.getData=function(t){var n=[];return console.log(t,"data"),t.forEach((function(t){t.files&&t.files.length>0&&t.files.forEach((function(e){n.push({title:e.name,key:e.rel_path})})),t.folders&&t.folders.length>0?t.folders.forEach((function(t){n.push({title:t.name,key:t.rel_path,children:e.getData([t])})})):n.push({title:t.name,key:t.rel_path})})),n},e.InputSubmit=Object(d.a)(Object(u.a)().mark((function t(){var n,o;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.InputValue,console.log("\u4f20\u7ed9\u540e\u7aef\u7684\u8f93\u5165\u6846\u6570\u636evalue: ",n),t.next=4,_(n);case 4:o=t.sent,console.log("result: ",o),console.log("result.data: ",o.data),localStorage.setItem("result.data: ",JSON.stringify(o.data)),e.props.getTreeData(o.data.reponame,e.getData([o.data.foldertree])),e.setState({content:o.data.foldertree.files,localStorage:o}),200===o.status?(J.b.success("\u8f93\u5165\u6846\u5185\u5bb9\u53d1\u9001\u6210\u529f"),console.log("finish")):J.b.error("\u8f93\u5165\u6846\u53d1\u9001\u51fa\u4e86\u4e00\u70b9\u95ee\u9898");case 11:case"end":return t.stop()}}),t)}))),e}return Object(P.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("result.data: "));e&&(this.props.getTreeData(e.reponame,this.getData([e.foldertree])),console.log("hhhhhhhhhhhhhhhhhhh"))}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{value:this.state.InputValue,onChange:this.handleGetInputValue}),Object(i.jsx)("button",{type:"primary",htmlType:"submit",onClick:this.InputSubmit,onSubmit:this.InputSubmit,children:"Clone"})]})}}]),n}(a.a.Component),H=M,V=m.a.DirectoryTree,W=function(e){var t=e.language,n=e.value,a=e.setEditorState,r=Object(o.useState)(),c=Object(l.a)(r,2),s=c[0],m=c[1],v=Object(o.useState)("dracula"),O=Object(l.a)(v,2),x=O[0],y=O[1],S=Object(o.useState)(),w=Object(l.a)(S,2),k=w[0],T=w[1],E=Object(o.useState)([]),C=Object(l.a)(E,2),_=C[0],L=C[1],P=function(){var e=Object(d.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("\u4f20\u7ed9\u540e\u7aef\u7684\u7f16\u8f91\u6846\u6570\u636econtent: ",n),console.log("\u4f20\u7ed9\u540e\u7aef\u7684\u7f16\u8f91\u6846\u6570\u636ereponame: ",k),console.log("\u4f20\u7ed9\u540e\u7aef\u7684\u7f16\u8f91\u6846\u6570\u636erel_path: ",s),D({file_content:n,file_rel_path:s,reponame:k}).then((function(e){console.log("result :",e.data)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("\u4f20\u7ed9\u540e\u7aef\u7684\u7f16\u8f91\u6846\u6570\u636ereponame: ",k),F({reponame:k}).then((function(e){console.log("result :",e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("\u4f20\u7ed9\u540e\u7aef\u7684\u7f16\u8f91\u6846\u6570\u636ereponame: ",k),B({reponame:k}).then((function(e){console.log("result :",e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)(p.a,{children:[Object(i.jsx)(f.a,{children:Object(i.jsx)(H,{getTreeData:function(e,t){T(e),L(t)}})}),Object(i.jsx)("br",{}),Object(i.jsxs)(g.a,{children:[Object(i.jsx)(j.a,{span:6,children:Object(i.jsx)(V,{multiple:!0,onSelect:function(e,t){console.log("infoinfo",t),console.log("Trigger Select",e,t),console.log("info",t.node.key),m(t.node.key),function(e){var t=N.a.stringify(e);return I({url:"/get/file",method:"POST",data:t})}({file_rel_path:t.node.key,reponame:k}).then((function(e){t.node.title.includes("html")&&e&&a(e.data),t.node.title.includes("json")?e&&a(JSON.stringify(e.data)):e&&a(JSON.parse(JSON.stringify(e.data)))}))},onExpand:function(e,t){console.log("Trigger Expand",e,t)},treeData:_})}),Object(i.jsxs)(j.a,{span:18,style:{height:"100vh"},children:[Object(i.jsxs)(f.a,{onFinish:P,children:[Object(i.jsxs)(f.a.Item,{name:"content",children:[Object(i.jsx)("div",{children:Object(i.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(i.jsx)("label",{htmlFor:"cars",children:"\u9009\u62e9\u4e3b\u9898: "}),Object(i.jsx)("select",{name:"theme",onChange:function(e){y(e.target.value)},children:["dracula","material","mdn-like","the-matrix","night"].map((function(e){return Object(i.jsx)("option",{value:e,children:e})}))})]})}),Object(i.jsx)("div",{className:"editor-container",children:Object(i.jsx)(h.Controlled,{onBeforeChange:function(e,t,n){a(n),localStorage.setItem("content",n)},value:n,autoScroll:"true",options:{lineWrapping:!0,lint:!0,mode:t,lineNumbers:!0,theme:x,autoCloseTags:!0,autoCloseBrackets:!0,autofocus:!0,focus:!0,styleActiveLine:!0,styleActiveSelected:!0,showCursorWhenSelecting:!0}})})]}),Object(i.jsx)(f.a.Item,{children:Object(i.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Save & Submit"})})]}),Object(i.jsx)(f.a,{onFinish:U,children:Object(i.jsx)(f.a.Item,{children:Object(i.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Push"})})}),Object(i.jsx)(f.a,{onFinish:A,children:Object(i.jsx)(f.a.Item,{children:Object(i.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Pull"})})})]})]})]})};var z=function(){var e=Object(o.useState)(localStorage.getItem("content")||""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)(""),c=Object(l.a)(r,2),u=c[0],d=c[1],h=Object(o.useState)(""),m=Object(l.a)(h,2),p=m[0],f=m[1],g=Object(o.useState)(""),j=Object(l.a)(g,2),b=j[0],v=j[1],O=Object(o.useState)("html"),x=Object(l.a)(O,2),y=x[0],S=x[1],w=Object(o.useState)(""),k=Object(l.a)(w,2),T=k[0],E=k[1],I="\\";Object(o.useEffect)((function(){var e=setTimeout((function(){E("".concat(n,"\n\n          <style>\n          ").concat(u,'\n          *{\n            -moz-user-select:none;/*\u706b\u72d0*/\n            -webkit-user-select:none;/*webkit\u6d4f\u89c8\u5668*/\n            -ms-user-select:none;/*IE10*/\n            -khtml-user-select:none;/*\u65e9\u671f\u6d4f\u89c8\u5668*/\n              user-select:none;\n        }\n          .selected{\n            position:relative;\n            cursor:pointer;\n            }\n         .selected:after{\n              }\n         .selected:hover:after{\n            position:absolute;\n            left:0;\n            width:100%;\n            height:100%;\n            background-color:red;\n            opacity:.3;\n            pointer-events: none;\n            content:""\n           }\n          </style>\n\n\n          <script>\n          function countNum(arr,element){\n             let count = 0;\n             for(let i=0;i<arr.length;i++){\n                if(arr[i]==element){\n                  count++\n                }\n             }\n             return count\n          }\n  \n          function getLine(word,wordNum){\n            let html = localStorage.getItem("codepen-clone-html");\n            let stack =[]\n            let line=1;\n            for(let i=0;i<html.length;i++){\n              //\u5224\u65ad\u9996\u5b57\u6bcd\u76f8\u540c\n              if(word[0]==html[i]){\n                        \n              //\u5224\u65ad\u5b57\u7b26\u51fa\u73b0\u7684\u4f4d\u7f6e\uff0c\u5e76\u9650\u5b9a\u5b57\u7b26\u51fa\u73b0\u5728><\u4e4b\u95f4\n              if(html.substr(i,word.length)==word&&html[i-1]==">"&&html[i+word.length]=="<"){\n                  stack.push([i])\n                  i=i+word.length\n              }\n             }\n            }\n            let ch = 0;\n            for(let i=0;i<=stack[wordNum];i++){\n              if(html[i]!="').concat(I).concat(I,'"){\n                ch++\n              }\n              if(html.substr(i,2)=="').concat(I).concat(I,'n"){\n                line++\n                ch=0;\n             }\n            }\n            return JSON.stringify({\n              line: line-1,\n              ch: ch-2+word.length\n            })\n          }\n          \n          window.addEventListener(\'scroll\', function() {\n            localStorage.setItem("scrollTop", document.documentElement.scrollTop)\n          })\n  \n          window.onload=function(){\n            let stack=[];\n  \n            let allEvent = document.getElementsByTagName("*");\n  \n            //\u83b7\u53d6\u7f16\u8f91\u5668\n            let editor = window.parent.document.querySelector(\'.CodeMirror\').CodeMirror; \n            document.documentElement.scrollTop = localStorage.getItem("scrollTop")\n            \n            //\u83b7\u53d6navbar\n            let navbar = window.parent.document.getElementsByClassName("navbar")[0]\n            let navbarToggle = window.parent.document.getElementsByClassName("navbar-toggle")[0] \n            let menuBars = window.parent.document.getElementsByClassName("menu-bars")[0] \n            let FF = window.parent.document.getElementsByClassName("Files")[0] \n            //\u9632\u6b62editor\u5931\u53bb\u7126\u70b9\n            document.onmousedown=function(event){\n              event.preventDefault();\n            }\n            navbar.onmousedown=function(event){\n              event.preventDefault();\n            } \n        \n            menuBars.onmousedown=function(event){\n              event.preventDefault();\n            } \n  \n            navbarToggle.onmousedown=function(event){\n              event.preventDefault();\n            } \n  \n            FF.onmousedown=function(event){\n              event.preventDefault();\n            } \n  \n            for(let i=0;i<allEvent.length;i++){\n              //\u9009\u62e9\u5185\u5bb9\u975e\u7a7a\u4e14\u6ca1\u6709\u5b69\u5b50\u5143\u7d20\u7684\u8282\u70b9\n              if(allEvent[i].children.length==0 && allEvent[i].innerHTML!=""){\n                  stack.push(allEvent[i].innerHTML);\n                  allEvent[i].classList.add(\'selected\');\n                  allEvent[i].setAttribute("selectedId",countNum(stack,allEvent[i].innerHTML)-1);   \n                  allEvent[i].onclick=function(e){\n                    \n                    //\u9632\u6b62\u5931\u53bb\u7126\u70b9\n                    e.preventDefault();\n   \n                    //\u963b\u6b62\u5192\u6ce1\n                    e.stopPropagation();\n                    localStorage.setItem("location",getLine(this.innerHTML,parseInt(this.getAttribute("selectedId"))));    \n                    // console.log(localStorage.getItem("location"))\n                    editor.setCursor(JSON.parse(localStorage.getItem("location")));\n                }                \n              }          \n            \n             }                       \n            }\n            <\/script>\n\n           \n        '))}),250);return function(){clearTimeout(e)}}),[n,u,p]);var C=function(e){S(e)};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("p",{children:"Welcome to Web Code Editor \uff01"}),Object(i.jsxs)("div",{className:"tab-button-container",children:[Object(i.jsx)(s,{title:"HTML",onClick:function(){C("html")}}),Object(i.jsx)(s,{title:"CSS",onClick:function(){C("css")}}),Object(i.jsx)(s,{title:"JavaScript",onClick:function(){C("js")}}),Object(i.jsx)(s,{title:"Python",onClick:function(){C("python")}})]}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"pane_editor",children:[Object(i.jsx)("div",{style:{height:"100%"},children:"html"===y?Object(i.jsx)(W,{language:"xml",value:n,setEditorState:a}):"css"===y?Object(i.jsx)(W,{language:"css",value:u,setEditorState:d}):"python"===y?Object(i.jsx)(W,{language:"python",value:b,setEditorState:v}):Object(i.jsx)(W,{language:"javascript",value:p,setEditorState:f})}),Object(i.jsx)("div",{className:"pane_iframe",children:Object(i.jsx)("iframe",{id:"iframe",srcDoc:T,title:"output",sandbox:"allow-scripts allow-same-origin",frameBorder:"0",width:"100%",height:"100%"})})]})})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),o(e),a(e),r(e),c(e)}))};n(161);c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(z,{})}),document.getElementById("root")),q()}},[[162,1,2]]]);
//# sourceMappingURL=main.8a5bbcdd.chunk.js.map