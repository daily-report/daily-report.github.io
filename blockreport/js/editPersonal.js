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
            document.getElementById("pfaddress").innerHTML = dataSnapShot.val().address;
            document.getElementById("pfbloodgroup").innerHTML = dataSnapShot.val().bloodgroup;
            document.getElementById("pfcadreid").innerHTML = dataSnapShot.val().cadreid;
            document.getElementById("pfdesignation").innerHTML = dataSnapShot.val().designation;
            document.getElementById("pfdistrict").innerHTML = dataSnapShot.val().district;
            document.getElementById("pfdivision").innerHTML = dataSnapShot.val().division;
            document.getElementById("pfdob").innerHTML = dataSnapShot.val().dob;
            document.getElementById("pfecontact").innerHTML = dataSnapShot.val().econtact;
            document.getElementById("pfemail").innerHTML = dataSnapShot.val().email;
            document.getElementById("pfname").innerHTML = dataSnapShot.val().name;
            document.getElementById("pfphone").innerHTML = dataSnapShot.val().phone;
            document.getElementById("pfupazila").innerHTML = dataSnapShot.val().upazila;
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
// xxxxxxxxxx Save profile and update database xxxxxxxxxx
function saveProfile(){
    let name = document.getElementById("name").value
    let cadreid = document.getElementById("cadreid").value
//    let cadre = document.getElementById("cadre").value
//    let office = document.getElementById("office").value
    let bloodgroup = document.getElementById("bloodgroup").value
    let designation = document.getElementById("designation").value
    let address = document.getElementById("address").value
    let phone = document.getElementById("phone").value
    let econtact = document.getElementById("econtact").value
    let upazila = document.getElementById("upazila").value
    let dob = document.getElementById("dob").value
    let email = document.getElementById("email").value
    let division = document.getElementById("division").value
    let district = document.getElementById("district").value
    var nameFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var checknameValid = name.match(nameFormate);
    if(checknameValid == null){
        return checkname();
    }else if(cadreid === ""){
        return checkcadreid();
    }else if(designation === ""){
        return checkdesignation();
    }else if(address === ""){
        return checkaddress();
    }else if(phone === ""){
        return checkphone();
    }else if(econtact === ""){
        return checkecontact();
    }else if(upazila === ""){
        return checkupazila();
    }else if(dob === ""){
        return checkdob();
    }else if(email === ""){
        return checkemail();
    }else if(bloodgroup === ""){
        return checkbloodgroup();
    }else if(division === ""){
        return checkdivision();
    }else if(district === ""){
        return checkdistrict();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('member');
        var userData = {
            name: name,
            cadreid: cadreid,
            //cadre: cadre,
            designation: designation,
            address: address,
            phone: phone,
            econtact: econtact,
            upazila: upazila,
            dob: dob,
            email: email,
			      //office: office,
			      bloodgroup: bloodgroup,
            division: division,
            district: district,

        }
        firebaseRef.child(uid).set(userData);
        swal({
            type: 'success',
            title: 'Successfully Updated',
            text: 'Profile has been successfully updated',
        }).then((value) => {
            setTimeout(function(){
                document.getElementById("profileSection").style.display = "block";
                document.getElementById("editProfileForm").style.display = "none";
            }, 1000)
        });
    }
}
// xxxxxxxxxx Working For Sign Out xxxxxxxxxx
function signOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        swal({
            type: 'success',
            title: 'Successfully Signed Out',
        }).then((value) => {
            setTimeout(function(){
                window.location.replace("../index.html");
            }, 1000)
        });
    }).catch(function(error) {
        // An error happened.
        let errorMessage = error.message;
        swal({
            type: 'error',
            title: 'Error',
            text: errorMessage,
        })
    });
}