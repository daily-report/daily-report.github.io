
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
        let firebaseRefKey = firebase.database().ref().child('aman').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfamantillering").innerHTML = dataSnapShot.val().amantillering;
			document.getElementById("pfamanrecovery").innerHTML = dataSnapShot.val().amanrecovery;
			document.getElementById("pfamantotal").innerHTML = dataSnapShot.val().amantotal;
            document.getElementById("pfamaninbrid").innerHTML = dataSnapShot.val().amaninbrid;
			document.getElementById("pfamanhybrid").innerHTML = dataSnapShot.val().amanhybrid;
            document.getElementById("pfamanlocal").innerHTML = dataSnapShot.val().amanlocal;
            document.getElementById("pfamanpi").innerHTML = dataSnapShot.val().amanpi;
            document.getElementById("pfamanbooting").innerHTML = dataSnapShot.val().amanbooting;
            document.getElementById("pfamanflowering").innerHTML = dataSnapShot.val().amanflowering;
            document.getElementById("pfamanmilking").innerHTML = dataSnapShot.val().amanmilking;
            document.getElementById("pfamandough").innerHTML = dataSnapShot.val().amandough;
            document.getElementById("pfamanripening").innerHTML = dataSnapShot.val().amanripening;
            document.getElementById("pfamanharvest").innerHTML = dataSnapShot.val().amanharvest;
            document.getElementById("pfamantotlapercent").innerHTML = dataSnapShot.val().amantotlapercent;
			document.getElementById("pfdivision").innerHTML = dataSnapShot.val().division;
			document.getElementById("pfdistrict").innerHTML = dataSnapShot.val().district;
            document.getElementById("pfupazila").innerHTML = dataSnapShot.val().upazila;				
			document.getElementById("pfamansbtotal").innerHTML = dataSnapShot.val().amansbtotal;
            document.getElementById("pfamansbinbrid").innerHTML = dataSnapShot.val().amansbinbrid;
			document.getElementById("pfamansbhybrid").innerHTML = dataSnapShot.val().amansbhybrid;
            document.getElementById("pfamansblocal").innerHTML = dataSnapShot.val().amansblocal;				
			document.getElementById("pfamansbtypetotal").innerHTML = dataSnapShot.val().amansbtypetotal;
            document.getElementById("pfamansbtypeinbrid").innerHTML = dataSnapShot.val().amansbtypeinbrid;
			document.getElementById("pfamansbtypehybrid").innerHTML = dataSnapShot.val().amansbtypehybrid;
            document.getElementById("pfamansbtypelocal").innerHTML = dataSnapShot.val().amansbtypelocal;
			
			

        })
    } else {
    //   No user is signed in.
    }
});
// xxxxxxxxxx Show edit profile form with detail xxxxxxxxxx
function showEditProfileForm(){
    document.getElementById("profileSection").style.display = "none"
    document.getElementById("editProfileForm").style.display = "block"
    var pfblockname = document.getElementById("pfblockname").innerHTML;
	var pfunion = document.getElementById("pfunion").innerHTML;
    var pflastupdate = document.getElementById("pflastupdate").innerHTML;
    var pfamanrecovery = document.getElementById("pfamanrecovery").innerHTML;
	var pfamantotal = document.getElementById("pfamantotal").innerHTML;
    var pfamantillering = document.getElementById("pfamantillering").innerHTML;
    var pfamaninbrid = document.getElementById("pfamaninbrid").innerHTML;
	var pfamanhybrid = document.getElementById("pfamanhybrid").innerHTML;
    var pfamanlocal = document.getElementById("pfamanlocal").innerHTML;
    var pfamanpi = document.getElementById("pfamanpi").innerHTML;
    var pfamanbooting = document.getElementById("pfamanbooting").innerHTML;
    var pfamanflowering = document.getElementById("pfamanflowering").innerHTML;
    var pfamanmilking = document.getElementById("pfamanmilking").innerHTML;
    var pfamandough = document.getElementById("pfamandough").innerHTML;
    var pfamanripening = document.getElementById("pfamanripening").innerHTML;
    var pfamanharvest = document.getElementById("pfamanharvest").innerHTML;
    var pfamantotlapercent = document.getElementById("pfamantotlapercent").innerHTML;
    var pfupazila = document.getElementById("pfupazila").innerHTML;
    var pfdistrict = document.getElementById("pfdistrict").innerHTML;
    var pfdivision = document.getElementById("pfdivision").innerHTML;		
	var pfamansbtotal = document.getElementById("pfamansbtotal").innerHTML;
    var pfamansbinbrid = document.getElementById("pfamansbinbrid").innerHTML;
	var pfamansbhybrid = document.getElementById("pfamansbhybrid").innerHTML;
    var pfamansblocal = document.getElementById("pfamansblocal").innerHTML;		
	var pfamansbtypetotal = document.getElementById("pfamansbtypetotal").innerHTML;
    var pfamansbtypeinbrid = document.getElementById("pfamansbtypeinbrid").innerHTML;
	var pfamansbtypehybrid = document.getElementById("pfamansbtypehybrid").innerHTML;
    var pfamansbtypelocal = document.getElementById("pfamansbtypelocal").innerHTML;
	
	

    document.getElementById("blockname").value = pfblockname;
    document.getElementById("union").value = pfunion;
    document.getElementById("amanrecovery").value = pfamanrecovery;
	document.getElementById("amantotal").value = pfamantotal;
    document.getElementById("amantillering").value = pfamantillering;
    document.getElementById("amaninbrid").value = pfamaninbrid;
	document.getElementById("amanhybrid").value = pfamanhybrid;
    document.getElementById("amanlocal").value = pfamanlocal;
    document.getElementById("amanpi").value = pfamanpi;
    document.getElementById("amanbooting").value = pfamanbooting;
    document.getElementById("amanflowering").value = pfamanflowering;
    document.getElementById("amanmilking").value = pfamanmilking;
    document.getElementById("amandough").value = pfamandough;
    document.getElementById("amanripening").value = pfamanripening;
    document.getElementById("amanharvest").value = pfamanharvest;
    document.getElementById("amantotlapercent").value = pfamantotlapercent;
    document.getElementById("upazila").value = pfupazila; 
    document.getElementById("district").value = pfdistrict; 
    document.getElementById("division").value = pfdivision;  
	document.getElementById("amansbtotal").value = pfamansbtotal;
    document.getElementById("amansbinbrid").value = pfamansbinbrid;
	document.getElementById("amansbhybrid").value = pfamansbhybrid;
    document.getElementById("amansblocal").value = pfamansblocal;
	document.getElementById("amansbtypetotal").value = pfamansbtypetotal;
    document.getElementById("amansbtypeinbrid").value = pfamansbtypeinbrid;
	document.getElementById("amansbtypehybrid").value = pfamansbtypehybrid;
    document.getElementById("amansbtypelocal").value = pfamansbtypelocal;
	
	
}
// xxxxxxxxxx Hide edit profile form xxxxxxxxxx
function hideEditProfileForm(){
    document.getElementById("profileSection").style.display = "block";
    document.getElementById("editProfileForm").style.display = "none";
}
// xxxxxxxxxx Save profile and update database xxxxxxxxxx
function saveProfile(){
    let blockname = document.getElementById("blockname").value
    let union = document.getElementById("union").value
    let lastupdate = document.getElementById("lastupdate").value
    let amanrecovery = document.getElementById("amanrecovery").value
	let amantotal = document.getElementById("amantotal").value
    let amantillering = document.getElementById("amantillering").value
    let amaninbrid = document.getElementById("amaninbrid").value
	let amanhybrid = document.getElementById("amanhybrid").value
    let amanlocal = document.getElementById("amanlocal").value
    let amanpi = document.getElementById("amanpi").value
    let amanbooting = document.getElementById("amanbooting").value
    let amanflowering = document.getElementById("amanflowering").value
    let amanmilking = document.getElementById("amanmilking").value
    let amandough = document.getElementById("amandough").value
    let amanripening = document.getElementById("amanripening").value
    let amanharvest = document.getElementById("amanharvest").value
    let amantotlapercent = document.getElementById("amantotlapercent").value
	let amansbtotal = document.getElementById("amansbtotal").value
    let amansbinbrid = document.getElementById("amansbinbrid").value
	let amansbhybrid = document.getElementById("amansbhybrid").value
    let amansblocal = document.getElementById("amansblocal").value
	let amansbtypetotal = document.getElementById("amansbtypetotal").value
    let amansbtypeinbrid = document.getElementById("amansbtypeinbrid").value
	let amansbtypehybrid = document.getElementById("amansbtypehybrid").value
    let amansbtypelocal = document.getElementById("amansbtypelocal").value
	
	
    
    let division = document.getElementById("division").value 
    let district = document.getElementById("district").value 
    let upazila = document.getElementById("upazila").value 

    var blocknameFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var checkblocknameValid = blockname.match(blocknameFormate);
    if(blockname == null){
        return checkblockname();
    }else if(lastupdate === ""){
        return checklastupdate();
    }else if(amanrecovery === ""){
        return checkamanrecovery();
    }else if(amantotal === ""){
        return checkamantotal();
    }else if(amantillering === ""){
        return checkamantillering();
    }else if(amaninbrid === ""){
        return checkamaninbrid();
    }else if(amanhybrid === ""){
        return checkamanhybrid();
    }else if(amanlocal === ""){
        return checkamanlocal();
    }else if(amansbtotal === ""){
        return checkamansbtotal();
    }else if(amansbinbrid === ""){
        return checkamansbinbrid();
    }else if(amansbhybrid === ""){
        return checkamansbhybrid();
    }else if(amansblocal === ""){
        return checkamansblocal();
    }else if(amansbtypetotal === ""){
        return checkamansbtypetotal();
    }else if(amansbtypeinbrid === ""){
        return checkamansbtypeinbrid();
    }else if(amansbtypehybrid === ""){
        return checkamansbtypehybrid();
    }else if(amansbtypelocal === ""){
        return checkamansbtypelocal();
    }else if(amanpi === ""){
        return checkamanpi();
    }else if(amanbooting === ""){
        return checkamanbooting();
    }else if(amanflowering === ""){
        return checkamanflowering();
    }else if(amanmilking === ""){
        return checkamanmilking();
    }else if(amandough === ""){
        return checkamandough();
    }else if(amanripening === ""){
        return checkamanripening();
    }else if(amanharvest === ""){
        return checkamanharvest();
    }else if(amantotlapercent === ""){
        return checkamantotlapercent();
    }else if(upazila === ""){
        return checkupazila();
    }else if(district === ""){
        return checkdistrict();
    }else if(division === ""){
        return checkdivision();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('aman');
        var userData = {
            blockname: blockname,
            union: union,
            lastupdate: lastupdate,
            amanrecovery: amanrecovery,
			amantotal: amantotal,
            amantillering: amantillering,
            amaninbrid: amaninbrid,
			amanhybrid: amanhybrid,
            amanlocal: amanlocal,
			amansbtotal: amansbtotal,
            amansbinbrid: amansbinbrid,
			amansbhybrid: amansbhybrid,
            amansblocal: amansblocal,
			amansbtypetotal: amansbtypetotal,
            amansbtypeinbrid: amansbtypeinbrid,
			amansbtypehybrid: amansbtypehybrid,
            amansbtypelocal: amansbtypelocal,
            amanpi: amanpi,
            amanbooting: amanbooting,
            amanmilking: amanmilking,
            amanflowering: amanflowering,
            amandough: amandough,
            amanripening: amanripening,
            amanharvest: amanharvest,
            amantotlapercent: amantotlapercent,
            division: division,
            district: district,
            upazila: upazila,
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
