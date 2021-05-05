(this.webpackJsonpvaccine=this.webpackJsonpvaccine||[]).push([[0],{99:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(10),o=n.n(c),i=n(39),r=n(20),l=n(59),s=n(143),b=n(133),j=n(145),d=n(139),h=n(137),m=n(138),u=n(144),O=n(140),p=n(45),x=n.n(p),f=n(3),g=Object(b.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"30ch"}}}}));var v=function(){var e=g(),t=Object(a.useState)({pincode:"",email:"",age18:!1,age45:!1,action:""}),n=Object(l.a)(t,2),c=n[0],o=n[1];function b(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(i.a)({},n,a))}))}return Object(a.useEffect)((function(){("disable"===c.action||"enable"===c.action)&&(x.a.post("https://4ay2n09npl.execute-api.ap-south-1.amazonaws.com/develop",c).then((function(e){console.log(e.data),alert(e.data.body)})).catch((function(e){console.log(e)})),o({pincode:"",email:"",age18:!1,age45:!1,action:""}))}),[c.action]),Object(f.jsxs)("div",{className:"DetailForm",children:[Object(f.jsx)("h3",{children:"Get notified by E-mail whenever slots are open"}),Object(f.jsx)("h2",{children:"Details"}),Object(f.jsxs)("form",{className:e.root,Validate:!0,autoComplete:"on",children:[Object(f.jsxs)("div",{className:"Container",children:[Object(f.jsx)(s.a,{id:"Mail",label:"E-Mail",name:"email",value:c.email,onChange:function(e){b(e)}}),Object(f.jsx)(s.a,{id:"Pincode",label:"Vaccination Centre Pincode",name:"pincode",value:c.pincode,onChange:function(e){b(e)}})]}),Object(f.jsx)("div",{className:"Agegroups",children:Object(f.jsxs)(j.a,{component:"fieldset",className:e.formControl,children:[Object(f.jsx)(h.a,{component:"legend",children:"Age Group"}),Object(f.jsxs)(m.a,{children:[Object(f.jsx)(d.a,{control:Object(f.jsx)(u.a,{checked:c.age18,onChange:function(){o((function(e){return Object(r.a)(Object(r.a)({},e),{},{age18:!c.age18})}))},name:"age18"}),label:"18 to 44"}),Object(f.jsx)(d.a,{control:Object(f.jsx)(u.a,{checked:c.age45,onChange:function(){o((function(e){return Object(r.a)(Object(r.a)({},e),{},{age45:!c.age45})}))},name:"age45"}),label:"45+"})]})]})}),Object(f.jsx)(O.a,{id:"Start",onClick:function(){""===c.pincode||c.pincode.length<6?alert("Enter 6 digit Pincode"):""===c.email?alert("Enter Email"):o((function(e){return Object(r.a)(Object(r.a)({},e),{},{action:"enable"})}))},className:"Submit",variant:"contained",color:"primary",children:"Start"}),Object(f.jsx)(O.a,{id:"Stop",onClick:function(){""===c.email?alert("Enter Email"):o((function(e){return Object(r.a)(Object(r.a)({},e),{},{action:"disable"})}))},className:"Submit",variant:"contained",color:"primary",children:"Stop"})]}),Object(f.jsx)("a",{href:"https://www.cowin.gov.in/home",target:"_blank",children:"Go to Cowin"}),Object(f.jsx)("h4",{children:"PS: Your data  will not be shared or sold to anyone"})]})};var w=function(){return Object(f.jsxs)("div",{className:"About",children:[Object(f.jsx)("h1",{children:"Our Story"}),Object(f.jsx)("p",{children:"We developed this service to free you from keeping an eye on the official website for vaccine slot availability."}),Object(f.jsx)("p",{children:"You can enable an email notification service for vaccine availability in your area. This is our small contribution to society."}),Object(f.jsx)("p",{children:"Hope you will find it useful !!!"}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:Object(f.jsx)("b",{children:"Developers:-"})}),Object(f.jsxs)("p",{children:[Object(f.jsx)("a",{href:"http://www.linkedin.com/in/shubham-mhatre-92b533113",target:"_blank",children:"Shubham Mhatre"})," "]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("a",{href:"http://www.linkedin.com/in/gaurav-pawar-20ba691bb",target:"_blank",children:"Gaurav Pawar"})," "]})]})},S=n(141),k=n(142),y=n(101),C=n(34),N=n(5),H=Object(N.a)({root:{boxShadow:"none",textTransform:"none",fontSize:16,left:750,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"#0063cc",borderColor:"#0063cc",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"#0062cc"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})(O.a),E=Object(b.a)((function(e){return{margin:{margin:e.spacing(1)}}}));var A=function(){var e=E();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(S.a,{children:Object(f.jsxs)(k.a,{className:"nav-container",children:[Object(f.jsx)(y.a,{variant:"h6",className:e.title,children:"Vaccine-Notifier"}),Object(f.jsx)(H,{id:"Home",variant:"contained",color:"inherit",component:C.b,to:"/Vaccine",disableRipple:!0,className:e.margin,children:"Home"}),Object(f.jsx)(H,{id:"Home",variant:"contained",color:"inherit",component:C.b,to:"/HowItWorks",disableRipple:!0,className:e.margin,children:"How it works?"}),Object(f.jsx)(H,{id:"Home",variant:"contained",color:"inherit",component:C.b,to:"/About",disableRipple:!0,className:e.margin,children:"About"})]})})})},I=n(9);var F=function(){return Object(f.jsxs)("div",{className:"HowItWorks",children:[Object(f.jsx)("h1",{children:"How It Works?"}),Object(f.jsxs)("p",{children:["1. ",Object(f.jsx)("b",{children:"To Start the Service"})," fill all the required fields and click on ",Object(f.jsx)("b",{children:"Start"})," button."]}),Object(f.jsxs)("p",{children:["2. ",Object(f.jsx)("b",{children:"To Update the Service"})," keeping the same mail-id add the required pincode and click on ",Object(f.jsx)("b",{children:"Start"})," button."]}),Object(f.jsxs)("p",{children:["3. ",Object(f.jsx)("b",{children:"To Stop the Service"})," just enter email field and click on ",Object(f.jsx)("b",{children:"Stop"})," button."]})]})};var T=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(A,{}),Object(f.jsxs)(I.c,{children:[Object(f.jsx)(I.a,{exact:!0,path:"/Vaccine",component:v}),Object(f.jsx)(I.a,{exact:!0,path:"/About",component:w}),Object(f.jsx)(I.a,{exact:!0,path:"/HowItWorks",component:F})]})]})};o.a.render(Object(f.jsx)(C.a,{children:Object(f.jsx)(T,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.56a73798.chunk.js.map