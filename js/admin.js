// ===== TYPE & EARN ADMIN - SHARED JS =====

// ===== MOCK DATA =====
const ADMIN = { name: 'Admin', email: 'admin@typeandmatch.com' };

const USERS_DATA = [
  { id:'u001', name:'Arjun Verma',    email:'arjun@gmail.com',   mobile:'9876543210', joined:'2024-01-15', status:'active',  wallet:245.50, tests:34, bestWpm:108, plan:'Pro' },
  { id:'u002', name:'Simran Kaur',    email:'simran@gmail.com',  mobile:'9765432109', joined:'2024-01-18', status:'active',  wallet:180.00, tests:28, bestWpm:97,  plan:'Starter' },
  { id:'u003', name:'Rohan Mehta',    email:'rohan@gmail.com',   mobile:'9654321098', joined:'2024-02-02', status:'active',  wallet:320.75, tests:45, bestWpm:94,  plan:'Pro' },
  { id:'u004', name:'Neha Sharma',    email:'neha@gmail.com',    mobile:'9543210987', joined:'2024-02-10', status:'active',  wallet:95.00,  tests:19, bestWpm:88,  plan:'Free' },
  { id:'u005', name:'Priya Singh',    email:'priya@gmail.com',   mobile:'9432109876', joined:'2024-02-20', status:'banned',  wallet:0,      tests:12, bestWpm:71,  plan:'Free' },
  { id:'u006', name:'Amit Kumar',     email:'amit@gmail.com',    mobile:'9321098765', joined:'2024-03-01', status:'active',  wallet:560.00, tests:67, bestWpm:68,  plan:'Pro' },
  { id:'u007', name:'Divya Patel',    email:'divya@gmail.com',   mobile:'9210987654', joined:'2024-03-15', status:'active',  wallet:45.50,  tests:8,  bestWpm:65,  plan:'Starter' },
  { id:'u008', name:'Rahul Gupta',    email:'rahul@gmail.com',   mobile:'9109876543', joined:'2024-03-22', status:'active',  wallet:120.00, tests:22, bestWpm:82,  plan:'Free' },
  { id:'u009', name:'Anjali Singh',   email:'anjali@gmail.com',  mobile:'9098765432', joined:'2024-04-05', status:'active',  wallet:230.00, tests:31, bestWpm:76,  plan:'Starter' },
  { id:'u010', name:'Karan Mehta',    email:'karan@gmail.com',   mobile:'8987654321', joined:'2024-04-12', status:'active',  wallet:410.00, tests:55, bestWpm:91,  plan:'Pro' },
];

const CONTESTS_DATA = [
  { id:1, name:'Speed Blitz',          status:'live',      prize:500,  entry:20,  duration:5,  lang:'English', participants:24, maxP:50,  createdBy:'Admin', startTime: Date.now()-120000 },
  { id:2, name:'Accuracy Battle',      status:'live',      prize:800,  entry:30,  duration:10, lang:'English', participants:31, maxP:50,  createdBy:'Admin', startTime: Date.now()-60000  },
  { id:3, name:'Pro Typist League',    status:'upcoming',  prize:1500, entry:50,  duration:15, lang:'English', participants:12, maxP:100, createdBy:'Admin', startTime: Date.now()+1800000},
  { id:4, name:'Hindi Mahayudh',       status:'upcoming',  prize:1000, entry:40,  duration:10, lang:'Hindi',   participants:8,  maxP:80,  createdBy:'Admin', startTime: Date.now()+3600000},
  { id:5, name:'Beginner Cup',         status:'completed', prize:300,  entry:10,  duration:5,  lang:'English', participants:50, maxP:50,  createdBy:'Admin', startTime: Date.now()-7200000},
  { id:6, name:'Weekend Championship', status:'completed', prize:2000, entry:75,  duration:15, lang:'English', participants:100,maxP:100, createdBy:'Admin', startTime: Date.now()-86400000},
];

