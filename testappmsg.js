"use strict";

const box = document.getElementById("msgbox");
const input = document.getElementById("input");
const sendBtn = document.getElementById("btn");

function sendMsg(e) {
    e.preventDefault()      // is nal refresh rukh javega, jado form nal refesh hunda hai
    const msgdiv = document.createElement("div");
    msgdiv.classList = "msgdiv";
    msgdiv.innerText = input.value;
    box.append(msgdiv);
    msgdiv.style.background=input.value
    input.value=""
}

sendBtn.onclick = sendMsg;
