import{_ as N,k as Q,n as T,r as i,j as H,I as X,d as te,o as c,c as _,a as e,e as Y,f as U,v as z,l as I,F as G,m as B,t as L,h as ae,x as A,y as Z,z as ee,A as V,B as M,p as J,g as K,u as se,b as q,q as oe,C as ne,T as ie,s as F}from"./index.d3122668.js";import{_ as le}from"./logo.eb5bb1d7.js";const D=v=>(J("data-v-290aa165"),v=v(),K(),v),ce={id:"galery"},re={key:0,class:"fixed z-5 w-full h-full",style:{background:"#75757559"}},de={class:"edit-dialog"},ue=D(()=>e("div",{class:"title flex"}," Editar un Trabajo ",-1)),_e={class:"field"},ve=D(()=>e("label",{for:"name"},"Imagen",-1)),me={class:"field"},ge=D(()=>e("label",{for:"description"},"Texto bajo la imagen",-1)),pe=D(()=>e("div",{class:"main-title"},"Galeria de Trabajos previos",-1)),fe={class:"container grid"},he={class:"col-4"},be={class:"login-form"},xe=D(()=>e("div",{class:"title flex"}," Subir una Imagen ",-1)),ye=D(()=>e("div",{class:"form-text"}," Las imagenes subidas apareceran en la seccion Trabajos previos del sitio web ",-1)),$e={class:"field"},Ce=D(()=>e("label",{for:"name"},"Imagen",-1)),ke={class:"field"},we=D(()=>e("label",{for:"description"},"Texto bajo la imagen",-1)),je={class:"col-8"},Te={class:"w-full"},Ee=D(()=>e("thead",null,[e("tr",{class:"grid"},[e("th",{class:"col text-center"},"Imagen"),e("th",{class:"col text-center"},"Descripci\xF3n"),e("th",{class:"col text-center"},"Acciones")])],-1)),Ie={class:"col text-center"},Ue=["src","alt"],ze={class:"col text-center"},De={class:"col text-center flex justify-content-center align-items-center"},Se=["onClick"],qe=["onClick"],Ve={class:"flex flex-wrap justify-content-center"},Ae=["onClick"],Pe={__name:"TableGalery",emits:["toasting"],setup(v,{emit:a}){const y=Q(T,"gallery"),o=i(),f=i([]),x=i(0),$=i(1),m=i(""),C=i(!1),w=i(),k=i(""),u=g=>{o.value=g.target.files[0]};H(()=>{X(y,g=>{let b=[],p=[];g.forEach(t=>{let d={id:t.id,name:t.data().name,description:t.data().description,url:t.data().url,created:t.data().created};b.length>=5&&(p.push(b),b=[]),b.push(d)}),b.length!=0&&(p.push(b),b=[]),$.value=p.length,f.value=p})});const l=()=>{let g=A.child("galeria/"+o.value.name),b={contentType:"img/jpeg"};g.put(o.value,b).then(p=>{p.task.snapshot.ref.getDownloadURL().then(t=>{Z(y,{name:"galeria/"+o.value.name,url:t,description:m.value,created:new Date}),a("toasting","Trabajo creado con \xE9xito","success"),m.value="",o.value=""}).catch(t=>{a("toasting","Error "+t.code+" al crear trabajo: "+t.message,"error")})}).catch(p=>{a("toasting","Error "+p.code+" al crear trabajo: "+p.message,"error")})},s=g=>{A.child(g.name).delete().then(p=>{ee(V(T,"gallery",g.id)),a("toasting","Trabajo eliminado con \xE9xito","success")}).catch(p=>{a("toasting","Error "+p.code+" al eliminar Trabajo: "+p.message,"error")})},r=g=>{x.value=g-1},j=g=>{g&&(w.value=g,k.value=g.description),C.value=!C.value},R=()=>{if(!o.value)return;let g=A.child(w.value.name),b={contentType:"img/jpeg"};g.put(o.value,b).then(p=>{p.task.snapshot.ref.getDownloadURL().then(t=>{M(V(T,"gallery",w.value.id),{url:t}),a("toasting","Imagen del trabajo actualizado con \xE9xito","success"),o.value=null}).catch(t=>{a("toasting","Error "+t.code+" al actualizar trabajo: "+t.message,"error")})}).catch(p=>{a("toasting","Error "+p.code+" al actualizar trabajo: "+p.message,"error")})},S=()=>{M(V(T,"gallery",w.value.id),{description:k.value}).then(()=>{a("toasting","Descripci\xF3n del trabajo actualizado con \xE9xito","success")}).catch(g=>{a("toasting","Error "+g.code+" al actualizar trabajo: "+g.message,"error")})};return(g,b)=>{const p=te("font-awesome-icon");return c(),_("div",ce,[C.value?(c(),_("div",re,[e("div",de,[e("div",{class:"boton-close select-none cursor-pointer",onClick:j},[Y(p,{icon:"fa-solid fa-xmark"})]),ue,e("div",_e,[ve,e("input",{onChange:u,type:"file",required:"true",accept:"image/*"},null,32),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:R},"Cambiar Imagen")])]),e("div",me,[ge,U(e("textarea",{id:"description",class:"outline-none",placeholder:"Descripci\xF3n","onUpdate:modelValue":b[0]||(b[0]=t=>k.value=t),required:"true",autofocus:""}," ",512),[[z,k.value]]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:S},"Cambiar Descripci\xF3n")])])])])):I("",!0),pe,e("div",fe,[e("div",he,[e("div",be,[xe,ye,e("div",$e,[Ce,e("input",{onChange:u,type:"file",required:"true",accept:"image/*"},null,32)]),e("div",ke,[we,U(e("textarea",{id:"description",class:"outline-none",placeholder:"Descripci\xF3n","onUpdate:modelValue":b[1]||(b[1]=t=>m.value=t),required:"true",autofocus:""}," ",512),[[z,m.value]])]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:l},"Subir")])])]),e("div",je,[e("table",Te,[Ee,e("tbody",null,[(c(!0),_(G,null,B(f.value[x.value],t=>(c(),_("tr",{key:t.id,class:"grid"},[e("td",Ie,[e("img",{src:t.url,alt:t.name,class:"galery-image"},null,8,Ue)]),e("td",ze,L(t.description),1),e("td",De,[e("div",{onClick:d=>j(t),class:"boton-action mx-2 select-none cursor-pointer"},"Editar",8,Se),ae(),e("div",{class:"boton-action mx-2 select-none cursor-pointer",onClick:d=>s(t)},"Eliminar",8,qe)])]))),128))]),e("tfoot",null,[e("div",Ve,[(c(!0),_(G,null,B($.value,t=>(c(),_("div",{class:"indices-tabla select-none cursor-pointer",onClick:d=>r(t),key:t},L(t),9,Ae))),128))])])])])])])}}},Le=N(Pe,[["__scopeId","data-v-290aa165"]]);const E=v=>(J("data-v-e6f7b5fe"),v=v(),K(),v),Re={id:"services"},Ge={key:0,class:"fixed z-5 w-full h-full",style:{background:"#75757559"}},Be={class:"edit-dialog"},Ne=E(()=>e("div",{class:"title flex"}," Editar un servicio ",-1)),Fe={class:"field"},Me=E(()=>e("label",{for:"title"},"Titulo",-1)),Oe={class:"field"},We=E(()=>e("label",{for:"name"},"Imagen",-1)),He={class:"field"},Je=E(()=>e("label",{for:"description"},"Texto bajo la imagen",-1)),Ke=E(()=>e("div",{class:"main-title"},"Servicios",-1)),Qe={class:"container grid"},Xe={class:"col-4"},Ye={class:"login-form"},Ze=E(()=>e("div",{class:"title flex"}," Crear un servicio ",-1)),et=E(()=>e("div",{class:"form-text"}," Los servicios apareceran en su seccion correspondiente en la pagina ",-1)),tt={class:"field"},st=E(()=>e("label",{for:"title"},"Titulo",-1)),at={class:"field"},ot=E(()=>e("label",{for:"name"},"Imagen",-1)),nt={class:"field"},it=E(()=>e("label",{for:"description"},"Texto bajo la imagen",-1)),lt={class:"col-8"},ct={class:"w-full"},rt=E(()=>e("thead",null,[e("tr",{class:"grid"},[e("th",{class:"col text-center"},"Titulo"),e("th",{class:"col text-center"},"Imagen"),e("th",{class:"col text-center"},"Descripci\xF3n"),e("th",{class:"col text-center"},"Acciones")])],-1)),dt={class:"col text-center"},ut={class:"col text-center"},_t=["src","alt"],vt={class:"col text-center"},mt={class:"col text-center flex justify-content-center align-items-center"},gt=["onClick"],pt=["onClick"],ft={class:"flex flex-wrap justify-content-center"},ht=["onClick"],bt={__name:"TableSevices",emits:["toasting"],setup(v,{emit:a}){const y=Q(T,"services"),o=i(),f=i([]),x=i(0),$=i(1),m=i(""),C=i(""),w=i(!1),k=i(),u=i(""),l=i(""),s=t=>{o.value=t.target.files[0]};H(()=>{X(y,t=>{let d=[],h=[];t.forEach(n=>{let W={id:n.id,title:n.data().title,name:n.data().name,description:n.data().description,url:n.data().url,created:n.data().created};d.length>=5&&(h.push(d),d=[]),d.push(W)}),d.length!=0&&(h.push(d),d=[]),$.value=h.length,f.value=h})});const r=()=>{let t=A.child("services/"+o.value.name),d={contentType:"img/jpeg"};t.put(o.value,d).then(h=>{h.task.snapshot.ref.getDownloadURL().then(n=>{Z(y,{title:m.value,name:"services/"+o.value.name,url:n,description:C.value,created:new Date}),a("toasting","Servicio creado con \xE9xito","success"),m.value="",C.value="",o.value=null}).catch(n=>{a("toasting","Error "+n.code+" al crear servicio: "+n.message,"error")})}).catch(h=>{a("toasting","Error "+h.code+" al crear servicio: "+h.message,"error")})},j=t=>{A.child(t.name).delete().then(h=>{ee(V(T,"services",t.id)),a("toasting","Servicio eliminado con \xE9xito","success")}).catch(h=>{a("toasting","Error "+h.code+" al eliminar servicio: "+h.message,"error")})},R=t=>{x.value=t-1},S=t=>{t&&(k.value=t,u.value=t.title,l.value=t.description),w.value=!w.value},g=()=>{M(V(T,"services",k.value.id),{title:u.value}).then(()=>{a("toasting","Titulo del servicio actualizado con \xE9xito","success")}).catch(t=>{a("toasting","Error "+t.code+" al actualizar servicio: "+t.message,"error")})},b=()=>{if(!o.value)return;let t=A.child(k.value.name),d={contentType:"img/jpeg"};t.put(o.value,d).then(h=>{h.task.snapshot.ref.getDownloadURL().then(n=>{M(V(T,"services",k.value.id),{url:n}),a("toasting","Imagen del servicio actualizado con \xE9xito","success"),o.value=null}).catch(n=>{a("toasting","Error "+n.code+" al actualizar servicio: "+n.message,"error")})}).catch(h=>{a("toasting","Error "+h.code+" al actualizar servicio: "+h.message,"error")})},p=()=>{M(V(T,"services",k.value.id),{description:l.value}).then(()=>{a("toasting","Descripci\xF3n del servicio actualizado con \xE9xito","success")}).catch(t=>{a("toasting","Error "+t.code+" al actualizar servicio: "+t.message,"error")})};return(t,d)=>{const h=te("font-awesome-icon");return c(),_("div",Re,[w.value?(c(),_("div",Ge,[e("div",Be,[e("div",{class:"boton-close select-none cursor-pointer",onClick:S},[Y(h,{icon:"fa-solid fa-xmark"})]),Ne,e("div",Fe,[Me,U(e("input",{id:"title",placeholder:"Titulo",class:"outline-none",name:"title",type:"text","onUpdate:modelValue":d[0]||(d[0]=n=>u.value=n),required:"true",autofocus:""},null,512),[[z,u.value,void 0,{trim:!0}]]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:g},"Cambiar Titulo")])]),e("div",Oe,[We,e("input",{onChange:s,type:"file",required:"true",accept:"image/*"},null,32),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:b},"Cambiar Imagen")])]),e("div",He,[Je,U(e("textarea",{id:"description",class:"outline-none",placeholder:"Descripci\xF3n","onUpdate:modelValue":d[1]||(d[1]=n=>l.value=n),required:"true",autofocus:""}," ",512),[[z,l.value]]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:p},"Cambiar Descripci\xF3n")])])])])):I("",!0),Ke,e("div",Qe,[e("div",Xe,[e("div",Ye,[Ze,et,e("div",tt,[st,U(e("input",{id:"title",placeholder:"Titulo",class:"outline-none",name:"title",type:"text","onUpdate:modelValue":d[2]||(d[2]=n=>m.value=n),required:"true",autofocus:""},null,512),[[z,m.value,void 0,{trim:!0}]])]),e("div",at,[ot,e("input",{onChange:s,type:"file",required:"true",accept:"image/*"},null,32)]),e("div",nt,[it,U(e("textarea",{id:"description",class:"outline-none",placeholder:"Descripci\xF3n","onUpdate:modelValue":d[3]||(d[3]=n=>C.value=n),required:"true",autofocus:""}," ",512),[[z,C.value]])]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:r},"Crear")])])]),e("div",lt,[e("table",ct,[rt,e("tbody",null,[(c(!0),_(G,null,B(f.value[x.value],n=>(c(),_("tr",{key:n.id,class:"grid"},[e("td",dt,L(n.title),1),e("td",ut,[e("img",{src:n.url,alt:n.name,class:"galery-image"},null,8,_t)]),e("td",vt,L(n.description),1),e("td",mt,[e("div",{onClick:W=>S(n),class:"boton-action mx-2 select-none cursor-pointer"},"Editar",8,gt),e("div",{class:"boton-action select-none cursor-pointer",onClick:W=>j(n)},"Eliminar",8,pt)])]))),128))]),e("tfoot",null,[e("div",ft,[(c(!0),_(G,null,B($.value,n=>(c(),_("div",{class:"indices-tabla select-none cursor-pointer",onClick:W=>R(n),key:n},L(n),9,ht))),128))])])])])])])}}},xt=N(bt,[["__scopeId","data-v-e6f7b5fe"]]);const P=v=>(J("data-v-ac9e1bc2"),v=v(),K(),v),yt={id:"users"},$t=P(()=>e("div",{class:"main-title"},"Usuario",-1)),Ct={class:"container grid"},kt={class:"col-4"},wt={key:0,class:"login-form"},jt=P(()=>e("div",{class:"title flex"}," Crear un usuario ",-1)),Tt=P(()=>e("div",{class:"form-text"}," Cree cuentas de usuarios para que entren a administraci\xF3n ",-1)),Et={class:"field"},It=P(()=>e("label",{for:"email"},"Email",-1)),Ut={class:"field"},zt=P(()=>e("label",{for:"password"},"Contrase\xF1a",-1)),Dt={class:"col-8"},St={key:0,class:"tab-options flex justify-content-between"},qt=P(()=>e("div",{class:"tab-text"}," Eliminar esta cuenta de usuario ",-1)),Vt={key:1,class:"tab-options"},At=P(()=>e("div",{class:"tab-text"}," Cambiar email de usuario ",-1)),Pt={class:"flex justify-content-between"},Lt={class:"tab-options"},Rt=P(()=>e("div",{class:"tab-text"}," Cambiar contrase\xF1a de usuario ",-1)),Gt={class:"flex justify-content-between"},Bt={__name:"TableUsers",emits:["toasting"],setup(v,{emit:a}){const y=se(),o=i(!1),f=i(""),x=i(""),$=i(""),m=i("");H(()=>{q.currentUser.email=="web.siac.automatizacion@gmail.com"||q.currentUser.email=="s.arce@siacmail.com"?o.value=!0:o.value=!1});const C=()=>{let l=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;!f.value.match(l)||f.value==""||$.value!=""&&q.createUserWithEmailAndPassword(f.value,$.value).then(s=>{f.value="",$.value="",a("toasting","Usuario creado con \xE9xito","success")}).catch(s=>{a("toasting","Error "+s.code+" al crear Usuario: "+s.message,"error")})},w=()=>{q.currentUser.delete().then(()=>{q.signOut(),y.push({name:"public"})}).catch(l=>{a("toasting","Error "+l.code+" al eliminar Usuario: "+l.message,"error")})},k=()=>{let l=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;!x.value.match(l)||x.value==""||q.currentUser.updateEmail(x.value).then(()=>{x.value="",a("toasting","Usuario actualizado con \xE9xito","success")}).catch(s=>{a("toasting","Error "+s.code+" al actualizar Usuario: "+s.message,"error")})},u=()=>{m.value!=""&&q.currentUser.updatePassword(m.value).then(()=>{m.value="",a("toasting","Usuario actualizado con \xE9xito","success")}).catch(l=>{a("toasting","Error "+l.code+" al actualizar Usuario: "+l.message,"error")})};return(l,s)=>(c(),_("div",yt,[$t,e("div",Ct,[e("div",kt,[o.value?(c(),_("div",wt,[jt,Tt,e("div",Et,[It,U(e("input",{id:"email",placeholder:"Email",class:"outline-none",name:"email",type:"text","onUpdate:modelValue":s[0]||(s[0]=r=>f.value=r),required:"true",autofocus:""},null,512),[[z,f.value,void 0,{trim:!0}]])]),e("div",Ut,[zt,U(e("input",{id:"password",placeholder:"Contrase\xF1a",class:"outline-none",name:"password",type:"text","onUpdate:modelValue":s[1]||(s[1]=r=>$.value=r),required:"true",autofocus:""},null,512),[[z,$.value,void 0,{trim:!0}]])]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:C},"Crear Usuario")])])):I("",!0)]),e("div",Dt,[o.value?I("",!0):(c(),_("div",St,[qt,e("div",{class:"boton-mail select-none cursor-pointer",onClick:w},"Eliminar Cuenta")])),o.value?I("",!0):(c(),_("div",Vt,[At,e("div",Pt,[U(e("input",{id:"email",placeholder:"Email",class:"input-mail outline-none",name:"email",type:"text","onUpdate:modelValue":s[2]||(s[2]=r=>x.value=r),required:"true",autofocus:""},null,512),[[z,x.value,void 0,{trim:!0}]]),e("div",{class:"boton-mail select-none cursor-pointer",onClick:k},"Actualizar Email")])])),e("div",Lt,[Rt,e("div",Gt,[U(e("input",{id:"password",placeholder:"Contrase\xF1a",class:"input-mail outline-none",name:"password",type:"text","onUpdate:modelValue":s[3]||(s[3]=r=>m.value=r),required:"true",autofocus:""},null,512),[[z,m.value,void 0,{trim:!0}]]),e("div",{class:"boton-mail select-none cursor-pointer",onClick:s[4]||(s[4]=(...r)=>u&&u(...r))},"Actualizar Contrase\xF1a")])])])])]))}},Nt=N(Bt,[["__scopeId","data-v-ac9e1bc2"]]);const O=v=>(J("data-v-a0d43693"),v=v(),K(),v),Ft={id:"clients"},Mt=O(()=>e("div",{class:"main-title"},"Clientes",-1)),Ot={class:"container grid"},Wt={class:"col-4"},Ht={class:"login-form"},Jt=O(()=>e("div",{class:"title flex"}," Agregar un cliente ",-1)),Kt=O(()=>e("div",{class:"form-text"}," Las imagenes subidas apareceran en la seccion de clientes ",-1)),Qt={class:"field"},Xt=O(()=>e("label",{for:"name"},"Imagen",-1)),Yt={class:"col-8"},Zt={class:"w-full"},es=O(()=>e("thead",null,[e("tr",{class:"grid"},[e("th",{class:"col text-center"},"Imagen"),e("th",{class:"col text-center"},"Acciones")])],-1)),ts={class:"col text-center"},ss=["src","alt"],as={class:"col text-center flex justify-content-center align-items-center"},os=["onClick"],ns={class:"flex flex-wrap justify-content-center"},is=["onClick"],ls={__name:"TableClients",emits:["toasting"],setup(v,{emit:a}){const y=Q(T,"clients"),o=i(),f=i([]),x=i(0),$=i(1),m=u=>{o.value=u.target.files[0]};H(()=>{X(y,u=>{let l=[],s=[];u.forEach(r=>{let j={id:r.id,name:r.data().name,url:r.data().url,created:r.data().created};l.length>=5&&(s.push(l),l=[]),l.push(j)}),l.length!=0&&(s.push(l),l=[]),$.value=s.length,f.value=s})});const C=()=>{let u=A.child("clients/"+o.value.name),l={contentType:"img/jpeg"};u.put(o.value,l).then(s=>{s.task.snapshot.ref.getDownloadURL().then(r=>{Z(y,{name:"clients/"+o.value.name,url:r,created:new Date}),a("toasting","Cliente creado con \xE9xito","success"),o.value=""}).catch(r=>{a("toasting","Error "+r.code+" al crear cliente: "+r.message,"error")})}).catch(s=>{a("toasting","Error "+s.code+" al crear cliente: "+s.message,"error")})},w=u=>{A.child(u.name).delete().then(s=>{ee(V(T,"clients",u.id)),a("toasting","Cliente eliminado con \xE9xito","success")}).catch(s=>{a("toasting","Error "+s.code+" al eliminar cliente: "+s.message,"error")})},k=u=>{x.value=u-1};return(u,l)=>(c(),_("div",Ft,[Mt,e("div",Ot,[e("div",Wt,[e("div",Ht,[Jt,Kt,e("div",Qt,[Xt,e("input",{onChange:m,type:"file",required:"true",accept:"image/*"},null,32)]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:C},"Subir")])])]),e("div",Yt,[e("table",Zt,[es,e("tbody",null,[(c(!0),_(G,null,B(f.value[x.value],s=>(c(),_("tr",{key:s.id,class:"grid"},[e("td",ts,[e("img",{src:s.url,alt:s.name,class:"galery-image"},null,8,ss)]),e("td",as,[e("div",{class:"boton-action select-none cursor-pointer",onClick:r=>w(s)},"Eliminar",8,os)])]))),128))]),e("tfoot",null,[e("div",ns,[(c(!0),_(G,null,B($.value,s=>(c(),_("div",{class:"indices-tabla select-none cursor-pointer",onClick:r=>k(s),key:s},L(s),9,is))),128))])])])])])]))}},cs=N(ls,[["__scopeId","data-v-a0d43693"]]);const rs={__name:"Toast",props:["message","type"],setup(v){const a=v;return(y,o)=>(c(),_("div",{id:"toast",class:"shadow-5 flex align-items-center justify-content-center",style:oe("background: "+a.type+";")},L(a.message),5))}},ds=N(rs,[["__scopeId","data-v-8e4e8980"]]);const us={id:"Admin"},_s={__name:"Admin",setup(v){const a=i(!1),y=i(!1),o=i(!0),f=i(!1),x=se(),$=i(""),m=i(""),C=i(!1),w=()=>{a.value=!0,o.value=!1,f.value=!1,y.value=!1},k=()=>{a.value=!1,o.value=!1,f.value=!0,y.value=!1},u=()=>{a.value=!1,o.value=!1,f.value=!1,y.value=!0},l=()=>{a.value=!1,o.value=!0,f.value=!1,y.value=!1},s=()=>{q.signOut(),x.push({name:"public"})},r=()=>{x.push({name:"public"})},j=(R,S)=>{$.value=R,S=="success"?m.value="#005da1":S=="warning"?m.value="#9c9426":m.value="#b14646",C.value=!0,setTimeout(function(){C.value=!1},2e3)};return(R,S)=>(c(),_("div",us,[Y(ie,{name:"fade"},{default:ne(()=>[C.value?(c(),F(ds,{key:0,message:$.value,type:m.value},null,8,["message","type"])):I("",!0)]),_:1}),e("div",{id:"navbar",class:"shadow-5 flex justify-content-between"},[e("img",{onClick:r,class:"z-5 logo cursor-pointer",src:le,alt:"Logo"}),e("div",{class:"flex justify-content-center"},[e("div",{onClick:l,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Servicios"),e("div",{onClick:k,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Galer\xEDa"),e("div",{onClick:u,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Clientes"),e("div",{onClick:w,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Usuario"),e("div",{onClick:s,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Cerrar Sesion")])]),e("div",null,[y.value?(c(),F(cs,{key:0,onToasting:j})):I("",!0),a.value?(c(),F(Nt,{key:1,onToasting:j})):I("",!0),o.value?(c(),F(xt,{key:2,onToasting:j})):I("",!0),f.value?(c(),F(Le,{key:3,onToasting:j})):I("",!0)])]))}},gs=N(_s,[["__scopeId","data-v-fcda2cf6"]]);export{gs as default};