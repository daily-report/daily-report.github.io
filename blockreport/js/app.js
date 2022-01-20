// xxxxxxxxxx Working For Sign Up Form xxxxxxxxxx
// xxxxxxxxxx Full blockname Validation xxxxxxxxxx
function checkblockname(){
    var blockname = document.getElementById("blockname");
    var blocknameFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(blockname.value.match(blocknameFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("blocknameError").style.display = "block";
    }else{
        document.getElementById("blocknameError").style.display = "none";
    }
}
// xxxxxxxxxx Full union Validation xxxxxxxxxx
function checkunion(){
    var union = document.getElementById("union");
    var unionFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(union.value.match(unionFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("unionError").style.display = "block";
    }else{
        document.getElementById("unionError").style.display = "none";
    }
}
// xxxxxxxxxx Full seedbedhybrid Validation xxxxxxxxxx
function checkseedbedhybrid(){
    var seedbedhybrid = document.getElementById("seedbedhybrid");
    var seedbedhybridFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(seedbedhybrid.value.match(seedbedhybridFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("seedbedhybridError").style.display = "block";
    }else{
        document.getElementById("seedbedhybridError").style.display = "none";
    }
}
// xxxxxxxxxx Full lastupdate Validation xxxxxxxxxx
function checklastupdate(){
    var lastupdate = document.getElementById("lastupdate");
    var lastupdateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(lastupdate.value.match(lastupdateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("lastupdateError").style.display = "block";
    }else{
        document.getElementById("lastupdateError").style.display = "none";
    }
}
// xxxxxxxxxx Full seedbedinbrid Validation xxxxxxxxxx
function checkseedbedinbrid(){
    var seedbedinbrid = document.getElementById("seedbedinbrid");
    var seedbedinbridFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(seedbedinbrid.value.match(seedbedinbridFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("seedbedinbridError").style.display = "block";
    }else{
        document.getElementById("seedbedinbridError").style.display = "none";
    }
}
// xxxxxxxxxx Full seedbedlocal Validation xxxxxxxxxx
function checkseedbedlocal(){
    var seedbedlocal = document.getElementById("seedbedlocal");
    var seedbedlocalFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(seedbedlocal.value.match(seedbedlocalFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("seedbedlocalError").style.display = "block";
    }else{
        document.getElementById("seedbedlocalError").style.display = "none";
    }
}
// xxxxxxxxxx Full seedbedstandard Validation xxxxxxxxxx
function checkseedbedstandard(){
    var seedbedstandard = document.getElementById("seedbedstandard");
    var seedbedstandardFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(seedbedstandard.value.match(seedbedstandardFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("seedbedstandardError").style.display = "block";
    }else{
        document.getElementById("seedbedstandardError").style.display = "none";
    }
}
// xxxxxxxxxx Full seedbeddrought Validation xxxxxxxxxx
function checkseedbeddrought(){
    var seedbeddrought = document.getElementById("seedbeddrought");
    var seedbeddroughtFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(seedbeddrought.value.match(seedbeddroughtFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("seedbeddroughtError").style.display = "block";
    }else{
        document.getElementById("seedbeddroughtError").style.display = "none";
    }
}
// xxxxxxxxxx Full seedbedgeneral Validation xxxxxxxxxx
function checkseedbedgeneral(){
    var seedbedgeneral = document.getElementById("seedbedgeneral");
    var seedbedgeneralFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(seedbedgeneral.value.match(seedbedgeneralFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("seedbedgeneralError").style.display = "block";
    }else{
        document.getElementById("seedbedgeneralError").style.display = "none";
    }
}
// xxxxxxxxxx Full achivehybrid Validation xxxxxxxxxx
function checkachivehybrid(){
    var achivehybrid = document.getElementById("achivehybrid");
    var achivehybridFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(achivehybrid.value.match(achivehybridFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("achivehybridError").style.display = "block";
    }else{
        document.getElementById("achivehybridError").style.display = "none";
    }
}
// xxxxxxxxxx Full achiveinbrid Validation xxxxxxxxxx
function checkachiveinbrid(){
    var achiveinbrid = document.getElementById("achiveinbrid");
    var achiveinbridFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(achiveinbrid.value.match(achiveinbridFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("achiveinbridError").style.display = "block";
    }else{
        document.getElementById("achiveinbridError").style.display = "none";
    }
}
// xxxxxxxxxx Full achivelocal Validation xxxxxxxxxx
function checkachivelocal(){
    var achivelocal = document.getElementById("achivelocal");
    var achivelocalFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(achivelocal.value.match(achivelocalFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("achivelocalError").style.display = "block";
    }else{
        document.getElementById("achivelocalError").style.display = "none";
    }
}
// xxxxxxxxxx Full stage1 Validation xxxxxxxxxx
function checkstage1(){
    var stage1 = document.getElementById("stage1");
    var stage1Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(stage1.value.match(stage1Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("stage1Error").style.display = "block";
    }else{
        document.getElementById("stage1Error").style.display = "none";
    }
}
// xxxxxxxxxx Full stage2 Validation xxxxxxxxxx
function checkstage2(){
    var stage2 = document.getElementById("stage2");
    var stage2Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(stage2.value.match(stage2Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("stage2Error").style.display = "block";
    }else{
        document.getElementById("stage2Error").style.display = "none";
    }
}
// xxxxxxxxxx Full stage3 Validation xxxxxxxxxx
function checkstage3(){
    var stage3 = document.getElementById("stage3");
    var stage3Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(stage3.value.match(stage3Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("stage3Error").style.display = "block";
    }else{
        document.getElementById("stage3Error").style.display = "none";
    }
}
// xxxxxxxxxx Full stage4 Validation xxxxxxxxxx
function checkstage4(){
    var stage4 = document.getElementById("stage4");
    var stage4Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(stage4.value.match(stage4Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("stage4Error").style.display = "block";
    }else{
        document.getElementById("stage4Error").style.display = "none";
    }
}
// xxxxxxxxxx Full stage5 Validation xxxxxxxxxx
function checkstage5(){
    var stage5 = document.getElementById("stage5");
    var stage5Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(stage5.value.match(stage5Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("stage5Error").style.display = "block";
    }else{
        document.getElementById("stage5Error").style.display = "none";
    }
}
// xxxxxxxxxx Full stage6 Validation xxxxxxxxxx
function checkstage6(){
    var stage6 = document.getElementById("stage6");
    var stage6Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(stage6.value.match(stage6Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("stage6Error").style.display = "block";
    }else{
        document.getElementById("stage6Error").style.display = "none";
    }
}
// xxxxxxxxxx Full stage7 Validation xxxxxxxxxx
function checkstage7(){
    var stage7 = document.getElementById("stage7");
    var stage7Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(stage7.value.match(stage7Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("stage7Error").style.display = "block";
    }else{
        document.getElementById("stage7Error").style.display = "none";
    }
}
// xxxxxxxxxx Full stage8 Validation xxxxxxxxxx
function checkstage8(){
    var stage8 = document.getElementById("stage8");
    var stage8Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(stage8.value.match(stage8Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("stage8Error").style.display = "block";
    }else{
        document.getElementById("stage8Error").style.display = "none";
    }
}
// xxxxxxxxxx Full stage9 Validation xxxxxxxxxx
function checkstage9(){
    var stage9 = document.getElementById("stage9");
    var stage9Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(stage9.value.match(stage9Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("stage9Error").style.display = "block";
    }else{
        document.getElementById("stage9Error").style.display = "none";
    }
}
// xxxxxxxxxx Full stageTotal Validation xxxxxxxxxx
function checkstageTotal(){
    var stageTotal = document.getElementById("stageTotal");
    var stageTotalFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(stageTotal.value.match(stageTotalFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("stageTotalError").style.display = "block";
    }else{
        document.getElementById("stageTotalError").style.display = "none";
    }
}


// xxxxxxxxxx Email Validation xxxxxxxxxx
function checkemail(){
    var email = document.getElementById("email");
    var emailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(email.value.match(emailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("emailError").style.display = "block";
    }else{
        document.getElementById("emailError").style.display = "none";
    }
}
// xxxxxxxxxx password Validation xxxxxxxxxx
function checkpassword(){
    var password = document.getElementById("password");
    //var passwordFormate = /(?=.*\d)(?=.[a-z])(?=.[A-Z]).{10,}/;      
    var flag = false;
    if(password === ""){
        flag = true;
    }    
    if(flag){
        document.getElementById("passwordError").style.display = "block";
    }else{
        document.getElementById("passwordError").style.display = "none";
    }
}
// xxxxxxxxxx Check user bio characters. It'll use later xxxxxxxxxx
function checkUserBio(){
    var userBio = document.getElementById("userBio").value;
    var flag = false;
    if(userBio.length < 10){
        flag = true;
    }
    if(flag){
        document.getElementById("userBioError").style.display = "block";
    }else{
        document.getElementById("userBioError").style.display = "none";
    }
}
// xxxxxxxxxx Submitting and Creating new user in firebase authentication xxxxxxxxxx
function signUp(){
    var blockname = document.getElementById("blockname").value;
	var union = document.getElementById("union").value;
	var lastupdate = document.getElementById("lastupdate").value;
	var seedbedhybrid = document.getElementById("seedbedhybrid").value;
    var seedbedinbrid = document.getElementById("seedbedinbrid").value;
    var seedbeddrought = document.getElementById("seedbeddrought").value;
    var seedbedlocal = document.getElementById("seedbedlocal").value;
    var seedbedstandard = document.getElementById("seedbedstandard").value;
    var seedbedgeneral = document.getElementById("seedbedgeneral").value;
    var achivehybrid = document.getElementById("achivehybrid").value;
    var achiveinbrid = document.getElementById("achiveinbrid").value;
    var achivelocal = document.getElementById("achivelocal").value;
    var stage1 = document.getElementById("stage1").value;
	var stage2 = document.getElementById("stage2").value;
	var stage3 = document.getElementById("stage3").value;
	var stage4 = document.getElementById("stage4").value;
	var stage5 = document.getElementById("stage5").value;
	var stage6 = document.getElementById("stage6").value;
	var stage7 = document.getElementById("stage7").value;
	var stage8 = document.getElementById("stage8").value;
	var stage9 = document.getElementById("stage9").value;
	var stageTotal = document.getElementById("stageTotal").value;

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var blocknameFormate = /^([A-Za-z.\s_-]).{5,}$/;    
    var emailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //var passwordFormate = /(?=.*\d)(?=.[a-z])(?=.[A-Z]).{5,}/;      

    var checkblocknameValid = blockname.match(blocknameFormate);
    var checkemailValid = email.match(emailFormate);
    //var checkpasswordValid = password.match(passwordFormate);

    if(checkblocknameValid == null){
        return checkblockname();
    }else if(union === ""){
        return checkunion();
    }else if(lastupdate === ""){
        return checklastupdate();
    }else if(seedbedhybrid === ""){
        return checkseedbedhybrid();
    }else if(seedbedinbrid === ""){
        return checkseedbedinbrid();
    }else if(seedbedlocal === ""){
        return checkseedbedlocal();
    }else if(seedbedstandard === ""){
        return checkseedbedstandard();
    }else if(seedbeddrought === ""){
        return checkseedbeddrought();
    }else if(seedbedgeneral === ""){
        return checkseedbedgeneral();
    }else if(achivehybrid === ""){
        return checkachivehybrid();
    }else if(achiveinbrid === ""){
        return checkachiveinbrid();
    }else if(achivelocal === ""){
        return checkachivelocal();
    }else if(stage1 === ""){
        return checkstage1();
    }else if(stage2 === ""){
        return checkstage2();
    }else if(stage3 === ""){
        return checkstage3();
    }else if(stage4 === ""){
        return checkstage4();
    }else if(stage5 === ""){
        return checkstage5();
    }else if(stage6 === ""){
        return checkstage6();
    }else if(stage7 === ""){
        return checkstage7();
    }else if(stage8 === ""){
        return checkstage8();
    }else if(stage9 === ""){
        return checkstage9();
    }else if(stageTotal === ""){
        return checkstageTotal();
    }else if(checkemailValid == null){
        return checkemail();
    }else if(password == null){
        return checkpassword();
    }else{
        firebase.auth().createUserWithEmailAndpassword(email, password).then((success) => {
            var user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            var firebaseRef = firebase.database().ref().child('boroReport');
            var userData = {
                blockname: blockname,
				union: union,
				email: email,
				password: password
            }
            firebaseRef.child(uid).set(userData);
            swal('Account Successfully Created','Your account has been successfully created. Now you can Login to your account','success'
            ).then((value) => {
                setTimeout(function(){
                    window.location.replace("../index.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Error',
                text: errorMessage,
            })
        });
    }
}
// xxxxxxxxxx Working For Sign In Form xxxxxxxxxx
// xxxxxxxxxx Sign In Email Validation xxxxxxxxxx
function checkUserSIEmail(){
    var userSIEmail = document.getElementById("userSIEmail");
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(userSIEmail.value.match(userSIEmailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("userSIEmailError").style.display = "block";
    }else{
        document.getElementById("userSIEmailError").style.display = "none";
    }
}
// xxxxxxxxxx Sign In password Validation xxxxxxxxxx
function checkUserSIpassword(){
    var userSIpassword = document.getElementById("userSIpassword");
    //var userSIpasswordFormate = /(?=.*\d)(?=.[a-z])(?=.[A-Z]).{5,}/;      
    var flag = false;
    if(password === ""){
        flag = true;
    }   
    if(flag){
        document.getElementById("userSIpasswordError").style.display = "block";
    }else{
        document.getElementById("userSIpasswordError").style.display = "none";
    }
}
// xxxxxxxxxx Check email or password exsist in firebase authentication xxxxxxxxxx    
function signIn(){
    var userSIEmail = document.getElementById("userSIEmail").value;
    var userSIPassword = document.getElementById("userSIPassword").value;
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //var userSIPasswordFormate = /(?=.*\d)(?=.[a-z])(?=.[A-Z]).{5,}/;      

    var checkemailValid = userSIEmail.match(userSIEmailFormate);
    //var checkpasswordValid = userSIPassword.match(userSIPasswordFormate);

    if(checkemailValid == null){
        return checkUserSIEmail();
    }else if(checkpassword == null){
        return checkUserSIPassword();
    }else{
        firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
            swal({
                type: 'success',
                title: 'Successfully Signed In', 
            }).then((value) => {
                setTimeout(function(){
                    window.location.replace("./pages/profile.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Error',
                text: errorMessage,
            })
        });
    }
}
// admin sign in | xxxxxxxxxx Check email or password exsist in firebase authentication xxxxxxxxxx    
function signIn2(){
    var userSIEmail = document.getElementById("userSIEmail").value;
    var userSIPassword = document.getElementById("userSIPassword").value;
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //var userSIPasswordFormate = /(?=.*\d)(?=.[a-z])(?=.[A-Z]).{5,}/;      

    var checkemailValid = userSIEmail.match(userSIEmailFormate);
    //var checkpasswordValid = userSIPassword.match(userSIPasswordFormate);

    if(checkemailValid == null){
        return checkUserSIEmail();
    }else if(checkpassword == null){
        return checkUserSIPassword();
    }else{
        firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
            swal({
                type: 'success',
                title: 'Successfully Signed In', 
            }).then((value) => {
                setTimeout(function(){
                    window.location.replace("./all-dealers.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Error',
                text: errorMessage,
            })
        });
    }
}
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
        let firebaseRefKey = firebase.database().ref().child('boroReport').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfseedbedhybrid").innerHTML = dataSnapShot.val().seedbedhybrid;
			document.getElementById("pfseedbedinbrid").innerHTML = dataSnapShot.val().seedbedinbrid;
            document.getElementById("pfseedbedlocal").innerHTML = dataSnapShot.val().seedbedlocal;
            document.getElementById("pfseedbedstandard").innerHTML = dataSnapShot.val().seedbedstandard;
            document.getElementById("pfseedbeddrought").innerHTML = dataSnapShot.val().seedbeddrought;
            document.getElementById("pfseedbedgeneral").innerHTML = dataSnapShot.val().seedbedgeneral;
            document.getElementById("pfachivehybrid").innerHTML = dataSnapShot.val().achivehybrid;
            document.getElementById("pfachiveinbrid").innerHTML = dataSnapShot.val().achiveinbrid;
            document.getElementById("pfachivelocal").innerHTML = dataSnapShot.val().achivelocal;
            document.getElementById("pfstage1").innerHTML = dataSnapShot.val().stage1;
            document.getElementById("pfstage2").innerHTML = dataSnapShot.val().stage2;
            document.getElementById("pfstage3").innerHTML = dataSnapShot.val().stage3;
            document.getElementById("pfstage4").innerHTML = dataSnapShot.val().stage4;
            document.getElementById("pfstage5").innerHTML = dataSnapShot.val().stage5;
            document.getElementById("pfstage6").innerHTML = dataSnapShot.val().stage6;
            document.getElementById("pfstage7").innerHTML = dataSnapShot.val().stage7;
            document.getElementById("pfstage8").innerHTML = dataSnapShot.val().stage8;
            document.getElementById("pfstage9").innerHTML = dataSnapShot.val().stage9;
            document.getElementById("pfstageTotal").innerHTML = dataSnapShot.val().stageTotal;
			
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
    var pfseedbedhybrid = document.getElementById("pfseedbedhybrid").innerHTML;
	var pfseedbedinbrid = document.getElementById("pfseedbedinbrid").innerHTML;
    var pfseedbedlocal = document.getElementById("pfseedbedlocal").innerHTML;
    var pfseedbedstandard = document.getElementById("pfseedbedstandard").innerHTML;
    var pfseedbeddrought = document.getElementById("pfseedbeddrought").innerHTML;
    var pfseedbedgeneral = document.getElementById("pfseedbedgeneral").innerHTML;
    var pfachivehybrid = document.getElementById("pfachivehybrid").innerHTML;
    var pfachiveinbrid = document.getElementById("pfachiveinbrid").innerHTML;
    var pfachivelocal = document.getElementById("pfachivelocal").innerHTML;
    var pfstage1 = document.getElementById("pfstage1").innerHTML;
    var pfstage2 = document.getElementById("pfstage2").innerHTML;
    var pfstage3 = document.getElementById("pfstage3").innerHTML;
    var pfstage4 = document.getElementById("pfstage4").innerHTML;
    var pfstage5 = document.getElementById("pfstage5").innerHTML;
    var pfstage6 = document.getElementById("pfstage6").innerHTML;
    var pfstage7 = document.getElementById("pfstage7").innerHTML;
    var pfstage8 = document.getElementById("pfstage8").innerHTML;
    var pfstage9 = document.getElementById("pfstage9").innerHTML;
    var pfstageTotal = document.getElementById("pfstageTotal").innerHTML;
    
    document.getElementById("blockname").value = pfblockname; 
    document.getElementById("union").value = pfunion; 
    document.getElementById("seedbedhybrid").value = pfseedbedhybrid;
	document.getElementById("seedbedinbrid").value = pfseedbedinbrid; 
    document.getElementById("seedbedlocal").value = pfseedbedlocal; 
    document.getElementById("seedbedstandard").value = pfseedbedstandard; 
    document.getElementById("seedbeddrought").value = pfseedbeddrought; 
    document.getElementById("seedbedgeneral").value = pfseedbedgeneral; 
    document.getElementById("achivehybrid").value = pfachivehybrid; 
    document.getElementById("achiveinbrid").value = pfachiveinbrid; 
    document.getElementById("achivelocal").value = pfachivelocal; 
    document.getElementById("stage1").value = pfstage1; 
    document.getElementById("stage2").value = pfstage2; 
    document.getElementById("stage3").value = pfstage3;
    document.getElementById("stage4").value = pfstage4;
    document.getElementById("stage5").value = pfstage5;
    document.getElementById("stage6").value = pfstage6;
    document.getElementById("stage7").value = pfstage7;
    document.getElementById("stage8").value = pfstage8;
    document.getElementById("stage9").value = pfstage9;
    document.getElementById("stageTotal").value = pfstageTotal;
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
    let seedbedhybrid = document.getElementById("seedbedhybrid").value
	let seedbedinbrid = document.getElementById("seedbedinbrid").value  
    let seedbedlocal = document.getElementById("seedbedlocal").value  
    let seedbedstandard = document.getElementById("seedbedstandard").value  
    let seedbeddrought = document.getElementById("seedbeddrought").value  
    let seedbedgeneral = document.getElementById("seedbedgeneral").value  
    let achivehybrid = document.getElementById("achivehybrid").value  
    let achiveinbrid = document.getElementById("achiveinbrid").value  
    let achivelocal = document.getElementById("achivelocal").value  
    let stage1 = document.getElementById("stage1").value  
    let stage2 = document.getElementById("stage2").value  
    let stage3 = document.getElementById("stage3").value  
    let stage4 = document.getElementById("stage4").value  
    let stage5 = document.getElementById("stage5").value  
    let stage6 = document.getElementById("stage6").value  
    let stage7 = document.getElementById("stage7").value  
    let stage8 = document.getElementById("stage8").value  
    let stage9 = document.getElementById("stage9").value  
    let stageTotal = document.getElementById("stageTotal").value  
    
    var blocknameFormate = /^([A-Za-z.\s_-]).{5,}$/; 
    var checkblocknameValid = blockname.match(blocknameFormate);
    if(blockname == null){
        return checkblockname();
    }else if(union === ""){
        return checkunion();
    }else if(lastupdate === ""){
        return checklastupdate();
    }else if(seedbedhybrid === ""){
        return checkseedbedhybrid();
    }else if(seedbedinbrid === ""){
        return checkseedbedinbrid();
    }else if(seedbedlocal === ""){
        return checkseedbedlocal();
    }else if(seedbedstandard === ""){
        return checkseedbedstandard();
    }else if(seedbeddrought === ""){
        return checkseedbeddrought();
    }else if(seedbedgeneral === ""){
        return checkseedbedgeneral();
    }else if(achivehybrid === ""){
        return checkachivehybrid();
    }else if(achiveinbrid === ""){
        return checkachiveinbrid();
    }else if(achivelocal === ""){
        return checkachivelocal();
    }else if(stage1 === ""){
        return checkstage1();
    }else if(stage2 === ""){
        return checkstage2();
    }else if(stage3 === ""){
        return checkstage3();
    }else if(stage4 === ""){
        return checkstage4();
    }else if(stage5 === ""){
        return checkstage5();
    }else if(stage6 === ""){
        return checkstage6();
    }else if(stage7 === ""){
        return checkstage7();
    }else if(stage8 === ""){
        return checkstage8();
    }else if(stage9 === ""){
        return checkstage9();
    }else if(stageTotal === ""){
        return checkstageTotal();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('boroReport');
        var userData = {
            blockname: blockname,
            union: union,
            lastupdate: lastupdate,
            seedbedhybrid: seedbedhybrid,
			seedbedinbrid: seedbedinbrid,
            seedbedlocal: seedbedlocal,
            seedbedstandard: seedbedstandard,
            seedbeddrought: seedbeddrought,
            seedbedgeneral: seedbedgeneral,
            achivehybrid: achivehybrid,
            achiveinbrid: achiveinbrid,
            achivelocal: achivelocal,
            stage1: stage1,
            stage2: stage2,
            stage3: stage3,
            stage4: stage4,
            stage5: stage5,
            stage6: stage6,
            stage7: stage7,
            stage8: stage8,
            stage9: stage9,
            stageTotal: stageTotal
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
