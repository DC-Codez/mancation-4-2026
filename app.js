const days = [
  { title:"Lock, load, arrive.", note:"The opening salvo", weather:"Poemar paid · five attending", events:[
    {time:"07:30",title:"Meet & roll out",text:"Meet in the Randburg area, load the two road vehicles and point north. Bobby arrives later and will meet the crew at Tebuah after Poemar.",status:"flex",label:"Five roll out"},
    {time:"11:30",title:"Private Poemar Fun Shoot",text:"Five attending from the six-person private booking. Devon covers Bobby's non-refundable place; the crew shares Bobby's included ammunition.",status:"confirmed",label:"Booked + paid"},
    {time:"13:00",title:"Lunch at The Dock",text:"Included in the Poemar package. The five attendees share Bobby's R150 restaurant credit; optional extras can be paid for on the day.",status:"confirmed",label:"Credit shared"},
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
    {time:"07:45",title:"Meet Wouter at reception",text:"Meet at reception before setting off. The hike is organised; Squirrel will transfer the group payment and collect R180 from each of the other five.",status:"confirmed",label:"Organised"},
    {time:"08:00",title:"Bateleur Sunset Trail",text:"Follow the 11.6 km circular route with 395 m elevation gain. Allow about 3.5 hours, finishing around 11:30/noon. Each of the other five owes Squirrel R180. <a href='https://www.alltrails.com/explore/custom-routes/bnr-sunsettrail-teamtrail-03287fc?sh=5bexo2&amp;u=m' target='_blank' rel='noreferrer'>Open the AllTrails route</a>.",status:"confirmed",label:"R180 pp · Owe Squirrel"},
    {time:"12:00",title:"Backpack snackadoodals",text:"Change over, eat the packed light lunch and travel toward Waterberg Zipline.",status:"flex",label:"Pack ahead"},
    {time:"14:00",title:"Waterberg Zipline",text:"Booking complete. Ten slides over approximately 2–3 hours. No advance payment has been made; each person pays individually on the day.",status:"confirmed",label:"Booked · Pay on day"},
    {time:"19:00",title:"Creative lodge dinner",text:"James and Bobby lead. Drop it and you owe the group a poem, song or instrument performance.",status:"confirmed",label:"James + Bobby"}
  ]},
  { title:"The 4x4 mission.", note:"Mabalingwe all day + final fire", weather:"Full reserve day", events:[
    {time:"07:15",title:"Eggy Bacon Buns",text:"The Funny-Looking Tool (Thulani) and his assistant on ratchet duty fuel the crew before the 4x4 mission.",status:"confirmed",label:"Thulani + assistant"},
    {time:"08:00",title:"Big morning 4x4 mission",text:"All six pile into Squirrel's capable bakkie for the Mabalingwe route. Bjorn's backup car stays behind because it is not suitable for the mission. Confirm current conditions with reception first.",status:"confirmed",label:"One beast of a bakkie"},
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

const dayBriefs = [
  {code:"MISSION 01 · ARRIVAL",brief:"Five roll out, make some noise at Poemar and establish base camp. Bobby joins the crew at Tebuah afterwards.",image:"lodge-1.jpg",accent:"#c7ef45",meta:[["Road","Five depart · Bobby later"],["Anchor","Poemar 11:30"],["Dinner","Thulani + James"]],actions:[["Lodge map","https://maps.google.com/?q=-24.770281852697,28.021701425314"]]},
  {code:"MISSION 02 · WILD",brief:"Own Mabalingwe from first light to sundown: two drives, one ethical herping mission and burgers at base.",image:"lodge-2.jpg",accent:"#f6b958",meta:[["First move","06:15 coffee"],["Vehicle","Day hire pending"],["Dinner","Devon + Bobby"]],actions:[]},
  {code:"MISSION 03 · HIGH GROUND",brief:"The precision day: leave early, complete the organised Bateleur circuit, then hit the booked zipline and pay individually on arrival.",image:"lodge-3.jpg",accent:"#f26a3d",meta:[["Departure","06:45"],["Trail","R180 pp → Squirrel"],["Zipline","Booked · pay there"]],actions:[["Open AllTrails","https://www.alltrails.com/explore/custom-routes/bnr-sunsettrail-teamtrail-03287fc?sh=5bexo2&u=m"]]},
  {code:"MISSION 04 · FULL SEND",brief:"All six into Squirrel's beast of a bakkie, a flexible pub stop, then the final fire, potjie and closing nonsense.",image:"lodge-4.jpg",accent:"#e2a4ff",meta:[["Roll out","08:00"],["4×4 mission","One bakkie · all six"],["Fire boss","Squirrel"]],actions:[]},
  {code:"MISSION 05 · EXFIL",brief:"Leave no charger, leftover or crew member behind. One final coffee, then point the convoy south.",image:"lodge-5.jpg",accent:"#8ed7e8",meta:[["Pack","09:00"],["Check-out","10:00"],["Direction","Joburg"]],actions:[]}
];

const panel=document.querySelector('#day-panel');
const tabs=[...document.querySelectorAll('[role="tab"]')];
function renderDay(index,focus=false){
  const day=days[index],brief=dayBriefs[index];
  tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1});
  panel.style.setProperty('--day-accent',brief.accent);
  panel.innerHTML=`<div class="day-brief" style="--brief-image:url('${brief.image}')"><div class="day-brief-shade"></div><div class="day-brief-copy"><div><p class="mission-code">${brief.code}</p><h3>${day.title}</h3><p>${brief.brief}</p></div><span class="weather-note">${day.weather}</span><div class="brief-meta">${brief.meta.map(item=>`<span><small>${item[0]}</small><b>${item[1]}</b></span>`).join('')}</div>${brief.actions.length?`<div class="brief-actions">${brief.actions.map(action=>`<a href="${action[1]}" target="_blank" rel="noreferrer">${action[0]} <span aria-hidden="true">↗</span></a>`).join('')}</div>`:''}</div></div><div class="timeline-heading"><span>${day.note}</span><b>${day.events.length} moves</b></div><ol class="timeline">${day.events.map(e=>`<li class="event"><time>${e.time}</time><span class="event-marker" aria-hidden="true"></span><div class="event-content"><div class="event-top"><h4>${e.title}</h4><span class="status ${e.status}">${e.label}</span></div><p>${e.text}</p></div></li>`).join('')}</ol>`;
  if(focus) panel.focus();
}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>renderDay(i,true));tab.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();let n=e.key==='Home'?0:e.key==='End'?tabs.length-1:e.key==='ArrowRight'?(i+1)%tabs.length:(i-1+tabs.length)%tabs.length;tabs[n].focus();renderDay(n);})});
renderDay(0);

