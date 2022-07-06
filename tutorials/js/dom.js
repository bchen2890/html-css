function sayHello() {
    var name = document.getElementById("name").value;
    var message = "Hello " + name + "!";
    document.getElementById("content").textContent = message;
    document.getElementById("content-html").innerHTML = "<h2>"+ message +"</h2>";
    document.querySelector("#query-content").innerHTML = "<h3>" + message + "</h3>";

}

