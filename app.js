'use strict';

/*  
    the first entry is the id of each checkboxes, the followings are the checkboxes which should be disabled 
    if this checkbox is checked 
*/

var plage = [['A1', 'allCheckbox'], 
             ['A2', 'allCheckbox'], 
             ['A3', 'A4'], 
             ['A4', 'A3'], 
             ['A5', 'A6', 'A7'], 
             ['A6', 'A5', 'A7'], 
             ['A7', 'A5', 'A6', 'A8'], 
             ['A8', 'A7']];


var inputs = document.querySelectorAll('#testForm input');
var checkboxes = document.querySelectorAll('#testForm input[type=checkbox]');


inputs.forEach(function (item) {

    item.addEventListener('click', function () {

        var checked = verifChecked();
        var itemDisabled = [];

        //On commence par tout décocher
        inputs.forEach(function (input) {
            input.disabled = false;
        });

        //If there is nothing to check, exit the function
        if (checked.length === 0) {
            return;
        }


        //For every checked items
        checked.forEach(function (idChecked) {

            // We look in the arrays
            for (var i = 0; i < plage.length; i++) {

                var plageID = plage[i][0];

                //Quand on trouve la bonne plage
                if (plageID === idChecked) {

                    //we get the ids in the array (expect the first one)
                    for (var j = 1; j < plage[i].length; j++) {
                    
                        //we push them in a new array
                        itemDisabled.push(plage[i][j]);
                        
                    }
                }
            }
        });

        //If a checkbox should disable all the others (with the keyword allCheckbox)
        if (itemDisabled.includes('allCheckbox')) {
            checkboxes.forEach(function (checkbox) {
                checkbox.disabled = true;
                checkbox.checked = false;
            });
            item.disabled = false;
            item.checked = true;

            
        } else { //Else we disable the inputs contained in the array itemDisabled
            itemDisabled.forEach(function (id) {
                var inputToDisable = document.getElementById(id);
                inputToDisable.disabled = true;
            });
        }
    });
});

//Return an array with all checked items
function verifChecked() {
    var checkedInputs = document.querySelectorAll('#testForm input:checked');
    var checkedID = [];
    checkedInputs.forEach(function (item) {
        checkedID.push(item.id);
    });
    return checkedID;
}
