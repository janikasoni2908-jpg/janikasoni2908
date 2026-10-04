/**
 * NMMUN 2026 - Official JavaScript Application Script
 * SVKM's NMIMS Shirpur Campus (Mukesh Patel Technology Park)
 * Features: Countdown, Committees Showcase with Shirpur Chambers, 3-Day Residential Itinerary,
 * Live Country Matrix Search, Transit Concierge, and Registration Flow with Accommodation/Shuttles.
 */

// --- 1. Countdown Timer ---
function initCountdown() {
  // Target conference date: November 13, 2026 09:00:00 IST
  const targetDate = new Date('November 13, 2026 09:00:00').getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      const daysEl = document.getElementById('days');
      const hoursEl = document.getElementById('hours');
      const minutesEl = document.getElementById('minutes');
      const secondsEl = document.getElementById('seconds');
      if (daysEl) daysEl.innerText = '00';
      if (hoursEl) hoursEl.innerText = '00';
      if (minutesEl) minutesEl.innerText = '00';
      if (secondsEl) secondsEl.innerText = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.innerText = pad(days);
    if (hoursEl) hoursEl.innerText = pad(hours);
    if (minutesEl) minutesEl.innerText = pad(minutes);
    if (secondsEl) secondsEl.innerText = pad(seconds);
  }

  update();
  setInterval(update, 1000);
}

