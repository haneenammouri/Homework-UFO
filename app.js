//console.log(data);
var table = data;

// The following didnt work, the logic follows, but not the script i guess.  i didnt add more keys as state, country..etc because the first didnt work
// But if it had, i would have repeated the below steps for each key.
// I also have below a fraction of different routs i tried which of course didn't work

function findDate(table) {

    var tbody = d3.select("tbody");
    var td =d3.select("td");


    table.forEach(row => {
      console.log(row.city);
      d3.event.preventDefault();
      // I keep getting row.insertcell not a function!
      let  newCell= row.insertCell();
      let cityname = document.getElementById("city");
      newcity.value = row.city;
      console.log(newcity);

      cityname.enter().append(newCell);
      
      td.enter().update(cityname);
      cities = tbody.innerHTML;
      
      console.log(cities) ;
      return cities


      console.log(row.date);
      
      let  newdate= row.insertCell();
      let date = document.getElementById("date");
      newTd.value = row.date;
      console.log(newTd);

      date.enter().append(newdate);
      
      td.enter().update(date);
      date = tbody.innerHTML;
      
      console.log(date) ;
      return date;

    })};
findDate(table);

submit.on("click", function(){
var td =d3.select("td");
data.forEach((submit) => {
    Object.row(submit).forEach(row => function([key, value]){
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        return cell
    })});
submit(table);



//Trial :
// var parenttbl = document.getElementById("myrow");
// var newel = document.createElement('td');
// var elementid = document.getElementsByTagName("td").length
// newel.setAttribute('id',elementid);
// newel.innerHTML = "New Inserted"
// parenttbl.appendChild(newel);


//Trial:
// var row = document.getElementsByTagName("tr")[0];
// var x = row.insertCell(-1);
// x.innerHTML="New cell";




//These are Keys and values:
//city: "benton"
// comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
// country: "us"
// datetime: "1/1/2010"
// durationMinutes: "5 mins."
// shape: "circle"
// state: "ar"




//var newRow.append(newTd) ;
//      var newRow.append(newCell) ;
      // var td = d3.select()</tr>
     // tbody.append(newRow);
// g.append("circle").style("fill", "#ddd");
// g.append("text").text(function(d,i){return d.count});

// d3Obj.enter().append.enter() //or enterChild ()
//                     .update()
//                     .exit()


//Trial
//var dates= data.map(row => row.date)
// var comp_data= tableData.map(function(data_row){
//     return data_row.tableData;
// }); // use arrow function


//Trial
// data.map(row => row.city)
// data.sort((a, b ) =>{
//    return parseFloat(b.city)- parseFloat(a.city);
//    console.log(b)
// });



// var table = d3.select("table");
// var ttbody= d3.select("tbody");
// ttbody.forEach(function(submit) {
//     console.log(submit);
// });

// trial
// table.forEach(function (submit){
//     var row = table.append("th")
//     console.log(row);
// });


//Trial
// var td =d3.select("td");
// data.forEach((submit) => {
//     Object.row(submit).forEach(row => function([key, value]){
//         console.log(key, value);
//         // var cell = row.append("td");
//         // cell.text(value);
//     })});

// var withAppendage = tableData.filter(function(filters) { return filters.type === "withAppendage"; });
// console.log(withAppendage);


//Trial
//return render_to_response('index.html', {'dictionary': data}, context_instance=RequestContext(request)) 