const trip=new Date('2026-08-26T07:30:00+02:00');
function updateCountdown(){const now=new Date(),diff=trip-now,el=document.querySelector('#countdown'),controlDays=document.querySelector('#countdownDays'),controlUnit=document.querySelector('#countdownUnit');if(diff>0){const d=Math.ceil(diff/86400000),hours=Math.max(0,Math.floor((diff%86400000)/3600000));el.innerHTML=`<b>${d}</b><span>days</span><i>${hours}h until the Waterberg</i>`;controlDays.textContent=d;controlUnit.textContent=d===1?'day to go':'days to go';}else if(now<new Date('2026-08-31T00:00:00+02:00')){el.textContent='Mancation is live. Behave accordingly.';controlDays.textContent='LIVE';controlUnit.textContent='boots in the bush';}else{el.textContent='One for the history books.';controlDays.textContent='DONE';controlUnit.textContent='one for the history books';}}updateCountdown();

const toast=document.querySelector('#toast');
function showToast(message){toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}
document.querySelector('#shareButton').addEventListener('click',async()=>{const data={title:'Mancation 4.0',text:'The Mancation 4.0 game plan — Mabalingwe, 26–30 Aug 2026',url:location.href};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(location.href);showToast('Link copied');}}catch(e){if(e.name!=='AbortError')showToast('Copy the link from your browser');}});

