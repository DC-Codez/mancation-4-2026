const days = [
  { title:"Lock, load, arrive.", note:"The opening salvo", weather:"Booked + paid", events:[
    {time:"07:30",title:"Meet & roll out",text:"Meet in the Randburg area, load both 4x4s and point north.",status:"flex",label:"Timing flexible"},
    {time:"11:30",title:"Private Poemar Fun Shoot",text:"Six-person private booking. 40 shots each, supervision, safety gear, ammo and range fees included.",status:"confirmed",label:"Confirmed"},
    {time:"13:00",title:"Lunch at The Dock",text:"Included in the Poemar package. Optional extra firearms or ammunition can be paid for on the day.",status:"confirmed",label:"Included"},
    {time:"14:30",title:"Tebuah check-in",text:"Head into Mabalingwe, unpack, claim rooms, inspect the bar and pool.",status:"confirmed",label:"From 14:00"},
    {time:"18:30",title:"Opening-night braai",text:"Fire, birthday-trip drinks and the first round of terrible decisions. Menu led by Bobby.",status:"open",label:"Menu pending"}
  ]},
  { title:"Into the wild.", note:"Game, grub, downtime", weather:"Plan in progress", events:[
    {time:"06:15",title:"Coffee & rusks",text:"Quick fuel before the bush wakes up.",status:"flex",label:"Easy start"},
    {time:"06:30",title:"Sunrise game drive",text:"Guided drive or self-drive in the lodge game viewer. Vehicle hire is R1,500 per day; date still to lock.",status:"open",label:"To book"},
    {time:"09:00",title:"Big breakfast",text:"Back at the lodge. Bobby's final menu and owners to follow.",status:"open",label:"Menu pending"},
    {time:"12:30",title:"Lunch out",text:"Pick from Kalahari Oasis, Valley View or another reserve stop.",status:"open",label:"Choose venue"},
    {time:"15:00",title:"Pool, fishing or nap",text:"Fishing rules and allowed dams still need confirmation at reception.",status:"flex",label:"Free range"},
    {time:"16:30",title:"Sundowner option",text:"Sunset drive or a stop at Vulture's View before an easy lodge dinner.",status:"open",label:"Group call"}
  ]},
  { title:"Earn the beers.", note:"Boots, dust, adrenaline", weather:"Choose the adventure", events:[
    {time:"07:30",title:"Trail breakfast",text:"Coffee and something light before heading out.",status:"flex",label:"Flexible"},
    {time:"08:30",title:"Mabalingwe hike",text:"Kloof Route, Wag 'n Bietjie or the best open route reception recommends. Bring 1.5–2L water.",status:"open",label:"Route to confirm"},
    {time:"12:00",title:"Brunch / lunch",text:"Eat out or destroy the leftovers depending on timing.",status:"flex",label:"Flexible"},
    {time:"14:00",title:"Zipline or 4x4 trail",text:"Waterberg Zipline remains a group vote; the onsite self-drive trail is the no-booking fallback.",status:"open",label:"Group vote"},
    {time:"19:00",title:"Proper lodge dinner",text:"Main group cook-up, fire and a short ethical herping walk if conditions cooperate.",status:"open",label:"Menu pending"}
  ]},
  { title:"The big one.", note:"Main mission + final fire", weather:"Adventure slot open", events:[
    {time:"08:00",title:"Main adventure",text:"4x4 route, guided drive or zipline — lock the group's winning option in the tracker.",status:"open",label:"To decide"},
    {time:"12:30",title:"Bush pub lunch",text:"Kalahari Oasis, Vulture's View or Valley View. Restaurant hours to confirm closer to the trip.",status:"open",label:"Venue open"},
    {time:"15:00",title:"Nothing scheduled on purpose",text:"Pool, fishing, cards, naps, questionable stories. This is a protected time slot.",status:"flex",label:"Mandatory chill"},
    {time:"18:00",title:"Final-night braai / potjie",text:"Everyone on deck. Fire, speeches, nonsense and the official closing ceremony nobody asked for.",status:"confirmed",label:"Locked in"},
    {time:"Late",title:"Night walk",text:"Headlamps, lodge area only, and ethical herping rules: observe, replace cover and don't stress wildlife.",status:"flex",label:"Conditions permitting"}
  ]},
  { title:"One last coffee.", note:"Pack, feed, point south", weather:"Check-out 10:00", events:[
    {time:"08:00",title:"Survivors' breakfast",text:"Coffee, rusks, eggs, bacon and whatever remains in the fridge.",status:"confirmed",label:"At lodge"},
    {time:"09:00",title:"Pack & sweep",text:"Load cars, check rooms, settle the kitchen and leave no man or charger behind.",status:"confirmed",label:"All hands"},
    {time:"10:00",title:"Check out",text:"Roll out of Tebuah by 10:00.",status:"confirmed",label:"Confirmed"},
    {time:"11:00",title:"Optional farm-shop stop",text:"Labri or another road stop if the crew wants coffee, supplies or lunch.",status:"flex",label:"Optional"},
    {time:"12:00",title:"Homeward",text:"Two 4x4s back toward Joburg. Fuel and tolls split three ways per car.",status:"confirmed",label:"The long goodbye"}
  ]}
];

