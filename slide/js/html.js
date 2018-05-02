var setWifiSSID2=false;
var setPassword2=false;
var setWifiSSID5=false;
var setPassword5=false;
//首页在线列表
var list=[{"DeviceName":"XX的小米5","ip":"192.168.100.152","mac":"00:00:00:00:00:00"},{"DeviceName":"泡泡同学的iPhone","ip":"192.168.100.155","mac":"00:00:00:00:00:00"},{"DeviceName":"HuaWei","ip":"192.168.100.154","mac":"00:00:00:00:00:00"}]
function TableOnline(){
    var dataItems = list;
    var i;
    var html = "";
    for (i = 0; i < list.length; i++) {
        html += '<tr id="btnTime' + i + '" >';
        html += '<td width="24%"><div><img src="images/tu_zhongduan_on.png" class="tableImg"></div>' ;
        html += '<td><div><span class="SpanDeviceName">'+list[i].DeviceName+'</span></div>' ;
        html += "</tr>"
    }
    $("#port_table").empty();
    $("#port_table").append(html);
    SetTimeEvent(dataItems);
    SetMacEvent(dataItems);
    return html;
}
//时间调度
function SetTimeEvent(dataItems){
    for(var i = 0; i < dataItems.length;i++){
        var data = dataItems[i];
        $("#btnTime" + i).unbind("click").bind("click",function(data){
            return function(){
                $("#bigBackground").css({display: "block"});
                $("#ConfigurationBox").css({display: "block"});
                $("#DeviceName").val(data.DeviceName)
            }
        }(data));
    }
}

//mac黑名单
function SetMacEvent(dataItems){
    for(var i = 0; i < dataItems.length;i++){
        var data = dataItems[i];
        $("#btnMac" + i).unbind("click").bind("click",function(data){
            return function(){
                var cmd = [];
                alert(data.DeviceName)
            }
        }(data));
    }
}

//页面数据获取
function GetInfo(){
    var device = new GS.Device();
    device.setOnPostListener(function(data){
        alert(data);
        GetResult(data);
    });
}

//页面赋值
function GetResult(data){
    var JSONInfo=JSON.parse(data);
    var wifiName_2 = JSONInfo.as["3005"];  //  a.as[3006]
    var password_2 = JSONInfo.as["3006"];  //  a.as[3006]
    $("#wifiName_2").val(wifiName_2);
    $("#password_2").val(password_2);
}

//设置wifi
function SetWifi2(){
    var result=verifyWifiSet();
    if(result){
        var device = new GS.Device();
        var wifiName_2= $("#wifiName_2").val();
        var password_2= $("#password_2").val();
        device.opt(['3005',"3006"],[wifiName_2,password_2]);  //6362
    }
}
//验证2.4gwifi名
function setwifiName24(){
    var wifi2GNameValue=$("#wifiName_2").val();
    var result2GSSID=verifySSID(wifi2GNameValue);//验证2.4G SSID
    var VisitorName_2=$("#VisitorName_2").val();
    var VisitorName_5=$("#VisitorName_5").val();
    var statue=false;
    if(true){
        switch(result2GSSID){
            case ERR_SSID_NULL:
                showErr("error_11","errinfoid_1","space_1","请输入2.4G无线名称");
//                $("#error_1").html("请输入2.4G无线名称");
                statue=true;
                setWifiSSID2=true;
                $("#wifiName_24").focus();
                return false;
            case ERR_SSID_SPACE:
                showErr("error_1","errorinfo_1",I18N("j","Err_Wireless_Name2GSpace"));
                statue=true;
                setWifiSSID2=true;
                $("#wifiName_24").focus();
                return false;
            case ERR_SSID_IVALID:
                showErr("error_1","errorinfo_1",I18N("j","Err_Wireless_Name2GInvalid"));
                statue=true;
                setWifiSSID2=true;
                $("#wifiName_24").focus();
                return false;
            case ERR_SSID_LEN:
                showErr("error_1","errorinfo_1",I18N("j","Err_Wireless_Name2GLength"));
                statue=true;
                setWifiSSID2=true;
                $("#wifiName_2").focus();
                return false;
            default:
                if(VisitorName_2 == wifi2GNameValue || VisitorName_5 == wifi2GNameValue){
                    showErr("error_1","errorinfo_1",I18N("j","Err_Wireless_Name2GSameGuest"));
                    statue=true;
                    setWifiSSID2=true;
                    $("#wifiName_2").focus();
                    return false;
                    return false;
                }
                break;
        }
        if(statue==false){
            setWifiSSID2=false;
            OffErr("error_1","errorinfo_1");
        }
    }

}

//验证用户Wifi
function verifyWifiSet(){
    if(setWifiSSID2==true){
        $("#wifiName_24").focus();
        return false;
    }
    if(keyStatue2==1){  //2.4g隐藏密码（默认）
        if(setPassword22==true){
            setPassword21=true
        }
        if(setPassword21==true){
            $("#password1_24").focus();
            $("#div_password1_24").removeClass().addClass("text_eye_divfocus");
            return false;
        }else{
            $("#div_password1_24").removeClass().addClass("text_eye_div");
        }
    }else{   //显示密码
        if(setPassword21==true){
            setPassword22=true
        }
        if(setPassword22==true){
            $("#password2_24").focus();
            $("#div_password2_24").removeClass().addClass("text_eye_divfocus");
            return false;
        }else{
            $("#div_password2_24").removeClass().addClass("text_eye_div");
        }
    }

    if(setWifiSSID5==true){
        $("#wifiName_5").focus();
        return false;
    }

    if(keyStatue5==1){  //5g隐藏密码（默认）
        if(setPassword52==true){
            setPassword51=true
        }
        if(setPassword51==true){
            $("#password1_5").focus();
            $("#div_password1_5").removeClass().addClass("text_eye_divfocus");
            return false;
        }else{
            $("#div_password1_5").removeClass().addClass("text_eye_div");
        }
    }else{   //显示密码
        if(setPassword51==true){
            setPassword52=true
        }
        if(setPassword52==true){
            $("#password2_5").focus();
            $("#div_password2_5").removeClass().addClass("text_eye_divfocus");
            return false;
        }else{
            $("#div_password2_5").removeClass().addClass("text_eye_div");
        }
    }
    return true;
}

function int(){
  TableOnline()
}
$(document).ready(function(){
    //页面数据获取
//     GetInfo();
    int();

});
