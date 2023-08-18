package com.newarchrnapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.Promise;

public class MyModule extends ReactContextBaseJavaModule {

    public MyModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @Override
    public String getName() {
        return "MyModule";
    }

    @ReactMethod
    public void askJava(Promise promise) {
        promise.resolve("Yes, How can I help you.".toString());
    }

}
