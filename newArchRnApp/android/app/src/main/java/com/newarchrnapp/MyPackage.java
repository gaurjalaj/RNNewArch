package com.newarchrnapp;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.List;

public class MyPackage implements ReactPackage {
    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new MyModule(reactContext));
        return modules;
    }

    @NonNull
    @Override
    public ArrayList<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
        return new ArrayList<com.facebook.react.uimanager.ViewManager>();
    }
}
