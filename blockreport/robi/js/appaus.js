
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
        let firebaseRefKey = firebase.database().ref().child('aus').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfaustillering").innerHTML = dataSnapShot.val().austillering;
			document.getElementById("pfausrecovery").innerHTML = dataSnapShot.val().ausrecovery;
			document.getElementById("pfaustotal").innerHTML = dataSnapShot.val().austotal;
            document.getElementById("pfausinbrid").innerHTML = dataSnapShot.val().ausinbrid;
			document.getElementById("pfaushybrid").innerHTML = dataSnapShot.val().aushybrid;
            document.getElementById("pfauslocal").innerHTML = dataSnapShot.val().auslocal;
            document.getElementById("pfauspi").innerHTML = dataSnapShot.val().auspi;
            document.getElementById("pfausbooting").innerHTML = dataSnapShot.val().ausbooting;
            document.getElementById("pfausflowering").innerHTML = dataSnapShot.val().ausflowering;
            document.getElementById("pfausmilking").innerHTML = dataSnapShot.val().ausmilking;
            document.getElementById("pfausdough").innerHTML = dataSnapShot.val().ausdough;
            document.getElementById("pfausripening").innerHTML = dataSnapShot.val().ausripening;
            document.getElementById("pfausharvest").innerHTML = dataSnapShot.val().ausharvest;
            document.getElementById("pfaustotlapercent").innerHTML = dataSnapShot.val().austotlapercent;
			document.getElementById("pfdivision").innerHTML = dataSnapShot.val().division;
			document.getElementById("pfdistrict").innerHTML = dataSnapShot.val().district;
            document.getElementById("pfupazila").innerHTML = dataSnapShot.val().upazila;				
			document.getElementById("pfaussbtotal").innerHTML = dataSnapShot.val().aussbtotal;
            document.getElementById("pfaussbinbrid").innerHTML = dataSnapShot.val().aussbinbrid;
			document.getElementById("pfaussbhybrid").innerHTML = dataSnapShot.val().aussbhybrid;
            document.getElementById("pfaussblocal").innerHTML = dataSnapShot.val().aussblocal;				
			document.getElementById("pfaussbtypetotal").innerHTML = dataSnapShot.val().aussbtypetotal;
            document.getElementById("pfaussbtypeinbrid").innerHTML = dataSnapShot.val().aussbtypeinbrid;
			document.getElementById("pfaussbtypehybrid").innerHTML = dataSnapShot.val().aussbtypehybrid;
            document.getElementById("pfaussbtypelocal").innerHTML = dataSnapShot.val().aussbtypelocal;
			
			

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
    var pfausrecovery = document.getElementById("pfausrecovery").innerHTML;
	var pfaustotal = document.getElementById("pfaustotal").innerHTML;
    var pfaustillering = document.getElementById("pfaustillering").innerHTML;
    var pfausinbrid = document.getElementById("pfausinbrid").innerHTML;
	var pfaushybrid = document.getElementById("pfaushybrid").innerHTML;
    var pfauslocal = document.getElementById("pfauslocal").innerHTML;
    var pfauspi = document.getElementById("pfauspi").innerHTML;
    var pfausbooting = document.getElementById("pfausbooting").innerHTML;
    var pfausflowering = document.getElementById("pfausflowering").innerHTML;
    var pfausmilking = document.getElementById("pfausmilking").innerHTML;
    var pfausdough = document.getElementById("pfausdough").innerHTML;
    var pfausripening = document.getElementById("pfausripening").innerHTML;
    var pfausharvest = document.getElementById("pfausharvest").innerHTML;
    var pfaustotlapercent = document.getElementById("pfaustotlapercent").innerHTML;
    var pfupazila = document.getElementById("pfupazila").innerHTML;
    var pfdistrict = document.getElementById("pfdistrict").innerHTML;
    var pfdivision = document.getElementById("pfdivision").innerHTML;		
	var pfaussbtotal = document.getElementById("pfaussbtotal").innerHTML;
    var pfaussbinbrid = document.getElementById("pfaussbinbrid").innerHTML;
	var pfaussbhybrid = document.getElementById("pfaussbhybrid").innerHTML;
    var pfaussblocal = document.getElementById("pfaussblocal").innerHTML;		
	var pfaussbtypetotal = document.getElementById("pfaussbtypetotal").innerHTML;
    var pfaussbtypeinbrid = document.getElementById("pfaussbtypeinbrid").innerHTML;
	var pfaussbtypehybrid = document.getElementById("pfaussbtypehybrid").innerHTML;
    var pfaussbtypelocal = document.getElementById("pfaussbtypelocal").innerHTML;
	
	

    document.getElementById("blockname").value = pfblockname;
    document.getElementById("union").value = pfunion;
    document.getElementById("ausrecovery").value = pfausrecovery;
	document.getElementById("austotal").value = pfaustotal;
    document.getElementById("austillering").value = pfaustillering;
    document.getElementById("ausinbrid").value = pfausinbrid;
	document.getElementById("aushybrid").value = pfaushybrid;
    document.getElementById("auslocal").value = pfauslocal;
    document.getElementById("auspi").value = pfauspi;
    document.getElementById("ausbooting").value = pfausbooting;
    document.getElementById("ausflowering").value = pfausflowering;
    document.getElementById("ausmilking").value = pfausmilking;
    document.getElementById("ausdough").value = pfausdough;
    document.getElementById("ausripening").value = pfausripening;
    document.getElementById("ausharvest").value = pfausharvest;
    document.getElementById("austotlapercent").value = pfaustotlapercent;
    document.getElementById("upazila").value = pfupazila; 
    document.getElementById("district").value = pfdistrict; 
    document.getElementById("division").value = pfdivision;  
	document.getElementById("aussbtotal").value = pfaussbtotal;
    document.getElementById("aussbinbrid").value = pfaussbinbrid;
	document.getElementById("aussbhybrid").value = pfaussbhybrid;
    document.getElementById("aussblocal").value = pfaussblocal;
	document.getElementById("aussbtypetotal").value = pfaussbtypetotal;
    document.getElementById("aussbtypeinbrid").value = pfaussbtypeinbrid;
	document.getElementById("aussbtypehybrid").value = pfaussbtypehybrid;
    document.getElementById("aussbtypelocal").value = pfaussbtypelocal;
	
	
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
    let ausrecovery = document.getElementById("ausrecovery").value
	let austotal = document.getElementById("austotal").value
    let austillering = document.getElementById("austillering").value
    let ausinbrid = document.getElementById("ausinbrid").value
	let aushybrid = document.getElementById("aushybrid").value
    let auslocal = document.getElementById("auslocal").value
    let auspi = document.getElementById("auspi").value
    let ausbooting = document.getElementById("ausbooting").value
    let ausflowering = document.getElementById("ausflowering").value
    let ausmilking = document.getElementById("ausmilking").value
    let ausdough = document.getElementById("ausdough").value
    let ausripening = document.getElementById("ausripening").value
    let ausharvest = document.getElementById("ausharvest").value
    let austotlapercent = document.getElementById("austotlapercent").value
	let aussbtotal = document.getElementById("aussbtotal").value
    let aussbinbrid = document.getElementById("aussbinbrid").value
	let aussbhybrid = document.getElementById("aussbhybrid").value
    let aussblocal = document.getElementById("aussblocal").value
	let aussbtypetotal = document.getElementById("aussbtypetotal").value
    let aussbtypeinbrid = document.getElementById("aussbtypeinbrid").value
	let aussbtypehybrid = document.getElementById("aussbtypehybrid").value
    let aussbtypelocal = document.getElementById("aussbtypelocal").value
	
	
    
    let division = document.getElementById("division").value 
    let district = document.getElementById("district").value 
    let upazila = document.getElementById("upazila").value 

    var blocknameFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var checkblocknameValid = blockname.match(blocknameFormate);
    if(blockname == null){
        return checkblockname();
    }else if(lastupdate === ""){
        return checklastupdate();
    }else if(ausrecovery === ""){
        return checkausrecovery();
    }else if(austotal === ""){
        return checkaustotal();
    }else if(austillering === ""){
        return checkaustillering();
    }else if(ausinbrid === ""){
        return checkausinbrid();
    }else if(aushybrid === ""){
        return checkaushybrid();
    }else if(auslocal === ""){
        return checkauslocal();
    }else if(aussbtotal === ""){
        return checkaussbtotal();
    }else if(aussbinbrid === ""){
        return checkaussbinbrid();
    }else if(aussbhybrid === ""){
        return checkaussbhybrid();
    }else if(aussblocal === ""){
        return checkaussblocal();
    }else if(aussbtypetotal === ""){
        return checkaussbtypetotal();
    }else if(aussbtypeinbrid === ""){
        return checkaussbtypeinbrid();
    }else if(aussbtypehybrid === ""){
        return checkaussbtypehybrid();
    }else if(aussbtypelocal === ""){
        return checkaussbtypelocal();
    }else if(auspi === ""){
        return checkauspi();
    }else if(ausbooting === ""){
        return checkausbooting();
    }else if(ausflowering === ""){
        return checkausflowering();
    }else if(ausmilking === ""){
        return checkausmilking();
    }else if(ausdough === ""){
        return checkausdough();
    }else if(ausripening === ""){
        return checkausripening();
    }else if(ausharvest === ""){
        return checkausharvest();
    }else if(austotlapercent === ""){
        return checkaustotlapercent();
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
        var firebaseRef = firebase.database().ref().child('aus');
        var userData = {
            blockname: blockname,
            union: union,
            lastupdate: lastupdate,
            ausrecovery: ausrecovery,
			austotal: austotal,
            austillering: austillering,
            ausinbrid: ausinbrid,
			aushybrid: aushybrid,
            auslocal: auslocal,
			aussbtotal: aussbtotal,
            aussbinbrid: aussbinbrid,
			aussbhybrid: aussbhybrid,
            aussblocal: aussblocal,
			aussbtypetotal: aussbtypetotal,
            aussbtypeinbrid: aussbtypeinbrid,
			aussbtypehybrid: aussbtypehybrid,
            aussbtypelocal: aussbtypelocal,
            auspi: auspi,
            ausbooting: ausbooting,
            ausmilking: ausmilking,
            ausflowering: ausflowering,
            ausdough: ausdough,
            ausripening: ausripening,
            ausharvest: ausharvest,
            austotlapercent: austotlapercent,
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
