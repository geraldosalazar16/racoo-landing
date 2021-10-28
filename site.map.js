export const siteMap = [
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
        REPOSITORY: ['https://github.com/geraldosalazar16/racoo-landing.git'],
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
        REPOSITORY: '',
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
        TITLE: 'Control de usuarios',
        DESCRIPTION: 'Esta aplicación permite dar de alta a los usuarios en el sistema Racoo',
        APP_URL: 'http://usuarios.racooapps.com/',
        API: '',
        DOC: '',
        REPOSITORY: '',
        RELATIONS: [],
        DB: [
                {
                    DB_TYPE: '',
                    DB_NAME: '',
                    DB_URL: ''
                }
            ]
    },
    {
        TITLE: 'FADOCS',
        DESCRIPTION: 'Esta app permite el autocompletado de documentos',
        APP_URL: 'http://fadocs.racooapps.com/',
        API: 'http://drive.racooapps.com/api',
        DOC: '',
        REPOSITORY: ['racoo_fadocs_front', 'racoo-google-drive-api'],
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
        REPOSITORY: ['racoo-alertas-usuarios', 'racoo-alertas-usuarios-front'],     
        RELATIONS: [],
        DB: [
            {
                DB_TYPE: 'mysql',
                DB_NAME: 'racoolpb_listas_uif',
                DB_URL: 'listapb.com'
            }
        ]    
    },
    {
        TITLE: 'FORMULARIOS',
        DESCRIPTION: 'Formularios',
        APP_URL: 'http://formularios.racooapps.com',
        API: 'http://formularios.racooapps.com',
        DOC: '',
        REPOSITORY: ['backFormularios', 'appFormulariosV2'],     
        RELATIONS: ['LOGIN'],
        DB: [
            {
                DB_TYPE: 'mongodb',
                DB_NAME: 'racoo',
                DB_URL: 'mongodb+srv://racoo:racoo2019@cluster0-3a5re.mongodb.net/test?retryWrites=true&w=majority'
            }
        ]    
    }
]