// --- 2. Committee Data & Details (Shirpur Venue Chambers) ---
const committeesData = [
  {
    id: 'unsc',
    name: 'United Nations Security Council',
    shortName: 'UNSC',
    category: 'un',
    type: 'Double Delegation Allowed',
    difficulty: 'Advanced / High Stakes',
    badgeClass: 'badge-gold',
    venueChamber: 'Mukesh Patel Executive Council Chamber (Block A)',
    agenda: 'Strategic Militarization in the Arctic and Cyber Warfare Sovereignty',
    description: 'The premier decision-making organ of the United Nations charged with maintaining international peace and security. Delegates navigate rapid geopolitical posturing, veto politics, and binding Chapter VII directives.',
    executiveBoard: 'Chairperson: Advait Mehta | Director: Shreya Sen',
    seats: '15 Member States (5 Permanent + 10 Non-Permanent)',
    detailedOverview: 'As ice caps recede, northern sea routes and deep-sea minerals have transformed the Arctic into a contested frontier. Compounded by autonomous offensive malware targeting critical civil infrastructure, the Council must formulate legally enforceable resolutions or face unprecedented escalation.',
    focusQuestions: [
      'How can maritime sovereignty in the Arctic circle be balanced with freedom of navigation without triggering naval confrontations?',
      'What threshold of state-sponsored cyber warfare warrants collective self-defense under Article 51 of the UN Charter?'
    ]
  },
  {
    id: 'unhrc',
    name: 'United Nations Human Rights Council',
    shortName: 'UNHRC',
    category: 'un',
    type: 'Single Delegation',
    difficulty: 'Intermediate',
    badgeClass: 'badge-blue',
    venueChamber: 'Sir C.V. Raman Hall (MPSTME Wing)',
    agenda: 'Digital Surveillance Regimes and the Rights of Climate-Displaced Populations',
    description: 'Addressing structural human rights violations, algorithmic biometric border policing, and the legal codification of climate refugee protections under international humanitarian law.',
    executiveBoard: 'President: Tanya Kapoor | Vice President: Rishabh Singhal',
    seats: '47 Member Delegations',
    detailedOverview: 'Rising sea levels and persistent droughts are creating hundreds of thousands of climate-induced migrants who fall outside the 1951 Refugee Convention. Concurrently, nations deploy AI facial recognition and intrusive digital borders, threatening foundational privacy conventions.',
    focusQuestions: [
      'Should climate refugees receive formal non-refoulement protection equivalent to political asylum seekers?',
      'Establishing international guardrails against predictive policing and autonomous surveillance of border migrants.'
    ]
  },
  {
    id: 'aippm',
    name: 'All India Political Parties Meet',
    shortName: 'AIPPM',
    category: 'national',
    type: 'Single Delegation',
    difficulty: 'Advanced / High Debate',
    badgeClass: 'badge-gold',
    venueChamber: 'Dr. Homi Bhabha Parliamentary Hall',
    agenda: 'Re-evaluating Simultaneous Elections (OENOE) and Center-State Fiscal Federalism',
    description: 'A vibrant forum bringing together national leaders, regional ministers, and opposition voices to vigorously debate constitutional integrity, state autonomy, and fiscal devolution.',
    executiveBoard: 'Moderator: Vikramaditya Roy | Deputy Moderator: Ananya Deshmukh',
    seats: '40 Political Portfolios',
    detailedOverview: 'Simultaneous elections pose profound constitutional questions regarding parliamentary tenure, regional representation, and state legislature dissolved timelines. Delegates will grapple with Finance Commission recommendations and GST compensation disputes.',
    focusQuestions: [
      'Does simultaneous polling compromise the democratic ethos of federal accountability?',
      'Reformulating fiscal distribution models between coastal industrial states and developing inland provinces.'
    ]
  },
  {
    id: 'disec',
    name: 'Disarmament & International Security',
    shortName: 'DISEC (GA-1)',
    category: 'un',
    type: 'Single / Double Delegation',
    difficulty: 'Beginner-Friendly',
    badgeClass: 'badge-emerald',
    venueChamber: 'Central Academic Auditorium (Block C)',
    agenda: 'Proliferation of Autonomous Drone Swarms & Hypersonic Ballistic Glide Systems',
    description: 'The First Committee of the UN General Assembly addressing threats to global disarmament, non-proliferation treaties, and the militarization of autonomous AI-guided munitions.',
    executiveBoard: 'Chair: Kabir Saxena | Co-Chair: Natasha Roy',
    seats: '60 Member States',
    detailedOverview: 'Autonomous drone swarms operated by non-state actors and hypersonic glide vehicles flying below radar horizons render conventional deterrence systems obsolete. DISEC convenes to draft universal disarmament treaties and verification protocols.',
    focusQuestions: [
      'How to establish transparent verification mechanisms for lethal autonomous weapons systems (LAWS)?',
      'Preventing the illicit transfer of hypersonic guidance microchips to non-state actors.'
    ]
  },
  {
    id: 'hcc',
    name: 'Historic Crisis Committee: 1962',
    shortName: 'HCC 1962',
    category: 'crisis',
    type: 'Single Delegation',
    difficulty: 'Expert / Continuous Crisis',
    badgeClass: 'badge-red',
    venueChamber: 'Secretariat Crisis Situation Room (Tower 1)',
    agenda: 'The Sino-Indian Frontier Conflict & Covert Cold War Brinkmanship',
    description: 'A fast-paced continuous crisis simulation. Delegates represent historic cabinet ministers, military commanders, and covert diplomats responding to real-time communiqués and shifting battlefields.',
    executiveBoard: 'Crisis Director: Samarjit Rathore | Supreme Commander: Devika Pillai',
    seats: '22 Historic Portfolios',
    detailedOverview: 'October 1962: As tensions ignite along the McMahon Line and Aksai Chin, backchannel cables reveal superpowers playing high-stakes geopolitical gambits during the concurrent Cuban Missile crisis.',
    focusQuestions: [
      'Real-time crisis directives, covert intelligence dispatch, and territorial fortification negotiations.',
      'Balancing non-aligned movement diplomacy with emergency military assistance alliances.'
    ]
  },
  {
    id: 'unodc',
    name: 'UN Office on Drugs and Crime',
    shortName: 'UNODC',
    category: 'special',
    type: 'Single Delegation',
    difficulty: 'Intermediate',
    badgeClass: 'badge-blue',
    venueChamber: 'Moot Court Hall (Shirpur Legal Complex)',
    agenda: 'Dismantling Darknet Cryptomarket Narcotics & Illicit Hawala Syndicates',
    description: 'Tackling the convergence of synthetic opioid cartels, decentralized cryptocurrency laundering, and transnational maritime smuggling corridors.',
    executiveBoard: 'Chairperson: Rohan Varma | Rapporteur: Sneha Nair',
    seats: '35 Delegations',
    detailedOverview: 'The explosion of decentralized privacy coins and darknet marketplaces has facilitated global narcotics trafficking and human smuggling. UNODC delegates develop international legal instruments and cross-border police intelligence sharing treaties.',
    focusQuestions: [
      'Coordinating cross-jurisdictional cyber forensics against encrypted illicit marketplace operators.',
      'Rehabilitative public health measures versus punitive law enforcement frameworks.'
    ]
  },
  {
    id: 'ipc',
    name: 'International Press Corps',
    shortName: 'IPC',
    category: 'special',
    type: 'Single Delegation',
    difficulty: 'Creative & Investigative',
    badgeClass: 'badge-gold',
    venueChamber: 'Digital Media Lab & Press Bureau',
    agenda: 'Investigative Journalism, Press Conferences & Disinformation Fact-Checking',
    description: 'Journalists, photojournalists, and caricature artists representing major global news agencies (Reuters, BBC, Al Jazeera, TASS). Uncover scandals, grill delegates in press conferences, and publish daily newsletters.',
    executiveBoard: 'Editor-in-Chief: Meera Joshi | Head of Photography: Aryan Kulkarni',
    seats: '20 International Media Outlets',
    detailedOverview: 'IPC delegates operate across all committee rooms, uncovering bilateral backroom deals, publishing breaking exposés, and interrogating leaders during high-pressure press caucuses.',
    focusQuestions: [
      'Investigative exposé writing and interviewing delegates under tight editorial deadlines.',
      'Countering state-sponsored propaganda during live crisis simulations.'
    ]
  }
];

