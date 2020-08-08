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
    );
    function chartGenerate(data) {
        const chartElems = [];

        const create = (d) => {
            d.forEach((entry, index) => {
                const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                bar.setAttribute('x', index * (600 / data.length));
                bar.setAttribute('y',600-y);
                bar.setAttribute('width',`${600/ data.length}px`);
                bar.setAttribute('height', `${0}px`);
                bar.setAttribute('style', 'transition : 0.5s all');
                svg.appendChild(bar);
                chartElems.push(bar);
            });
        };

        const update = (newData) => {
            if(newData.length> chartElems.length) {
                create(newData.filter(((e,i) => i > chartElems.length - 1)));
        }
    }
            
};