const hero=document.querySelector('.hero'),sceneControls=[...document.querySelectorAll('[data-scene-control]')],scenes=['day','sunset','fire'];
let sceneTimer,sceneIndex=0;
function setScene(scene){hero.dataset.scene=scene;sceneIndex=scenes.indexOf(scene);sceneControls.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.sceneControl===scene)));}
function startSceneCycle(){if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;sceneTimer=setInterval(()=>setScene(scenes[(sceneIndex+1)%scenes.length]),6500);}
sceneControls.forEach(button=>button.addEventListener('click',()=>{clearInterval(sceneTimer);setScene(button.dataset.sceneControl);showToast(`${button.textContent} mode engaged`);}));
startSceneCycle();

const callupDialog=document.querySelector('#callupDialog');
document.querySelectorAll('#callupOpen,#callupImageOpen').forEach(button=>button.addEventListener('click',()=>callupDialog.showModal()));
document.querySelector('#callupClose').addEventListener('click',()=>callupDialog.close());
callupDialog.addEventListener('click',event=>{if(event.target===callupDialog)callupDialog.close();});

const warningDialog=document.querySelector('#warningDialog');
document.querySelector('#forbiddenButton').addEventListener('click',()=>warningDialog.showModal());
document.querySelectorAll('#warningClose,.warning-return').forEach(button=>button.addEventListener('click',()=>warningDialog.close()));
warningDialog.addEventListener('click',event=>{if(event.target===warningDialog)warningDialog.close();});

document.querySelector('.control-next a').addEventListener('click',()=>renderDay(2));

let logoTaps=0,logoTapTimer;
document.querySelector('#logoSecret').addEventListener('click',()=>{logoTaps+=1;clearTimeout(logoTapTimer);logoTapTimer=setTimeout(()=>logoTaps=0,1800);if(logoTaps===4){logoTaps=0;const burst=document.querySelector('#secretBurst');burst.classList.add('show');setTimeout(()=>burst.classList.remove('show'),1800);showToast('40 years strong. Questionably supervised.');}});

const photos=[1,2,3,4,5].map(n=>`lodge-${n}.jpg`),lightbox=document.querySelector('#lightbox'),lightboxImage=document.querySelector('#lightboxImage'),lightboxCount=document.querySelector('#lightboxCount');let photoIndex=0;
function showPhoto(index){photoIndex=(index+photos.length)%photos.length;lightboxImage.src=photos[photoIndex];lightboxImage.alt=`Tebuah Lodge gallery photo ${photoIndex+1} of ${photos.length}`;lightboxCount.textContent=`${photoIndex+1} / ${photos.length}`}
document.querySelectorAll('[data-photo]').forEach(btn=>btn.addEventListener('click',()=>{showPhoto(Number(btn.dataset.photo));lightbox.showModal()}));
document.querySelector('#lightboxClose').addEventListener('click',()=>lightbox.close());document.querySelector('#lightboxPrev').addEventListener('click',()=>showPhoto(photoIndex-1));document.querySelector('#lightboxNext').addEventListener('click',()=>showPhoto(photoIndex+1));lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});

