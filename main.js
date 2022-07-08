
function addRowHandlers() {
  test = document.getElementById("mytable");
  var rows = test.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    var currentRow = test.rows[i];
    var createClickHandler = function (row) {
      return function () {
        var cell = row.getElementsByTagName("td")[0];
        var id = cell.innerHTML;
        document.location.href = "/2ndpage.php?name="+id;
        console.log(id);
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }
}
function transaction(){
  var value =document.getElementById("input-amount").value;
   // alert("Enter Valid Amount!");
   var select = document.getElementById('language');
var val = select.options[select.selectedIndex].value;
if(val=='none'){
  alert("Select Valid Client");
}
 else  if(value=="" || value==0)
   alert("Enter a Valid Amount.");
   else
    document.forms["client_name"].submit();
}

