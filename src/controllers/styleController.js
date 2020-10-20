const styleController = (() => {
    // Generate an Array of Colors for further use
    function generateColorArray() {
        let rgb = [[0, 0, 255]];

        while (rgb.length < 255) {
            let i = rgb.length;
            rgb.push([i, 0, 255-i])
        }
        return rgb;
    }

    // Convert input to a usable data
    function convertData(temp) {
        let measure = Math.floor(temp - 273.15);
        let mod = 5;
        if (measure < 0) { measure = 0 };

        // Incomplete

    };

})();

export default styleController
