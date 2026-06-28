const weddingDate = new Date("August 29, 2026 18:00:00");

function updateCountdown(){

const now = new Date();

const diff = weddingDate - now;

const days = Math.floor(diff/(1000*60*60*24));

const hours = Math.floor(diff/(1000*60*60)%24);

const minutes = Math.floor(diff/(1000*60)%60);

document.getElementById("countdown").innerHTML = `

<div>
${days}
<br>
Days
</div>

<div>
${hours}
<br>
Hours
</div>

<div>
${minutes}
<br>
Minutes
</div>

`;

}

updateCountdown();

setInterval(updateCountdown,1000);