const RESULTS_DATA = [
  { id:'r001', contestId:5, contestName:'Beginner Cup',         userId:'u001', userName:'Arjun Verma',  rank:1, wpm:108, accuracy:98.2, correct:324, wrong:6,  time:300, prize:150, date:'2024-05-20' },
  { id:'r002', contestId:5, contestName:'Beginner Cup',         userId:'u002', userName:'Simran Kaur',  rank:2, wpm:97,  accuracy:97.5, correct:291, wrong:7,  time:300, prize:90,  date:'2024-05-20' },
  { id:'r003', contestId:5, contestName:'Beginner Cup',         userId:'u003', userName:'Rohan Mehta',  rank:3, wpm:94,  accuracy:96.8, correct:282, wrong:9,  time:300, prize:60,  date:'2024-05-20' },
  { id:'r004', contestId:6, contestName:'Weekend Championship', userId:'u001', userName:'Arjun Verma',  rank:1, wpm:112, accuracy:99.0, correct:560, wrong:5,  time:900, prize:1000,date:'2024-05-19' },
  { id:'r005', contestId:6, contestName:'Weekend Championship', userId:'u010', userName:'Karan Mehta',  rank:2, wpm:95,  accuracy:97.1, correct:475, wrong:14, time:900, prize:600, date:'2024-05-19' },
  { id:'r006', contestId:6, contestName:'Weekend Championship', userId:'u006', userName:'Amit Kumar',   rank:3, wpm:88,  accuracy:96.5, correct:440, wrong:16, time:900, prize:400, date:'2024-05-19' },
];

const PARAGRAPHS_DATA = [
  { id:'p001', title:'Public Libraries 2025', lang:'English', difficulty:'Easy',   words:120, category:'General', contests:3, active:true,  text:'In the year 2025, a very big and beautiful change has come to the public libraries across India...' },
  { id:'p002', title:'Technology & Communication', lang:'English', difficulty:'Medium', words:98,  category:'Technology', contests:5, active:true,  text:'Technology has transformed the way we communicate and work in the modern world...' },
  { id:'p003', title:'Health & Fitness',     lang:'English', difficulty:'Easy',   words:85,  category:'Health',  contests:4, active:true,  text:'The importance of regular exercise and a balanced diet cannot be overstated...' },
  { id:'p004', title:'India Diversity',      lang:'English', difficulty:'Medium', words:110, category:'General', contests:2, active:true,  text:'India is a land of diverse cultures, languages, and traditions...' },
  { id:'p005', title:'Artificial Intelligence', lang:'English', difficulty:'Hard', words:102, category:'Technology', contests:6, active:true,  text:'The development of artificial intelligence has brought about revolutionary changes...' },
  { id:'p006', title:'सार्वजनिक पुस्तकालय',lang:'Hindi',   difficulty:'Medium', words:95,  category:'General', contests:2, active:false, text:'वर्ष 2025 में, भारत के सार्वजनिक पुस्तकालयों में एक बहुत बड़ा बदलाव आया है...' },
];

const PAYOUTS_DATA = [
  { id:'pay001', userId:'u001', userName:'Arjun Verma',  type:'prize',     amount:1000, contestName:'Weekend Championship', status:'paid',    date:'2024-05-19', method:'UPI' },
  { id:'pay002', userId:'u010', userName:'Karan Mehta',  type:'prize',     amount:600,  contestName:'Weekend Championship', status:'paid',    date:'2024-05-19', method:'UPI' },
  { id:'pay003', userId:'u006', userName:'Amit Kumar',   type:'prize',     amount:400,  contestName:'Weekend Championship', status:'paid',    date:'2024-05-19', method:'Bank' },
  { id:'pay004', userId:'u001', userName:'Arjun Verma',  type:'withdraw',  amount:500,  contestName:'-',                    status:'pending', date:'2024-05-21', method:'UPI' },
  { id:'pay005', userId:'u003', userName:'Rohan Mehta',  type:'withdraw',  amount:200,  contestName:'-',                    status:'pending', date:'2024-05-22', method:'Bank' },
  { id:'pay006', userId:'u002', userName:'Simran Kaur',  type:'prize',     amount:90,   contestName:'Beginner Cup',         status:'paid',    date:'2024-05-20', method:'UPI' },
];

// ===== UTILS =====
function avatarColor(name) {
  const c=['#00C07A','#7C3AED','#3B82F6','#F59E0B','#EF4444','#10B981','#EC4899'];
  let h=0; for(let ch of name) h=((h<<5)-h)+ch.charCodeAt(0);
  return c[Math.abs(h)%c.length];
}
function initials(name) { return name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2); }
function formatDate(d) { return new Date(d).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}); }
function formatDateTime(ts) { return new Date(ts).toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}); }
function timeUntil(ts) { const d=ts-Date.now(); if(d<=0)return'Now'; const h=Math.floor(d/3600000),m=Math.floor((d%3600000)/60000); return h>0?`${h}h ${m}m`:`${m}m`; }
function numFmt(n) { return n>=10000?'₹'+(n/1000).toFixed(0)+'K':n>=1000?'₹'+n.toLocaleString():'₹'+n; }

