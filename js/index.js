var sector = Circles.create({
    id:                  'sector',
    radius:              60,
    value:               0,
    maxValue:            360,
    width:               5,
    text:                "",
    colors:              ['transparent', '#000000'],
    duration:            0,
    wrpClass:            'circles-wrp',
    textClass:           'circles-text',
    valueStrokeClass:    'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper:        true,
    styleText:           true
  });

onmousemove = (event) => {
    document.getElementById("line").style.webkitTransform = "rotate("+((-Math.atan2( event.clientX - window.innerWidth/2, event.clientY - window.innerHeight/2 ) * ( 180 / Math.PI ))+90)+"deg)"
    let degrees = ((-Math.atan2( event.clientX - window.innerWidth/2, event.clientY - window.innerHeight/2 ) * ( 180 / Math.PI ))+90)
    
    if (degrees > 0) {
        degrees = 360-degrees
    }
    if (degrees < 0) {
        degrees = -degrees
    }

    degrees = Math.round(degrees)

    sector.update(degrees)
    document.getElementById("theta").textContent = "θ = " + Math.round(degrees) + "°"
    document.getElementById("radians").textContent = Math.round(degrees)+"° = " + (Math.round(degrees) * Math.PI / 180).toFixed(3) + " rads"
    document.getElementById("sin").textContent = "sin(θ) = " + Math.sin((Math.round(degrees) * Math.PI / 180)).toFixed(3)
    document.getElementById("cos").textContent = "cos(θ) = " + Math.cos((Math.round(degrees) * Math.PI / 180)).toFixed(3)
    if (Math.round(degrees) == 90 || Math.round(degrees) == 270) {
        document.getElementById("tan").textContent = "tan(θ) = Not Defined"
    } else {
        document.getElementById("tan").textContent = "tan(θ) = " + Math.tan((Math.round(degrees) * Math.PI / 180)).toFixed(3)
    }
};

