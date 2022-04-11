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
        let firebaseRefKey = firebase.database().ref().child('projectdemo-posp').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
			document.getElementById("pfdivision").innerHTML = dataSnapShot.val().division;
			document.getElementById("pfdistrict").innerHTML = dataSnapShot.val().district;
            document.getElementById("pfupazila").innerHTML = dataSnapShot.val().upazila;
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfpospfarmer1variety").innerHTML = dataSnapShot.val().pospfarmer1variety;
			document.getElementById("pfpospfarmer1nid").innerHTML = dataSnapShot.val().pospfarmer1nid;
            document.getElementById("pfpospfarmer1date").innerHTML = dataSnapShot.val().pospfarmer1date;
            document.getElementById("pfpospfarmer1address").innerHTML = dataSnapShot.val().pospfarmer1address;
			document.getElementById("pfpospfarmer1").innerHTML = dataSnapShot.val().pospfarmer1;
            document.getElementById("pfpospfarmer1mobile").innerHTML = dataSnapShot.val().pospfarmer1mobile;
            document.getElementById("pfpospfarmer1comment").innerHTML = dataSnapShot.val().pospfarmer1comment;
            document.getElementById("pfpospfarmer2variety").innerHTML = dataSnapShot.val().pospfarmer2variety;
			document.getElementById("pfpospfarmer2nid").innerHTML = dataSnapShot.val().pospfarmer2nid;
            document.getElementById("pfpospfarmer2date").innerHTML = dataSnapShot.val().pospfarmer2date;
            document.getElementById("pfpospfarmer2address").innerHTML = dataSnapShot.val().pospfarmer2address;
			document.getElementById("pfpospfarmer2").innerHTML = dataSnapShot.val().pospfarmer2;
            document.getElementById("pfpospfarmer2mobile").innerHTML = dataSnapShot.val().pospfarmer2mobile;
            document.getElementById("pfpospfarmer2comment").innerHTML = dataSnapShot.val().pospfarmer2comment;
            document.getElementById("pfpospfarmer3variety").innerHTML = dataSnapShot.val().pospfarmer3variety;
			document.getElementById("pfpospfarmer3nid").innerHTML = dataSnapShot.val().pospfarmer3nid;
            document.getElementById("pfpospfarmer3date").innerHTML = dataSnapShot.val().pospfarmer3date;
            document.getElementById("pfpospfarmer3address").innerHTML = dataSnapShot.val().pospfarmer3address;
			document.getElementById("pfpospfarmer3").innerHTML = dataSnapShot.val().pospfarmer3;
            document.getElementById("pfpospfarmer3mobile").innerHTML = dataSnapShot.val().pospfarmer3mobile;
            document.getElementById("pfpospfarmer3comment").innerHTML = dataSnapShot.val().pospfarmer3comment;
            document.getElementById("pfpospfarmer4variety").innerHTML = dataSnapShot.val().pospfarmer4variety;
			document.getElementById("pfpospfarmer4nid").innerHTML = dataSnapShot.val().pospfarmer4nid;
            document.getElementById("pfpospfarmer4date").innerHTML = dataSnapShot.val().pospfarmer4date;
            document.getElementById("pfpospfarmer4address").innerHTML = dataSnapShot.val().pospfarmer4address;
			document.getElementById("pfpospfarmer4").innerHTML = dataSnapShot.val().pospfarmer4;
            document.getElementById("pfpospfarmer4mobile").innerHTML = dataSnapShot.val().pospfarmer4mobile;
            document.getElementById("pfpospfarmer4comment").innerHTML = dataSnapShot.val().pospfarmer4comment;
            document.getElementById("pfpospfarmer5variety").innerHTML = dataSnapShot.val().pospfarmer5variety;
			document.getElementById("pfpospfarmer5nid").innerHTML = dataSnapShot.val().pospfarmer5nid;
            document.getElementById("pfpospfarmer5date").innerHTML = dataSnapShot.val().pospfarmer5date;
            document.getElementById("pfpospfarmer5address").innerHTML = dataSnapShot.val().pospfarmer5address;
			document.getElementById("pfpospfarmer5").innerHTML = dataSnapShot.val().pospfarmer5;
            document.getElementById("pfpospfarmer5mobile").innerHTML = dataSnapShot.val().pospfarmer5mobile;
            document.getElementById("pfpospfarmer5comment").innerHTML = dataSnapShot.val().pospfarmer5comment;
            document.getElementById("pfpospfarmer6variety").innerHTML = dataSnapShot.val().pospfarmer6variety;
			document.getElementById("pfpospfarmer6nid").innerHTML = dataSnapShot.val().pospfarmer6nid;
            document.getElementById("pfpospfarmer6date").innerHTML = dataSnapShot.val().pospfarmer6date;
            document.getElementById("pfpospfarmer6address").innerHTML = dataSnapShot.val().pospfarmer6address;
			document.getElementById("pfpospfarmer6").innerHTML = dataSnapShot.val().pospfarmer6;
            document.getElementById("pfpospfarmer6mobile").innerHTML = dataSnapShot.val().pospfarmer6mobile;
            document.getElementById("pfpospfarmer6comment").innerHTML = dataSnapShot.val().pospfarmer6comment;
			
			
            
			
			
        })
    } else {
    //   No user is signed in.
    }
});
// xxxxxxxxxx Show edit profile form with detail xxxxxxxxxx
function showEditProfileForm(){
    document.getElementById("profileSection").style.display = "none"
    document.getElementById("editProfileForm").style.display = "block"
    var pfupazila = document.getElementById("pfupazila").innerHTML;
    var pfdistrict = document.getElementById("pfdistrict").innerHTML;
    var pfdivision = document.getElementById("pfdivision").innerHTML;
    var pfblockname = document.getElementById("pfblockname").innerHTML; 
	var pfunion = document.getElementById("pfunion").innerHTML;
    var pflastupdate = document.getElementById("pflastupdate").innerHTML;
    var pfpospfarmer1variety = document.getElementById("pfpospfarmer1variety").innerHTML;
	var pfpospfarmer1nid = document.getElementById("pfpospfarmer1nid").innerHTML;
    var pfpospfarmer1date = document.getElementById("pfpospfarmer1date").innerHTML;
    var pfpospfarmer1address = document.getElementById("pfpospfarmer1address").innerHTML;
	var pfpospfarmer1 = document.getElementById("pfpospfarmer1").innerHTML;
    var pfpospfarmer1mobile = document.getElementById("pfpospfarmer1mobile").innerHTML;
    var pfpospfarmer1comment = document.getElementById("pfpospfarmer1comment").innerHTML;
    var pfpospfarmer2variety = document.getElementById("pfpospfarmer2variety").innerHTML;
	var pfpospfarmer2nid = document.getElementById("pfpospfarmer2nid").innerHTML;
    var pfpospfarmer2date = document.getElementById("pfpospfarmer2date").innerHTML;
    var pfpospfarmer2address = document.getElementById("pfpospfarmer2address").innerHTML;
	var pfpospfarmer2 = document.getElementById("pfpospfarmer2").innerHTML;
    var pfpospfarmer2mobile = document.getElementById("pfpospfarmer2mobile").innerHTML;
    var pfpospfarmer2comment = document.getElementById("pfpospfarmer2comment").innerHTML;
    var pfpospfarmer3variety = document.getElementById("pfpospfarmer3variety").innerHTML;
	var pfpospfarmer3nid = document.getElementById("pfpospfarmer3nid").innerHTML;
    var pfpospfarmer3date = document.getElementById("pfpospfarmer3date").innerHTML;
    var pfpospfarmer3address = document.getElementById("pfpospfarmer3address").innerHTML;
	var pfpospfarmer3 = document.getElementById("pfpospfarmer3").innerHTML;
    var pfpospfarmer3mobile = document.getElementById("pfpospfarmer3mobile").innerHTML;
    var pfpospfarmer3comment = document.getElementById("pfpospfarmer3comment").innerHTML;
    var pfpospfarmer4variety = document.getElementById("pfpospfarmer4variety").innerHTML;
	var pfpospfarmer4nid = document.getElementById("pfpospfarmer4nid").innerHTML;
    var pfpospfarmer4date = document.getElementById("pfpospfarmer4date").innerHTML;
    var pfpospfarmer4address = document.getElementById("pfpospfarmer4address").innerHTML;
	var pfpospfarmer4 = document.getElementById("pfpospfarmer4").innerHTML;
    var pfpospfarmer4mobile = document.getElementById("pfpospfarmer4mobile").innerHTML;
    var pfpospfarmer4comment = document.getElementById("pfpospfarmer4comment").innerHTML;
    var pfpospfarmer5variety = document.getElementById("pfpospfarmer5variety").innerHTML;
	var pfpospfarmer5nid = document.getElementById("pfpospfarmer5nid").innerHTML;
    var pfpospfarmer5date = document.getElementById("pfpospfarmer5date").innerHTML;
    var pfpospfarmer5address = document.getElementById("pfpospfarmer5address").innerHTML;
	var pfpospfarmer5 = document.getElementById("pfpospfarmer5").innerHTML;
    var pfpospfarmer5mobile = document.getElementById("pfpospfarmer5mobile").innerHTML;
    var pfpospfarmer5comment = document.getElementById("pfpospfarmer5comment").innerHTML;
    var pfpospfarmer6variety = document.getElementById("pfpospfarmer6variety").innerHTML;
	var pfpospfarmer6nid = document.getElementById("pfpospfarmer6nid").innerHTML;
    var pfpospfarmer6date = document.getElementById("pfpospfarmer6date").innerHTML;
    var pfpospfarmer6address = document.getElementById("pfpospfarmer6address").innerHTML;
	var pfpospfarmer6 = document.getElementById("pfpospfarmer6").innerHTML;
    var pfpospfarmer6mobile = document.getElementById("pfpospfarmer6mobile").innerHTML;
    var pfpospfarmer6comment = document.getElementById("pfpospfarmer6comment").innerHTML;
    

    document.getElementById("upazila").value = pfupazila; 
    document.getElementById("district").value = pfdistrict; 
    document.getElementById("division").value = pfdivision;     	
    document.getElementById("blockname").value = pfblockname; 
    document.getElementById("union").value = pfunion; 
    document.getElementById("lastupdate").value = pflastupdate; 
    document.getElementById("pospfarmer1variety").value = pfpospfarmer1variety;
	document.getElementById("pospfarmer1nid").value = pfpospfarmer1nid; 
    document.getElementById("pospfarmer1date").value = pfpospfarmer1date; 
    document.getElementById("pospfarmer1address").value = pfpospfarmer1address;
	document.getElementById("pospfarmer1").value = pfpospfarmer1; 
    document.getElementById("pospfarmer1mobile").value = pfpospfarmer1mobile; 
    document.getElementById("pospfarmer1comment").value = pfpospfarmer1comment; 
    document.getElementById("pospfarmer2variety").value = pfpospfarmer2variety;
	document.getElementById("pospfarmer2nid").value = pfpospfarmer2nid; 
    document.getElementById("pospfarmer2date").value = pfpospfarmer2date; 
    document.getElementById("pospfarmer2address").value = pfpospfarmer2address;
	document.getElementById("pospfarmer2").value = pfpospfarmer2; 
    document.getElementById("pospfarmer2mobile").value = pfpospfarmer2mobile; 
    document.getElementById("pospfarmer2comment").value = pfpospfarmer2comment; 
    document.getElementById("pospfarmer3variety").value = pfpospfarmer3variety;
	document.getElementById("pospfarmer3nid").value = pfpospfarmer3nid; 
    document.getElementById("pospfarmer3date").value = pfpospfarmer3date; 
    document.getElementById("pospfarmer3address").value = pfpospfarmer3address;
	document.getElementById("pospfarmer3").value = pfpospfarmer3; 
    document.getElementById("pospfarmer3mobile").value = pfpospfarmer3mobile; 
    document.getElementById("pospfarmer3comment").value = pfpospfarmer3comment; 
    document.getElementById("pospfarmer4variety").value = pfpospfarmer4variety;
	document.getElementById("pospfarmer4nid").value = pfpospfarmer4nid; 
    document.getElementById("pospfarmer4date").value = pfpospfarmer4date; 
    document.getElementById("pospfarmer4address").value = pfpospfarmer4address;
	document.getElementById("pospfarmer4").value = pfpospfarmer4; 
    document.getElementById("pospfarmer4mobile").value = pfpospfarmer4mobile; 
    document.getElementById("pospfarmer4comment").value = pfpospfarmer4comment; 
    document.getElementById("pospfarmer5variety").value = pfpospfarmer5variety;
	document.getElementById("pospfarmer5nid").value = pfpospfarmer5nid; 
    document.getElementById("pospfarmer5date").value = pfpospfarmer5date; 
    document.getElementById("pospfarmer5address").value = pfpospfarmer5address;
	document.getElementById("pospfarmer5").value = pfpospfarmer5; 
    document.getElementById("pospfarmer5mobile").value = pfpospfarmer5mobile; 
    document.getElementById("pospfarmer5comment").value = pfpospfarmer5comment; 
    document.getElementById("pospfarmer6variety").value = pfpospfarmer6variety;
	document.getElementById("pospfarmer6nid").value = pfpospfarmer6nid; 
    document.getElementById("pospfarmer6date").value = pfpospfarmer6date; 
    document.getElementById("pospfarmer6address").value = pfpospfarmer6address;
	document.getElementById("pospfarmer6").value = pfpospfarmer6; 
    document.getElementById("pospfarmer6mobile").value = pfpospfarmer6mobile; 
    document.getElementById("pospfarmer6comment").value = pfpospfarmer6comment; 
}

