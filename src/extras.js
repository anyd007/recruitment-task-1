export function validInputs(val){
    if(val.length > 0){
        return true;
    }else{
        return false;
    }
}

export function hideShow(val){
    if(Array.isArray(val) && val.length){
        return true
    }else{
        return false
    }
}
