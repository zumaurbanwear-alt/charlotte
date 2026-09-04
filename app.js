const PASSWORD = 'charlotte';
const SESSION_KEY = 'charlotte_session';
const PROGRESS_KEY = 'charlotte_progress';
const TODO_KEY = 'charlotte_todo';
const TODO_CATS_KEY = 'charlotte_todo_cats';

// LOGIN STARFIELD
const lc=document.getElementById('login-canvas'),lx=lc.getContext('2d');let lst=[];
function rsz2(){lc.width=innerWidth;lc.height=innerHeight;}
function mkLStars(){lst=[];for(let i=0;i<160;i++){const r=Math.random()*0.9+0.1;lst.push({x:Math.random()*lc.width,y:Math.random()*lc.height,r,a:Math.random()*Math.PI*2,sp:(Math.random()*0.001+0.0003)*(Math.random()<0.5?1:-1),maxA:Math.random()*0.4+0.05});}}
function drawL(){lx.clearRect(0,0,lc.width,lc.height);lst.forEach(s=>{s.a+=s.sp;const al=(Math.sin(s.a)*0.5+0.5)*s.maxA+0.02;lx.beginPath();lx.arc(s.x,s.y,s.r,0,Math.PI*2);lx.fillStyle=`rgba(235,232,228,${al})`;lx.fill();});requestAnimationFrame(drawL);}
rsz2();mkLStars();drawL();window.addEventListener('resize',()=>{rsz2();mkLStars();});

// LOGIN
const loginPage=document.getElementById('login-page'),pwInput=document.getElementById('pw-input'),pwBtn=document.getElementById('pw-btn'),pwError=document.getElementById('pw-error');
function unlock(){const val=pwInput.value.trim().toLowerCase();if(val===PASSWORD){sessionStorage.setItem(SESSION_KEY,'1');loginPage.classList.add('hidden');initApp();}else{pwError.classList.add('show');pwInput.value='';pwInput.focus();setTimeout(()=>pwError.classList.remove('show'),2500);}}
pwBtn.addEventListener('click',unlock);pwInput.addEventListener('keydown',e=>{if(e.key==='Enter')unlock();});
if(sessionStorage.getItem(SESSION_KEY)==='1'){loginPage.classList.add('hidden');initApp();}

