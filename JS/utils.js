export function notANumber(value){
    return isNaN(value) || value == ""
}


export function IMC(height, weight){
    return (weight / ((height / 100) ** 2)).toFixed(2) //com duas casas decimais
}
