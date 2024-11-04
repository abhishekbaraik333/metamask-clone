const ModelViewer = require('@metamask/logo');

const viewer = ModelViewer({
    pxNotRatio: true,
    width: 230,
    height: 230,
    followMouse: true,
    slowDrift: false,
});

const container = document.getElementById('logo-container');
container.appendChild(viewer.container);

viewer.lookAt({ x: 100, y: 100 });
viewer.setFollowMouse(true);