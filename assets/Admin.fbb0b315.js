import{_ as O}from"./logo.eb5bb1d7.js";import{_ as A,j as L,m as j,r as i,i as V,I as R,o as c,c as _,e,f as x,v as C,F as T,k as U,t as I,x as S,y as G,z as M,A as B,p as q,d as D,u as F,s as $,q as k,n as z}from"./index.5bad9fb7.js";const E=n=>(q("data-v-d320f198"),n=n(),D(),n),W={id:"galery"},H=E(()=>e("div",{class:"main-title"},"Galeria de Trabajos previos",-1)),J={class:"container grid"},K={class:"col-4"},Q={class:"login-form"},X=E(()=>e("div",{class:"title flex"}," Subir una Imagen ",-1)),Y=E(()=>e("div",{class:"form-text"}," Las imagenes subidas apareceran en la seccion Trabajos previos del sitio web ",-1)),Z={class:"field"},ee=E(()=>e("label",{for:"name"},"Imagen",-1)),te={class:"field"},se=E(()=>e("label",{for:"description"},"Texto bajo la imagen",-1)),ae={class:"col-8"},le={class:"w-full"},oe=E(()=>e("thead",null,[e("tr",{class:"grid"},[e("th",{class:"col text-center"},"Imagen"),e("th",{class:"col text-center"},"Descripci\xF3n"),e("th",{class:"col text-center"},"Acciones")])],-1)),ne={class:"col text-center"},ie=["src","alt"],ce={class:"col text-center"},re={class:"col text-center"},de=["onClick"],ue={class:"flex flex-wrap justify-content-center"},_e=["onClick"],ve={__name:"TableGalery",setup(n){const m=L(j,"gallery"),o=i(),r=i([]),d=i(0),p=i(1),v=i(""),g=l=>{o.value=l.target.files[0]};V(()=>{R(m,l=>{let t=[],s=[];l.forEach(a=>{let h={id:a.id,name:a.data().name,description:a.data().description,url:a.data().url,created:a.data().created};t.length>=5&&(s.push(t),t=[]),t.push(h)}),t.length!=0&&(s.push(t),t=[]),p.value=s.length,r.value=s})});const f=()=>{let l=S.child("galeria/"+o.value.name),t={contentType:"img/jpeg"};l.put(o.value,t).then(s=>{s.task.snapshot.ref.getDownloadURL().then(a=>{G(m,{name:"galeria/"+o.value.name,url:a,description:v.value,created:new Date}),v.value="",o.value=""}).catch(a=>{console.log(a)})}).catch(s=>{console.log(s)})},b=l=>{S.child(l.name).delete().then(s=>{M(B(j,"gallery",l.id))}).catch(s=>{console.log(s)})},u=l=>{d.value=l-1};return(l,t)=>(c(),_("div",W,[H,e("div",J,[e("div",K,[e("div",Q,[X,Y,e("div",Z,[ee,e("input",{onChange:g,type:"file",required:"true",accept:"image/*"},null,32)]),e("div",te,[se,x(e("textarea",{id:"description",class:"outline-none",placeholder:"Descripci\xF3n","onUpdate:modelValue":t[0]||(t[0]=s=>v.value=s),required:"true",autofocus:""}," ",512),[[C,v.value]])]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:f},"Subir")])])]),e("div",ae,[e("table",le,[oe,e("tbody",null,[(c(!0),_(T,null,U(r.value[d.value],s=>(c(),_("tr",{key:s.id,class:"grid"},[e("td",ne,[e("img",{src:s.url,alt:s.name,class:"galery-image"},null,8,ie)]),e("td",ce,I(s.description),1),e("td",re,[e("div",{class:"boton-mail select-none cursor-pointer",onClick:a=>b(s)},"Eliminar",8,de)])]))),128))]),e("tfoot",null,[e("div",ue,[(c(!0),_(T,null,U(p.value,s=>(c(),_("div",{class:"indices-tabla select-none cursor-pointer",onClick:a=>u(s),key:s},I(s),9,_e))),128))])])])])])]))}},me=A(ve,[["__scopeId","data-v-d320f198"]]);const w=n=>(q("data-v-6d44b417"),n=n(),D(),n),pe={id:"services"},he=w(()=>e("div",{class:"main-title"},"Servicios",-1)),ge={class:"container grid"},fe={class:"col-4"},be={class:"login-form"},$e=w(()=>e("div",{class:"title flex"}," Crear un servicio ",-1)),ye=w(()=>e("div",{class:"form-text"}," Los servicios apareceran en su seccion correspondiente en la pagina ",-1)),xe={class:"field"},Ce=w(()=>e("label",{for:"title"},"Titulo",-1)),ke={class:"field"},we=w(()=>e("label",{for:"name"},"Imagen",-1)),Ie={class:"field"},je=w(()=>e("label",{for:"description"},"Texto bajo la imagen",-1)),Te={class:"col-8"},Ue={class:"w-full"},Se=w(()=>e("thead",null,[e("tr",{class:"grid"},[e("th",{class:"col text-center"},"Titulo"),e("th",{class:"col text-center"},"Imagen"),e("th",{class:"col text-center"},"Descripci\xF3n"),e("th",{class:"col text-center"},"Acciones")])],-1)),Ee={class:"col text-center"},Ae={class:"col text-center"},qe=["src","alt"],De={class:"col text-center"},Pe={class:"col text-center"},ze=["onClick"],Ve={class:"flex flex-wrap justify-content-center"},Le=["onClick"],Re={__name:"TableSevices",setup(n){const m=L(j,"services"),o=i(),r=i([]),d=i(0),p=i(1),v=i(""),g=i(""),f=t=>{o.value=t.target.files[0]};V(()=>{R(m,t=>{let s=[],a=[];t.forEach(h=>{let N={id:h.id,title:h.data().title,name:h.data().name,description:h.data().description,url:h.data().url,created:h.data().created};s.length>=5&&(a.push(s),s=[]),s.push(N)}),s.length!=0&&(a.push(s),s=[]),p.value=a.length,r.value=a})});const b=()=>{let t=S.child("services/"+o.value.name),s={contentType:"img/jpeg"};t.put(o.value,s).then(a=>{a.task.snapshot.ref.getDownloadURL().then(h=>{G(m,{title:v.value,name:"services/"+o.value.name,url:h,description:g.value,created:new Date}),v.value="",g.value="",o.value=""}).catch(h=>{console.log(h)})}).catch(a=>{console.log(a)})},u=t=>{S.child(t.name).delete().then(a=>{M(B(j,"services",t.id))}).catch(a=>{console.log(a)})},l=t=>{d.value=t-1};return(t,s)=>(c(),_("div",pe,[he,e("div",ge,[e("div",fe,[e("div",be,[$e,ye,e("div",xe,[Ce,x(e("input",{id:"title",placeholder:"Titulo",class:"outline-none",name:"title",type:"text","onUpdate:modelValue":s[0]||(s[0]=a=>v.value=a),required:"true",autofocus:""},null,512),[[C,v.value,void 0,{trim:!0}]])]),e("div",ke,[we,e("input",{onChange:f,type:"file",required:"true",accept:"image/*"},null,32)]),e("div",Ie,[je,x(e("textarea",{id:"description",class:"outline-none",placeholder:"Descripci\xF3n","onUpdate:modelValue":s[1]||(s[1]=a=>g.value=a),required:"true",autofocus:""}," ",512),[[C,g.value]])]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:b},"Subir")])])]),e("div",Te,[e("table",Ue,[Se,e("tbody",null,[(c(!0),_(T,null,U(r.value[d.value],a=>(c(),_("tr",{key:a.id,class:"grid"},[e("td",Ee,I(a.title),1),e("td",Ae,[e("img",{src:a.url,alt:a.name,class:"galery-image"},null,8,qe)]),e("td",De,I(a.description),1),e("td",Pe,[e("div",{class:"boton-mail select-none cursor-pointer",onClick:h=>u(a)},"Eliminar",8,ze)])]))),128))]),e("tfoot",null,[e("div",Ve,[(c(!0),_(T,null,U(p.value,a=>(c(),_("div",{class:"indices-tabla select-none cursor-pointer",onClick:h=>l(a),key:a},I(a),9,Le))),128))])])])])])]))}},Ge=A(Re,[["__scopeId","data-v-6d44b417"]]);const y=n=>(q("data-v-17b7a9ad"),n=n(),D(),n),Me={id:"users"},Be=y(()=>e("div",{class:"main-title"},"Usuario",-1)),Fe={class:"container grid"},Ne={class:"col-4"},Oe={key:0,class:"login-form"},We=y(()=>e("div",{class:"title flex"}," Crear un usuario ",-1)),He=y(()=>e("div",{class:"form-text"}," Cree cuentas de usuarios para que entren a administraci\xF3n ",-1)),Je={class:"field"},Ke=y(()=>e("label",{for:"email"},"Email",-1)),Qe={class:"field"},Xe=y(()=>e("label",{for:"password"},"Contrase\xF1a",-1)),Ye={class:"col-8"},Ze={key:0,class:"tab-options flex justify-content-between"},et=y(()=>e("div",{class:"tab-text"}," Eliminar esta cuenta de usuario ",-1)),tt={key:1,class:"tab-options"},st=y(()=>e("div",{class:"tab-text"}," Cambiar email de usuario ",-1)),at={class:"flex justify-content-between"},lt={class:"tab-options"},ot=y(()=>e("div",{class:"tab-text"}," Cambiar contrase\xF1a de usuario ",-1)),nt={class:"flex justify-content-between"},it={__name:"TableUsers",setup(n){const m=F(),o=i(!1),r=i(""),d=i(""),p=i(""),v=i("");V(()=>{$.currentUser.email=="web.siac.automatizacion@gmail.com"||$.currentUser.email=="s.arce@siacmail.com"?o.value=!0:o.value=!1});const g=()=>{let l=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;!r.value.match(l)||r.value==""||p.value!=""&&$.createUserWithEmailAndPassword(r.value,p.value).then(t=>{r.value="",p.value="",console.log("usuario creado")}).catch(t=>{let s=t.code,a=t.message;console.log("error "+s+" message: "+a)})},f=()=>{$.currentUser.delete().then(()=>{$.signOut(),m.push({name:"public"})}).catch(l=>{let t=l.code,s=l.message;console.log("error "+t+" message: "+s)})},b=()=>{let l=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;!d.value.match(l)||d.value==""||$.currentUser.updateEmail(d.value).then(()=>{d.value="",console.log("Email Actualizado")}).catch(t=>{let s=t.code,a=t.message;console.log("error "+s+" message: "+a)})},u=()=>{v.value!=""&&$.currentUser.updatePassword(v.value).then(()=>{v.value="",console.log("Password Actualizado")}).catch(l=>{let t=l.code,s=l.message;console.log("error "+t+" message: "+s)})};return(l,t)=>(c(),_("div",Me,[Be,e("div",Fe,[e("div",Ne,[o.value?(c(),_("div",Oe,[We,He,e("div",Je,[Ke,x(e("input",{id:"email",placeholder:"Email",class:"outline-none",name:"email",type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>r.value=s),required:"true",autofocus:""},null,512),[[C,r.value,void 0,{trim:!0}]])]),e("div",Qe,[Xe,x(e("input",{id:"password",placeholder:"Contrase\xF1a",class:"outline-none",name:"password",type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>p.value=s),required:"true",autofocus:""},null,512),[[C,p.value,void 0,{trim:!0}]])]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:g},"Crear Usuario")])])):k("",!0)]),e("div",Ye,[o.value?k("",!0):(c(),_("div",Ze,[et,e("div",{class:"boton-mail select-none cursor-pointer",onClick:f},"Eliminar Cuenta")])),o.value?k("",!0):(c(),_("div",tt,[st,e("div",at,[x(e("input",{id:"email",placeholder:"Email",class:"input-mail outline-none",name:"email",type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>d.value=s),required:"true",autofocus:""},null,512),[[C,d.value,void 0,{trim:!0}]]),e("div",{class:"boton-mail select-none cursor-pointer",onClick:b},"Actualizar Email")])])),e("div",lt,[ot,e("div",nt,[x(e("input",{id:"password",placeholder:"Contrase\xF1a",class:"input-mail outline-none",name:"password",type:"text","onUpdate:modelValue":t[3]||(t[3]=s=>v.value=s),required:"true",autofocus:""},null,512),[[C,v.value,void 0,{trim:!0}]]),e("div",{class:"boton-mail select-none cursor-pointer",onClick:t[4]||(t[4]=(...s)=>u&&u(...s))},"Actualizar Contrase\xF1a")])])])])]))}},ct=A(it,[["__scopeId","data-v-17b7a9ad"]]);const P=n=>(q("data-v-a10620e5"),n=n(),D(),n),rt={id:"clients"},dt=P(()=>e("div",{class:"main-title"},"Clientes",-1)),ut={class:"container grid"},_t={class:"col-4"},vt={class:"login-form"},mt=P(()=>e("div",{class:"title flex"}," Agregar un cliente ",-1)),pt=P(()=>e("div",{class:"form-text"}," Las imagenes subidas apareceran en la seccion de clientes ",-1)),ht={class:"field"},gt=P(()=>e("label",{for:"name"},"Imagen",-1)),ft={class:"col-8"},bt={class:"w-full"},$t=P(()=>e("thead",null,[e("tr",{class:"grid"},[e("th",{class:"col text-center"},"Imagen"),e("th",{class:"col text-center"},"Acciones")])],-1)),yt={class:"col text-center"},xt=["src","alt"],Ct={class:"col text-center"},kt=["onClick"],wt={class:"flex flex-wrap justify-content-center"},It=["onClick"],jt={__name:"TableClients",setup(n){const m=L(j,"clients"),o=i(),r=i([]),d=i(0),p=i(1),v=u=>{o.value=u.target.files[0]};V(()=>{R(m,u=>{let l=[],t=[];u.forEach(s=>{let a={id:s.id,name:s.data().name,url:s.data().url,created:s.data().created};l.length>=5&&(t.push(l),l=[]),l.push(a)}),l.length!=0&&(t.push(l),l=[]),p.value=t.length,r.value=t})});const g=()=>{let u=S.child("clients/"+o.value.name),l={contentType:"img/jpeg"};u.put(o.value,l).then(t=>{t.task.snapshot.ref.getDownloadURL().then(s=>{G(m,{name:"clients/"+o.value.name,url:s,created:new Date}),o.value=""}).catch(s=>{console.log(s)})}).catch(t=>{console.log(t)})},f=u=>{S.child(u.name).delete().then(t=>{M(B(j,"clients",u.id))}).catch(t=>{console.log("Causa error: "+t)})},b=u=>{d.value=u-1};return(u,l)=>(c(),_("div",rt,[dt,e("div",ut,[e("div",_t,[e("div",vt,[mt,pt,e("div",ht,[gt,e("input",{onChange:v,type:"file",required:"true",accept:"image/*"},null,32)]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:g},"Subir")])])]),e("div",ft,[e("table",bt,[$t,e("tbody",null,[(c(!0),_(T,null,U(r.value[d.value],t=>(c(),_("tr",{key:t.id,class:"grid"},[e("td",yt,[e("img",{src:t.url,alt:t.name,class:"galery-image"},null,8,xt)]),e("td",Ct,[e("div",{class:"boton-mail select-none cursor-pointer",onClick:s=>f(t)},"Eliminar",8,kt)])]))),128))]),e("tfoot",null,[e("div",wt,[(c(!0),_(T,null,U(p.value,t=>(c(),_("div",{class:"indices-tabla select-none cursor-pointer",onClick:s=>b(t),key:t},I(t),9,It))),128))])])])])])]))}},Tt=A(jt,[["__scopeId","data-v-a10620e5"]]);const Ut=n=>(q("data-v-bd24a519"),n=n(),D(),n),St={id:"Admin"},Et=Ut(()=>e("img",{class:"z-5 logo cursor-pointer",src:O,alt:"Logo"},null,-1)),At={__name:"Admin",setup(n){const m=i(!1),o=i(!1),r=i(!0),d=i(!1),p=F(),v=()=>{m.value=!0,r.value=!1,d.value=!1,o.value=!1},g=()=>{m.value=!1,r.value=!1,d.value=!0,o.value=!1},f=()=>{m.value=!1,r.value=!1,d.value=!1,o.value=!0},b=()=>{m.value=!1,r.value=!0,d.value=!1,o.value=!1},u=()=>{$.signOut(),p.push({name:"public"})};return(l,t)=>(c(),_("div",St,[e("div",{id:"navbar",class:"shadow-5 flex justify-content-between"},[Et,e("div",{class:"flex justify-content-center"},[e("div",{onClick:b,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Servicios"),e("div",{onClick:g,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Galer\xEDa"),e("div",{onClick:f,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Clientes"),e("div",{onClick:v,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Usuario"),e("div",{onClick:u,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Cerrar Sesion")])]),e("div",null,[o.value?(c(),z(Tt,{key:0})):k("",!0),m.value?(c(),z(ct,{key:1})):k("",!0),r.value?(c(),z(Ge,{key:2})):k("",!0),d.value?(c(),z(me,{key:3})):k("",!0)])]))}},Pt=A(At,[["__scopeId","data-v-bd24a519"]]);export{Pt as default};
