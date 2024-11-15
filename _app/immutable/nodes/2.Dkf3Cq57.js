import{s as O,a as X,x as S,u as Z,g as K,b as Y,y as $e,z as A,A as we}from"../chunks/scheduler.CjZ6x9ss.js";import{S as F,i as J,y as Me,m as ie,z as We,a as I,d as p,A as re,g as y,h as _,k as b,l as N,B as de,u as W,v as V,w as B,x as G,e as D,s as P,t as me,c as E,f as T,b as he,o as d,j as Ne,C as Ce,D as Pe,n as Ve,q as Be}from"../chunks/index.BKEU58F2.js";function te(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function Q(a,e){const s={},l={},n={$$scope:1};let t=a.length;for(;t--;){const i=a[t],o=e[t];if(o){for(const m in i)m in o||(l[m]=1);for(const m in o)n[m]||(s[m]=o[m],n[m]=1);a[t]=o}else for(const m in i)n[m]=1}for(const i in l)i in s||(s[i]=void 0);return s}function x(a){return typeof a=="object"&&a!==null?a:{}}/**
 * @license lucide-svelte v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function ze(a,e,s){const l=a.slice();return l[11]=e[s][0],l[12]=e[s][1],l}function ue(a){let e,s=[a[12]],l={};for(let n=0;n<s.length;n+=1)l=S(l,s[n]);return{c(){e=Me(a[11]),this.h()},l(n){e=We(n,a[11],{}),I(e).forEach(p),this.h()},h(){re(e,l)},m(n,t){y(n,e,t)},p(n,t){re(e,l=Q(s,[t&32&&n[12]]))},d(n){n&&p(e)}}}function je(a){let e=a[11],s,l=a[11]&&ue(a);return{c(){l&&l.c(),s=ie()},l(n){l&&l.l(n),s=ie()},m(n,t){l&&l.m(n,t),y(n,s,t)},p(n,t){n[11]?e?O(e,n[11])?(l.d(1),l=ue(n),e=n[11],l.c(),l.m(s.parentNode,s)):l.p(n,t):(l=ue(n),e=n[11],l.c(),l.m(s.parentNode,s)):e&&(l.d(1),l=null,e=n[11])},d(n){n&&p(s),l&&l.d(n)}}}function Te(a){let e,s,l,n,t,i=te(a[5]),o=[];for(let r=0;r<i.length;r+=1)o[r]=je(ze(a,i,r));const m=a[10].default,u=X(m,a,a[9],null);let C=[Se,a[7],{width:a[2]},{height:a[2]},{stroke:a[1]},{"stroke-width":l=a[4]?Number(a[3])*24/Number(a[2]):a[3]},{class:n=a[6]("lucide-icon","lucide",a[0]?`lucide-${a[0]}`:"",a[8].class)}],h={};for(let r=0;r<C.length;r+=1)h=S(h,C[r]);return{c(){e=Me("svg");for(let r=0;r<o.length;r+=1)o[r].c();s=ie(),u&&u.c(),this.h()},l(r){e=We(r,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var c=I(e);for(let f=0;f<o.length;f+=1)o[f].l(c);s=ie(),u&&u.l(c),c.forEach(p),this.h()},h(){re(e,h)},m(r,c){y(r,e,c);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(e,null);_(e,s),u&&u.m(e,null),t=!0},p(r,[c]){if(c&32){i=te(r[5]);let f;for(f=0;f<i.length;f+=1){const $=ze(r,i,f);o[f]?o[f].p($,c):(o[f]=je($),o[f].c(),o[f].m(e,s))}for(;f<o.length;f+=1)o[f].d(1);o.length=i.length}u&&u.p&&(!t||c&512)&&Z(u,m,r,r[9],t?Y(m,r[9],c,null):K(r[9]),null),re(e,h=Q(C,[Se,c&128&&r[7],(!t||c&4)&&{width:r[2]},(!t||c&4)&&{height:r[2]},(!t||c&2)&&{stroke:r[1]},(!t||c&28&&l!==(l=r[4]?Number(r[3])*24/Number(r[2]):r[3]))&&{"stroke-width":l},(!t||c&257&&n!==(n=r[6]("lucide-icon","lucide",r[0]?`lucide-${r[0]}`:"",r[8].class)))&&{class:n}]))},i(r){t||(b(u,r),t=!0)},o(r){N(u,r),t=!1},d(r){r&&p(e),de(o,r),u&&u.d(r)}}}function Le(a,e,s){const l=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let n=$e(e,l),{$$slots:t={},$$scope:i}=e,{name:o=void 0}=e,{color:m="currentColor"}=e,{size:u=24}=e,{strokeWidth:C=2}=e,{absoluteStrokeWidth:h=!1}=e,{iconNode:r=[]}=e;const c=(...f)=>f.filter(($,k,j)=>!!$&&j.indexOf($)===k).join(" ");return a.$$set=f=>{s(8,e=S(S({},e),A(f))),s(7,n=$e(e,l)),"name"in f&&s(0,o=f.name),"color"in f&&s(1,m=f.color),"size"in f&&s(2,u=f.size),"strokeWidth"in f&&s(3,C=f.strokeWidth),"absoluteStrokeWidth"in f&&s(4,h=f.absoluteStrokeWidth),"iconNode"in f&&s(5,r=f.iconNode),"$$scope"in f&&s(9,i=f.$$scope)},e=A(e),[o,m,u,C,h,r,c,n,e,i,t]}class ne extends F{constructor(e){super(),J(this,e,Le,Te,O,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}function He(a){let e;const s=a[2].default,l=X(s,a,a[3],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,t){l&&l.m(n,t),e=!0},p(n,t){l&&l.p&&(!e||t&8)&&Z(l,s,n,n[3],e?Y(s,n[3],t,null):K(n[3]),null)},i(n){e||(b(l,n),e=!0)},o(n){N(l,n),e=!1},d(n){l&&l.d(n)}}}function Oe(a){let e,s;const l=[{name:"chevron-right"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[He]},$$scope:{ctx:a}};for(let t=0;t<l.length;t+=1)n=S(n,l[t]);return e=new ne({props:n}),{c(){W(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){B(e,t,i),s=!0},p(t,[i]){const o=i&3?Q(l,[l[0],i&2&&x(t[1]),i&1&&{iconNode:t[0]}]):{};i&8&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function qe(a,e,s){let{$$slots:l={},$$scope:n}=e;const t=[["path",{d:"m9 18 6-6-6-6"}]];return a.$$set=i=>{s(1,e=S(S({},e),A(i))),"$$scope"in i&&s(3,n=i.$$scope)},e=A(e),[t,e,l,n]}class Fe extends F{constructor(e){super(),J(this,e,qe,Oe,O,{})}}function Je(a){let e;const s=a[2].default,l=X(s,a,a[3],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,t){l&&l.m(n,t),e=!0},p(n,t){l&&l.p&&(!e||t&8)&&Z(l,s,n,n[3],e?Y(s,n[3],t,null):K(n[3]),null)},i(n){e||(b(l,n),e=!0)},o(n){N(l,n),e=!1},d(n){l&&l.d(n)}}}function Qe(a){let e,s;const l=[{name:"file-text"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[Je]},$$scope:{ctx:a}};for(let t=0;t<l.length;t+=1)n=S(n,l[t]);return e=new ne({props:n}),{c(){W(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){B(e,t,i),s=!0},p(t,[i]){const o=i&3?Q(l,[l[0],i&2&&x(t[1]),i&1&&{iconNode:t[0]}]):{};i&8&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function Re(a,e,s){let{$$slots:l={},$$scope:n}=e;const t=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];return a.$$set=i=>{s(1,e=S(S({},e),A(i))),"$$scope"in i&&s(3,n=i.$$scope)},e=A(e),[t,e,l,n]}class Ue extends F{constructor(e){super(),J(this,e,Re,Qe,O,{})}}function Xe(a){let e;const s=a[2].default,l=X(s,a,a[3],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,t){l&&l.m(n,t),e=!0},p(n,t){l&&l.p&&(!e||t&8)&&Z(l,s,n,n[3],e?Y(s,n[3],t,null):K(n[3]),null)},i(n){e||(b(l,n),e=!0)},o(n){N(l,n),e=!1},d(n){l&&l.d(n)}}}function Ze(a){let e,s;const l=[{name:"github"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[Xe]},$$scope:{ctx:a}};for(let t=0;t<l.length;t+=1)n=S(n,l[t]);return e=new ne({props:n}),{c(){W(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){B(e,t,i),s=!0},p(t,[i]){const o=i&3?Q(l,[l[0],i&2&&x(t[1]),i&1&&{iconNode:t[0]}]):{};i&8&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function Ke(a,e,s){let{$$slots:l={},$$scope:n}=e;const t=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];return a.$$set=i=>{s(1,e=S(S({},e),A(i))),"$$scope"in i&&s(3,n=i.$$scope)},e=A(e),[t,e,l,n]}class Ye extends F{constructor(e){super(),J(this,e,Ke,Ze,O,{})}}function ye(a){let e;const s=a[2].default,l=X(s,a,a[3],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,t){l&&l.m(n,t),e=!0},p(n,t){l&&l.p&&(!e||t&8)&&Z(l,s,n,n[3],e?Y(s,n[3],t,null):K(n[3]),null)},i(n){e||(b(l,n),e=!0)},o(n){N(l,n),e=!1},d(n){l&&l.d(n)}}}function xe(a){let e,s;const l=[{name:"instagram"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[ye]},$$scope:{ctx:a}};for(let t=0;t<l.length;t+=1)n=S(n,l[t]);return e=new ne({props:n}),{c(){W(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){B(e,t,i),s=!0},p(t,[i]){const o=i&3?Q(l,[l[0],i&2&&x(t[1]),i&1&&{iconNode:t[0]}]):{};i&8&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function et(a,e,s){let{$$slots:l={},$$scope:n}=e;const t=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]];return a.$$set=i=>{s(1,e=S(S({},e),A(i))),"$$scope"in i&&s(3,n=i.$$scope)},e=A(e),[t,e,l,n]}class tt extends F{constructor(e){super(),J(this,e,et,xe,O,{})}}function nt(a){let e;const s=a[2].default,l=X(s,a,a[3],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,t){l&&l.m(n,t),e=!0},p(n,t){l&&l.p&&(!e||t&8)&&Z(l,s,n,n[3],e?Y(s,n[3],t,null):K(n[3]),null)},i(n){e||(b(l,n),e=!0)},o(n){N(l,n),e=!1},d(n){l&&l.d(n)}}}function lt(a){let e,s;const l=[{name:"linkedin"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[nt]},$$scope:{ctx:a}};for(let t=0;t<l.length;t+=1)n=S(n,l[t]);return e=new ne({props:n}),{c(){W(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){B(e,t,i),s=!0},p(t,[i]){const o=i&3?Q(l,[l[0],i&2&&x(t[1]),i&1&&{iconNode:t[0]}]):{};i&8&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function st(a,e,s){let{$$slots:l={},$$scope:n}=e;const t=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];return a.$$set=i=>{s(1,e=S(S({},e),A(i))),"$$scope"in i&&s(3,n=i.$$scope)},e=A(e),[t,e,l,n]}class at extends F{constructor(e){super(),J(this,e,st,lt,O,{})}}function it(a){let e;const s=a[2].default,l=X(s,a,a[3],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,t){l&&l.m(n,t),e=!0},p(n,t){l&&l.p&&(!e||t&8)&&Z(l,s,n,n[3],e?Y(s,n[3],t,null):K(n[3]),null)},i(n){e||(b(l,n),e=!0)},o(n){N(l,n),e=!1},d(n){l&&l.d(n)}}}function rt(a){let e,s;const l=[{name:"mail"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[it]},$$scope:{ctx:a}};for(let t=0;t<l.length;t+=1)n=S(n,l[t]);return e=new ne({props:n}),{c(){W(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){B(e,t,i),s=!0},p(t,[i]){const o=i&3?Q(l,[l[0],i&2&&x(t[1]),i&1&&{iconNode:t[0]}]):{};i&8&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function ot(a,e,s){let{$$slots:l={},$$scope:n}=e;const t=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]];return a.$$set=i=>{s(1,e=S(S({},e),A(i))),"$$scope"in i&&s(3,n=i.$$scope)},e=A(e),[t,e,l,n]}class ct extends F{constructor(e){super(),J(this,e,ot,rt,O,{})}}function ft(a){let e,s,l,n,t,i,o,m,u,C,h,r,c,f,$;return f=new Fe({props:{size:60,class:"text-white transition-transform duration-300 ease-in-out group-hover:translate-x-2"}}),{c(){e=D("div"),s=D("img"),n=P(),t=D("div"),i=D("div"),o=D("h2"),m=me(a[0]),u=P(),C=D("div"),h=me(a[1]),r=P(),c=D("a"),W(f.$$.fragment),this.h()},l(k){e=E(k,"DIV",{class:!0});var j=I(e);s=E(j,"IMG",{src:!0,alt:!0,class:!0}),n=T(j),t=E(j,"DIV",{class:!0});var M=I(t);i=E(M,"DIV",{class:!0});var L=I(i);o=E(L,"H2",{class:!0});var ee=I(o);m=he(ee,a[0]),ee.forEach(p),L.forEach(p),u=T(M),C=E(M,"DIV",{class:!0});var q=I(C);h=he(q,a[1]),q.forEach(p),M.forEach(p),r=T(j),c=E(j,"A",{href:!0,target:!0,rel:!0,class:!0});var H=I(c);V(f.$$.fragment,H),H.forEach(p),j.forEach(p),this.h()},h(){we(s.src,l=a[2])||d(s,"src",l),d(s,"alt",a[0]),d(s,"class","absolute inset-0 z-20 h-full w-full object-cover object-center brightness-[.4] filter transition-all duration-300 ease-in-out group-hover:brightness-[.7]"),d(o,"class","title-text text-left text-3xl font-semibold text-white svelte-gf05zo"),d(i,"class","flex-grow"),d(C,"class","description-text mt-2 pr-5 text-left text-xl font-light text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 svelte-gf05zo"),d(t,"class","relative z-30 flex h-full w-full flex-col justify-between p-4"),d(c,"href",a[3]),d(c,"target","_blank"),d(c,"rel","noreferrer"),d(c,"class","absolute right-2 top-1/2 z-30 -translate-y-1/2"),d(e,"class","group relative z-10 h-20 w-full overflow-hidden rounded-[1.76rem] border-4 border-slate-400 transition-all duration-300 ease-in-out hover:h-[10.5rem]")},m(k,j){y(k,e,j),_(e,s),_(e,n),_(e,t),_(t,i),_(i,o),_(o,m),_(t,u),_(t,C),_(C,h),_(e,r),_(e,c),B(f,c,null),$=!0},p(k,[j]){(!$||j&4&&!we(s.src,l=k[2]))&&d(s,"src",l),(!$||j&1)&&d(s,"alt",k[0]),(!$||j&1)&&Ne(m,k[0]),(!$||j&2)&&Ne(h,k[1]),(!$||j&8)&&d(c,"href",k[3])},i(k){$||(b(f.$$.fragment,k),$=!0)},o(k){N(f.$$.fragment,k),$=!1},d(k){k&&p(e),G(f)}}}function ut(a,e,s){let{name:l="CourseCorrect"}=e,{description:n="Default Description"}=e,{image:t="https://via.placeholder.com/150"}=e,{link:i="https://www.google.com"}=e;return a.$$set=o=>{"name"in o&&s(0,l=o.name),"description"in o&&s(1,n=o.description),"image"in o&&s(2,t=o.image),"link"in o&&s(3,i=o.link)},[l,n,t,i]}class mt extends F{constructor(e){super(),J(this,e,ut,ft,O,{name:0,description:1,image:2,link:3})}}function De(a,e,s){const l=a.slice();return l[2]=e[s],l}function Ee(a,e,s){const l=a.slice();return l[5]=e[s],l}function Ie(a){let e,s,l;const n=[a[5]];let t={};for(let i=0;i<n.length;i+=1)t=S(t,n[i]);return s=new mt({props:t}),{c(){e=D("div"),W(s.$$.fragment),this.h()},l(i){e=E(i,"DIV",{class:!0});var o=I(e);V(s.$$.fragment,o),o.forEach(p),this.h()},h(){d(e,"class","pb-2")},m(i,o){y(i,e,o),B(s,e,null),l=!0},p(i,o){const m=o&1?Q(n,[x(i[5])]):{};s.$set(m)},i(i){l||(b(s.$$.fragment,i),l=!0)},o(i){N(s.$$.fragment,i),l=!1},d(i){i&&p(e),G(s)}}}function Ae(a){let e,s,l=a[2]+"",n,t,i,o,m=te(a[0][a[2]]),u=[];for(let h=0;h<m.length;h+=1)u[h]=Ie(Ee(a,m,h));const C=h=>N(u[h],1,1,()=>{u[h]=null});return{c(){e=D("div"),s=D("div"),n=me(l),t=P();for(let h=0;h<u.length;h+=1)u[h].c();i=P(),this.h()},l(h){e=E(h,"DIV",{class:!0});var r=I(e);s=E(r,"DIV",{class:!0});var c=I(s);n=he(c,l),c.forEach(p),t=T(r);for(let f=0;f<u.length;f+=1)u[f].l(r);i=T(r),r.forEach(p),this.h()},h(){d(s,"class","pb-5 pt-10 md:pt-0"),d(e,"class","flex flex-col md:px-1")},m(h,r){y(h,e,r),_(e,s),_(s,n),_(e,t);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(e,null);_(e,i),o=!0},p(h,r){if(r&1){m=te(h[0][h[2]]);let c;for(c=0;c<m.length;c+=1){const f=Ee(h,m,c);u[c]?(u[c].p(f,r),b(u[c],1)):(u[c]=Ie(f),u[c].c(),b(u[c],1),u[c].m(e,i))}for(Be(),c=m.length;c<u.length;c+=1)C(c);Ve()}},i(h){if(!o){for(let r=0;r<m.length;r+=1)b(u[r]);o=!0}},o(h){u=u.filter(Boolean);for(let r=0;r<u.length;r+=1)N(u[r]);o=!1},d(h){h&&p(e),de(u,h)}}}function ht(a){let e,s,l="Sambhav Gupta",n,t,i="I study math, computer science, and machine learning at Stanford",o,m,u,C,h,r,c,f,$,k,j,M,L,ee,q,H,oe,R,ae,ce,ge;C=new Ue({props:{size:se}}),c=new Ye({props:{class:"social-icon",size:se}}),k=new at({props:{class:"social-icon",size:se}}),L=new tt({props:{class:"social-icon",size:se}}),H=new ct({props:{class:"social-icon",size:se,strokeWidth:2}});let U=te(Object.keys(a[0])),w=[];for(let g=0;g<U.length;g+=1)w[g]=Ae(De(a,U,g));const Ge=g=>N(w[g],1,1,()=>{w[g]=null});return{c(){e=D("div"),s=D("div"),s.textContent=l,n=P(),t=D("div"),t.textContent=i,o=P(),m=D("div"),u=D("a"),W(C.$$.fragment),h=P(),r=D("a"),W(c.$$.fragment),f=P(),$=D("a"),W(k.$$.fragment),j=P(),M=D("a"),W(L.$$.fragment),ee=P(),q=D("button"),W(H.$$.fragment),oe=P(),R=D("div");for(let g=0;g<w.length;g+=1)w[g].c();this.h()},l(g){e=E(g,"DIV",{class:!0});var z=I(e);s=E(z,"DIV",{class:!0,"data-svelte-h":!0}),Ce(s)!=="svelte-4uwy2x"&&(s.textContent=l),n=T(z),t=E(z,"DIV",{class:!0,"data-svelte-h":!0}),Ce(t)!=="svelte-tz00fl"&&(t.textContent=i),o=T(z),m=E(z,"DIV",{class:!0});var v=I(m);u=E(v,"A",{href:!0,target:!0,rel:!0});var le=I(u);V(C.$$.fragment,le),le.forEach(p),h=T(v),r=E(v,"A",{href:!0,target:!0,rel:!0});var _e=I(r);V(c.$$.fragment,_e),_e.forEach(p),f=T(v),$=E(v,"A",{href:!0,target:!0,rel:!0});var ve=I($);V(k.$$.fragment,ve),ve.forEach(p),j=T(v),M=E(v,"A",{href:!0,target:!0,rel:!0});var pe=I(M);V(L.$$.fragment,pe),pe.forEach(p),ee=T(v),q=E(v,"BUTTON",{});var be=I(q);V(H.$$.fragment,be),be.forEach(p),v.forEach(p),oe=T(z),R=E(z,"DIV",{class:!0});var ke=I(R);for(let fe=0;fe<w.length;fe+=1)w[fe].l(ke);ke.forEach(p),z.forEach(p),this.h()},h(){d(s,"class","pt-12 text-6xl font-bold"),d(t,"class","pt-6 font-semibold"),d(u,"href","/Resume_Sambhav_Gupta.pdf"),d(u,"target","_blank"),d(u,"rel","noreferrer"),d(r,"href","https://github.com/sambhavg"),d(r,"target","_blank"),d(r,"rel","noreferrer"),d($,"href","https://www.linkedin.com/in/sambhav-g/"),d($,"target","_blank"),d($,"rel","noreferrer"),d(M,"href","https://www.instagram.com/sambhavgupta159/"),d(M,"target","_blank"),d(M,"rel","noreferrer"),d(m,"class","grid h-20 w-72 grid-cols-5 items-center justify-around pt-6"),d(R,"class","grid w-full grid-cols-1 items-start justify-around pt-6 text-4xl font-semibold md:px-10 lg:grid-cols-3"),d(e,"class","flex min-h-screen flex-col items-center justify-start bg-slate-800 px-3 text-center text-2xl text-white md:px-0")},m(g,z){y(g,e,z),_(e,s),_(e,n),_(e,t),_(e,o),_(e,m),_(m,u),B(C,u,null),_(m,h),_(m,r),B(c,r,null),_(m,f),_(m,$),B(k,$,null),_(m,j),_(m,M),B(L,M,null),_(m,ee),_(m,q),B(H,q,null),_(e,oe),_(e,R);for(let v=0;v<w.length;v+=1)w[v]&&w[v].m(R,null);ae=!0,ce||(ge=Pe(q,"click",a[1]),ce=!0)},p(g,[z]){if(z&1){U=te(Object.keys(g[0]));let v;for(v=0;v<U.length;v+=1){const le=De(g,U,v);w[v]?(w[v].p(le,z),b(w[v],1)):(w[v]=Ae(le),w[v].c(),b(w[v],1),w[v].m(R,null))}for(Be(),v=U.length;v<w.length;v+=1)Ge(v);Ve()}},i(g){if(!ae){b(C.$$.fragment,g),b(c.$$.fragment,g),b(k.$$.fragment,g),b(L.$$.fragment,g),b(H.$$.fragment,g);for(let z=0;z<U.length;z+=1)b(w[z]);ae=!0}},o(g){N(C.$$.fragment,g),N(c.$$.fragment,g),N(k.$$.fragment,g),N(L.$$.fragment,g),N(H.$$.fragment,g),w=w.filter(Boolean);for(let z=0;z<w.length;z+=1)N(w[z]);ae=!1},d(g){g&&p(e),G(C),G(c),G(k),G(L),G(H),de(w,g),ce=!1,ge()}}}let se=40;function dt(a){return[{Work:[{name:"Jane Street",description:"Incoming Quant Trader",image:"images/image_jane.png",link:"https://www.janestreet.com/"},{name:"Samsung Semiconductor",description:"Storage Software Engineer on Memory Solutions Lab (MSL) - Data Fabric Solutions team. Developed software for CXL devices",image:"images/cxl_2.png",link:"https://samsungmsl.com/dfs/"},{name:"Amazon",description:"SDE intern on operations team. Developed and deployed internal AWS application",image:"images/image_warehouse.jpg",link:"https://amazon.com"},{name:"Bobyard",description:"Contech startup Principal Engineer. Startup raised $3.5M seed from Primary",image:"images/image_construction.jpg",link:"https://bobyard.com"},{name:"Amherst Group",description:"Research intern. Modeled growth regions with high accuracy using NN models",link:"https://www.amherst.com/",image:"images/image_buildings.jpg"}],Projects:[{name:"CourseCorrect",description:"A fully automatic Stanford 5 year course planner",image:"/images/coursecorrect_2.png",link:"/coursecorrect"},{name:"Dine",description:"See all dining hall menus at once",image:"/images/dine.png",link:"/dine"},{name:"Medals",description:"A 3D visualization of the Olympic medals counted in every possible way",image:"/images/medals.png",link:"/medal"},{name:"QuadCorp",description:"Game for learning quadric surfaces, with Lawrence Technological University",image:"/images/image_radar.jpg",link:"/QuadCorp-WebGL"},{name:"Tetris",description:"A Processing (Java) implementation of classic Tetris",image:"/images/image_tetris.jpg",link:"https://github.com/SambhavG/Classic-Tetris"},{name:"3D Art",description:"Blender art and animation",image:"/images/image_tree.jpg",link:"https://www.instagram.com/sambhavgupta159/"}],Publications:[{name:"Blog",description:"Where I write about interesting things",image:"/images/blog.png",link:"/blog"},{name:"Burnt Pancake Graphs",description:"CFSMP graph theory research published in IJCM:CST",image:"/images/image_cpu.jpg",link:"https://www.tandfonline.com/doi/abs/10.1080/23799927.2022.2110159?journalCode=tcom20"}]},()=>window.location.href="mailto:samgupta@stanford.edu"]}class vt extends F{constructor(e){super(),J(this,e,dt,ht,O,{})}}export{vt as component};