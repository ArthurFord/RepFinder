function getInfo(form) {

var baseUrl = "http://www.opensecrets.org/api/";
var method = "getLegislators";
var apiKey = "eb97c3554ac4ee2b8c3f88f3522de00d";
var output = "json";
var id = form.stateCode.value;
var finalUrl = baseUrl + "?method=" + method + "&id=" + id + "&apikey=" + apiKey + "&output=" + output;

var xhttp = new XMLHttpRequest;

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 & this.status == 200) {
    var obj = JSON.parse(this.responseText);


var myDiv = document.getElementById("answer");
answer.innerHTML = "";
var myTable = document.createElement("table");


var tableHead = document.createElement("thead");
var headerCell1 = document.createElement("th");
var headerCell2 = document.createElement("th");
var headerCell3 = document.createElement("th");
var headerCell4 = document.createElement("th");
var headerCell5 = document.createElement("th");

headerCell1.innerHTML = "Name";
headerCell2.innerHTML = "Party";
headerCell3.innerHTML = "District";
headerCell4.innerHTML = "Phone Number";
headerCell5.innerHTML = "Twitter";
tableHead.appendChild(headerCell1);
tableHead.appendChild(headerCell2);
tableHead.appendChild(headerCell3);
tableHead.appendChild(headerCell4);
tableHead.appendChild(headerCell5);
myTable.appendChild(tableHead);

var tableBody = document.createElement("tbody");
    for (var i = 0; i < obj.response.legislator.length; i++) {
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      td.appendChild(document.createTextNode(obj.response.legislator[i]["@attributes"].firstlast));
      var td2 = document.createElement("td");
      td2.appendChild(document.createTextNode(obj.response.legislator[i]["@attributes"].party));
      var td3 = document.createElement("td");
      td3.appendChild(document.createTextNode(obj.response.legislator[i]["@attributes"].office));
      var td4 = document.createElement("td");
      td4.appendChild(document.createTextNode(obj.response.legislator[i]["@attributes"].phone));

      var link = document.createElement("a");
      link.textContent = obj.response.legislator[i]["@attributes"].twitter_id;
      link.href = "https://www.twitter.com/" + obj.response.legislator[i]["@attributes"].twitter_id
      link.target = "_blank";
      var td5 = document.createElement("td");
      td5.appendChild(link);
      tr.appendChild(td);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tableBody.appendChild(tr);
    }

    myTable.appendChild(tableBody);
    myDiv.appendChild(myTable);
  }

}


xhttp.open("get", finalUrl, true);
xhttp.send();
}
