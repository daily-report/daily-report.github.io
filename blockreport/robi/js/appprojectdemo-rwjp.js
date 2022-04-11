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
        let firebaseRefKey = firebase.database().ref().child('projectdemo-rwjp').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
			document.getElementById("pfdivision").innerHTML = dataSnapShot.val().division;
			document.getElementById("pfdistrict").innerHTML = dataSnapShot.val().district;
            document.getElementById("pfupazila").innerHTML = dataSnapShot.val().upazila;
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfrwjpfarmer1variety").innerHTML = dataSnapShot.val().rwjpfarmer1variety;
			document.getElementById("pfrwjpfarmer1nid").innerHTML = dataSnapShot.val().rwjpfarmer1nid;
            document.getElementById("pfrwjpfarmer1date").innerHTML = dataSnapShot.val().rwjpfarmer1date;
            document.getElementById("pfrwjpfarmer1address").innerHTML = dataSnapShot.val().rwjpfarmer1address;
			document.getElementById("pfrwjpfarmer1").innerHTML = dataSnapShot.val().rwjpfarmer1;
            document.getElementById("pfrwjpfarmer1mobile").innerHTML = dataSnapShot.val().rwjpfarmer1mobile;
            document.getElementById("pfrwjpfarmer1comment").innerHTML = dataSnapShot.val().rwjpfarmer1comment;
            document.getElementById("pfrwjpfarmer2variety").innerHTML = dataSnapShot.val().rwjpfarmer2variety;
			document.getElementById("pfrwjpfarmer2nid").innerHTML = dataSnapShot.val().rwjpfarmer2nid;
            document.getElementById("pfrwjpfarmer2date").innerHTML = dataSnapShot.val().rwjpfarmer2date;
            document.getElementById("pfrwjpfarmer2address").innerHTML = dataSnapShot.val().rwjpfarmer2address;
			document.getElementById("pfrwjpfarmer2").innerHTML = dataSnapShot.val().rwjpfarmer2;
            document.getElementById("pfrwjpfarmer2mobile").innerHTML = dataSnapShot.val().rwjpfarmer2mobile;
            document.getElementById("pfrwjpfarmer2comment").innerHTML = dataSnapShot.val().rwjpfarmer2comment;
            document.getElementById("pfrwjpfarmer3variety").innerHTML = dataSnapShot.val().rwjpfarmer3variety;
			document.getElementById("pfrwjpfarmer3nid").innerHTML = dataSnapShot.val().rwjpfarmer3nid;
            document.getElementById("pfrwjpfarmer3date").innerHTML = dataSnapShot.val().rwjpfarmer3date;
            document.getElementById("pfrwjpfarmer3address").innerHTML = dataSnapShot.val().rwjpfarmer3address;
			document.getElementById("pfrwjpfarmer3").innerHTML = dataSnapShot.val().rwjpfarmer3;
            document.getElementById("pfrwjpfarmer3mobile").innerHTML = dataSnapShot.val().rwjpfarmer3mobile;
            document.getElementById("pfrwjpfarmer3comment").innerHTML = dataSnapShot.val().rwjpfarmer3comment;
            document.getElementById("pfrwjpfarmer4variety").innerHTML = dataSnapShot.val().rwjpfarmer4variety;
			document.getElementById("pfrwjpfarmer4nid").innerHTML = dataSnapShot.val().rwjpfarmer4nid;
            document.getElementById("pfrwjpfarmer4date").innerHTML = dataSnapShot.val().rwjpfarmer4date;
            document.getElementById("pfrwjpfarmer4address").innerHTML = dataSnapShot.val().rwjpfarmer4address;
			document.getElementById("pfrwjpfarmer4").innerHTML = dataSnapShot.val().rwjpfarmer4;
            document.getElementById("pfrwjpfarmer4mobile").innerHTML = dataSnapShot.val().rwjpfarmer4mobile;
            document.getElementById("pfrwjpfarmer4comment").innerHTML = dataSnapShot.val().rwjpfarmer4comment;
            document.getElementById("pfrwjpfarmer5variety").innerHTML = dataSnapShot.val().rwjpfarmer5variety;
			document.getElementById("pfrwjpfarmer5nid").innerHTML = dataSnapShot.val().rwjpfarmer5nid;
            document.getElementById("pfrwjpfarmer5date").innerHTML = dataSnapShot.val().rwjpfarmer5date;
            document.getElementById("pfrwjpfarmer5address").innerHTML = dataSnapShot.val().rwjpfarmer5address;
			document.getElementById("pfrwjpfarmer5").innerHTML = dataSnapShot.val().rwjpfarmer5;
            document.getElementById("pfrwjpfarmer5mobile").innerHTML = dataSnapShot.val().rwjpfarmer5mobile;
            document.getElementById("pfrwjpfarmer5comment").innerHTML = dataSnapShot.val().rwjpfarmer5comment;
            document.getElementById("pfrwjpfarmer6variety").innerHTML = dataSnapShot.val().rwjpfarmer6variety;
			document.getElementById("pfrwjpfarmer6nid").innerHTML = dataSnapShot.val().rwjpfarmer6nid;
            document.getElementById("pfrwjpfarmer6date").innerHTML = dataSnapShot.val().rwjpfarmer6date;
            document.getElementById("pfrwjpfarmer6address").innerHTML = dataSnapShot.val().rwjpfarmer6address;
			document.getElementById("pfrwjpfarmer6").innerHTML = dataSnapShot.val().rwjpfarmer6;
            document.getElementById("pfrwjpfarmer6mobile").innerHTML = dataSnapShot.val().rwjpfarmer6mobile;
            document.getElementById("pfrwjpfarmer6comment").innerHTML = dataSnapShot.val().rwjpfarmer6comment;
			
			
            
			
			
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
    var pfrwjpfarmer1variety = document.getElementById("pfrwjpfarmer1variety").innerHTML;
	var pfrwjpfarmer1nid = document.getElementById("pfrwjpfarmer1nid").innerHTML;
    var pfrwjpfarmer1date = document.getElementById("pfrwjpfarmer1date").innerHTML;
    var pfrwjpfarmer1address = document.getElementById("pfrwjpfarmer1address").innerHTML;
	var pfrwjpfarmer1 = document.getElementById("pfrwjpfarmer1").innerHTML;
    var pfrwjpfarmer1mobile = document.getElementById("pfrwjpfarmer1mobile").innerHTML;
    var pfrwjpfarmer1comment = document.getElementById("pfrwjpfarmer1comment").innerHTML;
    var pfrwjpfarmer2variety = document.getElementById("pfrwjpfarmer2variety").innerHTML;
	var pfrwjpfarmer2nid = document.getElementById("pfrwjpfarmer2nid").innerHTML;
    var pfrwjpfarmer2date = document.getElementById("pfrwjpfarmer2date").innerHTML;
    var pfrwjpfarmer2address = document.getElementById("pfrwjpfarmer2address").innerHTML;
	var pfrwjpfarmer2 = document.getElementById("pfrwjpfarmer2").innerHTML;
    var pfrwjpfarmer2mobile = document.getElementById("pfrwjpfarmer2mobile").innerHTML;
    var pfrwjpfarmer2comment = document.getElementById("pfrwjpfarmer2comment").innerHTML;
    var pfrwjpfarmer3variety = document.getElementById("pfrwjpfarmer3variety").innerHTML;
	var pfrwjpfarmer3nid = document.getElementById("pfrwjpfarmer3nid").innerHTML;
    var pfrwjpfarmer3date = document.getElementById("pfrwjpfarmer3date").innerHTML;
    var pfrwjpfarmer3address = document.getElementById("pfrwjpfarmer3address").innerHTML;
	var pfrwjpfarmer3 = document.getElementById("pfrwjpfarmer3").innerHTML;
    var pfrwjpfarmer3mobile = document.getElementById("pfrwjpfarmer3mobile").innerHTML;
    var pfrwjpfarmer3comment = document.getElementById("pfrwjpfarmer3comment").innerHTML;
    var pfrwjpfarmer4variety = document.getElementById("pfrwjpfarmer4variety").innerHTML;
	var pfrwjpfarmer4nid = document.getElementById("pfrwjpfarmer4nid").innerHTML;
    var pfrwjpfarmer4date = document.getElementById("pfrwjpfarmer4date").innerHTML;
    var pfrwjpfarmer4address = document.getElementById("pfrwjpfarmer4address").innerHTML;
	var pfrwjpfarmer4 = document.getElementById("pfrwjpfarmer4").innerHTML;
    var pfrwjpfarmer4mobile = document.getElementById("pfrwjpfarmer4mobile").innerHTML;
    var pfrwjpfarmer4comment = document.getElementById("pfrwjpfarmer4comment").innerHTML;
    var pfrwjpfarmer5variety = document.getElementById("pfrwjpfarmer5variety").innerHTML;
	var pfrwjpfarmer5nid = document.getElementById("pfrwjpfarmer5nid").innerHTML;
    var pfrwjpfarmer5date = document.getElementById("pfrwjpfarmer5date").innerHTML;
    var pfrwjpfarmer5address = document.getElementById("pfrwjpfarmer5address").innerHTML;
	var pfrwjpfarmer5 = document.getElementById("pfrwjpfarmer5").innerHTML;
    var pfrwjpfarmer5mobile = document.getElementById("pfrwjpfarmer5mobile").innerHTML;
    var pfrwjpfarmer5comment = document.getElementById("pfrwjpfarmer5comment").innerHTML;
    var pfrwjpfarmer6variety = document.getElementById("pfrwjpfarmer6variety").innerHTML;
	var pfrwjpfarmer6nid = document.getElementById("pfrwjpfarmer6nid").innerHTML;
    var pfrwjpfarmer6date = document.getElementById("pfrwjpfarmer6date").innerHTML;
    var pfrwjpfarmer6address = document.getElementById("pfrwjpfarmer6address").innerHTML;
	var pfrwjpfarmer6 = document.getElementById("pfrwjpfarmer6").innerHTML;
    var pfrwjpfarmer6mobile = document.getElementById("pfrwjpfarmer6mobile").innerHTML;
    var pfrwjpfarmer6comment = document.getElementById("pfrwjpfarmer6comment").innerHTML;
    

    document.getElementById("upazila").value = pfupazila; 
    document.getElementById("district").value = pfdistrict; 
    document.getElementById("division").value = pfdivision;     	
    document.getElementById("blockname").value = pfblockname; 
    document.getElementById("union").value = pfunion; 
    document.getElementById("lastupdate").value = pflastupdate; 
    document.getElementById("rwjpfarmer1variety").value = pfrwjpfarmer1variety;
	document.getElementById("rwjpfarmer1nid").value = pfrwjpfarmer1nid; 
    document.getElementById("rwjpfarmer1date").value = pfrwjpfarmer1date; 
    document.getElementById("rwjpfarmer1address").value = pfrwjpfarmer1address;
	document.getElementById("rwjpfarmer1").value = pfrwjpfarmer1; 
    document.getElementById("rwjpfarmer1mobile").value = pfrwjpfarmer1mobile; 
    document.getElementById("rwjpfarmer1comment").value = pfrwjpfarmer1comment; 
    document.getElementById("rwjpfarmer2variety").value = pfrwjpfarmer2variety;
	document.getElementById("rwjpfarmer2nid").value = pfrwjpfarmer2nid; 
    document.getElementById("rwjpfarmer2date").value = pfrwjpfarmer2date; 
    document.getElementById("rwjpfarmer2address").value = pfrwjpfarmer2address;
	document.getElementById("rwjpfarmer2").value = pfrwjpfarmer2; 
    document.getElementById("rwjpfarmer2mobile").value = pfrwjpfarmer2mobile; 
    document.getElementById("rwjpfarmer2comment").value = pfrwjpfarmer2comment; 
    document.getElementById("rwjpfarmer3variety").value = pfrwjpfarmer3variety;
	document.getElementById("rwjpfarmer3nid").value = pfrwjpfarmer3nid; 
    document.getElementById("rwjpfarmer3date").value = pfrwjpfarmer3date; 
    document.getElementById("rwjpfarmer3address").value = pfrwjpfarmer3address;
	document.getElementById("rwjpfarmer3").value = pfrwjpfarmer3; 
    document.getElementById("rwjpfarmer3mobile").value = pfrwjpfarmer3mobile; 
    document.getElementById("rwjpfarmer3comment").value = pfrwjpfarmer3comment; 
    document.getElementById("rwjpfarmer4variety").value = pfrwjpfarmer4variety;
	document.getElementById("rwjpfarmer4nid").value = pfrwjpfarmer4nid; 
    document.getElementById("rwjpfarmer4date").value = pfrwjpfarmer4date; 
    document.getElementById("rwjpfarmer4address").value = pfrwjpfarmer4address;
	document.getElementById("rwjpfarmer4").value = pfrwjpfarmer4; 
    document.getElementById("rwjpfarmer4mobile").value = pfrwjpfarmer4mobile; 
    document.getElementById("rwjpfarmer4comment").value = pfrwjpfarmer4comment; 
    document.getElementById("rwjpfarmer5variety").value = pfrwjpfarmer5variety;
	document.getElementById("rwjpfarmer5nid").value = pfrwjpfarmer5nid; 
    document.getElementById("rwjpfarmer5date").value = pfrwjpfarmer5date; 
    document.getElementById("rwjpfarmer5address").value = pfrwjpfarmer5address;
	document.getElementById("rwjpfarmer5").value = pfrwjpfarmer5; 
    document.getElementById("rwjpfarmer5mobile").value = pfrwjpfarmer5mobile; 
    document.getElementById("rwjpfarmer5comment").value = pfrwjpfarmer5comment; 
    document.getElementById("rwjpfarmer6variety").value = pfrwjpfarmer6variety;
	document.getElementById("rwjpfarmer6nid").value = pfrwjpfarmer6nid; 
    document.getElementById("rwjpfarmer6date").value = pfrwjpfarmer6date; 
    document.getElementById("rwjpfarmer6address").value = pfrwjpfarmer6address;
	document.getElementById("rwjpfarmer6").value = pfrwjpfarmer6; 
    document.getElementById("rwjpfarmer6mobile").value = pfrwjpfarmer6mobile; 
    document.getElementById("rwjpfarmer6comment").value = pfrwjpfarmer6comment; 
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
    let rwjpfarmer1variety = document.getElementById("rwjpfarmer1variety").value
	let rwjpfarmer1nid = document.getElementById("rwjpfarmer1nid").value  
    let rwjpfarmer1date = document.getElementById("rwjpfarmer1date").value  
    let rwjpfarmer1address = document.getElementById("rwjpfarmer1address").value
	let rwjpfarmer1 = document.getElementById("rwjpfarmer1").value  
    let rwjpfarmer1mobile = document.getElementById("rwjpfarmer1mobile").value  
    let rwjpfarmer1comment = document.getElementById("rwjpfarmer1comment").value 
    let rwjpfarmer2variety = document.getElementById("rwjpfarmer2variety").value
	let rwjpfarmer2nid = document.getElementById("rwjpfarmer2nid").value  
    let rwjpfarmer2date = document.getElementById("rwjpfarmer2date").value  
    let rwjpfarmer2address = document.getElementById("rwjpfarmer2address").value
	let rwjpfarmer2 = document.getElementById("rwjpfarmer2").value  
    let rwjpfarmer2mobile = document.getElementById("rwjpfarmer2mobile").value  
    let rwjpfarmer2comment = document.getElementById("rwjpfarmer2comment").value 
    let rwjpfarmer3variety = document.getElementById("rwjpfarmer3variety").value
	let rwjpfarmer3nid = document.getElementById("rwjpfarmer3nid").value  
    let rwjpfarmer3date = document.getElementById("rwjpfarmer3date").value  
    let rwjpfarmer3address = document.getElementById("rwjpfarmer3address").value
	let rwjpfarmer3 = document.getElementById("rwjpfarmer3").value  
    let rwjpfarmer3mobile = document.getElementById("rwjpfarmer3mobile").value  
    let rwjpfarmer3comment = document.getElementById("rwjpfarmer3comment").value
    let rwjpfarmer4variety = document.getElementById("rwjpfarmer4variety").value
	let rwjpfarmer4nid = document.getElementById("rwjpfarmer4nid").value  
    let rwjpfarmer4date = document.getElementById("rwjpfarmer4date").value  
    let rwjpfarmer4address = document.getElementById("rwjpfarmer4address").value
	let rwjpfarmer4 = document.getElementById("rwjpfarmer4").value  
    let rwjpfarmer4mobile = document.getElementById("rwjpfarmer4mobile").value  
    let rwjpfarmer4comment = document.getElementById("rwjpfarmer4comment").value 
    let rwjpfarmer5variety = document.getElementById("rwjpfarmer5variety").value
	let rwjpfarmer5nid = document.getElementById("rwjpfarmer5nid").value  
    let rwjpfarmer5date = document.getElementById("rwjpfarmer5date").value  
    let rwjpfarmer5address = document.getElementById("rwjpfarmer5address").value
	let rwjpfarmer5 = document.getElementById("rwjpfarmer5").value  
    let rwjpfarmer5mobile = document.getElementById("rwjpfarmer5mobile").value  
    let rwjpfarmer5comment = document.getElementById("rwjpfarmer5comment").value 
    let rwjpfarmer6variety = document.getElementById("rwjpfarmer6variety").value
	let rwjpfarmer6nid = document.getElementById("rwjpfarmer6nid").value  
    let rwjpfarmer6date = document.getElementById("rwjpfarmer6date").value  
    let rwjpfarmer6address = document.getElementById("rwjpfarmer6address").value
	let rwjpfarmer6 = document.getElementById("rwjpfarmer6").value  
    let rwjpfarmer6mobile = document.getElementById("rwjpfarmer6mobile").value  
    let rwjpfarmer6comment = document.getElementById("rwjpfarmer6comment").value
    
 
 
 
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
    }else if(rwjpfarmer1variety === ""){
        return checkrwjpfarmer1variety();
    }else if(rwjpfarmer1nid === ""){
        return checkrwjpfarmer1nid();
    }else if(rwjpfarmer1date === ""){
        return checkrwjpfarmer1date();
    }else if(rwjpfarmer1address === ""){
        return checkrwjpfarmer1address();
    }else if(rwjpfarmer1 === ""){
        return checkrwjpfarmer1();
    }else if(rwjpfarmer1mobile === ""){
        return checkrwjpfarmer1mobile();
    }else if(rwjpfarmer1comment === ""){
        return checkrwjpfarmer1comment();
    }else if(rwjpfarmer2variety === ""){
        return checkrwjpfarmer2variety();
    }else if(rwjpfarmer2nid === ""){
        return checkrwjpfarmer2nid();
    }else if(rwjpfarmer2date === ""){
        return checkrwjpfarmer2date();
    }else if(rwjpfarmer2address === ""){
        return checkrwjpfarmer2address();
    }else if(rwjpfarmer2 === ""){
        return checkrwjpfarmer2();
    }else if(rwjpfarmer2mobile === ""){
        return checkrwjpfarmer2mobile();
    }else if(rwjpfarmer2comment === ""){
        return checkrwjpfarmer2comment();
    }else if(rwjpfarmer3variety === ""){
        return checkrwjpfarmer3variety();
    }else if(rwjpfarmer3nid === ""){
        return checkrwjpfarmer3nid();
    }else if(rwjpfarmer3date === ""){
        return checkrwjpfarmer3date();
    }else if(rwjpfarmer3address === ""){
        return checkrwjpfarmer3address();
    }else if(rwjpfarmer3 === ""){
        return checkrwjpfarmer3();
    }else if(rwjpfarmer3mobile === ""){
        return checkrwjpfarmer3mobile();
    }else if(rwjpfarmer3comment === ""){
        return checkrwjpfarmer3comment();
    }else if(rwjpfarmer4variety === ""){
        return checkrwjpfarmer4variety();
    }else if(rwjpfarmer4nid === ""){
        return checkrwjpfarmer4nid();
    }else if(rwjpfarmer4date === ""){
        return checkrwjpfarmer4date();
    }else if(rwjpfarmer4address === ""){
        return checkrwjpfarmer4address();
    }else if(rwjpfarmer4 === ""){
        return checkrwjpfarmer4();
    }else if(rwjpfarmer4mobile === ""){
        return checkrwjpfarmer4mobile();
    }else if(rwjpfarmer4comment === ""){
        return checkrwjpfarmer4comment();
    }else if(rwjpfarmer5variety === ""){
        return checkrwjpfarmer5variety();
    }else if(rwjpfarmer5nid === ""){
        return checkrwjpfarmer5nid();
    }else if(rwjpfarmer5date === ""){
        return checkrwjpfarmer5date();
    }else if(rwjpfarmer5address === ""){
        return checkrwjpfarmer5address();
    }else if(rwjpfarmer5 === ""){
        return checkrwjpfarmer5();
    }else if(rwjpfarmer5mobile === ""){
        return checkrwjpfarmer5mobile();
    }else if(rwjpfarmer5comment === ""){
        return checkrwjpfarmer5comment();
    }else if(rwjpfarmer6variety === ""){
        return checkrwjpfarmer6variety();
    }else if(rwjpfarmer6nid === ""){
        return checkrwjpfarmer6nid();
    }else if(rwjpfarmer6date === ""){
        return checkrwjpfarmer6date();
    }else if(rwjpfarmer6address === ""){
        return checkrwjpfarmer6address();
    }else if(rwjpfarmer6 === ""){
        return checkrwjpfarmer6();
    }else if(rwjpfarmer6mobile === ""){
        return checkrwjpfarmer6mobile();
    }else if(rwjpfarmer6comment === ""){
        return checkrwjpfarmer6comment();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('projectdemo-rwjp');
        var userData = {
            division: division,
            district: district,
            upazila: upazila,
            blockname: blockname,
            union: union,
            lastupdate: lastupdate,
			
            rwjpfarmer1variety: rwjpfarmer1variety,
			rwjpfarmer1nid: rwjpfarmer1nid,
            rwjpfarmer1date: rwjpfarmer1date,
            rwjpfarmer1address: rwjpfarmer1address,
			rwjpfarmer1: rwjpfarmer1,
            rwjpfarmer1mobile: rwjpfarmer1mobile,
            rwjpfarmer1comment: rwjpfarmer1comment,
			
            rwjpfarmer2variety: rwjpfarmer2variety,
			rwjpfarmer2nid: rwjpfarmer2nid,
            rwjpfarmer2date: rwjpfarmer2date,
            rwjpfarmer2address: rwjpfarmer2address,
			rwjpfarmer2: rwjpfarmer2,
            rwjpfarmer2mobile: rwjpfarmer2mobile,
            rwjpfarmer2comment: rwjpfarmer2comment,
			
            rwjpfarmer3variety: rwjpfarmer3variety,
			rwjpfarmer3nid: rwjpfarmer3nid,
            rwjpfarmer3date: rwjpfarmer3date,
            rwjpfarmer3address: rwjpfarmer3address,
			rwjpfarmer3: rwjpfarmer3,
            rwjpfarmer3mobile: rwjpfarmer3mobile,
            rwjpfarmer3comment: rwjpfarmer3comment,
			
            rwjpfarmer4variety: rwjpfarmer4variety,
			rwjpfarmer4nid: rwjpfarmer4nid,
            rwjpfarmer4date: rwjpfarmer4date,
            rwjpfarmer4address: rwjpfarmer4address,
			rwjpfarmer4: rwjpfarmer4,
            rwjpfarmer4mobile: rwjpfarmer4mobile,
            rwjpfarmer4comment: rwjpfarmer4comment,
			
            rwjpfarmer5variety: rwjpfarmer5variety,
			rwjpfarmer5nid: rwjpfarmer5nid,
            rwjpfarmer5date: rwjpfarmer5date,
            rwjpfarmer5address: rwjpfarmer5address,
			rwjpfarmer5: rwjpfarmer5,
            rwjpfarmer5mobile: rwjpfarmer5mobile,
            rwjpfarmer5comment: rwjpfarmer5comment,
			
            rwjpfarmer6variety: rwjpfarmer6variety,
			rwjpfarmer6nid: rwjpfarmer6nid,
            rwjpfarmer6date: rwjpfarmer6date,
            rwjpfarmer6address: rwjpfarmer6address,
			rwjpfarmer6: rwjpfarmer6,
            rwjpfarmer6mobile: rwjpfarmer6mobile,
            rwjpfarmer6comment: rwjpfarmer6comment,
			
			
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
