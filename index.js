const siteMap = [
  {
      TITLE: 'EFOS',
      DESCRIPTION: 'API REST para la consulta de EFOS emitidos por el SAT',
      APP_URL: 'https://efos-wk2mt6srkq-uk.a.run.app',
      API: 'https://efos-wk2mt6srkq-uk.a.run.app/api',
      DOC: 'https://efos-wk2mt6srkq-uk.a.run.app/api',
      REPOSITORY: ['https://github.com/edgar-durand/efos-workspace.git'],
      RELATIONS: [
          'LOGIN',
          'https://github.com/geraldosalazar16/racoo_cloud_functions.git'
      ],
      DB: [
              {
                  DB_TYPE: 'mongodb',
                  DB_NAME: 'efos',
                  DB_URL: 'mongodb+srv://racoo:racoo2019@cluster0-7gr8t.gcp.mongodb.net/efos'
              },
              {
                  DB_TYPE: 'Cloud Storage',
                  DB_URL: 'efos_original_csv'
              }
          ]
  },
  {
      TITLE: 'UIF',
      DESCRIPTION: 'Aplicación para la gestión de UIF',
      APP_URL: 'https://personas-wk2mt6srkq-uk.a.run.app',
      API: 'https://personas-wk2mt6srkq-uk.a.run.app/api',
      DOC: 'https://personas-wk2mt6srkq-uk.a.run.app/api',
      REPOSITORY: ['https://github.com/edgar-durand/people-workspace.git'],
      RELATIONS: ['LOGIN'],
      DB: [
              {
                  DB_TYPE: 'mongodb',
                  DB_NAME: 'personas',
                  DB_URL: 'mongodb+srv://racoo:racoo2019@cluster0-7gr8t.gcp.mongodb.net/personas'
              }
          ]
  },
  {
      TITLE: 'LOGIN',
      DESCRIPTION: 'Login Racoo',
      APP_URL: 'https://login-wk2mt6srkq-uk.a.run.app',
      API: 'https://login-wk2mt6srkq-uk.a.run.app',
      DOC: 'https://login-wk2mt6srkq-uk.a.run.app/doc',
      REPOSITORY: ['https://github.com/edgar-durand/login-monorepo.git'],
      RELATIONS: ['LEYES', 'UIF', 'EFOS', 'FADOCS', 'FORMULARIOS'],
      DB: [
              {
                  DB_TYPE: 'mysql',
                  DB_NAME: 'midecl_login',
                  DB_URL: 'mideclaranot.com'
              }
          ]
  },
  {
      TITLE: 'LINKS',
      DESCRIPTION: 'Links Racoo',
      APP_URL: 'http://links.racooapps.com/',
      API: 'http://links.racooapps.com',
      DOC: 'http://links.racooapps.com/doc',
      REPOSITORY: 'https://github.com/edgar-durand/links-monorepo.git',
      RELATIONS: [],
      DB: [
              {
                  DB_TYPE: 'mysql',
                  DB_NAME: '',
                  DB_URL: ''
              }
          ]
  },
  {
      TITLE: 'FADOCS',
      DESCRIPTION: 'Esta app permite el autocompletado de documentos',
      APP_URL: 'https://fadocs-wk2mt6srkq-uc.a.run.app',
      API: 'https://fadocs-wk2mt6srkq-uc.a.run.app/api',
      DOC: '',
      REPOSITORY: ['https://github.com/edgar-durand/fadocs-monorepo.git'],
      RELATIONS: ['LOGIN'],
      DB: [
              {
                  DB_TYPE: 'Google Drive',
                  DB_NAME: '',
                  DB_URL: ''
              }
          ]
  },
  {
      TITLE: 'LEYES',
      DESCRIPTION: 'Leyes',
      APP_URL: 'https://leyes-wk2mt6srkq-uk.a.run.app',
      API: 'https://leyes-wk2mt6srkq-uk.a.run.app/api',
      DOC: 'https://leyes-wk2mt6srkq-uk.a.run.app/api',
      REPOSITORY: ['https://github.com/edgar-durand/leyes-cicd.git'],
      RELATIONS: ['LOGIN'],
      DB: [
              {
                  DB_TYPE: 'mysql',
                  DB_NAME: 'minotari_softinian',
                  DB_URL: 'minotaria.com.mx'
              }
          ]
  },
  {
      TITLE: 'Alerta usuarios',
      DESCRIPTION: 'Alerta usuarios',
      APP_URL: 'http://adminusuarios.racooapps.com',
      API: 'http://alertasusuarios.racooapps.com',
      DOC: '',
      REPOSITORY: ['https://github.com/edgar-durand/alerta-usuarios-monorepo.git'],
      RELATIONS: [],
      DB: [
          {
              DB_TYPE: 'mysql',
              DB_NAME: 'racoolpb_listas_uif',
              DB_URL: 'listapb.com'
          }
      ]
  }
]

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
    <p style="height: 3rem;">
      ${app.DESCRIPTION}
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
            <a class="btn btn-secondary" href="${app.DOC}" target="_blank" role="button">
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
