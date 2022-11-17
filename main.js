const array = [

{
    id: "1",
    name: "Item1",
}, 
{
    id: "2",
    name: "Item2",
},
{
    id: "3",
    name: "Item3",
},
{
    id: "4",
    name: "Item4",
},
{
    id: "5",
    name: "Item5",
}

]
// console.log(array)
// create checkbox for each array item
let i = 0;
checkbox = "";
for(;array[i];) {
    checkbox += "<li><input type='checkbox' value='"+ array[i].name +"' class='check' id='"+ array[i].id  +"' ><a>"+ array[i].name +"</a> </li>";
    i++;
}
document.getElementById("check").innerHTML = checkbox;

// const array2 = [];
// const items = document.querySelectorAll("input[type='checkbox']");

// function validate(id) {
//     if (document.getElementById(id).checked) {
//         document.getElementById("output").innerHTML= "selected : " + id;
//     }     
// }
 
// find elements
$( document ).ready(function() {
//On click check all records
    var checkBoxCount = 0;
    var selected = [];

    $('input:checkbox.check').not(".disabled-check").change(function (event) {
        var target = event.target;
        
        if ($(target).is(":checked")) {
            checkBoxCount++; 
            selected.push(target.value);
        } 
        else {
            checkBoxCount--;
            selected.splice(selected.indexOf(target.value),1); 
            
        }
        if(checkBoxCount == 0) {           
            document.getElementById("output").innerHTML= "Selected : Niks geselecteerd";
        } 
        else {
            document.getElementById("output").innerHTML= "Selected : " + selected.join(" | ");
            // create url
            

            document.getElementById("url").innerHTML= "Url : https://www.detestmeneer.nl/id=" + selected.join("&");
        }
    });
});

// var array3 = ['1','2','3'];
 
// var res = array3.replace(1, '5');
// document.getElementById("arr").innerHTML= res;   
// console.log(array3.replace('1', '5'))
