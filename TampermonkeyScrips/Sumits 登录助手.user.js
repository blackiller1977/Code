// ==UserScript==
// @name         Sumits 登录助手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  更正网页登录时ID填写位置不正确的问题
// @author       SPK_QiangYing
// @match        http://172.31.9.113/sumits/event
// @icon         https://www.google.com/s2/favicons?sz=64&domain=9.113
// @grant        none
// ==/UserScript==


if(!document.querySelector("#btn_signin")){
//没有找到表示登录了,不再执行后续代码
//    alert("Not at page");
    return;
}
//未登录,执行登录代码
//alert("At page");
let btn = document.createElement("button");
btn.innerHTML="Q登录";
btn.onclick=function(){
    if (document.querySelector("#USERCODE").value==""){
        document.querySelector("#USERCODE").value=document.querySelector("#USERMAIL").value
        document.querySelector("#USERMAIL").value=""
    }

    document.querySelector("#btn_signin").click();
}

//document.querySelector("#BLOCK_SIGN").appendChild(btn);
//alert("Done!");

document.querySelector("#SIGN > tbody > tr > td").appendChild(btn);