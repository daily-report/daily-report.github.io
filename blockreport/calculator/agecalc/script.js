const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function calculateAge() {
  const datOfBirth = document.getElementById("date_of_birth").value;
  const givenDate = document.getElementById("given_date").value;


  let startDate = new Date(datOfBirth);
  let endDate = new Date(givenDate);


  let stdobYear = startDate.getFullYear();
  let stdobMonth = startDate.getMonth() + 1;
  let stdobDate = startDate.getDate();

  //console.log('${stdobYear} Year : ${stdobMonth} Months : ${stdobDate} Days : ');

  let givenYear = endDate.getFullYear();
  let givenMonth = endDate.getMonth() + 1;
  let givenDate1 = endDate.getDate();

  if (
    stdobYear > givenYear ||
    (stdobMonth > givenMonth && stdobYear === givenYear) ||
    (stdobDate > givenDate1 && stdobMonth === givenMonth && stdobYear === givenYear)
  ) {
    //alert("Must be Born!!");
    //return;
  }


}
