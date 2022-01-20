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
// xxxxxxxxxx Full mustardHarvest Validation xxxxxxxxxx
function checkmustardHarvest(){
    var mustardHarvest = document.getElementById("mustardHarvest");
    var mustardHarvestFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardHarvest.value.match(mustardHarvestFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardHarvestError").style.display = "block";
    }else{
        document.getElementById("mustardHarvestError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardAchieve Validation xxxxxxxxxx
function checkmustardAchieve(){
    var mustardAchieve = document.getElementById("mustardAchieve");
    var mustardAchieveFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardAchieve.value.match(mustardAchieveFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardAchieveError").style.display = "block";
    }else{
        document.getElementById("mustardAchieveError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardProduction Validation xxxxxxxxxx
function checkmustardProduction(){
    var mustardProduction = document.getElementById("mustardProduction");
    var mustardProductionFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardProduction.value.match(mustardProductionFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardProductionError").style.display = "block";
    }else{
        document.getElementById("mustardProductionError").style.display = "none";
    }
}
// xxxxxxxxxx Full wheatHarvest Validation xxxxxxxxxx
function checkwheatHarvest(){
    var wheatHarvest = document.getElementById("wheatHarvest");
    var wheatHarvestFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(wheatHarvest.value.match(wheatHarvestFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("wheatHarvestError").style.display = "block";
    }else{
        document.getElementById("wheatHarvestError").style.display = "none";
    }
}
// xxxxxxxxxx Full wheatAchieve Validation xxxxxxxxxx
function checkwheatAchieve(){
    var wheatAchieve = document.getElementById("wheatAchieve");
    var wheatAchieveFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(wheatAchieve.value.match(wheatAchieveFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("wheatAchieveError").style.display = "block";
    }else{
        document.getElementById("wheatAchieveError").style.display = "none";
    }
}
// xxxxxxxxxx Full wheatProduction Validation xxxxxxxxxx
function checkwheatProduction(){
    var wheatProduction = document.getElementById("wheatProduction");
    var wheatProductionFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(wheatProduction.value.match(wheatProductionFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("wheatProductionError").style.display = "block";
    }else{
        document.getElementById("wheatProductionError").style.display = "none";
    }
}
// xxxxxxxxxx Full potatoInbrid Validation xxxxxxxxxx
function checkpotatoInbrid(){
    var potatoInbrid = document.getElementById("potatoInbrid");
    var potatoInbridFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(potatoInbrid.value.match(potatoInbridFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("potatoInbridError").style.display = "block";
    }else{
        document.getElementById("potatoInbridError").style.display = "none";
    }
}
// xxxxxxxxxx Full potatoLocal Validation xxxxxxxxxx
function checkpotatoLocal(){
    var potatoLocal = document.getElementById("potatoLocal");
    var potatoLocalFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(potatoLocal.value.match(potatoLocalFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("potatoLocalError").style.display = "block";
    }else{
        document.getElementById("potatoLocalError").style.display = "none";
    }
}
// xxxxxxxxxx Full potatoHarvest Validation xxxxxxxxxx
function checkpotatoHarvest(){
    var potatoHarvest = document.getElementById("potatoHarvest");
    var potatoHarvestFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(potatoHarvest.value.match(potatoHarvestFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("potatoHarvestError").style.display = "block";
    }else{
        document.getElementById("potatoHarvestError").style.display = "none";
    }
}
// xxxxxxxxxx Full potatoProduction Validation xxxxxxxxxx
function checkpotatoProduction(){
    var potatoProduction = document.getElementById("potatoProduction");
    var potatoProductionFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(potatoProduction.value.match(potatoProductionFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("potatoProductionError").style.display = "block";
    }else{
        document.getElementById("potatoProductionError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizeAchieve Validation xxxxxxxxxx
function checkmaizeAchieve(){
    var maizeAchieve = document.getElementById("maizeAchieve");
    var maizeAchieveFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizeAchieve.value.match(maizeAchieveFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizeAchieveError").style.display = "block";
    }else{
        document.getElementById("maizeAchieveError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizeHarvest Validation xxxxxxxxxx
function checkmaizeHarvest(){
    var maizeHarvest = document.getElementById("maizeHarvest");
    var maizeHarvestFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizeHarvest.value.match(maizeHarvestFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizeHarvestError").style.display = "block";
    }else{
        document.getElementById("maizeHarvestError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizeProduction Validation xxxxxxxxxx
function checkmaizeProduction(){
    var maizeProduction = document.getElementById("maizeProduction");
    var maizeProductionFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizeProduction.value.match(maizeProductionFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizeProductionError").style.display = "block";
    }else{
        document.getElementById("maizeProductionError").style.display = "none";
    }
}
// xxxxxxxxxx Full peanutAchieve Validation xxxxxxxxxx
function checkpeanutAchieve(){
    var peanutAchieve = document.getElementById("peanutAchieve");
    var peanutAchieveFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(peanutAchieve.value.match(peanutAchieveFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("peanutAchieveError").style.display = "block";
    }else{
        document.getElementById("peanutAchieveError").style.display = "none";
    }
}
// xxxxxxxxxx Full peanutHarvest Validation xxxxxxxxxx
function checkpeanutHarvest(){
    var peanutHarvest = document.getElementById("peanutHarvest");
    var peanutHarvestFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(peanutHarvest.value.match(peanutHarvestFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("peanutHarvestError").style.display = "block";
    }else{
        document.getElementById("peanutHarvestError").style.display = "none";
    }
}
// xxxxxxxxxx Full peanutProduction Validation xxxxxxxxxx
function checkpeanutProduction(){
    var peanutProduction = document.getElementById("peanutProduction");
    var peanutProductionFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(peanutProduction.value.match(peanutProductionFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("peanutProductionError").style.display = "block";
    }else{
        document.getElementById("peanutProductionError").style.display = "none";
    }
}
// xxxxxxxxxx Full onionBulb Validation xxxxxxxxxx
function checkonionBulb(){
    var onionBulb = document.getElementById("onionBulb");
    var onionBulbFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(onionBulb.value.match(onionBulbFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("onionBulbError").style.display = "block";
    }else{
        document.getElementById("onionBulbError").style.display = "none";
    }
}
// xxxxxxxxxx Full onionSeed Validation xxxxxxxxxx
function checkonionSeed(){
    var onionSeed = document.getElementById("onionSeed");
    var onionSeedFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(onionSeed.value.match(onionSeedFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("onionSeedError").style.display = "block";
    }else{
        document.getElementById("onionSeedError").style.display = "none";
    }
}
// xxxxxxxxxx Full onionTotal Validation xxxxxxxxxx
function checkonionTotal(){
    var onionTotal = document.getElementById("onionTotal");
    var onionTotalFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(onionTotal.value.match(onionTotalFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("onionTotalError").style.display = "block";
    }else{
        document.getElementById("onionTotalError").style.display = "none";
    }
}
// xxxxxxxxxx Full onionHarvest Validation xxxxxxxxxx
function checkonionHarvest(){
    var onionHarvest = document.getElementById("onionHarvest");
    var onionHarvestFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(onionHarvest.value.match(onionHarvestFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("onionHarvestError").style.display = "block";
    }else{
        document.getElementById("onionHarvestError").style.display = "none";
    }
}
// xxxxxxxxxx Full onionProduction Validation xxxxxxxxxx
function checkonionProduction(){
    var onionProduction = document.getElementById("onionProduction");
    var onionProductionFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(onionProduction.value.match(onionProductionFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("onionProductionError").style.display = "block";
    }else{
        document.getElementById("onionProductionError").style.display = "none";
    }
}
// xxxxxxxxxx Full garlicAchieve Validation xxxxxxxxxx
function checkgarlicAchieve(){
    var garlicAchieve = document.getElementById("garlicAchieve");
    var garlicAchieveFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(garlicAchieve.value.match(garlicAchieveFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("garlicAchieveError").style.display = "block";
    }else{
        document.getElementById("garlicAchieveError").style.display = "none";
    }
}
// xxxxxxxxxx Full garlicHarvest Validation xxxxxxxxxx
function checkgarlicHarvest(){
    var garlicHarvest = document.getElementById("garlicHarvest");
    var garlicHarvestFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(garlicHarvest.value.match(garlicHarvestFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("garlicHarvestError").style.display = "block";
    }else{
        document.getElementById("garlicHarvestError").style.display = "none";
    }
}

// xxxxxxxxxx Full garlicProduction Validation xxxxxxxxxx
function checkgarlicProduction(){
    var garlicProduction = document.getElementById("garlicProduction");
    var garlicProductionFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(garlicProduction.value.match(garlicProductionFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("garlicProductionError").style.display = "block";
    }else{
        document.getElementById("garlicProductionError").style.display = "none";
    }
}
// xxxxxxxxxx Full mugAchieve Validation xxxxxxxxxx
function checkmugAchieve(){
    var mugAchieve = document.getElementById("mugAchieve");
    var mugAchieveFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mugAchieve.value.match(mugAchieveFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mugAchieveError").style.display = "block";
    }else{
        document.getElementById("mugAchieveError").style.display = "none";
    }
}
// xxxxxxxxxx Full sugarcaneAchieve Validation xxxxxxxxxx
function checksugarcaneAchieve(){
    var sugarcaneAchieve = document.getElementById("sugarcaneAchieve");
    var sugarcaneAchieveFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(sugarcaneAchieve.value.match(sugarcaneAchieveFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("sugarcaneAchieveError").style.display = "block";
    }else{
        document.getElementById("sugarcaneAchieveError").style.display = "none";
    }
}
// xxxxxxxxxx Full chiliAchieve Validation xxxxxxxxxx
function checkchiliAchieve(){
    var chiliAchieve = document.getElementById("chiliAchieve");
    var chiliAchieveFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(chiliAchieve.value.match(chiliAchieveFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("chiliAchieveError").style.display = "block";
    }else{
        document.getElementById("chiliAchieveError").style.display = "none";
    }
}
// xxxxxxxxxx Full chiliHarvest Validation xxxxxxxxxx
function checkchiliHarvest(){
    var chiliHarvest = document.getElementById("chiliHarvest");
    var chiliHarvestFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(chiliHarvest.value.match(chiliHarvestFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("chiliHarvestError").style.display = "block";
    }else{
        document.getElementById("chiliHarvestError").style.display = "none";
    }
}

// xxxxxxxxxx Full chiliProduction Validation xxxxxxxxxx
function checkchiliProduction(){
    var chiliProduction = document.getElementById("chiliProduction");
    var chiliProductionFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(chiliProduction.value.match(chiliProductionFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("chiliProductionError").style.display = "block";
    }else{
        document.getElementById("chiliProductionError").style.display = "none";
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
	
	var wheatAchieve = document.getElementById("wheatAchieve").value;
    var wheatHarvest = document.getElementById("wheatHarvest").value;
    var wheatProduction = document.getElementById("wheatProduction").value;
	
	var mustardAchieve = document.getElementById("mustardAchieve").value;
    var mustardHarvest = document.getElementById("mustardHarvest").value;
    var mustardProduction = document.getElementById("mustardProduction").value;
	
	var potatoLocal = document.getElementById("potatoLocal").value;
    var wheatProduction = document.getElementById("wheatProduction").value;
    var potatoInbrid = document.getElementById("potatoInbrid").value;
    var potatoHarvest = document.getElementById("potatoHarvest").value;
    var potatoProduction = document.getElementById("potatoProduction").value;
    
	var maizeAchieve = document.getElementById("maizeAchieve").value;
    var maizeHarvest = document.getElementById("maizeHarvest").value;
    var maizeProduction = document.getElementById("maizeProduction").value;
    
	var peanutAchieve = document.getElementById("peanutAchieve").value;
	var peanutHarvest = document.getElementById("peanutHarvest").value;
	var peanutProduction = document.getElementById("peanutProduction").value;
	
	var onionBulb = document.getElementById("onionBulb").value;
	var onionSeed = document.getElementById("onionSeed").value;
	var onionTotal = document.getElementById("onionTotal").value;
	var onionHarvest = document.getElementById("onionHarvest").value;
	var onionProduction = document.getElementById("onionProduction").value;
	
	var garlicAchieve = document.getElementById("garlicAchieve").value;
	var garlicHarvest = document.getElementById("garlicHarvest").value;
	var garlicProduction = document.getElementById("garlicProduction").value;
	
	var sugarcaneAchieve = document.getElementById("sugarcaneAchieve").value;
	
	var mugAchieve = document.getElementById("mugAchieve").value;
	
	var chiliAchieve = document.getElementById("chiliAchieve").value;
	var chiliHarvest = document.getElementById("chiliHarvest").value;
	var chiliProduction = document.getElementById("chiliProduction").value;

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
    }else if(wheatAchieve === ""){
        return checkwheatAchieve();
    }else if(wheatHarvest === ""){
        return checkwheatHarvest();
    }else if(wheatProduction === ""){
        return checkwheatProduction();
    }else if(mustardAchieve === ""){
        return checkmustardAchieve();
    }else if(mustardHarvest === ""){
        return checkmustardHarvest();
    }else if(mustardProduction === ""){
        return checkmustardProduction();
    }else if(potatoInbrid === ""){
        return checkpotatoInbrid();
    }else if(potatoLocal === ""){
        return checkpotatoLocal();
    }else if(potatoHarvest === ""){
        return checkpotatoHarvest();
    }else if(potatoProduction === ""){
        return checkpotatoProduction();
    }else if(maizeAchieve === ""){
        return checkmaizeAchieve();
    }else if(maizeHarvest === ""){
        return checkmaizeHarvest();
    }else if(maizeProduction === ""){
        return checkmaizeProduction();
    }else if(peanutAchieve === ""){
        return checkpeanutAchieve();
    }else if(peanutHarvest === ""){
        return checkpeanutHarvest();
    }else if(peanutProduction === ""){
        return checkpeanutProduction();
    }else if(onionBulb === ""){
        return checkonionBulb();
    }else if(onionSeed === ""){
        return checkonionSeed();
    }else if(onionTotal === ""){
        return checkonionTotal();
    }else if(onionHarvest === ""){
        return checkonionHarvest();
    }else if(onionProduction === ""){
        return checkonionProduction();
    }else if(garlicAchieve === ""){
        return checkgarlicAchieve();
    }else if(garlicHarvest === ""){
        return checkgarlicHarvest();
    }else if(garlicProduction === ""){
        return checkgarlicProduction();
    }else if(sugarcaneAchieve === ""){
        return checksugarcaneAchieve();
    }else if(mugAchieve === ""){
        return checkmugAchieve();
    }else if(chiliAchieve === ""){
        return checkchiliAchieve();
    }else if(chiliHarvest === ""){
        return checkchiliHarvest();
    }else if(chiliProduction === ""){
        return checkchiliProduction();
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
            var firebaseRef = firebase.database().ref().child('robiReport');
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
        let firebaseRefKey = firebase.database().ref().child('robiReport').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfwheatAchieve").innerHTML = dataSnapShot.val().wheatAchieve;
			document.getElementById("pfwheatHarvest").innerHTML = dataSnapShot.val().wheatHarvest;
            document.getElementById("pfwheatProduction").innerHTML = dataSnapShot.val().wheatProduction;
            document.getElementById("pfmustardAchieve").innerHTML = dataSnapShot.val().mustardAchieve;
			document.getElementById("pfmustardHarvest").innerHTML = dataSnapShot.val().mustardHarvest;
            document.getElementById("pfmustardProduction").innerHTML = dataSnapShot.val().mustardProduction;
            document.getElementById("pfpotatoInbrid").innerHTML = dataSnapShot.val().potatoInbrid;
            document.getElementById("pfpotatoLocal").innerHTML = dataSnapShot.val().potatoLocal;
            document.getElementById("pfpotatoHarvest").innerHTML = dataSnapShot.val().potatoHarvest;
            document.getElementById("pfpotatoProduction").innerHTML = dataSnapShot.val().potatoProduction;
            document.getElementById("pfmaizeAchieve").innerHTML = dataSnapShot.val().maizeAchieve;
            document.getElementById("pfmaizeHarvest").innerHTML = dataSnapShot.val().maizeHarvest;
            document.getElementById("pfmaizeProduction").innerHTML = dataSnapShot.val().maizeProduction;
            document.getElementById("pfpeanutAchieve").innerHTML = dataSnapShot.val().peanutAchieve;
            document.getElementById("pfpeanutHarvest").innerHTML = dataSnapShot.val().peanutHarvest;
            document.getElementById("pfpeanutProduction").innerHTML = dataSnapShot.val().peanutProduction;
            document.getElementById("pfonionBulb").innerHTML = dataSnapShot.val().onionBulb;
            document.getElementById("pfonionSeed").innerHTML = dataSnapShot.val().onionSeed;
            document.getElementById("pfonionTotal").innerHTML = dataSnapShot.val().onionTotal;
            document.getElementById("pfonionHarvest").innerHTML = dataSnapShot.val().onionHarvest;
            document.getElementById("pfonionProduction").innerHTML = dataSnapShot.val().onionProduction;
            document.getElementById("pfgarlicAchieve").innerHTML = dataSnapShot.val().garlicAchieve;
            document.getElementById("pfgarlicHarvest").innerHTML = dataSnapShot.val().garlicHarvest;
            document.getElementById("pfgarlicProduction").innerHTML = dataSnapShot.val().garlicProduction;
			document.getElementById("pfsugarcaneAchieve").innerHTML = dataSnapShot.val().sugarcaneAchieve;
			document.getElementById("pfmugAchieve").innerHTML = dataSnapShot.val().mugAchieve;
			document.getElementById("pfchiliAchieve").innerHTML = dataSnapShot.val().chiliAchieve;
            document.getElementById("pfchiliHarvest").innerHTML = dataSnapShot.val().chiliHarvest;
            document.getElementById("pfchiliProduction").innerHTML = dataSnapShot.val().chiliProduction;
			
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
    var pfwheatAchieve = document.getElementById("pfwheatAchieve").innerHTML;
	var pfwheatHarvest = document.getElementById("pfwheatHarvest").innerHTML;
    var pfwheatProduction = document.getElementById("pfwheatProduction").innerHTML;
    var pfmustardAchieve = document.getElementById("pfmustardAchieve").innerHTML;
	var pfmustardHarvest = document.getElementById("pfmustardHarvest").innerHTML;
    var pfmustardProduction = document.getElementById("pfmustardProduction").innerHTML;
    var pfpotatoInbrid = document.getElementById("pfpotatoInbrid").innerHTML;
    var pfpotatoLocal = document.getElementById("pfpotatoLocal").innerHTML;
    var pfpotatoHarvest = document.getElementById("pfpotatoHarvest").innerHTML;
    var pfpotatoProduction = document.getElementById("pfpotatoProduction").innerHTML;
    var pfmaizeAchieve = document.getElementById("pfmaizeAchieve").innerHTML;
    var pfmaizeHarvest = document.getElementById("pfmaizeHarvest").innerHTML;
    var pfmaizeProduction = document.getElementById("pfmaizeProduction").innerHTML;
    var pfpeanutAchieve = document.getElementById("pfpeanutAchieve").innerHTML;
    var pfpeanutHarvest = document.getElementById("pfpeanutHarvest").innerHTML;
    var pfpeanutProduction = document.getElementById("pfpeanutProduction").innerHTML;
    var pfonionBulb = document.getElementById("pfonionBulb").innerHTML;
    var pfonionSeed = document.getElementById("pfonionSeed").innerHTML;
    var pfonionTotal = document.getElementById("pfonionTotal").innerHTML;
    var pfonionHarvest = document.getElementById("pfonionHarvest").innerHTML;
    var pfonionProduction = document.getElementById("pfonionProduction").innerHTML;
    var pfgarlicAchieve = document.getElementById("pfgarlicAchieve").innerHTML;
    var pfgarlicHarvest = document.getElementById("pfgarlicHarvest").innerHTML;
    var pfgarlicProduction = document.getElementById("pfgarlicProduction").innerHTML;
    var pfsugarcaneAchieve = document.getElementById("pfsugarcaneAchieve").innerHTML;
    var pfmugAchieve = document.getElementById("pfmugAchieve").innerHTML;
    var pfchiliAchieve = document.getElementById("pfchiliAchieve").innerHTML;
    var pfchiliHarvest = document.getElementById("pfchiliHarvest").innerHTML;
    var pfchiliProduction = document.getElementById("pfchiliProduction").innerHTML;
    
    document.getElementById("blockname").value = pfblockname; 
    document.getElementById("union").value = pfunion; 
    document.getElementById("wheatAchieve").value = pfwheatAchieve;
	document.getElementById("wheatHarvest").value = pfwheatHarvest; 
    document.getElementById("wheatProduction").value = pfwheatProduction; 
    document.getElementById("mustardAchieve").value = pfmustardAchieve;
	document.getElementById("mustardHarvest").value = pfmustardHarvest; 
    document.getElementById("mustardProduction").value = pfmustardProduction; 
    document.getElementById("potatoInbrid").value = pfpotatoInbrid; 
    document.getElementById("potatoLocal").value = pfpotatoLocal; 
    document.getElementById("potatoHarvest").value = pfpotatoHarvest; 
    document.getElementById("potatoProduction").value = pfpotatoProduction; 
    document.getElementById("maizeAchieve").value = pfmaizeAchieve; 
    document.getElementById("maizeHarvest").value = pfmaizeHarvest; 
    document.getElementById("maizeProduction").value = pfmaizeProduction; 
    document.getElementById("peanutAchieve").value = pfpeanutAchieve; 
    document.getElementById("peanutHarvest").value = pfpeanutHarvest; 
    document.getElementById("peanutProduction").value = pfpeanutProduction;
    document.getElementById("onionBulb").value = pfonionBulb;
    document.getElementById("onionSeed").value = pfonionSeed;
    document.getElementById("onionTotal").value = pfonionTotal;
    document.getElementById("onionHarvest").value = pfonionHarvest;
    document.getElementById("onionProduction").value = pfonionProduction;
    document.getElementById("garlicAchieve").value = pfgarlicAchieve;
    document.getElementById("garlicHarvest").value = pfgarlicHarvest;
    document.getElementById("garlicProduction").value = pfgarlicProduction;
	document.getElementById("sugarcaneAchieve").value = pfsugarcaneAchieve;
	document.getElementById("mugAchieve").value = pfmugAchieve;
	document.getElementById("chiliAchieve").value = pfchiliAchieve;
    document.getElementById("chiliHarvest").value = pfchiliHarvest;
    document.getElementById("chiliProduction").value = pfchiliProduction;
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
    let wheatAchieve = document.getElementById("wheatAchieve").value
	let wheatHarvest = document.getElementById("wheatHarvest").value  
    let wheatProduction = document.getElementById("wheatProduction").value  
    let mustardAchieve = document.getElementById("mustardAchieve").value
	let mustardHarvest = document.getElementById("mustardHarvest").value  
    let mustardProduction = document.getElementById("mustardProduction").value  
    let potatoInbrid = document.getElementById("potatoInbrid").value  
    let potatoLocal = document.getElementById("potatoLocal").value  
    let potatoHarvest = document.getElementById("potatoHarvest").value  
    let potatoProduction = document.getElementById("potatoProduction").value  
    let maizeAchieve = document.getElementById("maizeAchieve").value  
    let maizeHarvest = document.getElementById("maizeHarvest").value  
    let maizeProduction = document.getElementById("maizeProduction").value  
    let peanutAchieve = document.getElementById("peanutAchieve").value  
    let peanutHarvest = document.getElementById("peanutHarvest").value  
    let peanutProduction = document.getElementById("peanutProduction").value  
    let onionBulb = document.getElementById("onionBulb").value  
    let onionSeed = document.getElementById("onionSeed").value  
    let onionTotal = document.getElementById("onionTotal").value  
    let onionHarvest = document.getElementById("onionHarvest").value  
    let onionProduction = document.getElementById("onionProduction").value  
    let garlicAchieve = document.getElementById("garlicAchieve").value  
    let garlicHarvest = document.getElementById("garlicHarvest").value  
    let garlicProduction = document.getElementById("garlicProduction").value  
    let sugarcaneAchieve = document.getElementById("sugarcaneAchieve").value  
    let mugAchieve = document.getElementById("mugAchieve").value  
    let chiliAchieve = document.getElementById("chiliAchieve").value  
    let chiliHarvest = document.getElementById("chiliHarvest").value  
    let chiliProduction = document.getElementById("chiliProduction").value  
    
    var blocknameFormate = /^([A-Za-z.\s_-]).{5,}$/; 
    var checkblocknameValid = blockname.match(blocknameFormate);
    if(blockname == null){
        return checkblockname();
    }else if(union === ""){
        return checkunion();
    }else if(lastupdate === ""){
        return checklastupdate();
    }else if(wheatAchieve === ""){
        return checkwheatAchieve();
    }else if(wheatHarvest === ""){
        return checkwheatHarvest();
    }else if(wheatProduction === ""){
        return checkwheatProduction();
    }else if(mustardAchieve === ""){
        return checkmustardAchieve();
    }else if(mustardHarvest === ""){
        return checkmustardHarvest();
    }else if(mustardProduction === ""){
        return checkmustardProduction();
    }else if(potatoInbrid === ""){
        return checkpotatoInbrid();
    }else if(potatoLocal === ""){
        return checkpotatoLocal();
    }else if(potatoHarvest === ""){
        return checkpotatoHarvest();
    }else if(potatoProduction === ""){
        return checkpotatoProduction();
    }else if(maizeAchieve === ""){
        return checkmaizeAchieve();
    }else if(maizeHarvest === ""){
        return checkmaizeHarvest();
    }else if(maizeProduction === ""){
        return checkmaizeProduction();
    }else if(peanutAchieve === ""){
        return checkpeanutAchieve();
    }else if(peanutHarvest === ""){
        return checkpeanutHarvest();
    }else if(peanutProduction === ""){
        return checkpeanutProduction();
    }else if(onionBulb === ""){
        return checkonionBulb();
    }else if(onionSeed === ""){
        return checkonionSeed();
    }else if(onionTotal === ""){
        return checkonionTotal();
    }else if(onionHarvest === ""){
        return checkonionHarvest();
    }else if(onionProduction === ""){
        return checkonionProduction();
    }else if(garlicAchieve === ""){
        return checkgarlicAchieve();
    }else if(garlicHarvest === ""){
        return checkgarlicHarvest();
    }else if(garlicProduction === ""){
        return checkgarlicProduction();
    }else if(mugAchieve === ""){
        return checkmugAchieve();
    }else if(sugarcaneAchieve === ""){
        return checksugarcaneAchieve();
    }else if(chiliAchieve === ""){
        return checkchiliAchieve();
    }else if(chiliHarvest === ""){
        return checkchiliHarvest();
    }else if(chiliProduction === ""){
        return checkchiliProduction();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('robiReport');
        var userData = {
            blockname: blockname,
            union: union,
            lastupdate: lastupdate,
            wheatAchieve: wheatAchieve,
			wheatHarvest: wheatHarvest,
            wheatProduction: wheatProduction,
            mustardAchieve: mustardAchieve,
			mustardHarvest: mustardHarvest,
            mustardProduction: mustardProduction,
            potatoInbrid: potatoInbrid,
            potatoLocal: potatoLocal,
            potatoProduction: potatoProduction,
            potatoHarvest: potatoHarvest,
            maizeAchieve: maizeAchieve,
            maizeHarvest: maizeHarvest,
            maizeProduction: maizeProduction,
            peanutAchieve: peanutAchieve,
            peanutHarvest: peanutHarvest,
            peanutProduction: peanutProduction,
            onionBulb: onionBulb,
            onionSeed: onionSeed,
            onionTotal: onionTotal,
            onionHarvest: onionHarvest,
            onionProduction: onionProduction,
            garlicAchieve: garlicAchieve,
            garlicHarvest: garlicHarvest,
            garlicProduction: garlicProduction,
			chiliAchieve: chiliAchieve,
            chiliHarvest: chiliHarvest,
            chiliProduction: chiliProduction,
            mugAchieve: mugAchieve,
            sugarcaneAchieve: sugarcaneAchieve
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
