function calculatePentagonArea(){
    
    const perimeter = getInputFieldValue('pentagon-perimeter');
    console.log(perimeter);

    const apothem = getInputFieldValue('pentagon-apothem')
    console.log(apothem)

    const area = 0.5 * perimeter * apothem;
    console.log('area of the pentagon is', area)

    setInnerText('pentagon-area', area)
}


function getInputFieldValue(fieldValueId){
    const fieldValue = document.getElementById(fieldValueId);
    const fieldValueText = fieldValue.value;
    const value = parseFloat(fieldValueText);
    return value; 
}

function setInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area
}