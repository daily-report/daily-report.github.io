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
        let firebaseRefKey = firebase.database().ref().child('projectdemo-efnhup').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
			document.getElementById("pfdivision").innerHTML = dataSnapShot.val().division;
			document.getElementById("pfdistrict").innerHTML = dataSnapShot.val().district;
            document.getElementById("pfupazila").innerHTML = dataSnapShot.val().upazila;
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfefnhupfarmer1variety").innerHTML = dataSnapShot.val().efnhupfarmer1variety;
			document.getElementById("pfefnhupfarmer1nid").innerHTML = dataSnapShot.val().efnhupfarmer1nid;
            document.getElementById("pfefnhupfarmer1date").innerHTML = dataSnapShot.val().efnhupfarmer1date;
            document.getElementById("pfefnhupfarmer1address").innerHTML = dataSnapShot.val().efnhupfarmer1address;
			document.getElementById("pfefnhupfarmer1").innerHTML = dataSnapShot.val().efnhupfarmer1;
            document.getElementById("pfefnhupfarmer1mobile").innerHTML = dataSnapShot.val().efnhupfarmer1mobile;
            document.getElementById("pfefnhupfarmer1comment").innerHTML = dataSnapShot.val().efnhupfarmer1comment;
            document.getElementById("pfefnhupfarmer2variety").innerHTML = dataSnapShot.val().efnhupfarmer2variety;
			document.getElementById("pfefnhupfarmer2nid").innerHTML = dataSnapShot.val().efnhupfarmer2nid;
            document.getElementById("pfefnhupfarmer2date").innerHTML = dataSnapShot.val().efnhupfarmer2date;
            document.getElementById("pfefnhupfarmer2address").innerHTML = dataSnapShot.val().efnhupfarmer2address;
			document.getElementById("pfefnhupfarmer2").innerHTML = dataSnapShot.val().efnhupfarmer2;
            document.getElementById("pfefnhupfarmer2mobile").innerHTML = dataSnapShot.val().efnhupfarmer2mobile;
            document.getElementById("pfefnhupfarmer2comment").innerHTML = dataSnapShot.val().efnhupfarmer2comment;
            document.getElementById("pfefnhupfarmer3variety").innerHTML = dataSnapShot.val().efnhupfarmer3variety;
			document.getElementById("pfefnhupfarmer3nid").innerHTML = dataSnapShot.val().efnhupfarmer3nid;
            document.getElementById("pfefnhupfarmer3date").innerHTML = dataSnapShot.val().efnhupfarmer3date;
            document.getElementById("pfefnhupfarmer3address").innerHTML = dataSnapShot.val().efnhupfarmer3address;
			document.getElementById("pfefnhupfarmer3").innerHTML = dataSnapShot.val().efnhupfarmer3;
            document.getElementById("pfefnhupfarmer3mobile").innerHTML = dataSnapShot.val().efnhupfarmer3mobile;
            document.getElementById("pfefnhupfarmer3comment").innerHTML = dataSnapShot.val().efnhupfarmer3comment;
            document.getElementById("pfefnhupfarmer4variety").innerHTML = dataSnapShot.val().efnhupfarmer4variety;
			document.getElementById("pfefnhupfarmer4nid").innerHTML = dataSnapShot.val().efnhupfarmer4nid;
            document.getElementById("pfefnhupfarmer4date").innerHTML = dataSnapShot.val().efnhupfarmer4date;
            document.getElementById("pfefnhupfarmer4address").innerHTML = dataSnapShot.val().efnhupfarmer4address;
			document.getElementById("pfefnhupfarmer4").innerHTML = dataSnapShot.val().efnhupfarmer4;
            document.getElementById("pfefnhupfarmer4mobile").innerHTML = dataSnapShot.val().efnhupfarmer4mobile;
            document.getElementById("pfefnhupfarmer4comment").innerHTML = dataSnapShot.val().efnhupfarmer4comment;
            document.getElementById("pfefnhupfarmer5variety").innerHTML = dataSnapShot.val().efnhupfarmer5variety;
			document.getElementById("pfefnhupfarmer5nid").innerHTML = dataSnapShot.val().efnhupfarmer5nid;
            document.getElementById("pfefnhupfarmer5date").innerHTML = dataSnapShot.val().efnhupfarmer5date;
            document.getElementById("pfefnhupfarmer5address").innerHTML = dataSnapShot.val().efnhupfarmer5address;
			document.getElementById("pfefnhupfarmer5").innerHTML = dataSnapShot.val().efnhupfarmer5;
            document.getElementById("pfefnhupfarmer5mobile").innerHTML = dataSnapShot.val().efnhupfarmer5mobile;
            document.getElementById("pfefnhupfarmer5comment").innerHTML = dataSnapShot.val().efnhupfarmer5comment;
            document.getElementById("pfefnhupfarmer6variety").innerHTML = dataSnapShot.val().efnhupfarmer6variety;
			document.getElementById("pfefnhupfarmer6nid").innerHTML = dataSnapShot.val().efnhupfarmer6nid;
            document.getElementById("pfefnhupfarmer6date").innerHTML = dataSnapShot.val().efnhupfarmer6date;
            document.getElementById("pfefnhupfarmer6address").innerHTML = dataSnapShot.val().efnhupfarmer6address;
			document.getElementById("pfefnhupfarmer6").innerHTML = dataSnapShot.val().efnhupfarmer6;
            document.getElementById("pfefnhupfarmer6mobile").innerHTML = dataSnapShot.val().efnhupfarmer6mobile;
            document.getElementById("pfefnhupfarmer6comment").innerHTML = dataSnapShot.val().efnhupfarmer6comment;
			
			
            
			
			
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
    var pfefnhupfarmer1variety = document.getElementById("pfefnhupfarmer1variety").innerHTML;
	var pfefnhupfarmer1nid = document.getElementById("pfefnhupfarmer1nid").innerHTML;
    var pfefnhupfarmer1date = document.getElementById("pfefnhupfarmer1date").innerHTML;
    var pfefnhupfarmer1address = document.getElementById("pfefnhupfarmer1address").innerHTML;
	var pfefnhupfarmer1 = document.getElementById("pfefnhupfarmer1").innerHTML;
    var pfefnhupfarmer1mobile = document.getElementById("pfefnhupfarmer1mobile").innerHTML;
    var pfefnhupfarmer1comment = document.getElementById("pfefnhupfarmer1comment").innerHTML;
    var pfefnhupfarmer2variety = document.getElementById("pfefnhupfarmer2variety").innerHTML;
	var pfefnhupfarmer2nid = document.getElementById("pfefnhupfarmer2nid").innerHTML;
    var pfefnhupfarmer2date = document.getElementById("pfefnhupfarmer2date").innerHTML;
    var pfefnhupfarmer2address = document.getElementById("pfefnhupfarmer2address").innerHTML;
	var pfefnhupfarmer2 = document.getElementById("pfefnhupfarmer2").innerHTML;
    var pfefnhupfarmer2mobile = document.getElementById("pfefnhupfarmer2mobile").innerHTML;
    var pfefnhupfarmer2comment = document.getElementById("pfefnhupfarmer2comment").innerHTML;
    var pfefnhupfarmer3variety = document.getElementById("pfefnhupfarmer3variety").innerHTML;
	var pfefnhupfarmer3nid = document.getElementById("pfefnhupfarmer3nid").innerHTML;
    var pfefnhupfarmer3date = document.getElementById("pfefnhupfarmer3date").innerHTML;
    var pfefnhupfarmer3address = document.getElementById("pfefnhupfarmer3address").innerHTML;
	var pfefnhupfarmer3 = document.getElementById("pfefnhupfarmer3").innerHTML;
    var pfefnhupfarmer3mobile = document.getElementById("pfefnhupfarmer3mobile").innerHTML;
    var pfefnhupfarmer3comment = document.getElementById("pfefnhupfarmer3comment").innerHTML;
    var pfefnhupfarmer4variety = document.getElementById("pfefnhupfarmer4variety").innerHTML;
	var pfefnhupfarmer4nid = document.getElementById("pfefnhupfarmer4nid").innerHTML;
    var pfefnhupfarmer4date = document.getElementById("pfefnhupfarmer4date").innerHTML;
    var pfefnhupfarmer4address = document.getElementById("pfefnhupfarmer4address").innerHTML;
	var pfefnhupfarmer4 = document.getElementById("pfefnhupfarmer4").innerHTML;
    var pfefnhupfarmer4mobile = document.getElementById("pfefnhupfarmer4mobile").innerHTML;
    var pfefnhupfarmer4comment = document.getElementById("pfefnhupfarmer4comment").innerHTML;
    var pfefnhupfarmer5variety = document.getElementById("pfefnhupfarmer5variety").innerHTML;
	var pfefnhupfarmer5nid = document.getElementById("pfefnhupfarmer5nid").innerHTML;
    var pfefnhupfarmer5date = document.getElementById("pfefnhupfarmer5date").innerHTML;
    var pfefnhupfarmer5address = document.getElementById("pfefnhupfarmer5address").innerHTML;
	var pfefnhupfarmer5 = document.getElementById("pfefnhupfarmer5").innerHTML;
    var pfefnhupfarmer5mobile = document.getElementById("pfefnhupfarmer5mobile").innerHTML;
    var pfefnhupfarmer5comment = document.getElementById("pfefnhupfarmer5comment").innerHTML;
    var pfefnhupfarmer6variety = document.getElementById("pfefnhupfarmer6variety").innerHTML;
	var pfefnhupfarmer6nid = document.getElementById("pfefnhupfarmer6nid").innerHTML;
    var pfefnhupfarmer6date = document.getElementById("pfefnhupfarmer6date").innerHTML;
    var pfefnhupfarmer6address = document.getElementById("pfefnhupfarmer6address").innerHTML;
	var pfefnhupfarmer6 = document.getElementById("pfefnhupfarmer6").innerHTML;
    var pfefnhupfarmer6mobile = document.getElementById("pfefnhupfarmer6mobile").innerHTML;
    var pfefnhupfarmer6comment = document.getElementById("pfefnhupfarmer6comment").innerHTML;
    

    document.getElementById("upazila").value = pfupazila; 
    document.getElementById("district").value = pfdistrict; 
    document.getElementById("division").value = pfdivision;     	
    document.getElementById("blockname").value = pfblockname; 
    document.getElementById("union").value = pfunion; 
    document.getElementById("lastupdate").value = pflastupdate; 
    document.getElementById("efnhupfarmer1variety").value = pfefnhupfarmer1variety;
	document.getElementById("efnhupfarmer1nid").value = pfefnhupfarmer1nid; 
    document.getElementById("efnhupfarmer1date").value = pfefnhupfarmer1date; 
    document.getElementById("efnhupfarmer1address").value = pfefnhupfarmer1address;
	document.getElementById("efnhupfarmer1").value = pfefnhupfarmer1; 
    document.getElementById("efnhupfarmer1mobile").value = pfefnhupfarmer1mobile; 
    document.getElementById("efnhupfarmer1comment").value = pfefnhupfarmer1comment; 
    document.getElementById("efnhupfarmer2variety").value = pfefnhupfarmer2variety;
	document.getElementById("efnhupfarmer2nid").value = pfefnhupfarmer2nid; 
    document.getElementById("efnhupfarmer2date").value = pfefnhupfarmer2date; 
    document.getElementById("efnhupfarmer2address").value = pfefnhupfarmer2address;
	document.getElementById("efnhupfarmer2").value = pfefnhupfarmer2; 
    document.getElementById("efnhupfarmer2mobile").value = pfefnhupfarmer2mobile; 
    document.getElementById("efnhupfarmer2comment").value = pfefnhupfarmer2comment; 
    document.getElementById("efnhupfarmer3variety").value = pfefnhupfarmer3variety;
	document.getElementById("efnhupfarmer3nid").value = pfefnhupfarmer3nid; 
    document.getElementById("efnhupfarmer3date").value = pfefnhupfarmer3date; 
    document.getElementById("efnhupfarmer3address").value = pfefnhupfarmer3address;
	document.getElementById("efnhupfarmer3").value = pfefnhupfarmer3; 
    document.getElementById("efnhupfarmer3mobile").value = pfefnhupfarmer3mobile; 
    document.getElementById("efnhupfarmer3comment").value = pfefnhupfarmer3comment; 
    document.getElementById("efnhupfarmer4variety").value = pfefnhupfarmer4variety;
	document.getElementById("efnhupfarmer4nid").value = pfefnhupfarmer4nid; 
    document.getElementById("efnhupfarmer4date").value = pfefnhupfarmer4date; 
    document.getElementById("efnhupfarmer4address").value = pfefnhupfarmer4address;
	document.getElementById("efnhupfarmer4").value = pfefnhupfarmer4; 
    document.getElementById("efnhupfarmer4mobile").value = pfefnhupfarmer4mobile; 
    document.getElementById("efnhupfarmer4comment").value = pfefnhupfarmer4comment; 
    document.getElementById("efnhupfarmer5variety").value = pfefnhupfarmer5variety;
	document.getElementById("efnhupfarmer5nid").value = pfefnhupfarmer5nid; 
    document.getElementById("efnhupfarmer5date").value = pfefnhupfarmer5date; 
    document.getElementById("efnhupfarmer5address").value = pfefnhupfarmer5address;
	document.getElementById("efnhupfarmer5").value = pfefnhupfarmer5; 
    document.getElementById("efnhupfarmer5mobile").value = pfefnhupfarmer5mobile; 
    document.getElementById("efnhupfarmer5comment").value = pfefnhupfarmer5comment; 
    document.getElementById("efnhupfarmer6variety").value = pfefnhupfarmer6variety;
	document.getElementById("efnhupfarmer6nid").value = pfefnhupfarmer6nid; 
    document.getElementById("efnhupfarmer6date").value = pfefnhupfarmer6date; 
    document.getElementById("efnhupfarmer6address").value = pfefnhupfarmer6address;
	document.getElementById("efnhupfarmer6").value = pfefnhupfarmer6; 
    document.getElementById("efnhupfarmer6mobile").value = pfefnhupfarmer6mobile; 
    document.getElementById("efnhupfarmer6comment").value = pfefnhupfarmer6comment; 
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
    let efnhupfarmer1variety = document.getElementById("efnhupfarmer1variety").value
	let efnhupfarmer1nid = document.getElementById("efnhupfarmer1nid").value  
    let efnhupfarmer1date = document.getElementById("efnhupfarmer1date").value  
    let efnhupfarmer1address = document.getElementById("efnhupfarmer1address").value
	let efnhupfarmer1 = document.getElementById("efnhupfarmer1").value  
    let efnhupfarmer1mobile = document.getElementById("efnhupfarmer1mobile").value  
    let efnhupfarmer1comment = document.getElementById("efnhupfarmer1comment").value 
    let efnhupfarmer2variety = document.getElementById("efnhupfarmer2variety").value
	let efnhupfarmer2nid = document.getElementById("efnhupfarmer2nid").value  
    let efnhupfarmer2date = document.getElementById("efnhupfarmer2date").value  
    let efnhupfarmer2address = document.getElementById("efnhupfarmer2address").value
	let efnhupfarmer2 = document.getElementById("efnhupfarmer2").value  
    let efnhupfarmer2mobile = document.getElementById("efnhupfarmer2mobile").value  
    let efnhupfarmer2comment = document.getElementById("efnhupfarmer2comment").value 
    let efnhupfarmer3variety = document.getElementById("efnhupfarmer3variety").value
	let efnhupfarmer3nid = document.getElementById("efnhupfarmer3nid").value  
    let efnhupfarmer3date = document.getElementById("efnhupfarmer3date").value  
    let efnhupfarmer3address = document.getElementById("efnhupfarmer3address").value
	let efnhupfarmer3 = document.getElementById("efnhupfarmer3").value  
    let efnhupfarmer3mobile = document.getElementById("efnhupfarmer3mobile").value  
    let efnhupfarmer3comment = document.getElementById("efnhupfarmer3comment").value
    let efnhupfarmer4variety = document.getElementById("efnhupfarmer4variety").value
	let efnhupfarmer4nid = document.getElementById("efnhupfarmer4nid").value  
    let efnhupfarmer4date = document.getElementById("efnhupfarmer4date").value  
    let efnhupfarmer4address = document.getElementById("efnhupfarmer4address").value
	let efnhupfarmer4 = document.getElementById("efnhupfarmer4").value  
    let efnhupfarmer4mobile = document.getElementById("efnhupfarmer4mobile").value  
    let efnhupfarmer4comment = document.getElementById("efnhupfarmer4comment").value 
    let efnhupfarmer5variety = document.getElementById("efnhupfarmer5variety").value
	let efnhupfarmer5nid = document.getElementById("efnhupfarmer5nid").value  
    let efnhupfarmer5date = document.getElementById("efnhupfarmer5date").value  
    let efnhupfarmer5address = document.getElementById("efnhupfarmer5address").value
	let efnhupfarmer5 = document.getElementById("efnhupfarmer5").value  
    let efnhupfarmer5mobile = document.getElementById("efnhupfarmer5mobile").value  
    let efnhupfarmer5comment = document.getElementById("efnhupfarmer5comment").value 
    let efnhupfarmer6variety = document.getElementById("efnhupfarmer6variety").value
	let efnhupfarmer6nid = document.getElementById("efnhupfarmer6nid").value  
    let efnhupfarmer6date = document.getElementById("efnhupfarmer6date").value  
    let efnhupfarmer6address = document.getElementById("efnhupfarmer6address").value
	let efnhupfarmer6 = document.getElementById("efnhupfarmer6").value  
    let efnhupfarmer6mobile = document.getElementById("efnhupfarmer6mobile").value  
    let efnhupfarmer6comment = document.getElementById("efnhupfarmer6comment").value
    
 
 
 
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
    }else if(efnhupfarmer1variety === ""){
        return checkefnhupfarmer1variety();
    }else if(efnhupfarmer1nid === ""){
        return checkefnhupfarmer1nid();
    }else if(efnhupfarmer1date === ""){
        return checkefnhupfarmer1date();
    }else if(efnhupfarmer1address === ""){
        return checkefnhupfarmer1address();
    }else if(efnhupfarmer1 === ""){
        return checkefnhupfarmer1();
    }else if(efnhupfarmer1mobile === ""){
        return checkefnhupfarmer1mobile();
    }else if(efnhupfarmer1comment === ""){
        return checkefnhupfarmer1comment();
    }else if(efnhupfarmer2variety === ""){
        return checkefnhupfarmer2variety();
    }else if(efnhupfarmer2nid === ""){
        return checkefnhupfarmer2nid();
    }else if(efnhupfarmer2date === ""){
        return checkefnhupfarmer2date();
    }else if(efnhupfarmer2address === ""){
        return checkefnhupfarmer2address();
    }else if(efnhupfarmer2 === ""){
        return checkefnhupfarmer2();
    }else if(efnhupfarmer2mobile === ""){
        return checkefnhupfarmer2mobile();
    }else if(efnhupfarmer2comment === ""){
        return checkefnhupfarmer2comment();
    }else if(efnhupfarmer3variety === ""){
        return checkefnhupfarmer3variety();
    }else if(efnhupfarmer3nid === ""){
        return checkefnhupfarmer3nid();
    }else if(efnhupfarmer3date === ""){
        return checkefnhupfarmer3date();
    }else if(efnhupfarmer3address === ""){
        return checkefnhupfarmer3address();
    }else if(efnhupfarmer3 === ""){
        return checkefnhupfarmer3();
    }else if(efnhupfarmer3mobile === ""){
        return checkefnhupfarmer3mobile();
    }else if(efnhupfarmer3comment === ""){
        return checkefnhupfarmer3comment();
    }else if(efnhupfarmer4variety === ""){
        return checkefnhupfarmer4variety();
    }else if(efnhupfarmer4nid === ""){
        return checkefnhupfarmer4nid();
    }else if(efnhupfarmer4date === ""){
        return checkefnhupfarmer4date();
    }else if(efnhupfarmer4address === ""){
        return checkefnhupfarmer4address();
    }else if(efnhupfarmer4 === ""){
        return checkefnhupfarmer4();
    }else if(efnhupfarmer4mobile === ""){
        return checkefnhupfarmer4mobile();
    }else if(efnhupfarmer4comment === ""){
        return checkefnhupfarmer4comment();
    }else if(efnhupfarmer5variety === ""){
        return checkefnhupfarmer5variety();
    }else if(efnhupfarmer5nid === ""){
        return checkefnhupfarmer5nid();
    }else if(efnhupfarmer5date === ""){
        return checkefnhupfarmer5date();
    }else if(efnhupfarmer5address === ""){
        return checkefnhupfarmer5address();
    }else if(efnhupfarmer5 === ""){
        return checkefnhupfarmer5();
    }else if(efnhupfarmer5mobile === ""){
        return checkefnhupfarmer5mobile();
    }else if(efnhupfarmer5comment === ""){
        return checkefnhupfarmer5comment();
    }else if(efnhupfarmer6variety === ""){
        return checkefnhupfarmer6variety();
    }else if(efnhupfarmer6nid === ""){
        return checkefnhupfarmer6nid();
    }else if(efnhupfarmer6date === ""){
        return checkefnhupfarmer6date();
    }else if(efnhupfarmer6address === ""){
        return checkefnhupfarmer6address();
    }else if(efnhupfarmer6 === ""){
        return checkefnhupfarmer6();
    }else if(efnhupfarmer6mobile === ""){
        return checkefnhupfarmer6mobile();
    }else if(efnhupfarmer6comment === ""){
        return checkefnhupfarmer6comment();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('projectdemo-efnhup');
        var userData = {
            division: division,
            district: district,
            upazila: upazila,
            blockname: blockname,
            union: union,
            lastupdate: lastupdate,
			
            efnhupfarmer1variety: efnhupfarmer1variety,
			efnhupfarmer1nid: efnhupfarmer1nid,
            efnhupfarmer1date: efnhupfarmer1date,
            efnhupfarmer1address: efnhupfarmer1address,
			efnhupfarmer1: efnhupfarmer1,
            efnhupfarmer1mobile: efnhupfarmer1mobile,
            efnhupfarmer1comment: efnhupfarmer1comment,
			
            efnhupfarmer2variety: efnhupfarmer2variety,
			efnhupfarmer2nid: efnhupfarmer2nid,
            efnhupfarmer2date: efnhupfarmer2date,
            efnhupfarmer2address: efnhupfarmer2address,
			efnhupfarmer2: efnhupfarmer2,
            efnhupfarmer2mobile: efnhupfarmer2mobile,
            efnhupfarmer2comment: efnhupfarmer2comment,
			
            efnhupfarmer3variety: efnhupfarmer3variety,
			efnhupfarmer3nid: efnhupfarmer3nid,
            efnhupfarmer3date: efnhupfarmer3date,
            efnhupfarmer3address: efnhupfarmer3address,
			efnhupfarmer3: efnhupfarmer3,
            efnhupfarmer3mobile: efnhupfarmer3mobile,
            efnhupfarmer3comment: efnhupfarmer3comment,
			
            efnhupfarmer4variety: efnhupfarmer4variety,
			efnhupfarmer4nid: efnhupfarmer4nid,
            efnhupfarmer4date: efnhupfarmer4date,
            efnhupfarmer4address: efnhupfarmer4address,
			efnhupfarmer4: efnhupfarmer4,
            efnhupfarmer4mobile: efnhupfarmer4mobile,
            efnhupfarmer4comment: efnhupfarmer4comment,
			
            efnhupfarmer5variety: efnhupfarmer5variety,
			efnhupfarmer5nid: efnhupfarmer5nid,
            efnhupfarmer5date: efnhupfarmer5date,
            efnhupfarmer5address: efnhupfarmer5address,
			efnhupfarmer5: efnhupfarmer5,
            efnhupfarmer5mobile: efnhupfarmer5mobile,
            efnhupfarmer5comment: efnhupfarmer5comment,
			
            efnhupfarmer6variety: efnhupfarmer6variety,
			efnhupfarmer6nid: efnhupfarmer6nid,
            efnhupfarmer6date: efnhupfarmer6date,
            efnhupfarmer6address: efnhupfarmer6address,
			efnhupfarmer6: efnhupfarmer6,
            efnhupfarmer6mobile: efnhupfarmer6mobile,
            efnhupfarmer6comment: efnhupfarmer6comment,
			
			
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
