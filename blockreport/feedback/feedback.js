var config = {
    		apiKey: "AIzaSyDYc9XFwVqKzbVFl6qp-65_2btGGA5c2Bw",
		authDomain: "blockreport-fc82c.firebaseapp.com",
		databaseURL: "https://blockreport-fc82c-default-rtdb.firebaseio.com",
		projectId: "blockreport-fc82c",
		storageBucket: "blockreport-fc82c.appspot.com",
		messagingSenderId: "745182379010",
		appId: "1:745182379010:web:75230cc51c69417bf07b1b",
		measurementId: "G-TZT2J6LBGS"
};
    firebase.initializeApp(config);
    var database = firebase.database();
// Initialize Firebase (ADD YOUR OWN DATA)
database.ref('qus-ans').once('value', function(snapshot) {
        if (snapshot.exists()) {
          var content = '';
          snapshot.forEach(function(data) {
            var val = data.val();
            content += '<tr>';
            content += '<td>' + val.name + '</td>';
            content += '<td>' + val.company + '</td>';
            content += '<td>' + val.message + '</td>';
            content += '<td>' + 'Hi ' + val.name + ',' + ' '+  val.ans + '</td>';
            content += '</tr>';
          });
          $('#myTable').append(content);
        }
      });
	  
	 function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
// Reference messages collection
var messagesRef = firebase.database().ref('qus-ans');

var con = messagesRef.on('value', gotData, errData)

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
		ans: "Please wait for answer!",
        message: message
    });

}
function gotData(data) {
    var email = data.val();
    var keys = Object.keys(email);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var initials = email[k].email;
        console.log(email[k].message)
    }
}
function errData(errData) {
    console.log(errData)
} 


// loader javascript

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
