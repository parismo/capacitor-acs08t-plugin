import { WebPlugin } from '@capacitor/core';

import type { RfidPlugin } from './definitions';

export class RfidWeb extends WebPlugin implements RfidPlugin {

    constructor() {
        super();
        document.addEventListener(
            'onWiegandValue',
            this.onWiegandListener,
            false
        );
    }


    async greenLightOff(): Promise<void> {
        return Promise.resolve();
    }

    async greenLightOn(): Promise<void> {
        return Promise.resolve();
    }

    async redLightOff(): Promise<void> {
        return Promise.resolve();
    }

    async redLightOn(): Promise<void> {
        return Promise.resolve();
    }

    async whiteLightOff(): Promise<void> {
        return Promise.resolve();
    }

    async whiteLightOn(): Promise<void> {
        return Promise.resolve();
    }

    async turnWiegandOn(): Promise<void> {
        return Promise.resolve();
    }

    async turnWiegandOff(): Promise<void> {
        return Promise.resolve();
    }

    private onWiegandListener( data: any ) {
        this.notifyListeners( 'onWiegandValue', data );
    }
}
