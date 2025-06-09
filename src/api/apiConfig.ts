import axios from "axios";



export const api = axios.create({
    baseURL:'http://172.20.10.2:3333/',
    headers:{
        Authorization:
                'Bearer eyJhbGciOiJSUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlciI6eyJlbWFpbCI6Im1hcmlhanVsaWFAY29mZnN0YWNrLmNvbSJ9fSwiaWF0IjoxNzQ5NDcyNzA1LCJleHAiOjE3NDk0NzQ1MDV9.3fbED1oPAPxZ7EIHN-vkOmfL1KFJaNGH5kjiG1BVgK4gbanoghqdyR8wpmn39dzYqofDLY72tmVShkAu72ppV6K0QMNjGsD4idZ-MnjmtCmO4z5wIAmW6AvvVq57b8D7gSLDEVMLJLD7OClUKMJRHAWw2xcojJTpJ6Nzm7HTZCuxA1Q2k6INuR7sxmGJuHqZU14AbM1bdbM-7UjaJahkja1z3o2N_MIDtzzISMD0ai1Tq-XZZnLmVtc7RjknGpnbLoy7FpHK2QojKWzK34dt3fr3reMXFe9EhZDw0gqxmj_7OWlK-n0nyRYu9nZXQrSbk-EDMBqaV9kLRHZ-yaaJ5hPfITW54gT9Ky7RSsVEyWzkhyG-PZUNwS4YtaIClm6oi0xepzPvAzzWZlfnysjRX6qma43TOkIlyHdDBrlZDnSoS8tlCvE7vDD6LTYe2ccZfE6ck5HV0WRYWKk5i3EZfzyB6Wr5iECGk4Zz1MUbO8Cg9c3h2QfprzKdKt6zZUBnTfnHX8ak5sVhtHC4dwfEbJt8nudpF6xtRvg7iZ2bavYmmSsMFXl8iRXNFRnugzfQWV_JrrMsI47Pb5RdlG0BwdE-PWbrHtqB3iZt6jehx50szWmFq-RbeP_ljrUOC5ll8yQqTK-AD_91gWlbrORxkoyOgtZOOZZRPGIqPxkMd1c'
    }    
            })