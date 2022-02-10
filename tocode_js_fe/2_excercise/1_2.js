const images = ['1.jpg', '2.jpg', '3.jpg'];
const widths = [200, 300, 200];


function getLeftValueForImage(images, widths, locateLeft){
    let location = 0;

    for (const k of Object.keys(widths)){
        let val = widths[locateLeft]
        if (val > 0){
            val = -val
        }
        location =  val
    }
    return location

}
const leftValue = getLeftValueForImage(images, widths, 0);
console.log(leftValue);