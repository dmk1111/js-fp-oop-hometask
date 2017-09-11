const auto = function(speed = 60) {

    const me = {};
    let _speed = speed;
    let engineOn = false;

    publicAPI();

    function publicAPI(){
        me.type = "sedan";
        me.getSpeed = function () {
            return _speed;
        };
        me.setSpeed = function (value) {
            _speed = value;
        };
        me.pressKlaxon = function () {
            return "Beep!";
        };
        me.isEngineOn = function () {
          return engineOn;
        };
        me.turnEngineOn = function () {
            if (me.isEngineOn()) {
                return "Engine is already on!";
            } else {
                engineOn = !engineOn;
                return "You can drive now!";
            }
        };
        me.turnEngineOff = function () {
            if (!me.isEngineOn()) {
                return "Engine is already off!";
            } else {
                engineOn = !engineOn;
                return "Engine is turned off now.";
            }
        };

    }

    return me;
};

const cabriolet = function(speed = 80, roofCollapsed = true ) {

    const me = auto(speed);
    let _roofCollapsed = roofCollapsed,
    superSetSpeed = me.setSpeed;

    publicAPI();

    function publicAPI(){
        me.type = "cabriolet";
        me.pressKlaxon = function () {
            return "Beep-Beep!";
        };
        me.collapseRoof = function () {
            if (_roofCollapsed) {
                return "Roof is already collapsed!";
            } else {
                _roofCollapsed = !_roofCollapsed;
                return "Collapsing roof...Done!";
            }
        };
        me.raiseRoof = function () {
            if (!_roofCollapsed) {
                return "Roof is already raised!";
            } else {
                _roofCollapsed = !_roofCollapsed;
                return "Raising roof....Done!";
            }
        };
        me.setSpeed = function (value) {
            superSetSpeed(value);
            return `Speed was set to ${value}`;
        }
    }

    return me;
};

let car1 = auto();
let car2 = cabriolet();

console.log(car1);
console.log(car2);
console.log(`${car1.type} speed is ${car1.getSpeed()} and engine is ${car1.isEngineOn() ? "on" : "off"}`);
console.log(`${car2.type} speed is ${car2.getSpeed()} and engine is ${car2.isEngineOn() ? "on" : "off"}`);
console.log(car1.setSpeed(70));
console.log(car1.getSpeed());
console.log(car2.setSpeed(90));
console.log(car2.getSpeed());
console.log(car1.turnEngineOn());
console.log(car1.turnEngineOn());
console.log(`${car1.type} speed is ${car1.getSpeed()} and engine is ${car1.isEngineOn() ? "on" : "off"}`);
console.log(car1.turnEngineOff());
console.log(car2.turnEngineOn());
console.log(`${car2.type} speed is ${car2.getSpeed()} and engine is ${car2.isEngineOn() ? "on" : "off"}`);
console.log(car2.turnEngineOff());
console.log(car2.turnEngineOff());
console.log(car2.collapseRoof());
console.log(car2.raiseRoof());
console.log(car2.collapseRoof());
console.log(car1.pressKlaxon());
console.log(car2.pressKlaxon());