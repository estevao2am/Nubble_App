

// convert dados da paginação do formato que vem da api para uma estrutura da nossa aplicação

import { MetaDataPage } from "..//types/Pages";
import { MetaDataPageAPI } from "./apiTypes";

function toMetaDataPage(meta:MetaDataPageAPI):MetaDataPage {
    return {
        total:meta.total,
        perPage:meta.per_page,
        currentPage:meta.current_page,
        lastPage:meta.last_page,
        firstPage:meta.first_page,
        hasNextPage:!!meta.next_page_url,
        hasPreviousPage: !!meta.previous_page_url
    }

}

export const apiAdapter = {
    toMetaDataPage
}