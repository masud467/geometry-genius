function calculatePentagonArea(){
    
    const perimeter = getInputFieldValue('pentagon-perimeter');
    console.log(perimeter);

    const apothem = getInputFieldValue('pentagon-apothem')
    console.log(apothem)

    const area = 0.5 * perimeter * apothem;
    console.log('area of the pentagon is', area)

    setInnerText('pentagon-area', area)
}

function calculateEllipseArea(){
    const majorAxis = getInputFieldValue('ellipse-semi-major-axis')
    console.log(majorAxis)

    const minorAxis = getInputFieldValue('ellipse-semi-minor-axis')
    console.log(minorAxis)

    const area = 3.14 * majorAxis * minorAxis
    console.log('area of ellipse', area)

    setInnerText('ellipse-area', area)
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