const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.startBtn.addEventListener("click",(function(){t.startBtn.setAttribute("disabled",""),e=setInterval(n,1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.removeAttribute("disabled"),clearInterval(e)}));let e=null;function n(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}
//# sourceMappingURL=01-color-switcher.5a9b63a4.js.map
