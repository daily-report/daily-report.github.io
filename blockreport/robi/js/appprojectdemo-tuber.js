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
        let firebaseRefKey = firebase.database().ref().child('projectdemo-tuber').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
			document.getElementById("pfdivision").innerHTML = dataSnapShot.val().division;
			document.getElementById("pfdistrict").innerHTML = dataSnapShot.val().district;
            document.getElementById("pfupazila").innerHTML = dataSnapShot.val().upazila;
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pftuberfarmer1variety").innerHTML = dataSnapShot.val().tuberfarmer1variety;
			document.getElementById("pftuberfarmer1nid").innerHTML = dataSnapShot.val().tuberfarmer1nid;
            document.getElementById("pftuberfarmer1date").innerHTML = dataSnapShot.val().tuberfarmer1date;
            document.getElementById("pftuberfarmer1address").innerHTML = dataSnapShot.val().tuberfarmer1address;
			document.getElementById("pftuberfarmer1").innerHTML = dataSnapShot.val().tuberfarmer1;
            document.getElementById("pftuberfarmer1mobile").innerHTML = dataSnapShot.val().tuberfarmer1mobile;
            document.getElementById("pftuberfarmer1comment").innerHTML = dataSnapShot.val().tuberfarmer1comment;
            document.getElementById("pftuberfarmer2variety").innerHTML = dataSnapShot.val().tuberfarmer2variety;
			document.getElementById("pftuberfarmer2nid").innerHTML = dataSnapShot.val().tuberfarmer2nid;
            document.getElementById("pftuberfarmer2date").innerHTML = dataSnapShot.val().tuberfarmer2date;
            document.getElementById("pftuberfarmer2address").innerHTML = dataSnapShot.val().tuberfarmer2address;
			document.getElementById("pftuberfarmer2").innerHTML = dataSnapShot.val().tuberfarmer2;
            document.getElementById("pftuberfarmer2mobile").innerHTML = dataSnapShot.val().tuberfarmer2mobile;
            document.getElementById("pftuberfarmer2comment").innerHTML = dataSnapShot.val().tuberfarmer2comment;
            document.getElementById("pftuberfarmer3variety").innerHTML = dataSnapShot.val().tuberfarmer3variety;
			document.getElementById("pftuberfarmer3nid").innerHTML = dataSnapShot.val().tuberfarmer3nid;
            document.getElementById("pftuberfarmer3date").innerHTML = dataSnapShot.val().tuberfarmer3date;
            document.getElementById("pftuberfarmer3address").innerHTML = dataSnapShot.val().tuberfarmer3address;
			document.getElementById("pftuberfarmer3").innerHTML = dataSnapShot.val().tuberfarmer3;
            document.getElementById("pftuberfarmer3mobile").innerHTML = dataSnapShot.val().tuberfarmer3mobile;
            document.getElementById("pftuberfarmer3comment").innerHTML = dataSnapShot.val().tuberfarmer3comment;
            document.getElementById("pftuberfarmer4variety").innerHTML = dataSnapShot.val().tuberfarmer4variety;
			document.getElementById("pftuberfarmer4nid").innerHTML = dataSnapShot.val().tuberfarmer4nid;
            document.getElementById("pftuberfarmer4date").innerHTML = dataSnapShot.val().tuberfarmer4date;
            document.getElementById("pftuberfarmer4address").innerHTML = dataSnapShot.val().tuberfarmer4address;
			document.getElementById("pftuberfarmer4").innerHTML = dataSnapShot.val().tuberfarmer4;
            document.getElementById("pftuberfarmer4mobile").innerHTML = dataSnapShot.val().tuberfarmer4mobile;
            document.getElementById("pftuberfarmer4comment").innerHTML = dataSnapShot.val().tuberfarmer4comment;
            document.getElementById("pftuberfarmer5variety").innerHTML = dataSnapShot.val().tuberfarmer5variety;
			document.getElementById("pftuberfarmer5nid").innerHTML = dataSnapShot.val().tuberfarmer5nid;
            document.getElementById("pftuberfarmer5date").innerHTML = dataSnapShot.val().tuberfarmer5date;
            document.getElementById("pftuberfarmer5address").innerHTML = dataSnapShot.val().tuberfarmer5address;
			document.getElementById("pftuberfarmer5").innerHTML = dataSnapShot.val().tuberfarmer5;
            document.getElementById("pftuberfarmer5mobile").innerHTML = dataSnapShot.val().tuberfarmer5mobile;
            document.getElementById("pftuberfarmer5comment").innerHTML = dataSnapShot.val().tuberfarmer5comment;
            document.getElementById("pftuberfarmer6variety").innerHTML = dataSnapShot.val().tuberfarmer6variety;
			document.getElementById("pftuberfarmer6nid").innerHTML = dataSnapShot.val().tuberfarmer6nid;
            document.getElementById("pftuberfarmer6date").innerHTML = dataSnapShot.val().tuberfarmer6date;
            document.getElementById("pftuberfarmer6address").innerHTML = dataSnapShot.val().tuberfarmer6address;
			document.getElementById("pftuberfarmer6").innerHTML = dataSnapShot.val().tuberfarmer6;
            document.getElementById("pftuberfarmer6mobile").innerHTML = dataSnapShot.val().tuberfarmer6mobile;
            document.getElementById("pftuberfarmer6comment").innerHTML = dataSnapShot.val().tuberfarmer6comment;
			
			
            
			
			
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
    var pftuberfarmer1variety = document.getElementById("pftuberfarmer1variety").innerHTML;
	var pftuberfarmer1nid = document.getElementById("pftuberfarmer1nid").innerHTML;
    var pftuberfarmer1date = document.getElementById("pftuberfarmer1date").innerHTML;
    var pftuberfarmer1address = document.getElementById("pftuberfarmer1address").innerHTML;
	var pftuberfarmer1 = document.getElementById("pftuberfarmer1").innerHTML;
    var pftuberfarmer1mobile = document.getElementById("pftuberfarmer1mobile").innerHTML;
    var pftuberfarmer1comment = document.getElementById("pftuberfarmer1comment").innerHTML;
    var pftuberfarmer2variety = document.getElementById("pftuberfarmer2variety").innerHTML;
	var pftuberfarmer2nid = document.getElementById("pftuberfarmer2nid").innerHTML;
    var pftuberfarmer2date = document.getElementById("pftuberfarmer2date").innerHTML;
    var pftuberfarmer2address = document.getElementById("pftuberfarmer2address").innerHTML;
	var pftuberfarmer2 = document.getElementById("pftuberfarmer2").innerHTML;
    var pftuberfarmer2mobile = document.getElementById("pftuberfarmer2mobile").innerHTML;
    var pftuberfarmer2comment = document.getElementById("pftuberfarmer2comment").innerHTML;
    var pftuberfarmer3variety = document.getElementById("pftuberfarmer3variety").innerHTML;
	var pftuberfarmer3nid = document.getElementById("pftuberfarmer3nid").innerHTML;
    var pftuberfarmer3date = document.getElementById("pftuberfarmer3date").innerHTML;
    var pftuberfarmer3address = document.getElementById("pftuberfarmer3address").innerHTML;
	var pftuberfarmer3 = document.getElementById("pftuberfarmer3").innerHTML;
    var pftuberfarmer3mobile = document.getElementById("pftuberfarmer3mobile").innerHTML;
    var pftuberfarmer3comment = document.getElementById("pftuberfarmer3comment").innerHTML;
    var pftuberfarmer4variety = document.getElementById("pftuberfarmer4variety").innerHTML;
	var pftuberfarmer4nid = document.getElementById("pftuberfarmer4nid").innerHTML;
    var pftuberfarmer4date = document.getElementById("pftuberfarmer4date").innerHTML;
    var pftuberfarmer4address = document.getElementById("pftuberfarmer4address").innerHTML;
	var pftuberfarmer4 = document.getElementById("pftuberfarmer4").innerHTML;
    var pftuberfarmer4mobile = document.getElementById("pftuberfarmer4mobile").innerHTML;
    var pftuberfarmer4comment = document.getElementById("pftuberfarmer4comment").innerHTML;
    var pftuberfarmer5variety = document.getElementById("pftuberfarmer5variety").innerHTML;
	var pftuberfarmer5nid = document.getElementById("pftuberfarmer5nid").innerHTML;
    var pftuberfarmer5date = document.getElementById("pftuberfarmer5date").innerHTML;
    var pftuberfarmer5address = document.getElementById("pftuberfarmer5address").innerHTML;
	var pftuberfarmer5 = document.getElementById("pftuberfarmer5").innerHTML;
    var pftuberfarmer5mobile = document.getElementById("pftuberfarmer5mobile").innerHTML;
    var pftuberfarmer5comment = document.getElementById("pftuberfarmer5comment").innerHTML;
    var pftuberfarmer6variety = document.getElementById("pftuberfarmer6variety").innerHTML;
	var pftuberfarmer6nid = document.getElementById("pftuberfarmer6nid").innerHTML;
    var pftuberfarmer6date = document.getElementById("pftuberfarmer6date").innerHTML;
    var pftuberfarmer6address = document.getElementById("pftuberfarmer6address").innerHTML;
	var pftuberfarmer6 = document.getElementById("pftuberfarmer6").innerHTML;
    var pftuberfarmer6mobile = document.getElementById("pftuberfarmer6mobile").innerHTML;
    var pftuberfarmer6comment = document.getElementById("pftuberfarmer6comment").innerHTML;
    

    document.getElementById("upazila").value = pfupazila; 
    document.getElementById("district").value = pfdistrict; 
    document.getElementById("division").value = pfdivision;     	
    document.getElementById("blockname").value = pfblockname; 
    document.getElementById("union").value = pfunion; 
    document.getElementById("lastupdate").value = pflastupdate; 
    document.getElementById("tuberfarmer1variety").value = pftuberfarmer1variety;
	document.getElementById("tuberfarmer1nid").value = pftuberfarmer1nid; 
    document.getElementById("tuberfarmer1date").value = pftuberfarmer1date; 
    document.getElementById("tuberfarmer1address").value = pftuberfarmer1address;
	document.getElementById("tuberfarmer1").value = pftuberfarmer1; 
    document.getElementById("tuberfarmer1mobile").value = pftuberfarmer1mobile; 
    document.getElementById("tuberfarmer1comment").value = pftuberfarmer1comment; 
    document.getElementById("tuberfarmer2variety").value = pftuberfarmer2variety;
	document.getElementById("tuberfarmer2nid").value = pftuberfarmer2nid; 
    document.getElementById("tuberfarmer2date").value = pftuberfarmer2date; 
    document.getElementById("tuberfarmer2address").value = pftuberfarmer2address;
	document.getElementById("tuberfarmer2").value = pftuberfarmer2; 
    document.getElementById("tuberfarmer2mobile").value = pftuberfarmer2mobile; 
    document.getElementById("tuberfarmer2comment").value = pftuberfarmer2comment; 
    document.getElementById("tuberfarmer3variety").value = pftuberfarmer3variety;
	document.getElementById("tuberfarmer3nid").value = pftuberfarmer3nid; 
    document.getElementById("tuberfarmer3date").value = pftuberfarmer3date; 
    document.getElementById("tuberfarmer3address").value = pftuberfarmer3address;
	document.getElementById("tuberfarmer3").value = pftuberfarmer3; 
    document.getElementById("tuberfarmer3mobile").value = pftuberfarmer3mobile; 
    document.getElementById("tuberfarmer3comment").value = pftuberfarmer3comment; 
    document.getElementById("tuberfarmer4variety").value = pftuberfarmer4variety;
	document.getElementById("tuberfarmer4nid").value = pftuberfarmer4nid; 
    document.getElementById("tuberfarmer4date").value = pftuberfarmer4date; 
    document.getElementById("tuberfarmer4address").value = pftuberfarmer4address;
	document.getElementById("tuberfarmer4").value = pftuberfarmer4; 
    document.getElementById("tuberfarmer4mobile").value = pftuberfarmer4mobile; 
    document.getElementById("tuberfarmer4comment").value = pftuberfarmer4comment; 
    document.getElementById("tuberfarmer5variety").value = pftuberfarmer5variety;
	document.getElementById("tuberfarmer5nid").value = pftuberfarmer5nid; 
    document.getElementById("tuberfarmer5date").value = pftuberfarmer5date; 
    document.getElementById("tuberfarmer5address").value = pftuberfarmer5address;
	document.getElementById("tuberfarmer5").value = pftuberfarmer5; 
    document.getElementById("tuberfarmer5mobile").value = pftuberfarmer5mobile; 
    document.getElementById("tuberfarmer5comment").value = pftuberfarmer5comment; 
    document.getElementById("tuberfarmer6variety").value = pftuberfarmer6variety;
	document.getElementById("tuberfarmer6nid").value = pftuberfarmer6nid; 
    document.getElementById("tuberfarmer6date").value = pftuberfarmer6date; 
    document.getElementById("tuberfarmer6address").value = pftuberfarmer6address;
	document.getElementById("tuberfarmer6").value = pftuberfarmer6; 
    document.getElementById("tuberfarmer6mobile").value = pftuberfarmer6mobile; 
    document.getElementById("tuberfarmer6comment").value = pftuberfarmer6comment; 
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
    let tuberfarmer1variety = document.getElementById("tuberfarmer1variety").value
	let tuberfarmer1nid = document.getElementById("tuberfarmer1nid").value  
    let tuberfarmer1date = document.getElementById("tuberfarmer1date").value  
    let tuberfarmer1address = document.getElementById("tuberfarmer1address").value
	let tuberfarmer1 = document.getElementById("tuberfarmer1").value  
    let tuberfarmer1mobile = document.getElementById("tuberfarmer1mobile").value  
    let tuberfarmer1comment = document.getElementById("tuberfarmer1comment").value 
    let tuberfarmer2variety = document.getElementById("tuberfarmer2variety").value
	let tuberfarmer2nid = document.getElementById("tuberfarmer2nid").value  
    let tuberfarmer2date = document.getElementById("tuberfarmer2date").value  
    let tuberfarmer2address = document.getElementById("tuberfarmer2address").value
	let tuberfarmer2 = document.getElementById("tuberfarmer2").value  
    let tuberfarmer2mobile = document.getElementById("tuberfarmer2mobile").value  
    let tuberfarmer2comment = document.getElementById("tuberfarmer2comment").value 
    let tuberfarmer3variety = document.getElementById("tuberfarmer3variety").value
	let tuberfarmer3nid = document.getElementById("tuberfarmer3nid").value  
    let tuberfarmer3date = document.getElementById("tuberfarmer3date").value  
    let tuberfarmer3address = document.getElementById("tuberfarmer3address").value
	let tuberfarmer3 = document.getElementById("tuberfarmer3").value  
    let tuberfarmer3mobile = document.getElementById("tuberfarmer3mobile").value  
    let tuberfarmer3comment = document.getElementById("tuberfarmer3comment").value
    let tuberfarmer4variety = document.getElementById("tuberfarmer4variety").value
	let tuberfarmer4nid = document.getElementById("tuberfarmer4nid").value  
    let tuberfarmer4date = document.getElementById("tuberfarmer4date").value  
    let tuberfarmer4address = document.getElementById("tuberfarmer4address").value
	let tuberfarmer4 = document.getElementById("tuberfarmer4").value  
    let tuberfarmer4mobile = document.getElementById("tuberfarmer4mobile").value  
    let tuberfarmer4comment = document.getElementById("tuberfarmer4comment").value 
    let tuberfarmer5variety = document.getElementById("tuberfarmer5variety").value
	let tuberfarmer5nid = document.getElementById("tuberfarmer5nid").value  
    let tuberfarmer5date = document.getElementById("tuberfarmer5date").value  
    let tuberfarmer5address = document.getElementById("tuberfarmer5address").value
	let tuberfarmer5 = document.getElementById("tuberfarmer5").value  
    let tuberfarmer5mobile = document.getElementById("tuberfarmer5mobile").value  
    let tuberfarmer5comment = document.getElementById("tuberfarmer5comment").value 
    let tuberfarmer6variety = document.getElementById("tuberfarmer6variety").value
	let tuberfarmer6nid = document.getElementById("tuberfarmer6nid").value  
    let tuberfarmer6date = document.getElementById("tuberfarmer6date").value  
    let tuberfarmer6address = document.getElementById("tuberfarmer6address").value
	let tuberfarmer6 = document.getElementById("tuberfarmer6").value  
    let tuberfarmer6mobile = document.getElementById("tuberfarmer6mobile").value  
    let tuberfarmer6comment = document.getElementById("tuberfarmer6comment").value
    
 
 
 
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
    }else if(tuberfarmer1variety === ""){
        return checktuberfarmer1variety();
    }else if(tuberfarmer1nid === ""){
        return checktuberfarmer1nid();
    }else if(tuberfarmer1date === ""){
        return checktuberfarmer1date();
    }else if(tuberfarmer1address === ""){
        return checktuberfarmer1address();
    }else if(tuberfarmer1 === ""){
        return checktuberfarmer1();
    }else if(tuberfarmer1mobile === ""){
        return checktuberfarmer1mobile();
    }else if(tuberfarmer1comment === ""){
        return checktuberfarmer1comment();
    }else if(tuberfarmer2variety === ""){
        return checktuberfarmer2variety();
    }else if(tuberfarmer2nid === ""){
        return checktuberfarmer2nid();
    }else if(tuberfarmer2date === ""){
        return checktuberfarmer2date();
    }else if(tuberfarmer2address === ""){
        return checktuberfarmer2address();
    }else if(tuberfarmer2 === ""){
        return checktuberfarmer2();
    }else if(tuberfarmer2mobile === ""){
        return checktuberfarmer2mobile();
    }else if(tuberfarmer2comment === ""){
        return checktuberfarmer2comment();
    }else if(tuberfarmer3variety === ""){
        return checktuberfarmer3variety();
    }else if(tuberfarmer3nid === ""){
        return checktuberfarmer3nid();
    }else if(tuberfarmer3date === ""){
        return checktuberfarmer3date();
    }else if(tuberfarmer3address === ""){
        return checktuberfarmer3address();
    }else if(tuberfarmer3 === ""){
        return checktuberfarmer3();
    }else if(tuberfarmer3mobile === ""){
        return checktuberfarmer3mobile();
    }else if(tuberfarmer3comment === ""){
        return checktuberfarmer3comment();
    }else if(tuberfarmer4variety === ""){
        return checktuberfarmer4variety();
    }else if(tuberfarmer4nid === ""){
        return checktuberfarmer4nid();
    }else if(tuberfarmer4date === ""){
        return checktuberfarmer4date();
    }else if(tuberfarmer4address === ""){
        return checktuberfarmer4address();
    }else if(tuberfarmer4 === ""){
        return checktuberfarmer4();
    }else if(tuberfarmer4mobile === ""){
        return checktuberfarmer4mobile();
    }else if(tuberfarmer4comment === ""){
        return checktuberfarmer4comment();
    }else if(tuberfarmer5variety === ""){
        return checktuberfarmer5variety();
    }else if(tuberfarmer5nid === ""){
        return checktuberfarmer5nid();
    }else if(tuberfarmer5date === ""){
        return checktuberfarmer5date();
    }else if(tuberfarmer5address === ""){
        return checktuberfarmer5address();
    }else if(tuberfarmer5 === ""){
        return checktuberfarmer5();
    }else if(tuberfarmer5mobile === ""){
        return checktuberfarmer5mobile();
    }else if(tuberfarmer5comment === ""){
        return checktuberfarmer5comment();
    }else if(tuberfarmer6variety === ""){
        return checktuberfarmer6variety();
    }else if(tuberfarmer6nid === ""){
        return checktuberfarmer6nid();
    }else if(tuberfarmer6date === ""){
        return checktuberfarmer6date();
    }else if(tuberfarmer6address === ""){
        return checktuberfarmer6address();
    }else if(tuberfarmer6 === ""){
        return checktuberfarmer6();
    }else if(tuberfarmer6mobile === ""){
        return checktuberfarmer6mobile();
    }else if(tuberfarmer6comment === ""){
        return checktuberfarmer6comment();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('projectdemo-tuber');
        var userData = {
            division: division,
            district: district,
            upazila: upazila,
            blockname: blockname,
            union: union,
            lastupdate: lastupdate,
			
            tuberfarmer1variety: tuberfarmer1variety,
			tuberfarmer1nid: tuberfarmer1nid,
            tuberfarmer1date: tuberfarmer1date,
            tuberfarmer1address: tuberfarmer1address,
			tuberfarmer1: tuberfarmer1,
            tuberfarmer1mobile: tuberfarmer1mobile,
            tuberfarmer1comment: tuberfarmer1comment,
			
            tuberfarmer2variety: tuberfarmer2variety,
			tuberfarmer2nid: tuberfarmer2nid,
            tuberfarmer2date: tuberfarmer2date,
            tuberfarmer2address: tuberfarmer2address,
			tuberfarmer2: tuberfarmer2,
            tuberfarmer2mobile: tuberfarmer2mobile,
            tuberfarmer2comment: tuberfarmer2comment,
			
            tuberfarmer3variety: tuberfarmer3variety,
			tuberfarmer3nid: tuberfarmer3nid,
            tuberfarmer3date: tuberfarmer3date,
            tuberfarmer3address: tuberfarmer3address,
			tuberfarmer3: tuberfarmer3,
            tuberfarmer3mobile: tuberfarmer3mobile,
            tuberfarmer3comment: tuberfarmer3comment,
			
            tuberfarmer4variety: tuberfarmer4variety,
			tuberfarmer4nid: tuberfarmer4nid,
            tuberfarmer4date: tuberfarmer4date,
            tuberfarmer4address: tuberfarmer4address,
			tuberfarmer4: tuberfarmer4,
            tuberfarmer4mobile: tuberfarmer4mobile,
            tuberfarmer4comment: tuberfarmer4comment,
			
            tuberfarmer5variety: tuberfarmer5variety,
			tuberfarmer5nid: tuberfarmer5nid,
            tuberfarmer5date: tuberfarmer5date,
            tuberfarmer5address: tuberfarmer5address,
			tuberfarmer5: tuberfarmer5,
            tuberfarmer5mobile: tuberfarmer5mobile,
            tuberfarmer5comment: tuberfarmer5comment,
			
            tuberfarmer6variety: tuberfarmer6variety,
			tuberfarmer6nid: tuberfarmer6nid,
            tuberfarmer6date: tuberfarmer6date,
            tuberfarmer6address: tuberfarmer6address,
			tuberfarmer6: tuberfarmer6,
            tuberfarmer6mobile: tuberfarmer6mobile,
            tuberfarmer6comment: tuberfarmer6comment,
			
			
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
