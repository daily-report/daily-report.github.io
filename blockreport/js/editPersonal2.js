// xxxxxxxxxx Working For Profile Page xxxxxxxxxx
// xxxxxxxxxx Get data from server and show in the page xxxxxxxxxx
firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
    //   User is signed in.
        let user = firebase.auth().currentUser;
        let uid
        if(user != null){
            uid = user.uid;
        }
        let firebaseRefKey = firebase.database().ref().child('member').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
            document.getElementById("pfname").innerHTML = dataSnapShot.val().name;
            // email = dataSnapShot.val().email;
            // password = dataSnapShot.val().password;
        })
    } else {
    //   No user is signed in.
    }
});
// xxxxxxxxxx Show edit profile form with detail xxxxxxxxxx
function showEditProfileForm(){
    document.getElementById("profileSection").style.display = "none"
    document.getElementById("editProfileForm").style.display = "block"
    var pfname = document.getElementById("pfname").innerHTML;
    var pfbloodgroup = document.getElementById("pfbloodgroup").innerHTML;
    var pfcadreid = document.getElementById("pfcadreid").innerHTML;
    var pfemail = document.getElementById("pfemail").innerHTML;
    var pfdesignation = document.getElementById("pfdesignation").innerHTML;
    var pfaddress = document.getElementById("pfaddress").innerHTML;
    var pfphone = document.getElementById("pfphone").innerHTML;
    var pfecontact = document.getElementById("pfecontact").innerHTML;
    var pfupazila = document.getElementById("pfupazila").innerHTML;
    var pfdob = document.getElementById("pfdob").innerHTML;
    var pfdivision = document.getElementById("pfdivision").innerHTML;
    var pfdistrict = document.getElementById("pfdistrict").innerHTML;
    document.getElementById("name").value = pfname;
    document.getElementById("bloodgroup").value = pfbloodgroup;
    document.getElementById("cadreid").value = pfcadreid;
    document.getElementById("email").value = pfemail;
    document.getElementById("designation").value = pfdesignation;
    document.getElementById("address").value = pfaddress;
    document.getElementById("phone").value = pfphone;
    document.getElementById("econtact").value = pfecontact;
    document.getElementById("upazila").value = pfupazila;
    document.getElementById("dob").value = pfdob;
    document.getElementById("district").value = pfdistrict;
    document.getElementById("division").value = pfdivision;
}
// xxxxxxxxxx Hide edit profile form xxxxxxxxxx
function hideEditProfileForm(){
    document.getElementById("profileSection").style.display = "block";
    document.getElementById("editProfileForm").style.display = "none";
}