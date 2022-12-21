import{_ as R}from"./logo.eb5bb1d7.js";import{_ as I,r as _,o as d,c as r,a as e,b as E,w as z,d as u,e as N,v as T,t as w,p as S,f as j,g as $,h as M,i as A,I as P,j as U,k as y,F as C,l as V,m as F,n as G,q as H}from"./index.d834846b.js";const Y={id:"navbar",class:"fixed shadow-5 flex align-content-center"},Z={__name:"NavBar",emits:["logo_home"],setup(i,{emit:f}){return _(!1),(s,t)=>(d(),r("div",Y,[e("img",{onClick:t[0]||(t[0]=o=>f("logo_home")),class:"logo cursor-pointer",src:R,alt:"Logo"})]))}},J=I(Z,[["__scopeId","data-v-af1f8801"]]);const k=i=>(S("data-v-930f7166"),i=i(),j(),i),K={id:"formulario"},Q={class:"form-container"},W=k(()=>e("div",{class:"form-malla"},null,-1)),X=k(()=>e("div",{class:"gradient"},null,-1)),ee=k(()=>e("div",{class:"title flex"},null,-1)),te=k(()=>e("div",{class:"form-text"},[$(" Escribenos tu informaci\xF3n de contacto y "),e("br"),$("responderemos a la brevedad. ")],-1)),oe={class:"field"},se=k(()=>e("label",{for:"name"},"Nombre",-1)),ne={class:"field"},le=k(()=>e("label",{for:"email"},"Correo",-1)),ae={class:"field"},ie=k(()=>e("label",{for:"phone"},"Tel\xE9fono",-1)),ce={class:"field"},de=k(()=>e("label",{for:"message"},"Mensaje",-1)),re={class:"select-none",style:{color:"red","margin-bottom":"2%"}},ue=k(()=>e("div",{class:"flex justify-content-end"},[e("input",{class:"boton-mail select-none cursor-pointer",type:"submit",value:"Enviar correo"})],-1)),_e={__name:"Formulario",emits:["close_pop"],setup(i,{emit:f}){const s=_(""),t=_(""),o=_(""),c=_(""),l=_("");return(p,a)=>{const v=E("font-awesome-icon");return d(),r("div",K,[e("div",Q,[W,X,e("form",{class:"formulario shadow-5",onSubmit:a[5]||(a[5]=z((...n)=>p.sendEmail&&p.sendEmail(...n),["prevent"]))},[e("div",{class:"boton-close select-none cursor-pointer flex justify-content-center align-items-center",onClick:a[0]||(a[0]=n=>p.$emit("close_pop"))},[u(v,{icon:"fa-solid fa-xmark"})]),ee,te,e("div",oe,[se,N(e("input",{id:"name",placeholder:"Nombre",class:"outline-none",name:"name",type:"text","onUpdate:modelValue":a[1]||(a[1]=n=>s.value=n),required:"true",autofocus:""},null,512),[[T,s.value,void 0,{trim:!0}]])]),e("div",ne,[le,N(e("input",{id:"email",placeholder:"Correo",class:"outline-none",name:"email",type:"text","onUpdate:modelValue":a[2]||(a[2]=n=>t.value=n),required:"true",autofocus:""},null,512),[[T,t.value,void 0,{trim:!0}]])]),e("div",ae,[ie,N(e("input",{id:"phone",placeholder:"Tel\xE9fono",class:"outline-none",name:"phone",type:"text","onUpdate:modelValue":a[3]||(a[3]=n=>o.value=n),required:"true",autofocus:""},null,512),[[T,o.value,void 0,{trim:!0}]])]),e("div",ce,[de,N(e("textarea",{id:"message",placeholder:"Mensaje",class:"outline-none",name:"message","onUpdate:modelValue":a[4]||(a[4]=n=>c.value=n),required:"true",autofocus:""}," ",512),[[T,c.value,void 0,{trim:!0}]])]),e("h1",re,w(l.value),1),ue],32)])])}}},ve=I(_e,[["__scopeId","data-v-930f7166"]]);const B=i=>(S("data-v-25d61bfd"),i=i(),j(),i),fe={id:"home"},me={class:"gradient"},pe=M('<div class="flex justify-content-end" data-v-25d61bfd><div class="listado" data-v-25d61bfd><span class="text-home" data-text="INGENIER\xCDA Y" data-v-25d61bfd>INGENIER\xCDA Y</span><br data-v-25d61bfd><span class="text-home" data-text="AUTOMATIZACI\xD3N" data-v-25d61bfd>AUTOMATIZACI\xD3N</span><br data-v-25d61bfd><span class="text-home" data-text="DE PROCESOS" data-v-25d61bfd>DE PROCESOS</span><br data-v-25d61bfd><span class="text-home" data-text="INDUSTRIALES" data-v-25d61bfd>INDUSTRIALES</span></div></div>',1),ge={class:"button-container flex justify-content-end"},be=B(()=>e("span",null,null,-1)),he=B(()=>e("span",null,null,-1)),xe=B(()=>e("span",null,null,-1)),ye=B(()=>e("span",null,null,-1)),$e={__name:"Home",emits:["form-pop"],setup(i,{emit:f}){return(s,t)=>{const o=E("font-awesome-icon");return d(),r("div",fe,[e("div",me,[pe,e("div",ge,[e("div",{onClick:t[0]||(t[0]=c=>s.$emit("form-pop")),class:"contact-button cursor-pointer flex align-items-center justify-content-center"},[be,he,xe,ye,u(o,{class:"icon-mail mr-3",icon:"fa-solid fa-envelope"}),$(" Contacto ")])])])])}}},ke=I($e,[["__scopeId","data-v-25d61bfd"]]),we="/siac_auto_page/assets/logo2.edc87eb0.png";const O=i=>(S("data-v-bb41b9fb"),i=i(),j(),i),Ce={key:0,id:"viewer",class:"grid"},Ie={class:"col-1 flex justify-content-center align-items-center"},Ee={class:"view-dialog col-10"},Se={class:"title flex justify-content-center"},je={class:"foto flex justify-content-center align-items-center"},Ne=["src","alt"],Te={class:"text-content flex justify-content-center align-items-center"},Ae={class:"col-1 flex justify-content-center align-items-center"},Be={id:"about"},De={class:"grid",style:{margin:"0 !important"}},Le=M('<div class="left-side col-12 lg:col-8 py-2" data-v-bb41b9fb><img class="logo" src="'+we+'" alt="logo2" data-v-bb41b9fb><div class="text-subtitle" data-v-bb41b9fb>DESCRIPCI\xD3N SIAC</div><div class="contenido" data-v-bb41b9fb><div class="text-info" data-v-bb41b9fb>En SIAC Automatizaci\xF3n nos dedicamos al desarrollo de proyectos de ingenier\xEDa y automatizaci\xF3n de procesos Industrial segun las necesidades de nuestros clientes ofreciendo servicios como:</div></div></div>',1),Pe={class:"col-12 lg:col-4 pt-4"},Ue=O(()=>e("div",{class:"about-title"},"Servicios",-1)),Ve=["onClick"],Fe=O(()=>e("div",{class:"gradient-button"},null,-1)),Re={class:"select-title select-none"},Me={__name:"About",emits:["blur_toggle"],setup(i,{emit:f}){const s=_([]),t=_(!1),o=_(0);A(()=>{P(U(F,"services"),a=>{let v=[];a.forEach(n=>{let g={id:n.id,title:n.data().title,name:n.data().name,description:n.data().description,url:n.data().url,created:n.data().created};v.push(g)}),s.value=v})});const c=a=>{a!=null&&(o.value=a),t.value=!t.value,t.value?f("blur_toggle",!0):f("blur_toggle",!1)},l=()=>{o.value!=s.value.length-1&&(o.value+=1)},p=()=>{o.value!=0&&(o.value-=1)};return(a,v)=>{const n=E("font-awesome-icon");return d(),r(C,null,[t.value?(d(),r("div",Ce,[e("div",Ie,[o.value!=0?(d(),r("div",{key:0,onClick:p,class:"button-change select-none cursor-pointer"},[u(n,{icon:"fa-solid fa-angle-left"})])):y("",!0)]),e("div",Ee,[e("div",{class:"boton-close select-none cursor-pointer",onClick:c},[u(n,{icon:"fa-solid fa-xmark"})]),e("div",Se,w(s.value[o.value].title),1),e("div",je,[e("img",{src:s.value[o.value].url,alt:s.value[o.value].name},null,8,Ne)]),e("div",Te,w(s.value[o.value].description),1)]),e("div",Ae,[o.value!=s.value.length-1?(d(),r("div",{key:0,onClick:l,class:"button-change select-none cursor-pointer"},[u(n,{icon:"fa-solid fa-angle-right"})])):y("",!0)])])):y("",!0),e("div",Be,[e("div",De,[Le,e("div",Pe,[Ue,(d(!0),r(C,null,V(s.value,(g,b)=>(d(),r("div",{key:g.id,class:"content-button flex justify-content-end cursor-pointer",onClick:m=>c(b)},[e("div",{class:"back-img",style:G("background: url("+g.url+");background-size: cover;")},null,4),Fe,e("div",Re,w(g.title),1)],8,Ve))),128))])])])],64)}}},Oe=I(Me,[["__scopeId","data-v-bb41b9fb"]]);const q=i=>(S("data-v-c3efe7ae"),i=i(),j(),i),qe={key:0,id:"viewer",class:"grid"},ze={class:"col-1 flex justify-content-center align-items-center"},Ge={class:"view-dialog col-10"},He={class:"foto flex justify-content-center align-items-center"},Ye=["src","alt"],Ze={class:"text-content flex justify-content-center align-items-center"},Je={class:"col-1 flex justify-content-center align-items-center"},Ke={id:"clients"},Qe=q(()=>e("div",{class:"bg-clients"},null,-1)),We={style:{padding:"10% 3% 5% 3%"}},Xe=q(()=>e("div",{class:"my-5 title-text"},"Trabajos previos",-1)),et={class:"grid"},tt={class:"col-1 flex justify-content-center align-items-center"},ot={class:"col-10 flex flex-wrap my-3 justify-content-center"},st=["onClick"],nt=["src","alt"],lt={class:"text-info"},at={class:"col-1 flex justify-content-center align-items-center"},it={__name:"Clients",props:["position","client_pos"],emits:["blur_toggle"],setup(i,{emit:f}){const s=_([]),t=_(0),o=_(1),c=_(!1),l=_(0);A(()=>{P(U(F,"gallery"),b=>{let m=[],h=[];b.forEach(x=>{let L={id:x.id,name:x.data().name,description:x.data().description,url:x.data().url,created:x.data().created};m.length>=6&&(h.push(m),m=[]),m.push(L)}),m.length!=0&&(h.push(m),m=[]),o.value=h.length,s.value=h})});const p=()=>{t.value!=o.value-1&&(t.value+=1)},a=()=>{t.value!=0&&(t.value-=1)},v=b=>{b!=null&&(l.value=b),c.value=!c.value,c.value?f("blur_toggle",!0):f("blur_toggle",!1)},n=()=>{t.value==o.value-1&&l.value==s.value[t.value].length-1||(l.value!=s.value[t.value].length-1?l.value+=1:(t.value+=1,l.value=0))},g=()=>{console.log("enter"),!(l.value==0&&t.value==0)&&(console.log("no problem"),l.value!=0?l.value-=1:(t.value-=1,l.value=5))};return(b,m)=>{const h=E("font-awesome-icon");return d(),r(C,null,[c.value?(d(),r("div",qe,[e("div",ze,[l.value!=0||t.value!=0?(d(),r("div",{key:0,onClick:g,class:"button-change select-none cursor-pointer"},[u(h,{icon:"fa-solid fa-angle-left"})])):y("",!0)]),e("div",Ge,[e("div",{class:"boton-close select-none cursor-pointer",onClick:v},[u(h,{icon:"fa-solid fa-xmark"})]),e("div",He,[e("img",{src:s.value[t.value][l.value].url,alt:s.value[t.value][l.value].name},null,8,Ye)]),e("div",Ze,w(s.value[t.value][l.value].description),1)]),e("div",Je,[t.value!=o.value-1||l.value!=s.value[t.value].length-1?(d(),r("div",{key:0,onClick:n,class:"button-change select-none cursor-pointer"},[u(h,{icon:"fa-solid fa-angle-right"})])):y("",!0)])])):y("",!0),e("div",Ke,[Qe,e("div",We,[Xe,e("div",et,[e("div",tt,[t.value!=0?(d(),r("div",{key:0,onClick:a,class:"button-page"},[u(h,{icon:"fa-solid fa-angle-left"})])):y("",!0)]),e("div",ot,[(d(!0),r(C,null,V(s.value[t.value],(x,L)=>(d(),r("div",{key:x.id,class:"contenido"},[e("div",{class:"image cursor-pointer",onClick:Et=>v(L)},[e("img",{src:x.url,alt:x.name},null,8,nt)],8,st),e("div",lt,w(x.description),1)]))),128))]),e("div",at,[t.value!=o.value-1?(d(),r("div",{key:0,onClick:p,class:"button-page"},[u(h,{icon:"fa-solid fa-angle-right"})])):y("",!0)])])])])],64)}}},ct=I(it,[["__scopeId","data-v-c3efe7ae"]]);const D=i=>(S("data-v-05047183"),i=i(),j(),i),dt={id:"contact"},rt=D(()=>e("div",{class:"title-text"},"NUESTROS CLIENTES",-1)),ut={class:"image_container flex flex-wrap justify-content-center"},_t=["src","alt"],vt={class:"footer bottom-0"},ft=D(()=>e("div",{class:"texture"},null,-1)),mt={class:"footer-content p-5 grid"},pt={class:"col-3"},gt=D(()=>e("div",{class:"text-subtitle"},[$("Dise\xF1o y programaci\xF3n para "),e("br"),$("procesos industriales.")],-1)),bt={class:"col-6"},ht=D(()=>e("div",{class:"footer-title"},"Contacto",-1)),xt={class:"button-text text-center"},yt={class:"col-3"},$t={class:"button-text"},kt={class:"button-text"},wt={class:"button-text"},Ct={__name:"Contact",props:["position","contact_pos"],emits:["form-pop","logo_home"],setup(i,{emit:f}){const s=_([]);return A(()=>{P(U(F,"clients"),t=>{let o=[];t.forEach(c=>{let l={id:c.id,name:c.data().name,url:c.data().url,created:c.data().created};o.push(l)}),s.value=o})}),(t,o)=>{const c=E("font-awesome-icon");return d(),r("div",dt,[rt,e("div",ut,[(d(!0),r(C,null,V(s.value,l=>(d(),r("img",{key:l.id,src:l.url,alt:l.name,class:"logos"},null,8,_t))),128))]),e("div",vt,[ft,e("div",mt,[e("div",pt,[e("img",{onClick:o[0]||(o[0]=l=>f("logo_home")),class:"logo-alone cursor-pointer",src:R,alt:"Logo"}),gt]),e("div",bt,[ht,e("div",xt,[u(c,{icon:"fa-solid fa-location-dot"}),$(" Direcci\xF3n: avenida Lorem ipsum dolor sit amet")])]),e("div",yt,[e("div",$t,[u(c,{icon:"fa-brands fa-facebook"}),$(" @Facebook")]),e("div",kt,[u(c,{icon:"fa-brands fa-instagram"}),$(" @Instagram")]),e("div",wt,[u(c,{icon:"fa-solid fa-envelope"}),$(" @Correo")])])])])])}}},It=I(Ct,[["__scopeId","data-v-05047183"]]),Nt={__name:"Public",setup(i){const f=_(0),s=_(!1);A(()=>{window.addEventListener("scroll",c)});const t=a=>{let n=document.getElementById(a).offsetTop;window.scrollTo(0,n)},o=()=>{window.scrollTo(0,0)},c=a=>{let n=a.srcElement.scrollingElement.scrollTop;f.value=n},l=()=>{s.value=!s.value},p=a=>{let v=document.getElementById("navbar"),n=document.getElementById("home"),g=document.getElementById("about"),b=document.getElementById("clients"),m=document.getElementById("contact");a?(v.style.filter="blur(6px)",n.style.filter="blur(6px)",g.style.filter="blur(6px)",b.style.filter="blur(6px)",m.style.filter="blur(6px)"):(v.style.filter="blur(0px)",n.style.filter="blur(0px)",g.style.filter="blur(0px)",b.style.filter="blur(0px)",m.style.filter="blur(0px)")};return(a,v)=>(d(),r(C,null,[u(J,{onLogo_home:o}),s.value?(d(),H(ve,{key:0,onClose_pop:l})):y("",!0),u(ke,{onFormPop:l,onNavigation:t}),u(Oe,{onBlur_toggle:p}),u(ct,{onBlur_toggle:p}),u(It,{onLogo_home:o,onFormPop:l})],64))}};export{Nt as default};