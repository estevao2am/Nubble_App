import axios from "axios";



export const api = axios.create({
    baseURL:'http://172.20.10.2:3333/',
    headers:{
        Authorization:
                'Bearer eyJhbGciOiJSUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlciI6eyJlbWFpbCI6Im1hcmlhanVsaWFAY29mZnN0YWNrLmNvbSJ9fSwiaWF0IjoxNzQ4OTAxMDkzLCJleHAiOjE3NDg5MDI4OTN9.N2LTIfn0VQGbGKTECcZmYa5TL5yaZOqmhnxbyZJN-LXWEJSIzrjGUWSg9JphGa8q8653CyXEf1tVs0O0tHjt-KEsQJAWsZ_BGYAXiCBxZv58dQY4zACDAqauu5P6nwjrViQLmTk-lbcuap_QnyElCyZVPO9tEayp5PQ1jRiKb0exF_RXixdU-KOKgfwEmULUvuHYvVPRDn2d3VZNSKMXnGZ0JA0NvabAHMgC_O0xigZsj2RLdG1JHwndJLxApxEZA_K1vSx0G6N3BbXVmxKZimQmxiq0_RsEP7MLUpQQXyKqw-MJmzYQs1VrKe_OGuqjx1xp__OSiEBj2kbVbQNeX5z-Zt_kBxAk0YduwxsG_HRncCBx_2U9JevePCFU1FYkwmP6wulfLtdPUcu0KrhWrVgsdRiNOMYoQaL1OkHXqJNI2uoFpPjrx5QJDCj-bBzaUfyVYKrBhHnKJLph_qsIEXHSFxjDdm_f7_3k_og69eo0slnLq5is00AfsK0UkqQ9FF6gou640gAe4wkaPzJzaPwmXSCPcVtm3BI8zmPDO3pbniQVJ0EhoOp-5WhMvU84MTJSisefOa3IqvWwPI1fsmBt9jPaKCQKbZvDyBf82W6Rm6fFfODPDMotFBJoH63mOqhEwzq2ZpoJMUi87OdNTBUAkpJQlDiTpEndssqf5H8'
    }
})