let date=new Date;function getNav(){document.getElementById("navbar-cta").classList.toggle("hidden")}async function fetchEvent(){let e=await fetch("https://raw.githubusercontent.com/RPLSaci/event/main/events/mainMenu.json"),t=await e.json();t=t.reverse(),console.log(t);for(let e=0;e<t.length;e++){const n=t[e];console.log(n);let a=`\n        <div class="card w-96 bg-base-100 shadow-xl image-full">\n        <figure><img src="https://github.com/RPLSaci/event/raw/main/events/${n.img}" alt="" /></figure>\n        <div class="card-body">\n          <h2 class="card-title">${n.nama}</h2>\n          <p>${n.deskripsi}</p>\n          <div class="card-actions justify-end">\n            <a class="btn btn-primary" href="./showEvent/index.html?id=${n.id}">Detail</a>\n          </div>\n        </div>\n    </div>\n    `;const i=document.querySelector("#cards");i&&(i.innerHTML+=a)}}document.getElementById("FooterYear")&&(document.getElementById("FooterYear").innerText=document.getElementById("FooterYear").innerText.replace("xxxx",date.getFullYear())),fetchEvent();
//# sourceMappingURL=index.5a09e068.js.map
