const days = [
  { title:"Lock, load, arrive.", note:"The opening salvo", weather:"Booked + paid", events:[
    {time:"07:30",title:"Meet & roll out",text:"Meet in the Randburg area, load both 4x4s and point north. Bobby is on road snackadoodals.",status:"flex",label:"Bobby feeds the road"},
    {time:"11:30",title:"Private Poemar Fun Shoot",text:"Six-person private booking. 40 shots each, supervision, safety gear, ammo and range fees included.",status:"confirmed",label:"Confirmed"},
    {time:"13:00",title:"Lunch at The Dock",text:"Included in the Poemar package. Optional extra firearms or ammunition can be paid for on the day.",status:"confirmed",label:"Included"},
    {time:"14:30",title:"Tebuah check-in",text:"Head into Mabalingwe, unpack, claim rooms, inspect the bar and pool.",status:"confirmed",label:"From 14:00"},
    {time:"18:30",title:"Pad Koss en Braai PAPA",text:"Everything Skinny: easy arrival braai, fire and birthday-trip drinks. Thulani and James lead the food.",status:"confirmed",label:"Thulani + James"}
  ]},
  { title:"Mabalingwe all day.", note:"Two drives + a herping mission", weather:"Game vehicle day hire", events:[
    {time:"06:15",title:"Coffee & rusks",text:"Quick fuel before the bush wakes up.",status:"flex",label:"Easy start"},
    {time:"06:30",title:"Morning game drive",text:"Take the rented game vehicle out for the first drive. The vehicle stays with us for the full day.",status:"open",label:"Hire to confirm"},
    {time:"09:00",title:"The BIG Fry-Up",text:"Seth and Squirrel run the proper eggs-and-bacon spread before the next mission.",status:"confirmed",label:"Seth + Squirrel"},
    {time:"10:30",title:"Herping mission",text:"Head out in permitted Mabalingwe areas. Ethical rules apply: observe, replace cover and do not stress wildlife.",status:"confirmed",label:"Locked in"},
    {time:"12:30",title:"Find da food somewhere somehow",text:"Pub or restaurant lunch inside Mabalingwe. Each man handles his own while the venue stays flexible.",status:"flex",label:"Each man"},
    {time:"16:30",title:"Evening game drive",text:"Use the same rented game vehicle for the evening run, then return to the lodge.",status:"confirmed",label:"Locked in"},
    {time:"19:00",title:"Siss-Siss en Banging Burgers",text:"Dem Juice Burgers after the drive, led by Devon and Bobby.",status:"confirmed",label:"Devon + Bobby"}
  ]},
  { title:"Trail to treetops.", note:"Bateleur + Waterberg Zipline", weather:"Big combination day", events:[
    {time:"Early",title:"Mmuusli, Yo-got and fruit",text:"Thulani and Seth handle trail breakfast, slice the fruit and pack snacks and plenty of water.",status:"confirmed",label:"Thulani + Seth"},
    {time:"06:45",title:"Drive to Bateleur",text:"Leave Tebuah for the approximately one-hour drive to Bateleur Nature Reserve.",status:"flex",label:"≈ 1-hour drive"},
    {time:"07:45",title:"Meet Wouter at reception",text:"Meet at reception before setting off. Booking/access, advance payment, permit and indemnity confirmation are still pending.",status:"open",label:"Formalities pending"},
    {time:"08:00",title:"Bateleur Sunset Trail",text:"Follow the 11.6 km circular route with 395 m elevation gain. Allow about 3.5 hours, finishing around 11:30/noon. R180 per person, paid individually. <a href='https://www.alltrails.com/explore/custom-routes/bnr-sunsettrail-teamtrail-03287fc?sh=5bexo2&amp;u=m' target='_blank' rel='noreferrer'>Open the AllTrails route</a>.",status:"open",label:"R180 pp · To book"},
    {time:"12:00",title:"Backpack snackadoodals",text:"Change over, eat the packed light lunch and travel toward Waterberg Zipline.",status:"flex",label:"Pack ahead"},
    {time:"14:00",title:"Waterberg Zipline",text:"Ten slides over approximately 2–3 hours. Tours leave hourly; the last advertised departure is 15:00.",status:"open",label:"Slot to book"},
    {time:"19:00",title:"Creative lodge dinner",text:"James and Bobby lead. Drop it and you owe the group a poem, song or instrument performance.",status:"confirmed",label:"James + Bobby"}
  ]},
  { title:"The 4x4 mission.", note:"Mabalingwe all day + final fire", weather:"Full reserve day", events:[
    {time:"07:15",title:"Eggy Bacon Buns",text:"The Funny-Looking Tool (Thulani) and his assistant on ratchet duty fuel the crew before the 4x4 mission.",status:"confirmed",label:"Thulani + assistant"},
    {time:"08:00",title:"Big morning 4x4 mission",text:"Both 4x4s head onto the best open Mabalingwe route. Confirm current conditions with reception first.",status:"confirmed",label:"Locked in"},
    {time:"12:30",title:"NomNom's and a pub",text:"Stop at Kalahari Oasis, Vulture's View, Valley View or another local option. Each man handles his own.",status:"open",label:"Venue to choose"},
    {time:"15:30",title:"Back to the lodge",text:"Return to base, reset and start getting the final fire and potjie ready.",status:"flex",label:"Prep window"},
    {time:"17:00",title:"Snap Snap Potjie + final braai",text:"Squirrel - the Nut Shitter - leads the final fire, food, speeches and closing nonsense, with an assistant of his choice.",status:"confirmed",label:"Squirrel + assistant"}
  ]},
  { title:"One last coffee.", note:"Pack, feed, point south", weather:"Check-out 10:00", events:[
    {time:"08:00",title:"Scavenge leftovers",text:"Coffee, rusks and a full fridge clean-out. Each man for himself.",status:"confirmed",label:"Use what remains"},
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
