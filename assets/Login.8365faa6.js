import{_ as p,r as d,u as m,o as v,c as f,a as e,f as c,v as r,b as g,p as h,g as x,h as I}from"./index.5edfbb78.js";import{_ as w}from"./logo.eb5bb1d7.js";const a=s=>(h("data-v-2c1cd01c"),s=s(),x(),s),b={id:"login"},y={class:"login-form"},B=a(()=>e("div",{class:"title flex"},[I(" Bienvenido administrador "),e("img",{class:"logo-form",src:w})],-1)),E=a(()=>e("div",{class:"form-text"}," Ingresa tu cuenta de administrador para poder ingresar. ",-1)),V={class:"field"},k=a(()=>e("label",{for:"name"},"Email",-1)),C={class:"field"},L=a(()=>e("label",{for:"password"},"Contrase\xF1a",-1)),S={__name:"Login",setup(s){const n=d(""),i=d(""),u=m(),_=()=>{g.signInWithEmailAndPassword(n.value,i.value).then(o=>{u.push({name:"admin"})}).catch(o=>{console.log(o.code),alert(o.message)})};return(o,t)=>(v(),f("div",b,[e("div",y,[B,E,e("div",V,[k,c(e("input",{id:"email",type:"text",class:"outline-none",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=l=>n.value=l),required:"true",autofocus:""},null,512),[[r,n.value]])]),e("div",C,[L,c(e("input",{id:"password",type:"password",class:"outline-none",placeholder:"Contrase\xF1a","onUpdate:modelValue":t[1]||(t[1]=l=>i.value=l),required:"true",autofocus:""},null,512),[[r,i.value]])]),e("div",{class:"flex justify-content-end"},[e("button",{class:"boton-mail select-none cursor-pointer",onClick:_},"Ingresar")])])]))}},T=p(S,[["__scopeId","data-v-2c1cd01c"]]);export{T as default};