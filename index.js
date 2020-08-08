function barchart(){
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('height',`${600}px`);
    svg.setAttribute('width',`${600}px`);
    svg.setAttribute('viewBox',`${600}px`);

    const charData = newArray(10)
    .fill(0)
    .map(
        ()=>
        parseInt(
            100* (Math.random() + 1), 10
        )
    ),
};