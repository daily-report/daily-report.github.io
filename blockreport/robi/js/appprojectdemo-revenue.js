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
        let firebaseRefKey = firebase.database().ref().child('projectdemo-revenue').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
			document.getElementById("pfdivision").innerHTML = dataSnapShot.val().division;
			document.getElementById("pfdistrict").innerHTML = dataSnapShot.val().district;
            document.getElementById("pfupazila").innerHTML = dataSnapShot.val().upazila;
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfrevenuefarmer1variety").innerHTML = dataSnapShot.val().revenuefarmer1variety;
			document.getElementById("pfrevenuefarmer1nid").innerHTML = dataSnapShot.val().revenuefarmer1nid;
            document.getElementById("pfrevenuefarmer1date").innerHTML = dataSnapShot.val().revenuefarmer1date;
            document.getElementById("pfrevenuefarmer1address").innerHTML = dataSnapShot.val().revenuefarmer1address;
			document.getElementById("pfrevenuefarmer1").innerHTML = dataSnapShot.val().revenuefarmer1;
            document.getElementById("pfrevenuefarmer1mobile").innerHTML = dataSnapShot.val().revenuefarmer1mobile;
            document.getElementById("pfrevenuefarmer1comment").innerHTML = dataSnapShot.val().revenuefarmer1comment;
            document.getElementById("pfrevenuefarmer2variety").innerHTML = dataSnapShot.val().revenuefarmer2variety;
			document.getElementById("pfrevenuefarmer2nid").innerHTML = dataSnapShot.val().revenuefarmer2nid;
            document.getElementById("pfrevenuefarmer2date").innerHTML = dataSnapShot.val().revenuefarmer2date;
            document.getElementById("pfrevenuefarmer2address").innerHTML = dataSnapShot.val().revenuefarmer2address;
			document.getElementById("pfrevenuefarmer2").innerHTML = dataSnapShot.val().revenuefarmer2;
            document.getElementById("pfrevenuefarmer2mobile").innerHTML = dataSnapShot.val().revenuefarmer2mobile;
            document.getElementById("pfrevenuefarmer2comment").innerHTML = dataSnapShot.val().revenuefarmer2comment;
            document.getElementById("pfrevenuefarmer3variety").innerHTML = dataSnapShot.val().revenuefarmer3variety;
			document.getElementById("pfrevenuefarmer3nid").innerHTML = dataSnapShot.val().revenuefarmer3nid;
            document.getElementById("pfrevenuefarmer3date").innerHTML = dataSnapShot.val().revenuefarmer3date;
            document.getElementById("pfrevenuefarmer3address").innerHTML = dataSnapShot.val().revenuefarmer3address;
			document.getElementById("pfrevenuefarmer3").innerHTML = dataSnapShot.val().revenuefarmer3;
            document.getElementById("pfrevenuefarmer3mobile").innerHTML = dataSnapShot.val().revenuefarmer3mobile;
            document.getElementById("pfrevenuefarmer3comment").innerHTML = dataSnapShot.val().revenuefarmer3comment;
            document.getElementById("pfrevenuefarmer4variety").innerHTML = dataSnapShot.val().revenuefarmer4variety;
			document.getElementById("pfrevenuefarmer4nid").innerHTML = dataSnapShot.val().revenuefarmer4nid;
            document.getElementById("pfrevenuefarmer4date").innerHTML = dataSnapShot.val().revenuefarmer4date;
            document.getElementById("pfrevenuefarmer4address").innerHTML = dataSnapShot.val().revenuefarmer4address;
			document.getElementById("pfrevenuefarmer4").innerHTML = dataSnapShot.val().revenuefarmer4;
            document.getElementById("pfrevenuefarmer4mobile").innerHTML = dataSnapShot.val().revenuefarmer4mobile;
            document.getElementById("pfrevenuefarmer4comment").innerHTML = dataSnapShot.val().revenuefarmer4comment;
            document.getElementById("pfrevenuefarmer5variety").innerHTML = dataSnapShot.val().revenuefarmer5variety;
			document.getElementById("pfrevenuefarmer5nid").innerHTML = dataSnapShot.val().revenuefarmer5nid;
            document.getElementById("pfrevenuefarmer5date").innerHTML = dataSnapShot.val().revenuefarmer5date;
            document.getElementById("pfrevenuefarmer5address").innerHTML = dataSnapShot.val().revenuefarmer5address;
			document.getElementById("pfrevenuefarmer5").innerHTML = dataSnapShot.val().revenuefarmer5;
            document.getElementById("pfrevenuefarmer5mobile").innerHTML = dataSnapShot.val().revenuefarmer5mobile;
            document.getElementById("pfrevenuefarmer5comment").innerHTML = dataSnapShot.val().revenuefarmer5comment;
            document.getElementById("pfrevenuefarmer6variety").innerHTML = dataSnapShot.val().revenuefarmer6variety;
			document.getElementById("pfrevenuefarmer6nid").innerHTML = dataSnapShot.val().revenuefarmer6nid;
            document.getElementById("pfrevenuefarmer6date").innerHTML = dataSnapShot.val().revenuefarmer6date;
            document.getElementById("pfrevenuefarmer6address").innerHTML = dataSnapShot.val().revenuefarmer6address;
			document.getElementById("pfrevenuefarmer6").innerHTML = dataSnapShot.val().revenuefarmer6;
            document.getElementById("pfrevenuefarmer6mobile").innerHTML = dataSnapShot.val().revenuefarmer6mobile;
            document.getElementById("pfrevenuefarmer6comment").innerHTML = dataSnapShot.val().revenuefarmer6comment;
			
			
            
			
			
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
    var pfrevenuefarmer1variety = document.getElementById("pfrevenuefarmer1variety").innerHTML;
	var pfrevenuefarmer1nid = document.getElementById("pfrevenuefarmer1nid").innerHTML;
    var pfrevenuefarmer1date = document.getElementById("pfrevenuefarmer1date").innerHTML;
    var pfrevenuefarmer1address = document.getElementById("pfrevenuefarmer1address").innerHTML;
	var pfrevenuefarmer1 = document.getElementById("pfrevenuefarmer1").innerHTML;
    var pfrevenuefarmer1mobile = document.getElementById("pfrevenuefarmer1mobile").innerHTML;
    var pfrevenuefarmer1comment = document.getElementById("pfrevenuefarmer1comment").innerHTML;
    var pfrevenuefarmer2variety = document.getElementById("pfrevenuefarmer2variety").innerHTML;
	var pfrevenuefarmer2nid = document.getElementById("pfrevenuefarmer2nid").innerHTML;
    var pfrevenuefarmer2date = document.getElementById("pfrevenuefarmer2date").innerHTML;
    var pfrevenuefarmer2address = document.getElementById("pfrevenuefarmer2address").innerHTML;
	var pfrevenuefarmer2 = document.getElementById("pfrevenuefarmer2").innerHTML;
    var pfrevenuefarmer2mobile = document.getElementById("pfrevenuefarmer2mobile").innerHTML;
    var pfrevenuefarmer2comment = document.getElementById("pfrevenuefarmer2comment").innerHTML;
    var pfrevenuefarmer3variety = document.getElementById("pfrevenuefarmer3variety").innerHTML;
	var pfrevenuefarmer3nid = document.getElementById("pfrevenuefarmer3nid").innerHTML;
    var pfrevenuefarmer3date = document.getElementById("pfrevenuefarmer3date").innerHTML;
    var pfrevenuefarmer3address = document.getElementById("pfrevenuefarmer3address").innerHTML;
	var pfrevenuefarmer3 = document.getElementById("pfrevenuefarmer3").innerHTML;
    var pfrevenuefarmer3mobile = document.getElementById("pfrevenuefarmer3mobile").innerHTML;
    var pfrevenuefarmer3comment = document.getElementById("pfrevenuefarmer3comment").innerHTML;
    var pfrevenuefarmer4variety = document.getElementById("pfrevenuefarmer4variety").innerHTML;
	var pfrevenuefarmer4nid = document.getElementById("pfrevenuefarmer4nid").innerHTML;
    var pfrevenuefarmer4date = document.getElementById("pfrevenuefarmer4date").innerHTML;
    var pfrevenuefarmer4address = document.getElementById("pfrevenuefarmer4address").innerHTML;
	var pfrevenuefarmer4 = document.getElementById("pfrevenuefarmer4").innerHTML;
    var pfrevenuefarmer4mobile = document.getElementById("pfrevenuefarmer4mobile").innerHTML;
    var pfrevenuefarmer4comment = document.getElementById("pfrevenuefarmer4comment").innerHTML;
    var pfrevenuefarmer5variety = document.getElementById("pfrevenuefarmer5variety").innerHTML;
	var pfrevenuefarmer5nid = document.getElementById("pfrevenuefarmer5nid").innerHTML;
    var pfrevenuefarmer5date = document.getElementById("pfrevenuefarmer5date").innerHTML;
    var pfrevenuefarmer5address = document.getElementById("pfrevenuefarmer5address").innerHTML;
	var pfrevenuefarmer5 = document.getElementById("pfrevenuefarmer5").innerHTML;
    var pfrevenuefarmer5mobile = document.getElementById("pfrevenuefarmer5mobile").innerHTML;
    var pfrevenuefarmer5comment = document.getElementById("pfrevenuefarmer5comment").innerHTML;
    var pfrevenuefarmer6variety = document.getElementById("pfrevenuefarmer6variety").innerHTML;
	var pfrevenuefarmer6nid = document.getElementById("pfrevenuefarmer6nid").innerHTML;
    var pfrevenuefarmer6date = document.getElementById("pfrevenuefarmer6date").innerHTML;
    var pfrevenuefarmer6address = document.getElementById("pfrevenuefarmer6address").innerHTML;
	var pfrevenuefarmer6 = document.getElementById("pfrevenuefarmer6").innerHTML;
    var pfrevenuefarmer6mobile = document.getElementById("pfrevenuefarmer6mobile").innerHTML;
    var pfrevenuefarmer6comment = document.getElementById("pfrevenuefarmer6comment").innerHTML;
    

    document.getElementById("upazila").value = pfupazila; 
    document.getElementById("district").value = pfdistrict; 
    document.getElementById("division").value = pfdivision;     	
    document.getElementById("blockname").value = pfblockname; 
    document.getElementById("union").value = pfunion; 
    document.getElementById("lastupdate").value = pflastupdate; 
    document.getElementById("revenuefarmer1variety").value = pfrevenuefarmer1variety;
	document.getElementById("revenuefarmer1nid").value = pfrevenuefarmer1nid; 
    document.getElementById("revenuefarmer1date").value = pfrevenuefarmer1date; 
    document.getElementById("revenuefarmer1address").value = pfrevenuefarmer1address;
	document.getElementById("revenuefarmer1").value = pfrevenuefarmer1; 
    document.getElementById("revenuefarmer1mobile").value = pfrevenuefarmer1mobile; 
    document.getElementById("revenuefarmer1comment").value = pfrevenuefarmer1comment; 
    document.getElementById("revenuefarmer2variety").value = pfrevenuefarmer2variety;
	document.getElementById("revenuefarmer2nid").value = pfrevenuefarmer2nid; 
    document.getElementById("revenuefarmer2date").value = pfrevenuefarmer2date; 
    document.getElementById("revenuefarmer2address").value = pfrevenuefarmer2address;
	document.getElementById("revenuefarmer2").value = pfrevenuefarmer2; 
    document.getElementById("revenuefarmer2mobile").value = pfrevenuefarmer2mobile; 
    document.getElementById("revenuefarmer2comment").value = pfrevenuefarmer2comment; 
    document.getElementById("revenuefarmer3variety").value = pfrevenuefarmer3variety;
	document.getElementById("revenuefarmer3nid").value = pfrevenuefarmer3nid; 
    document.getElementById("revenuefarmer3date").value = pfrevenuefarmer3date; 
    document.getElementById("revenuefarmer3address").value = pfrevenuefarmer3address;
	document.getElementById("revenuefarmer3").value = pfrevenuefarmer3; 
    document.getElementById("revenuefarmer3mobile").value = pfrevenuefarmer3mobile; 
    document.getElementById("revenuefarmer3comment").value = pfrevenuefarmer3comment; 
    document.getElementById("revenuefarmer4variety").value = pfrevenuefarmer4variety;
	document.getElementById("revenuefarmer4nid").value = pfrevenuefarmer4nid; 
    document.getElementById("revenuefarmer4date").value = pfrevenuefarmer4date; 
    document.getElementById("revenuefarmer4address").value = pfrevenuefarmer4address;
	document.getElementById("revenuefarmer4").value = pfrevenuefarmer4; 
    document.getElementById("revenuefarmer4mobile").value = pfrevenuefarmer4mobile; 
    document.getElementById("revenuefarmer4comment").value = pfrevenuefarmer4comment; 
    document.getElementById("revenuefarmer5variety").value = pfrevenuefarmer5variety;
	document.getElementById("revenuefarmer5nid").value = pfrevenuefarmer5nid; 
    document.getElementById("revenuefarmer5date").value = pfrevenuefarmer5date; 
    document.getElementById("revenuefarmer5address").value = pfrevenuefarmer5address;
	document.getElementById("revenuefarmer5").value = pfrevenuefarmer5; 
    document.getElementById("revenuefarmer5mobile").value = pfrevenuefarmer5mobile; 
    document.getElementById("revenuefarmer5comment").value = pfrevenuefarmer5comment; 
    document.getElementById("revenuefarmer6variety").value = pfrevenuefarmer6variety;
	document.getElementById("revenuefarmer6nid").value = pfrevenuefarmer6nid; 
    document.getElementById("revenuefarmer6date").value = pfrevenuefarmer6date; 
    document.getElementById("revenuefarmer6address").value = pfrevenuefarmer6address;
	document.getElementById("revenuefarmer6").value = pfrevenuefarmer6; 
    document.getElementById("revenuefarmer6mobile").value = pfrevenuefarmer6mobile; 
    document.getElementById("revenuefarmer6comment").value = pfrevenuefarmer6comment; 
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
    let revenuefarmer1variety = document.getElementById("revenuefarmer1variety").value
	let revenuefarmer1nid = document.getElementById("revenuefarmer1nid").value  
    let revenuefarmer1date = document.getElementById("revenuefarmer1date").value  
    let revenuefarmer1address = document.getElementById("revenuefarmer1address").value
	let revenuefarmer1 = document.getElementById("revenuefarmer1").value  
    let revenuefarmer1mobile = document.getElementById("revenuefarmer1mobile").value  
    let revenuefarmer1comment = document.getElementById("revenuefarmer1comment").value 
    let revenuefarmer2variety = document.getElementById("revenuefarmer2variety").value
	let revenuefarmer2nid = document.getElementById("revenuefarmer2nid").value  
    let revenuefarmer2date = document.getElementById("revenuefarmer2date").value  
    let revenuefarmer2address = document.getElementById("revenuefarmer2address").value
	let revenuefarmer2 = document.getElementById("revenuefarmer2").value  
    let revenuefarmer2mobile = document.getElementById("revenuefarmer2mobile").value  
    let revenuefarmer2comment = document.getElementById("revenuefarmer2comment").value 
    let revenuefarmer3variety = document.getElementById("revenuefarmer3variety").value
	let revenuefarmer3nid = document.getElementById("revenuefarmer3nid").value  
    let revenuefarmer3date = document.getElementById("revenuefarmer3date").value  
    let revenuefarmer3address = document.getElementById("revenuefarmer3address").value
	let revenuefarmer3 = document.getElementById("revenuefarmer3").value  
    let revenuefarmer3mobile = document.getElementById("revenuefarmer3mobile").value  
    let revenuefarmer3comment = document.getElementById("revenuefarmer3comment").value
    let revenuefarmer4variety = document.getElementById("revenuefarmer4variety").value
	let revenuefarmer4nid = document.getElementById("revenuefarmer4nid").value  
    let revenuefarmer4date = document.getElementById("revenuefarmer4date").value  
    let revenuefarmer4address = document.getElementById("revenuefarmer4address").value
	let revenuefarmer4 = document.getElementById("revenuefarmer4").value  
    let revenuefarmer4mobile = document.getElementById("revenuefarmer4mobile").value  
    let revenuefarmer4comment = document.getElementById("revenuefarmer4comment").value 
    let revenuefarmer5variety = document.getElementById("revenuefarmer5variety").value
	let revenuefarmer5nid = document.getElementById("revenuefarmer5nid").value  
    let revenuefarmer5date = document.getElementById("revenuefarmer5date").value  
    let revenuefarmer5address = document.getElementById("revenuefarmer5address").value
	let revenuefarmer5 = document.getElementById("revenuefarmer5").value  
    let revenuefarmer5mobile = document.getElementById("revenuefarmer5mobile").value  
    let revenuefarmer5comment = document.getElementById("revenuefarmer5comment").value 
    let revenuefarmer6variety = document.getElementById("revenuefarmer6variety").value
	let revenuefarmer6nid = document.getElementById("revenuefarmer6nid").value  
    let revenuefarmer6date = document.getElementById("revenuefarmer6date").value  
    let revenuefarmer6address = document.getElementById("revenuefarmer6address").value
	let revenuefarmer6 = document.getElementById("revenuefarmer6").value  
    let revenuefarmer6mobile = document.getElementById("revenuefarmer6mobile").value  
    let revenuefarmer6comment = document.getElementById("revenuefarmer6comment").value
    
 
 
 
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
    }else if(revenuefarmer1variety === ""){
        return checkrevenuefarmer1variety();
    }else if(revenuefarmer1nid === ""){
        return checkrevenuefarmer1nid();
    }else if(revenuefarmer1date === ""){
        return checkrevenuefarmer1date();
    }else if(revenuefarmer1address === ""){
        return checkrevenuefarmer1address();
    }else if(revenuefarmer1 === ""){
        return checkrevenuefarmer1();
    }else if(revenuefarmer1mobile === ""){
        return checkrevenuefarmer1mobile();
    }else if(revenuefarmer1comment === ""){
        return checkrevenuefarmer1comment();
    }else if(revenuefarmer2variety === ""){
        return checkrevenuefarmer2variety();
    }else if(revenuefarmer2nid === ""){
        return checkrevenuefarmer2nid();
    }else if(revenuefarmer2date === ""){
        return checkrevenuefarmer2date();
    }else if(revenuefarmer2address === ""){
        return checkrevenuefarmer2address();
    }else if(revenuefarmer2 === ""){
        return checkrevenuefarmer2();
    }else if(revenuefarmer2mobile === ""){
        return checkrevenuefarmer2mobile();
    }else if(revenuefarmer2comment === ""){
        return checkrevenuefarmer2comment();
    }else if(revenuefarmer3variety === ""){
        return checkrevenuefarmer3variety();
    }else if(revenuefarmer3nid === ""){
        return checkrevenuefarmer3nid();
    }else if(revenuefarmer3date === ""){
        return checkrevenuefarmer3date();
    }else if(revenuefarmer3address === ""){
        return checkrevenuefarmer3address();
    }else if(revenuefarmer3 === ""){
        return checkrevenuefarmer3();
    }else if(revenuefarmer3mobile === ""){
        return checkrevenuefarmer3mobile();
    }else if(revenuefarmer3comment === ""){
        return checkrevenuefarmer3comment();
    }else if(revenuefarmer4variety === ""){
        return checkrevenuefarmer4variety();
    }else if(revenuefarmer4nid === ""){
        return checkrevenuefarmer4nid();
    }else if(revenuefarmer4date === ""){
        return checkrevenuefarmer4date();
    }else if(revenuefarmer4address === ""){
        return checkrevenuefarmer4address();
    }else if(revenuefarmer4 === ""){
        return checkrevenuefarmer4();
    }else if(revenuefarmer4mobile === ""){
        return checkrevenuefarmer4mobile();
    }else if(revenuefarmer4comment === ""){
        return checkrevenuefarmer4comment();
    }else if(revenuefarmer5variety === ""){
        return checkrevenuefarmer5variety();
    }else if(revenuefarmer5nid === ""){
        return checkrevenuefarmer5nid();
    }else if(revenuefarmer5date === ""){
        return checkrevenuefarmer5date();
    }else if(revenuefarmer5address === ""){
        return checkrevenuefarmer5address();
    }else if(revenuefarmer5 === ""){
        return checkrevenuefarmer5();
    }else if(revenuefarmer5mobile === ""){
        return checkrevenuefarmer5mobile();
    }else if(revenuefarmer5comment === ""){
        return checkrevenuefarmer5comment();
    }else if(revenuefarmer6variety === ""){
        return checkrevenuefarmer6variety();
    }else if(revenuefarmer6nid === ""){
        return checkrevenuefarmer6nid();
    }else if(revenuefarmer6date === ""){
        return checkrevenuefarmer6date();
    }else if(revenuefarmer6address === ""){
        return checkrevenuefarmer6address();
    }else if(revenuefarmer6 === ""){
        return checkrevenuefarmer6();
    }else if(revenuefarmer6mobile === ""){
        return checkrevenuefarmer6mobile();
    }else if(revenuefarmer6comment === ""){
        return checkrevenuefarmer6comment();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('projectdemo-revenue');
        var userData = {
            division: division,
            district: district,
            upazila: upazila,
            blockname: blockname,
            union: union,
            lastupdate: lastupdate,
			
            revenuefarmer1variety: revenuefarmer1variety,
			revenuefarmer1nid: revenuefarmer1nid,
            revenuefarmer1date: revenuefarmer1date,
            revenuefarmer1address: revenuefarmer1address,
			revenuefarmer1: revenuefarmer1,
            revenuefarmer1mobile: revenuefarmer1mobile,
            revenuefarmer1comment: revenuefarmer1comment,
			
            revenuefarmer2variety: revenuefarmer2variety,
			revenuefarmer2nid: revenuefarmer2nid,
            revenuefarmer2date: revenuefarmer2date,
            revenuefarmer2address: revenuefarmer2address,
			revenuefarmer2: revenuefarmer2,
            revenuefarmer2mobile: revenuefarmer2mobile,
            revenuefarmer2comment: revenuefarmer2comment,
			
            revenuefarmer3variety: revenuefarmer3variety,
			revenuefarmer3nid: revenuefarmer3nid,
            revenuefarmer3date: revenuefarmer3date,
            revenuefarmer3address: revenuefarmer3address,
			revenuefarmer3: revenuefarmer3,
            revenuefarmer3mobile: revenuefarmer3mobile,
            revenuefarmer3comment: revenuefarmer3comment,
			
            revenuefarmer4variety: revenuefarmer4variety,
			revenuefarmer4nid: revenuefarmer4nid,
            revenuefarmer4date: revenuefarmer4date,
            revenuefarmer4address: revenuefarmer4address,
			revenuefarmer4: revenuefarmer4,
            revenuefarmer4mobile: revenuefarmer4mobile,
            revenuefarmer4comment: revenuefarmer4comment,
			
            revenuefarmer5variety: revenuefarmer5variety,
			revenuefarmer5nid: revenuefarmer5nid,
            revenuefarmer5date: revenuefarmer5date,
            revenuefarmer5address: revenuefarmer5address,
			revenuefarmer5: revenuefarmer5,
            revenuefarmer5mobile: revenuefarmer5mobile,
            revenuefarmer5comment: revenuefarmer5comment,
			
            revenuefarmer6variety: revenuefarmer6variety,
			revenuefarmer6nid: revenuefarmer6nid,
            revenuefarmer6date: revenuefarmer6date,
            revenuefarmer6address: revenuefarmer6address,
			revenuefarmer6: revenuefarmer6,
            revenuefarmer6mobile: revenuefarmer6mobile,
            revenuefarmer6comment: revenuefarmer6comment,
			
			
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
