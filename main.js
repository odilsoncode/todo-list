(()=>{const e=document.getElementById("showDialog"),t=document.getElementById("favDialog"),u=document.querySelector("output"),l=document.querySelector("select"),n=document.querySelector("#confirmBtn");console.log(e),l.addEventListener("change",(e=>{n.value=l.value})),t.addEventListener("close",(e=>{u.value="default"===t.returnValue?"No return value.":`ReturnValue: ${t.returnValue}.`})),n.addEventListener("click",(e=>{e.preventDefault(),t.close(l.value)}))})();
//# sourceMappingURL=main.js.map