export const siteMap = [
    {
        TITLE: 'EFOS',
        DESCRIPTION: 'API REST para la consulta de EFOS emitidos por el SAT',
        APP_URL: 'https://efos-wk2mt6srkq-uk.a.run.app',
        API: 'https://efos-wk2mt6srkq-uk.a.run.app/api',
        DOC: 'https://efos-wk2mt6srkq-uk.a.run.app/api',
        RELATIONS: ['LOGIN'],
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
        APP_URL: 'http://login.racooapps.com/',
        API: 'http://login.racooapps.com/',
        DOC: 'http://login.racooapps.com/doc',
        RELATIONS: ['LEYES', 'UIF', 'EFOS'],
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
        API: '',
        DOC: '',
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
        TITLE: 'LEYES',
        DESCRIPTION: 'Leyes',
        APP_URL: 'https://leyes-wk2mt6srkq-uk.a.run.app',
        API: 'https://leyes-wk2mt6srkq-uk.a.run.app/api',
        DOC: 'https://leyes-wk2mt6srkq-uk.a.run.app/api',
        RELATIONS: ['LOGIN'],
        DB: [
                {
                    DB_TYPE: 'mysql',
                    DB_NAME: 'minotari_softinian',
                    DB_URL: 'minotaria.com.mx'
                }
            ]
    },
    // {
    //     TITLE: 'TEST Title',
    //     DESCRIPTION: 'My Testing desciption',
    //     APP_URL: 'https://<my-app-url>',
    //     API: 'https://<my-api-url>',
    //     DOC: 'https://<my-doc-url>',
    //     RELATIONS: [],
    //     DB: [{ 
            
    //             DB_TYPE: '',
    //             DB_URL: ''
        
    //     }]    
    // },
]