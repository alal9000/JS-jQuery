//construct new instance of the date object holding the current date and time and store in varible "today"
var today = new Date();
//create new varible year which has the value of the current year
var year = today.getFullYear();

//access the element which has the id of footer and write the value of varible 'year' into page
var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';