const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d=null;e.disabled=!0,t.addEventListener("click",(()=>{e.disabled=!1,t.disabled=!0,d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.32c9524e.js.map