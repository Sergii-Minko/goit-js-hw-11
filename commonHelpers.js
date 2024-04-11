import{e as f}from"./assets/error-26406ed6.js";import{f as y,i as h}from"./assets/vendor-77e16229.js";const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAitJREFUWEe9lztvVDEUhGf+GYmgIRQggUhDKEDiUREKUpAorIACCqDiIUEBNCCQoEhoiIB/NsQr++rsufa99s1uXPo13xm/jinpEYB9AGsk/+EUiqQzAP4CmFHHBEZz5RBGfC4bABJN4lgZRFYrqJ4GREmDKexMh3Mkj5axJSSdBfA7t9QdQMGJDZK/TgIh6TyAw9I+WwCIEJ72EsmfUyAkXQTww4ztudoDiBCeepPk1xYISVcBfDFjsm5mASKEp98i+bkGQtI1AJ9M36KLRYAI4aO4SfLDEISkGwDemz6D7g0CRAgfzV2Sb3IQku4AeG3aRl0bBYgQPqptkq8shKR7AF6aulG35jdhzZpGCB/dDsnnse0BgGdmrqJLXq8aIAr5KPfihI/NxD13hoJsAihEa+fvXKl1thkgQuwCsFGH6j2ST2qFU7+pACmHsHozkqG+qTQDmAQmJ9QM0QRwnLyEzMlGOYsUoT6VJohqgJx4sjzjSjVEFcCQeAp7KsQoQI34SSDGHqPemo/t9FYnhp7jhwDsua5e1wzELsmnuWNTSki2AbyYurPjZeXvivsk7WM1nz6Xkt0C8NaIF+nHbhxJ3sXbJN/ZcT4p3QLw0XTIUo8J23ZJ3s3rJLtsyabllwF8M4N7tC3CDsK7eoXk924JJG0AODCDFiinCjsI7+4Fkofha7YG4I/p3NEtQ9hBeJfX/ed0TrVsYQex4HYASMdlnWT4Mq+8GNdn/wE5SR+dRCJW0AAAAABJRU5ErkJggg==",a=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),C=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),E=document.querySelector("[data-seconds]"),d=document.querySelectorAll(".value");let u=null;e.disabled=!0;e.classList.add("disabled");const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=Date.now()?(a.disabled=!0,e.disabled=!0,e.classList.remove("active"),e.classList.add("disabled"),h.show({message:"Please choose a date in the future",position:"topCenter",titleColor:"#fff",messageColor:"#fff",color:"#EF4040",iconUrl:f,class:"custom-close-button",onOpening:()=>{const s=document.querySelector(".iziToast-close");s.style.color="#fff",s.style.backgroundImage=`url('${g}')`,s.style.setProperty("opacity","1"),s.style.setProperty("fill","#fff"),s.style.setProperty("background-size","12px");const o=document.querySelector(".iziToast");o.style.setProperty("width","340px"),o.style.setProperty("height","64px"),o.style.setProperty("display","flex"),o.style.setProperty("align-items","center"),o.style.setProperty("justify-content","center")},onClosing:()=>{a.disabled=!1,e.disabled=!0,e.classList.remove("active"),e.classList.add("disabled")}})):(e.disabled=!1,e.classList.add("active"),e.classList.remove("disabled"))}};y(a,S);e.addEventListener("click",D);function D(){d.forEach(t=>t.classList.toggle("end")),a.disabled=!0,e.disabled=!0,e.classList.remove("active"),e.classList.add("disabled"),u=setInterval(()=>{const s=new Date(a.value)-Date.now(),{days:o,hours:l,minutes:c,seconds:r}=I(s);p.textContent=n(o),C.textContent=n(l),b.textContent=n(c),E.textContent=n(r),s<1e3&&(d.forEach(i=>i.classList.toggle("end")),clearInterval(u),a.disabled=!1)},1e3)}function I(t){const r=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),A=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:i,minutes:m,seconds:A}}function n(t){return`${t}`.padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map