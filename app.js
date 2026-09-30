async function weather(){
 const status=document.getElementById('weatherStatus');
 const grid=document.getElementById('weatherGrid');
 if(!status||!grid)return;
 try{
  const u='https://api.open-meteo.com/v1/forecast?latitude=51.2277&longitude=6.7735&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Europe%2FBerlin&start_date=2026-10-02&end_date=2026-10-04';
  const d=await fetch(u).then(r=>r.json());
  const icons={0:'☀️',1:'🌤️',2:'⛅',3:'☁️',45:'🌫️',48:'🌫️',51:'🌦️',53:'🌦️',55:'🌧️',61:'🌧️',63:'🌧️',65:'🌧️',71:'🌨️',73:'🌨️',75:'❄️',80:'🌦️',81:'🌧️',82:'⛈️',95:'⛈️',96:'⛈️',99:'⛈️'};
  grid.innerHTML=d.daily.time.map((date,i)=>`<div class="weather-day"><b>${date.slice(8,10)} OCT</b><br>${icons[d.daily.weather_code[i]]||'🌤️'}<br><b>${Math.round(d.daily.temperature_2m_max[i])}°</b> / ${Math.round(d.daily.temperature_2m_min[i])}°<br><span class="small">💧 ${d.daily.precipitation_probability_max[i]}%</span></div>`).join('');
  status.textContent='Actualizado al abrir';
 }catch(e){status.textContent='Previsión aún no disponible';}
}
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
weather();
