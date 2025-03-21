import{j as e,r as o,W as _,ad as X,n as Y,u as Z,d as ee,ae as se,o as re,af as oe,a7 as h,S as d,b as te,Q as ae,ag as ne,ah as ie,L as ce,ai as le,aj as de}from"./index-D5nzqchR.js";import{A as me}from"./AvatarCard-AXJhVlul.js";import{U as pe}from"./UserItem-DXt-HfdY.js";import{b as g,a as ue,D as xe,B as he,M as ge}from"./Menu-B9BPi3QO.js";import{c as j,T as x}from"./Typography-1nQW5jSD.js";import{C as je}from"./CircularProgress-DE7C-RCX.js";import{B as y}from"./Modal-B4RS4siC.js";import{M as u}from"./IconButton-D_lXahTx.js";import{M as fe}from"./Tooltip-BQ13i9eB.js";import{T as be}from"./TextField-BCeHNm3V.js";import{B as L}from"./Button-B8ILfpcq.js";import{D as Me,A as ve}from"./Delete-BB0zrGuG.js";import"./Menu-B5zeCvBD.js";import"./Avatar-DtbMtKou.js";import"./ListItem-CB97lBsq.js";import"./isMuiElement-DRgL1YLt.js";const De=j(e.jsx("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"}),"Done"),Ie=j(e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),ke=j(e.jsx("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace"),Ce=o.lazy(()=>_(()=>import("./ConfirmDeleteDialog-BTw7xzDJ.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),Ge=o.lazy(()=>_(()=>import("./AddMemberDialog-BFdariK0.js"),__vite__mapDeps([7,1,8,9,4,3,10,11,5,12,13,14,2,6]))),Qe=()=>{var G,E;const s=X()[0].get("group"),a=Y(),c=Z(),{isAddMember:n}=ee(r=>r.misc),t=se(""),i=re({chatId:s,populate:!0},{skip:!s}),[A,f]=g(ne),[B,w]=g(ie),[N,ye]=g(ce),[z,b]=o.useState(!1),[R,m]=o.useState(!1),[M,v]=o.useState(!1),[D,p]=o.useState(""),[I,l]=o.useState(""),[H,k]=o.useState([]),T=[{isError:t.isError,error:t.error},{isError:i.isError,error:i.error}];ue(T),o.useEffect(()=>{const r=i.data;return r&&(p(r.chat.name),l(r.chat.name),k(r.chat.members)),()=>{p(""),l(""),k([]),m(!1)}},[i.data]);const U=()=>{a("/")},F=()=>{b(r=>!r)},P=()=>b(!1),V=()=>{m(!1),A("Updating Group Name...",{chatId:s,name:I})},O=()=>{v(!0)},C=()=>{v(!1)},Q=()=>{c(de(!0))},$=()=>{N("Deleting Group...",s),C(),a("/groups")},K=r=>{B("Removing Member...",{chatId:s,userId:r})};o.useEffect(()=>(s&&(p(`Group Name ${s}`),l(`Group Name ${s}`)),()=>{p(""),l(""),m(!1)}),[s]);const W=e.jsxs(e.Fragment,{children:[e.jsx(he,{sx:{display:{xs:"block",sm:"none",position:"fixed",right:"1rem",top:"1rem"}},children:e.jsx(u,{onClick:F,children:e.jsx(ge,{})})}),e.jsx(fe,{title:"back",children:e.jsx(u,{sx:{position:"absolute",top:"2rem",left:"2rem",bgcolor:le,color:"white",":hover":{bgcolor:"rgba(0,0,0,0.7)"}},onClick:U,children:e.jsx(ke,{})})})]}),q=e.jsx(d,{direction:"row",alignItems:"center",justifyContent:"center",spacing:"1rem",padding:"3rem",children:R?e.jsxs(e.Fragment,{children:[e.jsx(be,{value:I,onChange:r=>l(r.target.value)}),e.jsx(u,{onClick:V,disabled:f,children:e.jsx(De,{})})]}):e.jsxs(e.Fragment,{children:[e.jsx(x,{variant:"h4",children:D}),e.jsx(u,{disabled:f,onClick:()=>m(!0),children:e.jsx(Ie,{})})]})}),J=e.jsxs(d,{direction:{xs:"column-reverse",sm:"row"},spacing:"1rem",p:{xs:"0",sm:"1rem",md:"1rem 4rem"},children:[e.jsx(L,{size:"large",color:"error",startIcon:e.jsx(Me,{}),onClick:O,children:"Delete Group"}),e.jsx(L,{size:"large",variant:"contained",startIcon:e.jsx(ve,{}),onClick:Q,children:"Add Member"})]});return t.isLoading?e.jsx(oe,{}):e.jsxs(h,{container:!0,height:"100vh",children:[e.jsx(h,{item:!0,sx:{display:{xs:"none",sm:"block"}},sm:4,children:e.jsx(S,{myGroups:(G=t==null?void 0:t.data)==null?void 0:G.groups,chatId:s})}),e.jsxs(h,{item:!0,xs:12,sm:8,sx:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",padding:"1rem 3rem"},children:[W,D&&e.jsxs(e.Fragment,{children:[q,e.jsx(x,{margin:"2rem",alignSelf:"flex-start",variant:"body1",children:"Members"}),e.jsx(d,{maxWidth:"45rem",width:"100%",boxSizing:"border-box",padding:{sm:"1rem",xs:"0",md:"1rem 4rem"},spacing:"2rem",height:"50vh",overflow:"auto",children:w?e.jsx(je,{}):H.map(r=>e.jsx(pe,{user:r,isAdded:!0,styling:{boxShadow:"0 0 0.5rem  rgba(0,0,0,0.2)",padding:"1rem 2rem",borderRadius:"1rem"},handler:K},r._id))}),J]})]}),n&&e.jsx(o.Suspense,{fallback:e.jsx(y,{open:!0}),children:e.jsx(Ge,{chatId:s})}),M&&e.jsx(o.Suspense,{fallback:e.jsx(y,{open:!0}),children:e.jsx(Ce,{open:M,handleClose:C,deleteHandler:$})}),e.jsx(xe,{sx:{display:{xs:"block",sm:"none"}},open:z,onClose:P,children:e.jsx(S,{w:"50vw",myGroups:(E=t==null?void 0:t.data)==null?void 0:E.groups,chatId:s})})]})},S=({w:s="100%",myGroups:a=[],chatId:c})=>e.jsx(d,{width:s,sx:{backgroundImage:te,height:"100vh",overflow:"auto"},children:a.length>0?a.map(n=>e.jsx(Ee,{group:n,chatId:c},n._id)):e.jsx(x,{textAlign:"center",padding:"1rem",children:"No groups"})}),Ee=o.memo(({group:s,chatId:a})=>{const{name:c,avatar:n,_id:t}=s;return e.jsx(ae,{to:`?group=${t}`,onClick:i=>{a===t&&i.preventDefault()},children:e.jsxs(d,{direction:"row",spacing:"1rem",alignItems:"center",children:[e.jsx(me,{avatar:n}),e.jsx(x,{children:c})]})})});export{Qe as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ConfirmDeleteDialog-BTw7xzDJ.js","assets/index-D5nzqchR.js","assets/DialogTitle-Br3zGrkv.js","assets/Modal-B4RS4siC.js","assets/Menu-B5zeCvBD.js","assets/Typography-1nQW5jSD.js","assets/Button-B8ILfpcq.js","assets/AddMemberDialog-BFdariK0.js","assets/UserItem-DXt-HfdY.js","assets/ListItem-CB97lBsq.js","assets/isMuiElement-DRgL1YLt.js","assets/Avatar-DtbMtKou.js","assets/IconButton-D_lXahTx.js","assets/Delete-BB0zrGuG.js","assets/Menu-B9BPi3QO.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