function initApp(){
  let progress={c:[],r:[]};
  try{const s=localStorage.getItem(PROGRESS_KEY);if(s)progress=JSON.parse(s);}catch(e){}
  function saveProgress(){localStorage.setItem(PROGRESS_KEY,JSON.stringify(progress));}

  // COMPTE-JOURS
  const start = new Date('2025-12-31');
  const today = new Date();
  const days = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  const dayEl = document.getElementById('day-count');
  let current = 0;
  const duration = 1800;
  const step = days / (duration / 16);
  function animateDays() {
    current += step;
    if(current >= days){ dayEl.textContent = days; return; }
    dayEl.textContent = Math.floor(current);
    requestAnimationFrame(animateDays);
  }
  setTimeout(animateDays, 600);

  // ── CAPSULE TEMPORELLE ──
  // Change CAPSULE_DATE pour fixer la date d'ouverture (format: 'YYYY-MM-DD')
  // Change CAPSULE_MESSAGE pour écrire ton message
  const CAPSULE_DATE = '2026-12-31';
  const CAPSULE_MESSAGE = `Charlotte,

C'est le 31 décembre. Un an — presque exactement — depuis ce soir où tu es entrée dans ma vie sans prévenir, comme toutes les choses importantes entrent : sans bruit, sans annonce, comme si elles avaient toujours été là et qu'on venait juste de les remarquer.

Je t'écris depuis un endroit où je ne sais pas encore ce que cette année va nous apporter. C'est étrange d'écrire à quelqu'un qu'on aime sans savoir ce qu'on aura traversé ensemble d'ici là. Il y a quelque chose de vertigineux là-dedans — et quelque chose de beau aussi. Parce que je t'écris quand même. Parce que je suis assez sûre de toi, de nous, pour laisser des mots dans le futur sans avoir peur de ce qu'ils trouveront en arrivant.

Alors laisse-moi te dire ce que je sais.

Je sais que tu es la personne la plus étonnante que j'aie rencontrée. Pas de façon spectaculaire — tu ne cherches pas à épater. C'est ça, justement, qui est étonnant chez toi. Ta façon d'être entière sans le crier. Ta façon d'aimer sans condition et sans demi-mesure. Ta façon de te souvenir des petites choses, d'accorder de l'importance à ce que beaucoup de gens laissent glisser entre leurs doigts. Tu es quelqu'un qui <em>fait attention</em>. Et ça, dans un monde qui va trop vite, c'est rare et précieux.

Je sais que tu m'as changée — sans le vouloir, sans le savoir peut-être. Il y a des gens qui entrent dans ta vie et te laissent exactement pareille. Et il y a des gens qui, sans te demander la permission, réarrangent quelque chose en toi. Toi, tu as réarrangé quelque chose en moi. Tu m'as appris à ralentir. À recevoir sans m'excuser de prendre de la place. À laisser quelqu'un entrer vraiment, sans garder une issue de secours. Ce n'est pas rien. C'est même beaucoup.

Je sais que nos trajets en voiture comptent parmi mes moments préférés. Que j'aime comment tu ris de tes propres blagues avant d'arriver à la chute. Que ta façon de t'indigner pour les autres me touche chaque fois. Que quand tu t'endors, tu as cette façon de te laisser aller complètement, comme si tu faisais confiance au monde pour que rien ne t'arrive — et je trouve ça beau, et ça me donne envie d'être digne de cette confiance-là.

Je sais que tu mérites tout ce que je t'ai dit, tout ce que je t'ai écrit dans ces 200 raisons, dans ces lettres, dans tous ces endroits du site que j'ai construits pour toi. Pas parce que je l'ai décidé — mais parce que tu l'es, simplement, naturellement, sans effort. Tu es quelqu'un qui mérite d'être aimé bien. Et j'espère avoir été ça pour toi cette année — quelqu'un qui t'aime bien.

Il y a une étoile quelque part dans la constellation de la Lyre qui porte ton nom. Je te l'ai offerte parce que je trouvais ça beau. Mais aussi parce qu'une partie de moi voulait que quelque chose d'aussi permanent que le ciel garde la trace de ce que tu représentes pour moi. Les mots s'oublient. Les étoiles, non.

Si tu lis ces mots ce soir, c'est qu'on a tenu — toi et moi, tout ce qu'on est, tout ce qu'on a traversé, tout ce qu'on a ri, tout ce qu'on s'est dit dans les voitures stationnées et les nuits qui finissent trop tard. Et c'est déjà une très belle chose.

Bonne année, Charlotte.
Ma fleur. Ma yasmina. Mon étoile.
Je t'aime encore plus qu'il y a un an.
Et je compte bien continuer longtemps.`;



  const capsuleTarget = new Date(CAPSULE_DATE);
  capsuleTarget.setHours(22,22,0,0);
  const now = new Date();
  const capsuleLocked = document.getElementById('capsule-locked');
  const capsuleOpen   = document.getElementById('capsule-open');
  const capsuleCD     = document.getElementById('capsule-countdown');
  const capsuleMsg    = document.getElementById('capsule-message');

  function updateCapsule() {
    const now2 = new Date();
    const diff = capsuleTarget - now2;
    if(diff <= 0) {
      capsuleLocked.style.display = 'none';
      capsuleOpen.style.display = 'block';
      capsuleMsg.innerHTML = CAPSULE_MESSAGE.replace(/\n/g,'<br>');
    } else {
      const d = Math.floor(diff / (1000*60*60*24));
      const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
      const m = Math.floor((diff % (1000*60*60)) / (1000*60));
      const s = Math.floor((diff % (1000*60)) / 1000);
      capsuleCD.textContent = d + 'j ' + String(h).padStart(2,'0') + 'h' + String(m).padStart(2,'0') + 'm' + String(s).padStart(2,'0') + 's';
    }
  }
  updateCapsule();
  setInterval(updateCapsule, 1000);

  // STARFIELDS OVERLAY (todo + lettres)
  function makeOverlayStars(canvasId) {
    const c = document.getElementById(canvasId);
    if(!c) return;
    const x = c.getContext('2d');
    let st = [];
    function r() { c.width = innerWidth; c.height = innerHeight; }
    function mk() {
      st = [];
      for(let i=0;i<200;i++){
        const layer=Math.random()<0.7?0:Math.random()<0.7?1:2;
        const rad=layer===0?Math.random()*0.35+0.1:layer===1?Math.random()*0.55+0.3:Math.random()*0.85+0.5;
        const maxA=layer===0?0.22:layer===1?0.42:0.65;
        st.push({x:Math.random()*c.width,y:Math.random()*c.height,r:rad,a:Math.random()*Math.PI*2,sp:(Math.random()*0.0015+0.0003)*(Math.random()<0.5?1:-1),maxA});
      }
    }
    function draw() {
      x.clearRect(0,0,c.width,c.height);
      st.forEach(s=>{s.a+=s.sp;const al=(Math.sin(s.a)*0.5+0.5)*s.maxA+0.02;x.beginPath();x.arc(s.x,s.y,s.r,0,Math.PI*2);x.fillStyle=`rgba(235,232,228,${al})`;x.fill();});
      requestAnimationFrame(draw);
    }
    r(); mk(); draw();
    window.addEventListener('resize', ()=>{r(); mk();});
  }
  makeOverlayStars('todo-starfield');
  makeOverlayStars('lettres-starfield');

  // STARFIELD
  const cv=document.getElementById('starfield'),cx=cv.getContext('2d');let ST=[];
  function rsz(){cv.width=innerWidth;cv.height=Math.max(document.body.scrollHeight,innerHeight);}
  function mkStars(){ST=[];const n=Math.floor(cv.height/2.8);for(let i=0;i<n;i++){const layer=Math.random()<0.7?0:Math.random()<0.7?1:2;const r=layer===0?Math.random()*0.35+0.1:layer===1?Math.random()*0.55+0.3:Math.random()*0.85+0.5;const maxA=layer===0?0.22:layer===1?0.42:0.65;const bandY=cv.height*0.35+(Math.random()-0.5)*cv.height*0.5;const y=Math.random()<0.3?bandY+(Math.random()-0.5)*cv.height*0.2:Math.random()*cv.height;ST.push({x:Math.random()*cv.width,y,r,a:Math.random()*Math.PI*2,sp:(Math.random()*0.0015+0.0003)*(Math.random()<0.5?1:-1),maxA,ox:0,oy:0});}}

  // Suivi souris / doigt
  let mx = -9999, my = -9999;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY + window.scrollY; });
  window.addEventListener('touchmove', e => {
    if(e.touches[0]){ mx = e.touches[0].clientX; my = e.touches[0].clientY + window.scrollY; }
  }, { passive: true });
  window.addEventListener('touchend', () => { mx = -9999; my = -9999; });
  window.addEventListener('mouseleave', () => { mx = -9999; my = -9999; });

  function draw(){
    cx.clearRect(0,0,cv.width,cv.height);
    ST.forEach(s=>{
      s.a += s.sp;
      // Distance au curseur
      const dx = s.x - mx, dy = s.y - my;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const radius = 120;
      if(dist < radius && dist > 0){
        const force = (radius - dist) / radius * 0.6;
        s.ox += (dx/dist) * force;
        s.oy += (dy/dist) * force;
      }
      // Retour progressif à la position d'origine
      s.ox *= 0.92;
      s.oy *= 0.92;
      const al=(Math.sin(s.a)*0.5+0.5)*s.maxA+0.02;
      cx.beginPath();
      cx.arc(s.x + s.ox, s.y + s.oy, s.r, 0, Math.PI*2);
      cx.fillStyle=`rgba(235,232,228,${al})`;
      cx.fill();
    });
    requestAnimationFrame(draw);
  }
  rsz();mkStars();draw();window.addEventListener('resize',()=>{rsz();mkStars();});

  // MODAL
  const ov=document.getElementById('overlay'),mtag=document.getElementById('m-tag'),mtxt=document.getElementById('m-text'),mcl=document.getElementById('m-close');
  function openModal(tag,text){mtag.textContent=tag;mtxt.textContent=text;ov.classList.add('open');document.body.style.overflow='hidden';}
  function closeM(){ov.classList.remove('open');document.body.style.overflow='';}
  mcl.addEventListener('click',closeM);ov.addEventListener('click',e=>{if(e.target===ov)closeM();});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeM();});

  // 30 MOTS
  const compliments=["Éthérée","Céleste","Séraphique","Lyrique","Nébuleuse","Vertigineuse","Onirique","Ineffable","Épiphanique","Luminescente","Envoûtante","Vaporeuse","Hypnotique","Radieuse","Élégiaque","Astrale","Magnétique","Crépusculaire","Intemporelle","Mélodieuse","Diaphane","Féerique","Incandescente","Solaire","Mystique","Éblouissante","Aérienne","Harmonieuse","Flamboyante","Sidérale","Phosphorescente","Évanescente","Précieuse","Opulente","Veloutée","Cristalline","Ardente","Sublimée","Bienveillante","Ombreuse","Nacrée","Fulgurante","Délicate","Insondable","Vivace","Resplendissante","Mélancolique","Sacrée","Frémissante","Solennelle","Soyeuse","Singulière","Hallucinante","Pétillante","Absolue","Envoutée","Sublime","Lumineuse","Vénusienne","Enchanteresse"];
  const cgrid=document.getElementById('comp-grid'),cctr=document.getElementById('counter-c');let cfound=new Set(progress.c);
  for(let i=0;i<60;i++){const b=document.createElement('button');b.className='star-btn'+(cfound.has(i)?' found':'');b.setAttribute('aria-label','Mot numéro '+(i+1));b.innerHTML='<span class="s-num">'+(i+1)+'</span><span class="star-glyph">✦</span>';b.addEventListener('click',()=>{if(!cfound.has(i)){cfound.add(i);b.classList.add('found');progress.c=Array.from(cfound);saveProgress();cctr.textContent=cfound.size+' / 60 découverts';}openModal('Mot n° '+(i+1),compliments[i]);});cgrid.appendChild(b);}
  cctr.textContent=cfound.size+' / 60 découverts';

  // 200 RAISONS
  const raisons=["Ton rire qui remplit toute la pièce","La façon dont tu prononces mon prénom","Ton intelligence émotionnelle rare","Le coin de tes yeux qui se relève quand tu rigoles","Ta gentillesse désarmante","Ton sens du bien et du juste que j'admire profondément","Ta capacité à écouter d'une façon que peu de gens savent faire — vraiment écouter","Ta voix quand t'as sommeil","Ton rapport à la beauté, aux petites choses, à la vie — c'est poétique","Mon regard sur le monde évolue quand tu es là","Ton regard qui parle quand ta voix se tait","Ta tendresse inattendue","Ton sourire, ton SOURIRE, TON SOURIRE","Comment tu remarques les petites choses que tout le monde ignore","Ta curiosité pour tout (ta cuuuuriosité)","Ta manière de croire encore aux coïncidences heureuses","Ton courage pour me parler de tout, à cœur ouvert","Les battements de ton cœur quand tu t'endors","Le parfum de ta peau qui colle sur la mienne","Ta capacité à transformer n'importe quel endroit en maison (même une voiture - MÊME des toilettes)","Ta douceur constante - dans ta voix, tes caresses, toi toute entière","Nos silences complices","Ta façon d'aimer les petites choses, que les autres trouveraient ennuyeuses","Ton regard sur le monde","La confiance que tu places en moi","La façon dont tu peux rire aux larmes, à en devenir rouge","Ton instinct et ton intuition toujours juste","Ta présence qui apaise","Tes mains qui font les meilleures papouilles du monde","Ton âme profonde, sincère","Ta façon de défendre ce qui compte pour toi","Ton sérieux quand il le faut","Ta légèreté qui me fait toujours passer à autre chose","Nos fous rires et nos moments hyper drôles","Tu es une merveilleuse grande sœur","Ton énergie solaire, contagieuse","La façon dont tu t'occupes de moi sans que je n'aie à le demander","Ton regard quand on fait crac-crac","Ton sens du respect et des valeurs","Ton amour pour le sommeil","\"J'aime ta musicalité\"","Ta capacité à continuer même quand c'est difficile","Tes convictions solides et tes prises de positions","Ta façon de choisir tes batailles","Tu me montres que la vulnérabilité est une forme de courage","La façon dont tu te souviens des détails qui compte en ayant une mémoire de poisson rouge","Ton empathie naturelle, envers tout et tout le monde","Ta façon de me surprendre encore","Ta capacité à t'émerveiller sur un petit insecte ou un papillon","Tu choisis la bonté même quand ce n'est pas le chemin le plus facile.","Ta façon de m'embrasser","Les choses que tu as traversé et que j'admire en silence.","Ta façon d'assumer qui tu es pleinement","Ton regard sur les étoiles, mon étoile","Ton rapport aux principes de la vie qui rejoignent les miens","Nos avis concordants sur tout, comme si c'était le destin","Tes larmes de joie, après un café le matin","Ta façon de défendre les tiens","Ton rapport à la famille","Ta générosité sans compter","Ton lyrisme, ma muse","Ton humilité sincère","Tu m'inspires : des mots, des poèmes.. des sites web","La vie a meilleur goût depuis que tu es là","Nos moments devant la mer, à parler","Comment t'es à l'aise même dans le silence avec moi","La façon dont tu dors hyper tôt, petite grand-mère","Parce que les trajets en voiture pour partir chez toi sont devenus mes moments préférés (et être chez toi du coup aussi)","Ta façon de pardonner, sans oublier ce qui importe","Parce que tu m'envoies 50 tiktok à longueur de soirée (et que je les regarde tous d'un coup)","C'est tellement mignon la façon dont tu n'arrives jamais à prendre une décision","Tu chantes comme un ange et je suis amoureuse de ta voix","Comment je te fais rire, même quand c'est absolument pas drôle","La chaleur que tu portes autour de toi, quand tu m'entoures d'un câlin","Ton côté Charlotte la fraise, toujours","Ta façon de faire du quotidien quelque chose de beau, même un mardi ordinaire","Tes petites habitudes que j'aime, de nos \"bonjour\" jusqu'à ta petite larmichette avant de dormir","La façon dont tu me racontes tes rêves à chaque fois","Ta façon de nous vivre pleinement, dans le présent","Ta façon de m'apprendre à ralentir et de m'éviter de trop m'avancer","Parce que tu gardes des choses significatives pour toi dans une boîte à souvenirs","La façon avec laquelle mes journées gravitent autour de toi","J'adore quand tu crois débiter et que tu perds tes mots","Tu as une mémoire des émotions que je trouve presque magique","Nos trajets en voiture, le soir, en journée, tous","Tes mains dans les miennes et tes doigts qui jouent avec les miens","Tu comprends les choses que je n'arrive pas à formuler","Ton amour de la musique","Nos discussions interminables sur le sexe","Nos passages constants de cap","Tes cheveux blonds, les boucles luxuriantes, toujours avec des antennes au vent","Tes fesses, tes cuisses, tes boobies, ta mâchoire, ton cou, ton dos, tes mains, TOUT ton corps","La façon dont tu gardes les souvenirs","Ton rapport à la vérité","Tes yeux verts (avec beaucoup de verts) qui brillent au soleil","J'adore te chatouiller (mais je me suis rendue compte que je pouvais te faire pleurer, nul)","La façon dont tu lis le tarot en y croyant spirituellement","Même nos signes astrologiques sont parfaits l'un pour l'autre","Ta façon de faire du yoga pour te reconnecter à la nature","Les qualités que tu ne vois pas encore chez toi mais je te répéterais à chaque fois","La façon dont tu m'as accepté, en prenant le risque sans demi-mesure (merci)","Ta grâce naturelle et ton élégance","Ta façon de fondre pendant nos câlins, je trouve ça trop mignon","Parce que tu n'as jamais de mal à tester de nouvelles choses en ma compagnie","Tu as des expressions à toi que j'ai commencé à utiliser sans m'en rendre compte (OUEEE)","Comment tu m'as mise à l'aise avec mon propre corps et ma capacité à recevoir","Le fait que tu ris de tes propres blagues avant même d'arriver à la chute (avec ton rire décalé en retard là)","Tes élans d'affection soudains, tes bisous soudains, tes mini-claques soudaines","Parce que tu m'as fait écouter et regarder des trucs auxquels je me serais jamais intéressée sans toi","Parce que je sais qu'on peut s'embrouiller sur un truc et que ça ne remet pas tout en question","Parce que tu corresponds parfaitement à ce que je recherche en terme de love language","Tes petits défauts que j'aime, j'aime tout de toi","T'es ma fleur, ma yasmina","Parce que tu me dis quand tu n'es pas d'accord, et je te fais confiance pour ça.","Parce que nous avons déjà des \"nous\" — des blagues à nous, des habitudes à nous, un monde à nous.","Ton rapport à l'amour (et comment tu me dis je t'aime)","Parce que je peux être malade, fatiguée, défaite — et tu me regardes pareil","Ton caractère trempé dans le feu doux","Parce que tu ne me fais pas sentir trop grande, trop petite, trop compliquée","Parce que je peux passer des heures à te regarder","Parce qu'avec toi, j'ai arrêté de me rétrécir","Ta façon de dire merci pour des choses insignifiantes, le minimum","Parce que tu penses à moi sans raison précise à 5h du matin","La façon dont tu me fais de la place — dans tes journées, dans tes pensées, dans tes plans","Dormir près de toi est une des choses les plus paisibles que je connaisse","Je m'endors en pensant à toi et je me réveille pareil","Comment nos nuits à parler jusqu'à l'aube ont compté parmi mes plus belles","Comment tu as tes peurs, tes doutes, tes cicatrices — et tu avances quand même","Comment tu t'autorises à être triste, et ça te rend humaine et vraie","Parce que tu finis parfois mes phrases et moi les tiennes","Comment nous pouvons passer des heures ensemble sans nous ennuyer","Comment on est à l'aise pour tout et c'est ce qui rend tout merveilleux avec toi","Ton rapport à ton corps et comment tu m'y autorises petit à petit","Parce que t'es mon meilleur coup, le meilleur sexe de ma vie","Parce que tous les critères de mon je t'aime sont atteints","Parce que je me retrouve rarement aussi obsédée par quelqu'un","Parce que tu m'apprends petit à petit à recevoir de l'amour sans m'excuser","La façon dont tu ES art et art est toi (reprends le dessin s'il te plaît)","Sans toi, mes journées n'ont pas de sens, pas de soleil","Parce que tu me montres que je mérite d'être choisie","Parce qu'aimer une femme, c'est aussi s'aimer un peu soi-même","Parce que je veux voyager avec toi","Parce que je veux encore plein de premières fois avec toi","Parce qu'il y a des choses entre nous que parfois seul le silence peut contenir","Ta façon d'habiter une pièce quand tu t'y trouves","Parce qu'il suffit que tu sois dans la même pièce pour que tout aille mieux","Ta voiture orange, faut pas l'oublier","Pour Baloo, Grizou et Pinky aussi","Ta façon de conserver des liens même quand les souvenirs ne sont pas heureux, car le sens du sacré prime chez toi","Ton rapport à l'amitié et comment tu gères les tiennes","Parce que je ne sais pas exactement quand je suis TOMBÉE AMOUREUSE de toi, et je trouve ça magnifique","Parce que tu es devenue une évidence","Parce que tu t'entends avec toutes les parties de mon entourage","Parce que je ne peux pas imaginer ne pas t'avoir rencontrée","J'aime ton rythme de vie, ton cadre de vie et je trouve ça super important","Ta façon de me faire des massages et de me craquer le dos","Parce que tu fais les meilleures papouilles au monde et que tu connais tous mes points faibles","Quand t'es un peu jalouse et je trouve ça trop sex","Comment tu me caches pas : tu m'aimes fort et tu l'assumes (ça me tient beaucoup à cœur)","Ta foi en les bonnes choses qui peuvent arriver et comment tu attires les énergies positives","Parce que je choisis de t'aimer chaque matin.","Parce que tu mérites d'être aimée comme tu aimes, avec toute la force et la passion qui va avec","Parce que je veux être cette personne pour toi, qui t'apporte du positif","Parce que rien de tout ça n'est parfait, et c'est parfait quand même","Tes petites habitudes de langage \"twerk, twin, REDBULL\", c'est trop mignon","La façon avec laquelle ta bizarrerie est magnifique et match parfaitement la mienne","Ton ironie douce et ton sarcasme bien placé","Ta façon de ne pas te prendre trop au sérieux","Tes moments d'enfance qui ressurgissent","La façon dont tu joues, de plus en plus souvent et j'adore ça","Ton imagination et je suis heureuse de voir que t'es à l'aise de l'exprimer avec moi","Parce que je n'ai pas fini de te découvrir, et cette idée me rend heureuse","Tes réactions totalement spontanées","La façon dont tu t'indigne pour les autres comme si c'était pour toi","Comment tu mets tes jambes sur les miennes quand on s'asseoit à côté","La magie qui passe entre nous le soir, en voiture, stationnée et que je ne comprends pas","Tes hésitations honnêtes et ta façon de prendre ton temps avec de trancher","La façon dont tu demandes pardon alors que t'as quand même rien fait","Ton rapport love/hate du soleil (je t'aime même cramée)","Ta façon d'écouter le vent comme une musique","Ton rapport mélancolique et tendre aux saisons","La manière dont tu évolues sans jamais trahir qui tu es","Ton besoin de liberté et la beauté avec laquelle tu la portes","Ta façon de toujours vouloir devenir une meilleure version de toi-même","Tes instants de lucidité qui me bouleversent parfois par leur justesse","La façon dont tu regardes par la fenêtre en voiture","Ton amour profond pour les langues, les nuances et les silences","Ta manière d'exister sans jamais être banale","Ton rire fatigué à la fin des longues journées","Tes pensées qui partent dans tous les sens et que j'écoute quand même jusqu'au bout","Ton air perdu quand tu réfléchis trop longtemps","Tes messages au milieu de la nuit que je relis encore le lendemain","Parce que tu parles à Pablo et que je ne sais pas ce que tu lui dis exactement","La façon dont tu existes un peu partout dans ma mémoire","Les secondes juste avant que tu éclates de rire","La façon dont tu existes pleinement dans chaque émotion","Les détails de toi que personne remarque autant que moi","Les moments où tu redeviens presque enfant sans t'en rendre compte","Ta présence qui reste longtemps même après ton départ","Parce que je t'aime — simplement, profondément, pour toutes ces raisons et pour toutes celles que je n'ai pas encore de mots pour dire."];
  const grid=document.getElementById('stars-grid'),ctr=document.getElementById('counter');let found=new Set(progress.r);
  for(let i=0;i<200;i++){const b=document.createElement('button');b.className='star-btn'+(found.has(i)?' found':'');b.setAttribute('aria-label','Raison numéro '+(i+1));b.innerHTML='<span class="s-num">'+(i+1)+'</span><span class="star-glyph">✦</span>';b.addEventListener('click',()=>{if(!found.has(i)){found.add(i);b.classList.add('found');progress.r=Array.from(found);saveProgress();ctr.textContent=found.size+' / 200 découvertes';if(found.size===200){setTimeout(showSurprise,400);}}openModal('Raison n° '+(i+1),raisons[i]||'Cette raison est trop précieuse pour des mots.');});grid.appendChild(b);}
  ctr.textContent=found.size+' / 200 découvertes';

  // SURPRISE 200
  const surpriseOverlay = document.getElementById('surprise-overlay');
  const surpriseClose = document.getElementById('surprise-close');
  const surpriseCanvas = document.getElementById('surprise-canvas');
  const sc = surpriseCanvas.getContext('2d');
  let shootingStars = [];

  function showSurprise(){
    // Ferme le modal d'abord
    ov.classList.remove('open');
    document.body.style.overflow = 'hidden';
    surpriseOverlay.classList.add('open');
    surpriseCanvas.width = innerWidth;
    surpriseCanvas.height = innerHeight;
    shootingStars = [];
    for(let i=0;i<18;i++){
      setTimeout(()=>{
        shootingStars.push({
          x: Math.random()*innerWidth*0.8,
          y: Math.random()*innerHeight*0.4,
          len: Math.random()*120+60,
          speed: Math.random()*6+4,
          alpha: 1,
          angle: Math.PI/4 + (Math.random()-0.5)*0.3
        });
      }, i*180);
    }
    animateSurprise();
  }

  function animateSurprise(){
    if(!surpriseOverlay.classList.contains('open')) return;
    sc.clearRect(0,0,surpriseCanvas.width,surpriseCanvas.height);
    shootingStars.forEach((s,idx)=>{
      s.x += Math.cos(s.angle)*s.speed;
      s.y += Math.sin(s.angle)*s.speed;
      s.alpha -= 0.012;
      if(s.alpha <= 0) return;
      sc.save();
      sc.globalAlpha = s.alpha;
      const grad = sc.createLinearGradient(s.x,s.y,s.x-Math.cos(s.angle)*s.len,s.y-Math.sin(s.angle)*s.len);
      grad.addColorStop(0,'rgba(212,201,176,0.9)');
      grad.addColorStop(1,'rgba(212,201,176,0)');
      sc.strokeStyle = grad;
      sc.lineWidth = 1.2;
      sc.beginPath();
      sc.moveTo(s.x,s.y);
      sc.lineTo(s.x-Math.cos(s.angle)*s.len,s.y-Math.sin(s.angle)*s.len);
      sc.stroke();
      sc.restore();
    });
    shootingStars = shootingStars.filter(s=>s.alpha>0);
    // Relance des étoiles filantes en boucle
    if(shootingStars.length < 3){
      shootingStars.push({
        x: Math.random()*innerWidth*0.7,
        y: Math.random()*innerHeight*0.35,
        len: Math.random()*120+60,
        speed: Math.random()*5+4,
        alpha: 1,
        angle: Math.PI/4+(Math.random()-0.5)*0.3
      });
    }
    requestAnimationFrame(animateSurprise);
  }

  surpriseClose.addEventListener('click',()=>{
    surpriseOverlay.classList.remove('open');
    document.body.style.overflow='';
  });

  // ── TODO ──
  // Categories de base dans le code 
  const baseCats = [
    { title: '✦ Random à faire', items: ["Meilleure librairie de Casa","Les autres Oracles","Magasin vintage","La grotte d'Ali Baba","Concept store","Billard","Prendre le tram","Massages","Le meilleur câlin du monde","Un film dans la voiture","Pottery painting","Karting","Apprendre à fabriquer les fleurs","Tous les films Stitch","Barbie (finir Barbie...)","Bowling","Moonlamp","Petites voitures pour les gosses","Journée Spa","Le truc des bisous rouge à lèvres","Flower walk","Aller au souk"]},
    { title: '✦ Manger', items: ["Glacier Baggli","Chez Aicha la vietnamienne","Loqma","Miga","Picks","Pizza Di Papi","Chocochino","Frita guy","Pancakes and waffle","Sushi Hiro","Rosanne","Nelly Burger","Sora Sushi","Route Us","Sea food boil","Loony"]},
    { title: '✦ Side Quest', items: ["Écrire un son ensemble","Découvrir les fleurs de charlotte","Manger des bêtises","Chef Charlotte l'apprenti cuisinière","Chef Lily l'apprenti pâtissière","Charlotte le papillon de la nage","Charlotte la whineuse","Peindre ensemble"]},
    { title: '✦ Movies — aller beaucoup au cinéma', items: ["Labyrinthe","Reminders of us","Les lignes courbes de dieu","Hamnet","Shutter Island","From Paris"]},
    { title: '✦ Les exceptionnels', items: ["Saut en parachute à Benslimane"]},
    { title: '✦ Chez Charlotte', items: ["À compléter..."]}
  ];

  // Charger les cats custom ajoutées par elle (stockées séparément)
  let customCats = [];
  try { const s = localStorage.getItem(TODO_CATS_KEY); if(s) customCats = JSON.parse(s); } catch(e){}
  function saveCustomCats(){ localStorage.setItem(TODO_CATS_KEY, JSON.stringify(customCats)); }

  // État des cases cochées
  let todoState = {};
  try { const s = localStorage.getItem(TODO_KEY); if(s) todoState = JSON.parse(s); } catch(e){}
  function saveTodo(){ localStorage.setItem(TODO_KEY, JSON.stringify(todoState)); }

  const TODO_DELETED_KEY = 'charlotte_todo_deleted';
  let deletedItems = {};
  try { const s = localStorage.getItem(TODO_DELETED_KEY); if(s) deletedItems = JSON.parse(s); } catch(e){}
  function saveDeleted(){ localStorage.setItem(TODO_DELETED_KEY, JSON.stringify(deletedItems)); }

  const todoListEl = document.getElementById('todo-list');
  const todoCount = document.getElementById('todo-count');
  const todoFill = document.getElementById('todo-fill');
  const todoPage = document.getElementById('todo-page');
  const todoBackBtn = document.getElementById('todo-back');
  const navTodoBtn = document.getElementById('nav-todo-btn');
  let totalItems = 0;

  function buildCategory(cat, ci, isCustom) {
    const catEl = document.createElement('div');
    catEl.className = 'todo-category';

    // Header avec titre + bouton +
    const header = document.createElement('div');
    header.className = 'todo-cat-header';
    const titleEl = document.createElement('p');
    titleEl.className = 'todo-category-title';
    titleEl.textContent = cat.title;
    const addBtn = document.createElement('button');
    addBtn.className = 'todo-add-item-btn';
    addBtn.textContent = '+ ajouter';
    header.appendChild(titleEl);
    header.appendChild(addBtn);
    // Delete category button (only for custom cats)
    if(isCustom){
      const delCatBtn = document.createElement('button');
      delCatBtn.className = 'todo-delete-cat';
      delCatBtn.textContent = '✕';
      delCatBtn.title = 'Supprimer la catégorie';
      delCatBtn.addEventListener('click', () => {
        if(!confirm('Supprimer cette catégorie ?')) return;
        const idx = customCats.indexOf(cat);
        if(idx > -1){ customCats.splice(idx, 1); saveCustomCats(); }
        // Remove all todo states for this cat
        Object.keys(todoState).forEach(k => { if(k.startsWith(ci+'-')) delete todoState[k]; });
        saveTodo();
        catEl.remove();
        totalItems = Math.max(0, totalItems - cat.items.length);
        updateProgress();
      });
      header.appendChild(delCatBtn);
    }
    catEl.appendChild(header);

    // Inline add form
    const addForm = document.createElement('div');
    addForm.className = 'todo-add-form';
    const addInput = document.createElement('input');
    addInput.className = 'todo-add-input';
    addInput.type = 'text';
    addInput.placeholder = 'Nouveau truc...';
    const addConfirm = document.createElement('button');
    addConfirm.className = 'todo-add-confirm';
    addConfirm.textContent = 'Ajouter ✦';
    addForm.appendChild(addInput);
    addForm.appendChild(addConfirm);
    catEl.appendChild(addForm);

    addBtn.addEventListener('click', () => {
      addForm.classList.toggle('open');
      if(addForm.classList.contains('open')) addInput.focus();
    });

    function addItem(text) {
      text = text.trim();
      if(!text) return;
      cat.items.push(text);
      if(isCustom) saveCustomCats();
      const ii = cat.items.length - 1;
      const key = ci + '-' + ii;
      totalItems++;
      appendItem(catEl, addForm, text, key, true);
      updateProgress();
      addInput.value = '';
      addForm.classList.remove('open');
    }

    addConfirm.addEventListener('click', () => addItem(addInput.value));
    addInput.addEventListener('keydown', e => { if(e.key === 'Enter') addItem(addInput.value); });

    // Items existants
    cat.items.forEach((item, ii) => {
      const key = ci + '-' + ii;
      if(deletedItems[key]) return; // skip deleted
      totalItems++;
      appendItem(catEl, addForm, item, key, true);
    });

    todoListEl.appendChild(catEl);
    return catEl;
  }

  function appendItem(catEl, addForm, item, key, isCustomItem) {
    const row = document.createElement('div');
    row.className = 'todo-item' + (todoState[key] ? ' done' : '') + (isCustomItem ? ' custom' : '');
    row.innerHTML = '<div class="todo-check"></div><span class="todo-label">' + item + '</span>';
    // Delete button for custom items
    if(isCustomItem){
      const delBtn = document.createElement('button');
      delBtn.className = 'todo-delete-item';
      delBtn.textContent = '✕';
      delBtn.title = 'Supprimer';
      delBtn.addEventListener('click', e => {
        e.stopPropagation();
        delete todoState[key];
        deletedItems[key] = true;
        saveTodo();
        saveDeleted();
        row.remove();
        totalItems = Math.max(0, totalItems - 1);
        updateProgress();
      });
      row.appendChild(delBtn);
    }
    row.addEventListener('click', () => {
      todoState[key] = !todoState[key];
      row.classList.toggle('done', todoState[key]);
      saveTodo(); updateProgress();
    });
    catEl.insertBefore(row, addForm);
  }

  // Build all base + custom categories
  const allCats = [...baseCats, ...customCats];
  allCats.forEach((cat, ci) => buildCategory(cat, ci, ci >= baseCats.length));

  function updateProgress(){
    const done = Object.values(todoState).filter(Boolean).length;
    todoCount.textContent = done + ' / ' + totalItems + ' complétées';
    todoFill.style.width = totalItems ? (done / totalItems * 100) + '%' : '0%';
  }
  updateProgress();

  // ON FAIT QUOI
  const pickerBtn = document.getElementById('todo-picker-btn');
  const pickerResult = document.getElementById('todo-picker-result');

  pickerBtn.addEventListener('click', () => {
    // Collecte tous les items non cochés et non supprimés
    const available = [];
    allCats.forEach((cat, ci) => {
      cat.items.forEach((item, ii) => {
        const key = ci + '-' + ii;
        if(!todoState[key] && !deletedItems[key]) available.push(item);
      });
    });
    if(available.length === 0){
      pickerResult.textContent = 'On a tout fait !';
      return;
    }
    pickerResult.style.opacity = '0';
    setTimeout(() => {
      const pick = available[Math.floor(Math.random() * available.length)];
      pickerResult.textContent = pick;
      pickerResult.style.opacity = '1';
    }, 200);
  });

  // Nouvelle catégorie
  const newCatBtn = document.getElementById('new-cat-btn');
  const newCatForm = document.getElementById('new-cat-form');
  const newCatInput = document.getElementById('new-cat-input');
  const newCatConfirm = document.getElementById('new-cat-confirm');

  newCatBtn.addEventListener('click', () => {
    newCatForm.classList.toggle('open');
    if(newCatForm.classList.contains('open')) newCatInput.focus();
  });

  function addCategory() {
    const name = newCatInput.value.trim();
    if(!name) return;
    const newCat = { title: '✦ ' + name, items: [] };
    customCats.push(newCat);
    saveCustomCats();
    const ci = allCats.length;
    allCats.push(newCat);
    buildCategory(newCat, ci, true);
    newCatInput.value = '';
    newCatForm.classList.remove('open');
  }
  newCatConfirm.addEventListener('click', addCategory);
  newCatInput.addEventListener('keydown', e => { if(e.key === 'Enter') addCategory(); });

  // Ouvrir / fermer todo
  navTodoBtn.addEventListener('click', () => {
    todoPage.classList.add('open');
    navTodoBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  todoBackBtn.addEventListener('click', () => {
    todoPage.classList.remove('open');
    navTodoBtn.classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('todo-inner').scrollTop = 0;
  });

  // ── LETTRES ──
  const LETTRES_KEY = 'charlotte_lettres';

  // ════════════════════════════════════════
  // AJOUTER LETTRES ICI
  // Pour chaque lettre : { title: "Lettre n° X", text: `texte ici` }
  const lettres = [
    {
      title: "Lettre n° 1",
      text: `Charlotte,

Cette lettre est la première d'une longue série — du moins, c'est ce que je me promets.

Il y a des choses que je n'arrive pas toujours à te dire de vive voix. Pas parce que je ne les ressens pas, mais parce que certaines émotions ont besoin d'un peu de silence autour d'elles pour exister vraiment. Alors j'ai décidé de t'écrire. Ici, dans cet endroit que j'ai construit pour toi, il y aura des lettres. Pas à des occasions précises, pas à des dates fixes — juste quand quelque chose en moi aura besoin de prendre la forme de mots pour toi.

Je ne sais pas exactement ce que je t'écrirai. Peut-être des choses que j'observe et que je garde pour moi. Peut-être des moments qu'on a vécus et que je veux immortaliser quelque part. Peut-être juste des je t'aime, dit différemment à chaque fois.

Considère cet endroit comme ma façon de continuer à te choisir, même dans le silence.`
    },
    
    {
      title: "Lettre n° 2 - 13/07/2026",
      text: `Charlotte,

Aujourd'hui, il ne s'est rien passé d'extraordinaire. Tu m'as juste un peu beaucoup manquée. Et c'est peut-être justement pour ça que je t'écris.

On croit souvent que les grandes déclarations naissent des grands moments. Pourtant, je me rends compte qu'avec toi ce sont souvent les instants les plus ordinaires qui me marquent le plus. Une façon que tu as de sourire sans t'en rendre compte. Une phrase que tu répètes souvent. Le silence confortable qui s'installe quand on n'a plus besoin de remplir chaque seconde avec des mots.

J'aime apprendre ces détails-là de toi. 

J'aime découvrir la personne que tu es dans les gestes auxquels tu ne fais même plus attention. Parce que c'est là que tout devient vrai. Ce n'est pas la version de toi que le monde voit, mais celle qui existe quand tu oublies d'être regardée.

J'aime penser qu'on passe notre vie à connaître quelqu'un sans jamais avoir fini de le découvrir. Et, étrangement, cette idée me rassure. Elle me dit qu'il y aura toujours quelque chose de nouveau à aimer chez toi.

Alors aujourd'hui, je voulais simplement laisser une trace de cette pensée. J'aimerais que ces lettres deviennent le carnet discret de tout ce qui fait notre histoire : les détails, les habitudes, les petites évidences.

JE T'AIME. Et en même jour, le 13 février, on s'embrassait pour la première fois dans ta voiture.`
    },
    // ── LETTRE 3 ── 
    {
      title: "Lettre n° 3 — Pour mon anniversaire",
      text: `Charlotte,

Tu m'as offert des lettres pour quand tu me manques, pour quand j'en aurais besoin. Je t'en écris une pour te dire à quel point j'en suis reconnaissante.

Elles sont encore chez toi malheureusement, mais je les récupère très bientôt. Tu as pensé à moi avant même que j'en aie besoin. Tu as anticipé mes jours difficiles, mes absences de toi, mes nuits trop longues et tu y as déposé ta voix, tes mots, toi. C'est une des choses les plus belles qu'on m'ait jamais faites.

Le bracelet, le carnet, le parfum, je les aime parce qu'ils viennent de toi. Mais les lettres, les lettres je les garderai précieusement. Parce qu'elles me feront te sentir proche même quand tu es loin. Parce que tu as mis du temps, de l'attention, de l'amour dedans et ça, ça ne s'oublie pas.

Je voulais que tu saches que ce cadeau m'a touchée profondément. Plus que tu ne le crois peut-être. Parce que tu m'as vue, tu as vu ce dont j'aurais besoin et tu y as répondu avant même que je le demande. C'est ça, prendre soin de quelqu'un.

Merci de me choisir comme ça. Merci de m'aimer avec autant d'attention et de douceur. Merci d'exister et d'être toi, ma Charlotte, mon bébé, mon étoile.

Je t'aime. Fort. Tu me fais retomber amoureuse de toi chaque jour. 

Rappelons-nous pour toujours de la sensation de retomber pour l'autre, comme ce 1er Septembre au cinéma.`
    },
    // ── LETTRE 4 ── 
    // {
    //   title: "Lettre n° 4",
    //   text: `texte ici`
    // },
  ];
  // ════════════════════════════════════════

  let lettresOpened = {};
  try { const s = localStorage.getItem(LETTRES_KEY); if(s) lettresOpened = JSON.parse(s); } catch(e){}
  function saveLettres(){ localStorage.setItem(LETTRES_KEY, JSON.stringify(lettresOpened)); }

  const envGrid = document.getElementById('envelopes-grid');
  const lettreOverlay = document.getElementById('lettre-overlay');
  const lettreNum = document.getElementById('lettre-num');
  const lettreContent = document.getElementById('lettre-content');
  const lettreClose = document.getElementById('lettre-close');

  lettres.forEach((l, i) => {
    const btn = document.createElement('button');
    btn.className = 'envelope-btn' + (lettresOpened[i] ? ' opened' : '');
    btn.innerHTML = `<span class="envelope-icon">✦</span><span class="envelope-num">Lettre ${i+1}</span>`;
    btn.addEventListener('click', () => {
      if(!lettresOpened[i]){
        lettresOpened[i] = true;
        btn.classList.add('opened');
        saveLettres();
      }
      lettreNum.textContent = l.title;
      lettreContent.textContent = l.text;
      lettreOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    envGrid.appendChild(btn);
  });

  function closeLettreModal(){ lettreOverlay.classList.remove('open'); document.body.style.overflow = ''; }
  lettreClose.addEventListener('click', closeLettreModal);
  lettreOverlay.addEventListener('click', e => { if(e.target === lettreOverlay) closeLettreModal(); });

  const navLettresBtn = document.getElementById('nav-lettres-btn');
  const lettresPage = document.getElementById('lettres-page');
  const lettresBack = document.getElementById('lettres-back');

  navLettresBtn.addEventListener('click', () => {
    lettresPage.classList.add('open');
    navLettresBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  lettresBack.addEventListener('click', () => {
    lettresPage.classList.remove('open');
    navLettresBtn.classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('lettres-inner').scrollTop = 0;
  });

  // ── SON AMBIANT ──
  const audio = new Audio('birds.mp3');
  audio.loop = true;
  audio.volume = 0.25;
  const soundBtn = document.getElementById('nav-sound-btn');
  let soundOn = false;
  soundBtn.addEventListener('click', () => {
    soundOn = !soundOn;
    if(soundOn){
      audio.play();
      soundBtn.textContent = 'ON';
      soundBtn.classList.add('on');
    } else {
      audio.pause();
      soundBtn.textContent = 'OFF';
      soundBtn.classList.remove('on');
    }
  });

  // ── GALERIE ──
  // Pour ajouter des photos : ajoute simplement "album21.png", "album22.png"... à la liste
  const photos = [
    'album1.JPG','album2.JPG','album3.JPG','album4.JPG','album5.JPG',
    'album6.JPG','album7.JPG','album8.JPG','album9.JPG','album10.JPG',
    'album11.JPG','album12.JPG','album13.JPG','album14.JPG','album15.JPG',
    'album16.JPG','album17.JPG','album18.JPG','album19.JPG','album20.JPG'
  ];

  const galleryGrid = document.getElementById('gallery-grid');
  const lightbox    = document.getElementById('lightbox');
  const lbImg       = document.getElementById('lightbox-img');
  const lbClose     = document.getElementById('lightbox-close');
  const lbPrev      = document.getElementById('lightbox-prev');
  const lbNext      = document.getElementById('lightbox-next');
  let currentPhoto  = 0;

  photos.forEach((src, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Charlotte & Lily ' + (i + 1);
    img.loading = 'lazy';
    item.appendChild(img);
    item.addEventListener('click', () => openLightbox(i));
    galleryGrid.appendChild(item);
  });

  function openLightbox(i) {
    currentPhoto = i;
    lbImg.src = photos[i];
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  function showPhoto(i) {
    currentPhoto = (i + photos.length) % photos.length;
    lbImg.src = photos[currentPhoto];
  }

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
  lbPrev.addEventListener('click', e => { e.stopPropagation(); showPhoto(currentPhoto - 1); });
  lbNext.addEventListener('click', e => { e.stopPropagation(); showPhoto(currentPhoto + 1); });
  document.addEventListener('keydown', e => {
    if(!lightbox.classList.contains('open')) return;
    if(e.key === 'ArrowLeft') showPhoto(currentPhoto - 1);
    if(e.key === 'ArrowRight') showPhoto(currentPhoto + 1);
    if(e.key === 'Escape') closeLightbox();
  });

} // end initApp
