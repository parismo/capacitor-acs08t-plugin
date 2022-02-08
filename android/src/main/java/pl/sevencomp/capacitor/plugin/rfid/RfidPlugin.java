package pl.sevencomp.capacitor.plugin.rfid;

import android.app.smdt.SmdtManager;
import android.content.Context;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Rfid")
public class RfidPlugin extends Plugin {

    private SmdtManager smdtManager;
    private Thread wiegandThread;

    public void load() {
        Context context = getContext();
        smdtManager = SmdtManager.create(context);
    }

    @PluginMethod
    public void greenLightOn(PluginCall call) {
        smdtManager.smdtSetGpioDirection(4, 1, 1);
        call.resolve();
    }

    @PluginMethod
    public void greenLightOff(PluginCall call) {
        smdtManager.smdtSetGpioDirection(4, 1, 0);
        call.resolve();
    }

    @PluginMethod
    public void redLightOn(PluginCall call) {
        smdtManager.smdtSetUsbPower(1, 3, 1);
        call.resolve();
    }

    @PluginMethod
    public void redLightOff(PluginCall call) {
        smdtManager.smdtSetUsbPower(1, 3, 0);
        call.resolve();
    }

    @PluginMethod
    public void whiteLightOn(PluginCall call) {
        smdtManager.smdtSetControl(3, 1);
        call.resolve();
    }

    @PluginMethod
    public void whiteLightOff(PluginCall call) {
        smdtManager.smdtSetControl(3, 0);
        call.resolve();
    }

    @PluginMethod
    public void turnWiegandOn(PluginCall call) {
        wiegandThread = new WiegandThread();
        wiegandThread.start();
        call.resolve();
    }

    @PluginMethod
    public void turnWiegandOff(PluginCall call) {
        wiegandThread.interrupt();
        call.resolve();
    }

    protected class WiegandThread extends Thread {

        @Override
        public void run() {

            while (!isInterrupted()) {

                final String code = smdtManager.smdtReadWiegandData();

                if (code == null || code.equals("")) {
                    continue;
                }

                JSObject ret = new JSObject();
                ret.put("code", code);
                notifyListeners("onWiegandValue", ret);

            }

        }
    }
}
