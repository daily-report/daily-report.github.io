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
        let firebaseRefKey = firebase.database().ref().child('projectdemo-environfriend').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
			document.getElementById("pfdivision").innerHTML = dataSnapShot.val().division;
			document.getElementById("pfdistrict").innerHTML = dataSnapShot.val().district;
            document.getElementById("pfupazila").innerHTML = dataSnapShot.val().upazila;
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfenvironfriendfarmer1variety").innerHTML = dataSnapShot.val().environfriendfarmer1variety;
			document.getElementById("pfenvironfriendfarmer1nid").innerHTML = dataSnapShot.val().environfriendfarmer1nid;
            document.getElementById("pfenvironfriendfarmer1date").innerHTML = dataSnapShot.val().environfriendfarmer1date;
            document.getElementById("pfenvironfriendfarmer1address").innerHTML = dataSnapShot.val().environfriendfarmer1address;
			document.getElementById("pfenvironfriendfarmer1").innerHTML = dataSnapShot.val().environfriendfarmer1;
            document.getElementById("pfenvironfriendfarmer1mobile").innerHTML = dataSnapShot.val().environfriendfarmer1mobile;
            document.getElementById("pfenvironfriendfarmer1comment").innerHTML = dataSnapShot.val().environfriendfarmer1comment;
            document.getElementById("pfenvironfriendfarmer2variety").innerHTML = dataSnapShot.val().environfriendfarmer2variety;
			document.getElementById("pfenvironfriendfarmer2nid").innerHTML = dataSnapShot.val().environfriendfarmer2nid;
            document.getElementById("pfenvironfriendfarmer2date").innerHTML = dataSnapShot.val().environfriendfarmer2date;
            document.getElementById("pfenvironfriendfarmer2address").innerHTML = dataSnapShot.val().environfriendfarmer2address;
			document.getElementById("pfenvironfriendfarmer2").innerHTML = dataSnapShot.val().environfriendfarmer2;
            document.getElementById("pfenvironfriendfarmer2mobile").innerHTML = dataSnapShot.val().environfriendfarmer2mobile;
            document.getElementById("pfenvironfriendfarmer2comment").innerHTML = dataSnapShot.val().environfriendfarmer2comment;
            document.getElementById("pfenvironfriendfarmer3variety").innerHTML = dataSnapShot.val().environfriendfarmer3variety;
			document.getElementById("pfenvironfriendfarmer3nid").innerHTML = dataSnapShot.val().environfriendfarmer3nid;
            document.getElementById("pfenvironfriendfarmer3date").innerHTML = dataSnapShot.val().environfriendfarmer3date;
            document.getElementById("pfenvironfriendfarmer3address").innerHTML = dataSnapShot.val().environfriendfarmer3address;
			document.getElementById("pfenvironfriendfarmer3").innerHTML = dataSnapShot.val().environfriendfarmer3;
            document.getElementById("pfenvironfriendfarmer3mobile").innerHTML = dataSnapShot.val().environfriendfarmer3mobile;
            document.getElementById("pfenvironfriendfarmer3comment").innerHTML = dataSnapShot.val().environfriendfarmer3comment;
            document.getElementById("pfenvironfriendfarmer4variety").innerHTML = dataSnapShot.val().environfriendfarmer4variety;
			document.getElementById("pfenvironfriendfarmer4nid").innerHTML = dataSnapShot.val().environfriendfarmer4nid;
            document.getElementById("pfenvironfriendfarmer4date").innerHTML = dataSnapShot.val().environfriendfarmer4date;
            document.getElementById("pfenvironfriendfarmer4address").innerHTML = dataSnapShot.val().environfriendfarmer4address;
			document.getElementById("pfenvironfriendfarmer4").innerHTML = dataSnapShot.val().environfriendfarmer4;
            document.getElementById("pfenvironfriendfarmer4mobile").innerHTML = dataSnapShot.val().environfriendfarmer4mobile;
            document.getElementById("pfenvironfriendfarmer4comment").innerHTML = dataSnapShot.val().environfriendfarmer4comment;
            document.getElementById("pfenvironfriendfarmer5variety").innerHTML = dataSnapShot.val().environfriendfarmer5variety;
			document.getElementById("pfenvironfriendfarmer5nid").innerHTML = dataSnapShot.val().environfriendfarmer5nid;
            document.getElementById("pfenvironfriendfarmer5date").innerHTML = dataSnapShot.val().environfriendfarmer5date;
            document.getElementById("pfenvironfriendfarmer5address").innerHTML = dataSnapShot.val().environfriendfarmer5address;
			document.getElementById("pfenvironfriendfarmer5").innerHTML = dataSnapShot.val().environfriendfarmer5;
            document.getElementById("pfenvironfriendfarmer5mobile").innerHTML = dataSnapShot.val().environfriendfarmer5mobile;
            document.getElementById("pfenvironfriendfarmer5comment").innerHTML = dataSnapShot.val().environfriendfarmer5comment;
            document.getElementById("pfenvironfriendfarmer6variety").innerHTML = dataSnapShot.val().environfriendfarmer6variety;
			document.getElementById("pfenvironfriendfarmer6nid").innerHTML = dataSnapShot.val().environfriendfarmer6nid;
            document.getElementById("pfenvironfriendfarmer6date").innerHTML = dataSnapShot.val().environfriendfarmer6date;
            document.getElementById("pfenvironfriendfarmer6address").innerHTML = dataSnapShot.val().environfriendfarmer6address;
			document.getElementById("pfenvironfriendfarmer6").innerHTML = dataSnapShot.val().environfriendfarmer6;
            document.getElementById("pfenvironfriendfarmer6mobile").innerHTML = dataSnapShot.val().environfriendfarmer6mobile;
            document.getElementById("pfenvironfriendfarmer6comment").innerHTML = dataSnapShot.val().environfriendfarmer6comment;
			
			
            
			
			
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
    var pfenvironfriendfarmer1variety = document.getElementById("pfenvironfriendfarmer1variety").innerHTML;
	var pfenvironfriendfarmer1nid = document.getElementById("pfenvironfriendfarmer1nid").innerHTML;
    var pfenvironfriendfarmer1date = document.getElementById("pfenvironfriendfarmer1date").innerHTML;
    var pfenvironfriendfarmer1address = document.getElementById("pfenvironfriendfarmer1address").innerHTML;
	var pfenvironfriendfarmer1 = document.getElementById("pfenvironfriendfarmer1").innerHTML;
    var pfenvironfriendfarmer1mobile = document.getElementById("pfenvironfriendfarmer1mobile").innerHTML;
    var pfenvironfriendfarmer1comment = document.getElementById("pfenvironfriendfarmer1comment").innerHTML;
    var pfenvironfriendfarmer2variety = document.getElementById("pfenvironfriendfarmer2variety").innerHTML;
	var pfenvironfriendfarmer2nid = document.getElementById("pfenvironfriendfarmer2nid").innerHTML;
    var pfenvironfriendfarmer2date = document.getElementById("pfenvironfriendfarmer2date").innerHTML;
    var pfenvironfriendfarmer2address = document.getElementById("pfenvironfriendfarmer2address").innerHTML;
	var pfenvironfriendfarmer2 = document.getElementById("pfenvironfriendfarmer2").innerHTML;
    var pfenvironfriendfarmer2mobile = document.getElementById("pfenvironfriendfarmer2mobile").innerHTML;
    var pfenvironfriendfarmer2comment = document.getElementById("pfenvironfriendfarmer2comment").innerHTML;
    var pfenvironfriendfarmer3variety = document.getElementById("pfenvironfriendfarmer3variety").innerHTML;
	var pfenvironfriendfarmer3nid = document.getElementById("pfenvironfriendfarmer3nid").innerHTML;
    var pfenvironfriendfarmer3date = document.getElementById("pfenvironfriendfarmer3date").innerHTML;
    var pfenvironfriendfarmer3address = document.getElementById("pfenvironfriendfarmer3address").innerHTML;
	var pfenvironfriendfarmer3 = document.getElementById("pfenvironfriendfarmer3").innerHTML;
    var pfenvironfriendfarmer3mobile = document.getElementById("pfenvironfriendfarmer3mobile").innerHTML;
    var pfenvironfriendfarmer3comment = document.getElementById("pfenvironfriendfarmer3comment").innerHTML;
    var pfenvironfriendfarmer4variety = document.getElementById("pfenvironfriendfarmer4variety").innerHTML;
	var pfenvironfriendfarmer4nid = document.getElementById("pfenvironfriendfarmer4nid").innerHTML;
    var pfenvironfriendfarmer4date = document.getElementById("pfenvironfriendfarmer4date").innerHTML;
    var pfenvironfriendfarmer4address = document.getElementById("pfenvironfriendfarmer4address").innerHTML;
	var pfenvironfriendfarmer4 = document.getElementById("pfenvironfriendfarmer4").innerHTML;
    var pfenvironfriendfarmer4mobile = document.getElementById("pfenvironfriendfarmer4mobile").innerHTML;
    var pfenvironfriendfarmer4comment = document.getElementById("pfenvironfriendfarmer4comment").innerHTML;
    var pfenvironfriendfarmer5variety = document.getElementById("pfenvironfriendfarmer5variety").innerHTML;
	var pfenvironfriendfarmer5nid = document.getElementById("pfenvironfriendfarmer5nid").innerHTML;
    var pfenvironfriendfarmer5date = document.getElementById("pfenvironfriendfarmer5date").innerHTML;
    var pfenvironfriendfarmer5address = document.getElementById("pfenvironfriendfarmer5address").innerHTML;
	var pfenvironfriendfarmer5 = document.getElementById("pfenvironfriendfarmer5").innerHTML;
    var pfenvironfriendfarmer5mobile = document.getElementById("pfenvironfriendfarmer5mobile").innerHTML;
    var pfenvironfriendfarmer5comment = document.getElementById("pfenvironfriendfarmer5comment").innerHTML;
    var pfenvironfriendfarmer6variety = document.getElementById("pfenvironfriendfarmer6variety").innerHTML;
	var pfenvironfriendfarmer6nid = document.getElementById("pfenvironfriendfarmer6nid").innerHTML;
    var pfenvironfriendfarmer6date = document.getElementById("pfenvironfriendfarmer6date").innerHTML;
    var pfenvironfriendfarmer6address = document.getElementById("pfenvironfriendfarmer6address").innerHTML;
	var pfenvironfriendfarmer6 = document.getElementById("pfenvironfriendfarmer6").innerHTML;
    var pfenvironfriendfarmer6mobile = document.getElementById("pfenvironfriendfarmer6mobile").innerHTML;
    var pfenvironfriendfarmer6comment = document.getElementById("pfenvironfriendfarmer6comment").innerHTML;
    

    document.getElementById("upazila").value = pfupazila; 
    document.getElementById("district").value = pfdistrict; 
    document.getElementById("division").value = pfdivision;     	
    document.getElementById("blockname").value = pfblockname; 
    document.getElementById("union").value = pfunion; 
    document.getElementById("lastupdate").value = pflastupdate; 
    document.getElementById("environfriendfarmer1variety").value = pfenvironfriendfarmer1variety;
	document.getElementById("environfriendfarmer1nid").value = pfenvironfriendfarmer1nid; 
    document.getElementById("environfriendfarmer1date").value = pfenvironfriendfarmer1date; 
    document.getElementById("environfriendfarmer1address").value = pfenvironfriendfarmer1address;
	document.getElementById("environfriendfarmer1").value = pfenvironfriendfarmer1; 
    document.getElementById("environfriendfarmer1mobile").value = pfenvironfriendfarmer1mobile; 
    document.getElementById("environfriendfarmer1comment").value = pfenvironfriendfarmer1comment; 
    document.getElementById("environfriendfarmer2variety").value = pfenvironfriendfarmer2variety;
	document.getElementById("environfriendfarmer2nid").value = pfenvironfriendfarmer2nid; 
    document.getElementById("environfriendfarmer2date").value = pfenvironfriendfarmer2date; 
    document.getElementById("environfriendfarmer2address").value = pfenvironfriendfarmer2address;
	document.getElementById("environfriendfarmer2").value = pfenvironfriendfarmer2; 
    document.getElementById("environfriendfarmer2mobile").value = pfenvironfriendfarmer2mobile; 
    document.getElementById("environfriendfarmer2comment").value = pfenvironfriendfarmer2comment; 
    document.getElementById("environfriendfarmer3variety").value = pfenvironfriendfarmer3variety;
	document.getElementById("environfriendfarmer3nid").value = pfenvironfriendfarmer3nid; 
    document.getElementById("environfriendfarmer3date").value = pfenvironfriendfarmer3date; 
    document.getElementById("environfriendfarmer3address").value = pfenvironfriendfarmer3address;
	document.getElementById("environfriendfarmer3").value = pfenvironfriendfarmer3; 
    document.getElementById("environfriendfarmer3mobile").value = pfenvironfriendfarmer3mobile; 
    document.getElementById("environfriendfarmer3comment").value = pfenvironfriendfarmer3comment; 
    document.getElementById("environfriendfarmer4variety").value = pfenvironfriendfarmer4variety;
	document.getElementById("environfriendfarmer4nid").value = pfenvironfriendfarmer4nid; 
    document.getElementById("environfriendfarmer4date").value = pfenvironfriendfarmer4date; 
    document.getElementById("environfriendfarmer4address").value = pfenvironfriendfarmer4address;
	document.getElementById("environfriendfarmer4").value = pfenvironfriendfarmer4; 
    document.getElementById("environfriendfarmer4mobile").value = pfenvironfriendfarmer4mobile; 
    document.getElementById("environfriendfarmer4comment").value = pfenvironfriendfarmer4comment; 
    document.getElementById("environfriendfarmer5variety").value = pfenvironfriendfarmer5variety;
	document.getElementById("environfriendfarmer5nid").value = pfenvironfriendfarmer5nid; 
    document.getElementById("environfriendfarmer5date").value = pfenvironfriendfarmer5date; 
    document.getElementById("environfriendfarmer5address").value = pfenvironfriendfarmer5address;
	document.getElementById("environfriendfarmer5").value = pfenvironfriendfarmer5; 
    document.getElementById("environfriendfarmer5mobile").value = pfenvironfriendfarmer5mobile; 
    document.getElementById("environfriendfarmer5comment").value = pfenvironfriendfarmer5comment; 
    document.getElementById("environfriendfarmer6variety").value = pfenvironfriendfarmer6variety;
	document.getElementById("environfriendfarmer6nid").value = pfenvironfriendfarmer6nid; 
    document.getElementById("environfriendfarmer6date").value = pfenvironfriendfarmer6date; 
    document.getElementById("environfriendfarmer6address").value = pfenvironfriendfarmer6address;
	document.getElementById("environfriendfarmer6").value = pfenvironfriendfarmer6; 
    document.getElementById("environfriendfarmer6mobile").value = pfenvironfriendfarmer6mobile; 
    document.getElementById("environfriendfarmer6comment").value = pfenvironfriendfarmer6comment; 
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
    let environfriendfarmer1variety = document.getElementById("environfriendfarmer1variety").value
	let environfriendfarmer1nid = document.getElementById("environfriendfarmer1nid").value  
    let environfriendfarmer1date = document.getElementById("environfriendfarmer1date").value  
    let environfriendfarmer1address = document.getElementById("environfriendfarmer1address").value
	let environfriendfarmer1 = document.getElementById("environfriendfarmer1").value  
    let environfriendfarmer1mobile = document.getElementById("environfriendfarmer1mobile").value  
    let environfriendfarmer1comment = document.getElementById("environfriendfarmer1comment").value 
    let environfriendfarmer2variety = document.getElementById("environfriendfarmer2variety").value
	let environfriendfarmer2nid = document.getElementById("environfriendfarmer2nid").value  
    let environfriendfarmer2date = document.getElementById("environfriendfarmer2date").value  
    let environfriendfarmer2address = document.getElementById("environfriendfarmer2address").value
	let environfriendfarmer2 = document.getElementById("environfriendfarmer2").value  
    let environfriendfarmer2mobile = document.getElementById("environfriendfarmer2mobile").value  
    let environfriendfarmer2comment = document.getElementById("environfriendfarmer2comment").value 
    let environfriendfarmer3variety = document.getElementById("environfriendfarmer3variety").value
	let environfriendfarmer3nid = document.getElementById("environfriendfarmer3nid").value  
    let environfriendfarmer3date = document.getElementById("environfriendfarmer3date").value  
    let environfriendfarmer3address = document.getElementById("environfriendfarmer3address").value
	let environfriendfarmer3 = document.getElementById("environfriendfarmer3").value  
    let environfriendfarmer3mobile = document.getElementById("environfriendfarmer3mobile").value  
    let environfriendfarmer3comment = document.getElementById("environfriendfarmer3comment").value
    let environfriendfarmer4variety = document.getElementById("environfriendfarmer4variety").value
	let environfriendfarmer4nid = document.getElementById("environfriendfarmer4nid").value  
    let environfriendfarmer4date = document.getElementById("environfriendfarmer4date").value  
    let environfriendfarmer4address = document.getElementById("environfriendfarmer4address").value
	let environfriendfarmer4 = document.getElementById("environfriendfarmer4").value  
    let environfriendfarmer4mobile = document.getElementById("environfriendfarmer4mobile").value  
    let environfriendfarmer4comment = document.getElementById("environfriendfarmer4comment").value 
    let environfriendfarmer5variety = document.getElementById("environfriendfarmer5variety").value
	let environfriendfarmer5nid = document.getElementById("environfriendfarmer5nid").value  
    let environfriendfarmer5date = document.getElementById("environfriendfarmer5date").value  
    let environfriendfarmer5address = document.getElementById("environfriendfarmer5address").value
	let environfriendfarmer5 = document.getElementById("environfriendfarmer5").value  
    let environfriendfarmer5mobile = document.getElementById("environfriendfarmer5mobile").value  
    let environfriendfarmer5comment = document.getElementById("environfriendfarmer5comment").value 
    let environfriendfarmer6variety = document.getElementById("environfriendfarmer6variety").value
	let environfriendfarmer6nid = document.getElementById("environfriendfarmer6nid").value  
    let environfriendfarmer6date = document.getElementById("environfriendfarmer6date").value  
    let environfriendfarmer6address = document.getElementById("environfriendfarmer6address").value
	let environfriendfarmer6 = document.getElementById("environfriendfarmer6").value  
    let environfriendfarmer6mobile = document.getElementById("environfriendfarmer6mobile").value  
    let environfriendfarmer6comment = document.getElementById("environfriendfarmer6comment").value
    
 
 
 
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
    }else if(environfriendfarmer1variety === ""){
        return checkenvironfriendfarmer1variety();
    }else if(environfriendfarmer1nid === ""){
        return checkenvironfriendfarmer1nid();
    }else if(environfriendfarmer1date === ""){
        return checkenvironfriendfarmer1date();
    }else if(environfriendfarmer1address === ""){
        return checkenvironfriendfarmer1address();
    }else if(environfriendfarmer1 === ""){
        return checkenvironfriendfarmer1();
    }else if(environfriendfarmer1mobile === ""){
        return checkenvironfriendfarmer1mobile();
    }else if(environfriendfarmer1comment === ""){
        return checkenvironfriendfarmer1comment();
    }else if(environfriendfarmer2variety === ""){
        return checkenvironfriendfarmer2variety();
    }else if(environfriendfarmer2nid === ""){
        return checkenvironfriendfarmer2nid();
    }else if(environfriendfarmer2date === ""){
        return checkenvironfriendfarmer2date();
    }else if(environfriendfarmer2address === ""){
        return checkenvironfriendfarmer2address();
    }else if(environfriendfarmer2 === ""){
        return checkenvironfriendfarmer2();
    }else if(environfriendfarmer2mobile === ""){
        return checkenvironfriendfarmer2mobile();
    }else if(environfriendfarmer2comment === ""){
        return checkenvironfriendfarmer2comment();
    }else if(environfriendfarmer3variety === ""){
        return checkenvironfriendfarmer3variety();
    }else if(environfriendfarmer3nid === ""){
        return checkenvironfriendfarmer3nid();
    }else if(environfriendfarmer3date === ""){
        return checkenvironfriendfarmer3date();
    }else if(environfriendfarmer3address === ""){
        return checkenvironfriendfarmer3address();
    }else if(environfriendfarmer3 === ""){
        return checkenvironfriendfarmer3();
    }else if(environfriendfarmer3mobile === ""){
        return checkenvironfriendfarmer3mobile();
    }else if(environfriendfarmer3comment === ""){
        return checkenvironfriendfarmer3comment();
    }else if(environfriendfarmer4variety === ""){
        return checkenvironfriendfarmer4variety();
    }else if(environfriendfarmer4nid === ""){
        return checkenvironfriendfarmer4nid();
    }else if(environfriendfarmer4date === ""){
        return checkenvironfriendfarmer4date();
    }else if(environfriendfarmer4address === ""){
        return checkenvironfriendfarmer4address();
    }else if(environfriendfarmer4 === ""){
        return checkenvironfriendfarmer4();
    }else if(environfriendfarmer4mobile === ""){
        return checkenvironfriendfarmer4mobile();
    }else if(environfriendfarmer4comment === ""){
        return checkenvironfriendfarmer4comment();
    }else if(environfriendfarmer5variety === ""){
        return checkenvironfriendfarmer5variety();
    }else if(environfriendfarmer5nid === ""){
        return checkenvironfriendfarmer5nid();
    }else if(environfriendfarmer5date === ""){
        return checkenvironfriendfarmer5date();
    }else if(environfriendfarmer5address === ""){
        return checkenvironfriendfarmer5address();
    }else if(environfriendfarmer5 === ""){
        return checkenvironfriendfarmer5();
    }else if(environfriendfarmer5mobile === ""){
        return checkenvironfriendfarmer5mobile();
    }else if(environfriendfarmer5comment === ""){
        return checkenvironfriendfarmer5comment();
    }else if(environfriendfarmer6variety === ""){
        return checkenvironfriendfarmer6variety();
    }else if(environfriendfarmer6nid === ""){
        return checkenvironfriendfarmer6nid();
    }else if(environfriendfarmer6date === ""){
        return checkenvironfriendfarmer6date();
    }else if(environfriendfarmer6address === ""){
        return checkenvironfriendfarmer6address();
    }else if(environfriendfarmer6 === ""){
        return checkenvironfriendfarmer6();
    }else if(environfriendfarmer6mobile === ""){
        return checkenvironfriendfarmer6mobile();
    }else if(environfriendfarmer6comment === ""){
        return checkenvironfriendfarmer6comment();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('projectdemo-environfriend');
        var userData = {
            division: division,
            district: district,
            upazila: upazila,
            blockname: blockname,
            union: union,
            lastupdate: lastupdate,
			
            environfriendfarmer1variety: environfriendfarmer1variety,
			environfriendfarmer1nid: environfriendfarmer1nid,
            environfriendfarmer1date: environfriendfarmer1date,
            environfriendfarmer1address: environfriendfarmer1address,
			environfriendfarmer1: environfriendfarmer1,
            environfriendfarmer1mobile: environfriendfarmer1mobile,
            environfriendfarmer1comment: environfriendfarmer1comment,
			
            environfriendfarmer2variety: environfriendfarmer2variety,
			environfriendfarmer2nid: environfriendfarmer2nid,
            environfriendfarmer2date: environfriendfarmer2date,
            environfriendfarmer2address: environfriendfarmer2address,
			environfriendfarmer2: environfriendfarmer2,
            environfriendfarmer2mobile: environfriendfarmer2mobile,
            environfriendfarmer2comment: environfriendfarmer2comment,
			
            environfriendfarmer3variety: environfriendfarmer3variety,
			environfriendfarmer3nid: environfriendfarmer3nid,
            environfriendfarmer3date: environfriendfarmer3date,
            environfriendfarmer3address: environfriendfarmer3address,
			environfriendfarmer3: environfriendfarmer3,
            environfriendfarmer3mobile: environfriendfarmer3mobile,
            environfriendfarmer3comment: environfriendfarmer3comment,
			
            environfriendfarmer4variety: environfriendfarmer4variety,
			environfriendfarmer4nid: environfriendfarmer4nid,
            environfriendfarmer4date: environfriendfarmer4date,
            environfriendfarmer4address: environfriendfarmer4address,
			environfriendfarmer4: environfriendfarmer4,
            environfriendfarmer4mobile: environfriendfarmer4mobile,
            environfriendfarmer4comment: environfriendfarmer4comment,
			
            environfriendfarmer5variety: environfriendfarmer5variety,
			environfriendfarmer5nid: environfriendfarmer5nid,
            environfriendfarmer5date: environfriendfarmer5date,
            environfriendfarmer5address: environfriendfarmer5address,
			environfriendfarmer5: environfriendfarmer5,
            environfriendfarmer5mobile: environfriendfarmer5mobile,
            environfriendfarmer5comment: environfriendfarmer5comment,
			
            environfriendfarmer6variety: environfriendfarmer6variety,
			environfriendfarmer6nid: environfriendfarmer6nid,
            environfriendfarmer6date: environfriendfarmer6date,
            environfriendfarmer6address: environfriendfarmer6address,
			environfriendfarmer6: environfriendfarmer6,
            environfriendfarmer6mobile: environfriendfarmer6mobile,
            environfriendfarmer6comment: environfriendfarmer6comment,
			
			
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
