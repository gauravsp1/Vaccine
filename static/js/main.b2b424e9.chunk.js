(this.webpackJsonpvaccine=this.webpackJsonpvaccine||[]).push([[0],{99:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(10),o=a.n(c),i=a(39),r=a(20),l=a(59),s=a(143),b=a(133),j=a(145),d=a(139),h=a(137),u=a(138),m=a(144),O=a(140),p=a(45),x=a.n(p),f=a(4),g=Object(b.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"30ch"}}}}));var v=function(){var e=g(),t=Object(n.useState)({pincode:"",email:"",age18:!1,age45:!1,action:""}),a=Object(l.a)(t,2),c=a[0],o=a[1];function b(e){var t=e.target,a=t.name,n=t.value;o((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(i.a)({},a,n))}))}return Object(n.useEffect)((function(){("disable"===c.action||"enable"===c.action)&&(x.a.post("https://4ay2n09npl.execute-api.ap-south-1.amazonaws.com/develop",c).then((function(e){console.log(e.data),alert(e.data.body)})).catch((function(e){console.log(e)})),o({pincode:"",email:"",age18:!1,age45:!1,action:""}))}),[c.action]),Object(f.jsxs)("div",{className:"DetailForm",children:[Object(f.jsx)("h2",{children:"Details"}),Object(f.jsxs)("form",{className:e.root,Validate:!0,autoComplete:"on",children:[Object(f.jsxs)("div",{className:"Container",children:[Object(f.jsx)(s.a,{id:"Mail",label:"E-Mail",name:"email",value:c.email,onChange:function(e){b(e)}}),Object(f.jsx)(s.a,{id:"Pincode",label:"Pincode",name:"pincode",value:c.pincode,onChange:function(e){b(e)}})]}),Object(f.jsx)("div",{className:"Agegroups",children:Object(f.jsxs)(j.a,{component:"fieldset",className:e.formControl,children:[Object(f.jsx)(h.a,{component:"legend",children:"Age Group"}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)(d.a,{control:Object(f.jsx)(m.a,{checked:c.age18,onChange:function(){o((function(e){return Object(r.a)(Object(r.a)({},e),{},{age18:!c.age18})}))},name:"age18"}),label:"18 to 44"}),Object(f.jsx)(d.a,{control:Object(f.jsx)(m.a,{checked:c.age45,onChange:function(){o((function(e){return Object(r.a)(Object(r.a)({},e),{},{age45:!c.age45})}))},name:"age45"}),label:"45+"})]})]})}),Object(f.jsx)(O.a,{id:"Start",onClick:function(){""===c.pincode||c.pincode.length<6?alert("Enter 6 digit Pincode"):""===c.email?alert("Enter Email"):o((function(e){return Object(r.a)(Object(r.a)({},e),{},{action:"enable"})}))},className:"Submit",variant:"contained",color:"primary",children:"Start"}),Object(f.jsx)(O.a,{id:"Stop",onClick:function(){""===c.email?alert("Enter Email"):o((function(e){return Object(r.a)(Object(r.a)({},e),{},{action:"disable"})}))},className:"Submit",variant:"contained",color:"primary",children:"Stop"})]})]})};var S=function(){return Object(f.jsxs)("div",{className:"About",children:[Object(f.jsx)("h1",{children:"Our Story"}),Object(f.jsx)("p",{children:"We developed this service to free you from keeping an eye on the official website for vaccine slot availability."}),Object(f.jsx)("p",{children:"You can enable an email notification service for vaccine availability in your area. This is our small contribution to society."}),Object(f.jsx)("p",{children:"Hope you will find it useful !!!"}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:Object(f.jsx)("b",{children:"Developers:-"})}),Object(f.jsxs)("p",{children:[Object(f.jsx)("a",{href:"http://www.linkedin.com/in/shubham-mhatre-92b533113",target:"_blank",children:"Shubham Mhatre"})," "]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("a",{href:"http://www.linkedin.com/in/gaurav-pawar-20ba691bb",target:"_blank",children:"Gaurav Pawar"})," "]})]})},w=a(141),k=a(142),y=a(101),C=a(34),N=a(5),H=Object(N.a)({root:{boxShadow:"none",textTransform:"none",fontSize:16,left:750,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"#0063cc",borderColor:"#0063cc",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"#0062cc"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})(O.a),E=Object(b.a)((function(e){return{margin:{margin:e.spacing(1)}}}));var A=function(){var e=E();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(w.a,{children:Object(f.jsxs)(k.a,{className:"nav-container",children:[Object(f.jsx)(y.a,{variant:"h6",className:e.title,children:"Vaccine-Notifier"}),Object(f.jsx)(H,{id:"Home",variant:"contained",color:"inherit",component:C.b,to:"/HowItWorks",disableRipple:!0,className:e.margin,children:"How it works?"}),Object(f.jsx)(H,{id:"Home",variant:"contained",color:"inherit",component:C.b,to:"/About",disableRipple:!0,className:e.margin,children:"About"}),Object(f.jsx)(H,{id:"Home",variant:"contained",color:"inherit",component:C.b,to:"/Vaccine",disableRipple:!0,className:e.margin,children:"Home"})]})})})},I=a(9);var F=function(){return Object(f.jsxs)("div",{className:"HowItWorks",children:[Object(f.jsx)("h1",{children:"How It Works?"}),Object(f.jsxs)("p",{children:["1. ",Object(f.jsx)("b",{children:"To Start the Service"})," fill all the required fields and click on ",Object(f.jsx)("b",{children:"Start"})," button."]}),Object(f.jsxs)("p",{children:["2.",Object(f.jsx)("b",{children:"To Stop the Service"})," just enter email field and click on ",Object(f.jsx)("b",{children:"Stop"})," button."]})]})};var M=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(A,{}),Object(f.jsxs)(I.c,{children:[Object(f.jsx)(I.a,{exact:!0,path:"/Vaccine",component:v}),Object(f.jsx)(I.a,{exact:!0,path:"/About",component:S}),Object(f.jsx)(I.a,{exact:!0,path:"/HowItWorks",component:F})]})]})};o.a.render(Object(f.jsx)(C.a,{children:Object(f.jsx)(M,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.b2b424e9.chunk.js.map