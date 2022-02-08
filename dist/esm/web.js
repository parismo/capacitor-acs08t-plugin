import { WebPlugin } from '@capacitor/core';
export class RfidWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map