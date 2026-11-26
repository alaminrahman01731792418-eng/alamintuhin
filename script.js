/* Alamin Rahman Tuhin – Portfolio script. Edit your content in the section below. */
document.documentElement.classList.add("js");
addEventListener("error",()=>{const i=document.getElementById("ai");if(i)i.remove();document.body.classList.remove("lock");document.querySelectorAll("#pt .ch,#me,.hi,.nm,.rl,.tx p,.tx .btns,.st li,.tag1").forEach(e=>e.style.opacity=1)});
/* ===== EDIT YOUR CONTENT HERE ===== */
const CONFIG={formEndpoint:""}; // paste a Formspree/EmailJS-style endpoint to enable sending
const SKILLS=[["Mobile","Flutter","Dart","Android Development"],["Backend & Data","Firebase","Cloud Firestore","Realtime Database","REST APIs","PHP","MySQL"],["AI & Automation","AI Integration","Python","Workflow Automation","API Integration"],["Tools","Git","GitHub","VS Code","Android Studio","Figma"]];
const PROJECTS=[
["ArrowFlux","Game • Flutter","An offline arrow puzzle game built with Flutter.",["Flutter","Dart"],"Concept / in development"],
["TakaFlow","Fintech • AI","An AI-powered personal finance management application concept.",["Flutter","AI","Firebase"],"Concept"],
["Pulse Messenger","Messaging • Firebase","A real-time messaging application concept using Firebase.",["Flutter","Firebase","RTDB"],"Concept"],
["AI English Learning","EdTech • AI","An application concept for interactive English learning.",["Flutter","AI"],"Concept"],
["Water Reminder","Health • Utility","A personal hydration reminder application.",["Flutter","Notifications"],"Personal project"],
["JARVIS X","AI • Desktop","A personal AI assistant for desktop automation.",["Python","AI","Automation"],"Personal project"],
["Flutter Firebase Applications","Mobile • Backend","Mobile applications integrating authentication, databases, notifications, and APIs.",["Flutter","Firebase","REST API"],"Multiple apps"]];
const JOURNEY=[["Learning Programming","Add date","Write a short note about how it started."],["Discovering Flutter","Add date","Add a short description."],["Building Mobile Applications","Add date","Add a short description."],["Working with Firebase and APIs","Add date","Add a short description."],["Exploring AI Development","Add date","Add a short description."],["Building Automation and SaaS Projects","Add date","Add a short description."]];
const SERVICES=[["▣","Flutter Mobile App Development","Cross-platform Android apps with clean, scalable Flutter code."],["◈","Firebase Integration","Authentication, Firestore, Realtime Database and notifications."],["⇄","API Integration","REST APIs, JSON handling and backend connections."],["✦","AI Application Development","Apps that use AI to do something genuinely useful."],["⟳","Automation Solutions","Workflows and tools that remove repetitive work."],["◐","SaaS Product Development","From idea to a working, maintainable product."]];
const LINKS=[["Email","your@email.com","mailto:your@email.com"],["LinkedIn","add link","https://linkedin.com/"],["GitHub","add link","https://github.com/"],["Fiverr","add link","https://fiverr.com/"]];
/* =================================== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches,FINE=matchMedia("(pointer:fine)").matches;
$("#sk").innerHTML=SKILLS.map((s,i)=>`<div><span class="fl">${i+1}</span><h3>${s[0]}</h3><ul>${s.slice(1).map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("");
$("#pl").innerHTML=PROJECTS.map((p,i)=>`<button class="pr" type="button" data-i="${i}"><span class="nu">0${i+1}</span><h3>${p[0]}</h3><span class="ct">${p[1]}</span><span class="ar">↗</span></button>`).join("");
$("#jr").insertAdjacentHTML("beforeend",JOURNEY.map(j=>`<div class="ji" data-r><small>${j[1].toUpperCase()}</small><h3>${j[0]}</h3><p>${j[2]}</p></div>`).join(""));
$("#sv").innerHTML=SERVICES.map(s=>`<div class="sc2" data-r><span class="ic">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join("");
$("#lk").innerHTML=LINKS.map(l=>`<a href="${l[2]}" target="_blank" rel="noopener">${l[0]}<span>${l[1]}</span></a>`).join("");
const GR=["linear-gradient(135deg,#ff263d,#1a0408 70%)","linear-gradient(135deg,#2a0b10,#ff263d 120%)","linear-gradient(200deg,#101010,#b0152a)","linear-gradient(120deg,#ff263d,#101010 60%)","linear-gradient(160deg,#3a0810,#101010)","linear-gradient(135deg,#101010,#ff263d 140%)","linear-gradient(135deg,#ff263d33,#050505)"];
/* ---------- sound (off by default) ---------- */
let AC=null,snd=false;function beep(f=520,t=.07){if(!snd)return;try{AC=AC||new AudioContext();const o=AC.createOscillator(),g=AC.createGain();o.frequency.value=f;o.type="sine";g.gain.setValueAtTime(.04,AC.currentTime);g.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+t);o.connect(g).connect(AC.destination);o.start();o.stop(AC.currentTime+t)}catch(e){}}
$("#snd").onclick=e=>{snd=!snd;e.target.textContent="Sound: "+(snd?"on":"off");e.target.setAttribute("aria-pressed",snd);beep(700)};
/* ---------- split text ---------- */
function split(el){const out=[];el.childNodes.forEach(n=>{if(n.nodeType===3){const f=document.createDocumentFragment();[...n.textContent].forEach(c=>{if(c===" "){f.append(" ");return}const s=document.createElement("span");s.className="ch";s.textContent=c;f.append(s);out.push(s)});n.replaceWith(f)}else if(n.nodeType===1&&n.tagName!=="BR"){out.push(...split(n))}});return out}
/* ---------- start (after intro) ---------- */
function start(){document.body.classList.remove("lock");if(!window.gsap)return;gsap.registerPlugin(ScrollTrigger);
$$("[data-sp]").forEach(h=>{const cs=split(h);if(RM)return;gsap.from(cs,{yPercent:110,opacity:0,duration:.9,stagger:.025,ease:"power4.out",scrollTrigger:{trigger:h,start:"top 85%"}})});
if(!RM){$$("[data-r]").forEach(e=>gsap.from(e,{y:50,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 88%"}}));
gsap.from("#pic",{clipPath:"inset(0 100% 0 0)",duration:1.4,ease:"power4.inOut",scrollTrigger:{trigger:"#pic",start:"top 80%"}});
gsap.to("#pic img",{yPercent:-9,ease:"none",scrollTrigger:{trigger:"#pic",scrub:true}});
gsap.from(".pr",{opacity:0,y:40,stagger:.08,duration:.8,scrollTrigger:{trigger:"#pl",start:"top 85%"}});
gsap.from(".sk>div",{opacity:0,y:40,stagger:.1,duration:.8,scrollTrigger:{trigger:"#sk",start:"top 85%"}})}
gsap.to("#jl",{scaleY:1,ease:"none",scrollTrigger:{trigger:"#jr",start:"top 60%",end:"bottom 70%",scrub:true}});
gsap.to("#prog",{scaleX:1,ease:"none",scrollTrigger:{start:0,end:"max",scrub:true}})}
/* ---------- opening: AI agents assemble the page ---------- */
$("#me").src=$("#pic img").src;
const HP=["#pt .ch","#me",".hi",".nm",".rl",".tx p",".tx .btns",".st li",".tag1"];
if(!RM)split($("#pt"));
(function intro(){const I=$("#ai"),AG=$("#ag");let done=false,phase=1,rects=[],tl;
document.body.classList.add("lock");
const COL=["#ff4d4d","#33d6ff","#5dff8a","#ff7ad9","#ffd23f","#a78bff"],TG=["Flutter","Firebase","AI","API","UI","Dart","Automation","SaaS"],N=innerWidth<700?10:16,ags=[];
for(let i=0;i<N;i++){const c=COL[i%6],d=document.createElement("div");d.className="ag";d.innerHTML=`<svg width="20" height="20" viewBox="0 0 24 24"><path d="M3 2l17 8-7 2-3 7z" fill="${c}" stroke="#000" stroke-width="1"/></svg>`+(i<8?`<span style="background:${c}">${TG[i]}</span>`:"");AG.append(d);ags.push(d)}
addEventListener("scroll",()=>{AG.style.opacity=Math.max(0,1-scrollY/(innerHeight*.8))},{passive:true});
function pt(){const W=innerWidth,H=innerHeight;if(phase===1)return[W/2+(Math.random()-.5)*240,H/2+(Math.random()-.5)*170];
if(phase===2&&rects.length){const r=rects[(Math.random()*rects.length)|0];return[Math.random()<.5?r.left:r.right,Math.random()<.5?r.top:r.bottom]}
return[40+Math.random()*(W-100),90+Math.random()*(H-190)]}
function wander(a){const p=pt();gsap.to(a,{x:p[0],y:p[1],rotation:(Math.random()-.5)*50,duration:phase===3?2+Math.random()*2.6:.5+Math.random()*.7,ease:"sine.inOut",onComplete:()=>wander(a)})}
function end(){if(done)return;done=true;if(tl)tl.kill();HP.forEach(s=>gsap.killTweensOf(s));gsap.set(HP.join(","),{clearProps:"all"});I.remove();AG.style.zIndex=30;start()}
$("#skip").onclick=end;setTimeout(end,9500);
if(RM||!window.gsap){ags.forEach(a=>{a.style.opacity=.9;a.style.transform=`translate(${Math.random()*(innerWidth-60)}px,${100+Math.random()*(innerHeight-200)}px)`});I.remove();start();return}
gsap.set(HP.join(","),{opacity:0});gsap.set(ags,{x:innerWidth/2,y:innerHeight/2});
const o={v:0},L=$("#ly"),P=$("#pc"),lb=t=>$("#lb").textContent=t;
function mk(){[["#pt","heading",0],["#me","image",1],[".hi","text",0],[".nm","heading 1",0],[".rl","text",0],[".tx p","paragraph",0],[".tx .btns","button",0],[".st","list",0]].forEach(d=>{const e=$(d[0]);if(!e)return;const r=e.getBoundingClientRect();if(r.width<8||r.height<8)return;const b=document.createElement("div");b.className="bx"+(d[2]?" im":"");b.style.cssText=`left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px`;b.innerHTML="<em>"+d[1]+"</em><i></i><i></i><i></i><i></i>";$("#bp").append(b);rects.push(r)});
gsap.fromTo(".bx",{opacity:0,scale:.93},{opacity:1,scale:1,duration:.45,stagger:.1,ease:"power2.out"})}
function build(){const e="power4.out";gsap.to(".bx",{opacity:0,duration:.5});gsap.to(I,{backgroundColor:"rgba(0,0,0,0)",duration:.7});gsap.to(".pill",{opacity:0,duration:.6,delay:1.4});
gsap.fromTo("#pt .ch",{yPercent:120,opacity:0},{yPercent:0,opacity:1,duration:1.1,stagger:.06,ease:e,immediateRender:false});
gsap.fromTo("#me",{opacity:0,y:90,scale:.96},{opacity:1,y:0,scale:1,duration:1.4,delay:.35,ease:e,immediateRender:false});
gsap.fromTo(".hi",{opacity:0,x:-30},{opacity:1,x:0,duration:.9,delay:.5,ease:e,immediateRender:false});
gsap.fromTo(".nm,.rl,.tx p,.tx .btns",{opacity:0,y:40},{opacity:1,y:0,duration:.9,stagger:.12,delay:.65,ease:e,immediateRender:false});
gsap.fromTo(".st li,.tag1",{opacity:0,x:30},{opacity:1,x:0,duration:.8,stagger:.1,delay:.95,ease:e,immediateRender:false})}
tl=gsap.timeline({onComplete:end});
tl.to(ags,{opacity:1,duration:.4,stagger:.03},.1).call(()=>ags.forEach(wander),null,.1)
.from("#rmn",{opacity:0,duration:.8},0).to("#rmn",{opacity:0,duration:.4},1.6)
.to(o,{v:1,duration:5,ease:"none",onUpdate:()=>{P.textContent=Math.round(o.v*100)+"%";L.textContent=Math.round(o.v*204)}},0)
.call(()=>{phase=2;lb("Mapping layers…");mk()},null,1.7)
.call(()=>{phase=3;lb("Building…");build()},null,3.5)
.to({},{duration:.01},6.1)})();
addEventListener("pointermove",e=>{const x=e.clientX/innerWidth-.5;document.documentElement.style.setProperty("--mx",x*-26+"px");document.documentElement.style.setProperty("--px",x*40+"px")},{passive:true});
/* ---------- nav ---------- */
const fn=$("#fn");addEventListener("scroll",()=>fn.classList.toggle("s",scrollY>60),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$("#fn a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
$$("main section").forEach(s=>io.observe(s));
const mb=$("#mb"),mm=$("#mm");function tm(o){mm.style.display=o?"flex":"none";mb.textContent=o?"CLOSE":"MENU";mb.setAttribute("aria-expanded",o)}
mb.onclick=()=>tm(mm.style.display!=="flex");$$("#mm a").forEach(a=>a.onclick=()=>tm(false));
$$("a[href^='#']").forEach(a=>a.addEventListener("click",e=>{const t=$(a.getAttribute("href"));if(t){e.preventDefault();beep(440);t.scrollIntoView({behavior:RM?"auto":"smooth"})}}));
/* ---------- cursor, light, magnetic, hover glow ---------- */
const cu=$("#cu"),rg=$("#rg"),lt=$("#light"),pv=$("#pv");let rx=0,ry=0,cx=0,cy=0;
addEventListener("pointermove",e=>{cx=e.clientX;cy=e.clientY;cu.style.transform=`translate(${cx}px,${cy}px)`;lt.style.transform=`translate(${cx}px,${cy}px)`;pv.style.left=cx+"px";pv.style.top=cy+"px"});
if(FINE)(function f(){rx+=(cx-rx)*.18;ry+=(cy-ry)*.18;rg.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(f)})();
document.addEventListener("pointerover",e=>{if(e.target.closest("a,button,input,textarea"))rg.classList.add("h")});
document.addEventListener("pointerout",e=>{if(e.target.closest("a,button,input,textarea"))rg.classList.remove("h")});
if(FINE&&!RM)$$(".mg").forEach(b=>{b.addEventListener("pointermove",e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.3}px,${(e.clientY-r.top-r.height/2)*.4}px)`});b.addEventListener("pointerleave",()=>{b.style.transform=""})});
$$(".sk>div").forEach(c=>c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect();c.style.setProperty("--x",e.clientX-r.left+"px");c.style.setProperty("--y",e.clientY-r.top+"px")}));
/* ---------- projects ---------- */
$$(".pr").forEach(b=>{const i=+b.dataset.i;b.addEventListener("pointerenter",()=>{pv.style.background=GR[i];pv.textContent=PROJECTS[i][4].toUpperCase();pv.classList.add("on");beep(600,.04)});b.addEventListener("pointerleave",()=>pv.classList.remove("on"));b.onclick=()=>openP(i)});
let last=null;function openP(i){const p=PROJECTS[i],md=$("#md");last=document.activeElement;pv.classList.remove("on");
$("#mi").innerHTML=`<span class="k">${p[1].toUpperCase()}</span><div class="big"><div class="ph" style="background:${GR[i]}">PREVIEW PLACEHOLDER – ADD SCREENSHOTS</div></div><h3>${p[0]}</h3><p>${p[2]}</p><div class="tg">${p[3].map(t=>`<i>${t}</i>`).join("")}</div><p class="nt">Status: ${p[4]}. Live link and GitHub link are not added yet.</p><div class="row"><span class="btn" aria-disabled="true" style="opacity:.45">VIEW PROJECT – COMING SOON</span><a class="btn" href="https://github.com/" target="_blank" rel="noopener">GITHUB</a></div>`;
md.style.display="block";document.body.classList.add("lock");beep(800);if(window.gsap&&!RM){gsap.fromTo(md,{clipPath:"circle(0% at 50% 60%)"},{clipPath:"circle(150% at 50% 60%)",duration:.8,ease:"power3.inOut"});gsap.from("#mi>*",{y:40,opacity:0,stagger:.08,duration:.7,delay:.4})}$("#mc").focus()}
function closeP(){const md=$("#md");const f=()=>{md.style.display="none";document.body.classList.remove("lock");last&&last.focus()};if(window.gsap&&!RM)gsap.to(md,{clipPath:"circle(0% at 50% 60%)",duration:.6,ease:"power3.inOut",onComplete:f});else f()}
$("#mc").onclick=closeP;addEventListener("keydown",e=>{if(e.key==="Escape"&&$("#md").style.display==="block")closeP()});
/* ---------- contact form (no fake sending) ---------- */
$("#fm").addEventListener("submit",async e=>{e.preventDefault();const f=e.target,fs=$("#fs"),b=$("#fb");let ok=true;
const chk=(n,t,m)=>{const el=f[n],er=el.parentElement.querySelector(".er");const bad=!t(el.value.trim());er.textContent=bad?m:"";if(bad)ok=false};
chk("name",v=>v.length>1,"Enter your name.");chk("email",v=>/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v),"Enter a valid email address.");chk("subject",v=>v.length>2,"Enter a subject.");chk("message",v=>v.length>9,"Write at least 10 characters.");
if(!ok){fs.textContent="";return}
if(!CONFIG.formEndpoint){fs.style.color="#ff263d";fs.textContent="Sending is not set up yet. Add an email service endpoint in CONFIG.formEndpoint, or use the email link above.";return}
b.disabled=true;b.textContent="SENDING…";fs.textContent="";
try{const r=await fetch(CONFIG.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(f)))});if(!r.ok)throw 0;fs.style.color="#7CFF9B";fs.textContent="Message sent. Thank you!";f.reset();beep(900)}catch(_){fs.style.color="#ff263d";fs.textContent="Message could not be sent. Please try again or email me directly."}
b.disabled=false;b.textContent="SEND MESSAGE"});
