module.exports = {
    toast: content => {
        var _toasts = document.getElementsByClassName("toast");
        if (_toasts.length < 1) {
            var _div = document.createElement("div");
            var _span = document.createElement("span");
            _div.className = "toast clear";
            _span.className = "toolsIcon";
            var con = document.createElement("p");
            con.style.float = "left";
            con.style.paddingLeft = "0.93rem";
            con.innerHTML = content;
            _div.appendChild(_span);
            _div.appendChild(con);
            document.body.appendChild(_div);
            document.getElementsByClassName("toast")[0].style.left =
                document.body.clientWidth / 2 - document.getElementsByClassName("toast")[0].clientWidth / 2 + "px";
            setTimeout(() => {
                document.body.removeChild(_div);
            }, 1500);
        }
    }
};
