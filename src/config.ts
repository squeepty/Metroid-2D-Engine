class Config {

    configs = {};

    add(name, checkbox) {
        this.configs[name] = checkbox;
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                console.log(this.id + " checkbox checked..");
            } else {
                console.log(this.id + " checkbox unchecked..");
            }
        })
    };

    check(name) {
        let e = this.configs[name];
        return e.checked;
    };
}