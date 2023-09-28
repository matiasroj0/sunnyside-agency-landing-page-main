const nav = document.getElementById("mySideNav");

function toggleNav() {
    if(document.getElementById("mySidenav").style.width == "") {
        document.getElementById("mySidenav").style.width = "93%";
    } else {
        document.getElementById("mySidenav").style.width = ""
    }
}

