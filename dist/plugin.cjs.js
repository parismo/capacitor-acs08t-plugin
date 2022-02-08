'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const Rfid = core.registerPlugin('Rfid', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.RfidWeb()),
});

class RfidWeb extends core.WebPlugin {
    constructor() {
        super();
        document.addEventListener('onWiegandValue', this.onWiegandListener, false);
    }
    async greenLightOff() {
        return Promise.resolve();
    }
    async greenLightOn() {
        return Promise.resolve();
    }
    async redLightOff() {
        return Promise.resolve();
    }
    async redLightOn() {
        return Promise.resolve();
    }
    async whiteLightOff() {
        return Promise.resolve();
    }
    async whiteLightOn() {
        return Promise.resolve();
    }
    async turnWiegandOn() {
        return Promise.resolve();
    }
    async turnWiegandOff() {
        return Promise.resolve();
    }
    onWiegandListener(data) {
        this.notifyListeners('onWiegandValue', data);
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    RfidWeb: RfidWeb
});

exports.Rfid = Rfid;
//# sourceMappingURL=plugin.cjs.js.map
