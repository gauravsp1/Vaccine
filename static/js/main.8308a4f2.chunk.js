(this.webpackJsonpvaccine=this.webpackJsonpvaccine||[]).push([[0],{99:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(10),o=c.n(a),i=c(39),r=c(20),l=c(59),s=c(143),j=c(133),b=c(145),d=c(139),h=c(137),u=c(138),m=c(144),O=c(140),p=c(45),x=c.n(p),g=c(4),f=Object(j.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"30ch"}}}}));var v=function(){var e=f(),t=Object(n.useState)({pincode:"",email:"",age18:!1,age45:!1,action:""}),c=Object(l.a)(t,2),a=c[0],o=c[1];function j(e){var t=e.target,c=t.name,n=t.value;o((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(i.a)({},c,n))}))}return Object(n.useEffect)((function(){("disable"===a.action||"enable"===a.action)&&(x.a.post("https://4ay2n09npl.execute-api.ap-south-1.amazonaws.com/develop",a).then((function(e){console.log(e.data),alert(e.data.body)})).catch((function(e){console.log(e)})),o({pincode:"",email:"",age18:!1,age45:!1,action:""}))}),[a.action]),Object(g.jsxs)("div",{className:"DetailForm",children:[Object(g.jsx)("h2",{children:"Details"}),Object(g.jsxs)("form",{className:e.root,Validate:!0,autoComplete:"on",children:[Object(g.jsxs)("div",{className:"Container",children:[Object(g.jsx)(s.a,{id:"Mail",label:"E-Mail",name:"email",value:a.email,onChange:function(e){j(e)}}),Object(g.jsx)(s.a,{id:"Pincode",label:"Pincode",name:"pincode",value:a.pincode,onChange:function(e){j(e)}})]}),Object(g.jsx)("div",{className:"Agegroups",children:Object(g.jsxs)(b.a,{component:"fieldset",className:e.formControl,children:[Object(g.jsx)(h.a,{component:"legend",children:"Age Group"}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(d.a,{control:Object(g.jsx)(m.a,{checked:a.age18,onChange:function(){o((function(e){return Object(r.a)(Object(r.a)({},e),{},{age18:!a.age18})}))},name:"age18"}),label:"18 to 44"}),Object(g.jsx)(d.a,{control:Object(g.jsx)(m.a,{checked:a.age45,onChange:function(){o((function(e){return Object(r.a)(Object(r.a)({},e),{},{age45:!a.age45})}))},name:"age45"}),label:"45+"})]})]})}),Object(g.jsx)(O.a,{id:"Start",onClick:function(){""===a.pincode||a.pincode.length<6?alert("Enter 6 digit Pincode"):""===a.email?alert("Enter Email"):o((function(e){return Object(r.a)(Object(r.a)({},e),{},{action:"enable"})}))},className:"Submit",variant:"contained",color:"primary",children:"Start"}),Object(g.jsx)(O.a,{id:"Stop",onClick:function(){""===a.email?alert("Enter Email"):o((function(e){return Object(r.a)(Object(r.a)({},e),{},{action:"disable"})}))},className:"Submit",variant:"contained",color:"primary",children:"Stop"})]})]})};var S=function(){return Object(g.jsxs)("div",{className:"About",children:[Object(g.jsx)("h1",{children:"Our Story"}),Object(g.jsx)("p",{children:"Here we have tried to develop a site to free you from constant checking for vaccine slot availability."}),Object(g.jsx)("p",{children:"This is our small contribution towards society."}),Object(g.jsx)("p",{children:"Hope you will find it useful !!!"}),Object(g.jsx)("br",{}),Object(g.jsx)("p",{children:Object(g.jsx)("b",{children:"Developer Team:-"})}),Object(g.jsx)("p",{children:"Shubham Mhatre"}),Object(g.jsx)("p",{children:"Gaurav Pawar"})]})},k=c(141),w=c(142),C=c(101),N=c(34),y=c(5),E=Object(y.a)({root:{boxShadow:"none",textTransform:"none",fontSize:16,left:750,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"#0063cc",borderColor:"#0063cc",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"#0062cc"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})(O.a),H=Object(j.a)((function(e){return{margin:{margin:e.spacing(1)}}}));var A=function(){var e=H();return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(k.a,{children:Object(g.jsxs)(w.a,{className:"nav-container",children:[Object(g.jsx)(C.a,{variant:"h6",className:e.title,children:"Vaccine-Notifier"}),Object(g.jsx)(E,{variant:"contained",color:"inherit",component:N.b,to:"/HowItWorks",disableRipple:!0,className:e.margin,children:"How it works?"}),Object(g.jsx)(E,{variant:"contained",color:"inherit",component:N.b,to:"/About",disableRipple:!0,className:e.margin,children:"About"}),Object(g.jsx)(E,{variant:"contained",color:"inherit",component:N.b,to:"/",disableRipple:!0,className:e.margin,children:"Home"})]})})})},I=c(9);var F=function(){return Object(g.jsxs)("div",{className:"HowItWorks",children:[Object(g.jsx)("h1",{children:"How It Works?"}),Object(g.jsxs)("p",{children:["1. ",Object(g.jsx)("b",{children:"To Start the Service"})," fill all the required fields and click on ",Object(g.jsx)("b",{children:"Start"})," button."]}),Object(g.jsxs)("p",{children:["2.",Object(g.jsx)("b",{children:"To Stop the Service"})," just enter email field and click on ",Object(g.jsx)("b",{children:"Stop"})," button."]})]})};var T=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(A,{}),Object(g.jsxs)(I.c,{children:[Object(g.jsx)(I.a,{exact:!0,path:"/",component:v}),Object(g.jsx)(I.a,{exact:!0,path:"/About",component:S}),Object(g.jsx)(I.a,{exact:!0,path:"/HowItWorks",component:F})]})]})};o.a.render(Object(g.jsx)(N.a,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.8308a4f2.chunk.js.map