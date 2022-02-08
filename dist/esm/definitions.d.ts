import type { PluginListenerHandle } from '@capacitor/core';
export declare type WiegandListener = (event: any) => void;
export interface RfidPlugin {
    greenLightOn(): Promise<void>;
    greenLightOff(): Promise<void>;
    redLightOn(): Promise<void>;
    redLightOff(): Promise<void>;
    whiteLightOn(): Promise<void>;
    whiteLightOff(): Promise<void>;
    turnWiegandOn(): Promise<void>;
    turnWiegandOff(): Promise<void>;
    addListener(eventName: 'onWiegandValue', listenerFunc: WiegandListener): Promise<PluginListenerHandle> & PluginListenerHandle;
}
