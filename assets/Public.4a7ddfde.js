import{_ as D}from"./logo.eb5bb1d7.js";import{_ as b,r as _,o as c,c as r,a as p,w as M,b as I,p as k,d as C,e,f as j,v as S,t as x,g as q,h as y,i as E,I as T,j as V,k as $,F as N,l as A,m as L,n as F,q as B}from"./index.a24dde76.js";const R=o=>(k("data-v-52ca32ec"),o=o(),C(),o),O={id:"navbar",class:"fixed shadow-5 flex align-content-center"},W=R(()=>e("img",{class:"logo cursor-pointer",src:D,alt:"Logo"},null,-1)),H={__name:"NavBar",emits:["navigation"],setup(o,{emit:u}){return _(!1),(s,t)=>{const a=I("router-link");return c(),r("div",O,[p(a,{to:"/sa_admin"},{default:M(()=>[W]),_:1})])}}},z=b(H,[["__scopeId","data-v-52ca32ec"]]);const w=o=>(k("data-v-80c646bf"),o=o(),C(),o),G={id:"formulario"},Y=w(()=>e("div",{class:"title flex"},null,-1)),Z=w(()=>e("div",{class:"form-text"},[y(" Escribenos tu informaci\xF3n de contacto y "),e("br"),y("responderemos a la brevedad. ")],-1)),J={class:"field"},K=w(()=>e("label",{for:"name"},"Nombre",-1)),Q={class:"field"},X=w(()=>e("label",{for:"email"},"Correo",-1)),ee={class:"field"},te=w(()=>e("label",{for:"phone"},"Tel\xE9fono",-1)),oe={class:"field"},se=w(()=>e("label",{for:"message"},"Mensaje",-1)),ne={class:"select-none",style:{color:"red","margin-bottom":"2%"}},ae=w(()=>e("div",{class:"flex justify-content-end"},[e("input",{class:"boton-mail select-none cursor-pointer",type:"submit",value:"Enviar correo"})],-1)),ie={__name:"Formulario",emits:["close_pop"],setup(o,{emit:u}){const s=_(""),t=_(""),a=_(""),d=_(""),m=_("");return(v,i)=>{const l=I("font-awesome-icon");return c(),r("div",G,[e("form",{class:"formulario shadow-5",onSubmit:i[5]||(i[5]=q((...n)=>v.sendEmail&&v.sendEmail(...n),["prevent"]))},[e("div",{class:"boton-close select-none cursor-pointer",onClick:i[0]||(i[0]=n=>v.$emit("close_pop"))},[p(l,{icon:"fa-solid fa-xmark"})]),Y,Z,e("div",J,[K,j(e("input",{id:"name",placeholder:"Nombre",class:"outline-none",name:"name",type:"text","onUpdate:modelValue":i[1]||(i[1]=n=>s.value=n),required:"true",autofocus:""},null,512),[[S,s.value,void 0,{trim:!0}]])]),e("div",Q,[X,j(e("input",{id:"email",placeholder:"Correo",class:"outline-none",name:"email",type:"text","onUpdate:modelValue":i[2]||(i[2]=n=>t.value=n),required:"true",autofocus:""},null,512),[[S,t.value,void 0,{trim:!0}]])]),e("div",ee,[te,j(e("input",{id:"phone",placeholder:"Tel\xE9fono",class:"outline-none",name:"phone",type:"text","onUpdate:modelValue":i[3]||(i[3]=n=>a.value=n),required:"true",autofocus:""},null,512),[[S,a.value,void 0,{trim:!0}]])]),e("div",oe,[se,j(e("textarea",{id:"message",placeholder:"Mensaje",class:"outline-none",name:"message","onUpdate:modelValue":i[4]||(i[4]=n=>d.value=n),required:"true",autofocus:""}," ",512),[[S,d.value,void 0,{trim:!0}]])]),e("h1",ne,x(m.value),1),ae],32)])}}},le=b(ie,[["__scopeId","data-v-80c646bf"]]);const ce={class:"flex justify-content-center"},de=["src","alt"],re={class:"text-content flex justify-content-center"},_e={__name:"WorksView",props:["works"],emits:["close"],setup(o,{emit:u}){const s=o;return(t,a)=>(c(),r("div",{id:"viewer",onClick:a[0]||(a[0]=d=>t.$emit("close"))},[e("div",ce,[e("img",{class:"foto",src:s.works.url,alt:s.works.name},null,8,de)]),e("div",re,x(s.works.description),1)]))}},ue=b(_e,[["__scopeId","data-v-9e22140e"]]);const ve=o=>(k("data-v-9e641456"),o=o(),C(),o),pe={id:"home"},me={class:"gradient"},fe=ve(()=>e("div",{class:"listado flex justify-content-end"},[y(" INGENIER\xCDA Y"),e("br"),y(" AUTOMATIZACI\xD3N"),e("br"),y(" DE PROCESOS"),e("br"),y(" INDUSTRIALES ")],-1)),ge={class:"button-container flex justify-content-end"},he={class:"icon-mail mr-3"},$e={__name:"Home",emits:["form-pop"],setup(o,{emit:u}){return(s,t)=>{const a=I("font-awesome-icon");return c(),r("div",pe,[e("div",me,[fe,e("div",ge,[e("div",{onClick:t[0]||(t[0]=d=>s.$emit("form-pop")),class:"contact-button cursor-pointer flex align-items-center justify-content-center"},[e("div",he,[p(a,{icon:"fa-solid fa-envelope"})]),y(" Contacto")])])])])}}},ye=b($e,[["__scopeId","data-v-9e641456"]]),xe="/siac_auto_page/assets/logo2.edc87eb0.png";const be=o=>(k("data-v-1ed6df73"),o=o(),C(),o),we={id:"about"},ke={key:0,id:"viewer",class:"grid"},Ce={class:"col-1 flex justify-content-center align-items-center"},Ie={class:"view-dialog col-10"},je={class:"title flex justify-content-center"},Se={class:"flex justify-content-center align-items-center"},Ee=["src","alt"],Ne={class:"text-content flex justify-content-center align-items-center"},Te={class:"col-1 flex justify-content-center align-items-center"},Ve={class:"grid",style:{margin:"0 !important"}},Ae=L('<div class="left-side col-12 lg:col-8 py-2" data-v-1ed6df73><img class="logo" src="'+xe+'" alt="logo2" data-v-1ed6df73><div class="text-subtitle" data-v-1ed6df73>DESCRIPCI\xD3N SIAC</div><div class="contenido" data-v-1ed6df73><div class="text-info" data-v-1ed6df73>En SIAC Automatizaci\xF3n nos dedicamos al desarrollo de proyectos de ingenier\xEDa y automatizaci\xF3n de procesos Industrial segun las necesidades de nuestros clientes ofreciendo servicios como:</div></div></div>',1),Fe={class:"col-12 lg:col-4 pt-4"},Pe=be(()=>e("div",{class:"about-title"},"Servicios",-1)),Be=["onClick"],De={class:"select-title select-none cursor-pointer"},Le={__name:"About",setup(o){const u=_([]),s=_(!1),t=_(0);E(()=>{T(V(F,"services"),v=>{let i=[];v.forEach(l=>{let n={id:l.id,title:l.data().title,name:l.data().name,description:l.data().description,url:l.data().url,created:l.data().created};i.push(n)}),u.value=i})});const a=v=>{v!=null&&(t.value=v),s.value=!s.value},d=()=>{t.value!=u.value.length-1&&(t.value+=1)},m=()=>{t.value!=0&&(t.value-=1)};return(v,i)=>{const l=I("font-awesome-icon");return c(),r("div",we,[s.value?(c(),r("div",ke,[e("div",Ce,[t.value!=0?(c(),r("div",{key:0,onClick:m,class:"button-change select-none cursor-pointer"},[p(l,{icon:"fa-solid fa-angle-left"})])):$("",!0)]),e("div",Ie,[e("div",{class:"boton-close select-none cursor-pointer",onClick:a},[p(l,{icon:"fa-solid fa-xmark"})]),e("div",je,x(u.value[t.value].title),1),e("div",Se,[e("img",{class:"foto",src:u.value[t.value].url,alt:u.value[t.value].name},null,8,Ee)]),e("div",Ne,x(u.value[t.value].description),1)]),e("div",Te,[t.value!=u.value.length-1?(c(),r("div",{key:0,onClick:d,class:"button-change select-none cursor-pointer"},[p(l,{icon:"fa-solid fa-angle-right"})])):$("",!0)])])):$("",!0),e("div",Ve,[Ae,e("div",Fe,[Pe,(c(!0),r(N,null,A(u.value,(n,f)=>(c(),r("div",{key:n.id,class:"content-button flex justify-content-end cursor-pointer",onClick:g=>a(f)},[e("div",De,x(n.title),1)],8,Be))),128))])])])}}},Ue=b(Le,[["__scopeId","data-v-1ed6df73"]]);const U=o=>(k("data-v-ca6f29ec"),o=o(),C(),o),Me={id:"clients"},qe={key:0,id:"viewer",class:"grid"},Re={class:"col-1 flex justify-content-center align-items-center"},Oe={class:"view-dialog col-10"},We={class:"flex justify-content-center align-items-center"},He=["src","alt"],ze={class:"text-content flex justify-content-center align-items-center"},Ge={class:"col-1 flex justify-content-center align-items-center"},Ye=U(()=>e("div",{class:"bg-clients"},null,-1)),Ze={style:{padding:"10% 3% 5% 3%"}},Je=U(()=>e("div",{class:"my-5 title-text"},"Trabajos previos (Fotos)",-1)),Ke={class:"grid"},Qe={class:"col-1 flex justify-content-center align-items-center"},Xe={class:"col-10 flex flex-wrap my-3 justify-content-center"},et=["onClick"],tt=["src","alt"],ot={class:"text-info"},st={class:"col-1 flex justify-content-center align-items-center"},nt={__name:"Clients",props:["position","client_pos"],emits:["works-pop"],setup(o,{emit:u}){const s=_([]),t=_(0),a=_(1),d=_(!1),m=_(0);E(()=>{T(V(F,"gallery"),n=>{let f=[],g=[];n.forEach(h=>{let P={id:h.id,name:h.data().name,description:h.data().description,url:h.data().url,created:h.data().created};f.length>=6&&(g.push(f),f=[]),f.push(P)}),f.length!=0&&(g.push(f),f=[]),a.value=g.length,s.value=g})});const v=()=>{t.value!=a.value-1&&(t.value+=1)},i=()=>{t.value!=0&&(t.value-=1)},l=n=>{n!=null&&(m.value=n),d.value=!d.value};return(n,f)=>{const g=I("font-awesome-icon");return c(),r("div",Me,[d.value?(c(),r("div",qe,[e("div",Re,[m.value!=0?(c(),r("div",{key:0,onClick:i,class:"button-change select-none cursor-pointer"},[p(g,{icon:"fa-solid fa-angle-left"})])):$("",!0)]),e("div",Oe,[e("div",{class:"boton-close select-none cursor-pointer",onClick:l},[p(g,{icon:"fa-solid fa-xmark"})]),e("div",We,[e("img",{class:"foto",src:s.value[m.value].url,alt:s.value[m.value].name},null,8,He)]),e("div",ze,x(s.value[m.value].description),1)]),e("div",Ge,[m.value!=s.value.length-1?(c(),r("div",{key:0,onClick:v,class:"button-change select-none cursor-pointer"},[p(g,{icon:"fa-solid fa-angle-right"})])):$("",!0)])])):$("",!0),Ye,e("div",Ze,[Je,e("div",Ke,[e("div",Qe,[e("div",{onClick:i,class:"button-change"},[p(g,{icon:"fa-solid fa-angle-left"})])]),e("div",Xe,[(c(!0),r(N,null,A(s.value[t.value],h=>(c(),r("div",{key:h.id,class:"contenido"},[e("div",{class:"image",onClick:P=>n.$emit("works-pop",h)},[e("img",{src:h.url,alt:h.name},null,8,tt)],8,et),e("div",ot,x(h.description),1)]))),128))]),e("div",st,[e("div",{onClick:v,class:"button-change"},[p(g,{icon:"fa-solid fa-angle-right"})])])])])])}}},at=b(nt,[["__scopeId","data-v-ca6f29ec"]]);const it=o=>(k("data-v-512de05d"),o=o(),C(),o),lt={id:"contact"},ct=it(()=>e("div",{class:"title-text"},"NUESTROS CLIENTES",-1)),dt={class:"image_container flex flex-wrap justify-content-center"},rt=["src","alt"],_t=L('<div class="footer p-5 bottom-0 grid" data-v-512de05d><div class="col-3" data-v-512de05d><img class="logo-alone cursor-pointer" src="'+D+'" alt="Logo" data-v-512de05d><div class="text-subtitle" data-v-512de05d>Dise\xF1o y programaci\xF3n para <br data-v-512de05d>procesos industriales.</div></div><div class="col-7" data-v-512de05d><div class="footer-title" data-v-512de05d>Contacto</div><div class="button-text text-center" data-v-512de05d>Direcci\xF3n: avenida Lorem ipsum dolor sit amet</div></div><div class="col-2" data-v-512de05d><div class="button-text" data-v-512de05d>@Facebook</div><div class="button-text" data-v-512de05d>@Instagram</div><div class="button-text" data-v-512de05d>@Correo</div></div></div>',1),ut={__name:"Contact",props:["position","contact_pos"],emits:["form-pop"],setup(o,{emit:u}){const s=_([]);return E(()=>{T(V(F,"clients"),t=>{let a=[];t.forEach(d=>{let m={id:d.id,name:d.data().name,url:d.data().url,created:d.data().created};a.push(m)}),s.value=a})}),(t,a)=>(c(),r("div",lt,[ct,e("div",dt,[(c(!0),r(N,null,A(s.value,d=>(c(),r("img",{key:d.id,src:d.url,alt:d.name,class:"logos"},null,8,rt))),128))]),_t]))}},vt=b(ut,[["__scopeId","data-v-512de05d"]]),ft={__name:"Public",setup(o){const u=_(0),s=_(!1),t=_(!1),a=_();E(()=>{window.addEventListener("scroll",m)});const d=l=>{let f=document.getElementById(l).offsetTop;window.scrollTo(0,f)},m=l=>{let f=l.srcElement.scrollingElement.scrollTop;u.value=f},v=()=>{s.value=!s.value},i=l=>{l&&(a.value=l),t.value=!t.value};return(l,n)=>(c(),r(N,null,[p(z),s.value?(c(),B(le,{key:0,onClose_pop:v})):$("",!0),t.value?(c(),B(ue,{key:1,works:a.value,onClose:i},null,8,["works"])):$("",!0),p(ye,{onFormPop:v,onNavigation:d}),p(Ue),p(at,{onWorksPop:i}),p(vt,{onFormPop:v})],64))}};export{ft as default};
