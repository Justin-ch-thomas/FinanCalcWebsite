﻿"use strict";

function isFloat(str) {
    for (var i in str) {
        var chr = str[i]
        if (isNaN(parseInt(chr)) && chr !== '.') {
            return false;
        }
    }

    return true;
}

function $calculate() {
    if (!isFloat($("#GrossProfit")[0].value) ||
        !isFloat($("#NetSales")[0].value) ) {
        

        $("#result").html("Bad argument(s)");
        return;
    }

    var GrossProfit = parseFloat($("#GrossProfit")[0].value);
    var NetSales = parseFloat($("#NetSales")[0].value);
    

    var earningsPerShare = (GrossProfit / NetSales) * 100 ;
    $("#result").html(earningsPerShare);

    recordUsage();
}

function recordUsage() {
    $.post("/LogUsage", { calculator: "GrossProfitMarginCalculator" });
}

function $isValidFloat(id) {
    if (!isFloat($(id)[0].value)) {
        $(id).css("color", "Red");
    } else {
        $(id).css("color", "Black");
    }
}