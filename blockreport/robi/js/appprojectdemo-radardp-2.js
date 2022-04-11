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
        let firebaseRefKey = firebase.database().ref().child('projectdemo-radardp').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
			document.getElementById("pfdivision").innerHTML = dataSnapShot.val().division;
			document.getElementById("pfdistrict").innerHTML = dataSnapShot.val().district;
            document.getElementById("pfupazila").innerHTML = dataSnapShot.val().upazila;
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfradardpfarmer1variety").innerHTML = dataSnapShot.val().radardpfarmer1variety;
			document.getElementById("pfradardpfarmer1nid").innerHTML = dataSnapShot.val().radardpfarmer1nid;
            document.getElementById("pfradardpfarmer1date").innerHTML = dataSnapShot.val().radardpfarmer1date;
            document.getElementById("pfradardpfarmer1address").innerHTML = dataSnapShot.val().radardpfarmer1address;
			document.getElementById("pfradardpfarmer1").innerHTML = dataSnapShot.val().radardpfarmer1;
            document.getElementById("pfradardpfarmer1mobile").innerHTML = dataSnapShot.val().radardpfarmer1mobile;
            document.getElementById("pfradardpfarmer1comment").innerHTML = dataSnapShot.val().radardpfarmer1comment;
            document.getElementById("pfradardpfarmer2variety").innerHTML = dataSnapShot.val().radardpfarmer2variety;
			document.getElementById("pfradardpfarmer2nid").innerHTML = dataSnapShot.val().radardpfarmer2nid;
            document.getElementById("pfradardpfarmer2date").innerHTML = dataSnapShot.val().radardpfarmer2date;
            document.getElementById("pfradardpfarmer2address").innerHTML = dataSnapShot.val().radardpfarmer2address;
			document.getElementById("pfradardpfarmer2").innerHTML = dataSnapShot.val().radardpfarmer2;
            document.getElementById("pfradardpfarmer2mobile").innerHTML = dataSnapShot.val().radardpfarmer2mobile;
            document.getElementById("pfradardpfarmer2comment").innerHTML = dataSnapShot.val().radardpfarmer2comment;
            document.getElementById("pfradardpfarmer3variety").innerHTML = dataSnapShot.val().radardpfarmer3variety;
			document.getElementById("pfradardpfarmer3nid").innerHTML = dataSnapShot.val().radardpfarmer3nid;
            document.getElementById("pfradardpfarmer3date").innerHTML = dataSnapShot.val().radardpfarmer3date;
            document.getElementById("pfradardpfarmer3address").innerHTML = dataSnapShot.val().radardpfarmer3address;
			document.getElementById("pfradardpfarmer3").innerHTML = dataSnapShot.val().radardpfarmer3;
            document.getElementById("pfradardpfarmer3mobile").innerHTML = dataSnapShot.val().radardpfarmer3mobile;
            document.getElementById("pfradardpfarmer3comment").innerHTML = dataSnapShot.val().radardpfarmer3comment;
            document.getElementById("pfradardpfarmer4variety").innerHTML = dataSnapShot.val().radardpfarmer4variety;
			document.getElementById("pfradardpfarmer4nid").innerHTML = dataSnapShot.val().radardpfarmer4nid;
            document.getElementById("pfradardpfarmer4date").innerHTML = dataSnapShot.val().radardpfarmer4date;
            document.getElementById("pfradardpfarmer4address").innerHTML = dataSnapShot.val().radardpfarmer4address;
			document.getElementById("pfradardpfarmer4").innerHTML = dataSnapShot.val().radardpfarmer4;
            document.getElementById("pfradardpfarmer4mobile").innerHTML = dataSnapShot.val().radardpfarmer4mobile;
            document.getElementById("pfradardpfarmer4comment").innerHTML = dataSnapShot.val().radardpfarmer4comment;
            document.getElementById("pfradardpfarmer5variety").innerHTML = dataSnapShot.val().radardpfarmer5variety;
			document.getElementById("pfradardpfarmer5nid").innerHTML = dataSnapShot.val().radardpfarmer5nid;
            document.getElementById("pfradardpfarmer5date").innerHTML = dataSnapShot.val().radardpfarmer5date;
            document.getElementById("pfradardpfarmer5address").innerHTML = dataSnapShot.val().radardpfarmer5address;
			document.getElementById("pfradardpfarmer5").innerHTML = dataSnapShot.val().radardpfarmer5;
            document.getElementById("pfradardpfarmer5mobile").innerHTML = dataSnapShot.val().radardpfarmer5mobile;
            document.getElementById("pfradardpfarmer5comment").innerHTML = dataSnapShot.val().radardpfarmer5comment;
            document.getElementById("pfradardpfarmer6variety").innerHTML = dataSnapShot.val().radardpfarmer6variety;
			document.getElementById("pfradardpfarmer6nid").innerHTML = dataSnapShot.val().radardpfarmer6nid;
            document.getElementById("pfradardpfarmer6date").innerHTML = dataSnapShot.val().radardpfarmer6date;
            document.getElementById("pfradardpfarmer6address").innerHTML = dataSnapShot.val().radardpfarmer6address;
			document.getElementById("pfradardpfarmer6").innerHTML = dataSnapShot.val().radardpfarmer6;
            document.getElementById("pfradardpfarmer6mobile").innerHTML = dataSnapShot.val().radardpfarmer6mobile;
            document.getElementById("pfradardpfarmer6comment").innerHTML = dataSnapShot.val().radardpfarmer6comment;
			
			
            
			
			
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
    var pfradardpfarmer1variety = document.getElementById("pfradardpfarmer1variety").innerHTML;
	var pfradardpfarmer1nid = document.getElementById("pfradardpfarmer1nid").innerHTML;
    var pfradardpfarmer1date = document.getElementById("pfradardpfarmer1date").innerHTML;
    var pfradardpfarmer1address = document.getElementById("pfradardpfarmer1address").innerHTML;
	var pfradardpfarmer1 = document.getElementById("pfradardpfarmer1").innerHTML;
    var pfradardpfarmer1mobile = document.getElementById("pfradardpfarmer1mobile").innerHTML;
    var pfradardpfarmer1comment = document.getElementById("pfradardpfarmer1comment").innerHTML;
    var pfradardpfarmer2variety = document.getElementById("pfradardpfarmer2variety").innerHTML;
	var pfradardpfarmer2nid = document.getElementById("pfradardpfarmer2nid").innerHTML;
    var pfradardpfarmer2date = document.getElementById("pfradardpfarmer2date").innerHTML;
    var pfradardpfarmer2address = document.getElementById("pfradardpfarmer2address").innerHTML;
	var pfradardpfarmer2 = document.getElementById("pfradardpfarmer2").innerHTML;
    var pfradardpfarmer2mobile = document.getElementById("pfradardpfarmer2mobile").innerHTML;
    var pfradardpfarmer2comment = document.getElementById("pfradardpfarmer2comment").innerHTML;
    var pfradardpfarmer3variety = document.getElementById("pfradardpfarmer3variety").innerHTML;
	var pfradardpfarmer3nid = document.getElementById("pfradardpfarmer3nid").innerHTML;
    var pfradardpfarmer3date = document.getElementById("pfradardpfarmer3date").innerHTML;
    var pfradardpfarmer3address = document.getElementById("pfradardpfarmer3address").innerHTML;
	var pfradardpfarmer3 = document.getElementById("pfradardpfarmer3").innerHTML;
    var pfradardpfarmer3mobile = document.getElementById("pfradardpfarmer3mobile").innerHTML;
    var pfradardpfarmer3comment = document.getElementById("pfradardpfarmer3comment").innerHTML;
    var pfradardpfarmer4variety = document.getElementById("pfradardpfarmer4variety").innerHTML;
	var pfradardpfarmer4nid = document.getElementById("pfradardpfarmer4nid").innerHTML;
    var pfradardpfarmer4date = document.getElementById("pfradardpfarmer4date").innerHTML;
    var pfradardpfarmer4address = document.getElementById("pfradardpfarmer4address").innerHTML;
	var pfradardpfarmer4 = document.getElementById("pfradardpfarmer4").innerHTML;
    var pfradardpfarmer4mobile = document.getElementById("pfradardpfarmer4mobile").innerHTML;
    var pfradardpfarmer4comment = document.getElementById("pfradardpfarmer4comment").innerHTML;
    var pfradardpfarmer5variety = document.getElementById("pfradardpfarmer5variety").innerHTML;
	var pfradardpfarmer5nid = document.getElementById("pfradardpfarmer5nid").innerHTML;
    var pfradardpfarmer5date = document.getElementById("pfradardpfarmer5date").innerHTML;
    var pfradardpfarmer5address = document.getElementById("pfradardpfarmer5address").innerHTML;
	var pfradardpfarmer5 = document.getElementById("pfradardpfarmer5").innerHTML;
    var pfradardpfarmer5mobile = document.getElementById("pfradardpfarmer5mobile").innerHTML;
    var pfradardpfarmer5comment = document.getElementById("pfradardpfarmer5comment").innerHTML;
    var pfradardpfarmer6variety = document.getElementById("pfradardpfarmer6variety").innerHTML;
	var pfradardpfarmer6nid = document.getElementById("pfradardpfarmer6nid").innerHTML;
    var pfradardpfarmer6date = document.getElementById("pfradardpfarmer6date").innerHTML;
    var pfradardpfarmer6address = document.getElementById("pfradardpfarmer6address").innerHTML;
	var pfradardpfarmer6 = document.getElementById("pfradardpfarmer6").innerHTML;
    var pfradardpfarmer6mobile = document.getElementById("pfradardpfarmer6mobile").innerHTML;
    var pfradardpfarmer6comment = document.getElementById("pfradardpfarmer6comment").innerHTML;
    

    document.getElementById("upazila").value = pfupazila; 
    document.getElementById("district").value = pfdistrict; 
    document.getElementById("division").value = pfdivision;     	
    document.getElementById("blockname").value = pfblockname; 
    document.getElementById("union").value = pfunion; 
    document.getElementById("lastupdate").value = pflastupdate; 
    document.getElementById("radardpfarmer1variety").value = pfradardpfarmer1variety;
	document.getElementById("radardpfarmer1nid").value = pfradardpfarmer1nid; 
    document.getElementById("radardpfarmer1date").value = pfradardpfarmer1date; 
    document.getElementById("radardpfarmer1address").value = pfradardpfarmer1address;
	document.getElementById("radardpfarmer1").value = pfradardpfarmer1; 
    document.getElementById("radardpfarmer1mobile").value = pfradardpfarmer1mobile; 
    document.getElementById("radardpfarmer1comment").value = pfradardpfarmer1comment; 
    document.getElementById("radardpfarmer2variety").value = pfradardpfarmer2variety;
	document.getElementById("radardpfarmer2nid").value = pfradardpfarmer2nid; 
    document.getElementById("radardpfarmer2date").value = pfradardpfarmer2date; 
    document.getElementById("radardpfarmer2address").value = pfradardpfarmer2address;
	document.getElementById("radardpfarmer2").value = pfradardpfarmer2; 
    document.getElementById("radardpfarmer2mobile").value = pfradardpfarmer2mobile; 
    document.getElementById("radardpfarmer2comment").value = pfradardpfarmer2comment; 
    document.getElementById("radardpfarmer3variety").value = pfradardpfarmer3variety;
	document.getElementById("radardpfarmer3nid").value = pfradardpfarmer3nid; 
    document.getElementById("radardpfarmer3date").value = pfradardpfarmer3date; 
    document.getElementById("radardpfarmer3address").value = pfradardpfarmer3address;
	document.getElementById("radardpfarmer3").value = pfradardpfarmer3; 
    document.getElementById("radardpfarmer3mobile").value = pfradardpfarmer3mobile; 
    document.getElementById("radardpfarmer3comment").value = pfradardpfarmer3comment; 
    document.getElementById("radardpfarmer4variety").value = pfradardpfarmer4variety;
	document.getElementById("radardpfarmer4nid").value = pfradardpfarmer4nid; 
    document.getElementById("radardpfarmer4date").value = pfradardpfarmer4date; 
    document.getElementById("radardpfarmer4address").value = pfradardpfarmer4address;
	document.getElementById("radardpfarmer4").value = pfradardpfarmer4; 
    document.getElementById("radardpfarmer4mobile").value = pfradardpfarmer4mobile; 
    document.getElementById("radardpfarmer4comment").value = pfradardpfarmer4comment; 
    document.getElementById("radardpfarmer5variety").value = pfradardpfarmer5variety;
	document.getElementById("radardpfarmer5nid").value = pfradardpfarmer5nid; 
    document.getElementById("radardpfarmer5date").value = pfradardpfarmer5date; 
    document.getElementById("radardpfarmer5address").value = pfradardpfarmer5address;
	document.getElementById("radardpfarmer5").value = pfradardpfarmer5; 
    document.getElementById("radardpfarmer5mobile").value = pfradardpfarmer5mobile; 
    document.getElementById("radardpfarmer5comment").value = pfradardpfarmer5comment; 
    document.getElementById("radardpfarmer6variety").value = pfradardpfarmer6variety;
	document.getElementById("radardpfarmer6nid").value = pfradardpfarmer6nid; 
    document.getElementById("radardpfarmer6date").value = pfradardpfarmer6date; 
    document.getElementById("radardpfarmer6address").value = pfradardpfarmer6address;
	document.getElementById("radardpfarmer6").value = pfradardpfarmer6; 
    document.getElementById("radardpfarmer6mobile").value = pfradardpfarmer6mobile; 
    document.getElementById("radardpfarmer6comment").value = pfradardpfarmer6comment; 
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
    let radardpfarmer1variety = document.getElementById("radardpfarmer1variety").value
	let radardpfarmer1nid = document.getElementById("radardpfarmer1nid").value  
    let radardpfarmer1date = document.getElementById("radardpfarmer1date").value  
    let radardpfarmer1address = document.getElementById("radardpfarmer1address").value
	let radardpfarmer1 = document.getElementById("radardpfarmer1").value  
    let radardpfarmer1mobile = document.getElementById("radardpfarmer1mobile").value  
    let radardpfarmer1comment = document.getElementById("radardpfarmer1comment").value 
    let radardpfarmer2variety = document.getElementById("radardpfarmer2variety").value
	let radardpfarmer2nid = document.getElementById("radardpfarmer2nid").value  
    let radardpfarmer2date = document.getElementById("radardpfarmer2date").value  
    let radardpfarmer2address = document.getElementById("radardpfarmer2address").value
	let radardpfarmer2 = document.getElementById("radardpfarmer2").value  
    let radardpfarmer2mobile = document.getElementById("radardpfarmer2mobile").value  
    let radardpfarmer2comment = document.getElementById("radardpfarmer2comment").value 
    let radardpfarmer3variety = document.getElementById("radardpfarmer3variety").value
	let radardpfarmer3nid = document.getElementById("radardpfarmer3nid").value  
    let radardpfarmer3date = document.getElementById("radardpfarmer3date").value  
    let radardpfarmer3address = document.getElementById("radardpfarmer3address").value
	let radardpfarmer3 = document.getElementById("radardpfarmer3").value  
    let radardpfarmer3mobile = document.getElementById("radardpfarmer3mobile").value  
    let radardpfarmer3comment = document.getElementById("radardpfarmer3comment").value
    let radardpfarmer4variety = document.getElementById("radardpfarmer4variety").value
	let radardpfarmer4nid = document.getElementById("radardpfarmer4nid").value  
    let radardpfarmer4date = document.getElementById("radardpfarmer4date").value  
    let radardpfarmer4address = document.getElementById("radardpfarmer4address").value
	let radardpfarmer4 = document.getElementById("radardpfarmer4").value  
    let radardpfarmer4mobile = document.getElementById("radardpfarmer4mobile").value  
    let radardpfarmer4comment = document.getElementById("radardpfarmer4comment").value 
    let radardpfarmer5variety = document.getElementById("radardpfarmer5variety").value
	let radardpfarmer5nid = document.getElementById("radardpfarmer5nid").value  
    let radardpfarmer5date = document.getElementById("radardpfarmer5date").value  
    let radardpfarmer5address = document.getElementById("radardpfarmer5address").value
	let radardpfarmer5 = document.getElementById("radardpfarmer5").value  
    let radardpfarmer5mobile = document.getElementById("radardpfarmer5mobile").value  
    let radardpfarmer5comment = document.getElementById("radardpfarmer5comment").value 
    let radardpfarmer6variety = document.getElementById("radardpfarmer6variety").value
	let radardpfarmer6nid = document.getElementById("radardpfarmer6nid").value  
    let radardpfarmer6date = document.getElementById("radardpfarmer6date").value  
    let radardpfarmer6address = document.getElementById("radardpfarmer6address").value
	let radardpfarmer6 = document.getElementById("radardpfarmer6").value  
    let radardpfarmer6mobile = document.getElementById("radardpfarmer6mobile").value  
    let radardpfarmer6comment = document.getElementById("radardpfarmer6comment").value
    
 
 
 
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
    }else if(radardpfarmer1variety === ""){
        return checkradardpfarmer1variety();
    }else if(radardpfarmer1nid === ""){
        return checkradardpfarmer1nid();
    }else if(radardpfarmer1date === ""){
        return checkradardpfarmer1date();
    }else if(radardpfarmer1address === ""){
        return checkradardpfarmer1address();
    }else if(radardpfarmer1 === ""){
        return checkradardpfarmer1();
    }else if(radardpfarmer1mobile === ""){
        return checkradardpfarmer1mobile();
    }else if(radardpfarmer1comment === ""){
        return checkradardpfarmer1comment();
    }else if(radardpfarmer2variety === ""){
        return checkradardpfarmer2variety();
    }else if(radardpfarmer2nid === ""){
        return checkradardpfarmer2nid();
    }else if(radardpfarmer2date === ""){
        return checkradardpfarmer2date();
    }else if(radardpfarmer2address === ""){
        return checkradardpfarmer2address();
    }else if(radardpfarmer2 === ""){
        return checkradardpfarmer2();
    }else if(radardpfarmer2mobile === ""){
        return checkradardpfarmer2mobile();
    }else if(radardpfarmer2comment === ""){
        return checkradardpfarmer2comment();
    }else if(radardpfarmer3variety === ""){
        return checkradardpfarmer3variety();
    }else if(radardpfarmer3nid === ""){
        return checkradardpfarmer3nid();
    }else if(radardpfarmer3date === ""){
        return checkradardpfarmer3date();
    }else if(radardpfarmer3address === ""){
        return checkradardpfarmer3address();
    }else if(radardpfarmer3 === ""){
        return checkradardpfarmer3();
    }else if(radardpfarmer3mobile === ""){
        return checkradardpfarmer3mobile();
    }else if(radardpfarmer3comment === ""){
        return checkradardpfarmer3comment();
    }else if(radardpfarmer4variety === ""){
        return checkradardpfarmer4variety();
    }else if(radardpfarmer4nid === ""){
        return checkradardpfarmer4nid();
    }else if(radardpfarmer4date === ""){
        return checkradardpfarmer4date();
    }else if(radardpfarmer4address === ""){
        return checkradardpfarmer4address();
    }else if(radardpfarmer4 === ""){
        return checkradardpfarmer4();
    }else if(radardpfarmer4mobile === ""){
        return checkradardpfarmer4mobile();
    }else if(radardpfarmer4comment === ""){
        return checkradardpfarmer4comment();
    }else if(radardpfarmer5variety === ""){
        return checkradardpfarmer5variety();
    }else if(radardpfarmer5nid === ""){
        return checkradardpfarmer5nid();
    }else if(radardpfarmer5date === ""){
        return checkradardpfarmer5date();
    }else if(radardpfarmer5address === ""){
        return checkradardpfarmer5address();
    }else if(radardpfarmer5 === ""){
        return checkradardpfarmer5();
    }else if(radardpfarmer5mobile === ""){
        return checkradardpfarmer5mobile();
    }else if(radardpfarmer5comment === ""){
        return checkradardpfarmer5comment();
    }else if(radardpfarmer6variety === ""){
        return checkradardpfarmer6variety();
    }else if(radardpfarmer6nid === ""){
        return checkradardpfarmer6nid();
    }else if(radardpfarmer6date === ""){
        return checkradardpfarmer6date();
    }else if(radardpfarmer6address === ""){
        return checkradardpfarmer6address();
    }else if(radardpfarmer6 === ""){
        return checkradardpfarmer6();
    }else if(radardpfarmer6mobile === ""){
        return checkradardpfarmer6mobile();
    }else if(radardpfarmer6comment === ""){
        return checkradardpfarmer6comment();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('projectdemo-radardp');
        var userData = {
            division: division,
            district: district,
            upazila: upazila,
            blockname: blockname,
            union: union,
            lastupdate: lastupdate,
			
            radardpfarmer1variety: radardpfarmer1variety,
			radardpfarmer1nid: radardpfarmer1nid,
            radardpfarmer1date: radardpfarmer1date,
            radardpfarmer1address: radardpfarmer1address,
			radardpfarmer1: radardpfarmer1,
            radardpfarmer1mobile: radardpfarmer1mobile,
            radardpfarmer1comment: radardpfarmer1comment,
			
            radardpfarmer2variety: radardpfarmer2variety,
			radardpfarmer2nid: radardpfarmer2nid,
            radardpfarmer2date: radardpfarmer2date,
            radardpfarmer2address: radardpfarmer2address,
			radardpfarmer2: radardpfarmer2,
            radardpfarmer2mobile: radardpfarmer2mobile,
            radardpfarmer2comment: radardpfarmer2comment,
			
            radardpfarmer3variety: radardpfarmer3variety,
			radardpfarmer3nid: radardpfarmer3nid,
            radardpfarmer3date: radardpfarmer3date,
            radardpfarmer3address: radardpfarmer3address,
			radardpfarmer3: radardpfarmer3,
            radardpfarmer3mobile: radardpfarmer3mobile,
            radardpfarmer3comment: radardpfarmer3comment,
			
            radardpfarmer4variety: radardpfarmer4variety,
			radardpfarmer4nid: radardpfarmer4nid,
            radardpfarmer4date: radardpfarmer4date,
            radardpfarmer4address: radardpfarmer4address,
			radardpfarmer4: radardpfarmer4,
            radardpfarmer4mobile: radardpfarmer4mobile,
            radardpfarmer4comment: radardpfarmer4comment,
			
            radardpfarmer5variety: radardpfarmer5variety,
			radardpfarmer5nid: radardpfarmer5nid,
            radardpfarmer5date: radardpfarmer5date,
            radardpfarmer5address: radardpfarmer5address,
			radardpfarmer5: radardpfarmer5,
            radardpfarmer5mobile: radardpfarmer5mobile,
            radardpfarmer5comment: radardpfarmer5comment,
			
            radardpfarmer6variety: radardpfarmer6variety,
			radardpfarmer6nid: radardpfarmer6nid,
            radardpfarmer6date: radardpfarmer6date,
            radardpfarmer6address: radardpfarmer6address,
			radardpfarmer6: radardpfarmer6,
            radardpfarmer6mobile: radardpfarmer6mobile,
            radardpfarmer6comment: radardpfarmer6comment,
			
			
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
