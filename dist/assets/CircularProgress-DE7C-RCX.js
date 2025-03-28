import{z as N,B as z,aC as D,D as v,E as n,F as o,aD as M,r as E,G as U,H as w,j as g,J as F,K as I}from"./index-D5nzqchR.js";function K(r){return N("MuiCircularProgress",r)}z("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const B=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,S,b,$;const t=44,G=D(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),W=D(S||(S=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),H=r=>{const{classes:e,variant:s,color:a,disableShrink:d}=r,u={root:["root",s,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,d&&"circleDisableShrink"]};return I(u,K,e)},J=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${n(s.color)}`]]}})(({ownerState:r,theme:e})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&M(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),G)),L=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),T=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${n(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&M($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),W)),V=E.forwardRef(function(e,s){const a=U({props:e,name:"MuiCircularProgress"}),{className:d,color:u="primary",disableShrink:R=!1,size:m=40,style:_,thickness:i=3.6,value:h=0,variant:k="indeterminate"}=a,j=w(a,B),c=o({},a,{color:u,disableShrink:R,size:m,thickness:i,value:h,variant:k}),p=H(c),f={},x={},C={};if(k==="determinate"){const y=2*Math.PI*((t-i)/2);f.strokeDasharray=y.toFixed(3),C["aria-valuenow"]=Math.round(h),f.strokeDashoffset=`${((100-h)/100*y).toFixed(3)}px`,x.transform="rotate(-90deg)"}return g.jsx(J,o({className:F(p.root,d),style:o({width:m,height:m},x,_),ownerState:c,ref:s,role:"progressbar"},C,j,{children:g.jsx(L,{className:p.svg,ownerState:c,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:g.jsx(T,{className:p.circle,style:f,ownerState:c,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))}),q=V;export{q as C};
