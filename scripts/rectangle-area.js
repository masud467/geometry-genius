function calculateRectangleArea(){

    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidth = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidth);
    console.log(width);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLength = rectangleLengthInput.value;
    const length = parseFloat(rectangleLength);
    console.log(length);

    const area = width * length;
    console.log('total area:', area);
      

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;


}