const panel=document.querySelector('#day-panel');
const tabs=[...document.querySelectorAll('[role="tab"]')];
function renderDay(index,focus=false){
  const day=days[index];
  tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1});
  panel.innerHTML=`<div class="day-hero"><div><p class="eyebrow dark">${day.note}</p><h3>${day.title}</h3></div><span class="weather-note">${day.weather}</span></div><ol class="timeline">${day.events.map(e=>`<li class="event"><time>${e.time}</time><span class="event-marker" aria-hidden="true"></span><div class="event-content"><div class="event-top"><h4>${e.title}</h4><span class="status ${e.status}">${e.label}</span></div><p>${e.text}</p></div></li>`).join('')}</ol>`;
  if(focus) panel.focus();
}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>renderDay(i,true));tab.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();let n=e.key==='Home'?0:e.key==='End'?tabs.length-1:e.key==='ArrowRight'?(i+1)%tabs.length:(i-1+tabs.length)%tabs.length;tabs[n].focus();renderDay(n);})});
renderDay(0);

const trip=new Date('2026-08-26T07:30:00+02:00');
function updateCountdown(){const now=new Date(),diff=trip-now,el=document.querySelector('#countdown');if(diff>0){const d=Math.ceil(diff/86400000);el.textContent=`${d} day${d===1?'':'s'} until boots hit the bush`;}else if(now<new Date('2026-08-31T00:00:00+02:00'))el.textContent='Mancation is live. Behave accordingly.';else el.textContent='One for the history books.'}updateCountdown();

const toast=document.querySelector('#toast');
function showToast(message){toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}
document.querySelector('#shareButton').addEventListener('click',async()=>{const data={title:'Mancation 4.0',text:'The Mancation 4.0 game plan — Mabalingwe, 26–30 Aug 2026',url:location.href};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(location.href);showToast('Link copied');}}catch(e){if(e.name!=='AbortError')showToast('Copy the link from your browser');}});

const photos=[1,2,3,4,5].map(n=>`lodge-${n}.jpg`),lightbox=document.querySelector('#lightbox'),lightboxImage=document.querySelector('#lightboxImage'),lightboxCount=document.querySelector('#lightboxCount');let photoIndex=0;
function showPhoto(index){photoIndex=(index+photos.length)%photos.length;lightboxImage.src=photos[photoIndex];lightboxImage.alt=`Tebuah Lodge gallery photo ${photoIndex+1} of ${photos.length}`;lightboxCount.textContent=`${photoIndex+1} / ${photos.length}`}
document.querySelectorAll('[data-photo]').forEach(btn=>btn.addEventListener('click',()=>{showPhoto(Number(btn.dataset.photo));lightbox.showModal()}));
document.querySelector('#lightboxClose').addEventListener('click',()=>lightbox.close());document.querySelector('#lightboxPrev').addEventListener('click',()=>showPhoto(photoIndex-1));document.querySelector('#lightboxNext').addEventListener('click',()=>showPhoto(photoIndex+1));lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});

const navLinks=[...document.querySelectorAll('.bottom-nav a')],sections=navLinks.map(a=>document.querySelector(a.getAttribute('href')));const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!visible)return;navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${visible.target.id}`));},{rootMargin:'-35% 0px -55%',threshold:[0,.1,.5]});sections.forEach(s=>observer.observe(s));
if('serviceWorker' in navigator&&location.protocol.startsWith('http')){
  let refreshing=false;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{if(refreshing)return;refreshing=true;location.reload()});
  navigator.serviceWorker.register('sw.js',{updateViaCache:'none'}).then(registration=>registration.update()).catch(()=>{});
}
