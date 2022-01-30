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
// xxxxxxxxxx Full maizefarmer1 Validation xxxxxxxxxx
function checkmaizefarmer1(){
    var maizefarmer1 = document.getElementById("maizefarmer1");
    var maizefarmer1Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer1.value.match(maizefarmer1Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer1Error").style.display = "block";
    }else{
        document.getElementById("maizefarmer1Error").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer1address Validation xxxxxxxxxx
function checkmaizefarmer1address(){
    var maizefarmer1address = document.getElementById("maizefarmer1address");
    var maizefarmer1addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer1address.value.match(maizefarmer1addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer1addressError").style.display = "block";
    }else{
        document.getElementById("maizefarmer1addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer1mobile Validation xxxxxxxxxx
function checkmaizefarmer1mobile(){
    var maizefarmer1mobile = document.getElementById("maizefarmer1mobile");
    var maizefarmer1mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer1mobile.value.match(maizefarmer1mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer1mobileError").style.display = "block";
    }else{
        document.getElementById("maizefarmer1mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer1nid Validation xxxxxxxxxx
function checkmaizefarmer1nid(){
    var maizefarmer1nid = document.getElementById("maizefarmer1nid");
    var maizefarmer1nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer1nid.value.match(maizefarmer1nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer1nidError").style.display = "block";
    }else{
        document.getElementById("maizefarmer1nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer1variety Validation xxxxxxxxxx
function checkmaizefarmer1variety(){
    var maizefarmer1variety = document.getElementById("maizefarmer1variety");
    var maizefarmer1varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer1variety.value.match(maizefarmer1varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer1varietyError").style.display = "block";
    }else{
        document.getElementById("maizefarmer1varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer1date Validation xxxxxxxxxx
function checkmaizefarmer1date(){
    var maizefarmer1date = document.getElementById("maizefarmer1date");
    var maizefarmer1dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer1date.value.match(maizefarmer1dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer1dateError").style.display = "block";
    }else{
        document.getElementById("maizefarmer1dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer1comment Validation xxxxxxxxxx
function checkmaizefarmer1comment(){
    var maizefarmer1comment = document.getElementById("maizefarmer1comment");
    var maizefarmer1commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer1comment.value.match(maizefarmer1commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer1commentError").style.display = "block";
    }else{
        document.getElementById("maizefarmer1commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer2 Validation xxxxxxxxxx
function checkmaizefarmer2(){
    var maizefarmer2 = document.getElementById("maizefarmer2");
    var maizefarmer2Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer2.value.match(maizefarmer2Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer2Error").style.display = "block";
    }else{
        document.getElementById("maizefarmer2Error").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer2address Validation xxxxxxxxxx
function checkmaizefarmer2address(){
    var maizefarmer2address = document.getElementById("maizefarmer2address");
    var maizefarmer2addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer2address.value.match(maizefarmer2addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer2addressError").style.display = "block";
    }else{
        document.getElementById("maizefarmer2addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer2mobile Validation xxxxxxxxxx
function checkmaizefarmer2mobile(){
    var maizefarmer2mobile = document.getElementById("maizefarmer2mobile");
    var maizefarmer2mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer2mobile.value.match(maizefarmer2mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer2mobileError").style.display = "block";
    }else{
        document.getElementById("maizefarmer2mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer2nid Validation xxxxxxxxxx
function checkmaizefarmer2nid(){
    var maizefarmer2nid = document.getElementById("maizefarmer2nid");
    var maizefarmer2nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer2nid.value.match(maizefarmer2nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer2nidError").style.display = "block";
    }else{
        document.getElementById("maizefarmer2nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer2variety Validation xxxxxxxxxx
function checkmaizefarmer2variety(){
    var maizefarmer2variety = document.getElementById("maizefarmer2variety");
    var maizefarmer2varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer2variety.value.match(maizefarmer2varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer2varietyError").style.display = "block";
    }else{
        document.getElementById("maizefarmer2varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer2date Validation xxxxxxxxxx
function checkmaizefarmer2date(){
    var maizefarmer2date = document.getElementById("maizefarmer2date");
    var maizefarmer2dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer2date.value.match(maizefarmer2dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer2dateError").style.display = "block";
    }else{
        document.getElementById("maizefarmer2dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer2comment Validation xxxxxxxxxx
function checkmaizefarmer2comment(){
    var maizefarmer2comment = document.getElementById("maizefarmer2comment");
    var maizefarmer2commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer2comment.value.match(maizefarmer2commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer2commentError").style.display = "block";
    }else{
        document.getElementById("maizefarmer2commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer3 Validation xxxxxxxxxx
function checkmaizefarmer3(){
    var maizefarmer3 = document.getElementById("maizefarmer3");
    var maizefarmer3Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer3.value.match(maizefarmer3Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer3Error").style.display = "block";
    }else{
        document.getElementById("maizefarmer3Error").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer3address Validation xxxxxxxxxx
function checkmaizefarmer3address(){
    var maizefarmer3address = document.getElementById("maizefarmer3address");
    var maizefarmer3addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer3address.value.match(maizefarmer3addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer3addressError").style.display = "block";
    }else{
        document.getElementById("maizefarmer3addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer3mobile Validation xxxxxxxxxx
function checkmaizefarmer3mobile(){
    var maizefarmer3mobile = document.getElementById("maizefarmer3mobile");
    var maizefarmer3mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer3mobile.value.match(maizefarmer3mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer3mobileError").style.display = "block";
    }else{
        document.getElementById("maizefarmer3mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer3nid Validation xxxxxxxxxx
function checkmaizefarmer3nid(){
    var maizefarmer3nid = document.getElementById("maizefarmer3nid");
    var maizefarmer3nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer3nid.value.match(maizefarmer3nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer3nidError").style.display = "block";
    }else{
        document.getElementById("maizefarmer3nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer3variety Validation xxxxxxxxxx
function checkmaizefarmer3variety(){
    var maizefarmer3variety = document.getElementById("maizefarmer3variety");
    var maizefarmer3varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer3variety.value.match(maizefarmer3varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer3varietyError").style.display = "block";
    }else{
        document.getElementById("maizefarmer3varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer3date Validation xxxxxxxxxx
function checkmaizefarmer3date(){
    var maizefarmer3date = document.getElementById("maizefarmer3date");
    var maizefarmer3dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer3date.value.match(maizefarmer3dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer3dateError").style.display = "block";
    }else{
        document.getElementById("maizefarmer3dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer3comment Validation xxxxxxxxxx
function checkmaizefarmer3comment(){
    var maizefarmer3comment = document.getElementById("maizefarmer3comment");
    var maizefarmer3commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer3comment.value.match(maizefarmer3commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer3commentError").style.display = "block";
    }else{
        document.getElementById("maizefarmer3commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer4 Validation xxxxxxxxxx
function checkmaizefarmer4(){
    var maizefarmer4 = document.getElementById("maizefarmer4");
    var maizefarmer4Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer4.value.match(maizefarmer4Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer4Error").style.display = "block";
    }else{
        document.getElementById("maizefarmer4Error").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer4address Validation xxxxxxxxxx
function checkmaizefarmer4address(){
    var maizefarmer4address = document.getElementById("maizefarmer4address");
    var maizefarmer4addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer4address.value.match(maizefarmer4addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer4addressError").style.display = "block";
    }else{
        document.getElementById("maizefarmer4addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer4mobile Validation xxxxxxxxxx
function checkmaizefarmer4mobile(){
    var maizefarmer4mobile = document.getElementById("maizefarmer4mobile");
    var maizefarmer4mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer4mobile.value.match(maizefarmer4mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer4mobileError").style.display = "block";
    }else{
        document.getElementById("maizefarmer4mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer4nid Validation xxxxxxxxxx
function checkmaizefarmer4nid(){
    var maizefarmer4nid = document.getElementById("maizefarmer4nid");
    var maizefarmer4nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer4nid.value.match(maizefarmer4nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer4nidError").style.display = "block";
    }else{
        document.getElementById("maizefarmer4nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer4variety Validation xxxxxxxxxx
function checkmaizefarmer4variety(){
    var maizefarmer4variety = document.getElementById("maizefarmer4variety");
    var maizefarmer4varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer4variety.value.match(maizefarmer4varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer4varietyError").style.display = "block";
    }else{
        document.getElementById("maizefarmer4varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer4date Validation xxxxxxxxxx
function checkmaizefarmer4date(){
    var maizefarmer4date = document.getElementById("maizefarmer4date");
    var maizefarmer4dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer4date.value.match(maizefarmer4dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer4dateError").style.display = "block";
    }else{
        document.getElementById("maizefarmer4dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer4comment Validation xxxxxxxxxx
function checkmaizefarmer4comment(){
    var maizefarmer4comment = document.getElementById("maizefarmer4comment");
    var maizefarmer4commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer4comment.value.match(maizefarmer4commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer4commentError").style.display = "block";
    }else{
        document.getElementById("maizefarmer4commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer5 Validation xxxxxxxxxx
function checkmaizefarmer5(){
    var maizefarmer5 = document.getElementById("maizefarmer5");
    var maizefarmer5Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer5.value.match(maizefarmer5Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer5Error").style.display = "block";
    }else{
        document.getElementById("maizefarmer5Error").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer5address Validation xxxxxxxxxx
function checkmaizefarmer5address(){
    var maizefarmer5address = document.getElementById("maizefarmer5address");
    var maizefarmer5addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer5address.value.match(maizefarmer5addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer5addressError").style.display = "block";
    }else{
        document.getElementById("maizefarmer5addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer5mobile Validation xxxxxxxxxx
function checkmaizefarmer5mobile(){
    var maizefarmer5mobile = document.getElementById("maizefarmer5mobile");
    var maizefarmer5mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer5mobile.value.match(maizefarmer5mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer5mobileError").style.display = "block";
    }else{
        document.getElementById("maizefarmer5mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer5nid Validation xxxxxxxxxx
function checkmaizefarmer5nid(){
    var maizefarmer5nid = document.getElementById("maizefarmer5nid");
    var maizefarmer5nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer5nid.value.match(maizefarmer5nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer5nidError").style.display = "block";
    }else{
        document.getElementById("maizefarmer5nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer5variety Validation xxxxxxxxxx
function checkmaizefarmer5variety(){
    var maizefarmer5variety = document.getElementById("maizefarmer5variety");
    var maizefarmer5varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer5variety.value.match(maizefarmer5varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer5varietyError").style.display = "block";
    }else{
        document.getElementById("maizefarmer5varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer5date Validation xxxxxxxxxx
function checkmaizefarmer5date(){
    var maizefarmer5date = document.getElementById("maizefarmer5date");
    var maizefarmer5dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer5date.value.match(maizefarmer5dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer5dateError").style.display = "block";
    }else{
        document.getElementById("maizefarmer5dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer5comment Validation xxxxxxxxxx
function checkmaizefarmer5comment(){
    var maizefarmer5comment = document.getElementById("maizefarmer5comment");
    var maizefarmer5commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer5comment.value.match(maizefarmer5commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer5commentError").style.display = "block";
    }else{
        document.getElementById("maizefarmer5commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer6 Validation xxxxxxxxxx
function checkmaizefarmer6(){
    var maizefarmer6 = document.getElementById("maizefarmer6");
    var maizefarmer6Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer6.value.match(maizefarmer6Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer6Error").style.display = "block";
    }else{
        document.getElementById("maizefarmer6Error").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer6address Validation xxxxxxxxxx
function checkmaizefarmer6address(){
    var maizefarmer6address = document.getElementById("maizefarmer6address");
    var maizefarmer6addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer6address.value.match(maizefarmer6addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer6addressError").style.display = "block";
    }else{
        document.getElementById("maizefarmer6addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer6mobile Validation xxxxxxxxxx
function checkmaizefarmer6mobile(){
    var maizefarmer6mobile = document.getElementById("maizefarmer6mobile");
    var maizefarmer6mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer6mobile.value.match(maizefarmer6mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer6mobileError").style.display = "block";
    }else{
        document.getElementById("maizefarmer6mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer6nid Validation xxxxxxxxxx
function checkmaizefarmer6nid(){
    var maizefarmer6nid = document.getElementById("maizefarmer6nid");
    var maizefarmer6nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer6nid.value.match(maizefarmer6nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer6nidError").style.display = "block";
    }else{
        document.getElementById("maizefarmer6nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer6variety Validation xxxxxxxxxx
function checkmaizefarmer6variety(){
    var maizefarmer6variety = document.getElementById("maizefarmer6variety");
    var maizefarmer6varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer6variety.value.match(maizefarmer6varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer6varietyError").style.display = "block";
    }else{
        document.getElementById("maizefarmer6varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer6date Validation xxxxxxxxxx
function checkmaizefarmer6date(){
    var maizefarmer6date = document.getElementById("maizefarmer6date");
    var maizefarmer6dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer6date.value.match(maizefarmer6dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer6dateError").style.display = "block";
    }else{
        document.getElementById("maizefarmer6dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full maizefarmer6comment Validation xxxxxxxxxx
function checkmaizefarmer6comment(){
    var maizefarmer6comment = document.getElementById("maizefarmer6comment");
    var maizefarmer6commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(maizefarmer6comment.value.match(maizefarmer6commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("maizefarmer6commentError").style.display = "block";
    }else{
        document.getElementById("maizefarmer6commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer1 Validation xxxxxxxxxx
function checkmustardfarmer1(){
    var mustardfarmer1 = document.getElementById("mustardfarmer1");
    var mustardfarmer1Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer1.value.match(mustardfarmer1Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer1Error").style.display = "block";
    }else{
        document.getElementById("mustardfarmer1Error").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer1address Validation xxxxxxxxxx
function checkmustardfarmer1address(){
    var mustardfarmer1address = document.getElementById("mustardfarmer1address");
    var mustardfarmer1addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer1address.value.match(mustardfarmer1addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer1addressError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer1addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer1mobile Validation xxxxxxxxxx
function checkmustardfarmer1mobile(){
    var mustardfarmer1mobile = document.getElementById("mustardfarmer1mobile");
    var mustardfarmer1mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer1mobile.value.match(mustardfarmer1mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer1mobileError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer1mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer1nid Validation xxxxxxxxxx
function checkmustardfarmer1nid(){
    var mustardfarmer1nid = document.getElementById("mustardfarmer1nid");
    var mustardfarmer1nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer1nid.value.match(mustardfarmer1nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer1nidError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer1nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer1variety Validation xxxxxxxxxx
function checkmustardfarmer1variety(){
    var mustardfarmer1variety = document.getElementById("mustardfarmer1variety");
    var mustardfarmer1varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer1variety.value.match(mustardfarmer1varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer1varietyError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer1varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer1date Validation xxxxxxxxxx
function checkmustardfarmer1date(){
    var mustardfarmer1date = document.getElementById("mustardfarmer1date");
    var mustardfarmer1dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer1date.value.match(mustardfarmer1dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer1dateError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer1dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer1comment Validation xxxxxxxxxx
function checkmustardfarmer1comment(){
    var mustardfarmer1comment = document.getElementById("mustardfarmer1comment");
    var mustardfarmer1commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer1comment.value.match(mustardfarmer1commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer1commentError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer1commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer2 Validation xxxxxxxxxx
function checkmustardfarmer2(){
    var mustardfarmer2 = document.getElementById("mustardfarmer2");
    var mustardfarmer2Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer2.value.match(mustardfarmer2Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer2Error").style.display = "block";
    }else{
        document.getElementById("mustardfarmer2Error").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer2address Validation xxxxxxxxxx
function checkmustardfarmer2address(){
    var mustardfarmer2address = document.getElementById("mustardfarmer2address");
    var mustardfarmer2addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer2address.value.match(mustardfarmer2addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer2addressError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer2addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer2mobile Validation xxxxxxxxxx
function checkmustardfarmer2mobile(){
    var mustardfarmer2mobile = document.getElementById("mustardfarmer2mobile");
    var mustardfarmer2mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer2mobile.value.match(mustardfarmer2mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer2mobileError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer2mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer2nid Validation xxxxxxxxxx
function checkmustardfarmer2nid(){
    var mustardfarmer2nid = document.getElementById("mustardfarmer2nid");
    var mustardfarmer2nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer2nid.value.match(mustardfarmer2nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer2nidError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer2nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer2variety Validation xxxxxxxxxx
function checkmustardfarmer2variety(){
    var mustardfarmer2variety = document.getElementById("mustardfarmer2variety");
    var mustardfarmer2varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer2variety.value.match(mustardfarmer2varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer2varietyError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer2varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer2date Validation xxxxxxxxxx
function checkmustardfarmer2date(){
    var mustardfarmer2date = document.getElementById("mustardfarmer2date");
    var mustardfarmer2dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer2date.value.match(mustardfarmer2dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer2dateError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer2dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer2comment Validation xxxxxxxxxx
function checkmustardfarmer2comment(){
    var mustardfarmer2comment = document.getElementById("mustardfarmer2comment");
    var mustardfarmer2commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer2comment.value.match(mustardfarmer2commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer2commentError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer2commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer3 Validation xxxxxxxxxx
function checkmustardfarmer3(){
    var mustardfarmer3 = document.getElementById("mustardfarmer3");
    var mustardfarmer3Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer3.value.match(mustardfarmer3Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer3Error").style.display = "block";
    }else{
        document.getElementById("mustardfarmer3Error").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer3address Validation xxxxxxxxxx
function checkmustardfarmer3address(){
    var mustardfarmer3address = document.getElementById("mustardfarmer3address");
    var mustardfarmer3addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer3address.value.match(mustardfarmer3addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer3addressError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer3addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer3mobile Validation xxxxxxxxxx
function checkmustardfarmer3mobile(){
    var mustardfarmer3mobile = document.getElementById("mustardfarmer3mobile");
    var mustardfarmer3mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer3mobile.value.match(mustardfarmer3mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer3mobileError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer3mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer3nid Validation xxxxxxxxxx
function checkmustardfarmer3nid(){
    var mustardfarmer3nid = document.getElementById("mustardfarmer3nid");
    var mustardfarmer3nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer3nid.value.match(mustardfarmer3nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer3nidError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer3nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer3variety Validation xxxxxxxxxx
function checkmustardfarmer3variety(){
    var mustardfarmer3variety = document.getElementById("mustardfarmer3variety");
    var mustardfarmer3varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer3variety.value.match(mustardfarmer3varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer3varietyError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer3varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer3date Validation xxxxxxxxxx
function checkmustardfarmer3date(){
    var mustardfarmer3date = document.getElementById("mustardfarmer3date");
    var mustardfarmer3dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer3date.value.match(mustardfarmer3dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer3dateError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer3dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer3comment Validation xxxxxxxxxx
function checkmustardfarmer3comment(){
    var mustardfarmer3comment = document.getElementById("mustardfarmer3comment");
    var mustardfarmer3commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer3comment.value.match(mustardfarmer3commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer3commentError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer3commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer4 Validation xxxxxxxxxx
function checkmustardfarmer4(){
    var mustardfarmer4 = document.getElementById("mustardfarmer4");
    var mustardfarmer4Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer4.value.match(mustardfarmer4Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer4Error").style.display = "block";
    }else{
        document.getElementById("mustardfarmer4Error").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer4address Validation xxxxxxxxxx
function checkmustardfarmer4address(){
    var mustardfarmer4address = document.getElementById("mustardfarmer4address");
    var mustardfarmer4addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer4address.value.match(mustardfarmer4addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer4addressError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer4addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer4mobile Validation xxxxxxxxxx
function checkmustardfarmer4mobile(){
    var mustardfarmer4mobile = document.getElementById("mustardfarmer4mobile");
    var mustardfarmer4mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer4mobile.value.match(mustardfarmer4mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer4mobileError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer4mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer4nid Validation xxxxxxxxxx
function checkmustardfarmer4nid(){
    var mustardfarmer4nid = document.getElementById("mustardfarmer4nid");
    var mustardfarmer4nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer4nid.value.match(mustardfarmer4nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer4nidError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer4nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer4variety Validation xxxxxxxxxx
function checkmustardfarmer4variety(){
    var mustardfarmer4variety = document.getElementById("mustardfarmer4variety");
    var mustardfarmer4varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer4variety.value.match(mustardfarmer4varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer4varietyError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer4varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer4date Validation xxxxxxxxxx
function checkmustardfarmer4date(){
    var mustardfarmer4date = document.getElementById("mustardfarmer4date");
    var mustardfarmer4dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer4date.value.match(mustardfarmer4dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer4dateError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer4dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer4comment Validation xxxxxxxxxx
function checkmustardfarmer4comment(){
    var mustardfarmer4comment = document.getElementById("mustardfarmer4comment");
    var mustardfarmer4commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer4comment.value.match(mustardfarmer4commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer4commentError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer4commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer5 Validation xxxxxxxxxx
function checkmustardfarmer5(){
    var mustardfarmer5 = document.getElementById("mustardfarmer5");
    var mustardfarmer5Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer5.value.match(mustardfarmer5Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer5Error").style.display = "block";
    }else{
        document.getElementById("mustardfarmer5Error").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer5address Validation xxxxxxxxxx
function checkmustardfarmer5address(){
    var mustardfarmer5address = document.getElementById("mustardfarmer5address");
    var mustardfarmer5addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer5address.value.match(mustardfarmer5addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer5addressError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer5addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer5mobile Validation xxxxxxxxxx
function checkmustardfarmer5mobile(){
    var mustardfarmer5mobile = document.getElementById("mustardfarmer5mobile");
    var mustardfarmer5mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer5mobile.value.match(mustardfarmer5mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer5mobileError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer5mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer5nid Validation xxxxxxxxxx
function checkmustardfarmer5nid(){
    var mustardfarmer5nid = document.getElementById("mustardfarmer5nid");
    var mustardfarmer5nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer5nid.value.match(mustardfarmer5nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer5nidError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer5nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer5variety Validation xxxxxxxxxx
function checkmustardfarmer5variety(){
    var mustardfarmer5variety = document.getElementById("mustardfarmer5variety");
    var mustardfarmer5varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer5variety.value.match(mustardfarmer5varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer5varietyError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer5varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer5date Validation xxxxxxxxxx
function checkmustardfarmer5date(){
    var mustardfarmer5date = document.getElementById("mustardfarmer5date");
    var mustardfarmer5dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer5date.value.match(mustardfarmer5dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer5dateError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer5dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer5comment Validation xxxxxxxxxx
function checkmustardfarmer5comment(){
    var mustardfarmer5comment = document.getElementById("mustardfarmer5comment");
    var mustardfarmer5commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer5comment.value.match(mustardfarmer5commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer5commentError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer5commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer6 Validation xxxxxxxxxx
function checkmustardfarmer6(){
    var mustardfarmer6 = document.getElementById("mustardfarmer6");
    var mustardfarmer6Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer6.value.match(mustardfarmer6Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer6Error").style.display = "block";
    }else{
        document.getElementById("mustardfarmer6Error").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer6address Validation xxxxxxxxxx
function checkmustardfarmer6address(){
    var mustardfarmer6address = document.getElementById("mustardfarmer6address");
    var mustardfarmer6addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer6address.value.match(mustardfarmer6addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer6addressError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer6addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer6mobile Validation xxxxxxxxxx
function checkmustardfarmer6mobile(){
    var mustardfarmer6mobile = document.getElementById("mustardfarmer6mobile");
    var mustardfarmer6mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer6mobile.value.match(mustardfarmer6mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer6mobileError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer6mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer6nid Validation xxxxxxxxxx
function checkmustardfarmer6nid(){
    var mustardfarmer6nid = document.getElementById("mustardfarmer6nid");
    var mustardfarmer6nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer6nid.value.match(mustardfarmer6nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer6nidError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer6nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer6variety Validation xxxxxxxxxx
function checkmustardfarmer6variety(){
    var mustardfarmer6variety = document.getElementById("mustardfarmer6variety");
    var mustardfarmer6varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer6variety.value.match(mustardfarmer6varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer6varietyError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer6varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer6date Validation xxxxxxxxxx
function checkmustardfarmer6date(){
    var mustardfarmer6date = document.getElementById("mustardfarmer6date");
    var mustardfarmer6dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer6date.value.match(mustardfarmer6dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer6dateError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer6dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full mustardfarmer6comment Validation xxxxxxxxxx
function checkmustardfarmer6comment(){
    var mustardfarmer6comment = document.getElementById("mustardfarmer6comment");
    var mustardfarmer6commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mustardfarmer6comment.value.match(mustardfarmer6commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mustardfarmer6commentError").style.display = "block";
    }else{
        document.getElementById("mustardfarmer6commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer1 Validation xxxxxxxxxx
function checkborofarmer1(){
    var borofarmer1 = document.getElementById("borofarmer1");
    var borofarmer1Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer1.value.match(borofarmer1Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer1Error").style.display = "block";
    }else{
        document.getElementById("borofarmer1Error").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer1address Validation xxxxxxxxxx
function checkborofarmer1address(){
    var borofarmer1address = document.getElementById("borofarmer1address");
    var borofarmer1addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer1address.value.match(borofarmer1addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer1addressError").style.display = "block";
    }else{
        document.getElementById("borofarmer1addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer1mobile Validation xxxxxxxxxx
function checkborofarmer1mobile(){
    var borofarmer1mobile = document.getElementById("borofarmer1mobile");
    var borofarmer1mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer1mobile.value.match(borofarmer1mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer1mobileError").style.display = "block";
    }else{
        document.getElementById("borofarmer1mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer1nid Validation xxxxxxxxxx
function checkborofarmer1nid(){
    var borofarmer1nid = document.getElementById("borofarmer1nid");
    var borofarmer1nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer1nid.value.match(borofarmer1nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer1nidError").style.display = "block";
    }else{
        document.getElementById("borofarmer1nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer1variety Validation xxxxxxxxxx
function checkborofarmer1variety(){
    var borofarmer1variety = document.getElementById("borofarmer1variety");
    var borofarmer1varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer1variety.value.match(borofarmer1varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer1varietyError").style.display = "block";
    }else{
        document.getElementById("borofarmer1varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer1date Validation xxxxxxxxxx
function checkborofarmer1date(){
    var borofarmer1date = document.getElementById("borofarmer1date");
    var borofarmer1dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer1date.value.match(borofarmer1dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer1dateError").style.display = "block";
    }else{
        document.getElementById("borofarmer1dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer1comment Validation xxxxxxxxxx
function checkborofarmer1comment(){
    var borofarmer1comment = document.getElementById("borofarmer1comment");
    var borofarmer1commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer1comment.value.match(borofarmer1commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer1commentError").style.display = "block";
    }else{
        document.getElementById("borofarmer1commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer2 Validation xxxxxxxxxx
function checkborofarmer2(){
    var borofarmer2 = document.getElementById("borofarmer2");
    var borofarmer2Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer2.value.match(borofarmer2Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer2Error").style.display = "block";
    }else{
        document.getElementById("borofarmer2Error").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer2address Validation xxxxxxxxxx
function checkborofarmer2address(){
    var borofarmer2address = document.getElementById("borofarmer2address");
    var borofarmer2addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer2address.value.match(borofarmer2addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer2addressError").style.display = "block";
    }else{
        document.getElementById("borofarmer2addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer2mobile Validation xxxxxxxxxx
function checkborofarmer2mobile(){
    var borofarmer2mobile = document.getElementById("borofarmer2mobile");
    var borofarmer2mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer2mobile.value.match(borofarmer2mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer2mobileError").style.display = "block";
    }else{
        document.getElementById("borofarmer2mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer2nid Validation xxxxxxxxxx
function checkborofarmer2nid(){
    var borofarmer2nid = document.getElementById("borofarmer2nid");
    var borofarmer2nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer2nid.value.match(borofarmer2nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer2nidError").style.display = "block";
    }else{
        document.getElementById("borofarmer2nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer2variety Validation xxxxxxxxxx
function checkborofarmer2variety(){
    var borofarmer2variety = document.getElementById("borofarmer2variety");
    var borofarmer2varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer2variety.value.match(borofarmer2varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer2varietyError").style.display = "block";
    }else{
        document.getElementById("borofarmer2varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer2date Validation xxxxxxxxxx
function checkborofarmer2date(){
    var borofarmer2date = document.getElementById("borofarmer2date");
    var borofarmer2dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer2date.value.match(borofarmer2dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer2dateError").style.display = "block";
    }else{
        document.getElementById("borofarmer2dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer2comment Validation xxxxxxxxxx
function checkborofarmer2comment(){
    var borofarmer2comment = document.getElementById("borofarmer2comment");
    var borofarmer2commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer2comment.value.match(borofarmer2commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer2commentError").style.display = "block";
    }else{
        document.getElementById("borofarmer2commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer3 Validation xxxxxxxxxx
function checkborofarmer3(){
    var borofarmer3 = document.getElementById("borofarmer3");
    var borofarmer3Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer3.value.match(borofarmer3Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer3Error").style.display = "block";
    }else{
        document.getElementById("borofarmer3Error").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer3address Validation xxxxxxxxxx
function checkborofarmer3address(){
    var borofarmer3address = document.getElementById("borofarmer3address");
    var borofarmer3addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer3address.value.match(borofarmer3addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer3addressError").style.display = "block";
    }else{
        document.getElementById("borofarmer3addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer3mobile Validation xxxxxxxxxx
function checkborofarmer3mobile(){
    var borofarmer3mobile = document.getElementById("borofarmer3mobile");
    var borofarmer3mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer3mobile.value.match(borofarmer3mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer3mobileError").style.display = "block";
    }else{
        document.getElementById("borofarmer3mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer3nid Validation xxxxxxxxxx
function checkborofarmer3nid(){
    var borofarmer3nid = document.getElementById("borofarmer3nid");
    var borofarmer3nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer3nid.value.match(borofarmer3nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer3nidError").style.display = "block";
    }else{
        document.getElementById("borofarmer3nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer3variety Validation xxxxxxxxxx
function checkborofarmer3variety(){
    var borofarmer3variety = document.getElementById("borofarmer3variety");
    var borofarmer3varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer3variety.value.match(borofarmer3varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer3varietyError").style.display = "block";
    }else{
        document.getElementById("borofarmer3varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer3date Validation xxxxxxxxxx
function checkborofarmer3date(){
    var borofarmer3date = document.getElementById("borofarmer3date");
    var borofarmer3dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer3date.value.match(borofarmer3dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer3dateError").style.display = "block";
    }else{
        document.getElementById("borofarmer3dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer3comment Validation xxxxxxxxxx
function checkborofarmer3comment(){
    var borofarmer3comment = document.getElementById("borofarmer3comment");
    var borofarmer3commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer3comment.value.match(borofarmer3commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer3commentError").style.display = "block";
    }else{
        document.getElementById("borofarmer3commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer4 Validation xxxxxxxxxx
function checkborofarmer4(){
    var borofarmer4 = document.getElementById("borofarmer4");
    var borofarmer4Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer4.value.match(borofarmer4Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer4Error").style.display = "block";
    }else{
        document.getElementById("borofarmer4Error").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer4address Validation xxxxxxxxxx
function checkborofarmer4address(){
    var borofarmer4address = document.getElementById("borofarmer4address");
    var borofarmer4addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer4address.value.match(borofarmer4addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer4addressError").style.display = "block";
    }else{
        document.getElementById("borofarmer4addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer4mobile Validation xxxxxxxxxx
function checkborofarmer4mobile(){
    var borofarmer4mobile = document.getElementById("borofarmer4mobile");
    var borofarmer4mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer4mobile.value.match(borofarmer4mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer4mobileError").style.display = "block";
    }else{
        document.getElementById("borofarmer4mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer4nid Validation xxxxxxxxxx
function checkborofarmer4nid(){
    var borofarmer4nid = document.getElementById("borofarmer4nid");
    var borofarmer4nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer4nid.value.match(borofarmer4nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer4nidError").style.display = "block";
    }else{
        document.getElementById("borofarmer4nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer4variety Validation xxxxxxxxxx
function checkborofarmer4variety(){
    var borofarmer4variety = document.getElementById("borofarmer4variety");
    var borofarmer4varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer4variety.value.match(borofarmer4varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer4varietyError").style.display = "block";
    }else{
        document.getElementById("borofarmer4varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer4date Validation xxxxxxxxxx
function checkborofarmer4date(){
    var borofarmer4date = document.getElementById("borofarmer4date");
    var borofarmer4dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer4date.value.match(borofarmer4dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer4dateError").style.display = "block";
    }else{
        document.getElementById("borofarmer4dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer4comment Validation xxxxxxxxxx
function checkborofarmer4comment(){
    var borofarmer4comment = document.getElementById("borofarmer4comment");
    var borofarmer4commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer4comment.value.match(borofarmer4commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer4commentError").style.display = "block";
    }else{
        document.getElementById("borofarmer4commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer5 Validation xxxxxxxxxx
function checkborofarmer5(){
    var borofarmer5 = document.getElementById("borofarmer5");
    var borofarmer5Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer5.value.match(borofarmer5Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer5Error").style.display = "block";
    }else{
        document.getElementById("borofarmer5Error").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer5address Validation xxxxxxxxxx
function checkborofarmer5address(){
    var borofarmer5address = document.getElementById("borofarmer5address");
    var borofarmer5addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer5address.value.match(borofarmer5addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer5addressError").style.display = "block";
    }else{
        document.getElementById("borofarmer5addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer5mobile Validation xxxxxxxxxx
function checkborofarmer5mobile(){
    var borofarmer5mobile = document.getElementById("borofarmer5mobile");
    var borofarmer5mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer5mobile.value.match(borofarmer5mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer5mobileError").style.display = "block";
    }else{
        document.getElementById("borofarmer5mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer5nid Validation xxxxxxxxxx
function checkborofarmer5nid(){
    var borofarmer5nid = document.getElementById("borofarmer5nid");
    var borofarmer5nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer5nid.value.match(borofarmer5nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer5nidError").style.display = "block";
    }else{
        document.getElementById("borofarmer5nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer5variety Validation xxxxxxxxxx
function checkborofarmer5variety(){
    var borofarmer5variety = document.getElementById("borofarmer5variety");
    var borofarmer5varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer5variety.value.match(borofarmer5varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer5varietyError").style.display = "block";
    }else{
        document.getElementById("borofarmer5varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer5date Validation xxxxxxxxxx
function checkborofarmer5date(){
    var borofarmer5date = document.getElementById("borofarmer5date");
    var borofarmer5dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer5date.value.match(borofarmer5dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer5dateError").style.display = "block";
    }else{
        document.getElementById("borofarmer5dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer5comment Validation xxxxxxxxxx
function checkborofarmer5comment(){
    var borofarmer5comment = document.getElementById("borofarmer5comment");
    var borofarmer5commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer5comment.value.match(borofarmer5commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer5commentError").style.display = "block";
    }else{
        document.getElementById("borofarmer5commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer6 Validation xxxxxxxxxx
function checkborofarmer6(){
    var borofarmer6 = document.getElementById("borofarmer6");
    var borofarmer6Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer6.value.match(borofarmer6Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer6Error").style.display = "block";
    }else{
        document.getElementById("borofarmer6Error").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer6address Validation xxxxxxxxxx
function checkborofarmer6address(){
    var borofarmer6address = document.getElementById("borofarmer6address");
    var borofarmer6addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer6address.value.match(borofarmer6addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer6addressError").style.display = "block";
    }else{
        document.getElementById("borofarmer6addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer6mobile Validation xxxxxxxxxx
function checkborofarmer6mobile(){
    var borofarmer6mobile = document.getElementById("borofarmer6mobile");
    var borofarmer6mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer6mobile.value.match(borofarmer6mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer6mobileError").style.display = "block";
    }else{
        document.getElementById("borofarmer6mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer6nid Validation xxxxxxxxxx
function checkborofarmer6nid(){
    var borofarmer6nid = document.getElementById("borofarmer6nid");
    var borofarmer6nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer6nid.value.match(borofarmer6nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer6nidError").style.display = "block";
    }else{
        document.getElementById("borofarmer6nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer6variety Validation xxxxxxxxxx
function checkborofarmer6variety(){
    var borofarmer6variety = document.getElementById("borofarmer6variety");
    var borofarmer6varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer6variety.value.match(borofarmer6varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer6varietyError").style.display = "block";
    }else{
        document.getElementById("borofarmer6varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer6date Validation xxxxxxxxxx
function checkborofarmer6date(){
    var borofarmer6date = document.getElementById("borofarmer6date");
    var borofarmer6dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer6date.value.match(borofarmer6dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer6dateError").style.display = "block";
    }else{
        document.getElementById("borofarmer6dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full borofarmer6comment Validation xxxxxxxxxx
function checkborofarmer6comment(){
    var borofarmer6comment = document.getElementById("borofarmer6comment");
    var borofarmer6commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(borofarmer6comment.value.match(borofarmer6commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("borofarmer6commentError").style.display = "block";
    }else{
        document.getElementById("borofarmer6commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer1 Validation xxxxxxxxxx
function checkamanfarmer1(){
    var amanfarmer1 = document.getElementById("amanfarmer1");
    var amanfarmer1Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer1.value.match(amanfarmer1Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer1Error").style.display = "block";
    }else{
        document.getElementById("amanfarmer1Error").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer1address Validation xxxxxxxxxx
function checkamanfarmer1address(){
    var amanfarmer1address = document.getElementById("amanfarmer1address");
    var amanfarmer1addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer1address.value.match(amanfarmer1addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer1addressError").style.display = "block";
    }else{
        document.getElementById("amanfarmer1addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer1mobile Validation xxxxxxxxxx
function checkamanfarmer1mobile(){
    var amanfarmer1mobile = document.getElementById("amanfarmer1mobile");
    var amanfarmer1mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer1mobile.value.match(amanfarmer1mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer1mobileError").style.display = "block";
    }else{
        document.getElementById("amanfarmer1mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer1nid Validation xxxxxxxxxx
function checkamanfarmer1nid(){
    var amanfarmer1nid = document.getElementById("amanfarmer1nid");
    var amanfarmer1nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer1nid.value.match(amanfarmer1nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer1nidError").style.display = "block";
    }else{
        document.getElementById("amanfarmer1nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer1variety Validation xxxxxxxxxx
function checkamanfarmer1variety(){
    var amanfarmer1variety = document.getElementById("amanfarmer1variety");
    var amanfarmer1varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer1variety.value.match(amanfarmer1varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer1varietyError").style.display = "block";
    }else{
        document.getElementById("amanfarmer1varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer1date Validation xxxxxxxxxx
function checkamanfarmer1date(){
    var amanfarmer1date = document.getElementById("amanfarmer1date");
    var amanfarmer1dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer1date.value.match(amanfarmer1dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer1dateError").style.display = "block";
    }else{
        document.getElementById("amanfarmer1dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer1comment Validation xxxxxxxxxx
function checkamanfarmer1comment(){
    var amanfarmer1comment = document.getElementById("amanfarmer1comment");
    var amanfarmer1commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer1comment.value.match(amanfarmer1commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer1commentError").style.display = "block";
    }else{
        document.getElementById("amanfarmer1commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer2 Validation xxxxxxxxxx
function checkamanfarmer2(){
    var amanfarmer2 = document.getElementById("amanfarmer2");
    var amanfarmer2Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer2.value.match(amanfarmer2Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer2Error").style.display = "block";
    }else{
        document.getElementById("amanfarmer2Error").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer2address Validation xxxxxxxxxx
function checkamanfarmer2address(){
    var amanfarmer2address = document.getElementById("amanfarmer2address");
    var amanfarmer2addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer2address.value.match(amanfarmer2addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer2addressError").style.display = "block";
    }else{
        document.getElementById("amanfarmer2addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer2mobile Validation xxxxxxxxxx
function checkamanfarmer2mobile(){
    var amanfarmer2mobile = document.getElementById("amanfarmer2mobile");
    var amanfarmer2mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer2mobile.value.match(amanfarmer2mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer2mobileError").style.display = "block";
    }else{
        document.getElementById("amanfarmer2mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer2nid Validation xxxxxxxxxx
function checkamanfarmer2nid(){
    var amanfarmer2nid = document.getElementById("amanfarmer2nid");
    var amanfarmer2nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer2nid.value.match(amanfarmer2nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer2nidError").style.display = "block";
    }else{
        document.getElementById("amanfarmer2nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer2variety Validation xxxxxxxxxx
function checkamanfarmer2variety(){
    var amanfarmer2variety = document.getElementById("amanfarmer2variety");
    var amanfarmer2varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer2variety.value.match(amanfarmer2varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer2varietyError").style.display = "block";
    }else{
        document.getElementById("amanfarmer2varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer2date Validation xxxxxxxxxx
function checkamanfarmer2date(){
    var amanfarmer2date = document.getElementById("amanfarmer2date");
    var amanfarmer2dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer2date.value.match(amanfarmer2dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer2dateError").style.display = "block";
    }else{
        document.getElementById("amanfarmer2dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer2comment Validation xxxxxxxxxx
function checkamanfarmer2comment(){
    var amanfarmer2comment = document.getElementById("amanfarmer2comment");
    var amanfarmer2commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer2comment.value.match(amanfarmer2commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer2commentError").style.display = "block";
    }else{
        document.getElementById("amanfarmer2commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer3 Validation xxxxxxxxxx
function checkamanfarmer3(){
    var amanfarmer3 = document.getElementById("amanfarmer3");
    var amanfarmer3Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer3.value.match(amanfarmer3Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer3Error").style.display = "block";
    }else{
        document.getElementById("amanfarmer3Error").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer3address Validation xxxxxxxxxx
function checkamanfarmer3address(){
    var amanfarmer3address = document.getElementById("amanfarmer3address");
    var amanfarmer3addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer3address.value.match(amanfarmer3addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer3addressError").style.display = "block";
    }else{
        document.getElementById("amanfarmer3addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer3mobile Validation xxxxxxxxxx
function checkamanfarmer3mobile(){
    var amanfarmer3mobile = document.getElementById("amanfarmer3mobile");
    var amanfarmer3mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer3mobile.value.match(amanfarmer3mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer3mobileError").style.display = "block";
    }else{
        document.getElementById("amanfarmer3mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer3nid Validation xxxxxxxxxx
function checkamanfarmer3nid(){
    var amanfarmer3nid = document.getElementById("amanfarmer3nid");
    var amanfarmer3nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer3nid.value.match(amanfarmer3nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer3nidError").style.display = "block";
    }else{
        document.getElementById("amanfarmer3nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer3variety Validation xxxxxxxxxx
function checkamanfarmer3variety(){
    var amanfarmer3variety = document.getElementById("amanfarmer3variety");
    var amanfarmer3varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer3variety.value.match(amanfarmer3varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer3varietyError").style.display = "block";
    }else{
        document.getElementById("amanfarmer3varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer3date Validation xxxxxxxxxx
function checkamanfarmer3date(){
    var amanfarmer3date = document.getElementById("amanfarmer3date");
    var amanfarmer3dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer3date.value.match(amanfarmer3dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer3dateError").style.display = "block";
    }else{
        document.getElementById("amanfarmer3dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer3comment Validation xxxxxxxxxx
function checkamanfarmer3comment(){
    var amanfarmer3comment = document.getElementById("amanfarmer3comment");
    var amanfarmer3commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer3comment.value.match(amanfarmer3commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer3commentError").style.display = "block";
    }else{
        document.getElementById("amanfarmer3commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer4 Validation xxxxxxxxxx
function checkamanfarmer4(){
    var amanfarmer4 = document.getElementById("amanfarmer4");
    var amanfarmer4Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer4.value.match(amanfarmer4Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer4Error").style.display = "block";
    }else{
        document.getElementById("amanfarmer4Error").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer4address Validation xxxxxxxxxx
function checkamanfarmer4address(){
    var amanfarmer4address = document.getElementById("amanfarmer4address");
    var amanfarmer4addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer4address.value.match(amanfarmer4addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer4addressError").style.display = "block";
    }else{
        document.getElementById("amanfarmer4addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer4mobile Validation xxxxxxxxxx
function checkamanfarmer4mobile(){
    var amanfarmer4mobile = document.getElementById("amanfarmer4mobile");
    var amanfarmer4mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer4mobile.value.match(amanfarmer4mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer4mobileError").style.display = "block";
    }else{
        document.getElementById("amanfarmer4mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer4nid Validation xxxxxxxxxx
function checkamanfarmer4nid(){
    var amanfarmer4nid = document.getElementById("amanfarmer4nid");
    var amanfarmer4nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer4nid.value.match(amanfarmer4nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer4nidError").style.display = "block";
    }else{
        document.getElementById("amanfarmer4nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer4variety Validation xxxxxxxxxx
function checkamanfarmer4variety(){
    var amanfarmer4variety = document.getElementById("amanfarmer4variety");
    var amanfarmer4varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer4variety.value.match(amanfarmer4varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer4varietyError").style.display = "block";
    }else{
        document.getElementById("amanfarmer4varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer4date Validation xxxxxxxxxx
function checkamanfarmer4date(){
    var amanfarmer4date = document.getElementById("amanfarmer4date");
    var amanfarmer4dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer4date.value.match(amanfarmer4dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer4dateError").style.display = "block";
    }else{
        document.getElementById("amanfarmer4dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer4comment Validation xxxxxxxxxx
function checkamanfarmer4comment(){
    var amanfarmer4comment = document.getElementById("amanfarmer4comment");
    var amanfarmer4commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer4comment.value.match(amanfarmer4commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer4commentError").style.display = "block";
    }else{
        document.getElementById("amanfarmer4commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer5 Validation xxxxxxxxxx
function checkamanfarmer5(){
    var amanfarmer5 = document.getElementById("amanfarmer5");
    var amanfarmer5Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer5.value.match(amanfarmer5Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer5Error").style.display = "block";
    }else{
        document.getElementById("amanfarmer5Error").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer5address Validation xxxxxxxxxx
function checkamanfarmer5address(){
    var amanfarmer5address = document.getElementById("amanfarmer5address");
    var amanfarmer5addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer5address.value.match(amanfarmer5addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer5addressError").style.display = "block";
    }else{
        document.getElementById("amanfarmer5addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer5mobile Validation xxxxxxxxxx
function checkamanfarmer5mobile(){
    var amanfarmer5mobile = document.getElementById("amanfarmer5mobile");
    var amanfarmer5mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer5mobile.value.match(amanfarmer5mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer5mobileError").style.display = "block";
    }else{
        document.getElementById("amanfarmer5mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer5nid Validation xxxxxxxxxx
function checkamanfarmer5nid(){
    var amanfarmer5nid = document.getElementById("amanfarmer5nid");
    var amanfarmer5nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer5nid.value.match(amanfarmer5nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer5nidError").style.display = "block";
    }else{
        document.getElementById("amanfarmer5nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer5variety Validation xxxxxxxxxx
function checkamanfarmer5variety(){
    var amanfarmer5variety = document.getElementById("amanfarmer5variety");
    var amanfarmer5varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer5variety.value.match(amanfarmer5varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer5varietyError").style.display = "block";
    }else{
        document.getElementById("amanfarmer5varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer5date Validation xxxxxxxxxx
function checkamanfarmer5date(){
    var amanfarmer5date = document.getElementById("amanfarmer5date");
    var amanfarmer5dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer5date.value.match(amanfarmer5dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer5dateError").style.display = "block";
    }else{
        document.getElementById("amanfarmer5dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer5comment Validation xxxxxxxxxx
function checkamanfarmer5comment(){
    var amanfarmer5comment = document.getElementById("amanfarmer5comment");
    var amanfarmer5commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer5comment.value.match(amanfarmer5commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer5commentError").style.display = "block";
    }else{
        document.getElementById("amanfarmer5commentError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer6 Validation xxxxxxxxxx
function checkamanfarmer6(){
    var amanfarmer6 = document.getElementById("amanfarmer6");
    var amanfarmer6Formate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer6.value.match(amanfarmer6Formate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer6Error").style.display = "block";
    }else{
        document.getElementById("amanfarmer6Error").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer6address Validation xxxxxxxxxx
function checkamanfarmer6address(){
    var amanfarmer6address = document.getElementById("amanfarmer6address");
    var amanfarmer6addressFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer6address.value.match(amanfarmer6addressFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer6addressError").style.display = "block";
    }else{
        document.getElementById("amanfarmer6addressError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer6mobile Validation xxxxxxxxxx
function checkamanfarmer6mobile(){
    var amanfarmer6mobile = document.getElementById("amanfarmer6mobile");
    var amanfarmer6mobileFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer6mobile.value.match(amanfarmer6mobileFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer6mobileError").style.display = "block";
    }else{
        document.getElementById("amanfarmer6mobileError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer6nid Validation xxxxxxxxxx
function checkamanfarmer6nid(){
    var amanfarmer6nid = document.getElementById("amanfarmer6nid");
    var amanfarmer6nidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer6nid.value.match(amanfarmer6nidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer6nidError").style.display = "block";
    }else{
        document.getElementById("amanfarmer6nidError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer6variety Validation xxxxxxxxxx
function checkamanfarmer6variety(){
    var amanfarmer6variety = document.getElementById("amanfarmer6variety");
    var amanfarmer6varietyFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer6variety.value.match(amanfarmer6varietyFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer6varietyError").style.display = "block";
    }else{
        document.getElementById("amanfarmer6varietyError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer6date Validation xxxxxxxxxx
function checkamanfarmer6date(){
    var amanfarmer6date = document.getElementById("amanfarmer6date");
    var amanfarmer6dateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer6date.value.match(amanfarmer6dateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer6dateError").style.display = "block";
    }else{
        document.getElementById("amanfarmer6dateError").style.display = "none";
    }
}
// xxxxxxxxxx Full amanfarmer6comment Validation xxxxxxxxxx
function checkamanfarmer6comment(){
    var amanfarmer6comment = document.getElementById("amanfarmer6comment");
    var amanfarmer6commentFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(amanfarmer6comment.value.match(amanfarmer6commentFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("amanfarmer6commentError").style.display = "block";
    }else{
        document.getElementById("amanfarmer6commentError").style.display = "none";
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
	var saaoname = document.getElementById("saaoname").value;
    var saaophone = document.getElementById("saaophone").value;
	var union = document.getElementById("union").value;
	var lastupdate = document.getElementById("lastupdate").value;
	
	var maizefarmer1variety = document.getElementById("maizefarmer1variety").value;
    var maizefarmer1nid = document.getElementById("maizefarmer1nid").value;
	var maizefarmer1address = document.getElementById("maizefarmer1address").value;
    var maizefarmer1 = document.getElementById("maizefarmer1").value;
    var maizefarmer1mobile = document.getElementById("maizefarmer1mobile").value;
    var maizefarmer1date = document.getElementById("maizefarmer1date").value;
    var maizefarmer1comment = document.getElementById("maizefarmer1comment").value;
	var maizefarmer2variety = document.getElementById("maizefarmer2variety").value;
    var maizefarmer2nid = document.getElementById("maizefarmer2nid").value;
	var maizefarmer2address = document.getElementById("maizefarmer2address").value;
    var maizefarmer2 = document.getElementById("maizefarmer2").value;
    var maizefarmer2mobile = document.getElementById("maizefarmer2mobile").value;
    var maizefarmer2date = document.getElementById("maizefarmer2date").value;
    var maizefarmer2comment = document.getElementById("maizefarmer2comment").value;
	var maizefarmer3variety = document.getElementById("maizefarmer3variety").value;
    var maizefarmer3nid = document.getElementById("maizefarmer3nid").value;
	var maizefarmer3address = document.getElementById("maizefarmer3address").value;
    var maizefarmer3 = document.getElementById("maizefarmer3").value;
    var maizefarmer3mobile = document.getElementById("maizefarmer3mobile").value;
    var maizefarmer3date = document.getElementById("maizefarmer3date").value;
    var maizefarmer3comment = document.getElementById("maizefarmer3comment").value;
	var maizefarmer4variety = document.getElementById("maizefarmer4variety").value;
    var maizefarmer4nid = document.getElementById("maizefarmer4nid").value;
	var maizefarmer4address = document.getElementById("maizefarmer4address").value;
    var maizefarmer4 = document.getElementById("maizefarmer4").value;
    var maizefarmer4mobile = document.getElementById("maizefarmer4mobile").value;
    var maizefarmer4date = document.getElementById("maizefarmer4date").value;
    var maizefarmer4comment = document.getElementById("maizefarmer4comment").value;
	var maizefarmer5variety = document.getElementById("maizefarmer5variety").value;
    var maizefarmer5nid = document.getElementById("maizefarmer5nid").value;
	var maizefarmer5address = document.getElementById("maizefarmer5address").value;
    var maizefarmer5 = document.getElementById("maizefarmer5").value;
    var maizefarmer5mobile = document.getElementById("maizefarmer5mobile").value;
    var maizefarmer5date = document.getElementById("maizefarmer5date").value;
    var maizefarmer5comment = document.getElementById("maizefarmer5comment").value;
	var maizefarmer6variety = document.getElementById("maizefarmer6variety").value;
    var maizefarmer6nid = document.getElementById("maizefarmer6nid").value;
	var maizefarmer6address = document.getElementById("maizefarmer6address").value;
    var maizefarmer6 = document.getElementById("maizefarmer6").value;
    var maizefarmer6mobile = document.getElementById("maizefarmer6mobile").value;
    var maizefarmer6date = document.getElementById("maizefarmer6date").value;
    var maizefarmer6comment = document.getElementById("maizefarmer6comment").value;
	var mustardfarmer1variety = document.getElementById("mustardfarmer1variety").value;
    var mustardfarmer1nid = document.getElementById("mustardfarmer1nid").value;
	var mustardfarmer1address = document.getElementById("mustardfarmer1address").value;
    var mustardfarmer1 = document.getElementById("mustardfarmer1").value;
    var mustardfarmer1mobile = document.getElementById("mustardfarmer1mobile").value;
    var mustardfarmer1date = document.getElementById("mustardfarmer1date").value;
    var mustardfarmer1comment = document.getElementById("mustardfarmer1comment").value;
	var mustardfarmer2variety = document.getElementById("mustardfarmer2variety").value;
    var mustardfarmer2nid = document.getElementById("mustardfarmer2nid").value;
	var mustardfarmer2address = document.getElementById("mustardfarmer2address").value;
    var mustardfarmer2 = document.getElementById("mustardfarmer2").value;
    var mustardfarmer2mobile = document.getElementById("mustardfarmer2mobile").value;
    var mustardfarmer2date = document.getElementById("mustardfarmer2date").value;
    var mustardfarmer2comment = document.getElementById("mustardfarmer2comment").value;
	var mustardfarmer3variety = document.getElementById("mustardfarmer3variety").value;
    var mustardfarmer3nid = document.getElementById("mustardfarmer3nid").value;
	var mustardfarmer3address = document.getElementById("mustardfarmer3address").value;
    var mustardfarmer3 = document.getElementById("mustardfarmer3").value;
    var mustardfarmer3mobile = document.getElementById("mustardfarmer3mobile").value;
    var mustardfarmer3date = document.getElementById("mustardfarmer3date").value;
    var mustardfarmer3comment = document.getElementById("mustardfarmer3comment").value;
	var mustardfarmer4variety = document.getElementById("mustardfarmer4variety").value;
    var mustardfarmer4nid = document.getElementById("mustardfarmer4nid").value;
	var mustardfarmer4address = document.getElementById("mustardfarmer4address").value;
    var mustardfarmer4 = document.getElementById("mustardfarmer4").value;
    var mustardfarmer4mobile = document.getElementById("mustardfarmer4mobile").value;
    var mustardfarmer4date = document.getElementById("mustardfarmer4date").value;
    var mustardfarmer4comment = document.getElementById("mustardfarmer4comment").value;
	var mustardfarmer5variety = document.getElementById("mustardfarmer5variety").value;
    var mustardfarmer5nid = document.getElementById("mustardfarmer5nid").value;
	var mustardfarmer5address = document.getElementById("mustardfarmer5address").value;
    var mustardfarmer5 = document.getElementById("mustardfarmer5").value;
    var mustardfarmer5mobile = document.getElementById("mustardfarmer5mobile").value;
    var mustardfarmer5date = document.getElementById("mustardfarmer5date").value;
    var mustardfarmer5comment = document.getElementById("mustardfarmer5comment").value;
	var mustardfarmer6variety = document.getElementById("mustardfarmer6variety").value;
    var mustardfarmer6nid = document.getElementById("mustardfarmer6nid").value;
	var mustardfarmer6address = document.getElementById("mustardfarmer6address").value;
    var mustardfarmer6 = document.getElementById("mustardfarmer6").value;
    var mustardfarmer6mobile = document.getElementById("mustardfarmer6mobile").value;
    var mustardfarmer6date = document.getElementById("mustardfarmer6date").value;
    var mustardfarmer6comment = document.getElementById("mustardfarmer6comment").value;
	var borofarmer1variety = document.getElementById("borofarmer1variety").value;
    var borofarmer1nid = document.getElementById("borofarmer1nid").value;
	var borofarmer1address = document.getElementById("borofarmer1address").value;
    var borofarmer1 = document.getElementById("borofarmer1").value;
    var borofarmer1mobile = document.getElementById("borofarmer1mobile").value;
    var borofarmer1date = document.getElementById("borofarmer1date").value;
    var borofarmer1comment = document.getElementById("borofarmer1comment").value;
	var borofarmer2variety = document.getElementById("borofarmer2variety").value;
    var borofarmer2nid = document.getElementById("borofarmer2nid").value;
	var borofarmer2address = document.getElementById("borofarmer2address").value;
    var borofarmer2 = document.getElementById("borofarmer2").value;
    var borofarmer2mobile = document.getElementById("borofarmer2mobile").value;
    var borofarmer2date = document.getElementById("borofarmer2date").value;
    var borofarmer2comment = document.getElementById("borofarmer2comment").value;
	var borofarmer3variety = document.getElementById("borofarmer3variety").value;
    var borofarmer3nid = document.getElementById("borofarmer3nid").value;
	var borofarmer3address = document.getElementById("borofarmer3address").value;
    var borofarmer3 = document.getElementById("borofarmer3").value;
    var borofarmer3mobile = document.getElementById("borofarmer3mobile").value;
    var borofarmer3date = document.getElementById("borofarmer3date").value;
    var borofarmer3comment = document.getElementById("borofarmer3comment").value;
	var borofarmer4variety = document.getElementById("borofarmer4variety").value;
    var borofarmer4nid = document.getElementById("borofarmer4nid").value;
	var borofarmer4address = document.getElementById("borofarmer4address").value;
    var borofarmer4 = document.getElementById("borofarmer4").value;
    var borofarmer4mobile = document.getElementById("borofarmer4mobile").value;
    var borofarmer4date = document.getElementById("borofarmer4date").value;
    var borofarmer4comment = document.getElementById("borofarmer4comment").value;
	var borofarmer5variety = document.getElementById("borofarmer5variety").value;
    var borofarmer5nid = document.getElementById("borofarmer5nid").value;
	var borofarmer5address = document.getElementById("borofarmer5address").value;
    var borofarmer5 = document.getElementById("borofarmer5").value;
    var borofarmer5mobile = document.getElementById("borofarmer5mobile").value;
    var borofarmer5date = document.getElementById("borofarmer5date").value;
    var borofarmer5comment = document.getElementById("borofarmer5comment").value;
	var borofarmer6variety = document.getElementById("borofarmer6variety").value;
    var borofarmer6nid = document.getElementById("borofarmer6nid").value;
	var borofarmer6address = document.getElementById("borofarmer6address").value;
    var borofarmer6 = document.getElementById("borofarmer6").value;
    var borofarmer6mobile = document.getElementById("borofarmer6mobile").value;
    var borofarmer6date = document.getElementById("borofarmer6date").value;
    var borofarmer6comment = document.getElementById("borofarmer6comment").value;
	var amanfarmer1variety = document.getElementById("amanfarmer1variety").value;
    var amanfarmer1nid = document.getElementById("amanfarmer1nid").value;
	var amanfarmer1address = document.getElementById("amanfarmer1address").value;
    var amanfarmer1 = document.getElementById("amanfarmer1").value;
    var amanfarmer1mobile = document.getElementById("amanfarmer1mobile").value;
    var amanfarmer1date = document.getElementById("amanfarmer1date").value;
    var amanfarmer1comment = document.getElementById("amanfarmer1comment").value;
	var amanfarmer2variety = document.getElementById("amanfarmer2variety").value;
    var amanfarmer2nid = document.getElementById("amanfarmer2nid").value;
	var amanfarmer2address = document.getElementById("amanfarmer2address").value;
    var amanfarmer2 = document.getElementById("amanfarmer2").value;
    var amanfarmer2mobile = document.getElementById("amanfarmer2mobile").value;
    var amanfarmer2date = document.getElementById("amanfarmer2date").value;
    var amanfarmer2comment = document.getElementById("amanfarmer2comment").value;
	var amanfarmer3variety = document.getElementById("amanfarmer3variety").value;
    var amanfarmer3nid = document.getElementById("amanfarmer3nid").value;
	var amanfarmer3address = document.getElementById("amanfarmer3address").value;
    var amanfarmer3 = document.getElementById("amanfarmer3").value;
    var amanfarmer3mobile = document.getElementById("amanfarmer3mobile").value;
    var amanfarmer3date = document.getElementById("amanfarmer3date").value;
    var amanfarmer3comment = document.getElementById("amanfarmer3comment").value;
	var amanfarmer4variety = document.getElementById("amanfarmer4variety").value;
    var amanfarmer4nid = document.getElementById("amanfarmer4nid").value;
	var amanfarmer4address = document.getElementById("amanfarmer4address").value;
    var amanfarmer4 = document.getElementById("amanfarmer4").value;
    var amanfarmer4mobile = document.getElementById("amanfarmer4mobile").value;
    var amanfarmer4date = document.getElementById("amanfarmer4date").value;
    var amanfarmer4comment = document.getElementById("amanfarmer4comment").value;
	var amanfarmer5variety = document.getElementById("amanfarmer5variety").value;
    var amanfarmer5nid = document.getElementById("amanfarmer5nid").value;
	var amanfarmer5address = document.getElementById("amanfarmer5address").value;
    var amanfarmer5 = document.getElementById("amanfarmer5").value;
    var amanfarmer5mobile = document.getElementById("amanfarmer5mobile").value;
    var amanfarmer5date = document.getElementById("amanfarmer5date").value;
    var amanfarmer5comment = document.getElementById("amanfarmer5comment").value;
	var amanfarmer6variety = document.getElementById("amanfarmer6variety").value;
    var amanfarmer6nid = document.getElementById("amanfarmer6nid").value;
	var amanfarmer6address = document.getElementById("amanfarmer6address").value;
    var amanfarmer6 = document.getElementById("amanfarmer6").value;
    var amanfarmer6mobile = document.getElementById("amanfarmer6mobile").value;
    var amanfarmer6date = document.getElementById("amanfarmer6date").value;
    var amanfarmer6comment = document.getElementById("amanfarmer6comment").value;
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
    }else if(saaoname === ""){
        return checksaaoname();
    }else if(saaophone === ""){
        return checksaaophone();
    }else if(lastupdate === ""){
        return checklastupdate();
    }else if(maizefarmer1variety === ""){
        return checkmaizefarmer1variety();
    }else if(maizefarmer1nid === ""){
        return checkmaizefarmer1nid();
    }else if(maizefarmer1date === ""){
        return checkmaizefarmer1date();
    }else if(maizefarmer1address === ""){
        return checkmaizefarmer1address();
    }else if(maizefarmer1 === ""){
        return checkmaizefarmer1();
    }else if(maizefarmer1mobile === ""){
        return checkmaizefarmer1mobile();
    }else if(maizefarmer1comment === ""){
        return checkmaizefarmer1comment();
    }else if(maizefarmer2variety === ""){
        return checkmaizefarmer2variety();
    }else if(maizefarmer2nid === ""){
        return checkmaizefarmer2nid();
    }else if(maizefarmer2date === ""){
        return checkmaizefarmer2date();
    }else if(maizefarmer2address === ""){
        return checkmaizefarmer2address();
    }else if(maizefarmer2 === ""){
        return checkmaizefarmer2();
    }else if(maizefarmer2mobile === ""){
        return checkmaizefarmer2mobile();
    }else if(maizefarmer2comment === ""){
        return checkmaizefarmer2comment();
    }else if(maizefarmer3variety === ""){
        return checkmaizefarmer3variety();
    }else if(maizefarmer3nid === ""){
        return checkmaizefarmer3nid();
    }else if(maizefarmer3date === ""){
        return checkmaizefarmer3date();
    }else if(maizefarmer3address === ""){
        return checkmaizefarmer3address();
    }else if(maizefarmer3 === ""){
        return checkmaizefarmer3();
    }else if(maizefarmer3mobile === ""){
        return checkmaizefarmer3mobile();
    }else if(maizefarmer3comment === ""){
        return checkmaizefarmer3comment();
    }else if(maizefarmer4variety === ""){
        return checkmaizefarmer4variety();
    }else if(maizefarmer4nid === ""){
        return checkmaizefarmer4nid();
    }else if(maizefarmer4date === ""){
        return checkmaizefarmer4date();
    }else if(maizefarmer4address === ""){
        return checkmaizefarmer4address();
    }else if(maizefarmer4 === ""){
        return checkmaizefarmer4();
    }else if(maizefarmer4mobile === ""){
        return checkmaizefarmer4mobile();
    }else if(maizefarmer4comment === ""){
        return checkmaizefarmer4comment();
    }else if(maizefarmer5variety === ""){
        return checkmaizefarmer5variety();
    }else if(maizefarmer5nid === ""){
        return checkmaizefarmer5nid();
    }else if(maizefarmer5date === ""){
        return checkmaizefarmer5date();
    }else if(maizefarmer5address === ""){
        return checkmaizefarmer5address();
    }else if(maizefarmer5 === ""){
        return checkmaizefarmer5();
    }else if(maizefarmer5mobile === ""){
        return checkmaizefarmer5mobile();
    }else if(maizefarmer5comment === ""){
        return checkmaizefarmer5comment();
    }else if(maizefarmer6variety === ""){
        return checkmaizefarmer6variety();
    }else if(maizefarmer6nid === ""){
        return checkmaizefarmer6nid();
    }else if(maizefarmer6date === ""){
        return checkmaizefarmer6date();
    }else if(maizefarmer6address === ""){
        return checkmaizefarmer6address();
    }else if(maizefarmer6 === ""){
        return checkmaizefarmer6();
    }else if(maizefarmer6mobile === ""){
        return checkmaizefarmer6mobile();
    }else if(maizefarmer6comment === ""){
        return checkmaizefarmer6comment();
    }else if(mustardfarmer1variety === ""){
        return checkmustardfarmer1variety();
    }else if(mustardfarmer1nid === ""){
        return checkmustardfarmer1nid();
    }else if(mustardfarmer1date === ""){
        return checkmustardfarmer1date();
    }else if(mustardfarmer1address === ""){
        return checkmustardfarmer1address();
    }else if(mustardfarmer1 === ""){
        return checkmustardfarmer1();
    }else if(mustardfarmer1mobile === ""){
        return checkmustardfarmer1mobile();
    }else if(mustardfarmer1comment === ""){
        return checkmustardfarmer1comment();
    }else if(mustardfarmer2variety === ""){
        return checkmustardfarmer2variety();
    }else if(mustardfarmer2nid === ""){
        return checkmustardfarmer2nid();
    }else if(mustardfarmer2date === ""){
        return checkmustardfarmer2date();
    }else if(mustardfarmer2address === ""){
        return checkmustardfarmer2address();
    }else if(mustardfarmer2 === ""){
        return checkmustardfarmer2();
    }else if(mustardfarmer2mobile === ""){
        return checkmustardfarmer2mobile();
    }else if(mustardfarmer2comment === ""){
        return checkmustardfarmer2comment();
    }else if(mustardfarmer3variety === ""){
        return checkmustardfarmer3variety();
    }else if(mustardfarmer3nid === ""){
        return checkmustardfarmer3nid();
    }else if(mustardfarmer3date === ""){
        return checkmustardfarmer3date();
    }else if(mustardfarmer3address === ""){
        return checkmustardfarmer3address();
    }else if(mustardfarmer3 === ""){
        return checkmustardfarmer3();
    }else if(mustardfarmer3mobile === ""){
        return checkmustardfarmer3mobile();
    }else if(mustardfarmer3comment === ""){
        return checkmustardfarmer3comment();
    }else if(mustardfarmer4variety === ""){
        return checkmustardfarmer4variety();
    }else if(mustardfarmer4nid === ""){
        return checkmustardfarmer4nid();
    }else if(mustardfarmer4date === ""){
        return checkmustardfarmer4date();
    }else if(mustardfarmer4address === ""){
        return checkmustardfarmer4address();
    }else if(mustardfarmer4 === ""){
        return checkmustardfarmer4();
    }else if(mustardfarmer4mobile === ""){
        return checkmustardfarmer4mobile();
    }else if(mustardfarmer4comment === ""){
        return checkmustardfarmer4comment();
    }else if(mustardfarmer5variety === ""){
        return checkmustardfarmer5variety();
    }else if(mustardfarmer5nid === ""){
        return checkmustardfarmer5nid();
    }else if(mustardfarmer5date === ""){
        return checkmustardfarmer5date();
    }else if(mustardfarmer5address === ""){
        return checkmustardfarmer5address();
    }else if(mustardfarmer5 === ""){
        return checkmustardfarmer5();
    }else if(mustardfarmer5mobile === ""){
        return checkmustardfarmer5mobile();
    }else if(mustardfarmer5comment === ""){
        return checkmustardfarmer5comment();
    }else if(mustardfarmer6variety === ""){
        return checkmustardfarmer6variety();
    }else if(mustardfarmer6nid === ""){
        return checkmustardfarmer6nid();
    }else if(mustardfarmer6date === ""){
        return checkmustardfarmer6date();
    }else if(mustardfarmer6address === ""){
        return checkmustardfarmer6address();
    }else if(mustardfarmer6 === ""){
        return checkmustardfarmer6();
    }else if(mustardfarmer6mobile === ""){
        return checkmustardfarmer6mobile();
    }else if(mustardfarmer6comment === ""){
        return checkmustardfarmer6comment();
    }else if(borofarmer1variety === ""){
        return checkborofarmer1variety();
    }else if(borofarmer1nid === ""){
        return checkborofarmer1nid();
    }else if(borofarmer1date === ""){
        return checkborofarmer1date();
    }else if(borofarmer1address === ""){
        return checkborofarmer1address();
    }else if(borofarmer1 === ""){
        return checkborofarmer1();
    }else if(borofarmer1mobile === ""){
        return checkborofarmer1mobile();
    }else if(borofarmer1comment === ""){
        return checkborofarmer1comment();
    }else if(borofarmer2variety === ""){
        return checkborofarmer2variety();
    }else if(borofarmer2nid === ""){
        return checkborofarmer2nid();
    }else if(borofarmer2date === ""){
        return checkborofarmer2date();
    }else if(borofarmer2address === ""){
        return checkborofarmer2address();
    }else if(borofarmer2 === ""){
        return checkborofarmer2();
    }else if(borofarmer2mobile === ""){
        return checkborofarmer2mobile();
    }else if(borofarmer2comment === ""){
        return checkborofarmer2comment();
    }else if(borofarmer3variety === ""){
        return checkborofarmer3variety();
    }else if(borofarmer3nid === ""){
        return checkborofarmer3nid();
    }else if(borofarmer3date === ""){
        return checkborofarmer3date();
    }else if(borofarmer3address === ""){
        return checkborofarmer3address();
    }else if(borofarmer3 === ""){
        return checkborofarmer3();
    }else if(borofarmer3mobile === ""){
        return checkborofarmer3mobile();
    }else if(borofarmer3comment === ""){
        return checkborofarmer3comment();
    }else if(borofarmer4variety === ""){
        return checkborofarmer4variety();
    }else if(borofarmer4nid === ""){
        return checkborofarmer4nid();
    }else if(borofarmer4date === ""){
        return checkborofarmer4date();
    }else if(borofarmer4address === ""){
        return checkborofarmer4address();
    }else if(borofarmer4 === ""){
        return checkborofarmer4();
    }else if(borofarmer4mobile === ""){
        return checkborofarmer4mobile();
    }else if(borofarmer4comment === ""){
        return checkborofarmer4comment();
    }else if(borofarmer5variety === ""){
        return checkborofarmer5variety();
    }else if(borofarmer5nid === ""){
        return checkborofarmer5nid();
    }else if(borofarmer5date === ""){
        return checkborofarmer5date();
    }else if(borofarmer5address === ""){
        return checkborofarmer5address();
    }else if(borofarmer5 === ""){
        return checkborofarmer5();
    }else if(borofarmer5mobile === ""){
        return checkborofarmer5mobile();
    }else if(borofarmer5comment === ""){
        return checkborofarmer5comment();
    }else if(borofarmer6variety === ""){
        return checkborofarmer6variety();
    }else if(borofarmer6nid === ""){
        return checkborofarmer6nid();
    }else if(borofarmer6date === ""){
        return checkborofarmer6date();
    }else if(borofarmer6address === ""){
        return checkborofarmer6address();
    }else if(borofarmer6 === ""){
        return checkborofarmer6();
    }else if(borofarmer6mobile === ""){
        return checkborofarmer6mobile();
    }else if(borofarmer6comment === ""){
        return checkborofarmer6comment();
    }else if(amanfarmer1variety === ""){
        return checkamanfarmer1variety();
    }else if(amanfarmer1nid === ""){
        return checkamanfarmer1nid();
    }else if(amanfarmer1date === ""){
        return checkamanfarmer1date();
    }else if(amanfarmer1address === ""){
        return checkamanfarmer1address();
    }else if(amanfarmer1 === ""){
        return checkamanfarmer1();
    }else if(amanfarmer1mobile === ""){
        return checkamanfarmer1mobile();
    }else if(amanfarmer1comment === ""){
        return checkamanfarmer1comment();
    }else if(amanfarmer2variety === ""){
        return checkamanfarmer2variety();
    }else if(amanfarmer2nid === ""){
        return checkamanfarmer2nid();
    }else if(amanfarmer2date === ""){
        return checkamanfarmer2date();
    }else if(amanfarmer2address === ""){
        return checkamanfarmer2address();
    }else if(amanfarmer2 === ""){
        return checkamanfarmer2();
    }else if(amanfarmer2mobile === ""){
        return checkamanfarmer2mobile();
    }else if(amanfarmer2comment === ""){
        return checkamanfarmer2comment();
    }else if(amanfarmer3variety === ""){
        return checkamanfarmer3variety();
    }else if(amanfarmer3nid === ""){
        return checkamanfarmer3nid();
    }else if(amanfarmer3date === ""){
        return checkamanfarmer3date();
    }else if(amanfarmer3address === ""){
        return checkamanfarmer3address();
    }else if(amanfarmer3 === ""){
        return checkamanfarmer3();
    }else if(amanfarmer3mobile === ""){
        return checkamanfarmer3mobile();
    }else if(amanfarmer3comment === ""){
        return checkamanfarmer3comment();
    }else if(amanfarmer4variety === ""){
        return checkamanfarmer4variety();
    }else if(amanfarmer4nid === ""){
        return checkamanfarmer4nid();
    }else if(amanfarmer4date === ""){
        return checkamanfarmer4date();
    }else if(amanfarmer4address === ""){
        return checkamanfarmer4address();
    }else if(amanfarmer4 === ""){
        return checkamanfarmer4();
    }else if(amanfarmer4mobile === ""){
        return checkamanfarmer4mobile();
    }else if(amanfarmer4comment === ""){
        return checkamanfarmer4comment();
    }else if(amanfarmer5variety === ""){
        return checkamanfarmer5variety();
    }else if(amanfarmer5nid === ""){
        return checkamanfarmer5nid();
    }else if(amanfarmer5date === ""){
        return checkamanfarmer5date();
    }else if(amanfarmer5address === ""){
        return checkamanfarmer5address();
    }else if(amanfarmer5 === ""){
        return checkamanfarmer5();
    }else if(amanfarmer5mobile === ""){
        return checkamanfarmer5mobile();
    }else if(amanfarmer5comment === ""){
        return checkamanfarmer5comment();
    }else if(amanfarmer6variety === ""){
        return checkamanfarmer6variety();
    }else if(amanfarmer6nid === ""){
        return checkamanfarmer6nid();
    }else if(amanfarmer6date === ""){
        return checkamanfarmer6date();
    }else if(amanfarmer6address === ""){
        return checkamanfarmer6address();
    }else if(amanfarmer6 === ""){
        return checkamanfarmer6();
    }else if(amanfarmer6mobile === ""){
        return checkamanfarmer6mobile();
    }else if(amanfarmer6comment === ""){
        return checkamanfarmer6comment();
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
            var firebaseRef = firebase.database().ref().child('projectdemo');
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
                    window.location.replace("./pages/projectdemoinput.html");
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
        let firebaseRefKey = firebase.database().ref().child('projectdemo').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
            document.getElementById("pfblockname").innerHTML = dataSnapShot.val().blockname;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pfsaaoname").innerHTML = dataSnapShot.val().saaoname;
            document.getElementById("pfsaaophone").innerHTML = dataSnapShot.val().saaophone;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfmaizefarmer1variety").innerHTML = dataSnapShot.val().maizefarmer1variety;
			document.getElementById("pfmaizefarmer1nid").innerHTML = dataSnapShot.val().maizefarmer1nid;
            document.getElementById("pfmaizefarmer1date").innerHTML = dataSnapShot.val().maizefarmer1date;
            document.getElementById("pfmaizefarmer1address").innerHTML = dataSnapShot.val().maizefarmer1address;
			document.getElementById("pfmaizefarmer1").innerHTML = dataSnapShot.val().maizefarmer1;
            document.getElementById("pfmaizefarmer1mobile").innerHTML = dataSnapShot.val().maizefarmer1mobile;
            document.getElementById("pfmaizefarmer1comment").innerHTML = dataSnapShot.val().maizefarmer1comment;
            document.getElementById("pfmaizefarmer2variety").innerHTML = dataSnapShot.val().maizefarmer2variety;
			document.getElementById("pfmaizefarmer2nid").innerHTML = dataSnapShot.val().maizefarmer2nid;
            document.getElementById("pfmaizefarmer2date").innerHTML = dataSnapShot.val().maizefarmer2date;
            document.getElementById("pfmaizefarmer2address").innerHTML = dataSnapShot.val().maizefarmer2address;
			document.getElementById("pfmaizefarmer2").innerHTML = dataSnapShot.val().maizefarmer2;
            document.getElementById("pfmaizefarmer2mobile").innerHTML = dataSnapShot.val().maizefarmer2mobile;
            document.getElementById("pfmaizefarmer2comment").innerHTML = dataSnapShot.val().maizefarmer2comment;
            document.getElementById("pfmaizefarmer3variety").innerHTML = dataSnapShot.val().maizefarmer3variety;
			document.getElementById("pfmaizefarmer3nid").innerHTML = dataSnapShot.val().maizefarmer3nid;
            document.getElementById("pfmaizefarmer3date").innerHTML = dataSnapShot.val().maizefarmer3date;
            document.getElementById("pfmaizefarmer3address").innerHTML = dataSnapShot.val().maizefarmer3address;
			document.getElementById("pfmaizefarmer3").innerHTML = dataSnapShot.val().maizefarmer3;
            document.getElementById("pfmaizefarmer3mobile").innerHTML = dataSnapShot.val().maizefarmer3mobile;
            document.getElementById("pfmaizefarmer3comment").innerHTML = dataSnapShot.val().maizefarmer3comment;
            document.getElementById("pfmaizefarmer4variety").innerHTML = dataSnapShot.val().maizefarmer4variety;
			document.getElementById("pfmaizefarmer4nid").innerHTML = dataSnapShot.val().maizefarmer4nid;
            document.getElementById("pfmaizefarmer4date").innerHTML = dataSnapShot.val().maizefarmer4date;
            document.getElementById("pfmaizefarmer4address").innerHTML = dataSnapShot.val().maizefarmer4address;
			document.getElementById("pfmaizefarmer4").innerHTML = dataSnapShot.val().maizefarmer4;
            document.getElementById("pfmaizefarmer4mobile").innerHTML = dataSnapShot.val().maizefarmer4mobile;
            document.getElementById("pfmaizefarmer4comment").innerHTML = dataSnapShot.val().maizefarmer4comment;
            document.getElementById("pfmaizefarmer5variety").innerHTML = dataSnapShot.val().maizefarmer5variety;
			document.getElementById("pfmaizefarmer5nid").innerHTML = dataSnapShot.val().maizefarmer5nid;
            document.getElementById("pfmaizefarmer5date").innerHTML = dataSnapShot.val().maizefarmer5date;
            document.getElementById("pfmaizefarmer5address").innerHTML = dataSnapShot.val().maizefarmer5address;
			document.getElementById("pfmaizefarmer5").innerHTML = dataSnapShot.val().maizefarmer5;
            document.getElementById("pfmaizefarmer5mobile").innerHTML = dataSnapShot.val().maizefarmer5mobile;
            document.getElementById("pfmaizefarmer5comment").innerHTML = dataSnapShot.val().maizefarmer5comment;
            document.getElementById("pfmaizefarmer6variety").innerHTML = dataSnapShot.val().maizefarmer6variety;
			document.getElementById("pfmaizefarmer6nid").innerHTML = dataSnapShot.val().maizefarmer6nid;
            document.getElementById("pfmaizefarmer6date").innerHTML = dataSnapShot.val().maizefarmer6date;
            document.getElementById("pfmaizefarmer6address").innerHTML = dataSnapShot.val().maizefarmer6address;
			document.getElementById("pfmaizefarmer6").innerHTML = dataSnapShot.val().maizefarmer6;
            document.getElementById("pfmaizefarmer6mobile").innerHTML = dataSnapShot.val().maizefarmer6mobile;
            document.getElementById("pfmaizefarmer6comment").innerHTML = dataSnapShot.val().maizefarmer6comment;
			document.getElementById("pfmustardfarmer1variety").innerHTML = dataSnapShot.val().mustardfarmer1variety;
			document.getElementById("pfmustardfarmer1nid").innerHTML = dataSnapShot.val().mustardfarmer1nid;
            document.getElementById("pfmustardfarmer1date").innerHTML = dataSnapShot.val().mustardfarmer1date;
            document.getElementById("pfmustardfarmer1address").innerHTML = dataSnapShot.val().mustardfarmer1address;
			document.getElementById("pfmustardfarmer1").innerHTML = dataSnapShot.val().mustardfarmer1;
            document.getElementById("pfmustardfarmer1mobile").innerHTML = dataSnapShot.val().mustardfarmer1mobile;
            document.getElementById("pfmustardfarmer1comment").innerHTML = dataSnapShot.val().mustardfarmer1comment;
            document.getElementById("pfmustardfarmer2variety").innerHTML = dataSnapShot.val().mustardfarmer2variety;
			document.getElementById("pfmustardfarmer2nid").innerHTML = dataSnapShot.val().mustardfarmer2nid;
            document.getElementById("pfmustardfarmer2date").innerHTML = dataSnapShot.val().mustardfarmer2date;
            document.getElementById("pfmustardfarmer2address").innerHTML = dataSnapShot.val().mustardfarmer2address;
			document.getElementById("pfmustardfarmer2").innerHTML = dataSnapShot.val().mustardfarmer2;
            document.getElementById("pfmustardfarmer2mobile").innerHTML = dataSnapShot.val().mustardfarmer2mobile;
            document.getElementById("pfmustardfarmer2comment").innerHTML = dataSnapShot.val().mustardfarmer2comment;
            document.getElementById("pfmustardfarmer3variety").innerHTML = dataSnapShot.val().mustardfarmer3variety;
			document.getElementById("pfmustardfarmer3nid").innerHTML = dataSnapShot.val().mustardfarmer3nid;
            document.getElementById("pfmustardfarmer3date").innerHTML = dataSnapShot.val().mustardfarmer3date;
            document.getElementById("pfmustardfarmer3address").innerHTML = dataSnapShot.val().mustardfarmer3address;
			document.getElementById("pfmustardfarmer3").innerHTML = dataSnapShot.val().mustardfarmer3;
            document.getElementById("pfmustardfarmer3mobile").innerHTML = dataSnapShot.val().mustardfarmer3mobile;
            document.getElementById("pfmustardfarmer3comment").innerHTML = dataSnapShot.val().mustardfarmer3comment;
            document.getElementById("pfmustardfarmer4variety").innerHTML = dataSnapShot.val().mustardfarmer4variety;
			document.getElementById("pfmustardfarmer4nid").innerHTML = dataSnapShot.val().mustardfarmer4nid;
            document.getElementById("pfmustardfarmer4date").innerHTML = dataSnapShot.val().mustardfarmer4date;
            document.getElementById("pfmustardfarmer4address").innerHTML = dataSnapShot.val().mustardfarmer4address;
			document.getElementById("pfmustardfarmer4").innerHTML = dataSnapShot.val().mustardfarmer4;
            document.getElementById("pfmustardfarmer4mobile").innerHTML = dataSnapShot.val().mustardfarmer4mobile;
            document.getElementById("pfmustardfarmer4comment").innerHTML = dataSnapShot.val().mustardfarmer4comment;
            document.getElementById("pfmustardfarmer5variety").innerHTML = dataSnapShot.val().mustardfarmer5variety;
			document.getElementById("pfmustardfarmer5nid").innerHTML = dataSnapShot.val().mustardfarmer5nid;
            document.getElementById("pfmustardfarmer5date").innerHTML = dataSnapShot.val().mustardfarmer5date;
            document.getElementById("pfmustardfarmer5address").innerHTML = dataSnapShot.val().mustardfarmer5address;
			document.getElementById("pfmustardfarmer5").innerHTML = dataSnapShot.val().mustardfarmer5;
            document.getElementById("pfmustardfarmer5mobile").innerHTML = dataSnapShot.val().mustardfarmer5mobile;
            document.getElementById("pfmustardfarmer5comment").innerHTML = dataSnapShot.val().mustardfarmer5comment;
            document.getElementById("pfmustardfarmer6variety").innerHTML = dataSnapShot.val().mustardfarmer6variety;
			document.getElementById("pfmustardfarmer6nid").innerHTML = dataSnapShot.val().mustardfarmer6nid;
            document.getElementById("pfmustardfarmer6date").innerHTML = dataSnapShot.val().mustardfarmer6date;
            document.getElementById("pfmustardfarmer6address").innerHTML = dataSnapShot.val().mustardfarmer6address;
			document.getElementById("pfmustardfarmer6").innerHTML = dataSnapShot.val().mustardfarmer6;
            document.getElementById("pfmustardfarmer6mobile").innerHTML = dataSnapShot.val().mustardfarmer6mobile;
            document.getElementById("pfmustardfarmer6comment").innerHTML = dataSnapShot.val().mustardfarmer6comment;
			document.getElementById("pfborofarmer1variety").innerHTML = dataSnapShot.val().borofarmer1variety;
			document.getElementById("pfborofarmer1nid").innerHTML = dataSnapShot.val().borofarmer1nid;
            document.getElementById("pfborofarmer1date").innerHTML = dataSnapShot.val().borofarmer1date;
            document.getElementById("pfborofarmer1address").innerHTML = dataSnapShot.val().borofarmer1address;
			document.getElementById("pfborofarmer1").innerHTML = dataSnapShot.val().borofarmer1;
            document.getElementById("pfborofarmer1mobile").innerHTML = dataSnapShot.val().borofarmer1mobile;
            document.getElementById("pfborofarmer1comment").innerHTML = dataSnapShot.val().borofarmer1comment;
            document.getElementById("pfborofarmer2variety").innerHTML = dataSnapShot.val().borofarmer2variety;
			document.getElementById("pfborofarmer2nid").innerHTML = dataSnapShot.val().borofarmer2nid;
            document.getElementById("pfborofarmer2date").innerHTML = dataSnapShot.val().borofarmer2date;
            document.getElementById("pfborofarmer2address").innerHTML = dataSnapShot.val().borofarmer2address;
			document.getElementById("pfborofarmer2").innerHTML = dataSnapShot.val().borofarmer2;
            document.getElementById("pfborofarmer2mobile").innerHTML = dataSnapShot.val().borofarmer2mobile;
            document.getElementById("pfborofarmer2comment").innerHTML = dataSnapShot.val().borofarmer2comment;
            document.getElementById("pfborofarmer3variety").innerHTML = dataSnapShot.val().borofarmer3variety;
			document.getElementById("pfborofarmer3nid").innerHTML = dataSnapShot.val().borofarmer3nid;
            document.getElementById("pfborofarmer3date").innerHTML = dataSnapShot.val().borofarmer3date;
            document.getElementById("pfborofarmer3address").innerHTML = dataSnapShot.val().borofarmer3address;
			document.getElementById("pfborofarmer3").innerHTML = dataSnapShot.val().borofarmer3;
            document.getElementById("pfborofarmer3mobile").innerHTML = dataSnapShot.val().borofarmer3mobile;
            document.getElementById("pfborofarmer3comment").innerHTML = dataSnapShot.val().borofarmer3comment;
            document.getElementById("pfborofarmer4variety").innerHTML = dataSnapShot.val().borofarmer4variety;
			document.getElementById("pfborofarmer4nid").innerHTML = dataSnapShot.val().borofarmer4nid;
            document.getElementById("pfborofarmer4date").innerHTML = dataSnapShot.val().borofarmer4date;
            document.getElementById("pfborofarmer4address").innerHTML = dataSnapShot.val().borofarmer4address;
			document.getElementById("pfborofarmer4").innerHTML = dataSnapShot.val().borofarmer4;
            document.getElementById("pfborofarmer4mobile").innerHTML = dataSnapShot.val().borofarmer4mobile;
            document.getElementById("pfborofarmer4comment").innerHTML = dataSnapShot.val().borofarmer4comment;
            document.getElementById("pfborofarmer5variety").innerHTML = dataSnapShot.val().borofarmer5variety;
			document.getElementById("pfborofarmer5nid").innerHTML = dataSnapShot.val().borofarmer5nid;
            document.getElementById("pfborofarmer5date").innerHTML = dataSnapShot.val().borofarmer5date;
            document.getElementById("pfborofarmer5address").innerHTML = dataSnapShot.val().borofarmer5address;
			document.getElementById("pfborofarmer5").innerHTML = dataSnapShot.val().borofarmer5;
            document.getElementById("pfborofarmer5mobile").innerHTML = dataSnapShot.val().borofarmer5mobile;
            document.getElementById("pfborofarmer5comment").innerHTML = dataSnapShot.val().borofarmer5comment;
            document.getElementById("pfborofarmer6variety").innerHTML = dataSnapShot.val().borofarmer6variety;
			document.getElementById("pfborofarmer6nid").innerHTML = dataSnapShot.val().borofarmer6nid;
            document.getElementById("pfborofarmer6date").innerHTML = dataSnapShot.val().borofarmer6date;
            document.getElementById("pfborofarmer6address").innerHTML = dataSnapShot.val().borofarmer6address;
			document.getElementById("pfborofarmer6").innerHTML = dataSnapShot.val().borofarmer6;
            document.getElementById("pfborofarmer6mobile").innerHTML = dataSnapShot.val().borofarmer6mobile;
            document.getElementById("pfborofarmer6comment").innerHTML = dataSnapShot.val().borofarmer6comment;
			document.getElementById("pfamanfarmer1variety").innerHTML = dataSnapShot.val().amanfarmer1variety;
			document.getElementById("pfamanfarmer1nid").innerHTML = dataSnapShot.val().amanfarmer1nid;
            document.getElementById("pfamanfarmer1date").innerHTML = dataSnapShot.val().amanfarmer1date;
            document.getElementById("pfamanfarmer1address").innerHTML = dataSnapShot.val().amanfarmer1address;
			document.getElementById("pfamanfarmer1").innerHTML = dataSnapShot.val().amanfarmer1;
            document.getElementById("pfamanfarmer1mobile").innerHTML = dataSnapShot.val().amanfarmer1mobile;
            document.getElementById("pfamanfarmer1comment").innerHTML = dataSnapShot.val().amanfarmer1comment;
            document.getElementById("pfamanfarmer2variety").innerHTML = dataSnapShot.val().amanfarmer2variety;
			document.getElementById("pfamanfarmer2nid").innerHTML = dataSnapShot.val().amanfarmer2nid;
            document.getElementById("pfamanfarmer2date").innerHTML = dataSnapShot.val().amanfarmer2date;
            document.getElementById("pfamanfarmer2address").innerHTML = dataSnapShot.val().amanfarmer2address;
			document.getElementById("pfamanfarmer2").innerHTML = dataSnapShot.val().amanfarmer2;
            document.getElementById("pfamanfarmer2mobile").innerHTML = dataSnapShot.val().amanfarmer2mobile;
            document.getElementById("pfamanfarmer2comment").innerHTML = dataSnapShot.val().amanfarmer2comment;
            document.getElementById("pfamanfarmer3variety").innerHTML = dataSnapShot.val().amanfarmer3variety;
			document.getElementById("pfamanfarmer3nid").innerHTML = dataSnapShot.val().amanfarmer3nid;
            document.getElementById("pfamanfarmer3date").innerHTML = dataSnapShot.val().amanfarmer3date;
            document.getElementById("pfamanfarmer3address").innerHTML = dataSnapShot.val().amanfarmer3address;
			document.getElementById("pfamanfarmer3").innerHTML = dataSnapShot.val().amanfarmer3;
            document.getElementById("pfamanfarmer3mobile").innerHTML = dataSnapShot.val().amanfarmer3mobile;
            document.getElementById("pfamanfarmer3comment").innerHTML = dataSnapShot.val().amanfarmer3comment;
            document.getElementById("pfamanfarmer4variety").innerHTML = dataSnapShot.val().amanfarmer4variety;
			document.getElementById("pfamanfarmer4nid").innerHTML = dataSnapShot.val().amanfarmer4nid;
            document.getElementById("pfamanfarmer4date").innerHTML = dataSnapShot.val().amanfarmer4date;
            document.getElementById("pfamanfarmer4address").innerHTML = dataSnapShot.val().amanfarmer4address;
			document.getElementById("pfamanfarmer4").innerHTML = dataSnapShot.val().amanfarmer4;
            document.getElementById("pfamanfarmer4mobile").innerHTML = dataSnapShot.val().amanfarmer4mobile;
            document.getElementById("pfamanfarmer4comment").innerHTML = dataSnapShot.val().amanfarmer4comment;
            document.getElementById("pfamanfarmer5variety").innerHTML = dataSnapShot.val().amanfarmer5variety;
			document.getElementById("pfamanfarmer5nid").innerHTML = dataSnapShot.val().amanfarmer5nid;
            document.getElementById("pfamanfarmer5date").innerHTML = dataSnapShot.val().amanfarmer5date;
            document.getElementById("pfamanfarmer5address").innerHTML = dataSnapShot.val().amanfarmer5address;
			document.getElementById("pfamanfarmer5").innerHTML = dataSnapShot.val().amanfarmer5;
            document.getElementById("pfamanfarmer5mobile").innerHTML = dataSnapShot.val().amanfarmer5mobile;
            document.getElementById("pfamanfarmer5comment").innerHTML = dataSnapShot.val().amanfarmer5comment;
            document.getElementById("pfamanfarmer6variety").innerHTML = dataSnapShot.val().amanfarmer6variety;
			document.getElementById("pfamanfarmer6nid").innerHTML = dataSnapShot.val().amanfarmer6nid;
            document.getElementById("pfamanfarmer6date").innerHTML = dataSnapShot.val().amanfarmer6date;
            document.getElementById("pfamanfarmer6address").innerHTML = dataSnapShot.val().amanfarmer6address;
			document.getElementById("pfamanfarmer6").innerHTML = dataSnapShot.val().amanfarmer6;
            document.getElementById("pfamanfarmer6mobile").innerHTML = dataSnapShot.val().amanfarmer6mobile;
            document.getElementById("pfamanfarmer6comment").innerHTML = dataSnapShot.val().amanfarmer6comment;
			
            
			
			
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
	var pfsaaoname = document.getElementById("pfsaaoname").innerHTML;
	var pfsaaophone = document.getElementById("pfsaaophone").innerHTML;
    var pflastupdate = document.getElementById("pflastupdate").innerHTML;
    var pfmaizefarmer1variety = document.getElementById("pfmaizefarmer1variety").innerHTML;
	var pfmaizefarmer1nid = document.getElementById("pfmaizefarmer1nid").innerHTML;
    var pfmaizefarmer1date = document.getElementById("pfmaizefarmer1date").innerHTML;
    var pfmaizefarmer1address = document.getElementById("pfmaizefarmer1address").innerHTML;
	var pfmaizefarmer1 = document.getElementById("pfmaizefarmer1").innerHTML;
    var pfmaizefarmer1mobile = document.getElementById("pfmaizefarmer1mobile").innerHTML;
    var pfmaizefarmer1comment = document.getElementById("pfmaizefarmer1comment").innerHTML;
	var pfmaizefarmer2variety = document.getElementById("pfmaizefarmer2variety").innerHTML;
	var pfmaizefarmer2nid = document.getElementById("pfmaizefarmer2nid").innerHTML;
    var pfmaizefarmer2date = document.getElementById("pfmaizefarmer2date").innerHTML;
    var pfmaizefarmer2address = document.getElementById("pfmaizefarmer2address").innerHTML;
	var pfmaizefarmer2 = document.getElementById("pfmaizefarmer2").innerHTML;
    var pfmaizefarmer2mobile = document.getElementById("pfmaizefarmer2mobile").innerHTML;
    var pfmaizefarmer2comment = document.getElementById("pfmaizefarmer2comment").innerHTML;
	var pfmaizefarmer3variety = document.getElementById("pfmaizefarmer3variety").innerHTML;
	var pfmaizefarmer3nid = document.getElementById("pfmaizefarmer3nid").innerHTML;
    var pfmaizefarmer3date = document.getElementById("pfmaizefarmer3date").innerHTML;
    var pfmaizefarmer3address = document.getElementById("pfmaizefarmer3address").innerHTML;
	var pfmaizefarmer3 = document.getElementById("pfmaizefarmer3").innerHTML;
    var pfmaizefarmer3mobile = document.getElementById("pfmaizefarmer3mobile").innerHTML;
    var pfmaizefarmer3comment = document.getElementById("pfmaizefarmer3comment").innerHTML;
	var pfmaizefarmer4variety = document.getElementById("pfmaizefarmer4variety").innerHTML;
	var pfmaizefarmer4nid = document.getElementById("pfmaizefarmer4nid").innerHTML;
    var pfmaizefarmer4date = document.getElementById("pfmaizefarmer4date").innerHTML;
    var pfmaizefarmer4address = document.getElementById("pfmaizefarmer4address").innerHTML;
	var pfmaizefarmer4 = document.getElementById("pfmaizefarmer4").innerHTML;
    var pfmaizefarmer4mobile = document.getElementById("pfmaizefarmer4mobile").innerHTML;
    var pfmaizefarmer4comment = document.getElementById("pfmaizefarmer4comment").innerHTML;
	var pfmaizefarmer5variety = document.getElementById("pfmaizefarmer5variety").innerHTML;
	var pfmaizefarmer5nid = document.getElementById("pfmaizefarmer5nid").innerHTML;
    var pfmaizefarmer5date = document.getElementById("pfmaizefarmer5date").innerHTML;
    var pfmaizefarmer5address = document.getElementById("pfmaizefarmer5address").innerHTML;
	var pfmaizefarmer5 = document.getElementById("pfmaizefarmer5").innerHTML;
    var pfmaizefarmer5mobile = document.getElementById("pfmaizefarmer5mobile").innerHTML;
    var pfmaizefarmer5comment = document.getElementById("pfmaizefarmer5comment").innerHTML;
	var pfmaizefarmer6variety = document.getElementById("pfmaizefarmer6variety").innerHTML;
	var pfmaizefarmer6nid = document.getElementById("pfmaizefarmer6nid").innerHTML;
    var pfmaizefarmer6date = document.getElementById("pfmaizefarmer6date").innerHTML;
    var pfmaizefarmer6address = document.getElementById("pfmaizefarmer6address").innerHTML;
	var pfmaizefarmer6 = document.getElementById("pfmaizefarmer6").innerHTML;
    var pfmaizefarmer6mobile = document.getElementById("pfmaizefarmer6mobile").innerHTML;
    var pfmaizefarmer6comment = document.getElementById("pfmaizefarmer6comment").innerHTML;
    var pfmustardfarmer1variety = document.getElementById("pfmustardfarmer1variety").innerHTML;
	var pfmustardfarmer1nid = document.getElementById("pfmustardfarmer1nid").innerHTML;
    var pfmustardfarmer1date = document.getElementById("pfmustardfarmer1date").innerHTML;
    var pfmustardfarmer1address = document.getElementById("pfmustardfarmer1address").innerHTML;
	var pfmustardfarmer1 = document.getElementById("pfmustardfarmer1").innerHTML;
    var pfmustardfarmer1mobile = document.getElementById("pfmustardfarmer1mobile").innerHTML;
    var pfmustardfarmer1comment = document.getElementById("pfmustardfarmer1comment").innerHTML;
	var pfmustardfarmer2variety = document.getElementById("pfmustardfarmer2variety").innerHTML;
	var pfmustardfarmer2nid = document.getElementById("pfmustardfarmer2nid").innerHTML;
    var pfmustardfarmer2date = document.getElementById("pfmustardfarmer2date").innerHTML;
    var pfmustardfarmer2address = document.getElementById("pfmustardfarmer2address").innerHTML;
	var pfmustardfarmer2 = document.getElementById("pfmustardfarmer2").innerHTML;
    var pfmustardfarmer2mobile = document.getElementById("pfmustardfarmer2mobile").innerHTML;
    var pfmustardfarmer2comment = document.getElementById("pfmustardfarmer2comment").innerHTML;
	var pfmustardfarmer3variety = document.getElementById("pfmustardfarmer3variety").innerHTML;
	var pfmustardfarmer3nid = document.getElementById("pfmustardfarmer3nid").innerHTML;
    var pfmustardfarmer3date = document.getElementById("pfmustardfarmer3date").innerHTML;
    var pfmustardfarmer3address = document.getElementById("pfmustardfarmer3address").innerHTML;
	var pfmustardfarmer3 = document.getElementById("pfmustardfarmer3").innerHTML;
    var pfmustardfarmer3mobile = document.getElementById("pfmustardfarmer3mobile").innerHTML;
    var pfmustardfarmer3comment = document.getElementById("pfmustardfarmer3comment").innerHTML;
	var pfmustardfarmer4variety = document.getElementById("pfmustardfarmer4variety").innerHTML;
	var pfmustardfarmer4nid = document.getElementById("pfmustardfarmer4nid").innerHTML;
    var pfmustardfarmer4date = document.getElementById("pfmustardfarmer4date").innerHTML;
    var pfmustardfarmer4address = document.getElementById("pfmustardfarmer4address").innerHTML;
	var pfmustardfarmer4 = document.getElementById("pfmustardfarmer4").innerHTML;
    var pfmustardfarmer4mobile = document.getElementById("pfmustardfarmer4mobile").innerHTML;
    var pfmustardfarmer4comment = document.getElementById("pfmustardfarmer4comment").innerHTML;
	var pfmustardfarmer5variety = document.getElementById("pfmustardfarmer5variety").innerHTML;
	var pfmustardfarmer5nid = document.getElementById("pfmustardfarmer5nid").innerHTML;
    var pfmustardfarmer5date = document.getElementById("pfmustardfarmer5date").innerHTML;
    var pfmustardfarmer5address = document.getElementById("pfmustardfarmer5address").innerHTML;
	var pfmustardfarmer5 = document.getElementById("pfmustardfarmer5").innerHTML;
    var pfmustardfarmer5mobile = document.getElementById("pfmustardfarmer5mobile").innerHTML;
    var pfmustardfarmer5comment = document.getElementById("pfmustardfarmer5comment").innerHTML;
	var pfmustardfarmer6variety = document.getElementById("pfmustardfarmer6variety").innerHTML;
	var pfmustardfarmer6nid = document.getElementById("pfmustardfarmer6nid").innerHTML;
    var pfmustardfarmer6date = document.getElementById("pfmustardfarmer6date").innerHTML;
    var pfmustardfarmer6address = document.getElementById("pfmustardfarmer6address").innerHTML;
	var pfmustardfarmer6 = document.getElementById("pfmustardfarmer6").innerHTML;
    var pfmustardfarmer6mobile = document.getElementById("pfmustardfarmer6mobile").innerHTML;
    var pfmustardfarmer6comment = document.getElementById("pfmustardfarmer6comment").innerHTML;
    var pfborofarmer1variety = document.getElementById("pfborofarmer1variety").innerHTML;
	var pfborofarmer1nid = document.getElementById("pfborofarmer1nid").innerHTML;
    var pfborofarmer1date = document.getElementById("pfborofarmer1date").innerHTML;
    var pfborofarmer1address = document.getElementById("pfborofarmer1address").innerHTML;
	var pfborofarmer1 = document.getElementById("pfborofarmer1").innerHTML;
    var pfborofarmer1mobile = document.getElementById("pfborofarmer1mobile").innerHTML;
    var pfborofarmer1comment = document.getElementById("pfborofarmer1comment").innerHTML;
	var pfborofarmer2variety = document.getElementById("pfborofarmer2variety").innerHTML;
	var pfborofarmer2nid = document.getElementById("pfborofarmer2nid").innerHTML;
    var pfborofarmer2date = document.getElementById("pfborofarmer2date").innerHTML;
    var pfborofarmer2address = document.getElementById("pfborofarmer2address").innerHTML;
	var pfborofarmer2 = document.getElementById("pfborofarmer2").innerHTML;
    var pfborofarmer2mobile = document.getElementById("pfborofarmer2mobile").innerHTML;
    var pfborofarmer2comment = document.getElementById("pfborofarmer2comment").innerHTML;
	var pfborofarmer3variety = document.getElementById("pfborofarmer3variety").innerHTML;
	var pfborofarmer3nid = document.getElementById("pfborofarmer3nid").innerHTML;
    var pfborofarmer3date = document.getElementById("pfborofarmer3date").innerHTML;
    var pfborofarmer3address = document.getElementById("pfborofarmer3address").innerHTML;
	var pfborofarmer3 = document.getElementById("pfborofarmer3").innerHTML;
    var pfborofarmer3mobile = document.getElementById("pfborofarmer3mobile").innerHTML;
    var pfborofarmer3comment = document.getElementById("pfborofarmer3comment").innerHTML;
	var pfborofarmer4variety = document.getElementById("pfborofarmer4variety").innerHTML;
	var pfborofarmer4nid = document.getElementById("pfborofarmer4nid").innerHTML;
    var pfborofarmer4date = document.getElementById("pfborofarmer4date").innerHTML;
    var pfborofarmer4address = document.getElementById("pfborofarmer4address").innerHTML;
	var pfborofarmer4 = document.getElementById("pfborofarmer4").innerHTML;
    var pfborofarmer4mobile = document.getElementById("pfborofarmer4mobile").innerHTML;
    var pfborofarmer4comment = document.getElementById("pfborofarmer4comment").innerHTML;
	var pfborofarmer5variety = document.getElementById("pfborofarmer5variety").innerHTML;
	var pfborofarmer5nid = document.getElementById("pfborofarmer5nid").innerHTML;
    var pfborofarmer5date = document.getElementById("pfborofarmer5date").innerHTML;
    var pfborofarmer5address = document.getElementById("pfborofarmer5address").innerHTML;
	var pfborofarmer5 = document.getElementById("pfborofarmer5").innerHTML;
    var pfborofarmer5mobile = document.getElementById("pfborofarmer5mobile").innerHTML;
    var pfborofarmer5comment = document.getElementById("pfborofarmer5comment").innerHTML;
	var pfborofarmer6variety = document.getElementById("pfborofarmer6variety").innerHTML;
	var pfborofarmer6nid = document.getElementById("pfborofarmer6nid").innerHTML;
    var pfborofarmer6date = document.getElementById("pfborofarmer6date").innerHTML;
    var pfborofarmer6address = document.getElementById("pfborofarmer6address").innerHTML;
	var pfborofarmer6 = document.getElementById("pfborofarmer6").innerHTML;
    var pfborofarmer6mobile = document.getElementById("pfborofarmer6mobile").innerHTML;
    var pfborofarmer6comment = document.getElementById("pfborofarmer6comment").innerHTML;
    var pfamanfarmer1variety = document.getElementById("pfamanfarmer1variety").innerHTML;
	var pfamanfarmer1nid = document.getElementById("pfamanfarmer1nid").innerHTML;
    var pfamanfarmer1date = document.getElementById("pfamanfarmer1date").innerHTML;
    var pfamanfarmer1address = document.getElementById("pfamanfarmer1address").innerHTML;
	var pfamanfarmer1 = document.getElementById("pfamanfarmer1").innerHTML;
    var pfamanfarmer1mobile = document.getElementById("pfamanfarmer1mobile").innerHTML;
    var pfamanfarmer1comment = document.getElementById("pfamanfarmer1comment").innerHTML;
	var pfamanfarmer2variety = document.getElementById("pfamanfarmer2variety").innerHTML;
	var pfamanfarmer2nid = document.getElementById("pfamanfarmer2nid").innerHTML;
    var pfamanfarmer2date = document.getElementById("pfamanfarmer2date").innerHTML;
    var pfamanfarmer2address = document.getElementById("pfamanfarmer2address").innerHTML;
	var pfamanfarmer2 = document.getElementById("pfamanfarmer2").innerHTML;
    var pfamanfarmer2mobile = document.getElementById("pfamanfarmer2mobile").innerHTML;
    var pfamanfarmer2comment = document.getElementById("pfamanfarmer2comment").innerHTML;
	var pfamanfarmer3variety = document.getElementById("pfamanfarmer3variety").innerHTML;
	var pfamanfarmer3nid = document.getElementById("pfamanfarmer3nid").innerHTML;
    var pfamanfarmer3date = document.getElementById("pfamanfarmer3date").innerHTML;
    var pfamanfarmer3address = document.getElementById("pfamanfarmer3address").innerHTML;
	var pfamanfarmer3 = document.getElementById("pfamanfarmer3").innerHTML;
    var pfamanfarmer3mobile = document.getElementById("pfamanfarmer3mobile").innerHTML;
    var pfamanfarmer3comment = document.getElementById("pfamanfarmer3comment").innerHTML;
	var pfamanfarmer4variety = document.getElementById("pfamanfarmer4variety").innerHTML;
	var pfamanfarmer4nid = document.getElementById("pfamanfarmer4nid").innerHTML;
    var pfamanfarmer4date = document.getElementById("pfamanfarmer4date").innerHTML;
    var pfamanfarmer4address = document.getElementById("pfamanfarmer4address").innerHTML;
	var pfamanfarmer4 = document.getElementById("pfamanfarmer4").innerHTML;
    var pfamanfarmer4mobile = document.getElementById("pfamanfarmer4mobile").innerHTML;
    var pfamanfarmer4comment = document.getElementById("pfamanfarmer4comment").innerHTML;
	var pfamanfarmer5variety = document.getElementById("pfamanfarmer5variety").innerHTML;
	var pfamanfarmer5nid = document.getElementById("pfamanfarmer5nid").innerHTML;
    var pfamanfarmer5date = document.getElementById("pfamanfarmer5date").innerHTML;
    var pfamanfarmer5address = document.getElementById("pfamanfarmer5address").innerHTML;
	var pfamanfarmer5 = document.getElementById("pfamanfarmer5").innerHTML;
    var pfamanfarmer5mobile = document.getElementById("pfamanfarmer5mobile").innerHTML;
    var pfamanfarmer5comment = document.getElementById("pfamanfarmer5comment").innerHTML;
	var pfamanfarmer6variety = document.getElementById("pfamanfarmer6variety").innerHTML;
	var pfamanfarmer6nid = document.getElementById("pfamanfarmer6nid").innerHTML;
    var pfamanfarmer6date = document.getElementById("pfamanfarmer6date").innerHTML;
    var pfamanfarmer6address = document.getElementById("pfamanfarmer6address").innerHTML;
	var pfamanfarmer6 = document.getElementById("pfamanfarmer6").innerHTML;
    var pfamanfarmer6mobile = document.getElementById("pfamanfarmer6mobile").innerHTML;
    var pfamanfarmer6comment = document.getElementById("pfamanfarmer6comment").innerHTML;
    

    document.getElementById("blockname").value = pfblockname; 
    document.getElementById("union").value = pfunion; 
    document.getElementById("saaoname").value = pfsaaoname; 
    document.getElementById("saaophone").value = pfsaaophone; 
    document.getElementById("lastupdate").value = pflastupdate; 
    document.getElementById("maizefarmer1variety").value = pfmaizefarmer1variety;
	document.getElementById("maizefarmer1nid").value = pfmaizefarmer1nid; 
    document.getElementById("maizefarmer1date").value = pfmaizefarmer1date; 
    document.getElementById("maizefarmer1address").value = pfmaizefarmer1address;
	document.getElementById("maizefarmer1").value = pfmaizefarmer1; 
    document.getElementById("maizefarmer1mobile").value = pfmaizefarmer1mobile; 
    document.getElementById("maizefarmer1comment").value = pfmaizefarmer1comment; 
    document.getElementById("maizefarmer2variety").value = pfmaizefarmer2variety;
	document.getElementById("maizefarmer2nid").value = pfmaizefarmer2nid; 
    document.getElementById("maizefarmer2date").value = pfmaizefarmer2date; 
    document.getElementById("maizefarmer2address").value = pfmaizefarmer2address;
	document.getElementById("maizefarmer2").value = pfmaizefarmer2; 
    document.getElementById("maizefarmer2mobile").value = pfmaizefarmer2mobile; 
    document.getElementById("maizefarmer2comment").value = pfmaizefarmer2comment; 
    document.getElementById("maizefarmer3variety").value = pfmaizefarmer3variety;
	document.getElementById("maizefarmer3nid").value = pfmaizefarmer3nid; 
    document.getElementById("maizefarmer3date").value = pfmaizefarmer3date; 
    document.getElementById("maizefarmer3address").value = pfmaizefarmer3address;
	document.getElementById("maizefarmer3").value = pfmaizefarmer3; 
    document.getElementById("maizefarmer3mobile").value = pfmaizefarmer3mobile; 
    document.getElementById("maizefarmer3comment").value = pfmaizefarmer3comment; 
	document.getElementById("maizefarmer4variety").value = pfmaizefarmer4variety;
	document.getElementById("maizefarmer4nid").value = pfmaizefarmer4nid; 
    document.getElementById("maizefarmer4date").value = pfmaizefarmer4date; 
    document.getElementById("maizefarmer4address").value = pfmaizefarmer4address;
	document.getElementById("maizefarmer4").value = pfmaizefarmer4; 
    document.getElementById("maizefarmer4mobile").value = pfmaizefarmer4mobile; 
    document.getElementById("maizefarmer4comment").value = pfmaizefarmer4comment; 
	document.getElementById("maizefarmer5variety").value = pfmaizefarmer5variety;
	document.getElementById("maizefarmer5nid").value = pfmaizefarmer5nid; 
    document.getElementById("maizefarmer5date").value = pfmaizefarmer5date; 
    document.getElementById("maizefarmer5address").value = pfmaizefarmer5address;
	document.getElementById("maizefarmer5").value = pfmaizefarmer5; 
    document.getElementById("maizefarmer5mobile").value = pfmaizefarmer5mobile; 
    document.getElementById("maizefarmer5comment").value = pfmaizefarmer5comment; 
	document.getElementById("maizefarmer6variety").value = pfmaizefarmer6variety;
	document.getElementById("maizefarmer6nid").value = pfmaizefarmer6nid; 
    document.getElementById("maizefarmer6date").value = pfmaizefarmer6date; 
    document.getElementById("maizefarmer6address").value = pfmaizefarmer6address;
	document.getElementById("maizefarmer6").value = pfmaizefarmer6; 
    document.getElementById("maizefarmer6mobile").value = pfmaizefarmer6mobile; 
    document.getElementById("maizefarmer6comment").value = pfmaizefarmer6comment; 
    document.getElementById("mustardfarmer1variety").value = pfmustardfarmer1variety;
	document.getElementById("mustardfarmer1nid").value = pfmustardfarmer1nid; 
    document.getElementById("mustardfarmer1date").value = pfmustardfarmer1date; 
    document.getElementById("mustardfarmer1address").value = pfmustardfarmer1address;
	document.getElementById("mustardfarmer1").value = pfmustardfarmer1; 
    document.getElementById("mustardfarmer1mobile").value = pfmustardfarmer1mobile; 
    document.getElementById("mustardfarmer1comment").value = pfmustardfarmer1comment; 
    document.getElementById("mustardfarmer2variety").value = pfmustardfarmer2variety;
	document.getElementById("mustardfarmer2nid").value = pfmustardfarmer2nid; 
    document.getElementById("mustardfarmer2date").value = pfmustardfarmer2date; 
    document.getElementById("mustardfarmer2address").value = pfmustardfarmer2address;
	document.getElementById("mustardfarmer2").value = pfmustardfarmer2; 
    document.getElementById("mustardfarmer2mobile").value = pfmustardfarmer2mobile; 
    document.getElementById("mustardfarmer2comment").value = pfmustardfarmer2comment; 
    document.getElementById("mustardfarmer3variety").value = pfmustardfarmer3variety;
	document.getElementById("mustardfarmer3nid").value = pfmustardfarmer3nid; 
    document.getElementById("mustardfarmer3date").value = pfmustardfarmer3date; 
    document.getElementById("mustardfarmer3address").value = pfmustardfarmer3address;
	document.getElementById("mustardfarmer3").value = pfmustardfarmer3; 
    document.getElementById("mustardfarmer3mobile").value = pfmustardfarmer3mobile; 
    document.getElementById("mustardfarmer3comment").value = pfmustardfarmer3comment; 
	document.getElementById("mustardfarmer4variety").value = pfmustardfarmer4variety;
	document.getElementById("mustardfarmer4nid").value = pfmustardfarmer4nid; 
    document.getElementById("mustardfarmer4date").value = pfmustardfarmer4date; 
    document.getElementById("mustardfarmer4address").value = pfmustardfarmer4address;
	document.getElementById("mustardfarmer4").value = pfmustardfarmer4; 
    document.getElementById("mustardfarmer4mobile").value = pfmustardfarmer4mobile; 
    document.getElementById("mustardfarmer4comment").value = pfmustardfarmer4comment; 
	document.getElementById("mustardfarmer5variety").value = pfmustardfarmer5variety;
	document.getElementById("mustardfarmer5nid").value = pfmustardfarmer5nid; 
    document.getElementById("mustardfarmer5date").value = pfmustardfarmer5date; 
    document.getElementById("mustardfarmer5address").value = pfmustardfarmer5address;
	document.getElementById("mustardfarmer5").value = pfmustardfarmer5; 
    document.getElementById("mustardfarmer5mobile").value = pfmustardfarmer5mobile; 
    document.getElementById("mustardfarmer5comment").value = pfmustardfarmer5comment; 
	document.getElementById("mustardfarmer6variety").value = pfmustardfarmer6variety;
	document.getElementById("mustardfarmer6nid").value = pfmustardfarmer6nid; 
    document.getElementById("mustardfarmer6date").value = pfmustardfarmer6date; 
    document.getElementById("mustardfarmer6address").value = pfmustardfarmer6address;
	document.getElementById("mustardfarmer6").value = pfmustardfarmer6; 
    document.getElementById("mustardfarmer6mobile").value = pfmustardfarmer6mobile; 
    document.getElementById("mustardfarmer6comment").value = pfmustardfarmer6comment; 
    document.getElementById("borofarmer1variety").value = pfborofarmer1variety;
	document.getElementById("borofarmer1nid").value = pfborofarmer1nid; 
    document.getElementById("borofarmer1date").value = pfborofarmer1date; 
    document.getElementById("borofarmer1address").value = pfborofarmer1address;
	document.getElementById("borofarmer1").value = pfborofarmer1; 
    document.getElementById("borofarmer1mobile").value = pfborofarmer1mobile; 
    document.getElementById("borofarmer1comment").value = pfborofarmer1comment; 
    document.getElementById("borofarmer2variety").value = pfborofarmer2variety;
	document.getElementById("borofarmer2nid").value = pfborofarmer2nid; 
    document.getElementById("borofarmer2date").value = pfborofarmer2date; 
    document.getElementById("borofarmer2address").value = pfborofarmer2address;
	document.getElementById("borofarmer2").value = pfborofarmer2; 
    document.getElementById("borofarmer2mobile").value = pfborofarmer2mobile; 
    document.getElementById("borofarmer2comment").value = pfborofarmer2comment; 
    document.getElementById("borofarmer3variety").value = pfborofarmer3variety;
	document.getElementById("borofarmer3nid").value = pfborofarmer3nid; 
    document.getElementById("borofarmer3date").value = pfborofarmer3date; 
    document.getElementById("borofarmer3address").value = pfborofarmer3address;
	document.getElementById("borofarmer3").value = pfborofarmer3; 
    document.getElementById("borofarmer3mobile").value = pfborofarmer3mobile; 
    document.getElementById("borofarmer3comment").value = pfborofarmer3comment; 
	document.getElementById("borofarmer4variety").value = pfborofarmer4variety;
	document.getElementById("borofarmer4nid").value = pfborofarmer4nid; 
    document.getElementById("borofarmer4date").value = pfborofarmer4date; 
    document.getElementById("borofarmer4address").value = pfborofarmer4address;
	document.getElementById("borofarmer4").value = pfborofarmer4; 
    document.getElementById("borofarmer4mobile").value = pfborofarmer4mobile; 
    document.getElementById("borofarmer4comment").value = pfborofarmer4comment; 
	document.getElementById("borofarmer5variety").value = pfborofarmer5variety;
	document.getElementById("borofarmer5nid").value = pfborofarmer5nid; 
    document.getElementById("borofarmer5date").value = pfborofarmer5date; 
    document.getElementById("borofarmer5address").value = pfborofarmer5address;
	document.getElementById("borofarmer5").value = pfborofarmer5; 
    document.getElementById("borofarmer5mobile").value = pfborofarmer5mobile; 
    document.getElementById("borofarmer5comment").value = pfborofarmer5comment; 
	document.getElementById("borofarmer6variety").value = pfborofarmer6variety;
	document.getElementById("borofarmer6nid").value = pfborofarmer6nid; 
    document.getElementById("borofarmer6date").value = pfborofarmer6date; 
    document.getElementById("borofarmer6address").value = pfborofarmer6address;
	document.getElementById("borofarmer6").value = pfborofarmer6; 
    document.getElementById("borofarmer6mobile").value = pfborofarmer6mobile; 
    document.getElementById("borofarmer6comment").value = pfborofarmer6comment; 
    document.getElementById("amanfarmer1variety").value = pfamanfarmer1variety;
	document.getElementById("amanfarmer1nid").value = pfamanfarmer1nid; 
    document.getElementById("amanfarmer1date").value = pfamanfarmer1date; 
    document.getElementById("amanfarmer1address").value = pfamanfarmer1address;
	document.getElementById("amanfarmer1").value = pfamanfarmer1; 
    document.getElementById("amanfarmer1mobile").value = pfamanfarmer1mobile; 
    document.getElementById("amanfarmer1comment").value = pfamanfarmer1comment; 
    document.getElementById("amanfarmer2variety").value = pfamanfarmer2variety;
	document.getElementById("amanfarmer2nid").value = pfamanfarmer2nid; 
    document.getElementById("amanfarmer2date").value = pfamanfarmer2date; 
    document.getElementById("amanfarmer2address").value = pfamanfarmer2address;
	document.getElementById("amanfarmer2").value = pfamanfarmer2; 
    document.getElementById("amanfarmer2mobile").value = pfamanfarmer2mobile; 
    document.getElementById("amanfarmer2comment").value = pfamanfarmer2comment; 
    document.getElementById("amanfarmer3variety").value = pfamanfarmer3variety;
	document.getElementById("amanfarmer3nid").value = pfamanfarmer3nid; 
    document.getElementById("amanfarmer3date").value = pfamanfarmer3date; 
    document.getElementById("amanfarmer3address").value = pfamanfarmer3address;
	document.getElementById("amanfarmer3").value = pfamanfarmer3; 
    document.getElementById("amanfarmer3mobile").value = pfamanfarmer3mobile; 
    document.getElementById("amanfarmer3comment").value = pfamanfarmer3comment; 
	document.getElementById("amanfarmer4variety").value = pfamanfarmer4variety;
	document.getElementById("amanfarmer4nid").value = pfamanfarmer4nid; 
    document.getElementById("amanfarmer4date").value = pfamanfarmer4date; 
    document.getElementById("amanfarmer4address").value = pfamanfarmer4address;
	document.getElementById("amanfarmer4").value = pfamanfarmer4; 
    document.getElementById("amanfarmer4mobile").value = pfamanfarmer4mobile; 
    document.getElementById("amanfarmer4comment").value = pfamanfarmer4comment; 
	document.getElementById("amanfarmer5variety").value = pfamanfarmer5variety;
	document.getElementById("amanfarmer5nid").value = pfamanfarmer5nid; 
    document.getElementById("amanfarmer5date").value = pfamanfarmer5date; 
    document.getElementById("amanfarmer5address").value = pfamanfarmer5address;
	document.getElementById("amanfarmer5").value = pfamanfarmer5; 
    document.getElementById("amanfarmer5mobile").value = pfamanfarmer5mobile; 
    document.getElementById("amanfarmer5comment").value = pfamanfarmer5comment; 
	document.getElementById("amanfarmer6variety").value = pfamanfarmer6variety;
	document.getElementById("amanfarmer6nid").value = pfamanfarmer6nid; 
    document.getElementById("amanfarmer6date").value = pfamanfarmer6date; 
    document.getElementById("amanfarmer6address").value = pfamanfarmer6address;
	document.getElementById("amanfarmer6").value = pfamanfarmer6; 
    document.getElementById("amanfarmer6mobile").value = pfamanfarmer6mobile; 
    document.getElementById("amanfarmer6comment").value = pfamanfarmer6comment;    	
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
    let saaoname = document.getElementById("saaoname").value     
    let saaophone = document.getElementById("saaophone").value   
    let lastupdate = document.getElementById("lastupdate").value
    let maizefarmer1variety = document.getElementById("maizefarmer1variety").value
	let maizefarmer1nid = document.getElementById("maizefarmer1nid").value  
    let maizefarmer1date = document.getElementById("maizefarmer1date").value  
    let maizefarmer1address = document.getElementById("maizefarmer1address").value
	let maizefarmer1 = document.getElementById("maizefarmer1").value  
    let maizefarmer1mobile = document.getElementById("maizefarmer1mobile").value  
    let maizefarmer1comment = document.getElementById("maizefarmer1comment").value 
    
	let maizefarmer2variety = document.getElementById("maizefarmer2variety").value
	let maizefarmer2nid = document.getElementById("maizefarmer2nid").value  
    let maizefarmer2date = document.getElementById("maizefarmer2date").value  
    let maizefarmer2address = document.getElementById("maizefarmer2address").value
	let maizefarmer2 = document.getElementById("maizefarmer2").value  
    let maizefarmer2mobile = document.getElementById("maizefarmer2mobile").value  
    let maizefarmer2comment = document.getElementById("maizefarmer2comment").value 
 
 let maizefarmer3variety = document.getElementById("maizefarmer3variety").value
	let maizefarmer3nid = document.getElementById("maizefarmer3nid").value  
    let maizefarmer3date = document.getElementById("maizefarmer3date").value  
    let maizefarmer3address = document.getElementById("maizefarmer3address").value
	let maizefarmer3 = document.getElementById("maizefarmer3").value  
    let maizefarmer3mobile = document.getElementById("maizefarmer3mobile").value  
    let maizefarmer3comment = document.getElementById("maizefarmer3comment").value 
 
	let maizefarmer4variety = document.getElementById("maizefarmer4variety").value
	let maizefarmer4nid = document.getElementById("maizefarmer4nid").value  
    let maizefarmer4date = document.getElementById("maizefarmer4date").value  
    let maizefarmer4address = document.getElementById("maizefarmer4address").value
	let maizefarmer4 = document.getElementById("maizefarmer4").value  
    let maizefarmer4mobile = document.getElementById("maizefarmer4mobile").value  
    let maizefarmer4comment = document.getElementById("maizefarmer4comment").value 
 
	let maizefarmer5variety = document.getElementById("maizefarmer5variety").value
	let maizefarmer5nid = document.getElementById("maizefarmer5nid").value  
    let maizefarmer5date = document.getElementById("maizefarmer5date").value  
    let maizefarmer5address = document.getElementById("maizefarmer5address").value
	let maizefarmer5 = document.getElementById("maizefarmer5").value  
    let maizefarmer5mobile = document.getElementById("maizefarmer5mobile").value  
    let maizefarmer5comment = document.getElementById("maizefarmer5comment").value 
 
	let maizefarmer6variety = document.getElementById("maizefarmer6variety").value
	let maizefarmer6nid = document.getElementById("maizefarmer6nid").value  
    let maizefarmer6date = document.getElementById("maizefarmer6date").value  
    let maizefarmer6address = document.getElementById("maizefarmer6address").value
	let maizefarmer6 = document.getElementById("maizefarmer6").value  
    let maizefarmer6mobile = document.getElementById("maizefarmer6mobile").value  
    let maizefarmer6comment = document.getElementById("maizefarmer6comment").value 
 
 
    let mustardfarmer1variety = document.getElementById("mustardfarmer1variety").value
	let mustardfarmer1nid = document.getElementById("mustardfarmer1nid").value  
    let mustardfarmer1date = document.getElementById("mustardfarmer1date").value  
    let mustardfarmer1address = document.getElementById("mustardfarmer1address").value
	let mustardfarmer1 = document.getElementById("mustardfarmer1").value  
    let mustardfarmer1mobile = document.getElementById("mustardfarmer1mobile").value  
    let mustardfarmer1comment = document.getElementById("mustardfarmer1comment").value 
    
	let mustardfarmer2variety = document.getElementById("mustardfarmer2variety").value
	let mustardfarmer2nid = document.getElementById("mustardfarmer2nid").value  
    let mustardfarmer2date = document.getElementById("mustardfarmer2date").value  
    let mustardfarmer2address = document.getElementById("mustardfarmer2address").value
	let mustardfarmer2 = document.getElementById("mustardfarmer2").value  
    let mustardfarmer2mobile = document.getElementById("mustardfarmer2mobile").value  
    let mustardfarmer2comment = document.getElementById("mustardfarmer2comment").value 
 
	let mustardfarmer3variety = document.getElementById("mustardfarmer3variety").value
	let mustardfarmer3nid = document.getElementById("mustardfarmer3nid").value  
    let mustardfarmer3date = document.getElementById("mustardfarmer3date").value  
    let mustardfarmer3address = document.getElementById("mustardfarmer3address").value
	let mustardfarmer3 = document.getElementById("mustardfarmer3").value  
    let mustardfarmer3mobile = document.getElementById("mustardfarmer3mobile").value  
    let mustardfarmer3comment = document.getElementById("mustardfarmer3comment").value 
 
	let mustardfarmer4variety = document.getElementById("mustardfarmer4variety").value
	let mustardfarmer4nid = document.getElementById("mustardfarmer4nid").value  
    let mustardfarmer4date = document.getElementById("mustardfarmer4date").value  
    let mustardfarmer4address = document.getElementById("mustardfarmer4address").value
	let mustardfarmer4 = document.getElementById("mustardfarmer4").value  
    let mustardfarmer4mobile = document.getElementById("mustardfarmer4mobile").value  
    let mustardfarmer4comment = document.getElementById("mustardfarmer4comment").value 
 
	let mustardfarmer5variety = document.getElementById("mustardfarmer5variety").value
	let mustardfarmer5nid = document.getElementById("mustardfarmer5nid").value  
    let mustardfarmer5date = document.getElementById("mustardfarmer5date").value  
    let mustardfarmer5address = document.getElementById("mustardfarmer5address").value
	let mustardfarmer5 = document.getElementById("mustardfarmer5").value  
    let mustardfarmer5mobile = document.getElementById("mustardfarmer5mobile").value  
    let mustardfarmer5comment = document.getElementById("mustardfarmer5comment").value 
 
	let mustardfarmer6variety = document.getElementById("mustardfarmer6variety").value
	let mustardfarmer6nid = document.getElementById("mustardfarmer6nid").value  
    let mustardfarmer6date = document.getElementById("mustardfarmer6date").value  
    let mustardfarmer6address = document.getElementById("mustardfarmer6address").value
	let mustardfarmer6 = document.getElementById("mustardfarmer6").value  
    let mustardfarmer6mobile = document.getElementById("mustardfarmer6mobile").value  
    let mustardfarmer6comment = document.getElementById("mustardfarmer6comment").value 
 
	let borofarmer1variety = document.getElementById("borofarmer1variety").value
	let borofarmer1nid = document.getElementById("borofarmer1nid").value  
    let borofarmer1date = document.getElementById("borofarmer1date").value  
    let borofarmer1address = document.getElementById("borofarmer1address").value
	let borofarmer1 = document.getElementById("borofarmer1").value  
    let borofarmer1mobile = document.getElementById("borofarmer1mobile").value  
    let borofarmer1comment = document.getElementById("borofarmer1comment").value 
    
	let borofarmer2variety = document.getElementById("borofarmer2variety").value
	let borofarmer2nid = document.getElementById("borofarmer2nid").value  
    let borofarmer2date = document.getElementById("borofarmer2date").value  
    let borofarmer2address = document.getElementById("borofarmer2address").value
	let borofarmer2 = document.getElementById("borofarmer2").value  
    let borofarmer2mobile = document.getElementById("borofarmer2mobile").value  
    let borofarmer2comment = document.getElementById("borofarmer2comment").value 
 
	let borofarmer3variety = document.getElementById("borofarmer3variety").value
	let borofarmer3nid = document.getElementById("borofarmer3nid").value  
    let borofarmer3date = document.getElementById("borofarmer3date").value  
    let borofarmer3address = document.getElementById("borofarmer3address").value
	let borofarmer3 = document.getElementById("borofarmer3").value  
    let borofarmer3mobile = document.getElementById("borofarmer3mobile").value  
    let borofarmer3comment = document.getElementById("borofarmer3comment").value 
 
	let borofarmer4variety = document.getElementById("borofarmer4variety").value
	let borofarmer4nid = document.getElementById("borofarmer4nid").value  
    let borofarmer4date = document.getElementById("borofarmer4date").value  
    let borofarmer4address = document.getElementById("borofarmer4address").value
	let borofarmer4 = document.getElementById("borofarmer4").value  
    let borofarmer4mobile = document.getElementById("borofarmer4mobile").value  
    let borofarmer4comment = document.getElementById("borofarmer4comment").value 
 
	let borofarmer5variety = document.getElementById("borofarmer5variety").value
	let borofarmer5nid = document.getElementById("borofarmer5nid").value  
    let borofarmer5date = document.getElementById("borofarmer5date").value  
    let borofarmer5address = document.getElementById("borofarmer5address").value
	let borofarmer5 = document.getElementById("borofarmer5").value  
    let borofarmer5mobile = document.getElementById("borofarmer5mobile").value  
    let borofarmer5comment = document.getElementById("borofarmer5comment").value 
 
	let borofarmer6variety = document.getElementById("borofarmer6variety").value
	let borofarmer6nid = document.getElementById("borofarmer6nid").value  
    let borofarmer6date = document.getElementById("borofarmer6date").value  
    let borofarmer6address = document.getElementById("borofarmer6address").value
	let borofarmer6 = document.getElementById("borofarmer6").value  
    let borofarmer6mobile = document.getElementById("borofarmer6mobile").value  
    let borofarmer6comment = document.getElementById("borofarmer6comment").value 
 
    let amanfarmer1variety = document.getElementById("amanfarmer1variety").value
	let amanfarmer1nid = document.getElementById("amanfarmer1nid").value  
    let amanfarmer1date = document.getElementById("amanfarmer1date").value  
    let amanfarmer1address = document.getElementById("amanfarmer1address").value
	let amanfarmer1 = document.getElementById("amanfarmer1").value  
    let amanfarmer1mobile = document.getElementById("amanfarmer1mobile").value  
    let amanfarmer1comment = document.getElementById("amanfarmer1comment").value 
    
	let amanfarmer2variety = document.getElementById("amanfarmer2variety").value
	let amanfarmer2nid = document.getElementById("amanfarmer2nid").value  
    let amanfarmer2date = document.getElementById("amanfarmer2date").value  
    let amanfarmer2address = document.getElementById("amanfarmer2address").value
	let amanfarmer2 = document.getElementById("amanfarmer2").value  
    let amanfarmer2mobile = document.getElementById("amanfarmer2mobile").value  
    let amanfarmer2comment = document.getElementById("amanfarmer2comment").value 
 
	let amanfarmer3variety = document.getElementById("amanfarmer3variety").value
	let amanfarmer3nid = document.getElementById("amanfarmer3nid").value  
    let amanfarmer3date = document.getElementById("amanfarmer3date").value  
    let amanfarmer3address = document.getElementById("amanfarmer3address").value
	let amanfarmer3 = document.getElementById("amanfarmer3").value  
    let amanfarmer3mobile = document.getElementById("amanfarmer3mobile").value  
    let amanfarmer3comment = document.getElementById("amanfarmer3comment").value 
 
	let amanfarmer4variety = document.getElementById("amanfarmer4variety").value
	let amanfarmer4nid = document.getElementById("amanfarmer4nid").value  
    let amanfarmer4date = document.getElementById("amanfarmer4date").value  
    let amanfarmer4address = document.getElementById("amanfarmer4address").value
	let amanfarmer4 = document.getElementById("amanfarmer4").value  
    let amanfarmer4mobile = document.getElementById("amanfarmer4mobile").value  
    let amanfarmer4comment = document.getElementById("amanfarmer4comment").value 
 
	let amanfarmer5variety = document.getElementById("amanfarmer5variety").value
	let amanfarmer5nid = document.getElementById("amanfarmer5nid").value  
    let amanfarmer5date = document.getElementById("amanfarmer5date").value  
    let amanfarmer5address = document.getElementById("amanfarmer5address").value
	let amanfarmer5 = document.getElementById("amanfarmer5").value  
    let amanfarmer5mobile = document.getElementById("amanfarmer5mobile").value  
    let amanfarmer5comment = document.getElementById("amanfarmer5comment").value 
 
	let amanfarmer6variety = document.getElementById("amanfarmer6variety").value
	let amanfarmer6nid = document.getElementById("amanfarmer6nid").value  
    let amanfarmer6date = document.getElementById("amanfarmer6date").value  
    let amanfarmer6address = document.getElementById("amanfarmer6address").value
	let amanfarmer6 = document.getElementById("amanfarmer6").value  
    let amanfarmer6mobile = document.getElementById("amanfarmer6mobile").value  
    let amanfarmer6comment = document.getElementById("amanfarmer6comment").value 
 
 
 
    var blocknameFormate = /^([A-Za-z.\s_-]).{5,}$/; 
    var checkblocknameValid = blockname.match(blocknameFormate);
    if(blockname == null){
        return checkblockname();
    }else if(lastupdate === ""){
        return checklastupdate();
    }else if(saaoname === ""){
        return checksaaoname();
    }else if(saaophone === ""){
        return checksaaophone();
    }else if(maizefarmer1variety === ""){
        return checkmaizefarmer1variety();
    }else if(maizefarmer1nid === ""){
        return checkmaizefarmer1nid();
    }else if(maizefarmer1date === ""){
        return checkmaizefarmer1date();
    }else if(maizefarmer1address === ""){
        return checkmaizefarmer1address();
    }else if(maizefarmer1 === ""){
        return checkmaizefarmer1();
    }else if(maizefarmer1mobile === ""){
        return checkmaizefarmer1mobile();
    }else if(maizefarmer1comment === ""){
        return checkmaizefarmer1comment();
    }else if(maizefarmer2variety === ""){
        return checkmaizefarmer2variety();
    }else if(maizefarmer2nid === ""){
        return checkmaizefarmer2nid();
    }else if(maizefarmer2date === ""){
        return checkmaizefarmer2date();
    }else if(maizefarmer2address === ""){
        return checkmaizefarmer2address();
    }else if(maizefarmer2 === ""){
        return checkmaizefarmer2();
    }else if(maizefarmer2mobile === ""){
        return checkmaizefarmer2mobile();
    }else if(maizefarmer2comment === ""){
        return checkmaizefarmer2comment();
    }else if(maizefarmer3variety === ""){
        return checkmaizefarmer3variety();
    }else if(maizefarmer3nid === ""){
        return checkmaizefarmer3nid();
    }else if(maizefarmer3date === ""){
        return checkmaizefarmer3date();
    }else if(maizefarmer3address === ""){
        return checkmaizefarmer3address();
    }else if(maizefarmer3 === ""){
        return checkmaizefarmer3();
    }else if(maizefarmer3mobile === ""){
        return checkmaizefarmer3mobile();
    }else if(maizefarmer3comment === ""){
        return checkmaizefarmer3comment();
    }else if(maizefarmer4variety === ""){
        return checkmaizefarmer4variety();
    }else if(maizefarmer4nid === ""){
        return checkmaizefarmer4nid();
    }else if(maizefarmer4date === ""){
        return checkmaizefarmer4date();
    }else if(maizefarmer4address === ""){
        return checkmaizefarmer4address();
    }else if(maizefarmer4 === ""){
        return checkmaizefarmer4();
    }else if(maizefarmer4mobile === ""){
        return checkmaizefarmer4mobile();
    }else if(maizefarmer4comment === ""){
        return checkmaizefarmer4comment();
    }else if(maizefarmer5variety === ""){
        return checkmaizefarmer5variety();
    }else if(maizefarmer5nid === ""){
        return checkmaizefarmer5nid();
    }else if(maizefarmer5date === ""){
        return checkmaizefarmer5date();
    }else if(maizefarmer5address === ""){
        return checkmaizefarmer5address();
    }else if(maizefarmer5 === ""){
        return checkmaizefarmer5();
    }else if(maizefarmer5mobile === ""){
        return checkmaizefarmer5mobile();
    }else if(maizefarmer5comment === ""){
        return checkmaizefarmer5comment();
    }else if(maizefarmer6variety === ""){
        return checkmaizefarmer6variety();
    }else if(maizefarmer6nid === ""){
        return checkmaizefarmer6nid();
    }else if(maizefarmer6date === ""){
        return checkmaizefarmer6date();
    }else if(maizefarmer6address === ""){
        return checkmaizefarmer6address();
    }else if(maizefarmer6 === ""){
        return checkmaizefarmer6();
    }else if(maizefarmer6mobile === ""){
        return checkmaizefarmer6mobile();
    }else if(maizefarmer6comment === ""){
        return checkmaizefarmer6comment();
    }else if(mustardfarmer1variety === ""){
        return checkmustardfarmer1variety();
    }else if(mustardfarmer1nid === ""){
        return checkmustardfarmer1nid();
    }else if(mustardfarmer1date === ""){
        return checkmustardfarmer1date();
    }else if(mustardfarmer1address === ""){
        return checkmustardfarmer1address();
    }else if(mustardfarmer1 === ""){
        return checkmustardfarmer1();
    }else if(mustardfarmer1mobile === ""){
        return checkmustardfarmer1mobile();
    }else if(mustardfarmer1comment === ""){
        return checkmustardfarmer1comment();
    }else if(mustardfarmer2variety === ""){
        return checkmustardfarmer2variety();
    }else if(mustardfarmer2nid === ""){
        return checkmustardfarmer2nid();
    }else if(mustardfarmer2date === ""){
        return checkmustardfarmer2date();
    }else if(mustardfarmer2address === ""){
        return checkmustardfarmer2address();
    }else if(mustardfarmer2 === ""){
        return checkmustardfarmer2();
    }else if(mustardfarmer2mobile === ""){
        return checkmustardfarmer2mobile();
    }else if(mustardfarmer2comment === ""){
        return checkmustardfarmer2comment();
    }else if(mustardfarmer3variety === ""){
        return checkmustardfarmer3variety();
    }else if(mustardfarmer3nid === ""){
        return checkmustardfarmer3nid();
    }else if(mustardfarmer3date === ""){
        return checkmustardfarmer3date();
    }else if(mustardfarmer3address === ""){
        return checkmustardfarmer3address();
    }else if(mustardfarmer3 === ""){
        return checkmustardfarmer3();
    }else if(mustardfarmer3mobile === ""){
        return checkmustardfarmer3mobile();
    }else if(mustardfarmer3comment === ""){
        return checkmustardfarmer3comment();
    }else if(mustardfarmer4variety === ""){
        return checkmustardfarmer4variety();
    }else if(mustardfarmer4nid === ""){
        return checkmustardfarmer4nid();
    }else if(mustardfarmer4date === ""){
        return checkmustardfarmer4date();
    }else if(mustardfarmer4address === ""){
        return checkmustardfarmer4address();
    }else if(mustardfarmer4 === ""){
        return checkmustardfarmer4();
    }else if(mustardfarmer4mobile === ""){
        return checkmustardfarmer4mobile();
    }else if(mustardfarmer4comment === ""){
        return checkmustardfarmer4comment();
    }else if(mustardfarmer5variety === ""){
        return checkmustardfarmer5variety();
    }else if(mustardfarmer5nid === ""){
        return checkmustardfarmer5nid();
    }else if(mustardfarmer5date === ""){
        return checkmustardfarmer5date();
    }else if(mustardfarmer5address === ""){
        return checkmustardfarmer5address();
    }else if(mustardfarmer5 === ""){
        return checkmustardfarmer5();
    }else if(mustardfarmer5mobile === ""){
        return checkmustardfarmer5mobile();
    }else if(mustardfarmer5comment === ""){
        return checkmustardfarmer5comment();
    }else if(mustardfarmer6variety === ""){
        return checkmustardfarmer6variety();
    }else if(mustardfarmer6nid === ""){
        return checkmustardfarmer6nid();
    }else if(mustardfarmer6date === ""){
        return checkmustardfarmer6date();
    }else if(mustardfarmer6address === ""){
        return checkmustardfarmer6address();
    }else if(mustardfarmer6 === ""){
        return checkmustardfarmer6();
    }else if(mustardfarmer6mobile === ""){
        return checkmustardfarmer6mobile();
    }else if(mustardfarmer6comment === ""){
        return checkmustardfarmer6comment();
    }else if(borofarmer1variety === ""){
        return checkborofarmer1variety();
    }else if(borofarmer1nid === ""){
        return checkborofarmer1nid();
    }else if(borofarmer1date === ""){
        return checkborofarmer1date();
    }else if(borofarmer1address === ""){
        return checkborofarmer1address();
    }else if(borofarmer1 === ""){
        return checkborofarmer1();
    }else if(borofarmer1mobile === ""){
        return checkborofarmer1mobile();
    }else if(borofarmer1comment === ""){
        return checkborofarmer1comment();
    }else if(borofarmer2variety === ""){
        return checkborofarmer2variety();
    }else if(borofarmer2nid === ""){
        return checkborofarmer2nid();
    }else if(borofarmer2date === ""){
        return checkborofarmer2date();
    }else if(borofarmer2address === ""){
        return checkborofarmer2address();
    }else if(borofarmer2 === ""){
        return checkborofarmer2();
    }else if(borofarmer2mobile === ""){
        return checkborofarmer2mobile();
    }else if(borofarmer2comment === ""){
        return checkborofarmer2comment();
    }else if(borofarmer3variety === ""){
        return checkborofarmer3variety();
    }else if(borofarmer3nid === ""){
        return checkborofarmer3nid();
    }else if(borofarmer3date === ""){
        return checkborofarmer3date();
    }else if(borofarmer3address === ""){
        return checkborofarmer3address();
    }else if(borofarmer3 === ""){
        return checkborofarmer3();
    }else if(borofarmer3mobile === ""){
        return checkborofarmer3mobile();
    }else if(borofarmer3comment === ""){
        return checkborofarmer3comment();
    }else if(borofarmer4variety === ""){
        return checkborofarmer4variety();
    }else if(borofarmer4nid === ""){
        return checkborofarmer4nid();
    }else if(borofarmer4date === ""){
        return checkborofarmer4date();
    }else if(borofarmer4address === ""){
        return checkborofarmer4address();
    }else if(borofarmer4 === ""){
        return checkborofarmer4();
    }else if(borofarmer4mobile === ""){
        return checkborofarmer4mobile();
    }else if(borofarmer4comment === ""){
        return checkborofarmer4comment();
    }else if(borofarmer5variety === ""){
        return checkborofarmer5variety();
    }else if(borofarmer5nid === ""){
        return checkborofarmer5nid();
    }else if(borofarmer5date === ""){
        return checkborofarmer5date();
    }else if(borofarmer5address === ""){
        return checkborofarmer5address();
    }else if(borofarmer5 === ""){
        return checkborofarmer5();
    }else if(borofarmer5mobile === ""){
        return checkborofarmer5mobile();
    }else if(borofarmer5comment === ""){
        return checkborofarmer5comment();
    }else if(borofarmer6variety === ""){
        return checkborofarmer6variety();
    }else if(borofarmer6nid === ""){
        return checkborofarmer6nid();
    }else if(borofarmer6date === ""){
        return checkborofarmer6date();
    }else if(borofarmer6address === ""){
        return checkborofarmer6address();
    }else if(borofarmer6 === ""){
        return checkborofarmer6();
    }else if(borofarmer6mobile === ""){
        return checkborofarmer6mobile();
    }else if(borofarmer6comment === ""){
        return checkborofarmer6comment();
    }else if(amanfarmer1variety === ""){
        return checkamanfarmer1variety();
    }else if(amanfarmer1nid === ""){
        return checkamanfarmer1nid();
    }else if(amanfarmer1date === ""){
        return checkamanfarmer1date();
    }else if(amanfarmer1address === ""){
        return checkamanfarmer1address();
    }else if(amanfarmer1 === ""){
        return checkamanfarmer1();
    }else if(amanfarmer1mobile === ""){
        return checkamanfarmer1mobile();
    }else if(amanfarmer1comment === ""){
        return checkamanfarmer1comment();
    }else if(amanfarmer2variety === ""){
        return checkamanfarmer2variety();
    }else if(amanfarmer2nid === ""){
        return checkamanfarmer2nid();
    }else if(amanfarmer2date === ""){
        return checkamanfarmer2date();
    }else if(amanfarmer2address === ""){
        return checkamanfarmer2address();
    }else if(amanfarmer2 === ""){
        return checkamanfarmer2();
    }else if(amanfarmer2mobile === ""){
        return checkamanfarmer2mobile();
    }else if(amanfarmer2comment === ""){
        return checkamanfarmer2comment();
    }else if(amanfarmer3variety === ""){
        return checkamanfarmer3variety();
    }else if(amanfarmer3nid === ""){
        return checkamanfarmer3nid();
    }else if(amanfarmer3date === ""){
        return checkamanfarmer3date();
    }else if(amanfarmer3address === ""){
        return checkamanfarmer3address();
    }else if(amanfarmer3 === ""){
        return checkamanfarmer3();
    }else if(amanfarmer3mobile === ""){
        return checkamanfarmer3mobile();
    }else if(amanfarmer3comment === ""){
        return checkamanfarmer3comment();
    }else if(amanfarmer4variety === ""){
        return checkamanfarmer4variety();
    }else if(amanfarmer4nid === ""){
        return checkamanfarmer4nid();
    }else if(amanfarmer4date === ""){
        return checkamanfarmer4date();
    }else if(amanfarmer4address === ""){
        return checkamanfarmer4address();
    }else if(amanfarmer4 === ""){
        return checkamanfarmer4();
    }else if(amanfarmer4mobile === ""){
        return checkamanfarmer4mobile();
    }else if(amanfarmer4comment === ""){
        return checkamanfarmer4comment();
    }else if(amanfarmer5variety === ""){
        return checkamanfarmer5variety();
    }else if(amanfarmer5nid === ""){
        return checkamanfarmer5nid();
    }else if(amanfarmer5date === ""){
        return checkamanfarmer5date();
    }else if(amanfarmer5address === ""){
        return checkamanfarmer5address();
    }else if(amanfarmer5 === ""){
        return checkamanfarmer5();
    }else if(amanfarmer5mobile === ""){
        return checkamanfarmer5mobile();
    }else if(amanfarmer5comment === ""){
        return checkamanfarmer5comment();
    }else if(amanfarmer6variety === ""){
        return checkamanfarmer6variety();
    }else if(amanfarmer6nid === ""){
        return checkamanfarmer6nid();
    }else if(amanfarmer6date === ""){
        return checkamanfarmer6date();
    }else if(amanfarmer6address === ""){
        return checkamanfarmer6address();
    }else if(amanfarmer6 === ""){
        return checkamanfarmer6();
    }else if(amanfarmer6mobile === ""){
        return checkamanfarmer6mobile();
    }else if(amanfarmer6comment === ""){
        return checkamanfarmer6comment();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('projectdemo');
        var userData = {
            blockname: blockname,
            union: union,
            saaoname: saaoname,
            saaophone: saaophone,
            lastupdate: lastupdate,
			
			
            maizefarmer1variety: maizefarmer1variety,
			maizefarmer1nid: maizefarmer1nid,
            maizefarmer1date: maizefarmer1date,
            maizefarmer1address: maizefarmer1address,
			maizefarmer1: maizefarmer1,
            maizefarmer1mobile: maizefarmer1mobile,
            maizefarmer1comment: maizefarmer1comment,
			maizefarmer2variety: maizefarmer2variety,
			maizefarmer2nid: maizefarmer2nid,
            maizefarmer2date: maizefarmer2date,
            maizefarmer2address: maizefarmer2address,
			maizefarmer2: maizefarmer2,
            maizefarmer2mobile: maizefarmer2mobile,
            maizefarmer2comment: maizefarmer2comment,
			maizefarmer3variety: maizefarmer3variety,
			maizefarmer3nid: maizefarmer3nid,
            maizefarmer3date: maizefarmer3date,
            maizefarmer3address: maizefarmer3address,
			maizefarmer3: maizefarmer3,
            maizefarmer3mobile: maizefarmer3mobile,
            maizefarmer3comment: maizefarmer3comment,
			maizefarmer4variety: maizefarmer4variety,
			maizefarmer4nid: maizefarmer4nid,
            maizefarmer4date: maizefarmer4date,
            maizefarmer4address: maizefarmer4address,
			maizefarmer4: maizefarmer4,
            maizefarmer4mobile: maizefarmer4mobile,
            maizefarmer4comment: maizefarmer4comment,
			maizefarmer5variety: maizefarmer5variety,
			maizefarmer5nid: maizefarmer5nid,
            maizefarmer5date: maizefarmer5date,
            maizefarmer5address: maizefarmer5address,
			maizefarmer5: maizefarmer5,
            maizefarmer5mobile: maizefarmer5mobile,
            maizefarmer5comment: maizefarmer5comment,
			maizefarmer6variety: maizefarmer6variety,
			maizefarmer6nid: maizefarmer6nid,
            maizefarmer6date: maizefarmer6date,
            maizefarmer6address: maizefarmer6address,
			maizefarmer6: maizefarmer6,
            maizefarmer6mobile: maizefarmer6mobile,
            maizefarmer6comment: maizefarmer6comment,
            mustardfarmer1variety: mustardfarmer1variety,
			mustardfarmer1nid: mustardfarmer1nid,
            mustardfarmer1date: mustardfarmer1date,
            mustardfarmer1address: mustardfarmer1address,
			mustardfarmer1: mustardfarmer1,
            mustardfarmer1mobile: mustardfarmer1mobile,
            mustardfarmer1comment: mustardfarmer1comment,
			mustardfarmer2variety: mustardfarmer2variety,
			mustardfarmer2nid: mustardfarmer2nid,
            mustardfarmer2date: mustardfarmer2date,
            mustardfarmer2address: mustardfarmer2address,
			mustardfarmer2: mustardfarmer2,
            mustardfarmer2mobile: mustardfarmer2mobile,
            mustardfarmer2comment: mustardfarmer2comment,
			mustardfarmer3variety: mustardfarmer3variety,
			mustardfarmer3nid: mustardfarmer3nid,
            mustardfarmer3date: mustardfarmer3date,
            mustardfarmer3address: mustardfarmer3address,
			mustardfarmer3: mustardfarmer3,
            mustardfarmer3mobile: mustardfarmer3mobile,
            mustardfarmer3comment: mustardfarmer3comment,			
			mustardfarmer4variety: mustardfarmer4variety,
			mustardfarmer4nid: mustardfarmer4nid,
            mustardfarmer4date: mustardfarmer4date,
            mustardfarmer4address: mustardfarmer4address,
			mustardfarmer4: mustardfarmer4,
            mustardfarmer4mobile: mustardfarmer4mobile,
            mustardfarmer4comment: mustardfarmer4comment,
			mustardfarmer5variety: mustardfarmer5variety,
			mustardfarmer5nid: mustardfarmer5nid,
            mustardfarmer5date: mustardfarmer5date,
            mustardfarmer5address: mustardfarmer5address,
			mustardfarmer5: mustardfarmer5,
            mustardfarmer5mobile: mustardfarmer5mobile,
            mustardfarmer5comment: mustardfarmer5comment,
			mustardfarmer6variety: mustardfarmer6variety,
			mustardfarmer6nid: mustardfarmer6nid,
            mustardfarmer6date: mustardfarmer6date,
            mustardfarmer6address: mustardfarmer6address,
			mustardfarmer6: mustardfarmer6,
            mustardfarmer6mobile: mustardfarmer6mobile,
            mustardfarmer6comment: mustardfarmer6comment,
            borofarmer1variety: borofarmer1variety,
			borofarmer1nid: borofarmer1nid,
            borofarmer1date: borofarmer1date,
            borofarmer1address: borofarmer1address,
			borofarmer1: borofarmer1,
            borofarmer1mobile: borofarmer1mobile,
            borofarmer1comment: borofarmer1comment,
			borofarmer2variety: borofarmer2variety,
			borofarmer2nid: borofarmer2nid,
            borofarmer2date: borofarmer2date,
            borofarmer2address: borofarmer2address,
			borofarmer2: borofarmer2,
            borofarmer2mobile: borofarmer2mobile,
            borofarmer2comment: borofarmer2comment,
			borofarmer3variety: borofarmer3variety,
			borofarmer3nid: borofarmer3nid,
            borofarmer3date: borofarmer3date,
            borofarmer3address: borofarmer3address,
			borofarmer3: borofarmer3,
            borofarmer3mobile: borofarmer3mobile,
            borofarmer3comment: borofarmer3comment,
			borofarmer4variety: borofarmer4variety,
			borofarmer4nid: borofarmer4nid,
            borofarmer4date: borofarmer4date,
            borofarmer4address: borofarmer4address,
			borofarmer4: borofarmer4,
            borofarmer4mobile: borofarmer4mobile,
            borofarmer4comment: borofarmer4comment,
			borofarmer5variety: borofarmer5variety,
			borofarmer5nid: borofarmer5nid,
            borofarmer5date: borofarmer5date,
            borofarmer5address: borofarmer5address,
			borofarmer5: borofarmer5,
            borofarmer5mobile: borofarmer5mobile,
            borofarmer5comment: borofarmer5comment,
			borofarmer6variety: borofarmer6variety,
			borofarmer6nid: borofarmer6nid,
            borofarmer6date: borofarmer6date,
            borofarmer6address: borofarmer6address,
			borofarmer6: borofarmer6,
            borofarmer6mobile: borofarmer6mobile,
            borofarmer6comment: borofarmer6comment,
            amanfarmer1variety: amanfarmer1variety,
			amanfarmer1nid: amanfarmer1nid,
            amanfarmer1date: amanfarmer1date,
            amanfarmer1address: amanfarmer1address,
			amanfarmer1: amanfarmer1,
            amanfarmer1mobile: amanfarmer1mobile,
            amanfarmer1comment: amanfarmer1comment,
			amanfarmer2variety: amanfarmer2variety,
			amanfarmer2nid: amanfarmer2nid,
            amanfarmer2date: amanfarmer2date,
            amanfarmer2address: amanfarmer2address,
			amanfarmer2: amanfarmer2,
            amanfarmer2mobile: amanfarmer2mobile,
            amanfarmer2comment: amanfarmer2comment,
			amanfarmer3variety: amanfarmer3variety,
			amanfarmer3nid: amanfarmer3nid,
            amanfarmer3date: amanfarmer3date,
            amanfarmer3address: amanfarmer3address,
			amanfarmer3: amanfarmer3,
            amanfarmer3mobile: amanfarmer3mobile,
            amanfarmer3comment: amanfarmer3comment,
			amanfarmer4variety: amanfarmer4variety,
			amanfarmer4nid: amanfarmer4nid,
            amanfarmer4date: amanfarmer4date,
            amanfarmer4address: amanfarmer4address,
			amanfarmer4: amanfarmer4,
            amanfarmer4mobile: amanfarmer4mobile,
            amanfarmer4comment: amanfarmer4comment,
			amanfarmer5variety: amanfarmer5variety,
			amanfarmer5nid: amanfarmer5nid,
            amanfarmer5date: amanfarmer5date,
            amanfarmer5address: amanfarmer5address,
			amanfarmer5: amanfarmer5,
            amanfarmer5mobile: amanfarmer5mobile,
            amanfarmer5comment: amanfarmer5comment,
			amanfarmer6variety: amanfarmer6variety,
			amanfarmer6nid: amanfarmer6nid,
            amanfarmer6date: amanfarmer6date,
            amanfarmer6address: amanfarmer6address,
			amanfarmer6: amanfarmer6,
            amanfarmer6mobile: amanfarmer6mobile,
            amanfarmer6comment: amanfarmer6comment
			
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