const navLinks=[...document.querySelectorAll('.bottom-nav a')],sections=navLinks.map(a=>document.querySelector(a.getAttribute('href')));const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!visible)return;navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${visible.target.id}`));},{rootMargin:'-35% 0px -55%',threshold:[0,.1,.5]});sections.forEach(s=>observer.observe(s));
if('serviceWorker' in navigator){
  navigator.serviceWorker.getRegistrations().then(registrations=>registrations.forEach(registration=>registration.unregister())).catch(()=>{});
  if('caches' in window)caches.keys().then(keys=>Promise.all(keys.map(key=>caches.delete(key)))).catch(()=>{});
}

const weatherDescriptions={
  0:['Clear','☀️'],1:['Mostly clear','🌤️'],2:['Partly cloudy','⛅'],3:['Overcast','☁️'],
  45:['Fog','🌫️'],48:['Icy fog','🌫️'],51:['Light drizzle','🌦️'],53:['Drizzle','🌦️'],55:['Heavy drizzle','🌧️'],
  61:['Light rain','🌦️'],63:['Rain','🌧️'],65:['Heavy rain','🌧️'],71:['Light snow','🌨️'],73:['Snow','🌨️'],75:['Heavy snow','🌨️'],
  80:['Rain showers','🌦️'],81:['Rain showers','🌧️'],82:['Heavy showers','🌧️'],95:['Thunderstorms','⛈️'],96:['Storm + hail','⛈️'],99:['Storm + hail','⛈️']
};
const weatherFor=code=>weatherDescriptions[code]||['Variable conditions','🌤️'];
async function loadWeather(){
  const currentEl=document.querySelector('#weatherCurrent'),forecastEl=document.querySelector('#tripForecast'),windowTitle=document.querySelector('#weatherWindowTitle'),status=document.querySelector('#weatherStatus');
  if(!currentEl||!forecastEl)return;
  try{
    const endpoint='https://api.open-meteo.com/v1/forecast?latitude=-24.7703&longitude=28.0217&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Africa%2FJohannesburg&forecast_days=16';
    const response=await fetch(endpoint);
    if(!response.ok)throw new Error('Weather service unavailable');
    const data=await response.json(),condition=weatherFor(data.current.weather_code);
    currentEl.innerHTML=`<strong>${condition[1]} ${Math.round(data.current.temperature_2m)}°C</strong><p>${condition[0]} · feels like ${Math.round(data.current.apparent_temperature)}°C · wind ${Math.round(data.current.wind_speed_10m)} km/h</p>`;
    const tripDates=['2026-08-26','2026-08-27','2026-08-28','2026-08-29','2026-08-30'];
    const available=tripDates.map(date=>({date,index:data.daily.time.indexOf(date)})).filter(item=>item.index>=0);
    if(!available.length)return;
    windowTitle.textContent=available.length===5?'The five-day forecast is live.':`${available.length} of 5 trip days are now visible.`;
    status.textContent=available.length===5?'Use this live report for final packing and activity calls. Weather can still move, so check again before the drive.':'More dates will appear automatically as the reliable forecast window advances.';
    forecastEl.classList.add('is-live');
    forecastEl.innerHTML=available.map(({date,index})=>{
      const d=new Date(`${date}T12:00:00+02:00`),label=new Intl.DateTimeFormat('en-GB',{weekday:'short',day:'numeric'}).format(d),forecast=weatherFor(data.daily.weather_code[index]);
      return `<article><span>${label}</span><strong class="forecast-icon">${forecast[1]} ${Math.round(data.daily.temperature_2m_max[index])}° / ${Math.round(data.daily.temperature_2m_min[index])}°</strong><small>${forecast[0]} · ${data.daily.precipitation_probability_max[index]??0}% rain</small></article>`;
    }).join('');
  }catch(error){
    currentEl.innerHTML='<strong>24°C / 7°C</strong><p>Live conditions are temporarily offline. The late-August planning baseline remains shown below.</p>';
  }
}
loadWeather();

[
  ['#carOneTotal','#carOneSplit'],
  ['#carTwoTotal','#carTwoSplit']
].forEach(([inputSelector,outputSelector])=>{
  const input=document.querySelector(inputSelector),output=document.querySelector(outputSelector);
  if(!input||!output)return;
  input.addEventListener('input',()=>{
    const total=Math.max(0,Number(input.value)||0);
    output.textContent=`R${(total/3).toFixed(2)} each`;
  });
});