// xxxxxxxxxx Hide edit profile form xxxxxxxxxx
function hideEditProfileForm(){
    document.getElementById("profileSection").style.display = "block";
    document.getElementById("editProfileForm").style.display = "none";
}
// xxxxxxxxxx Save profile and update database xxxxxxxxxx
function saveProfile(){
    let division = document.getElementById("division").value 
    let district = document.getElementById("district").value 
    let upazila = document.getElementById("upazila").value 
    let blockname = document.getElementById("blockname").value 
    let union = document.getElementById("union").value       
    let lastupdate = document.getElementById("lastupdate").value
    let pospfarmer1variety = document.getElementById("pospfarmer1variety").value
	let pospfarmer1nid = document.getElementById("pospfarmer1nid").value  
    let pospfarmer1date = document.getElementById("pospfarmer1date").value  
    let pospfarmer1address = document.getElementById("pospfarmer1address").value
	let pospfarmer1 = document.getElementById("pospfarmer1").value  
    let pospfarmer1mobile = document.getElementById("pospfarmer1mobile").value  
    let pospfarmer1comment = document.getElementById("pospfarmer1comment").value 
    let pospfarmer2variety = document.getElementById("pospfarmer2variety").value
	let pospfarmer2nid = document.getElementById("pospfarmer2nid").value  
    let pospfarmer2date = document.getElementById("pospfarmer2date").value  
    let pospfarmer2address = document.getElementById("pospfarmer2address").value
	let pospfarmer2 = document.getElementById("pospfarmer2").value  
    let pospfarmer2mobile = document.getElementById("pospfarmer2mobile").value  
    let pospfarmer2comment = document.getElementById("pospfarmer2comment").value 
    let pospfarmer3variety = document.getElementById("pospfarmer3variety").value
	let pospfarmer3nid = document.getElementById("pospfarmer3nid").value  
    let pospfarmer3date = document.getElementById("pospfarmer3date").value  
    let pospfarmer3address = document.getElementById("pospfarmer3address").value
	let pospfarmer3 = document.getElementById("pospfarmer3").value  
    let pospfarmer3mobile = document.getElementById("pospfarmer3mobile").value  
    let pospfarmer3comment = document.getElementById("pospfarmer3comment").value
    let pospfarmer4variety = document.getElementById("pospfarmer4variety").value
	let pospfarmer4nid = document.getElementById("pospfarmer4nid").value  
    let pospfarmer4date = document.getElementById("pospfarmer4date").value  
    let pospfarmer4address = document.getElementById("pospfarmer4address").value
	let pospfarmer4 = document.getElementById("pospfarmer4").value  
    let pospfarmer4mobile = document.getElementById("pospfarmer4mobile").value  
    let pospfarmer4comment = document.getElementById("pospfarmer4comment").value 
    let pospfarmer5variety = document.getElementById("pospfarmer5variety").value
	let pospfarmer5nid = document.getElementById("pospfarmer5nid").value  
    let pospfarmer5date = document.getElementById("pospfarmer5date").value  
    let pospfarmer5address = document.getElementById("pospfarmer5address").value
	let pospfarmer5 = document.getElementById("pospfarmer5").value  
    let pospfarmer5mobile = document.getElementById("pospfarmer5mobile").value  
    let pospfarmer5comment = document.getElementById("pospfarmer5comment").value 
    let pospfarmer6variety = document.getElementById("pospfarmer6variety").value
	let pospfarmer6nid = document.getElementById("pospfarmer6nid").value  
    let pospfarmer6date = document.getElementById("pospfarmer6date").value  
    let pospfarmer6address = document.getElementById("pospfarmer6address").value
	let pospfarmer6 = document.getElementById("pospfarmer6").value  
    let pospfarmer6mobile = document.getElementById("pospfarmer6mobile").value  
    let pospfarmer6comment = document.getElementById("pospfarmer6comment").value
    
 
 
 
    var blocknameFormate = /^([A-Za-z.\s_-]).{5,}$/; 
    var checkblocknameValid = blockname.match(blocknameFormate);
    if(blockname == null){
        return checkblockname();
    }else if(union === ""){
        return checkunion();
    }else if(upazila === ""){
        return checkupazila();
    }else if(district === ""){
        return checkdistrict();
    }else if(division === ""){
        return checkdivision();
    }else if(lastupdate === ""){
        return checklastupdate();
    }else if(pospfarmer1variety === ""){
        return checkpospfarmer1variety();
    }else if(pospfarmer1nid === ""){
        return checkpospfarmer1nid();
    }else if(pospfarmer1date === ""){
        return checkpospfarmer1date();
    }else if(pospfarmer1address === ""){
        return checkpospfarmer1address();
    }else if(pospfarmer1 === ""){
        return checkpospfarmer1();
    }else if(pospfarmer1mobile === ""){
        return checkpospfarmer1mobile();
    }else if(pospfarmer1comment === ""){
        return checkpospfarmer1comment();
    }else if(pospfarmer2variety === ""){
        return checkpospfarmer2variety();
    }else if(pospfarmer2nid === ""){
        return checkpospfarmer2nid();
    }else if(pospfarmer2date === ""){
        return checkpospfarmer2date();
    }else if(pospfarmer2address === ""){
        return checkpospfarmer2address();
    }else if(pospfarmer2 === ""){
        return checkpospfarmer2();
    }else if(pospfarmer2mobile === ""){
        return checkpospfarmer2mobile();
    }else if(pospfarmer2comment === ""){
        return checkpospfarmer2comment();
    }else if(pospfarmer3variety === ""){
        return checkpospfarmer3variety();
    }else if(pospfarmer3nid === ""){
        return checkpospfarmer3nid();
    }else if(pospfarmer3date === ""){
        return checkpospfarmer3date();
    }else if(pospfarmer3address === ""){
        return checkpospfarmer3address();
    }else if(pospfarmer3 === ""){
        return checkpospfarmer3();
    }else if(pospfarmer3mobile === ""){
        return checkpospfarmer3mobile();
    }else if(pospfarmer3comment === ""){
        return checkpospfarmer3comment();
    }else if(pospfarmer4variety === ""){
        return checkpospfarmer4variety();
    }else if(pospfarmer4nid === ""){
        return checkpospfarmer4nid();
    }else if(pospfarmer4date === ""){
        return checkpospfarmer4date();
    }else if(pospfarmer4address === ""){
        return checkpospfarmer4address();
    }else if(pospfarmer4 === ""){
        return checkpospfarmer4();
    }else if(pospfarmer4mobile === ""){
        return checkpospfarmer4mobile();
    }else if(pospfarmer4comment === ""){
        return checkpospfarmer4comment();
    }else if(pospfarmer5variety === ""){
        return checkpospfarmer5variety();
    }else if(pospfarmer5nid === ""){
        return checkpospfarmer5nid();
    }else if(pospfarmer5date === ""){
        return checkpospfarmer5date();
    }else if(pospfarmer5address === ""){
        return checkpospfarmer5address();
    }else if(pospfarmer5 === ""){
        return checkpospfarmer5();
    }else if(pospfarmer5mobile === ""){
        return checkpospfarmer5mobile();
    }else if(pospfarmer5comment === ""){
        return checkpospfarmer5comment();
    }else if(pospfarmer6variety === ""){
        return checkpospfarmer6variety();
    }else if(pospfarmer6nid === ""){
        return checkpospfarmer6nid();
    }else if(pospfarmer6date === ""){
        return checkpospfarmer6date();
    }else if(pospfarmer6address === ""){
        return checkpospfarmer6address();
    }else if(pospfarmer6 === ""){
        return checkpospfarmer6();
    }else if(pospfarmer6mobile === ""){
        return checkpospfarmer6mobile();
    }else if(pospfarmer6comment === ""){
        return checkpospfarmer6comment();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('projectdemo-posp');
        var userData = {
            division: division,
            district: district,
            upazila: upazila,
            blockname: blockname,
            union: union,
            lastupdate: lastupdate,
			
            pospfarmer1variety: pospfarmer1variety,
			pospfarmer1nid: pospfarmer1nid,
            pospfarmer1date: pospfarmer1date,
            pospfarmer1address: pospfarmer1address,
			pospfarmer1: pospfarmer1,
            pospfarmer1mobile: pospfarmer1mobile,
            pospfarmer1comment: pospfarmer1comment,
			
            pospfarmer2variety: pospfarmer2variety,
			pospfarmer2nid: pospfarmer2nid,
            pospfarmer2date: pospfarmer2date,
            pospfarmer2address: pospfarmer2address,
			pospfarmer2: pospfarmer2,
            pospfarmer2mobile: pospfarmer2mobile,
            pospfarmer2comment: pospfarmer2comment,
			
            pospfarmer3variety: pospfarmer3variety,
			pospfarmer3nid: pospfarmer3nid,
            pospfarmer3date: pospfarmer3date,
            pospfarmer3address: pospfarmer3address,
			pospfarmer3: pospfarmer3,
            pospfarmer3mobile: pospfarmer3mobile,
            pospfarmer3comment: pospfarmer3comment,
			
            pospfarmer4variety: pospfarmer4variety,
			pospfarmer4nid: pospfarmer4nid,
            pospfarmer4date: pospfarmer4date,
            pospfarmer4address: pospfarmer4address,
			pospfarmer4: pospfarmer4,
            pospfarmer4mobile: pospfarmer4mobile,
            pospfarmer4comment: pospfarmer4comment,
			
            pospfarmer5variety: pospfarmer5variety,
			pospfarmer5nid: pospfarmer5nid,
            pospfarmer5date: pospfarmer5date,
            pospfarmer5address: pospfarmer5address,
			pospfarmer5: pospfarmer5,
            pospfarmer5mobile: pospfarmer5mobile,
            pospfarmer5comment: pospfarmer5comment,
			
            pospfarmer6variety: pospfarmer6variety,
			pospfarmer6nid: pospfarmer6nid,
            pospfarmer6date: pospfarmer6date,
            pospfarmer6address: pospfarmer6address,
			pospfarmer6: pospfarmer6,
            pospfarmer6mobile: pospfarmer6mobile,
            pospfarmer6comment: pospfarmer6comment,
			
			
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
