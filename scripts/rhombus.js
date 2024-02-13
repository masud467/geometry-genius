function calculateRhombusArea(){

    const rhombusDistance1Input = document.getElementById('rhombus-distance1');
    const rhombusDistance1 = rhombusDistance1Input.value;
    const distance1 = parseFloat(rhombusDistance1)
    console.log(distance1)


    const rhombusDistance2Input = document.getElementById('rhombus-distance2');
    const rhombusDistance2 = rhombusDistance2Input.value;
    const distance2 = parseFloat(rhombusDistance2)
    console.log(distance2);

    const area = 0.5 * distance1 * distance2;
    console.log('total area is', area);

    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = area
    



}