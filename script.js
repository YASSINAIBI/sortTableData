function display(){
   var firstName = document.getElementById('firstname').value;
   var lastname = document.getElementById('lastName').value;
   var age = document.getElementById('age').value;
   var profession = document.getElementById('profession').value;

    var show = document.getElementById('show');
    show.innerHTML += "<tr>" +
                        "<thead>" +
                        "<td>" + firstName + "</td>" +
                        "<td>" + lastname + "</td>" +
                        "<td>" + age + "</td>" +
                        "<td>" + profession + "</td>" +
                        "</thead>" +
                      "</tr>"

    var array = [firstName];
    console.log(array);
}
