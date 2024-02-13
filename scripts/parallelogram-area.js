function calculateParallelogramArea(){

    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBase = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBase);
    console.log(base);

    const parallelogramHeightInput = document.getElementById('parallelogram-height')
    const parallelogramHeight = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeight)
    console.log(height)

    const area = base * height;
    console.log('total area:', area);

    const parallelogramArea = document.getElementById('parallelogram-area')
    parallelogramArea.innerText = area
    
}