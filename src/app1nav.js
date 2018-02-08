    document.querySelector("#homeTab").addEventListener("click", homeTab);

    //TODO - this function not working
    document.querySelector("#linkTab").addEventListener("click", linkTab);

    function homeTab() {
        document.querySelector("#app2").classList.remove("d-none");
        document.querySelector("#app1").classList.add("d-none");
    }

    function linkTab(){
        document.querySelector("#app2").classList.add("d-none");
        document.querySelector("#app1").classList.remove("d-none");
    }