// Render committees
function renderCommittees(category = 'all') {
  const container = document.getElementById('committees-grid');
  if (!container) return;

  const filtered = category === 'all' 
    ? committeesData 
    : committeesData.filter(c => c.category === category || (category === 'un' && c.category === 'special'));

  container.innerHTML = filtered.map(item => `
    <div class="glass-panel rounded-2xl p-6 flex flex-col justify-between border border-slate-800 hover:border-amber-400/40 group transition-all duration-300 transform hover:-translate-y-1">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${item.badgeClass}">
            ${item.shortName}
          </span>
          <span class="text-xs font-medium text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
            ${item.type}
          </span>
        </div>

        <h3 class="text-xl font-bold font-cinzel text-slate-100 group-hover:text-amber-300 transition-colors mb-2">
          ${item.name}
        </h3>

        <!-- Venue Chamber Badge -->
        <div class="flex items-center gap-1.5 text-[11px] text-amber-400/90 mb-3 font-medium bg-amber-400/5 px-2.5 py-1 rounded-lg border border-amber-400/15">
          <svg class="w-3.5 h-3.5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          <span class="truncate">${item.venueChamber}</span>
        </div>

        <div class="mb-4">
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Agenda</p>
          <p class="text-sm font-medium text-slate-200 line-clamp-2">
            "${item.agenda}"
          </p>
        </div>

        <p class="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-3">
          ${item.description}
        </p>
      </div>

      <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <span class="text-xs text-slate-400 font-medium flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full ${item.category === 'crisis' ? 'bg-rose-500' : 'bg-emerald-400'}"></span>
          ${item.difficulty}
        </span>
        <button 
          onclick="openCommitteeModal('${item.id}')"
          class="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 px-3 py-1.5 rounded-lg border border-amber-500/30 transition-all cursor-pointer">
          Background Guide
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Committee Modal Functionality
function openCommitteeModal(committeeId) {
  const comm = committeesData.find(c => c.id === committeeId);
  if (!comm) return;

  const modal = document.getElementById('committee-modal');
  const modalContent = document.getElementById('committee-modal-body');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="flex items-center justify-between pb-4 border-b border-slate-800">
      <div class="flex items-center gap-3">
        <span class="px-3 py-1 rounded-full text-xs font-semibold uppercase ${comm.badgeClass}">
          ${comm.shortName}
        </span>
        <span class="text-xs text-slate-400 font-medium">Matrix Size: ${comm.seats}</span>
      </div>
      <span class="text-xs text-amber-400/90 font-medium">${comm.type}</span>
    </div>

    <div class="mt-4">
      <h2 class="text-2xl font-bold font-cinzel text-slate-100">${comm.name}</h2>
      <div class="mt-2 text-xs font-semibold text-amber-300 flex items-center gap-1.5">
        <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        <span>Shirpur Venue: ${comm.venueChamber}</span>
      </div>

      <div class="mt-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
        <span class="text-xs font-bold uppercase tracking-wider text-amber-400">Formal Agenda</span>
        <p class="text-base font-semibold text-slate-100 mt-1">"${comm.agenda}"</p>
      </div>
    </div>

    <div class="mt-6 space-y-4 text-sm text-slate-300 leading-relaxed">
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Executive Board</h4>
        <p class="text-sm font-medium text-slate-200">${comm.executiveBoard}</p>
      </div>
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Substantive Overview</h4>
        <p>${comm.detailedOverview}</p>
      </div>
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Lines of Inquiry & Debate</h4>
        <ul class="list-disc pl-5 space-y-1.5 text-slate-300 text-xs">
          ${comm.focusQuestions.map(q => `<li>${q}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
      <div class="text-xs text-slate-400">
        Background Guide: <span class="text-emerald-400 font-medium">Available for download</span>
      </div>
      <div class="flex items-center gap-2">
        <button 
          onclick="triggerToast('Background Guide PDF downloaded successfully!')" 
          class="btn-gold-shimmer text-xs px-4 py-2 rounded-lg font-bold flex items-center gap-1.5 cursor-pointer">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Download PDF Guide
        </button>
        <button 
          onclick="closeCommitteeModal(); openRegisterModal('${comm.shortName}')" 
          class="btn-outline-gold text-xs px-4 py-2 rounded-lg font-semibold cursor-pointer">
          Apply for ${comm.shortName}
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCommitteeModal() {
  const modal = document.getElementById('committee-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// --- 3. Interactive 3-Day Residential Itinerary for Shirpur ---
const itineraryData = {
  1: {
    title: 'Day 1: Arrival & The Diplomatic Assembly',
    date: 'Friday, November 13, 2026',
    dressCode: 'Western Business Formal',
    events: [
      { time: '07:30 AM - 10:00 AM', title: 'Airport & Railway Shuttle Convoys & Hostel Check-In', desc: 'Reception of delegates from Indore Airport (IDR) and Bhusawal/Dhule junctions. Check-in to NMIMS residential suites and delegate kit distribution.' },
      { time: '10:30 AM - 12:00 PM', title: 'Grand Opening Plenary & Keynote Address (Open-Air Amphitheater)', desc: 'Ceremonial lamp lighting, addresses by Vice-Chancellor, Secretary-General, and accredited international diplomats under the open sky.' },
      { time: '12:15 PM - 01:30 PM', title: 'Executive Welcome Luncheon (Central Dining Complex)', desc: 'Multi-cuisine diplomatic buffet lunch and informal interaction with Executive Board chairs.' },
      { time: '01:45 PM - 05:00 PM', title: 'Committee Session I: Roll Call & Setting of Agenda', desc: 'Formal roll-call, General Speakers List (GSL), and inaugural position paper speeches in designated campus halls.' },
      { time: '05:30 PM - 07:00 PM', title: 'Campus Walking Tour & Tapovan Sunset High-Tea', desc: 'Explore the 400-acre green campus, Mukesh Patel Technology Park, sports complex, and evening high tea.' },
      { time: '07:30 PM - 09:30 PM', title: 'Secretariat Starlight Social Mixer', desc: 'Acoustic musical performances, ice-breaking games, and informal cross-committee delegate bonding.' }
    ]
  },
  2: {
    title: 'Day 2: The Crucible of Consensus & Midnight Crisis',
    date: 'Saturday, November 14, 2026',
    dressCode: 'Diplomatic Formal / Black Tie Accent',
    events: [
      { time: '08:30 AM - 11:30 AM', title: 'Committee Session II: Crisis Injections & Intelligence Bulletins', desc: 'Breaking news dossiers distributed to council chambers; emergency directives and unmoderated caucusing.' },
      { time: '11:45 AM - 01:30 PM', title: 'Committee Session III: Working Paper Drafting', desc: 'Cross-bloc consultations, treaty clauses writing, and submission of initial draft working papers.' },
      { time: '01:30 PM - 02:30 PM', title: 'Executive Lunch & Press Briefing Exhibition', desc: 'Display of IPC political caricatures, press exposés, and interrogations of committee bloc leaders.' },
      { time: '02:30 PM - 06:00 PM', title: 'Committee Session IV: Draft Resolution Introductions', desc: 'Substantive line-by-line reading, sponsor defenses, and unfriendly amendment debates.' },
      { time: '07:30 PM - 09:30 PM', title: 'Diplomatic Gala Banquet Dinner', desc: 'Grand royal banquet on the NMIMS central lawn featuring live gourmet counters and networking.' },
      { time: '10:00 PM - 12:30 AM', title: 'Midnight Crisis Simulation (UNSC & HCC Exclusive)', desc: 'High-adrenaline night crisis simulation in the situation rooms with live tactical maps.' }
    ]
  },
  3: {
    title: 'Day 3: The Resolution & Grand Triumph',
    date: 'Sunday, November 15, 2026',
    dressCode: 'Indian Traditional / Global Formal',
    events: [
      { time: '09:00 AM - 12:00 PM', title: 'Committee Session V: Final Voting Procedure', desc: 'Roll-call voting on binding resolutions, directive closures, and committee valedictory remarks.' },
      { time: '12:00 PM - 01:30 PM', title: 'Executive Board Feedback Session & Lunch', desc: 'Constructive 1-on-1 feedback from Chairs and comprehensive scoring review.' },
      { time: '02:00 PM - 04:30 PM', title: 'Grand Closing Ceremony & Awards Plenary (Mukesh Patel Auditorium)', desc: 'Conferring Best Delegate, High Commendation, and the prestigious Best Delegation Trophy with ₹1,50,000 cash prizes.' },
      { time: '05:00 PM - 07:00 PM', title: 'Farewell High-Tea & Departure Convoys', desc: 'Commemorative group portraits, signing of delegate placards, and scheduled return shuttles to Indore Airport and railway hubs.' }
    ]
  }
};

function switchItineraryDay(day) {
  const data = itineraryData[day];
  if (!data) return;

  [1, 2, 3].forEach(d => {
    const btn = document.getElementById(`itinerary-tab-${d}`);
    if (btn) {
      if (d === day) {
        btn.className = 'px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 transition-all';
      } else {
        btn.className = 'px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-400 hover:text-amber-300 hover:bg-slate-800/60 transition-all border border-transparent';
      }
    }
  });

  const headerEl = document.getElementById('itinerary-header');
  if (headerEl) {
    headerEl.innerHTML = `
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
        <div>
          <h3 class="text-xl font-bold font-cinzel text-slate-100">${data.title}</h3>
          <p class="text-xs text-amber-400 font-medium mt-0.5">${data.date} • NMIMS Shirpur Campus</p>
        </div>
        <div class="inline-flex items-center gap-2 bg-slate-800/90 px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300">
          <span class="text-amber-400 font-semibold">Dress Code:</span>
          <span>${data.dressCode}</span>
        </div>
      </div>
    `;
  }

  const timelineContainer = document.getElementById('itinerary-timeline');
  if (timelineContainer) {
    timelineContainer.innerHTML = data.events.map((ev) => `
      <div class="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 items-start group">
        <div class="absolute left-0 md:left-1/2 top-1.5 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-amber-400 group-hover:bg-amber-400 group-hover:scale-125 transition-all shadow-md shadow-amber-400/30 z-10"></div>
        
        <div class="md:col-span-2 md:text-right mb-1 md:mb-0">
          <span class="text-xs font-bold text-amber-400 tracking-wider uppercase bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
            ${ev.time}
          </span>
        </div>

        <div class="hidden md:block md:col-span-0"></div>

        <div class="md:col-span-3 glass-panel p-4 rounded-xl border border-slate-800/80 group-hover:border-amber-400/30 transition-all">
          <h4 class="text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
            ${ev.title}
          </h4>
          <p class="text-xs text-slate-400 mt-1 leading-relaxed">
            ${ev.desc}
          </p>
        </div>
      </div>
    `).join('');
  }
}

// --- 4. Country Matrix Live Search ---
const matrixData = [
  { country: 'United States of America', committee: 'UNSC', type: 'P5 (Veto)', status: 'Reserved', tier: 'Tier 1' },
  { country: 'United Kingdom', committee: 'UNSC', type: 'P5 (Veto)', status: 'Available', tier: 'Tier 1' },
  { country: 'French Republic', committee: 'UNSC', type: 'P5 (Veto)', status: 'Available', tier: 'Tier 1' },
  { country: 'Russian Federation', committee: 'UNSC', type: 'P5 (Veto)', status: 'Reserved', tier: 'Tier 1' },
  { country: 'People\'s Republic of China', committee: 'UNSC', type: 'P5 (Veto)', status: 'Available', tier: 'Tier 1' },
  { country: 'Republic of India', committee: 'UNSC', type: 'Non-Permanent', status: 'Available', tier: 'Tier 1' },
  { country: 'Japan', committee: 'UNSC', type: 'Non-Permanent', status: 'Available', tier: 'Tier 2' },
  { country: 'Federal Republic of Germany', committee: 'UNHRC', type: 'Member State', status: 'Available', tier: 'Tier 2' },
  { country: 'Federative Republic of Brazil', committee: 'UNHRC', type: 'Member State', status: 'Available', tier: 'Tier 2' },
  { country: 'Kingdom of Norway', committee: 'UNHRC', type: 'Member State', status: 'Available', tier: 'Tier 2' },
  { country: 'Republic of South Africa', committee: 'UNHRC', type: 'Member State', status: 'Available', tier: 'Tier 2' },
  { country: 'Prime Minister of India', committee: 'AIPPM', type: 'Executive Cabinet', status: 'Reserved', tier: 'Special' },
  { country: 'Minister of Home Affairs', committee: 'AIPPM', type: 'Executive Cabinet', status: 'Available', tier: 'Special' },
  { country: 'Leader of Opposition (Lok Sabha)', committee: 'AIPPM', type: 'Opposition', status: 'Available', tier: 'Special' },
  { country: 'Chief Minister of West Bengal', committee: 'AIPPM', type: 'Regional Party', status: 'Available', tier: 'Special' },
  { country: 'Chief Minister of Tamil Nadu', committee: 'AIPPM', type: 'Regional Party', status: 'Available', tier: 'Special' },
  { country: 'Islamic Republic of Pakistan', committee: 'DISEC', type: 'Member State', status: 'Available', tier: 'Tier 2' },
  { country: 'State of Israel', committee: 'DISEC', type: 'Member State', status: 'Reserved', tier: 'Tier 1' },
  { country: 'Islamic Republic of Iran', committee: 'DISEC', type: 'Member State', status: 'Available', tier: 'Tier 2' },
  { country: 'Democratic People\'s Republic of Korea', committee: 'DISEC', type: 'Member State', status: 'Available', tier: 'Tier 2' },
  { country: 'Lt. Gen. B.M. Kaul (IV Corps)', committee: 'HCC 1962', type: 'Military Commander', status: 'Reserved', tier: 'Crisis' },
  { country: 'V.K. Krishna Menon (Defence Minister)', committee: 'HCC 1962', type: 'Cabinet Minister', status: 'Available', tier: 'Crisis' },
  { country: 'Marshal Lin Biao (PLA)', committee: 'HCC 1962', type: 'Military Commander', status: 'Available', tier: 'Crisis' },
  { country: 'Reuters Chief Diplomatic Correspondent', committee: 'IPC', type: 'International Agency', status: 'Available', tier: 'Press' },
  { country: 'Al Jazeera Lead Investigative Reporter', committee: 'IPC', type: 'Broadcast Media', status: 'Available', tier: 'Press' },
  { country: 'The Hindu National Political Editor', committee: 'IPC', type: 'Print Media', status: 'Available', tier: 'Press' }
];

function searchMatrix(query) {
  const q = query.trim().toLowerCase();
  const tableBody = document.getElementById('matrix-table-body');
  const countEl = document.getElementById('matrix-count');
  if (!tableBody) return;

  const matches = matrixData.filter(m => 
    m.country.toLowerCase().includes(q) || 
    m.committee.toLowerCase().includes(q) ||
    m.type.toLowerCase().includes(q)
  );

  if (countEl) countEl.innerText = `${matches.length} portfolios available to view`;

  if (matches.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="py-8 text-center text-slate-400 text-sm">
          No portfolios match "<span class="text-amber-300 font-semibold">${query}</span>". Try searching another country or committee name.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = matches.map(row => `
    <tr class="border-b border-slate-800/80 hover:bg-slate-800/40 transition-colors">
      <td class="py-3.5 px-4 text-sm font-semibold text-slate-100 flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
        ${row.country}
      </td>
      <td class="py-3.5 px-4 text-xs font-medium text-amber-300">
        <span class="bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20 font-bold">${row.committee}</span>
      </td>
      <td class="py-3.5 px-4 text-xs text-slate-300">${row.type}</td>
      <td class="py-3.5 px-4 text-xs">
        <span class="px-2.5 py-1 rounded-full font-semibold ${row.status === 'Available' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'}">
          ${row.status}
        </span>
      </td>
      <td class="py-3.5 px-4 text-right">
        ${row.status === 'Available' ? `
          <button 
            onclick="openRegisterModal('${row.committee}', '${row.country.replace(/'/g, "\\'")}')"
            class="text-xs font-semibold text-amber-300 hover:text-white bg-amber-500/20 hover:bg-amber-500/30 px-3 py-1 rounded-lg border border-amber-500/40 transition-all cursor-pointer">
            Select
          </button>
        ` : `
          <span class="text-xs text-slate-500 font-medium">Allotted</span>
        `}
      </td>
    </tr>
  `).join('');
}

// --- 5. Transit Route Info Switcher (Shirpur Logistics) ---
const transitData = {
  flight: {
    title: 'Via Flight: Devi Ahilyabai Holkar Airport, Indore (IDR)',
    distance: '~130 km | 2.5 hours via smooth 4-lane NH-52 (Indore-Mumbai Expressway)',
    desc: 'Indore is the nearest major domestic and international airport connecting all metros (Delhi, Mumbai, Bengaluru, Hyderabad, Kolkata). NMMUN operates dedicated AC luxury shuttle buses from Indore Airport Arrival Terminal directly to NMIMS Shirpur campus.',
    convoys: 'Convoy Slots on Nov 12 & 13: 08:00 AM, 12:00 PM, 04:00 PM, 08:00 PM.'
  },
  train: {
    title: 'Via Rail: Bhusawal Junction (BSL) / Dhule (DHI) / Chalisgaon',
    distance: '~85 km from Bhusawal Junction | ~50 km from Dhule',
    desc: 'Bhusawal is one of Central Railway’s biggest railway junctions with direct Rajdhani, Duronto, and Superfast express trains from every corner of India. Our Secretariat transit desk will receive delegates directly at Platform 1 with dedicated campus coaches.',
    convoys: 'Frequent shuttle connections matching all major express train arrivals.'
  },
  road: {
    title: 'Via Express Highway: Mumbai-Agra National Highway (NH-3 / NH-52)',
    distance: 'Direct highway connectivity from Mumbai (~370 km), Pune (~390 km), Surat (~180 km), and Nashik (~210 km)',
    desc: 'Shirpur is situated prominently on the Mumbai-Agra highway. Direct sleeper coaches and government/private express buses connect Shirpur round-the-clock from Mumbai, Pune, Ahmedabad, and Surat.',
    convoys: 'Delegates arriving at Shirpur Central Bus Station receive a 5-minute complimentary campus auto/cab pickup.'
  }
};

function switchTransit(mode) {
  const data = transitData[mode];
  if (!data) return;

  ['flight', 'train', 'road'].forEach(m => {
    const btn = document.getElementById(`transit-btn-${m}`);
    if (btn) {
      if (m === mode) {
        btn.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 shadow-md transition-all';
      } else {
        btn.className = 'px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-all';
      }
    }
  });

  const detailBox = document.getElementById('transit-details');
  if (detailBox) {
    detailBox.innerHTML = `
      <div class="glass-panel p-6 rounded-2xl border border-amber-400/30">
        <div class="flex items-center gap-2 mb-2">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <h4 class="text-base font-bold text-slate-100">${data.title}</h4>
        </div>
        <p class="text-xs font-semibold text-amber-300 mb-3">${data.distance}</p>
        <p class="text-xs text-slate-300 leading-relaxed mb-4">${data.desc}</p>
        <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-200 flex items-center gap-2">
          <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span><strong>Shuttle Notice:</strong> ${data.convoys}</span>
        </div>
      </div>
    `;
  }
}

// --- 6. Registration Modal Flow with Shirpur Accommodation & Transit ---
function openRegisterModal(preferredCommittee = '', preferredCountry = '') {
  const modal = document.getElementById('registration-modal');
  if (!modal) return;

  const formView = document.getElementById('reg-form-view');
  const successView = document.getElementById('reg-success-view');

  if (formView && successView) {
    formView.classList.remove('hidden');
    successView.classList.add('hidden');
  }

  const commSelect = document.getElementById('reg-committee-1');
  if (commSelect && preferredCommittee) {
    commSelect.value = preferredCommittee;
  }

  const countryInput = document.getElementById('reg-country-pref');
  if (countryInput && preferredCountry) {
    countryInput.value = preferredCountry;
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeRegisterModal() {
  const modal = document.getElementById('registration-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function handleRegistrationSubmit(event) {
  event.preventDefault();
  const form = event.target;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const name = document.getElementById('reg-name')?.value || 'Delegate';
  const committee = document.getElementById('reg-committee-1')?.value || 'UNSC';
  const packageType = document.getElementById('reg-package-type')?.value || 'Residential';

  const randomRef = 'NMMUN-SHP-' + Math.floor(100000 + Math.random() * 900000);

  const formView = document.getElementById('reg-form-view');
  const successView = document.getElementById('reg-success-view');
  const refCodeEl = document.getElementById('success-ref-code');
  const nameDisplayEl = document.getElementById('success-name-display');

  if (refCodeEl) refCodeEl.innerText = randomRef;
  if (nameDisplayEl) nameDisplayEl.innerText = `${name} • ${committee} (${packageType} Pass)`;

  if (formView && successView) {
    formView.classList.add('hidden');
    successView.classList.remove('hidden');
  }

  form.reset();
}

// Toast notification helper
function triggerToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-slate-900 border border-amber-400 text-slate-100 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-20 opacity-0';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
    <span class="text-xs font-semibold">${message}</span>
  `;

  setTimeout(() => {
    toast.classList.remove('translate-y-20', 'opacity-0');
  }, 50);

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3500);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// FAQ Accordion
function toggleFaq(index) {
  const content = document.getElementById(`faq-content-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (!content) return;

  const isHidden = content.classList.contains('hidden');
  if (isHidden) {
    content.classList.remove('hidden');
    if (icon) icon.classList.add('rotate-180');
  } else {
    content.classList.add('hidden');
    if (icon) icon.classList.remove('rotate-180');
  }
}

// --- 7. Unique Animation: Interactive Diplomatic Constellation Network ---
function initDiplomaticConstellation() {
  const canvas = document.getElementById('diplomatic-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
    createParticles();
  });

  const mouse = { x: null, y: null, radius: 130 };

  canvas.parentElement.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  const particleCount = Math.min(Math.floor((width * height) / 16000), 65);
  let particles = [];

  const colors = [
    'rgba(212, 175, 55, ',   // Gold
    'rgba(245, 215, 127, ',  // Light gold
    'rgba(56, 189, 248, ',   // Cyan
    'rgba(255, 255, 255, '   // White star
  ];

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1.2;
      this.colorBase = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = Math.random() * 0.5 + 0.3;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse gentle repel/gravitate
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.colorBase + this.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#d4af37';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  createParticles();

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting multilateral diplomatic lines
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 115) {
          const lineAlpha = (1 - dist / 115) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }

      // Connect to mouse cursor
      if (mouse.x !== null && mouse.y !== null) {
        const mdx = particles[a].x - mouse.x;
        const mdy = particles[a].y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 130) {
          const mAlpha = (1 - mdist / 130) * 0.35;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      particles[a].update();
      particles[a].draw();
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// --- 8. Unique Animation: Dynamic Diplomatic Typewriter ---
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const phrases = [
    'Forging Diplomacy in an Age of Disruption',
    '3-Day Residential Retreat at NMIMS Shirpur',
    'Polar Sovereignty, LAWS & Multilateral Crisis',
    'Where 500+ Future Leaders Shape Global Peace',
    'The 15th Legacy Edition • Mukesh Patel Tech Park'
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let delay = 90;

  function type() {
    const current = phrases[phraseIdx];

    if (isDeleting) {
      el.innerText = current.substring(0, charIdx - 1);
      charIdx--;
      delay = 45;
    } else {
      el.innerText = current.substring(0, charIdx + 1);
      charIdx++;
      delay = 90;
    }

    if (!isDeleting && charIdx === current.length) {
      delay = 2200; // Pause at end of phrase
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      delay = 400; // Pause before typing new phrase
    }

    setTimeout(type, delay);
  }

  type();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  renderCommittees('all');
  switchItineraryDay(1);
  searchMatrix('');
  switchTransit('flight');
  initDiplomaticConstellation();
  initTypewriter();

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCommitteeModal();
      closeRegisterModal();
    }
  });

  const committeeModal = document.getElementById('committee-modal');
  if (committeeModal) {
    committeeModal.addEventListener('click', (e) => {
      if (e.target === committeeModal) closeCommitteeModal();
    });
  }

  const regModal = document.getElementById('registration-modal');
  if (regModal) {
    regModal.addEventListener('click', (e) => {
      if (e.target === regModal) closeRegisterModal();
    });
  }
});

