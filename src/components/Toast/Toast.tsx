
import { useToast,useToastService } from '../../../src/services/toast/useToast';
import { useEffect } from 'react';
import { ToastContent } from './components/ToastContent';

const DEFAULT_DURATION = 2000

export function Toast(){

    const toast = useToast()
        const {hideToast} = useToastService()



    useEffect(()=> {
        if(toast){
            setTimeout(()=>{
                hideToast()
            },toast.duration ||  DEFAULT_DURATION
)
        }

    },[hideToast, toast])

    if(!toast) {
        return null
    }


    return (
      <ToastContent toast={toast}/>
    )
}
