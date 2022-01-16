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

export function sumArry(val){
    if(Array.isArray(val) && val.length){
        val.reduce((prevValue, next) => prevValue+next, 0)
    }else{
        return false
    }
}

