/**
 * Created by Jonathan on 9/15/2017.
 */
//global variable declaration
var span = document.getElementsByClassName('close')[0];

//functions
function name() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}
function namecharacter() {
    document.getElementById('name').innerHTML = document.getElementById('charaname').value;
    close()
}
function close() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}