'use strict';

/*  
    the first entry is the id of each checkboxes, the followings are the checkboxes which should be disabled 
    if this checkbox is checked || La première entrée est l'id de chaque checkboxes, les suivantes sont les id des checkboxes qui seront désactivées si cette checkboxe est active.
*/

const plage = [['A1', 'allCheckbox'], 
             ['A2', 'allCheckbox'], 
             ['A3', 'A4'], 
             ['A4', 'A3'], 
             ['A5', 'A6', 'A7'], 
             ['A6', 'A5', 'A7'], 
             ['A7', 'A5', 'A6', 'A8'], 
             ['A8', 'A7']];


const inputs = document.querySelectorAll('#testForm input');
const checkboxes = document.querySelectorAll('#testForm input[type=checkbox]');


inputs.forEach(function (item) {

    item.addEventListener('click', function () {

        let checked = verifChecked();
        let itemDisabled = [];

        //On commence par tout décocher || We start with checking everything
        inputs.forEach(function (input) {
            input.disabled = false;
        });

        //If there is nothing to check, exit the function || s'il n'y a rien à cocher, ça sort de la fonction
        if (checked.length === 0) {
            return;
        }


        //For every checked items || Pour chaque items checkés
        checked.forEach(function (idChecked) {

            // We look in the arrays || On regarde dans les tableaux
            for (const i = 0; i < plage.length; i++) {

                const plageID = plage[i][0];

                //Quand on trouve la bonne plage || When you find the right one
                if (plageID === idChecked) {

                    //we get the ids in the array (expect the first one) || On trouve les ids du tableaux sauf pour le premier
                    for (const j = 1; j < plage[i].length; j++) {
                    
                        //we push them in a new array || on les push dans un nouveau tableau
                        itemDisabled.push(plage[i][j]);
                        
                    }
                }
            }
        });

        //If a checkbox should disable all the others (with the keyword allCheckbox) || Si une checkbox doit désactiver toutes les autres avec le mot-clé allCheckbox
        if (itemDisabled.includes('allCheckbox')) {
            checkboxes.forEach(function (checkbox) {
                checkbox.disabled = true;
                checkbox.checked = false;
            });
            item.disabled = false;
            item.checked = true;

            
        } else { //Else we disable the inputs contained in the array itemDisabled || ou on désactive les inputs contenus dans le tableau itemDisabled
            itemDisabled.forEach(function (id) {
                const inputToDisable = document.getElementById(id);
                inputToDisable.disabled = true;
            });
        }
    });
});

//Return an array with all checked items || Retourne un tableau avec les items checkés.
function verifChecked() {
    const checkedInputs = document.querySelectorAll('#testForm input:checked');
    const checkedID = [];
    checkedInputs.forEach(function (item) {
        checkedID.push(item.id);
    });
    return checkedID;
}
