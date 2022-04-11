
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
        let firebaseRefKey = firebase.database().ref().child('boro').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfborotillering").innerHTML = dataSnapShot.val().borotillering;
			document.getElementById("pfbororecovery").innerHTML = dataSnapShot.val().bororecovery;
			document.getElementById("pfborototal").innerHTML = dataSnapShot.val().borototal;
            document.getElementById("pfboroinbrid").innerHTML = dataSnapShot.val().boroinbrid;
			document.getElementById("pfborohybrid").innerHTML = dataSnapShot.val().borohybrid;
            document.getElementById("pfborolocal").innerHTML = dataSnapShot.val().borolocal;
            document.getElementById("pfboropi").innerHTML = dataSnapShot.val().boropi;
            document.getElementById("pfborobooting").innerHTML = dataSnapShot.val().borobooting;
            document.getElementById("pfboroflowering").innerHTML = dataSnapShot.val().boroflowering;
            document.getElementById("pfboromilking").innerHTML = dataSnapShot.val().boromilking;
            document.getElementById("pfborodough").innerHTML = dataSnapShot.val().borodough;
            document.getElementById("pfbororipening").innerHTML = dataSnapShot.val().bororipening;
            document.getElementById("pfboroharvest").innerHTML = dataSnapShot.val().boroharvest;
            document.getElementById("pfborototlapercent").innerHTML = dataSnapShot.val().borototlapercent;
			document.getElementById("pfdivision").innerHTML = dataSnapShot.val().division;
			document.getElementById("pfdistrict").innerHTML = dataSnapShot.val().district;
            document.getElementById("pfupazila").innerHTML = dataSnapShot.val().upazila;				
			document.getElementById("pfborosbtotal").innerHTML = dataSnapShot.val().borosbtotal;
            document.getElementById("pfborosbinbrid").innerHTML = dataSnapShot.val().borosbinbrid;
			document.getElementById("pfborosbhybrid").innerHTML = dataSnapShot.val().borosbhybrid;
            document.getElementById("pfborosblocal").innerHTML = dataSnapShot.val().borosblocal;				
			document.getElementById("pfborosbtypetotal").innerHTML = dataSnapShot.val().borosbtypetotal;
            document.getElementById("pfborosbtypeinbrid").innerHTML = dataSnapShot.val().borosbtypeinbrid;
			document.getElementById("pfborosbtypehybrid").innerHTML = dataSnapShot.val().borosbtypehybrid;
            document.getElementById("pfborosbtypelocal").innerHTML = dataSnapShot.val().borosbtypelocal;
			
			

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
    var pfbororecovery = document.getElementById("pfbororecovery").innerHTML;
	var pfborototal = document.getElementById("pfborototal").innerHTML;
    var pfborotillering = document.getElementById("pfborotillering").innerHTML;
    var pfboroinbrid = document.getElementById("pfboroinbrid").innerHTML;
	var pfborohybrid = document.getElementById("pfborohybrid").innerHTML;
    var pfborolocal = document.getElementById("pfborolocal").innerHTML;
    var pfboropi = document.getElementById("pfboropi").innerHTML;
    var pfborobooting = document.getElementById("pfborobooting").innerHTML;
    var pfboroflowering = document.getElementById("pfboroflowering").innerHTML;
    var pfboromilking = document.getElementById("pfboromilking").innerHTML;
    var pfborodough = document.getElementById("pfborodough").innerHTML;
    var pfbororipening = document.getElementById("pfbororipening").innerHTML;
    var pfboroharvest = document.getElementById("pfboroharvest").innerHTML;
    var pfborototlapercent = document.getElementById("pfborototlapercent").innerHTML;
    var pfupazila = document.getElementById("pfupazila").innerHTML;
    var pfdistrict = document.getElementById("pfdistrict").innerHTML;
    var pfdivision = document.getElementById("pfdivision").innerHTML;		
	var pfborosbtotal = document.getElementById("pfborosbtotal").innerHTML;
    var pfborosbinbrid = document.getElementById("pfborosbinbrid").innerHTML;
	var pfborosbhybrid = document.getElementById("pfborosbhybrid").innerHTML;
    var pfborosblocal = document.getElementById("pfborosblocal").innerHTML;		
	var pfborosbtypetotal = document.getElementById("pfborosbtypetotal").innerHTML;
    var pfborosbtypeinbrid = document.getElementById("pfborosbtypeinbrid").innerHTML;
	var pfborosbtypehybrid = document.getElementById("pfborosbtypehybrid").innerHTML;
    var pfborosbtypelocal = document.getElementById("pfborosbtypelocal").innerHTML;
	
	

    document.getElementById("blockname").value = pfblockname;
    document.getElementById("union").value = pfunion;
    document.getElementById("bororecovery").value = pfbororecovery;
	document.getElementById("borototal").value = pfborototal;
    document.getElementById("borotillering").value = pfborotillering;
    document.getElementById("boroinbrid").value = pfboroinbrid;
	document.getElementById("borohybrid").value = pfborohybrid;
    document.getElementById("borolocal").value = pfborolocal;
    document.getElementById("boropi").value = pfboropi;
    document.getElementById("borobooting").value = pfborobooting;
    document.getElementById("boroflowering").value = pfboroflowering;
    document.getElementById("boromilking").value = pfboromilking;
    document.getElementById("borodough").value = pfborodough;
    document.getElementById("bororipening").value = pfbororipening;
    document.getElementById("boroharvest").value = pfboroharvest;
    document.getElementById("borototlapercent").value = pfborototlapercent;
    document.getElementById("upazila").value = pfupazila; 
    document.getElementById("district").value = pfdistrict; 
    document.getElementById("division").value = pfdivision;  
	document.getElementById("borosbtotal").value = pfborosbtotal;
    document.getElementById("borosbinbrid").value = pfborosbinbrid;
	document.getElementById("borosbhybrid").value = pfborosbhybrid;
    document.getElementById("borosblocal").value = pfborosblocal;
	document.getElementById("borosbtypetotal").value = pfborosbtypetotal;
    document.getElementById("borosbtypeinbrid").value = pfborosbtypeinbrid;
	document.getElementById("borosbtypehybrid").value = pfborosbtypehybrid;
    document.getElementById("borosbtypelocal").value = pfborosbtypelocal;
	
	
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
    let bororecovery = document.getElementById("bororecovery").value
	let borototal = document.getElementById("borototal").value
    let borotillering = document.getElementById("borotillering").value
    let boroinbrid = document.getElementById("boroinbrid").value
	let borohybrid = document.getElementById("borohybrid").value
    let borolocal = document.getElementById("borolocal").value
    let boropi = document.getElementById("boropi").value
    let borobooting = document.getElementById("borobooting").value
    let boroflowering = document.getElementById("boroflowering").value
    let boromilking = document.getElementById("boromilking").value
    let borodough = document.getElementById("borodough").value
    let bororipening = document.getElementById("bororipening").value
    let boroharvest = document.getElementById("boroharvest").value
    let borototlapercent = document.getElementById("borototlapercent").value
	let borosbtotal = document.getElementById("borosbtotal").value
    let borosbinbrid = document.getElementById("borosbinbrid").value
	let borosbhybrid = document.getElementById("borosbhybrid").value
    let borosblocal = document.getElementById("borosblocal").value
	let borosbtypetotal = document.getElementById("borosbtypetotal").value
    let borosbtypeinbrid = document.getElementById("borosbtypeinbrid").value
	let borosbtypehybrid = document.getElementById("borosbtypehybrid").value
    let borosbtypelocal = document.getElementById("borosbtypelocal").value
	
	
    
    let division = document.getElementById("division").value 
    let district = document.getElementById("district").value 
    let upazila = document.getElementById("upazila").value 

    var blocknameFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var checkblocknameValid = blockname.match(blocknameFormate);
    if(blockname == null){
        return checkblockname();
    }else if(lastupdate === ""){
        return checklastupdate();
    }else if(bororecovery === ""){
        return checkbororecovery();
    }else if(borototal === ""){
        return checkborototal();
    }else if(borotillering === ""){
        return checkborotillering();
    }else if(boroinbrid === ""){
        return checkboroinbrid();
    }else if(borohybrid === ""){
        return checkborohybrid();
    }else if(borolocal === ""){
        return checkborolocal();
    }else if(borosbtotal === ""){
        return checkborosbtotal();
    }else if(borosbinbrid === ""){
        return checkborosbinbrid();
    }else if(borosbhybrid === ""){
        return checkborosbhybrid();
    }else if(borosblocal === ""){
        return checkborosblocal();
    }else if(borosbtypetotal === ""){
        return checkborosbtypetotal();
    }else if(borosbtypeinbrid === ""){
        return checkborosbtypeinbrid();
    }else if(borosbtypehybrid === ""){
        return checkborosbtypehybrid();
    }else if(borosbtypelocal === ""){
        return checkborosbtypelocal();
    }else if(boropi === ""){
        return checkboropi();
    }else if(borobooting === ""){
        return checkborobooting();
    }else if(boroflowering === ""){
        return checkboroflowering();
    }else if(boromilking === ""){
        return checkboromilking();
    }else if(borodough === ""){
        return checkborodough();
    }else if(bororipening === ""){
        return checkbororipening();
    }else if(boroharvest === ""){
        return checkboroharvest();
    }else if(borototlapercent === ""){
        return checkborototlapercent();
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
        var firebaseRef = firebase.database().ref().child('boro');
        var userData = {
            blockname: blockname,
            union: union,
            lastupdate: lastupdate,
            bororecovery: bororecovery,
			borototal: borototal,
            borotillering: borotillering,
            boroinbrid: boroinbrid,
			borohybrid: borohybrid,
            borolocal: borolocal,
			borosbtotal: borosbtotal,
            borosbinbrid: borosbinbrid,
			borosbhybrid: borosbhybrid,
            borosblocal: borosblocal,
			borosbtypetotal: borosbtypetotal,
            borosbtypeinbrid: borosbtypeinbrid,
			borosbtypehybrid: borosbtypehybrid,
            borosbtypelocal: borosbtypelocal,
            boropi: boropi,
            borobooting: borobooting,
            boromilking: boromilking,
            boroflowering: boroflowering,
            borodough: borodough,
            bororipening: bororipening,
            boroharvest: boroharvest,
            borototlapercent: borototlapercent,
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
