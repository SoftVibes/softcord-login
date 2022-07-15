let spheres = [];

function loadSpheres() {
    for (let i = 0; i < 20; i++) {
        var sphere = document.createElement('DIV');
        sphere.className = 'sphere';
        sphere.style.backgroundColor = 'rgb(48, 32, 139)';
        sphere.style.position = 'fixed';
        sphere.style.width = '1vw';
        sphere.style.height = '1vw';
        sphere.style.borderRadius = '50%';
        sphere.style.top = Math.random() * 100 + 'vw';
        sphere.style.left = Math.random() * 100 + 'vw';
        sphere.style.opacity = '1';
        sphere.style.zIndex = '0';
        document.getElementById('container').appendChild(sphere);
        spheres.push(sphere);
    }
}

function updateSpheres() {
    for (let i = 0; i < spheres.length; i++) {
        var sphere = spheres[i];
        var width = parseInt(sphere.style.width.slice(0, -2));
        var height = parseInt(sphere.style.height.slice(0, -2));
        var marginLeft = parseInt(sphere.style.marginLeft.slice(0, -2));
        var marginTop = parseInt(sphere.style.marginTop.slice(0, -2));
        var opacity = parseFloat(sphere.style.opacity);
        width = width + 2;
        height = height + 2;
        marginLeft = marginLeft - 1;
        marginTop = marginTop - 1;
        opacity = opacity - 0.1;
        sphere.style.width = width + 'vw';
        sphere.style.height = height + 'vw';
        sphere.style.marginLeft = marginLeft + 'vw';
        sphere.style.marginTop = marginTop + 'vw';
        sphere.style.opacity = opacity.toString();

        if (opacity == 0) {
            document.getElementById('container').removeChild(sphere);
            sphere = document.createElement('DIV');
            sphere.className = 'sphere';
            sphere.style.backgroundColor = 'rgb(48, 32, 139)';
            sphere.style.position = 'fixed';
            sphere.style.width = '1vw';
            sphere.style.height = '1vw';
            sphere.style.borderRadius = '50%';
            sphere.style.top = Math.random() * 100 + 'vw';
            sphere.style.left = Math.random() * 100 + 'vw';
            sphere.style.opacity = '1';
            sphere.style.zIndex = '0';
            document.getElementById('container').appendChild(sphere);
            spheres[i] = sphere;
        }
    }

}

loadSpheres();

setInterval(updateSpheres, 100);