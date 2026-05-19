class Zoomer {

    // Anchor
    TOP = 1;
    DOWN = 2;
    LEFT = 3;
    RIGHT = 4;

    // Direction
    CLOCK = 1;
    COUNTERCLOCK = 0;

    direction = this.COUNTERCLOCK;
    anchor = this.TOP;
    x = 0;
    y = 0;
    map;

    render(ctx, cameraX, cameraY) {
        let img = loader.getImage("zoomer");
        if (img == null) {
            console.log("zoomer render: image not available yet..");
            return;
        }
        if (this.anchor == this.TOP) {
            ctx.translate(this.x - cameraX, this.y + img.height - cameraY);
            ctx.scale(1, -1);
            ctx.drawImage(img, 0, 0);
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        } else if (this.anchor == this.LEFT) {
            ctx.translate(this.x - cameraX + img.width, this.y + img.height - cameraY);
            ctx.rotate(80);
            ctx.scale(1, -1);
            ctx.drawImage(img, 0, 0);
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        } else if (this.anchor == this.RIGHT) {
            ctx.translate(this.x - cameraX, this.y + img.height - cameraY);
            ctx.rotate(80);
            ctx.drawImage(img, 0, 0);
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        } else {
            ctx.drawImage(img, this.x - cameraX, this.y - cameraY);
        }
    }
    //
    // Spawn
    //
    spawn(map, direction, anchor, x, y) {
        this.map = map;
        this.direction = direction;
        this.anchor = anchor;
        this.x = x * 32;
        this.y = y * 32;
    };

    //
    // Straight
    //
    _canMoveStraightClock() {
        let x, y;
        if ((this.anchor == this.LEFT) || (this.anchor == this.DOWN)) {
            x = Math.ceil(this.x / blockWitdh);
            y = Math.ceil(this.y / blockHeight);
        } else {
            x = Math.floor(this.x / blockWitdh);
            y = Math.floor(this.y / blockHeight);
        }
        if (this.anchor == this.TOP) {
            let empty = map.data[y][x + 1];
            let solid = map.data[y - 1][x + 1];
            let solid1 = map.data[y - 1][x];
            if ((empty) == 0 && ((solid != 0) || (solid1 != 0))) return true;
        }
        if (this.anchor == this.DOWN) {
            let empty = map.data[y][x - 1];
            let solid = map.data[y + 1][x - 1];
            let solid1 = map.data[y + 1][x];
            if ((empty) == 0 && ((solid != 0) || (solid1 != 0))) return true;
        }
        if (this.anchor == this.RIGHT) {
            let empty = map.data[y + 1][x];
            let solid = map.data[y + 1][x + 1];
            let solid1 = map.data[y][x + 1];
            if ((empty) == 0 && ((solid != 0) || (solid1 != 0))) return true;
        }
        if (this.anchor == this.LEFT) {
            let empty = map.data[y - 1][x];
            let solid = map.data[y - 1][x - 1];
            let solid1 = map.data[y][x - 1];
            if ((empty) == 0 && ((solid != 0) || (solid1 != 0))) return true;
        }
        return false;
    };
    _canMoveStraightCounter() {
        let x, y;
        if (((this.anchor == this.TOP) || (this.anchor == this.RIGHT))) {
            x = Math.ceil(this.x / blockWitdh);
            y = Math.ceil(this.y / blockHeight);
        } else {
            x = Math.floor(this.x / blockWitdh);
            y = Math.floor(this.y / blockHeight);
        }

        if (this.anchor == this.TOP) {
            let empty = map.data[y][x - 1];
            let solid = map.data[y - 1][x - 1];
            let solid1 = map.data[y - 1][x];
            if ((empty) == 0 && ((solid != 0) || (solid1 != 0))) return true;
        }
        if (this.anchor == this.DOWN) {
            let empty = map.data[y][x + 1];
            let solid = map.data[y + 1][x + 1];
            let solid1 = map.data[y + 1][x];
            if ((empty) == 0 && ((solid != 0) || (solid1 != 0))) return true;
        }
        if (this.anchor == this.RIGHT) {
            let empty = map.data[y - 1][x];
            let solid = map.data[y - 1][x + 1];
            let solid1 = map.data[y][x + 1];
            if ((empty) == 0 && ((solid != 0) || (solid1 != 0))) return true;
        }
        if (this.anchor == this.LEFT) {
            let empty = map.data[y + 1][x];
            let solid = map.data[y + 1][x - 1];
            let solid1 = map.data[y][x - 1];
            if ((empty) == 0 && ((solid != 0) || (solid1 != 0))) return true;
        }
        return false;
    };

    //
    // Turn
    //
    _canTurnClock() {
        let x = Math.round(this.x / blockWitdh);
        let y = Math.round(this.y / blockHeight);

        if (this.anchor == this.TOP) {
            let solid = map.data[y][x + 1];
            let empty = map.data[y + 1][x];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.DOWN) {
            let solid = map.data[y][x - 1];
            let empty = map.data[y - 1][x];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.RIGHT) {
            let solid = map.data[y + 1][x];
            let empty = map.data[y][x - 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.LEFT) {
            let solid = map.data[y - 1][x];
            let empty = map.data[y][x + 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        return false;
    };
    _canTurnCounter() {
        let x = Math.floor(this.x / blockWitdh);
        let y = Math.floor(this.y / blockHeight);

        if (this.anchor == this.TOP) {
            let empty = map.data[y + 1][x];
            let solid = map.data[y][x - 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.DOWN) {
            let empty = map.data[y - 1][x];
            let solid = map.data[y - 1][x + 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.RIGHT) {
            let empty = map.data[y][x - 1];
            let solid = map.data[y - 1][x - 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.LEFT) {
            let empty = map.data[y][x + 1];
            let solid = map.data[y + 1][x];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        return false;
    };

    //
    // Climb
    //
    _canClimbClock() {
        let x = Math.round(this.x / blockWitdh);
        let y = Math.round(this.y / blockHeight);

        if (this.anchor == this.TOP) {
            let solid = map.data[y - 1][x - 1];
            let empty = map.data[y - 1][x];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.DOWN) {
            let solid = map.data[y + 1][x + 1];
            let empty = map.data[y + 1][x];
            if ((empty) == 0 && (solid != 0)) {
                return true;
            }
        }
        if (this.anchor == this.RIGHT) {
            let solid = map.data[y - 1][x + 1];
            let empty = map.data[y][x + 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.LEFT) {
            let solid = map.data[y + 1][x - 1];
            let empty = map.data[y][x - 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        return false;
    }
    _canClimbCounter() {
        let x = Math.floor(this.x / blockWitdh);
        let y = Math.floor(this.y / blockHeight);

        if (this.anchor == this.TOP) {
            let empty = map.data[y - 1][x];
            let solid = map.data[y - 1][x + 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.DOWN) {
            let empty = map.data[y + 1][x];
            let solid = map.data[y + 1][x - 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.RIGHT) {
            let empty = map.data[y][x + 1];
            let solid = map.data[y + 1][x + 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.LEFT) {
            let empty = map.data[y][x - 1];
            let solid = map.data[y - 1][x - 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        return false;
    }

    //
    // Reverse
    //
    _reverseDirection() {
        console.log("_reverseDirection called!");
        if (this.direction == this.CLOCK) {
            this.direction = this.COUNTERCLOCK;
        } else {
            this.direction = this.CLOCK;
        }
    };

    //
    // Move
    //
    move(delta) {
        if (this.direction == this.CLOCK) {
            switch (this.anchor) {
                case (this.TOP):
                    if (this._canMoveStraightClock()) this.x += 1;
                    else if (this._canTurnClock()) this.anchor = this.RIGHT;
                    else if (this._canClimbClock()) this.anchor = this.LEFT;
                    else this._reverseDirection();
                    break;
                case (this.RIGHT):
                    if (this._canMoveStraightClock()) this.y += 1;
                    else if (this._canTurnClock()) this.anchor = this.DOWN;
                    else if (this._canClimbClock()) this.anchor = this.TOP;
                    else this._reverseDirection();
                    break;
                case (this.LEFT):
                    if (this._canMoveStraightClock()) this.y -= 1;
                    else if (this._canTurnClock()) this.anchor = this.TOP;
                    else if (this._canClimbClock()) this.anchor = this.DOWN;
                    else this._reverseDirection();
                    break;
                case (this.DOWN):
                    if (this._canMoveStraightClock()) this.x -= 1;
                    else if (this._canTurnClock()) this.anchor = this.LEFT;
                    else if (this._canClimbClock()) this.anchor = this.RIGHT;
                    else this._reverseDirection();
                    break;
                default:
                    break;
            }
        } else {
            switch (this.anchor) {
                case (this.TOP):
                    if (this._canMoveStraightCounter()) this.x -= 1;
                    else if (this._canTurnCounter()) this.anchor = this.LEFT;
                    else if (this._canClimbCounter()) this.anchor = this.RIGHT;
                    else this._reverseDirection();
                    break;
                case (this.RIGHT):
                    if (this._canMoveStraightCounter()) this.y -= 1;
                    else if (this._canTurnCounter()) this.anchor = this.TOP;
                    else if (this._canClimbCounter()) this.anchor = this.DOWN;
                    else this._reverseDirection();
                    break;
                case (this.LEFT):
                    if (this._canMoveStraightCounter()) this.y += 1;
                    else if (this._canTurnCounter()) this.anchor = this.DOWN;
                    else if (this._canClimbCounter()) this.anchor = this.TOP;
                    else this._reverseDirection();
                    break;
                case (this.DOWN):
                    if (this._canMoveStraightCounter()) this.x += 1;
                    else if (this._canTurnCounter()) this.anchor = this.RIGHT;
                    else if (this._canClimbCounter()) this.anchor = this.LEFT;
                    else this._reverseDirection();
                    break;
                default:
                    break;
            }
        };
    };
}