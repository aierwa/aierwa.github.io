//首页在线列表
var list=[{"DeviceName":"apple","ip":"192.168.100.152","mac":"00:00:00:00:00:00"},{"DeviceName":"huawei","ip":"192.168.100.155","mac":"00:00:00:00:00:00"},{"DeviceName":"opo","ip":"192.168.100.154","mac":"00:00:00:00:00:00"}]
function TableOnline(){
    var dataItems = list;
    var i;
    var html = "";
    for (i = 0; i < list.length; i++) {
        html += "<tr>";
        html += '<td><div><input type="text" class="DeviceName"  value="'+list[i].DeviceName+'"/></div><div>'+list[i].ip+'</div><div>'+list[i].mac+'</div>' ;
        html += '<td width="21%"><input type="button" class="delete" id="btnTime' + i + '"   value="' + '时间调度' + '" />';
        html += '<td width="21%"><input type="button" class="delete" id="btnMac' + i + '" value="' + 'mac黑名单' + '" />';
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
                $("#DeviceName").html(data.DeviceName)
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




function int(){
  TableOnline()
}
$(document).ready(function(){
    int()
});
