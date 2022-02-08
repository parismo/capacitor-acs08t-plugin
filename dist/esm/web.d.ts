import { WebPlugin } from '@capacitor/core';
import type { RfidPlugin } from './definitions';
export declare class RfidWeb extends WebPlugin implements RfidPlugin {
    constructor();
    greenLightOff(): Promise<void>;
    greenLightOn(): Promise<void>;
    redLightOff(): Promise<void>;
    redLightOn(): Promise<void>;
    whiteLightOff(): Promise<void>;
    whiteLightOn(): Promise<void>;
    turnWiegandOn(): Promise<void>;
    turnWiegandOff(): Promise<void>;
    private onWiegandListener;
}
