package com.ctrujial.proyectocs5;

import android.util.Log;

import com.huawei.hms.push.HmsMessageService;

public class myProjectHuaweiPushService extends HmsMessageService {
    @Override
    public void onNewToken(String token) {
        super.onNewToken(token);
        Log.e("ctrujial123", "Nuevo token: " + token);
    }
}
