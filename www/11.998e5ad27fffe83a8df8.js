(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{dgmN:function(t,n,e){"use strict";e.r(n),e.d(n,"PagesPageModule",function(){return d});var i=e("ofXK"),o=e("3Pt+"),r=e("TEn/"),c=e("tyNb"),a=e("mrSG"),l=e("fXoL"),u=e("lGQG");let s=(()=>{class t{constructor(t,n){this.AuthService=t,this.router=n}canActivate(){return Object(a.a)(this,void 0,void 0,function*(){return this.AuthService.TokenValidate().then(t=>t||(this.router.navigateByUrl("/login"),t))})}}return t.\u0275fac=function(n){return new(n||t)(l.Rb(u.a),l.Rb(c.g))},t.\u0275prov=l.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const b=[{path:"",component:(()=>{class t{constructor(t){this.AuthService=t}ngOnInit(){}signOut(){this.AuthService.signOut()}}return t.\u0275fac=function(n){return new(n||t)(l.Kb(u.a))},t.\u0275cmp=l.Eb({type:t,selectors:[["app-pages"]],decls:25,vars:0,consts:[["side","start","menuId","first","contentId","main"],["color","primary"],["routerLink","/home/settings",1,"item1"],["name","settings-outline"],["routerLink","/home/to-do",1,"item1"],["name","clipboard-outline"],["routerLink","",1,"item1",3,"click"],["name","log-out-outline"],["id","main"]],template:function(t,n){1&t&&(l.Nb(0,"ion-app"),l.Nb(1,"ion-menu",0),l.Nb(2,"ion-header"),l.Nb(3,"ion-toolbar",1),l.Nb(4,"ion-title"),l.hc(5,"Start Menu"),l.Mb(),l.Mb(),l.Mb(),l.Nb(6,"ion-content"),l.Nb(7,"ion-list"),l.Nb(8,"ion-menu-toggle"),l.Nb(9,"ion-item",2),l.Lb(10,"ion-icon",3),l.hc(11," \xa0 "),l.Nb(12,"ion-label"),l.hc(13,"settings"),l.Mb(),l.Mb(),l.Nb(14,"ion-item",4),l.Lb(15,"ion-icon",5),l.hc(16," \xa0 "),l.Nb(17,"ion-label"),l.hc(18,"To-Do"),l.Mb(),l.Mb(),l.Nb(19,"ion-item",6),l.Vb("click",function(){return n.signOut()}),l.Lb(20,"ion-icon",7),l.hc(21," \xa0 "),l.Nb(22,"ion-label"),l.hc(23,"Sign Out"),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Lb(24,"ion-router-outlet",8),l.Mb())},directives:[r.c,r.r,r.l,r.z,r.y,r.j,r.q,r.t,r.o,r.D,c.h,r.m,r.p,r.u],styles:[".item1[_ngcontent-%COMP%]{cursor:pointer}"]}),t})(),children:[{path:"",canActivate:[s],loadChildren:()=>Promise.all([e.e(0),e.e(10)]).then(e.bind(null,"99Un")).then(t=>t.HomePageModule)},{path:"settings",canActivate:[s],loadChildren:()=>Promise.all([e.e(0),e.e(12)]).then(e.bind(null,"yPrK")).then(t=>t.SettingsPageModule)},{path:"to-do",canActivate:[s],loadChildren:()=>Promise.all([e.e(0),e.e(13)]).then(e.bind(null,"oAh4")).then(t=>t.ToDoPageModule)}]}];let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.Ib({type:t}),t.\u0275inj=l.Hb({imports:[[c.i.forChild(b)],c.i]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.Ib({type:t}),t.\u0275inj=l.Hb({imports:[[i.b,o.a,r.A,h]]}),t})()}}]);