(this["webpackJsonpvr-exhibition"]=this["webpackJsonpvr-exhibition"]||[]).push([[0],{17:function(e,n,t){},18:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var i=t(8),o=t.n(i),d=t(11),a=t.n(d),r=(t(17),t(0)),c=t(3),u=t(1),s=t(2),m=t(6),v=(t(18),t.p+"static/media/Section01.2538bec8.png"),p=t(9),f=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,n,t,i=!1,o=0,d=0,a=0,r=0,c=0,u=0,s=0,p=0;function f(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}function l(e){!1!==e.isPrimary&&(i=!0,o=e.clientX,d=e.clientY,r=a,u=c,document.addEventListener("pointermove",w),document.addEventListener("pointerup",h))}function w(e){!1!==e.isPrimary&&(a=.1*(o-e.clientX)+r,c=.1*(e.clientY-d)+u)}function h(){i=!1,document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",h)}function b(n){var t=e.fov+.05*n.deltaY;e.fov=m.a.clamp(t,10,75),e.updateProjectionMatrix()}!function(){e=new m.d(75,window.innerWidth/window.innerHeight,1,1100),n=new m.e;var i=new m.f(500,60,40);i.scale(-1,1,1);var o=(new m.g).load(v),d=new m.c({map:o}),a=new m.b(i,d);n.add(a),(t=new m.h).setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement),document.body.style.touchAction="none",document.body.addEventListener("pointerdown",l),document.addEventListener("wheel",b),document.addEventListener("dragover",(function(e){e.preventDefault(),e.dataTransfer.dropEffect="copy"})),document.addEventListener("dragenter",(function(){document.body.style.opacity=.5})),document.addEventListener("dragleave",(function(){document.body.style.opacity=1})),document.addEventListener("drop",(function(e){e.preventDefault();var n=new FileReader;n.addEventListener("load",(function(e){d.map.image.src=e.target.result,d.map.needsUpdate=!0})),n.readAsDataURL(e.dataTransfer.files[0]),document.body.style.opacity=1})),window.addEventListener("resize",f)}(),function o(){requestAnimationFrame(o),function(){!1===i&&(a+=.1);c=Math.max(-85,Math.min(85,c)),s=m.a.degToRad(90-c),p=m.a.degToRad(a);var o=500*Math.sin(s)*Math.cos(p),d=500*Math.cos(s),r=500*Math.sin(s)*Math.sin(p);e.lookAt(o,d,r),t.render(n,e)}()}()}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{ref:function(n){return e.mount=n}})}}]),t}(i.Component),l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,i=n.getFID,o=n.getFCP,d=n.getLCP,a=n.getTTFB;t(e),i(e),o(e),d(e),a(e)}))};a.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root")),l()}},[[21,1,2]]]);
//# sourceMappingURL=main.3074abc7.chunk.js.map