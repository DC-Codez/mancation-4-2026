const days = [
  { title:"Lock, load, arrive.", note:"The opening salvo", weather:"Booked + paid", events:[
    {time:"07:30",title:"Meet & roll out",text:"Meet in the Randburg area, load both 4x4s and point north.",status:"flex",label:"Timing flexible"},
    {time:"11:30",title:"Private Poemar Fun Shoot",text:"Six-person private booking. 40 shots each, supervision, safety gear, ammo and range fees included.",status:"confirmed",label:"Confirmed"},
    {time:"13:00",title:"Lunch at The Dock",text:"Included in the Poemar package. Optional extra firearms or ammunition can be paid for on the day.",status:"confirmed",label:"Included"},
    {time:"14:30",title:"Tebuah check-in",text:"Head into Mabalingwe, unpack, claim rooms, inspect the bar and pool.",status:"confirmed",label:"From 14:00"},
    {time:"18:30",title:"Opening-night braai",text:"Fire, birthday-trip drinks and the first round of terrible decisions. Menu led by Bobby.",status:"open",label:"Menu pending"}
  ]},
  { title:"Mabalingwe all day.", note:"Two drives + a herping mission", weather:"Game vehicle day hire", events:[
    {time:"06:15",title:"Coffee & rusks",text:"Quick fuel before the bush wakes up.",status:"flex",label:"Easy start"},
    {time:"06:30",title:"Morning game drive",text:"Take the rented game vehicle out for the first drive. The vehicle stays with us for the full day.",status:"open",label:"Hire to confirm"},
    {time:"09:00",title:"Big breakfast",text:"Back at the lodge for the proper spread before the next mission.",status:"open",label:"Menu pending"},
    {time:"10:30",title:"Herping mission",text:"Head out in permitted Mabalingwe areas. Ethical rules apply: observe, replace cover and do not stress wildlife.",status:"confirmed",label:"Locked in"},
    {time:"12:30",title:"Lunch & reset",text:"Stay inside Mabalingwe, refuel and keep the afternoon easy before the second drive.",status:"flex",label:"In reserve"},
    {time:"16:30",title:"Evening game drive",text:"Use the same rented game vehicle for the evening run, then return for an easy lodge dinner.",status:"confirmed",label:"Locked in"}
  ]},
  { title:"Trail to treetops.", note:"Bateleur + Waterberg Zipline", weather:"Big combination day", events:[
    {time:"Early",title:"Trail breakfast",text:"Eat before departure and pack snacks, fruit and plenty of water for the hike.",status:"confirmed",label:"Pack ahead"},
    {time:"07:00",title:"Bateleur Sunset Trail",text:"Allow the full 07:00–11:00 window for the 11.6 km trail.",status:"open",label:"Access to confirm"},
    {time:"11:00",title:"Transfer & light lunch",text:"Change over, eat something light and travel toward Waterberg Zipline.",status:"flex",label:"Keep it light"},
    {time:"14:00",title:"Waterberg Zipline",text:"Ten slides over approximately 2–3 hours. Tours leave hourly; the last advertised departure is 15:00.",status:"open",label:"Slot to book"},
    {time:"19:00",title:"Dinner at the lodge",text:"Back to base for the main group cook-up and fire.",status:"confirmed",label:"At lodge"}
  ]},
  { title:"The 4x4 mission.", note:"Mabalingwe all day + final fire", weather:"Full reserve day", events:[
    {time:"08:00",title:"Big morning 4x4 mission",text:"Both 4x4s head onto the best open Mabalingwe route. Confirm current conditions with reception first.",status:"confirmed",label:"Locked in"},
    {time:"12:30",title:"Bush pub lunch / drinks",text:"Stop at Kalahari Oasis, Vulture's View, Valley View or another local option that is open.",status:"open",label:"Venue to choose"},
    {time:"15:30",title:"Back to the lodge",text:"Return to base, reset and start getting the final fire and potjie ready.",status:"flex",label:"Prep window"},
    {time:"17:00",title:"Final potjie & braai",text:"Everyone on deck from late afternoon: fire, food, speeches, nonsense and the closing ceremony nobody asked for.",status:"confirmed",label:"Locked in"}
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
if('serviceWorker' in navigator){
  navigator.serviceWorker.getRegistrations().then(registrations=>registrations.forEach(registration=>registration.unregister())).catch(()=>{});
  if('caches' in window)caches.keys().then(keys=>Promise.all(keys.map(key=>caches.delete(key)))).catch(()=>{});
}
