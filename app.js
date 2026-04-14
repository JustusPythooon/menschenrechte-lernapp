
// LOGIN
const users = JSON.parse(localStorage.getItem('users')||'{}');
let currentUser = localStorage.getItem('currentUser');
function hash(p){return btoa(p.split('').reverse().join(''));}
function msg(t){loginMsg.textContent=t}
function register(){if(!privacyCheck.checked)return msg('Datenschutz akzeptieren');if(!nick.value||!pass.value)return msg('Alles ausfüllen');if(users[nick.value])return msg('Nickname vergeben');users[nick.value]={pass:hash(pass.value)};localStorage.setItem('users',JSON.stringify(users));msg('Registriert – Login');}
function login(){const u=users[nick.value];if(!u||u.pass!==hash(pass.value))return msg('Falsche Daten');localStorage.setItem('currentUser',nick.value);start();}
function logout(){localStorage.removeItem('currentUser');location.reload();}
function start(){loginScreen.classList.add('hidden');app.classList.remove('hidden');userName.textContent=currentUser||nick.value;renderHome();}
if(currentUser)start();

const DATA={
 topics:[
 ['Was sind Menschenrechte?','Menschenrechte sind grundlegende Rechte, die jedem Menschen zustehen – unabhängig von Herkunft, Religion oder Geschlecht. Sie sollen vor Gewalt, Willkür und Ungerechtigkeit schützen.','Alle Menschen haben gleiche Rechte.'],
 ['Demokratie und autoritärer Staat','In einer Demokratie gibt es freie Wahlen und Meinungsfreiheit. China ist ein autoritärer Staat, in dem die Regierung sehr viel Macht hat.','Mehr Macht bei der Regierung weniger Freiheit für Bürger.'],
 ['Meinungsfreiheit und Justiz','Kritik an der Regierung wird in China oft bestraft. Journalisten und Anwälte können verhaftet werden.','Kritik kann gefährlich sein.'],
 ['Xinjiang (Uiguren)','Der Staat geht hart gegen die muslimische Minderheit der Uiguren vor. Berichte sprechen von Lagern und Überwachung.','Religionsfreiheit ist eingeschränkt.'],
 ['Tibet','Kultur und Religion sind stark eingeschränkt. Viele Tibeter werden überwacht.','Eigene Kultur darf nur begrenzt gelebt werden.'],
 ['Hongkong','Neue Sicherheitsgesetze schränken Demonstrationen und freie Medien ein.','Freiheiten wurden stark reduziert.'],
 ['Presse- und Internetfreiheit','Viele Webseiten wie YouTube oder Google sind gesperrt. Medien stehen unter Kontrolle.','Der Staat kontrolliert Informationen.'],
 ['Todesstrafe','China vollstreckt weltweit die meisten Todesurteile. Die Zahlen werden geheim gehalten.','Recht auf Leben ist gefährdet.'],
 ['Überwachung','Kameras, Apps und Gesichtserkennung überwachen den Alltag der Menschen.','Privatsphäre ist stark eingeschränkt.'],
 ['Internationale Kritik','Organisationen wie die UNO kritisieren China regelmäßig.','Menschenrechte gelten weltweit.']
 ],
 timeline:[['1948','Allgemeine Erklärung der Menschenrechte'],['1989','Tiananmen-Proteste'],['2017','Xinjiang-Berichte'],['2020','Hongkong-Sicherheitsgesetz'],['2022','UNO-Bericht'],['Heute','Anhaltende Kritik']],
 quiz:[
 ['Was sind Menschenrechte?',['Regeln eines Staates','Rechte für alle','Gesetze für Erwachsene'],1],
 ['Warum sind Menschenrechte wichtig?',['Sie schützen Menschen','Sie machen Staaten stark','Sie sind freiwillig'],0],
 ['Was bedeutet Meinungsfreiheit?',['Nur Regierung spricht','Eigene Meinung sagen','Meinung ist verboten'],1],
 ['Welche Region steht in der Kritik?',['Hongkong','Xinjiang','Tokio'],1],
 ['Was ist in China oft gesperrt?',['YouTube','Schulen','Zeitungen'],0],
 ['Was bedeutet Überwachung?',['Beobachtung von Menschen','Freizeit','Schutz'],0],
 ['Warum wird die Todesstrafe kritisiert?',['Sie verletzt das Recht auf Leben','Sie dauert lange','Sie ist teuer'],0],
 ['Was macht die UNO?',['Schützt Menschenrechte','Regiert Staaten','Kontrolliert Internet'],0],
 ['Was wurde in Hongkong eingeschränkt?',['Medienfreiheit','Schulpflicht','Gesundheit'],0],
 ['Was ist typisch für autoritäre Staaten?',['Freie Wahlen','Viel Kontrolle','Keine Gesetze'],1],
 ['Warum gibt es Kritik aus dem Ausland?',['Wegen Menschenrechten','Wegen Wetter','Wegen Sport'],0],
 ['Was zeigt das Video?',['UNO-Kritik','Reisebericht','Sportereignis'],0]
 ],
 videos:[{title:'DW-Video zu Xinjiang',desc:'Bericht über Vorwürfe von Menschenrechtsverletzungen.',embed:`<div class="video-wrapper"><iframe src="https://www.youtube-nocookie.com/embed/n6RHV5BQZ2o" allowfullscreen></iframe></div><p><a href="https://www.youtube.com/watch?v=n6RHV5BQZ2o" target="_blank">Video auf YouTube öffnen</a></p>`}],
 sources:['UNO','Amnesty International','Human Rights Watch','DW Nachrichten']
};

