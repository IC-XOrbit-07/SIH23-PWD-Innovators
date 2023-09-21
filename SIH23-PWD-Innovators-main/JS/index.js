window.addEventListener("load", (event) => {
    var hash = window.location.hash;
    if(hash.length > 1){
        load_content(encodeURI(hash.substring(1)));
    }
    else {
        load_content("profileCard");
    }
});

function load_content(page_name){
    page_name = encodeURI(page_name).replace("#", "");

    let elem = document.getElementById(page_name + "_anchor");
    const container = document.getElementById("right_container");
    var inHTML = "PGRpdiBjbGFzcz0iY2FyZCI+CiAgICAgICAgPGltZyBzcmM9Ii4uL0ltYWdlcy91c2VyX2xvZ28uanBnIiBhbHQ9IkF2YXRhciIgc3R5bGU9IndpZHRoOjEwMCU7IGhlaWdodDogMjAwcHg7Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJjb250YWluZXIiPgogICAgICAgICAgPGg0IHN0eWxlPSJmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7Ij48Yj5EaXNhYmxlLlBlcnNvbi5OYW1lLkVudHJ5PC9iPjwvaDQ+PGJyPgogICAgICAgICAgPHAgc3R5bGU9ImZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjsiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9yZW1xdWUgcG9zc2ltdXMgb2RpbyBjdWxwYSBmdWdpYXQgaWxsdW0uIFF1b3MgY29tbW9kaSBhZCBzYXBpZW50ZSBlc3QgbWF4aW1lIHNpdCB2ZWxpdCBjb25zZWN0ZXR1ciBxdWFzLCBpbiBpbGx1bSBleGVyY2l0YXRpb25lbS48L3A+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2Pg==";

    if(JSON.stringify(elem) != "null" && elem.nodeName.toLowerCase() == "a"){
        console.log("Page Name (to load) : " + page_name);

        if(page_name == "status"){
            inHTML = "PGgyPlN0YXR1cyBQYWdlPC9oMj4=";
        } else if(page_name == "resume") {
            inHTML = "PGRpdiBpZD0icmVzdW1lX2Jsb2NrIj4KICAgICAgICAgICAgPGgxPlJlc3VtZSBCdWlsZGVyIExpbmtzPC9oMT4KICAgICAgICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICAgICAgICAgIDxhIGhyZWY9Imh0dHBzOi8vd3d3LnJlc3VtZS5jb20vIiB0YXJnZXQ9Il9ibGFuayI+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2x1bW4iPgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImNhcmQiPgogICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0iLi4vLi4vSW1hZ2VzL3Jlc3VtZV9jYXJkXzIuanBnIiBzdHlsZT0id2lkdGg6MTAwJSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5yZXN1bWUuY29tPC9oMj4KICAgICAgICAgICAgICAgICAgICAgICAgPHA+KCBCdWlsZCBhIHByb2Zlc3Npb25hbCByZXN1bWUgZm9yIGZyZWUgKTwvcD4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgIDxhIGhyZWY9Imh0dHBzOi8vd3d3LnJlc3VtZWJ1aWxkZXIuY29tLyIgdGFyZ2V0PSJfYmxhbmsiPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sdW1uIj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjYXJkIj4KICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSIuLi8uLi9JbWFnZXMvcmVzdW1lX2NhcmRfMy5qcGciIHN0eWxlPSJ3aWR0aDoxMDAlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnJlc3VtZWJ1aWxkZXIuY29tPC9oMj4KICAgICAgICAgICAgICAgICAgICAgICAgPHA+KCBUaGUgQmVzdCBPbmxpbmUgUmVzdW1lIEJ1aWxkZXIgKTwvcD4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICA8YSBocmVmPSJodHRwczovL25vdm9yZXN1bWUuY29tLyIgdGFyZ2V0PSJfYmxhbmsiPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sdW1uIj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjYXJkIj4KICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSIuLi8uLi9JbWFnZXMvcmVzdW1lX2NhcmRfNC5qcGciIHN0eWxlPSJ3aWR0aDoxMDAlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGgyPm5vdm9yZXN1bWUuY29tPC9oMj4KICAgICAgICAgICAgICAgICAgICAgICAgPHA+KCBCdWlsZCB5b3VyIGJyYW5kLW5ldyByZXN1bWUgaW4gYXMgbGl0dGxlIGFzIDUgbWludXRlcy4gKTwvcD4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4=";
        } else if(page_name != "profileCard") {
            inHTML = btoa("<h2> " + elem.innerText + " </h2>");
        }
    } else {
        elem = document.getElementById("profileCard_anchor");
    }

    container.innerHTML = atob(inHTML);

    var nodes = document.getElementById('div_dashboard').childNodes;
    for(var i=0; i<nodes.length; i++) {
        if (nodes[i].nodeName.toLowerCase() == 'a') {
            nodes[i].style.color = "black";
            nodes[i].style.backgroundColor = "";
        }
    }
    elem.style.backgroundColor = "#e0f3ff";
    elem.style.color = "#3f6ad8";

}