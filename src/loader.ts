
class Loader {

    ims = {};

    loadImage = function (key, src) {
        var img = new Image();
        var d = new Promise(function (resolve, reject) {
            img.onload = function () {
                console.log("Loaded image: " + key);
                this.ims[key] = img;
                resolve(img);
            }.bind(this);
            img.onerror = function () {
                reject('Could not load image: ' + src);
            };
        }.bind(this));
        img.src = src;
        return d;
    };

    getImage = function (key) {
        return (key in this.ims) ? this.ims[key] : null;
    };
}