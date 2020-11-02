myFunction = function() {
    var first = document.getElementById("firstname").value;
    var second = document.getElementById("lastname").value;
    var btn = document.querySelector('#btn').value;

    document.getElementById("here").innerHTML = btn+" "+first+" "+second;
}