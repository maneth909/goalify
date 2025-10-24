// Toggle "View More" Matches
const matchesContainer = document.getElementById("matches-container");
const viewMoreBtn = document.getElementById("view-more");

const matches = [
  { home: "Arsenal", away: "Chelsea", logo1: "https://crests.football-data.org/57.svg", logo2: "https://crests.football-data.org/61.svg", time: "20:00", date: "Oct 25" },
  { home: "Man City", away: "Liverpool", logo1: "https://crests.football-data.org/65.svg", logo2: "https://crests.football-data.org/64.svg", time: "22:00", date: "Oct 26" },
  { home: "Tottenham", away: "Newcastle", logo1: "https://crests.football-data.org/73.svg", logo2: "https://crests.football-data.org/67.svg", time: "00:00", date: "Oct 27" },
  { home: "Brighton", away: "Everton", logo1: "https://crests.football-data.org/397.svg", logo2: "https://crests.football-data.org/62.svg", time: "02:30", date: "Oct 27" },
  { home: "Brentford", away: "Aston Villa", logo1: "https://crests.football-data.org/402.svg", logo2: "https://crests.football-data.org/58.svg", time: "01:00", date: "Oct 28" },
];

let visible = 3;
function renderMatches() {
  matchesContainer.innerHTML = "";
  matches.slice(0, visible).forEach(m => {
    const card = document.createElement("div");
    card.className = "bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center shadow hover:scale-105 transition";
    card.innerHTML = `
      <div class="flex justify-center space-x-3 items-center mb-2">
        <img src="${m.logo1}" alt="${m.home}" class="w-10 h-10">
        <span class="font-semibold">${m.home}</span>
        <span class="text-gray-400">vs</span>
        <span class="font-semibold">${m.away}</span>
        <img src="${m.logo2}" alt="${m.away}" class="w-10 h-10">
      </div>
      <p class="text-sm text-gray-300">${m.date} • ${m.time}</p>
    `;
    matchesContainer.appendChild(card);
  });
}
renderMatches();

viewMoreBtn.addEventListener("click", () => {
  visible = visible === 3 ? matches.length : 3;
  viewMoreBtn.textContent = visible === 3 ? "View More →" : "Show Less ↑";
  renderMatches();
});

// Premier League Standings (Static Template)
const standingsBody = document.getElementById("standings-body");
const clubs = [
  "Arsenal","Man City","Liverpool","Aston Villa","Tottenham","Newcastle",
  "Chelsea","Brighton","Man United","West Ham","Crystal Palace","Brentford",
  "Fulham","Everton","Bournemouth","Wolves","Nottingham Forest","Burnley","Sheffield Utd","Luton Town"
];

clubs.forEach((club, i) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td class="py-2 px-4">${i+1}</td>
    <td class="py-2 px-4">${club}</td>
    <td class="py-2 px-4">${Math.floor(Math.random()*10)+5}</td>
    <td class="py-2 px-4">${Math.floor(Math.random()*5)+5}</td>
    <td class="py-2 px-4">${Math.floor(Math.random()*5)}</td>
    <td class="py-2 px-4">${Math.floor(Math.random()*5)}</td>
    <td class="py-2 px-4 font-semibold">${Math.floor(Math.random()*30)+20}</td>
  `;
  standingsBody.appendChild(row);
});

// Top Scorers Section
const scorersContainer = document.getElementById("scorers-container");
const scorers = [
  { name: "Erling Haaland", team: "Man City", goals: 10, img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Erling_Haaland_2023.jpg" },
  { name: "Mohamed Salah", team: "Liverpool", goals: 8, img: "https://upload.wikimedia.org/wikipedia/commons/3/31/Mohamed_Salah_in_2021.jpg" },
  { name: "Bukayo Saka", team: "Arsenal", goals: 7, img: "https://upload.wikimedia.org/wikipedia/commons/8/81/Bukayo_Saka_2021.jpg" },
];

scorers.forEach(s => {
  const card = document.createElement("div");
  card.className = "min-w-[200px] bg-white/10 rounded-xl p-4 text-center backdrop-blur-md hover:scale-105 transition";
  card.innerHTML = `
    <img src="${s.img}" alt="${s.name}" class="w-24 h-24 mx-auto rounded-full object-cover mb-3">
    <h4 class="font-semibold text-white">${s.name}</h4>
    <p class="text-gray-300 text-sm">${s.team}</p>
    <p class="text-blue-400 font-bold mt-2">${s.goals} Goals</p>
  `;
  scorersContainer.appendChild(card);
});



