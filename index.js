import { siteMap } from './site.map.js';

window.onload = addElement;
function addElement() {
  const newDiv = document.createElement("div");
  let newContent = "", by3 = 0, by6 = 0;
  siteMap.forEach(app => {
    by3++;
    by6++;
    if(by3 === 1)
        newContent += `
        <div class="container">
            <div class="row">
        `;

    newContent +=`
    <div class="col-md-4">
    <h2>${app.TITLE}</h2>
    <p>
      ${app.DESCRIPTION.substr(0, 41)}
    </p>
    <p>
      <ul class="list-group">
        <li class="list-group-item">
          APP URL: <a href="${app.APP_URL}" target="_blank">${app.APP_URL.substr(0, 30)}</a>
        </li>    
    `
    newContent += app.API ? `
        <li class="list-group-item">
            API: <a href="${app.API}" target="_blank">${app.API.substr(0, 35)}</a>
        </li>  ` : ``;
    newContent +=`</ul></p>`;

    newContent += app.DOC ? `
        <p>
            <a class="btn btn-secondary" href="${app.DOC.substr(0, 30)}" target="_blank" role="button">
              Documentación &raquo;
            </a>
        </p>  ` : ``;    
    newContent +=`</div>`;

    if(by3 === 3){
        by3 = 0;
        newContent += `</div>`;
        if(by6 === 6) {
            by6 = 0;
            newContent += `<hr>`;
        }
        newContent += `</div>`;
    }
  })
  newDiv.innerHTML = newContent;

  const currentDiv = document.getElementById("root");
  currentDiv.appendChild(newDiv);
}