const buttons=document.querySelectorAll('nav button[data-page]');
buttons.forEach(b=>b.onclick=()=>{buttons.forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('.page').forEach(p=>p.classList.remove('show'));document.getElementById(b.dataset.page).classList.add('show');if(b.dataset.page==='topics')renderTopics();if(b.dataset.page==='timeline')renderTimeline();if(b.dataset.page==='quiz')renderQuiz();if(b.dataset.page==='videos')renderVideos();if(b.dataset.page==='sources')renderSources();});

function renderHome(){home.innerHTML='<div class="card"><h3>Lernziele</h3><ul><li>Menschenrechte erklären</li><li>Beispiele aus China verstehen</li><li>Kritisch vergleichen</li></ul></div>'}
function renderTopics(){topics.innerHTML='';DATA.topics.forEach(t=>{topics.innerHTML+=`<div class="card"><h3>${t[0]}</h3><p>${t[1]}</p></div><div class="card merke"><strong>Merke:</strong> ${t[2]}</div>`})}
function renderTimeline(){timeline.innerHTML='';DATA.timeline.forEach(t=>timeline.innerHTML+=`<div class="card"><h3>${t[0]}</h3><p>${t[1]}</p></div>`)}
function renderVideos(){videos.innerHTML='';DATA.videos.forEach(v=>videos.innerHTML+=`<div class="card"><h3>${v.title}</h3><p>${v.desc}</p>${v.embed}<div class="card"><strong>Arbeitsauftrag:</strong><br>Schreibe zwei Gründe auf, warum die UNO China kritisiert.</div></div>`)}
function renderSources(){sources.innerHTML='<div class="card"><ul>'+DATA.sources.map(s=>`<li>${s}</li>`).join('')+'</ul></div>'}

function renderQuiz(){quiz.innerHTML='';let i=0,score=0;const bar=document.createElement('div');bar.className='progress';const fill=document.createElement('div');bar.appendChild(fill);quiz.appendChild(bar);const box=document.createElement('div');quiz.appendChild(box);function next(){if(i>=DATA.quiz.length){box.innerHTML=`<div class="card"><h3>Ergebnis</h3><p>${score}/${DATA.quiz.length}</p><p>${score>=9?'🏆 Du bist ein echter Menschenrechts-Experte!':score>=6?'✅ Gut gemacht!':'🔁 Wiederhole die Themen.'}</p></div>`;fill.style.width='100%';return;}fill.style.width=((i/DATA.quiz.length)*100)+'%';const q=DATA.quiz[i];box.innerHTML=`<div class="card"><h3>${q[0]}</h3></div>`;q[1].forEach((o,idx)=>{const d=document.createElement('div');d.className='option';d.textContent=o;d.onclick=()=>{if(idx===q[2])score++;i++;next();};box.appendChild(d)});}next();}
