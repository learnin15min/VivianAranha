function myFunction() {
  var webURL = "https://www.worldometers.info/coronavirus/";
  var response = UrlFetchApp.fetch(webURL);
  var $ = Cheerio.load(response.getContentText()); 
  var itemsOfInterest = $('.maincounter-number').first().text().trim();
  

  var emailBody = "Number of Infected: <b>" + itemsOfInterest + "</b>";
  
  MailApp.sendEmail({
    to: "mr.vivianaranha@gmail.com",
    subject: "Current CoronaVirun Numbers",
    htmlBody: emailBody
  });

}
