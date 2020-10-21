const styleController = (() => {

    function generateColorArray() {
        let rgb = [[0, 0, 255]];

        while (rgb.length < 255) {
            let i = rgb.length;
            rgb.push([i, 0, 255-i])
        }
        return rgb;
    }

    function convertData(temp) {
        let measure = Math.floor(temp - 273.15);
        let mod = 5;
        if (measure < 0) { measure = 0 };

        const score = measure * mod ;
        console.log(score);
        return score;
    };

    const applyStyle = (element, temp) => {
        const score = convertData(temp);
        const color = generateColorArray()[temp];
        [red, green, blue] = color;
        element.style.backgroundColor = `rgb(${red},${green},${blue})`
    }

})();

export default styleController
