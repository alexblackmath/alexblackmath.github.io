(() => {
  'use strict';
  const body = document.body;
  const rule = body.dataset.rule;
  if (!rule) return;

  const CONFIG = {
    heads: { label: 'first H', target: 'H', theory: 2, minExplore: 5, stop: (seq, f) => f === 'H' },
    tails: { label: 'first T', target: 'T', theory: 2, minExplore: 5, stop: (seq, f) => f === 'T' },
    hh: { label: 'first HH', target: 'HH', theory: 6, minExplore: 5, stop: (seq, f) => seq.length >= 2 && seq[seq.length - 2] === 'H' && f === 'H' },
    th: { label: 'first TH', target: 'TH', theory: 4, minExplore: 5, stop: (seq, f) => seq.length >= 2 && seq[seq.length - 2] === 'T' && f === 'H' }
  };
  const cfg = CONFIG[rule];
  const $ = id => document.getElementById(id);
  const state = { prediction: null, trials: [], many: [], running: [], busy: false, manyCount: 1000, theoryRevealed: false };

  const els = {
    prediction: $('prediction'), lockPrediction: $('lockPrediction'), predictionSaved: $('predictionSaved'),
    exploreStage: $('exploreStage'), manyStage: $('manyStage'), runOne: $('runOne'), fastOne: $('fastOne'),
    coin: $('coin'), trialSeq: $('trialSeq'), trialResult: $('trialResult'), trialCounter: $('trialCounter'),
    trialList: $('trialList'), sampleMean: $('sampleMean'), unlockNote: $('unlockNote'), unlockMany: $('unlockMany'),
    runMany: $('runMany'), simProgress: $('simProgress'), simText: $('simText'), simCount: $('simCount'),
    manyMean: $('manyMean'), theoryValue: $('theoryValue'), errorValue: $('errorValue'), revealTheory: $('revealTheory'),
    histCanvas: $('histCanvas'), runningCanvas: $('runningCanvas')
  };

  function flip() { return Math.random() < .5 ? 'H' : 'T'; }
  function simulate() {
    const seq = [];
    for (let i = 0; i < 10000; i++) {
      const f = flip(); seq.push(f);
      if (cfg.stop(seq, f)) return { n: seq.length, seq };
    }
    return { n: seq.length, seq };
  }
  function mean(arr) { return arr.length ? arr.reduce((s, x) => s + x.n, 0) / arr.length : 0; }
  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
  function reducedMotion() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

  function setStage(stage, locked) {
    stage.classList.toggle('locked', locked);
    stage.querySelectorAll('button,input,select').forEach(el => { if (!el.dataset.keepEnabled) el.disabled = locked; });
  }
  function updateProgress() {
    const steps = [...document.querySelectorAll('.progress-step')];
    steps.forEach((s, i) => { s.classList.remove('active','done'); if (i === 0) s.classList.add(state.prediction === null ? 'active' : 'done'); });
    if (state.prediction !== null) steps[1].classList.add(state.trials.length >= cfg.minExplore ? 'done' : 'active');
    if (state.trials.length >= cfg.minExplore) steps[2].classList.add('active');
  }
  function token(f, stop = false) {
    const el = document.createElement('span'); el.className = 'flip-token' + (stop ? ' stop' : ''); el.textContent = f; return el;
  }
  function mini(f) { return `<span class="mini">${f}</span>`; }
  function renderHistory() {
    els.trialCounter.textContent = `${state.trials.length} individual trial${state.trials.length === 1 ? '' : 's'}`;
    els.sampleMean.textContent = state.trials.length ? mean(state.trials).toFixed(2) : '—';
    if (!state.trials.length) {
      els.trialList.innerHTML = '<div class="microcopy">Your individual trials will collect here.</div>';
    } else {
      els.trialList.innerHTML = state.trials.slice().reverse().slice(0,12).map((t, revIndex) => {
        const idx = state.trials.length - revIndex;
        const shown = t.seq.slice(0,26).map(mini).join('') + (t.seq.length > 26 ? '<span class="microcopy">…</span>' : '');
        return `<div class="trial-row"><span class="trial-id">#${idx}</span><div class="trial-mini-seq">${shown}</div><span class="trial-n">${t.n} flip${t.n===1?'':'s'}</span></div>`;
      }).join('');
    }
    const left = Math.max(0, cfg.minExplore - state.trials.length);
    if (left > 0) {
      els.unlockNote.textContent = `Try ${left} more individual trial${left === 1 ? '' : 's'} before opening the large simulation.`;
      els.unlockNote.classList.remove('ready'); els.unlockMany.disabled = true;
    } else {
      els.unlockNote.textContent = 'You have enough small-sample evidence. Ready to scale up?';
      els.unlockNote.classList.add('ready'); els.unlockMany.disabled = false;
    }
    updateProgress();
  }

  async function showTrial(animated) {
    if (state.busy || state.prediction === null) return;
    state.busy = true; els.runOne.disabled = true; els.fastOne.disabled = true;
    const t = simulate(); els.trialSeq.innerHTML = ''; els.coin.textContent = '?'; els.trialResult.textContent = '';
    const delay = animated && !reducedMotion() ? 185 : 0;
    for (let i = 0; i < t.seq.length; i++) {
      const f = t.seq[i];
      if (delay) { els.coin.classList.remove('flip'); void els.coin.offsetWidth; els.coin.classList.add('flip'); await sleep(115); }
      els.coin.textContent = f; els.trialSeq.appendChild(token(f, i === t.seq.length - 1));
      if (delay) await sleep(delay - 80);
    }
    els.trialResult.textContent = `${cfg.target} appeared on flip ${t.n}.`;
    state.trials.push(t); renderHistory(); state.busy = false; els.runOne.disabled = false; els.fastOne.disabled = false;
  }

  function prepareCanvas(canvas) {
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const rect = canvas.getBoundingClientRect(); const w = Math.max(1, Math.round(rect.width)); const h = Math.max(1, Math.round(rect.height));
    canvas.width = w * dpr; canvas.height = h * dpr; const ctx = canvas.getContext('2d'); ctx.setTransform(dpr,0,0,dpr,0,0); ctx.clearRect(0,0,w,h); return {ctx,w,h};
  }
  function css(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
  function roundRect(ctx,x,y,w,h,r){const rr=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+rr,y);ctx.arcTo(x+w,y,x+w,y+h,rr);ctx.arcTo(x+w,y+h,x,y+h,rr);ctx.arcTo(x,y+h,x,y,rr);ctx.arcTo(x,y,x+w,y,rr);ctx.closePath()}
  function drawHistogram() {
    const {ctx,w,h} = prepareCanvas(els.histCanvas); const data = state.many.map(x=>x.n); const accent = css('--accent'); const muted = css('--muted'); const grid = css('--grid');
    if (!data.length) { ctx.fillStyle=muted;ctx.font='13px system-ui';ctx.textAlign='center';ctx.fillText('Run the large simulation to see the distribution.',w/2,h/2);return; }
    const sorted=[...data].sort((a,b)=>a-b); const q=sorted[Math.floor(sorted.length*.985)]||sorted[sorted.length-1]; let cap=Math.max(rule==='hh'?14:8,Math.ceil(q)); cap=Math.min(cap,rule==='hh'?36:24); const start=(rule==='hh'||rule==='th')?2:1;
    const bins=[]; for(let n=start;n<cap;n++)bins.push({label:String(n),count:0});bins.push({label:`${cap}+`,count:0});
    data.forEach(v=>{const idx=v>=cap?bins.length-1:v-start;if(idx>=0&&idx<bins.length)bins[idx].count++}); const maxY=Math.max(...bins.map(b=>b.count),1); const p={l:42,r:10,t:10,b:34},iw=w-p.l-p.r,ih=h-p.t-p.b;
    ctx.strokeStyle=grid;ctx.fillStyle=muted;ctx.font='10px system-ui';ctx.textAlign='right';ctx.textBaseline='middle';
    for(let i=0;i<=4;i++){const y=p.t+ih*i/4,val=Math.round(maxY*(1-i/4));ctx.beginPath();ctx.moveTo(p.l,y);ctx.lineTo(w-p.r,y);ctx.stroke();ctx.fillText(String(val),p.l-7,y)}
    const step=iw/bins.length,gap=Math.max(1.5,step*.18),bw=Math.max(2,step-gap);bins.forEach((b,i)=>{const bh=b.count/maxY*ih,x=p.l+i*step+gap/2,y=p.t+ih-bh;const g=ctx.createLinearGradient(0,y,0,p.t+ih);g.addColorStop(0,accent);g.addColorStop(1,'rgba(255,255,255,.08)');ctx.fillStyle=g;roundRect(ctx,x,y,bw,bh,4);ctx.fill()});
    ctx.fillStyle=muted;ctx.textAlign='center';ctx.textBaseline='top';const every=Math.max(1,Math.ceil(bins.length/9));bins.forEach((b,i)=>{if(i%every===0||i===bins.length-1)ctx.fillText(b.label,p.l+(i+.5)*step,h-p.b+9)});
  }
  function buildRunning() {
    const pts=[];let sum=0;const stride=Math.max(1,Math.floor(state.many.length/350));state.many.forEach((r,i)=>{sum+=r.n;const n=i+1;if(i===0||n%stride===0||n===state.many.length)pts.push({n,avg:sum/n})});state.running=pts;
  }
  function drawRunning() {
    const {ctx,w,h}=prepareCanvas(els.runningCanvas), pts=state.running, accent=css('--accent'), muted=css('--muted'), grid=css('--grid');
    if(!pts.length){ctx.fillStyle=muted;ctx.font='13px system-ui';ctx.textAlign='center';ctx.fillText('The running average will appear here.',w/2,h/2);return}
    const values=pts.map(p=>p.avg).concat([cfg.theory]);let min=Math.min(...values),max=Math.max(...values);const spread=Math.max(.8,max-min);min=Math.max(0,min-spread*.18);max=max+spread*.18;const p={l:44,r:14,t:12,b:34},iw=w-p.l-p.r,ih=h-p.t-p.b;
    ctx.strokeStyle=grid;ctx.fillStyle=muted;ctx.font='10px system-ui';ctx.textAlign='right';ctx.textBaseline='middle';for(let i=0;i<=4;i++){const y=p.t+ih*i/4,val=max-(max-min)*i/4;ctx.beginPath();ctx.moveTo(p.l,y);ctx.lineTo(w-p.r,y);ctx.stroke();ctx.fillText(val.toFixed(1),p.l-7,y)}
    const maxN=pts[pts.length-1].n;const x=n=>p.l+(Math.log10(Math.max(1,n))/Math.log10(Math.max(10,maxN)))*iw;const y=v=>p.t+(max-v)/(max-min)*ih;
    if(state.theoryRevealed){ctx.setLineDash([5,5]);ctx.strokeStyle='rgba(255,255,255,.28)';ctx.beginPath();ctx.moveTo(p.l,y(cfg.theory));ctx.lineTo(w-p.r,y(cfg.theory));ctx.stroke();ctx.setLineDash([]);}
    ctx.strokeStyle=accent;ctx.lineWidth=2.4;ctx.lineJoin='round';ctx.beginPath();pts.forEach((pt,i)=>{const xx=x(pt.n),yy=y(pt.avg);i?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy)});ctx.stroke();
    ctx.fillStyle=muted;ctx.textAlign='center';ctx.textBaseline='top';[1,10,100,1000,10000,50000].filter(n=>n<=maxN).forEach(n=>ctx.fillText(n>=1000?`${n/1000}k`:n,x(n),h-p.b+8));
  }
  function updateManySummary() {
    if (!state.many.length) { els.manyMean.textContent='—';els.errorValue.textContent='—';return; }
    const m=mean(state.many);els.manyMean.textContent=m.toFixed(3);if(state.theoryRevealed){const e=m-cfg.theory;els.errorValue.textContent=`${e>=0?'+':''}${e.toFixed(3)}`}else{els.errorValue.textContent='—'};
  }
  async function runMany() {
    if(state.busy)return;state.busy=true;els.runMany.disabled=true;state.many=[];state.running=[];state.theoryRevealed=false;els.theoryValue.classList.add('theory-hidden');els.revealTheory.textContent='Reveal';els.simProgress.style.width='0%';els.simText.textContent='Simulating…';els.simCount.textContent=`0 / ${state.manyCount.toLocaleString()}`;drawHistogram();drawRunning();updateManySummary();
    const total=state.manyCount,chunk=Math.max(150,Math.floor(total/30));let done=0;
    await new Promise(resolve=>{function work(){const stop=Math.min(total,done+chunk);for(;done<stop;done++)state.many.push(simulate());els.simProgress.style.width=`${done/total*100}%`;els.simCount.textContent=`${done.toLocaleString()} / ${total.toLocaleString()}`;if(done<total)requestAnimationFrame(work);else resolve()}requestAnimationFrame(work)});
    buildRunning();updateManySummary();drawHistogram();drawRunning();els.simText.textContent='Complete';els.runMany.disabled=false;state.busy=false;
  }

  els.lockPrediction.addEventListener('click',()=>{
    const v=Number(els.prediction.value);if(!Number.isFinite(v)||v<=0){els.prediction.focus();els.prediction.setCustomValidity('Enter a positive number of flips.');els.prediction.reportValidity();return}els.prediction.setCustomValidity('');state.prediction=v;
    els.predictionSaved.innerHTML=`Your prediction is <strong>${v}</strong> flip${v===1?'':'s'} on average. Keep it in mind while you collect evidence.`;els.predictionSaved.classList.add('show');setStage(els.exploreStage,false);renderHistory();els.exploreStage.scrollIntoView({behavior:reducedMotion()?'auto':'smooth',block:'start'});
  });
  els.prediction.addEventListener('input',()=>els.prediction.setCustomValidity(''));
  els.runOne.addEventListener('click',()=>showTrial(true));els.fastOne.addEventListener('click',()=>showTrial(false));
  els.unlockMany.addEventListener('click',()=>{if(state.trials.length<cfg.minExplore)return;setStage(els.manyStage,false);updateProgress();els.manyStage.scrollIntoView({behavior:reducedMotion()?'auto':'smooth',block:'start'})});
  document.querySelectorAll('[data-many]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-many]').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');state.manyCount=Number(btn.dataset.many)}));
  els.runMany.addEventListener('click',runMany);
  els.revealTheory.addEventListener('click',()=>{state.theoryRevealed=!state.theoryRevealed;els.theoryValue.classList.toggle('theory-hidden',!state.theoryRevealed);els.revealTheory.textContent=state.theoryRevealed?'Hide':'Reveal';updateManySummary();drawRunning()});
  let resizeTimer;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{drawHistogram();drawRunning()},120)});

  els.theoryValue.textContent=cfg.theory.toFixed(3);setStage(els.exploreStage,true);setStage(els.manyStage,true);renderHistory();drawHistogram();drawRunning();updateProgress();
})();
