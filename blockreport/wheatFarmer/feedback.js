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
database.ref('wheat-farmer').once('value', function(snapshot) {
        if (snapshot.exists()) {
          var content = '';
          snapshot.forEach(function(data) {
            var val = data.val();
            content += '<tr>';
            content += '<td>' + val.name + '</td>';
            content += '<td>' + val.father + '</td>';
			content += '<td>' + val.vill + '</td>';
            content += '<td>' + val.union + '</td>';
			content += '<td>' + val.nid + '</td>';
            content += '<td>' + val.phone + '</td>';
            content += '<td>' + val.land + '</td>';
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
// Reference nids collection
var nidsRef = firebase.database().ref('wheat-farmer');

var con = nidsRef.on('value', gotData, errData)

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var vill = getInputVal('vill');
    var father = getInputVal('father');
    var union = getInputVal('union');
    var phone = getInputVal('phone');
    var nid = getInputVal('nid');
    var land = getInputVal('land');

    // Save nid
    saveMessage(name, father, union, vill, land, phone, nid);

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

// Save nid to firebase
function saveMessage(name, father, union, vill, land, phone, nid) {
    var newMessageRef = nidsRef.push();
    newMessageRef.set({
        name: name,
        father: father,
        union: union,
        vill: vill,
        land: land,
        phone: phone,
		ans: "Please wait for answer!",
        nid: nid
    });

}
function gotData(data) {
    var union = data.val();
    var keys = Object.keys(union);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var initials = union[k].union;
        console.log(union[k].nid)
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