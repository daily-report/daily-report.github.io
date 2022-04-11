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
        let firebaseRefKey = firebase.database().ref().child('projectdemo-others').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
			document.getElementById("pfdivision").innerHTML = dataSnapShot.val().division;
			document.getElementById("pfdistrict").innerHTML = dataSnapShot.val().district;
            document.getElementById("pfupazila").innerHTML = dataSnapShot.val().upazila;
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfothersfarmer1variety").innerHTML = dataSnapShot.val().othersfarmer1variety;
			document.getElementById("pfothersfarmer1nid").innerHTML = dataSnapShot.val().othersfarmer1nid;
            document.getElementById("pfothersfarmer1date").innerHTML = dataSnapShot.val().othersfarmer1date;
            document.getElementById("pfothersfarmer1address").innerHTML = dataSnapShot.val().othersfarmer1address;
			document.getElementById("pfothersfarmer1").innerHTML = dataSnapShot.val().othersfarmer1;
            document.getElementById("pfothersfarmer1mobile").innerHTML = dataSnapShot.val().othersfarmer1mobile;
            document.getElementById("pfothersfarmer1comment").innerHTML = dataSnapShot.val().othersfarmer1comment;
            document.getElementById("pfothersfarmer2variety").innerHTML = dataSnapShot.val().othersfarmer2variety;
			document.getElementById("pfothersfarmer2nid").innerHTML = dataSnapShot.val().othersfarmer2nid;
            document.getElementById("pfothersfarmer2date").innerHTML = dataSnapShot.val().othersfarmer2date;
            document.getElementById("pfothersfarmer2address").innerHTML = dataSnapShot.val().othersfarmer2address;
			document.getElementById("pfothersfarmer2").innerHTML = dataSnapShot.val().othersfarmer2;
            document.getElementById("pfothersfarmer2mobile").innerHTML = dataSnapShot.val().othersfarmer2mobile;
            document.getElementById("pfothersfarmer2comment").innerHTML = dataSnapShot.val().othersfarmer2comment;
            document.getElementById("pfothersfarmer3variety").innerHTML = dataSnapShot.val().othersfarmer3variety;
			document.getElementById("pfothersfarmer3nid").innerHTML = dataSnapShot.val().othersfarmer3nid;
            document.getElementById("pfothersfarmer3date").innerHTML = dataSnapShot.val().othersfarmer3date;
            document.getElementById("pfothersfarmer3address").innerHTML = dataSnapShot.val().othersfarmer3address;
			document.getElementById("pfothersfarmer3").innerHTML = dataSnapShot.val().othersfarmer3;
            document.getElementById("pfothersfarmer3mobile").innerHTML = dataSnapShot.val().othersfarmer3mobile;
            document.getElementById("pfothersfarmer3comment").innerHTML = dataSnapShot.val().othersfarmer3comment;
            document.getElementById("pfothersfarmer4variety").innerHTML = dataSnapShot.val().othersfarmer4variety;
			document.getElementById("pfothersfarmer4nid").innerHTML = dataSnapShot.val().othersfarmer4nid;
            document.getElementById("pfothersfarmer4date").innerHTML = dataSnapShot.val().othersfarmer4date;
            document.getElementById("pfothersfarmer4address").innerHTML = dataSnapShot.val().othersfarmer4address;
			document.getElementById("pfothersfarmer4").innerHTML = dataSnapShot.val().othersfarmer4;
            document.getElementById("pfothersfarmer4mobile").innerHTML = dataSnapShot.val().othersfarmer4mobile;
            document.getElementById("pfothersfarmer4comment").innerHTML = dataSnapShot.val().othersfarmer4comment;
            document.getElementById("pfothersfarmer5variety").innerHTML = dataSnapShot.val().othersfarmer5variety;
			document.getElementById("pfothersfarmer5nid").innerHTML = dataSnapShot.val().othersfarmer5nid;
            document.getElementById("pfothersfarmer5date").innerHTML = dataSnapShot.val().othersfarmer5date;
            document.getElementById("pfothersfarmer5address").innerHTML = dataSnapShot.val().othersfarmer5address;
			document.getElementById("pfothersfarmer5").innerHTML = dataSnapShot.val().othersfarmer5;
            document.getElementById("pfothersfarmer5mobile").innerHTML = dataSnapShot.val().othersfarmer5mobile;
            document.getElementById("pfothersfarmer5comment").innerHTML = dataSnapShot.val().othersfarmer5comment;
            document.getElementById("pfothersfarmer6variety").innerHTML = dataSnapShot.val().othersfarmer6variety;
			document.getElementById("pfothersfarmer6nid").innerHTML = dataSnapShot.val().othersfarmer6nid;
            document.getElementById("pfothersfarmer6date").innerHTML = dataSnapShot.val().othersfarmer6date;
            document.getElementById("pfothersfarmer6address").innerHTML = dataSnapShot.val().othersfarmer6address;
			document.getElementById("pfothersfarmer6").innerHTML = dataSnapShot.val().othersfarmer6;
            document.getElementById("pfothersfarmer6mobile").innerHTML = dataSnapShot.val().othersfarmer6mobile;
            document.getElementById("pfothersfarmer6comment").innerHTML = dataSnapShot.val().othersfarmer6comment;
			
			
            
			
			
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
    var pfothersfarmer1variety = document.getElementById("pfothersfarmer1variety").innerHTML;
	var pfothersfarmer1nid = document.getElementById("pfothersfarmer1nid").innerHTML;
    var pfothersfarmer1date = document.getElementById("pfothersfarmer1date").innerHTML;
    var pfothersfarmer1address = document.getElementById("pfothersfarmer1address").innerHTML;
	var pfothersfarmer1 = document.getElementById("pfothersfarmer1").innerHTML;
    var pfothersfarmer1mobile = document.getElementById("pfothersfarmer1mobile").innerHTML;
    var pfothersfarmer1comment = document.getElementById("pfothersfarmer1comment").innerHTML;
    var pfothersfarmer2variety = document.getElementById("pfothersfarmer2variety").innerHTML;
	var pfothersfarmer2nid = document.getElementById("pfothersfarmer2nid").innerHTML;
    var pfothersfarmer2date = document.getElementById("pfothersfarmer2date").innerHTML;
    var pfothersfarmer2address = document.getElementById("pfothersfarmer2address").innerHTML;
	var pfothersfarmer2 = document.getElementById("pfothersfarmer2").innerHTML;
    var pfothersfarmer2mobile = document.getElementById("pfothersfarmer2mobile").innerHTML;
    var pfothersfarmer2comment = document.getElementById("pfothersfarmer2comment").innerHTML;
    var pfothersfarmer3variety = document.getElementById("pfothersfarmer3variety").innerHTML;
	var pfothersfarmer3nid = document.getElementById("pfothersfarmer3nid").innerHTML;
    var pfothersfarmer3date = document.getElementById("pfothersfarmer3date").innerHTML;
    var pfothersfarmer3address = document.getElementById("pfothersfarmer3address").innerHTML;
	var pfothersfarmer3 = document.getElementById("pfothersfarmer3").innerHTML;
    var pfothersfarmer3mobile = document.getElementById("pfothersfarmer3mobile").innerHTML;
    var pfothersfarmer3comment = document.getElementById("pfothersfarmer3comment").innerHTML;
    var pfothersfarmer4variety = document.getElementById("pfothersfarmer4variety").innerHTML;
	var pfothersfarmer4nid = document.getElementById("pfothersfarmer4nid").innerHTML;
    var pfothersfarmer4date = document.getElementById("pfothersfarmer4date").innerHTML;
    var pfothersfarmer4address = document.getElementById("pfothersfarmer4address").innerHTML;
	var pfothersfarmer4 = document.getElementById("pfothersfarmer4").innerHTML;
    var pfothersfarmer4mobile = document.getElementById("pfothersfarmer4mobile").innerHTML;
    var pfothersfarmer4comment = document.getElementById("pfothersfarmer4comment").innerHTML;
    var pfothersfarmer5variety = document.getElementById("pfothersfarmer5variety").innerHTML;
	var pfothersfarmer5nid = document.getElementById("pfothersfarmer5nid").innerHTML;
    var pfothersfarmer5date = document.getElementById("pfothersfarmer5date").innerHTML;
    var pfothersfarmer5address = document.getElementById("pfothersfarmer5address").innerHTML;
	var pfothersfarmer5 = document.getElementById("pfothersfarmer5").innerHTML;
    var pfothersfarmer5mobile = document.getElementById("pfothersfarmer5mobile").innerHTML;
    var pfothersfarmer5comment = document.getElementById("pfothersfarmer5comment").innerHTML;
    var pfothersfarmer6variety = document.getElementById("pfothersfarmer6variety").innerHTML;
	var pfothersfarmer6nid = document.getElementById("pfothersfarmer6nid").innerHTML;
    var pfothersfarmer6date = document.getElementById("pfothersfarmer6date").innerHTML;
    var pfothersfarmer6address = document.getElementById("pfothersfarmer6address").innerHTML;
	var pfothersfarmer6 = document.getElementById("pfothersfarmer6").innerHTML;
    var pfothersfarmer6mobile = document.getElementById("pfothersfarmer6mobile").innerHTML;
    var pfothersfarmer6comment = document.getElementById("pfothersfarmer6comment").innerHTML;
    

    document.getElementById("upazila").value = pfupazila; 
    document.getElementById("district").value = pfdistrict; 
    document.getElementById("division").value = pfdivision;     	
    document.getElementById("blockname").value = pfblockname; 
    document.getElementById("union").value = pfunion; 
    document.getElementById("lastupdate").value = pflastupdate; 
    document.getElementById("othersfarmer1variety").value = pfothersfarmer1variety;
	document.getElementById("othersfarmer1nid").value = pfothersfarmer1nid; 
    document.getElementById("othersfarmer1date").value = pfothersfarmer1date; 
    document.getElementById("othersfarmer1address").value = pfothersfarmer1address;
	document.getElementById("othersfarmer1").value = pfothersfarmer1; 
    document.getElementById("othersfarmer1mobile").value = pfothersfarmer1mobile; 
    document.getElementById("othersfarmer1comment").value = pfothersfarmer1comment; 
    document.getElementById("othersfarmer2variety").value = pfothersfarmer2variety;
	document.getElementById("othersfarmer2nid").value = pfothersfarmer2nid; 
    document.getElementById("othersfarmer2date").value = pfothersfarmer2date; 
    document.getElementById("othersfarmer2address").value = pfothersfarmer2address;
	document.getElementById("othersfarmer2").value = pfothersfarmer2; 
    document.getElementById("othersfarmer2mobile").value = pfothersfarmer2mobile; 
    document.getElementById("othersfarmer2comment").value = pfothersfarmer2comment; 
    document.getElementById("othersfarmer3variety").value = pfothersfarmer3variety;
	document.getElementById("othersfarmer3nid").value = pfothersfarmer3nid; 
    document.getElementById("othersfarmer3date").value = pfothersfarmer3date; 
    document.getElementById("othersfarmer3address").value = pfothersfarmer3address;
	document.getElementById("othersfarmer3").value = pfothersfarmer3; 
    document.getElementById("othersfarmer3mobile").value = pfothersfarmer3mobile; 
    document.getElementById("othersfarmer3comment").value = pfothersfarmer3comment; 
    document.getElementById("othersfarmer4variety").value = pfothersfarmer4variety;
	document.getElementById("othersfarmer4nid").value = pfothersfarmer4nid; 
    document.getElementById("othersfarmer4date").value = pfothersfarmer4date; 
    document.getElementById("othersfarmer4address").value = pfothersfarmer4address;
	document.getElementById("othersfarmer4").value = pfothersfarmer4; 
    document.getElementById("othersfarmer4mobile").value = pfothersfarmer4mobile; 
    document.getElementById("othersfarmer4comment").value = pfothersfarmer4comment; 
    document.getElementById("othersfarmer5variety").value = pfothersfarmer5variety;
	document.getElementById("othersfarmer5nid").value = pfothersfarmer5nid; 
    document.getElementById("othersfarmer5date").value = pfothersfarmer5date; 
    document.getElementById("othersfarmer5address").value = pfothersfarmer5address;
	document.getElementById("othersfarmer5").value = pfothersfarmer5; 
    document.getElementById("othersfarmer5mobile").value = pfothersfarmer5mobile; 
    document.getElementById("othersfarmer5comment").value = pfothersfarmer5comment; 
    document.getElementById("othersfarmer6variety").value = pfothersfarmer6variety;
	document.getElementById("othersfarmer6nid").value = pfothersfarmer6nid; 
    document.getElementById("othersfarmer6date").value = pfothersfarmer6date; 
    document.getElementById("othersfarmer6address").value = pfothersfarmer6address;
	document.getElementById("othersfarmer6").value = pfothersfarmer6; 
    document.getElementById("othersfarmer6mobile").value = pfothersfarmer6mobile; 
    document.getElementById("othersfarmer6comment").value = pfothersfarmer6comment; 
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
    let othersfarmer1variety = document.getElementById("othersfarmer1variety").value
	let othersfarmer1nid = document.getElementById("othersfarmer1nid").value  
    let othersfarmer1date = document.getElementById("othersfarmer1date").value  
    let othersfarmer1address = document.getElementById("othersfarmer1address").value
	let othersfarmer1 = document.getElementById("othersfarmer1").value  
    let othersfarmer1mobile = document.getElementById("othersfarmer1mobile").value  
    let othersfarmer1comment = document.getElementById("othersfarmer1comment").value 
    let othersfarmer2variety = document.getElementById("othersfarmer2variety").value
	let othersfarmer2nid = document.getElementById("othersfarmer2nid").value  
    let othersfarmer2date = document.getElementById("othersfarmer2date").value  
    let othersfarmer2address = document.getElementById("othersfarmer2address").value
	let othersfarmer2 = document.getElementById("othersfarmer2").value  
    let othersfarmer2mobile = document.getElementById("othersfarmer2mobile").value  
    let othersfarmer2comment = document.getElementById("othersfarmer2comment").value 
    let othersfarmer3variety = document.getElementById("othersfarmer3variety").value
	let othersfarmer3nid = document.getElementById("othersfarmer3nid").value  
    let othersfarmer3date = document.getElementById("othersfarmer3date").value  
    let othersfarmer3address = document.getElementById("othersfarmer3address").value
	let othersfarmer3 = document.getElementById("othersfarmer3").value  
    let othersfarmer3mobile = document.getElementById("othersfarmer3mobile").value  
    let othersfarmer3comment = document.getElementById("othersfarmer3comment").value
    let othersfarmer4variety = document.getElementById("othersfarmer4variety").value
	let othersfarmer4nid = document.getElementById("othersfarmer4nid").value  
    let othersfarmer4date = document.getElementById("othersfarmer4date").value  
    let othersfarmer4address = document.getElementById("othersfarmer4address").value
	let othersfarmer4 = document.getElementById("othersfarmer4").value  
    let othersfarmer4mobile = document.getElementById("othersfarmer4mobile").value  
    let othersfarmer4comment = document.getElementById("othersfarmer4comment").value 
    let othersfarmer5variety = document.getElementById("othersfarmer5variety").value
	let othersfarmer5nid = document.getElementById("othersfarmer5nid").value  
    let othersfarmer5date = document.getElementById("othersfarmer5date").value  
    let othersfarmer5address = document.getElementById("othersfarmer5address").value
	let othersfarmer5 = document.getElementById("othersfarmer5").value  
    let othersfarmer5mobile = document.getElementById("othersfarmer5mobile").value  
    let othersfarmer5comment = document.getElementById("othersfarmer5comment").value 
    let othersfarmer6variety = document.getElementById("othersfarmer6variety").value
	let othersfarmer6nid = document.getElementById("othersfarmer6nid").value  
    let othersfarmer6date = document.getElementById("othersfarmer6date").value  
    let othersfarmer6address = document.getElementById("othersfarmer6address").value
	let othersfarmer6 = document.getElementById("othersfarmer6").value  
    let othersfarmer6mobile = document.getElementById("othersfarmer6mobile").value  
    let othersfarmer6comment = document.getElementById("othersfarmer6comment").value
    
 
 
 
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
    }else if(othersfarmer1variety === ""){
        return checkothersfarmer1variety();
    }else if(othersfarmer1nid === ""){
        return checkothersfarmer1nid();
    }else if(othersfarmer1date === ""){
        return checkothersfarmer1date();
    }else if(othersfarmer1address === ""){
        return checkothersfarmer1address();
    }else if(othersfarmer1 === ""){
        return checkothersfarmer1();
    }else if(othersfarmer1mobile === ""){
        return checkothersfarmer1mobile();
    }else if(othersfarmer1comment === ""){
        return checkothersfarmer1comment();
    }else if(othersfarmer2variety === ""){
        return checkothersfarmer2variety();
    }else if(othersfarmer2nid === ""){
        return checkothersfarmer2nid();
    }else if(othersfarmer2date === ""){
        return checkothersfarmer2date();
    }else if(othersfarmer2address === ""){
        return checkothersfarmer2address();
    }else if(othersfarmer2 === ""){
        return checkothersfarmer2();
    }else if(othersfarmer2mobile === ""){
        return checkothersfarmer2mobile();
    }else if(othersfarmer2comment === ""){
        return checkothersfarmer2comment();
    }else if(othersfarmer3variety === ""){
        return checkothersfarmer3variety();
    }else if(othersfarmer3nid === ""){
        return checkothersfarmer3nid();
    }else if(othersfarmer3date === ""){
        return checkothersfarmer3date();
    }else if(othersfarmer3address === ""){
        return checkothersfarmer3address();
    }else if(othersfarmer3 === ""){
        return checkothersfarmer3();
    }else if(othersfarmer3mobile === ""){
        return checkothersfarmer3mobile();
    }else if(othersfarmer3comment === ""){
        return checkothersfarmer3comment();
    }else if(othersfarmer4variety === ""){
        return checkothersfarmer4variety();
    }else if(othersfarmer4nid === ""){
        return checkothersfarmer4nid();
    }else if(othersfarmer4date === ""){
        return checkothersfarmer4date();
    }else if(othersfarmer4address === ""){
        return checkothersfarmer4address();
    }else if(othersfarmer4 === ""){
        return checkothersfarmer4();
    }else if(othersfarmer4mobile === ""){
        return checkothersfarmer4mobile();
    }else if(othersfarmer4comment === ""){
        return checkothersfarmer4comment();
    }else if(othersfarmer5variety === ""){
        return checkothersfarmer5variety();
    }else if(othersfarmer5nid === ""){
        return checkothersfarmer5nid();
    }else if(othersfarmer5date === ""){
        return checkothersfarmer5date();
    }else if(othersfarmer5address === ""){
        return checkothersfarmer5address();
    }else if(othersfarmer5 === ""){
        return checkothersfarmer5();
    }else if(othersfarmer5mobile === ""){
        return checkothersfarmer5mobile();
    }else if(othersfarmer5comment === ""){
        return checkothersfarmer5comment();
    }else if(othersfarmer6variety === ""){
        return checkothersfarmer6variety();
    }else if(othersfarmer6nid === ""){
        return checkothersfarmer6nid();
    }else if(othersfarmer6date === ""){
        return checkothersfarmer6date();
    }else if(othersfarmer6address === ""){
        return checkothersfarmer6address();
    }else if(othersfarmer6 === ""){
        return checkothersfarmer6();
    }else if(othersfarmer6mobile === ""){
        return checkothersfarmer6mobile();
    }else if(othersfarmer6comment === ""){
        return checkothersfarmer6comment();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('projectdemo-others');
        var userData = {
            division: division,
            district: district,
            upazila: upazila,
            blockname: blockname,
            union: union,
            lastupdate: lastupdate,
			
            othersfarmer1variety: othersfarmer1variety,
			othersfarmer1nid: othersfarmer1nid,
            othersfarmer1date: othersfarmer1date,
            othersfarmer1address: othersfarmer1address,
			othersfarmer1: othersfarmer1,
            othersfarmer1mobile: othersfarmer1mobile,
            othersfarmer1comment: othersfarmer1comment,
			
            othersfarmer2variety: othersfarmer2variety,
			othersfarmer2nid: othersfarmer2nid,
            othersfarmer2date: othersfarmer2date,
            othersfarmer2address: othersfarmer2address,
			othersfarmer2: othersfarmer2,
            othersfarmer2mobile: othersfarmer2mobile,
            othersfarmer2comment: othersfarmer2comment,
			
            othersfarmer3variety: othersfarmer3variety,
			othersfarmer3nid: othersfarmer3nid,
            othersfarmer3date: othersfarmer3date,
            othersfarmer3address: othersfarmer3address,
			othersfarmer3: othersfarmer3,
            othersfarmer3mobile: othersfarmer3mobile,
            othersfarmer3comment: othersfarmer3comment,
			
            othersfarmer4variety: othersfarmer4variety,
			othersfarmer4nid: othersfarmer4nid,
            othersfarmer4date: othersfarmer4date,
            othersfarmer4address: othersfarmer4address,
			othersfarmer4: othersfarmer4,
            othersfarmer4mobile: othersfarmer4mobile,
            othersfarmer4comment: othersfarmer4comment,
			
            othersfarmer5variety: othersfarmer5variety,
			othersfarmer5nid: othersfarmer5nid,
            othersfarmer5date: othersfarmer5date,
            othersfarmer5address: othersfarmer5address,
			othersfarmer5: othersfarmer5,
            othersfarmer5mobile: othersfarmer5mobile,
            othersfarmer5comment: othersfarmer5comment,
			
            othersfarmer6variety: othersfarmer6variety,
			othersfarmer6nid: othersfarmer6nid,
            othersfarmer6date: othersfarmer6date,
            othersfarmer6address: othersfarmer6address,
			othersfarmer6: othersfarmer6,
            othersfarmer6mobile: othersfarmer6mobile,
            othersfarmer6comment: othersfarmer6comment,
			
			
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
