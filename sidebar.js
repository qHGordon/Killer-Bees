function menuFunc() {
    var body = document.body;
    if (body.classList.contains("menuOpen")){
        body.classList.remove("menuOpen");
    }else{
        body.classList.add("menuOpen")
    }
}