export interface MetaDataPageAPI {
  total: number; // 24;
  per_page: number; // 10;
  current_page: number; // 1;
  last_page: number; // 3;
  first_page: number; // 1;
  first_page_url: string; // '/?page=1';
  last_page_url: string; // '/?page=3';
  next_page_url: string | null; // '/?page=2';
  previous_page_url: string | null; // null;
  }

/**
 * @description Interface que define o formato de uma paginacao de dados da api
 * @template Data tipo de dados da pagina
 */ 

export interface PageAPI<Data> {
    meta:MetaDataPageAPI
    data:Data[]
  }


  // pagination 

  export interface pageParams {
    page?:number,
    per_page?: number
  }