(this["webpackJsonpfirebase-auth-2"]=this["webpackJsonpfirebase-auth-2"]||[]).push([[0],{138:function(e,t,c){},302:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(1),s=c.n(n),i=c(23),l=c.n(i),r=(c(138),c(139),c(140),c(13)),o=c(17),d=c(318),j=c(317),b=c(8),u=Object(n.createContext)(null),h=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),s=c[0],i=c[1];return Object(a.jsx)(u.Provider,{value:{currentUser:s,setCurrentUser:i},children:e.children})},O=c(20),x=c.n(O),m=c(31),f=c(80),v=(c(303),c(141),{apiKey:"AIzaSyBrQvz9yHsRj9zBryEaNiQKkohszrsVmVQ",authDomain:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBrQvz9yHsRj9zBryEaNiQKkohszrsVmVQ","REACT_APP_FIREBASE_AUTH-DOMAIN":"jobposting-d6f10.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"jobposting-d6f10",REACT_APP_FIREBASE_STORAGE_BUCKET:"jobposting-d6f10.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"848008751735",REACT_APP_FIREBASE_APP_ID:"1:848008751735:web:7f071d89c8b2174ea2f472",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-SPFNEVVZW8"}).REACT_APP_FIREBASE_AUTH_DOMAIN,projectId:"jobposting-d6f10",storageBucket:"jobposting-d6f10.appspot.com",messagingSenderId:"848008751735",appId:"1:848008751735:web:7f071d89c8b2174ea2f472",measurementId:"G-SPFNEVVZW8"});f.a.initializeApp(v);var p=f.a.auth(),g=f.a.firestore(),N=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/login",children:"Login"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/signup",children:"Sign Up"})})]})})},w=c(315),S=c(74),E=function(){var e=p.currentUser,t=Object(n.useContext)(u).setCurrentUser,c=Object(n.useState)(""),s=Object(b.a)(c,2),i=s[0],l=s[1],d=e?e.email:"",j=Object(n.useState)(""),h=Object(b.a)(j,2),O=h[0],f=h[1],v=Object(n.useState)(""),N=Object(b.a)(v,2),E=N[0],C=N[1],y=Object(n.useState)(""),A=Object(b.a)(y,2),T=A[0],P=A[1],I=Object(n.useState)(""),R=Object(b.a)(I,2),z=R[0],k=R[1],_=Object(n.useState)(""),H=Object(b.a)(_,2),D=H[0],F=H[1],B=Object(n.useState)(""),U=Object(b.a)(B,2),V=U[0],J=U[1],L=Object(r.f)();Object(n.useEffect)((function(){G()}));var M=function(){var e=Object(m.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.signOut();case 2:t(null),L.push("/"),window.location.reload();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){g.collection("users").doc(e.uid).get().then((function(e){l(e.data().role)}))},W=function(){f("blue"),C("blue"),P("blue"),k("blue"),F("blue"),J("blue")},K=function(e,t){"/dashboard"===t?(W(),f("black")):"/assigncandidates"===t?(W(),C("black")):"/interviewer"===t?(W(),P("black")):"/candidates"===t?(W(),k("black")):"/recruiter"===t?(W(),F("black")):"/candidatestatus"===t?(W(),J("black")):W()};return Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{children:["hr"===i?Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/dashboard",onClick:function(e){K(0,"/dashboard")},style:{color:O},children:"Dashboard"})}):"","hr"===i?Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/assigncandidates",onClick:function(e){K(0,"/assigncandidates")},style:{color:E},children:"Interviewer"})}):"","interviewer"===i?Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/interviewer",onClick:function(e){K(0,"/interviewer")},style:{color:T},children:"Interviews"})}):"","candidate"===i?Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/candidates",onClick:function(e){K(0,"/candidates")},style:{color:z},children:"Apply Jobs"})}):"","hr"===i?Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/recruiter",onClick:function(e){K(0,"/recruiter")},style:{color:D},children:"Jobs"})}):"",Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/candidatestatus",onClick:function(e){K(0,"/candidatestatus")},style:{color:V},children:"Status"})}),Object(a.jsx)("li",{children:d}),Object(a.jsx)("li",{children:Object(a.jsxs)(w.a,{children:[Object(a.jsx)(w.a.Toggle,{variant:"white",id:"dropdown-basic",children:Object(a.jsx)(S.a,{})}),Object(a.jsxs)(w.a.Menu,{className:"listRight",children:[Object(a.jsx)(w.a.Item,{children:Object(a.jsx)(o.b,{to:"/profile",onClick:function(e){K()},children:"Profile"})}),Object(a.jsx)(w.a.Item,{href:"/",onClick:M,children:"Logout"})]})]})})]})})},C=function(){var e=p.currentUser,t=e?Object(a.jsx)(E,{}):Object(a.jsx)(N,{});e&&e.email;return Object(a.jsxs)(d.a,{bg:"light",expand:"lg",variant:"light",children:[Object(a.jsx)(d.a.Brand,{href:"#home",children:"Awesome Recruiter"}),Object(a.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsx)(j.a,{className:"mr-auto navLinks",children:Object(a.jsx)(j.a.Link,{children:t})})})]})};function y(){return Object(a.jsx)("div",{className:"footer",children:"\xa9 2021 Awesome Recruiter"})}var A=function(){var e=Object(n.useContext)(u),t=(e.currentUser,e.setCurrentUser,Object(r.f)()),c=Object(n.useState)(""),s=Object(b.a)(c,2),i=s[0],l=(s[1],Object(n.useState)("")),d=Object(b.a)(l,2),j=d[0],h=(d[1],function(e){"email-login"===e.target.id?i=e.target.value:j=e.target.value});return Object(a.jsxs)("div",{className:"loginsignup-form",children:[Object(a.jsx)("h1",{className:"text-center",children:"Log in"}),Object(a.jsxs)("form",{onSubmit:function(e){return function(e,c,a){e.preventDefault(),p.signInWithEmailAndPassword(c,a).then((function(e){t.push("/dashboard")}))}(e,i,j)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"email-login",children:"Email:"}),Object(a.jsx)("input",{onChange:h,className:"form-control",type:"email",name:"email-login",id:"email-login",placeholder:"Enter Your Email"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"password-login",children:"Password:"}),Object(a.jsx)("input",{onChange:h,className:"form-control",type:"password",name:"password-login",id:"password-login",placeholder:"Enter Your Password"})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("button",{className:"btn btn-primary",children:"Login"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("h6",{children:["No account?",Object(a.jsx)(o.b,{to:"/signup",children:" Create one"})]})})]})]})},T=function(){Object(n.useContext)(u).setCurrentUser;var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=(t[0],t[1]),s=Object(n.useState)(""),i=Object(b.a)(s,2),l=(i[0],i[1]),r=Object(n.useState)(""),d=Object(b.a)(r,2),j=(d[0],d[1]),h=function(e){"name-sign-up"===e.target.id?c(e.target.value):"email-sign-up"===e.target.id?l(e.target.value):j(e.target.value)};return Object(a.jsx)("div",{className:"component",children:Object(a.jsxs)("div",{className:"loginsignup-form",children:[Object(a.jsx)("h1",{className:"text-center",children:"Sign up"}),Object(a.jsxs)("form",{onSubmit:function(e){return function(e,t,c,a){e.preventDefault(),alert("Please contact admin to create user with roles. Write to 'praveenrk189@gmail.com'")}(e)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"name-sign-up",children:"Name"}),Object(a.jsx)("input",{onChange:h,className:"form-control",type:"text",id:"name-sign-up",name:"name-sign-up",placeholder:"Enter Your Name"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"email-sign-up",children:"Email"}),Object(a.jsx)("input",{onChange:h,className:"form-control",type:"email",id:"email-sign-up",name:"email-sign-up",placeholder:"Enter Your Email"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"password-sign-up",children:"Password"}),Object(a.jsx)("input",{onChange:h,className:"form-control",type:"password",id:"password-sign-up",name:"password-sign-up",placeholder:"Enter Your Password"})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("button",{className:"btn btn-success",children:"Sign up"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("h6",{children:["Already have account?",Object(a.jsx)(o.b,{to:"/",children:" Sign in"})]})})]})]})})},P=function(){return Object(a.jsx)("div",{children:"THIS IS THE ADMIN PAGE"})},I=c(33),R=(c(53),c(21)),z=c(22),k=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],i=p.currentUser,l=null===i||void 0===i?void 0:i.email.split("@")[0],r=(null===l||void 0===l?void 0:l.charAt(0).toUpperCase())+(null===l||void 0===l?void 0:l.slice(1)),o=Object(n.useState)(!0),d=Object(b.a)(o,2),j=d[0],u=d[1];Object(n.useEffect)((function(){h()}),[]);var h=function(){g.collection("candidates").get().then((function(e){var t=[];e.docs.forEach((function(e){var c={id:e.id,interviewer:e.data().interviewer,title:e.data().jobAssignTitle,useremail:e.data().userEmail,selectedstatus:e.data().status,select:Object(a.jsx)("div",{className:"text-center h-6",children:Object(a.jsxs)("select",{onClick:function(t){return O(t,e.id)},children:[Object(a.jsx)("option",{id:"selectedValue",name:"selectedValue",value:"Please select",children:"Please select..."}),Object(a.jsx)("option",{id:"selectedValue",name:"selectedValue",value:"Selected",children:"Selected"}),Object(a.jsx)("option",{id:"selectedValue",name:"selectedValue",value:"Rejected",children:"Rejected"}),Object(a.jsx)("option",{id:"selectedValue",name:"selectedValue",value:"On-Hold",children:"On-Hold"})]})})};t.push(c)})),s(t),s(t.filter((function(e){return e.interviewer===r}))),u(!1)}))},O=function(){var e=Object(m.a)(x.a.mark((function e(t,c){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Please select"!==t.target.value){e.next=2;break}return e.abrupt("return");case 2:g.collection("candidates").doc(c).update({status:t.target.value}).then((function(e){console.log(t.target.value)})).catch((function(e){console.log(e)})),z.b.success("Result updated successfully");case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),f=[{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Interviewer"})},accessor:"interviewer",className:"font",width:160,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-4",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Candidate"})},accessor:"useremail",className:"font",width:160,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-6",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Position"})},accessor:"title",className:"font",width:140,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-6",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Status"})},accessor:"selectedstatus",className:"font",width:140,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-6",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Set Status"})},accessor:"select",className:"font",width:140,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-6",children:e.value})}}];return j?Object(a.jsx)("span",{children:Object(a.jsx)(R.Ring,{color:"gray",size:100})}):Object(a.jsxs)("div",{children:[Object(a.jsx)(I.a,{data:c,columns:f,className:"interviewerReactTable",sortable:!0,defaultPageSize:5,resizable:!1,showPageSizeOptions:!1}),Object(a.jsx)(z.a,{})]})},_=c(61),H=c(130),D=c(316),F=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),c=t[0],s=t[1],i=function(){return s(!1)},l=function(){return s(!0)},r=Object(n.useState)([]),o=Object(b.a)(r,2),d=o[0],j=o[1],u=Object(n.useState)(""),h=Object(b.a)(u,2),O=h[0],x=h[1],m=Object(n.useState)(""),f=Object(b.a)(m,2),v=f[0],p=f[1],N=Object(n.useState)(""),w=Object(b.a)(N,2),S=w[0],E=w[1],C=Object(n.useState)(""),y=Object(b.a)(C,2),A=y[0],T=y[1],P=Object(n.useState)(!0),k=Object(b.a)(P,2),F=k[0],B=k[1],U=g.collection("jobs"),V=function(e,t,c,a,n){e.preventDefault(),""==n?z.b.error("Fields cannot be empty"):(g.collection("jobs").doc().set({jobtitle:t,totalopenings:c,jobstatus:a,entrylevel:n}).then((function(){return i()})).catch((function(e){console.log(e)})),z.b.success("Jobs added successfully"))},J=function(e){"jobtitle-create"===e.target.id?x(e.target.value):"totalopenings-create"===e.target.id?p(parseInt(e.target.value)):"jobstatus-create"===e.target.id?E(e.target.value):T(e.target.value)};Object(n.useEffect)((function(){g.collection("jobs").onSnapshot((function(e){var t=[];e.docs.map((function(e){var c=Object(a.jsx)("div",{className:"text-center h-4",children:Object(a.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return L(e.id)},children:"Delete"})});t.push(Object(_.a)(Object(_.a)({},e.data()),{},{id:e.id,view:c})),j([].concat(t)),B(!1)}))}))}),[]);var L=function(e){U.doc(e).delete(),z.b.warn("Job deleted successfully")};console.log(d);var M=[{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Job ID"})},accessor:"id",className:"font",width:250,show:!1,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-4",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Job Title"})},accessor:"jobtitle",className:"font",width:200,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-4",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Total Openings"})},accessor:"totalopenings",className:"font",width:200,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-6",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Job Status"})},accessor:"jobstatus",className:"px-4 py-3 text-sm",width:200,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-4",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Entry Level"})},accessor:"entrylevel",filterable:!1,width:200,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-4",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Action"})},accessor:"view",filterable:!1,width:200}];return F?Object(a.jsx)("span",{children:Object(a.jsx)(R.Ring,{color:"gray",size:100})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"d-flex bd-highlight",children:Object(a.jsx)("div",{className:"ml-auto p-2 bd-highlight addJobBtn",children:Object(a.jsx)(H.a,{className:"addJobBtn",variant:"primary",onClick:l,children:"Add job"})})}),Object(a.jsxs)(D.a,{show:c,onHide:i,children:[Object(a.jsx)(D.a.Header,{closeButton:!0,children:Object(a.jsx)(D.a.Title,{children:"New Job"})}),Object(a.jsx)(D.a.Body,{children:Object(a.jsxs)("form",{onSubmit:function(e){V(e,O,v,S,A)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"jobtitle-create",children:"Job Title"}),Object(a.jsx)("input",{onChange:J,className:"form-control",type:"text",id:"jobtitle-create",name:"jobtitle-create",placeholder:"Enter Job Title"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"totalopenings-create",children:"Total Openings"}),Object(a.jsx)("input",{onChange:J,className:"form-control",type:"number",id:"totalopenings-create",name:"totalopenings-create",placeholder:"Enter Total Openings"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"jobstatus-create",children:"Job Status"}),Object(a.jsx)("input",{onChange:J,className:"form-control",type:"text",id:"jobstatus-create",name:"jobstatus-create",placeholder:"Enter Status"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"entrylevel-create",children:"Entry Level"}),Object(a.jsx)("input",{onChange:J,className:"form-control",type:"text",id:"entrylevel-create",name:"entrylevel-create",placeholder:"Enter entry Level"})]}),Object(a.jsxs)("div",{className:"form-group text-center",children:[Object(a.jsx)(H.a,{variant:"secondary",onClick:i,children:"Close"})," \xa0",Object(a.jsx)("button",{className:"btn btn-success",type:"submit",children:"Create"})]})]})})]})]}),Object(a.jsx)("div",{className:"container text-center",children:Object(a.jsx)(I.a,{data:d,columns:M,className:"ReactTable",sortable:!0,defaultPageSize:5,resizable:!1,showPageSizeOptions:!1})}),Object(a.jsx)(z.a,{})]})},B=c(319),U=c(311),V=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(n.useContext)(u).currentUser,l=(null===i||void 0===i||i.email,[]),r=Object(n.useState)(!0),o=Object(b.a)(r,2),d=o[0],j=o[1];Object(n.useEffect)((function(){h()}),[]);var h=function(){g.collection("users").where("role","==","interviewer").get().then((function(e){var t=[];e.docs.forEach((function(e){var c={id:e.id,name:e.data().name,role:e.data().role};t.push(c)})),function(e){g.collection("candidates").get().then((function(t){var c=[];t.docs.forEach((function(t){var n={id:t.id,email:t.data().userEmail,candidateName:t.data().userEmail,openings:t.data().jobAssignTitle,assignedTo:t.data().interviewer,select:Object(a.jsx)("select",{onClick:function(e){return O(e,t.id)},children:0!==e.length&&e.map((function(e){return Object(a.jsx)("option",{id:"selectedValue",name:"selectedValue",value:e.name,selected:t.data().interviewer===e.name,children:e.name})}))})};l.push(t.data().interviewer),c.push(n)})),s(c),j(!1)}))}(t)}))},O=function(){var e=Object(m.a)(x.a.mark((function e(t,c){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.collection("candidates").doc(c).update({interviewer:t.target.value}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),z.b.success("Interviewer assigned successfully");case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),f=[{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Candidate Name"})},accessor:"candidateName",className:"font",width:200,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-4",children:e.value.split("@")[0]})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Candidate email"})},accessor:"email",className:"font",width:250,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-4",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Applied position"})},accessor:"openings",className:"font",width:200,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-6",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Assign To"})},accessor:"select",className:"font",width:200,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-6",children:e.value})}}];return d?Object(a.jsx)("span",{children:Object(a.jsx)(R.Ring,{color:"gray",size:100})}):Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)("div",{class:"d-inline-flex p-2 bd-highlight",children:Object(a.jsxs)(B.a,{className:"assignedCard",children:[Object(a.jsx)(B.a.Body,{children:Object(a.jsxs)("div",{class:"d-flex flex-row bd-highlight mb-3",children:[Object(a.jsx)("div",{class:"p-2 bd-highlight",children:Object(a.jsx)("div",{className:"icon-big text-center icon-warning",children:Object(a.jsx)(U.a,{size:70})})}),Object(a.jsxs)("div",{class:"p-2 bd-highlight",children:[Object(a.jsx)("p",{}),Object(a.jsx)(B.a.Title,{as:"h2",children:"2"})]})]})}),Object(a.jsx)(B.a.Footer,{children:Object(a.jsxs)("div",{className:"stats",children:[Object(a.jsx)("i",{className:"fas fa-redo mr-1"}),"Assigned candidates"]})})]})}),Object(a.jsxs)("div",{class:"d-inline-flex p-2 bd-highlight",children:[Object(a.jsx)(I.a,{data:c,columns:f,sortable:!0,defaultPageSize:5,className:"-striped -highlight assignCandidateReactTable",resizable:!1,showPageSizeOptions:!1}),Object(a.jsx)(z.a,{})]})]})},J=c(94),L=c(312),M=c(313),G=c(314),W=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=(t[0],t[1],Object(n.useState)([])),s=Object(b.a)(c,2),i=s[0],l=s[1],r=Object(n.useState)(""),o=Object(b.a)(r,2),d=(o[0],o[1],Object(n.useState)("")),j=Object(b.a)(d,2),h=(j[0],j[1]),O=p.currentUser,x=(Object(n.useContext)(u).currentUser,(null===O||void 0===O?void 0:O.email)||""),m=Object(n.useState)(0),f=Object(b.a)(m,2),v=f[0],N=f[1],w=Object(n.useState)(!0),S=Object(b.a)(w,2),E=S[0],C=S[1];Object(n.useEffect)((function(){A(),y()}),[]);var y=function(){g.collection("jobs").get().then((function(e){var t=[];e.docs.forEach((function(e){var c={id:e.id,jobAssignTitle:e.data().jobtitle,openings:e.data().totalopenings,status:e.data().jobstatus,level:e.data().entrylevel,appliedemails:e.data().appliedemails,apply:e.data().appliedemails===(null===O||void 0===O?void 0:O.email)?"Applied":Object(a.jsx)("button",{className:"btn btn-success",id:e.data().jobtitle,onClick:function(t){return T(t,x,e.data().jobtitle,e.id,e.data().totalopenings,e.data().appliedemails)},children:"Apply"})};N((function(t){return t+parseInt(e.data().totalopenings)})),t.push(c)})),l(t.filter((function(e){return e.openings>0}))),C(!1)}))};console.log(v);var A=function(){p.onAuthStateChanged((function(e){e&&g.collection("users").doc(e.uid).get().then((function(e){h(e.data().role)}))}))},T=function(e,t,c,a,n){e.preventDefault(),document.getElementById(c).disabled=!0,function(e,t,c){g.collection("jobs").doc(e).update({totalopenings:parseInt(t-1),appliedemails:c})}(a,n,t),g.collection("candidates").doc().set({userEmail:t,jobAssignTitle:c}).catch((function(e){console.log(e)})),z.b.success("Applied successfully")},P=[{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Job Title"})},accessor:"jobAssignTitle",className:"font",width:140,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-4",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Total Openings"})},accessor:"openings",className:"font",width:140,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-6",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Job Status"})},accessor:"status",className:"px-4 py-3 text-sm",width:140,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-4",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Entry Level"})},accessor:"level",filterable:!1,width:250,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-4",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Apply"})},accessor:"apply",filterable:!1,width:100}];return E?Object(a.jsx)("span",{children:Object(a.jsx)(R.Ring,{color:"gray",size:100})}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(L.a,{children:[Object(a.jsxs)(M.a,{children:[Object(a.jsxs)(B.a,{className:"card-statss",children:[Object(a.jsx)(B.a.Body,{children:Object(a.jsxs)(L.a,{children:[Object(a.jsx)(M.a,{xs:"5",children:Object(a.jsx)("div",{className:"icon-big text-center icon-warning",children:Object(a.jsx)(U.a,{size:70})})}),Object(a.jsx)(M.a,{xs:"7",children:Object(a.jsxs)("div",{className:"numbers",children:[Object(a.jsx)("p",{}),Object(a.jsx)(B.a.Title,{as:"h4",children:v})]})})]})}),Object(a.jsx)(B.a.Footer,{children:Object(a.jsxs)("div",{className:"stats",children:[Object(a.jsx)("i",{className:"fas fa-redo mr-1"}),"Total Job openings"]})})]}),Object(a.jsxs)(B.a,{className:"mt-4",children:[Object(a.jsx)(B.a.Body,{children:Object(a.jsxs)(L.a,{children:[Object(a.jsx)(M.a,{xs:"5",children:Object(a.jsx)("div",{className:"icon-big text-center icon-warning",children:Object(a.jsx)(G.a,{size:70})})}),Object(a.jsx)(M.a,{xs:"7",children:Object(a.jsxs)("div",{className:"numbers",children:[Object(a.jsx)("p",{}),Object(a.jsx)(B.a.Title,{as:"h4",children:"10K+"})]})})]})}),Object(a.jsx)(B.a.Footer,{children:Object(a.jsxs)("div",{className:"stats",children:[Object(a.jsx)("i",{className:"fas fa-redo mr-1"}),"Satisfied clients"]})})]})]}),Object(a.jsx)(M.a,{children:Object(a.jsx)(I.a,{data:i,columns:P,className:"candidateReactTable",sortable:!0,defaultPageSize:5,resizable:!1,showPageSizeOptions:!1})})]})}),Object(a.jsx)(z.a,{})]})},K=c(95),Y=(c(276),c(131)),Q=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],i=p.currentUser,l=null===i||void 0===i?void 0:i.email.split("@")[0],r=(null===l||void 0===l?void 0:l.charAt(0).toUpperCase())+(null===l||void 0===l?void 0:l.slice(1)),o=Object(n.useState)(!0),d=Object(b.a)(o,2),j=d[0],u=d[1],h=Object(n.useState)(""),O=Object(b.a)(h,2),x=O[0],m=O[1];Object(n.useEffect)((function(){v(),f()}),[]);var f=function(){g.collection("users").doc(null===i||void 0===i?void 0:i.uid).get().then((function(e){var t;console.log(e.data().role),m(null===(t=e.data())||void 0===t?void 0:t.role)}))},v=function(){g.collection("candidates").get().then((function(e){var t=[];e.docs.forEach((function(e){var c={id:e.id,interviewer:e.data().interviewer,title:e.data().jobAssignTitle,useremail:e.data().userEmail,candidatename:e.data().userEmail,status:e.data().status};t.push(c)})),null==i||"hrjack@awr.com"===(null===i||void 0===i?void 0:i.email)?s(t):s(t.filter((function(e){return e.useremail===(null===i||void 0===i?void 0:i.email)||e.interviewer==r}))),u(!1)}))};console.log(c);var N=c;console.log(c);var w=[{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Interviewer"})},accessor:"interviewer",className:"font",width:200,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-4",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Candidate Name"})},accessor:"candidatename",className:"font",width:200,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-6",children:e.value.split("@")[0]})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Candidate Email"})},accessor:"useremail",className:"font",width:230,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-6",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Position"})},accessor:"title",className:"font",width:200,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-6",children:e.value})}},{Header:function(){return Object(a.jsx)("div",{className:"text-center font-weight-bold",children:"Status"})},accessor:"status",className:"font",width:200,Cell:function(e){return Object(a.jsx)("div",{className:"text-center h-6",children:e.value})}}];return j?Object(a.jsx)("span",{children:Object(a.jsx)(R.Ring,{color:"gray",size:100})}):Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsxs)("div",{className:"d-flex flex-row-reverse bd-highlight allExportButton",children:[Object(a.jsx)("div",{className:"p-2 bd-highlight mr-5",children:"hr"===x?Object(a.jsx)("button",{className:"btn btn-info exportPDFBtn",onClick:function(){return function(){var e=new K.default("portrait","pt","A4");e.setFontSize(15);var t={startY:50,head:[["CANDIDATE NAME","CANDIDATE EMAIL","APPLIED POSITION","ASSIGNED INTERVIEWER","STATUS"]],body:c.map((function(e){return[e.candidatename.split("@")[0],e.useremail,e.title,e.interviewer,e.status]}))};e.text("Canidate Status",40,40),e.autoTable(t),e.save("report.pdf")}()},children:"Generate Report"}):""}),Object(a.jsx)("div",{className:"p-2 bd-highlight",children:"hr"===x?Object(a.jsx)("button",{className:"btn btn-info exportCSVBtn",children:Object(a.jsx)(Y.CSVLink,{data:N,headers:[{label:"CANDIDATE NAME",key:"candidatename"},{label:"CANDIDATE EMAIL",key:"useremail"},{label:"APPLIED POSITION",key:"title"},{label:"ASSIGNED INTERVIEWER",key:"interviewer"},{label:"STATUS",key:"status"}],style:{color:"white"},children:"Generate CSV"})}):""})]}),Object(a.jsx)("div",{className:"d-flex bd-highlight",children:Object(a.jsx)("div",{class:"d-inline-flex p-2 bd-highlight",children:Object(a.jsx)(I.a,{data:c,columns:w,className:"statusCandidateReactTable",sortable:!0,defaultPageSize:5,resizable:!1,showPageSizeOptions:!1})})})]})},Z=(c(280),c(98)),q=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),l=Object(b.a)(i,2),r=l[0],o=l[1],d=Object(n.useState)([]),j=Object(b.a)(d,2),u=(j[0],j[1],Object(n.useState)([])),h=Object(b.a)(u,2),O=(h[0],h[1],Object(n.useState)(!1)),f=Object(b.a)(O,2),v=(f[0],f[1],Object(n.useState)(0)),N=Object(b.a)(v,2),w=N[0],S=N[1],E=Object(n.useState)(!0),C=Object(b.a)(E,2),y=C[0],A=C[1];Object(n.useEffect)((function(){T()}),[]);var T=function(){var e=Object(m.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.collection("jobs").get().then((function(e){e.docs.forEach((function(e){var t=e.data();t.jobtitle;s((function(e){return[].concat(Object(Z.a)(e),[t.jobtitle])}));t.totalopenings;o((function(e){return[].concat(Object(Z.a)(e),[t.totalopenings])})),S((function(e){return e+parseInt(t.totalopenings)})),A(!1)}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P={labels:c,datasets:[{data:r,backgroundColor:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b"],hoverBackgroundColor:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b"]}]},I=p.currentUser;I&&"".concat(I.email," ,Welcome back");return y?Object(a.jsx)("span",{children:Object(a.jsx)(R.Ring,{color:"gray",size:100})}):Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)("div",{className:"d-inline-flex p-2 bd-highlight jobsPieChart",children:Object(a.jsx)(J.Pie,{data:P,options:{responsive:!0,maintainAspectRatio:!0}})}),Object(a.jsx)("div",{className:"d-inline-flex p-2 bd-highlight",children:Object(a.jsxs)(B.a,{className:"totalJobDashboardCard",children:[Object(a.jsx)(B.a.Body,{children:Object(a.jsxs)("div",{className:"d-flex flex-row bd-highlight mb-3",children:[Object(a.jsx)("div",{className:"p-2 bd-highlight",children:Object(a.jsx)("div",{className:"icon-big text-center icon-warning",children:Object(a.jsx)(U.a,{size:70})})}),Object(a.jsxs)("div",{className:"p-2 bd-highlight",children:[Object(a.jsx)("p",{}),Object(a.jsx)(B.a.Title,{as:"h2",children:w})]})]})}),Object(a.jsx)(B.a.Footer,{children:Object(a.jsxs)("div",{className:"stats",children:[Object(a.jsx)("i",{className:"fas fa-redo mr-1"}),"Total Job openings"]})})]})}),Object(a.jsx)("div",{className:"d-inline-flex p-2 bd-highlight dashboardCard",children:Object(a.jsxs)(B.a,{className:"totalJobDashboardCard",children:[Object(a.jsx)(B.a.Body,{children:Object(a.jsxs)("div",{className:"d-flex flex-row bd-highlight mb-3",children:[Object(a.jsx)("div",{className:"p-2 bd-highlight",children:Object(a.jsx)("div",{className:"icon-big text-center icon-warning",children:Object(a.jsx)(U.a,{size:70})})}),Object(a.jsxs)("div",{className:"p-2 bd-highlight",children:[Object(a.jsx)("p",{}),Object(a.jsx)(B.a.Title,{as:"h2",children:"2"})]})]})}),Object(a.jsx)(B.a.Footer,{children:Object(a.jsxs)("div",{className:"stats",children:[Object(a.jsx)("i",{className:"fas fa-redo mr-1"}),"Assigned candidates"]})})]})})]})},X=function(){var e,t,c=Object(n.useState)({}),s=Object(b.a)(c,2),i=s[0],l=s[1],r=Object(n.useState)([]),o=Object(b.a)(r,2),d=o[0],j=o[1],u=Object(n.useState)([]),h=Object(b.a)(u,2),O=h[0],x=h[1],m=Object(n.useState)([]),f=Object(b.a)(m,2),v=f[0],N=f[1],w=Object(n.useState)([]),E=Object(b.a)(w,2),C=E[0],y=E[1],A=Object(n.useState)(!0),T=Object(b.a)(A,2),P=T[0],I=T[1];Object(n.useEffect)((function(){z()}),[]);var z=function(){var e,t;null===(e=p.currentUser)||void 0===e||e.uid;p.onAuthStateChanged((function(e){e?g.collection("users").doc(e.uid).get().then((function(e){t=e.data(),l(Object(_.a)({},t)),I(!1)})):console.log("else")}))},k=function(e){"name-edit"===e.target.id?j(e.target.value):"phone-edit"===e.target.id?x(e.target.value):"designation-edit"===e.target.id?N(e.target.value):"orgaization-edit"===e.target.id&&y(e.target.value)};return P?Object(a.jsx)("span",{children:Object(a.jsx)(R.Ring,{color:"gray",size:100})}):Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"d-flex bd-highlight",children:[Object(a.jsx)("div",{class:"p-2 flex-grow-1 bd-highlight p-3",children:Object(a.jsxs)(B.a,{children:[Object(a.jsx)(B.a.Header,{children:"Update Profile"}),Object(a.jsx)(B.a.Body,{children:Object(a.jsxs)("form",{className:"form-horizontal",onSubmit:function(e){!function(e,t,c,a,n){var s;e.preventDefault(),""==n?alert("Field values required"):g.collection("users").doc(null===(s=p.currentUser)||void 0===s?void 0:s.uid).update({name:t,phone:c,designation:a,organization:n}).then((function(){return alert("Profile updated")})).catch((function(e){alert(e)}))}(e,d,O,v,C)},children:[Object(a.jsxs)("div",{className:"mb-3 d-flex",children:[Object(a.jsx)("label",{htmlFor:"name-edit",className:"col-sm-3 col-form-label",children:"Name: "}),Object(a.jsx)("div",{className:"col-sm-9",children:Object(a.jsx)("input",{onChange:k,className:"form-control",type:"text",id:"name-edit",name:"name-edit",placeholder:"Enter your name",defaultValue:i.name})})]}),Object(a.jsxs)("div",{className:"mb-3 d-flex",children:[Object(a.jsx)("label",{htmlFor:"email-edit",className:"col-sm-3 col-form-label",children:"Email: "}),Object(a.jsx)("div",{className:"col-sm-9",children:Object(a.jsx)("input",{className:"form-control",type:"email",id:"email-edit",name:"email-edit",placeholder:"Enter your email",defaultValue:null===(e=p.currentUser)||void 0===e?void 0:e.email,readOnly:!0})})]}),Object(a.jsxs)("div",{className:"mb-3 d-flex",children:[Object(a.jsx)("label",{htmlFor:"phone-edit",className:"col-sm-3 col-form-label",children:"Phone: "}),Object(a.jsx)("div",{className:"col-sm-9",children:Object(a.jsx)("input",{onChange:k,className:"form-control",type:"text",id:"phone-edit",name:"phone-edit",placeholder:"Enter phone number",defaultValue:i.phone})})]}),Object(a.jsxs)("div",{className:"mb-3 d-flex",children:[Object(a.jsx)("label",{htmlFor:"designation-edit",className:"col-sm-3 col-form-label",children:"Designation: "}),Object(a.jsx)("div",{className:"col-sm-9",children:Object(a.jsx)("input",{onChange:k,className:"form-control",type:"text",id:"designation-edit",name:"designation-edit",placeholder:"Enter desigation",defaultValue:i.designation})})]}),Object(a.jsxs)("div",{className:"mb-3 d-flex",children:[Object(a.jsx)("label",{htmlFor:"organization-edit",className:"col-sm-3 col-form-label",children:"Organization: "}),Object(a.jsx)("div",{className:"col-sm-9",children:Object(a.jsx)("input",{onChange:k,className:"form-control",type:"text",id:"orgaization-edit",name:"organization-edit",placeholder:"Enter organization",defaultValue:i.organization})})]}),Object(a.jsx)("div",{className:"form-group text-center float-right",children:Object(a.jsx)("button",{className:"btn btn-success",type:"submit",children:"Update"})})]})})]})}),Object(a.jsx)("div",{class:"p-2 bd-highlight w-25 p-3",children:Object(a.jsxs)(B.a,{children:[Object(a.jsx)(B.a.Header,{children:"Profile"}),Object(a.jsxs)(B.a.Body,{children:[Object(a.jsx)(S.a,{size:"50px",className:"col-md-12"}),Object(a.jsx)(B.a.Text,{className:"text-center mt-3",children:Object(a.jsx)("strong",{children:i.name})}),Object(a.jsx)(B.a.Text,{className:"text-center",children:null===(t=p.currentUser)||void 0===t?void 0:t.email}),Object(a.jsx)(B.a.Text,{className:"text-center",children:i.designation}),Object(a.jsx)(B.a.Text,{className:"text-center",children:i.organization})]})]})})]})})};c(301);var $=function(e){var t=Object(n.useContext)(u),c=t.currentUser,s=t.setCurrentUser;return Object(r.f)(),Object(n.useEffect)((function(){p.onAuthStateChanged((function(e){g.collection("users").doc(e.uid).get().then((function(e){s({email:e.data().email,name:e.data().name,userRole:e.data().role})}))}))}),[]),console.log(c),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(o.a,{children:Object(a.jsxs)(h,{children:[Object(a.jsx)(C,{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(r.b,{exact:!0,path:"/",component:A}),Object(a.jsx)(r.b,{exact:!0,path:"/dashboard",render:function(){return"hr"===(null===c||void 0===c?void 0:c.userRole)?Object(a.jsx)(q,{}):Object(a.jsx)(r.a,{to:"/profile"})}}),Object(a.jsx)(r.b,{exact:!0,path:"/signup",component:T}),Object(a.jsx)(r.b,{exact:!0,path:"/admin",component:P}),Object(a.jsx)(r.b,{exact:!0,path:"/recruiter",render:function(){return"hr"===(null===c||void 0===c?void 0:c.userRole)?Object(a.jsx)(F,{}):Object(a.jsx)(r.a,{to:"/profile"})}}),Object(a.jsx)(r.b,{exact:!0,path:"/interviewer",render:function(){return null===c||void 0===c||c.userRole,Object(a.jsx)(k,{})}}),Object(a.jsx)(r.b,{exact:!0,path:"/candidates",render:function(){return null===c||void 0===c||c.userRole,Object(a.jsx)(W,{})}}),Object(a.jsx)(r.b,{exact:!0,path:"/candidatestatus",render:function(){return null===c||void 0===c||c.userRole,Object(a.jsx)(Q,{})}}),Object(a.jsx)(r.b,{exact:!0,path:"/assigncandidates",render:function(){return"hr"===(null===c||void 0===c?void 0:c.userRole)?Object(a.jsx)(V,{}):Object(a.jsx)(r.a,{to:"/profile"})}}),Object(a.jsx)(r.b,{exact:!0,path:"/profile",component:X}),Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)(y,{})})]})})})};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(h,{children:Object(a.jsx)($,{})})}),document.getElementById("root"))}},[[302,1,3]]]);
//# sourceMappingURL=main.95f9712a.chunk.js.map