// ===== TOAST =====
function toast(msg, type='success') {
  const icons={success:'✓',danger:'✕',info:'ℹ',warning:'⚠'};
  let wrap=document.getElementById('toast-wrap');
  if(!wrap){wrap=document.createElement('div');wrap.id='toast-wrap';document.body.appendChild(wrap);}
  const t=document.createElement('div');
  t.className=`toast-item ${type}`;
  t.innerHTML=`<span style="font-weight:700;color:var(--${type==='success'?'primary':type==='info'?'info':type==='warning'?'gold':'danger'})">${icons[type]}</span><span>${msg}</span>`;
  wrap.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(20px)';t.style.transition='.3s';setTimeout(()=>t.remove(),300);},3000);
}

// ===== MODAL =====
function openModal(id) { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }
document.addEventListener('click', e => {
  if(e.target.classList.contains('modal-custom')) e.target.classList.remove('show');
});

// ===== SIDEBAR ACTIVE =====
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'admin-dashboard.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
}
document.addEventListener('DOMContentLoaded', setActiveNav);

// ===== SIDEBAR RENDER =====
function renderSidebar() {
  return `
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-brand">
      <div style="width:32px;height:32px;border-radius:8px;background:var(--primary);display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--bg-dark);font-size:.85rem">T</div>
      <div>
        <div class="brand-text">Tyep&<span>Earn</span></div>
      </div>
      <span class="brand-badge ms-auto">ADMIN</span>
    </div>

    <div class="sidebar-section">Overview</div>
    <a href="admin-dashboard.html" class="nav-link" data-page="admin-dashboard.html"><i class="bi bi-speedometer2"></i>Dashboard</a>

    <div class="sidebar-section">Manage</div>
    <a href="admin-contests.html" class="nav-link" data-page="admin-contests.html"><i class="bi bi-trophy"></i>Contests <span class="nav-badge-green" id="sb-live-count">2</span></a>
    <a href="admin-users.html" class="nav-link" data-page="admin-users.html"><i class="bi bi-people"></i>Users</a>
    <a href="admin-results.html" class="nav-link" data-page="admin-results.html"><i class="bi bi-bar-chart-line"></i>Results</a>
    <a href="admin-paragraphs.html" class="nav-link" data-page="admin-paragraphs.html"><i class="bi bi-file-text"></i>Paragraphs</a>

    <div class="sidebar-section">Finance</div>
    <a href="admin-finance.html" class="nav-link" data-page="admin-finance.html"><i class="bi bi-wallet2"></i>Finance <span class="nav-badge" id="sb-pending-count">2</span></a>

    <div class="sidebar-section">System</div>
    <a href="admin-settings.html" class="nav-link" data-page="admin-settings.html"><i class="bi bi-gear"></i>Settings</a>

    <div class="sidebar-footer">
      <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);margin-bottom:8px">
        <div class="avatar" style="background:var(--primary);color:var(--bg-dark)">AD</div>
        <div>
          <div style="font-size:.82rem;font-weight:600">Admin</div>
          <div style="font-size:.72rem;color:var(--text-dim)">Super Admin</div>
        </div>
      </div>
      <a href="index.html" class="nav-link" style="padding:6px 0;border-left:none"><i class="bi bi-box-arrow-left"></i>View User Site</a>
      <a href="admin-login.html" class="nav-link" style="padding:6px 0;border-left:none;color:var(--danger)" onclick="localStorage.removeItem('te_admin')"><i class="bi bi-power"></i>Logout</a>
    </div>
  </aside>`;
}

function renderTopbar(title, subtitle='') {
  return `
  <div class="topbar">
    <button class="btn-ghost d-md-none" onclick="document.getElementById('sidebar').classList.toggle('open')" style="padding:5px 8px;"><i class="bi bi-list" style="font-size:1.1rem"></i></button>
    <div class="topbar-title">${title} ${subtitle?`<span style="color:var(--text-dim);font-size:.8rem;font-weight:400">${subtitle}</span>`:''}</div>
    <div class="topbar-admin">
      <span class="badge-live"><span class="live-dot"></span>System Live</span>
      <div class="admin-avatar">AD</div>
      <span style="font-size:.85rem;font-weight:500">Admin</span>
    </div>
  </div>`;
}

// Insert sidebar+topbar if containers exist
document.addEventListener('DOMContentLoaded', () => {
  const sbEl = document.getElementById('sidebar-container');
  const tbEl = document.getElementById('topbar-container');
  if(sbEl) sbEl.innerHTML = renderSidebar();
  if(tbEl) {
    const title = tbEl.dataset.title || 'Admin Panel';
    const sub = tbEl.dataset.sub || '';
    tbEl.innerHTML = renderTopbar(title, sub);
  }
  setActiveNav();
  // pending payouts badge
  const p = PAYOUTS_DATA.filter(x=>x.status==='pending').length;
  const el = document.getElementById('sb-pending-count');
  if(el) el.textContent = p;
});
