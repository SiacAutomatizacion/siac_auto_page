import{_ as p,r as d,u as m,o as v,c as f,b as e,w as r,v as c,q as g,p as h,a as x,g as b}from"./index.9e74e9ab.js";import{_ as w}from"./logo.eb5bb1d7.js";const a=s=>(h("data-v-07e2b360"),s=s(),x(),s),I={id:"login"},y={class:"login-form"},B=a(()=>e("div",{class:"title flex"},[b(" Bienvenido administrador "),e("img",{class:"logo-form",src:w})],-1)),E=a(()=>e("div",{class:"form-text"}," Ingresa tu cuenta de administrador para poder ingresar. ",-1)),V={class:"field"},k=a(()=>e("label",{for:"name"},"Email",-1)),q={class:"field"},C=a(()=>e("label",{for:"password"},"Contrase\xF1a",-1)),L={__name:"Login",setup(s){const n=d(""),i=d(""),u=m(),_=()=>{g.signInWithEmailAndPassword(n.value,i.value).then(o=>{u.push("/sa_admin")}).catch(o=>{console.log(o.code),alert(o.message)})};return(o,t)=>(v(),f("div",I,[e("div",y,[B,E,e("div",V,[k,r(e("input",{id:"email",type:"text",class:"outline-none",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=l=>n.value=l),required:"true",autofocus:""},null,512),[[c,n.value]])]),e("div",q,[C,r(e("input",{id:"password",type:"password",class:"outline-none",placeholder:"Contrase\xF1a","onUpdate:modelValue":t[1]||(t[1]=l=>i.value=l),required:"true",autofocus:""},null,512),[[c,i.value]])]),e("div",{class:"flex justify-content-end"},[e("button",{class:"boton-mail select-none cursor-pointer",onClick:_},"Ingresar")])])]))}},T=p(L,[["__scopeId","data-v-07e2b360"]]);export{T as default};