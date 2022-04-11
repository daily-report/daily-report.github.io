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
        let firebaseRefKey = firebase.database().ref().child('projectdemo-oilcrop').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
			document.getElementById("pfdivision").innerHTML = dataSnapShot.val().division;
			document.getElementById("pfdistrict").innerHTML = dataSnapShot.val().district;
            document.getElementById("pfupazila").innerHTML = dataSnapShot.val().upazila;
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfoilcropfarmer1variety").innerHTML = dataSnapShot.val().oilcropfarmer1variety;
			document.getElementById("pfoilcropfarmer1nid").innerHTML = dataSnapShot.val().oilcropfarmer1nid;
            document.getElementById("pfoilcropfarmer1date").innerHTML = dataSnapShot.val().oilcropfarmer1date;
            document.getElementById("pfoilcropfarmer1address").innerHTML = dataSnapShot.val().oilcropfarmer1address;
			document.getElementById("pfoilcropfarmer1").innerHTML = dataSnapShot.val().oilcropfarmer1;
            document.getElementById("pfoilcropfarmer1mobile").innerHTML = dataSnapShot.val().oilcropfarmer1mobile;
            document.getElementById("pfoilcropfarmer1comment").innerHTML = dataSnapShot.val().oilcropfarmer1comment;
            document.getElementById("pfoilcropfarmer2variety").innerHTML = dataSnapShot.val().oilcropfarmer2variety;
			document.getElementById("pfoilcropfarmer2nid").innerHTML = dataSnapShot.val().oilcropfarmer2nid;
            document.getElementById("pfoilcropfarmer2date").innerHTML = dataSnapShot.val().oilcropfarmer2date;
            document.getElementById("pfoilcropfarmer2address").innerHTML = dataSnapShot.val().oilcropfarmer2address;
			document.getElementById("pfoilcropfarmer2").innerHTML = dataSnapShot.val().oilcropfarmer2;
            document.getElementById("pfoilcropfarmer2mobile").innerHTML = dataSnapShot.val().oilcropfarmer2mobile;
            document.getElementById("pfoilcropfarmer2comment").innerHTML = dataSnapShot.val().oilcropfarmer2comment;
            document.getElementById("pfoilcropfarmer3variety").innerHTML = dataSnapShot.val().oilcropfarmer3variety;
			document.getElementById("pfoilcropfarmer3nid").innerHTML = dataSnapShot.val().oilcropfarmer3nid;
            document.getElementById("pfoilcropfarmer3date").innerHTML = dataSnapShot.val().oilcropfarmer3date;
            document.getElementById("pfoilcropfarmer3address").innerHTML = dataSnapShot.val().oilcropfarmer3address;
			document.getElementById("pfoilcropfarmer3").innerHTML = dataSnapShot.val().oilcropfarmer3;
            document.getElementById("pfoilcropfarmer3mobile").innerHTML = dataSnapShot.val().oilcropfarmer3mobile;
            document.getElementById("pfoilcropfarmer3comment").innerHTML = dataSnapShot.val().oilcropfarmer3comment;
            document.getElementById("pfoilcropfarmer4variety").innerHTML = dataSnapShot.val().oilcropfarmer4variety;
			document.getElementById("pfoilcropfarmer4nid").innerHTML = dataSnapShot.val().oilcropfarmer4nid;
            document.getElementById("pfoilcropfarmer4date").innerHTML = dataSnapShot.val().oilcropfarmer4date;
            document.getElementById("pfoilcropfarmer4address").innerHTML = dataSnapShot.val().oilcropfarmer4address;
			document.getElementById("pfoilcropfarmer4").innerHTML = dataSnapShot.val().oilcropfarmer4;
            document.getElementById("pfoilcropfarmer4mobile").innerHTML = dataSnapShot.val().oilcropfarmer4mobile;
            document.getElementById("pfoilcropfarmer4comment").innerHTML = dataSnapShot.val().oilcropfarmer4comment;
            document.getElementById("pfoilcropfarmer5variety").innerHTML = dataSnapShot.val().oilcropfarmer5variety;
			document.getElementById("pfoilcropfarmer5nid").innerHTML = dataSnapShot.val().oilcropfarmer5nid;
            document.getElementById("pfoilcropfarmer5date").innerHTML = dataSnapShot.val().oilcropfarmer5date;
            document.getElementById("pfoilcropfarmer5address").innerHTML = dataSnapShot.val().oilcropfarmer5address;
			document.getElementById("pfoilcropfarmer5").innerHTML = dataSnapShot.val().oilcropfarmer5;
            document.getElementById("pfoilcropfarmer5mobile").innerHTML = dataSnapShot.val().oilcropfarmer5mobile;
            document.getElementById("pfoilcropfarmer5comment").innerHTML = dataSnapShot.val().oilcropfarmer5comment;
            document.getElementById("pfoilcropfarmer6variety").innerHTML = dataSnapShot.val().oilcropfarmer6variety;
			document.getElementById("pfoilcropfarmer6nid").innerHTML = dataSnapShot.val().oilcropfarmer6nid;
            document.getElementById("pfoilcropfarmer6date").innerHTML = dataSnapShot.val().oilcropfarmer6date;
            document.getElementById("pfoilcropfarmer6address").innerHTML = dataSnapShot.val().oilcropfarmer6address;
			document.getElementById("pfoilcropfarmer6").innerHTML = dataSnapShot.val().oilcropfarmer6;
            document.getElementById("pfoilcropfarmer6mobile").innerHTML = dataSnapShot.val().oilcropfarmer6mobile;
            document.getElementById("pfoilcropfarmer6comment").innerHTML = dataSnapShot.val().oilcropfarmer6comment;
			
			
            
			
			
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
    var pfoilcropfarmer1variety = document.getElementById("pfoilcropfarmer1variety").innerHTML;
	var pfoilcropfarmer1nid = document.getElementById("pfoilcropfarmer1nid").innerHTML;
    var pfoilcropfarmer1date = document.getElementById("pfoilcropfarmer1date").innerHTML;
    var pfoilcropfarmer1address = document.getElementById("pfoilcropfarmer1address").innerHTML;
	var pfoilcropfarmer1 = document.getElementById("pfoilcropfarmer1").innerHTML;
    var pfoilcropfarmer1mobile = document.getElementById("pfoilcropfarmer1mobile").innerHTML;
    var pfoilcropfarmer1comment = document.getElementById("pfoilcropfarmer1comment").innerHTML;
    var pfoilcropfarmer2variety = document.getElementById("pfoilcropfarmer2variety").innerHTML;
	var pfoilcropfarmer2nid = document.getElementById("pfoilcropfarmer2nid").innerHTML;
    var pfoilcropfarmer2date = document.getElementById("pfoilcropfarmer2date").innerHTML;
    var pfoilcropfarmer2address = document.getElementById("pfoilcropfarmer2address").innerHTML;
	var pfoilcropfarmer2 = document.getElementById("pfoilcropfarmer2").innerHTML;
    var pfoilcropfarmer2mobile = document.getElementById("pfoilcropfarmer2mobile").innerHTML;
    var pfoilcropfarmer2comment = document.getElementById("pfoilcropfarmer2comment").innerHTML;
    var pfoilcropfarmer3variety = document.getElementById("pfoilcropfarmer3variety").innerHTML;
	var pfoilcropfarmer3nid = document.getElementById("pfoilcropfarmer3nid").innerHTML;
    var pfoilcropfarmer3date = document.getElementById("pfoilcropfarmer3date").innerHTML;
    var pfoilcropfarmer3address = document.getElementById("pfoilcropfarmer3address").innerHTML;
	var pfoilcropfarmer3 = document.getElementById("pfoilcropfarmer3").innerHTML;
    var pfoilcropfarmer3mobile = document.getElementById("pfoilcropfarmer3mobile").innerHTML;
    var pfoilcropfarmer3comment = document.getElementById("pfoilcropfarmer3comment").innerHTML;
    var pfoilcropfarmer4variety = document.getElementById("pfoilcropfarmer4variety").innerHTML;
	var pfoilcropfarmer4nid = document.getElementById("pfoilcropfarmer4nid").innerHTML;
    var pfoilcropfarmer4date = document.getElementById("pfoilcropfarmer4date").innerHTML;
    var pfoilcropfarmer4address = document.getElementById("pfoilcropfarmer4address").innerHTML;
	var pfoilcropfarmer4 = document.getElementById("pfoilcropfarmer4").innerHTML;
    var pfoilcropfarmer4mobile = document.getElementById("pfoilcropfarmer4mobile").innerHTML;
    var pfoilcropfarmer4comment = document.getElementById("pfoilcropfarmer4comment").innerHTML;
    var pfoilcropfarmer5variety = document.getElementById("pfoilcropfarmer5variety").innerHTML;
	var pfoilcropfarmer5nid = document.getElementById("pfoilcropfarmer5nid").innerHTML;
    var pfoilcropfarmer5date = document.getElementById("pfoilcropfarmer5date").innerHTML;
    var pfoilcropfarmer5address = document.getElementById("pfoilcropfarmer5address").innerHTML;
	var pfoilcropfarmer5 = document.getElementById("pfoilcropfarmer5").innerHTML;
    var pfoilcropfarmer5mobile = document.getElementById("pfoilcropfarmer5mobile").innerHTML;
    var pfoilcropfarmer5comment = document.getElementById("pfoilcropfarmer5comment").innerHTML;
    var pfoilcropfarmer6variety = document.getElementById("pfoilcropfarmer6variety").innerHTML;
	var pfoilcropfarmer6nid = document.getElementById("pfoilcropfarmer6nid").innerHTML;
    var pfoilcropfarmer6date = document.getElementById("pfoilcropfarmer6date").innerHTML;
    var pfoilcropfarmer6address = document.getElementById("pfoilcropfarmer6address").innerHTML;
	var pfoilcropfarmer6 = document.getElementById("pfoilcropfarmer6").innerHTML;
    var pfoilcropfarmer6mobile = document.getElementById("pfoilcropfarmer6mobile").innerHTML;
    var pfoilcropfarmer6comment = document.getElementById("pfoilcropfarmer6comment").innerHTML;
    

    document.getElementById("upazila").value = pfupazila; 
    document.getElementById("district").value = pfdistrict; 
    document.getElementById("division").value = pfdivision;     	
    document.getElementById("blockname").value = pfblockname; 
    document.getElementById("union").value = pfunion; 
    document.getElementById("lastupdate").value = pflastupdate; 
    document.getElementById("oilcropfarmer1variety").value = pfoilcropfarmer1variety;
	document.getElementById("oilcropfarmer1nid").value = pfoilcropfarmer1nid; 
    document.getElementById("oilcropfarmer1date").value = pfoilcropfarmer1date; 
    document.getElementById("oilcropfarmer1address").value = pfoilcropfarmer1address;
	document.getElementById("oilcropfarmer1").value = pfoilcropfarmer1; 
    document.getElementById("oilcropfarmer1mobile").value = pfoilcropfarmer1mobile; 
    document.getElementById("oilcropfarmer1comment").value = pfoilcropfarmer1comment; 
    document.getElementById("oilcropfarmer2variety").value = pfoilcropfarmer2variety;
	document.getElementById("oilcropfarmer2nid").value = pfoilcropfarmer2nid; 
    document.getElementById("oilcropfarmer2date").value = pfoilcropfarmer2date; 
    document.getElementById("oilcropfarmer2address").value = pfoilcropfarmer2address;
	document.getElementById("oilcropfarmer2").value = pfoilcropfarmer2; 
    document.getElementById("oilcropfarmer2mobile").value = pfoilcropfarmer2mobile; 
    document.getElementById("oilcropfarmer2comment").value = pfoilcropfarmer2comment; 
    document.getElementById("oilcropfarmer3variety").value = pfoilcropfarmer3variety;
	document.getElementById("oilcropfarmer3nid").value = pfoilcropfarmer3nid; 
    document.getElementById("oilcropfarmer3date").value = pfoilcropfarmer3date; 
    document.getElementById("oilcropfarmer3address").value = pfoilcropfarmer3address;
	document.getElementById("oilcropfarmer3").value = pfoilcropfarmer3; 
    document.getElementById("oilcropfarmer3mobile").value = pfoilcropfarmer3mobile; 
    document.getElementById("oilcropfarmer3comment").value = pfoilcropfarmer3comment; 
    document.getElementById("oilcropfarmer4variety").value = pfoilcropfarmer4variety;
	document.getElementById("oilcropfarmer4nid").value = pfoilcropfarmer4nid; 
    document.getElementById("oilcropfarmer4date").value = pfoilcropfarmer4date; 
    document.getElementById("oilcropfarmer4address").value = pfoilcropfarmer4address;
	document.getElementById("oilcropfarmer4").value = pfoilcropfarmer4; 
    document.getElementById("oilcropfarmer4mobile").value = pfoilcropfarmer4mobile; 
    document.getElementById("oilcropfarmer4comment").value = pfoilcropfarmer4comment; 
    document.getElementById("oilcropfarmer5variety").value = pfoilcropfarmer5variety;
	document.getElementById("oilcropfarmer5nid").value = pfoilcropfarmer5nid; 
    document.getElementById("oilcropfarmer5date").value = pfoilcropfarmer5date; 
    document.getElementById("oilcropfarmer5address").value = pfoilcropfarmer5address;
	document.getElementById("oilcropfarmer5").value = pfoilcropfarmer5; 
    document.getElementById("oilcropfarmer5mobile").value = pfoilcropfarmer5mobile; 
    document.getElementById("oilcropfarmer5comment").value = pfoilcropfarmer5comment; 
    document.getElementById("oilcropfarmer6variety").value = pfoilcropfarmer6variety;
	document.getElementById("oilcropfarmer6nid").value = pfoilcropfarmer6nid; 
    document.getElementById("oilcropfarmer6date").value = pfoilcropfarmer6date; 
    document.getElementById("oilcropfarmer6address").value = pfoilcropfarmer6address;
	document.getElementById("oilcropfarmer6").value = pfoilcropfarmer6; 
    document.getElementById("oilcropfarmer6mobile").value = pfoilcropfarmer6mobile; 
    document.getElementById("oilcropfarmer6comment").value = pfoilcropfarmer6comment; 
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
    let oilcropfarmer1variety = document.getElementById("oilcropfarmer1variety").value
	let oilcropfarmer1nid = document.getElementById("oilcropfarmer1nid").value  
    let oilcropfarmer1date = document.getElementById("oilcropfarmer1date").value  
    let oilcropfarmer1address = document.getElementById("oilcropfarmer1address").value
	let oilcropfarmer1 = document.getElementById("oilcropfarmer1").value  
    let oilcropfarmer1mobile = document.getElementById("oilcropfarmer1mobile").value  
    let oilcropfarmer1comment = document.getElementById("oilcropfarmer1comment").value 
    let oilcropfarmer2variety = document.getElementById("oilcropfarmer2variety").value
	let oilcropfarmer2nid = document.getElementById("oilcropfarmer2nid").value  
    let oilcropfarmer2date = document.getElementById("oilcropfarmer2date").value  
    let oilcropfarmer2address = document.getElementById("oilcropfarmer2address").value
	let oilcropfarmer2 = document.getElementById("oilcropfarmer2").value  
    let oilcropfarmer2mobile = document.getElementById("oilcropfarmer2mobile").value  
    let oilcropfarmer2comment = document.getElementById("oilcropfarmer2comment").value 
    let oilcropfarmer3variety = document.getElementById("oilcropfarmer3variety").value
	let oilcropfarmer3nid = document.getElementById("oilcropfarmer3nid").value  
    let oilcropfarmer3date = document.getElementById("oilcropfarmer3date").value  
    let oilcropfarmer3address = document.getElementById("oilcropfarmer3address").value
	let oilcropfarmer3 = document.getElementById("oilcropfarmer3").value  
    let oilcropfarmer3mobile = document.getElementById("oilcropfarmer3mobile").value  
    let oilcropfarmer3comment = document.getElementById("oilcropfarmer3comment").value
    let oilcropfarmer4variety = document.getElementById("oilcropfarmer4variety").value
	let oilcropfarmer4nid = document.getElementById("oilcropfarmer4nid").value  
    let oilcropfarmer4date = document.getElementById("oilcropfarmer4date").value  
    let oilcropfarmer4address = document.getElementById("oilcropfarmer4address").value
	let oilcropfarmer4 = document.getElementById("oilcropfarmer4").value  
    let oilcropfarmer4mobile = document.getElementById("oilcropfarmer4mobile").value  
    let oilcropfarmer4comment = document.getElementById("oilcropfarmer4comment").value 
    let oilcropfarmer5variety = document.getElementById("oilcropfarmer5variety").value
	let oilcropfarmer5nid = document.getElementById("oilcropfarmer5nid").value  
    let oilcropfarmer5date = document.getElementById("oilcropfarmer5date").value  
    let oilcropfarmer5address = document.getElementById("oilcropfarmer5address").value
	let oilcropfarmer5 = document.getElementById("oilcropfarmer5").value  
    let oilcropfarmer5mobile = document.getElementById("oilcropfarmer5mobile").value  
    let oilcropfarmer5comment = document.getElementById("oilcropfarmer5comment").value 
    let oilcropfarmer6variety = document.getElementById("oilcropfarmer6variety").value
	let oilcropfarmer6nid = document.getElementById("oilcropfarmer6nid").value  
    let oilcropfarmer6date = document.getElementById("oilcropfarmer6date").value  
    let oilcropfarmer6address = document.getElementById("oilcropfarmer6address").value
	let oilcropfarmer6 = document.getElementById("oilcropfarmer6").value  
    let oilcropfarmer6mobile = document.getElementById("oilcropfarmer6mobile").value  
    let oilcropfarmer6comment = document.getElementById("oilcropfarmer6comment").value
    
 
 
 
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
    }else if(oilcropfarmer1variety === ""){
        return checkoilcropfarmer1variety();
    }else if(oilcropfarmer1nid === ""){
        return checkoilcropfarmer1nid();
    }else if(oilcropfarmer1date === ""){
        return checkoilcropfarmer1date();
    }else if(oilcropfarmer1address === ""){
        return checkoilcropfarmer1address();
    }else if(oilcropfarmer1 === ""){
        return checkoilcropfarmer1();
    }else if(oilcropfarmer1mobile === ""){
        return checkoilcropfarmer1mobile();
    }else if(oilcropfarmer1comment === ""){
        return checkoilcropfarmer1comment();
    }else if(oilcropfarmer2variety === ""){
        return checkoilcropfarmer2variety();
    }else if(oilcropfarmer2nid === ""){
        return checkoilcropfarmer2nid();
    }else if(oilcropfarmer2date === ""){
        return checkoilcropfarmer2date();
    }else if(oilcropfarmer2address === ""){
        return checkoilcropfarmer2address();
    }else if(oilcropfarmer2 === ""){
        return checkoilcropfarmer2();
    }else if(oilcropfarmer2mobile === ""){
        return checkoilcropfarmer2mobile();
    }else if(oilcropfarmer2comment === ""){
        return checkoilcropfarmer2comment();
    }else if(oilcropfarmer3variety === ""){
        return checkoilcropfarmer3variety();
    }else if(oilcropfarmer3nid === ""){
        return checkoilcropfarmer3nid();
    }else if(oilcropfarmer3date === ""){
        return checkoilcropfarmer3date();
    }else if(oilcropfarmer3address === ""){
        return checkoilcropfarmer3address();
    }else if(oilcropfarmer3 === ""){
        return checkoilcropfarmer3();
    }else if(oilcropfarmer3mobile === ""){
        return checkoilcropfarmer3mobile();
    }else if(oilcropfarmer3comment === ""){
        return checkoilcropfarmer3comment();
    }else if(oilcropfarmer4variety === ""){
        return checkoilcropfarmer4variety();
    }else if(oilcropfarmer4nid === ""){
        return checkoilcropfarmer4nid();
    }else if(oilcropfarmer4date === ""){
        return checkoilcropfarmer4date();
    }else if(oilcropfarmer4address === ""){
        return checkoilcropfarmer4address();
    }else if(oilcropfarmer4 === ""){
        return checkoilcropfarmer4();
    }else if(oilcropfarmer4mobile === ""){
        return checkoilcropfarmer4mobile();
    }else if(oilcropfarmer4comment === ""){
        return checkoilcropfarmer4comment();
    }else if(oilcropfarmer5variety === ""){
        return checkoilcropfarmer5variety();
    }else if(oilcropfarmer5nid === ""){
        return checkoilcropfarmer5nid();
    }else if(oilcropfarmer5date === ""){
        return checkoilcropfarmer5date();
    }else if(oilcropfarmer5address === ""){
        return checkoilcropfarmer5address();
    }else if(oilcropfarmer5 === ""){
        return checkoilcropfarmer5();
    }else if(oilcropfarmer5mobile === ""){
        return checkoilcropfarmer5mobile();
    }else if(oilcropfarmer5comment === ""){
        return checkoilcropfarmer5comment();
    }else if(oilcropfarmer6variety === ""){
        return checkoilcropfarmer6variety();
    }else if(oilcropfarmer6nid === ""){
        return checkoilcropfarmer6nid();
    }else if(oilcropfarmer6date === ""){
        return checkoilcropfarmer6date();
    }else if(oilcropfarmer6address === ""){
        return checkoilcropfarmer6address();
    }else if(oilcropfarmer6 === ""){
        return checkoilcropfarmer6();
    }else if(oilcropfarmer6mobile === ""){
        return checkoilcropfarmer6mobile();
    }else if(oilcropfarmer6comment === ""){
        return checkoilcropfarmer6comment();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('projectdemo-oilcrop');
        var userData = {
            division: division,
            district: district,
            upazila: upazila,
            blockname: blockname,
            union: union,
            lastupdate: lastupdate,
			
            oilcropfarmer1variety: oilcropfarmer1variety,
			oilcropfarmer1nid: oilcropfarmer1nid,
            oilcropfarmer1date: oilcropfarmer1date,
            oilcropfarmer1address: oilcropfarmer1address,
			oilcropfarmer1: oilcropfarmer1,
            oilcropfarmer1mobile: oilcropfarmer1mobile,
            oilcropfarmer1comment: oilcropfarmer1comment,
			
            oilcropfarmer2variety: oilcropfarmer2variety,
			oilcropfarmer2nid: oilcropfarmer2nid,
            oilcropfarmer2date: oilcropfarmer2date,
            oilcropfarmer2address: oilcropfarmer2address,
			oilcropfarmer2: oilcropfarmer2,
            oilcropfarmer2mobile: oilcropfarmer2mobile,
            oilcropfarmer2comment: oilcropfarmer2comment,
			
            oilcropfarmer3variety: oilcropfarmer3variety,
			oilcropfarmer3nid: oilcropfarmer3nid,
            oilcropfarmer3date: oilcropfarmer3date,
            oilcropfarmer3address: oilcropfarmer3address,
			oilcropfarmer3: oilcropfarmer3,
            oilcropfarmer3mobile: oilcropfarmer3mobile,
            oilcropfarmer3comment: oilcropfarmer3comment,
			
            oilcropfarmer4variety: oilcropfarmer4variety,
			oilcropfarmer4nid: oilcropfarmer4nid,
            oilcropfarmer4date: oilcropfarmer4date,
            oilcropfarmer4address: oilcropfarmer4address,
			oilcropfarmer4: oilcropfarmer4,
            oilcropfarmer4mobile: oilcropfarmer4mobile,
            oilcropfarmer4comment: oilcropfarmer4comment,
			
            oilcropfarmer5variety: oilcropfarmer5variety,
			oilcropfarmer5nid: oilcropfarmer5nid,
            oilcropfarmer5date: oilcropfarmer5date,
            oilcropfarmer5address: oilcropfarmer5address,
			oilcropfarmer5: oilcropfarmer5,
            oilcropfarmer5mobile: oilcropfarmer5mobile,
            oilcropfarmer5comment: oilcropfarmer5comment,
			
            oilcropfarmer6variety: oilcropfarmer6variety,
			oilcropfarmer6nid: oilcropfarmer6nid,
            oilcropfarmer6date: oilcropfarmer6date,
            oilcropfarmer6address: oilcropfarmer6address,
			oilcropfarmer6: oilcropfarmer6,
            oilcropfarmer6mobile: oilcropfarmer6mobile,
            oilcropfarmer6comment: oilcropfarmer6comment,
			
			
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
