//Constructeurs pour ensuite stocker la recette créer dans le localstorage
function Recette(nom = ""){
    this.nom = nom
}


//recuperer les valeurs dans le mockAPI
fetch('https://65859420022766bcb8c8ecd1.mockapi.io/Recettes')
    .then(function (response){
        return response.json();
    })
    .then(function (data){

        for(let i of data){
            $('#Ajouter_Recette').append(`    <div class="card w75 " >
            <div class="card-body">
                <h5 class="card-title">${i.nom}</h5>
                <p class="card-text">Ingrédiants: </p>
                <ul>
                    <li><span>${i.qte1}</span> ${i.Ingrediant1}</li>
                    <li><span>${i.qte2}</span> ${i.Ingrediant2}</li>
                    <li><span>${i.qte3}</span> ${i.Ingrediant3}</li>
                    <li><span>${i.qte4}</span> ${i.Ingrediant4}</li>
                    <li><span>${i.qte5}</span> ${i.Ingrediant5}</li>

                </ul>


                <p class="card-text">${$('#floatingTextarea2').val()}</p>
                <button type="button" onclick="Supprimer(${i.id})" class="btn btn-danger" style="float: right">Supprimer</button>
            </div>
        </div>`);


        }
    })



async function CreerRecette(){
    const Recette_ = new Recette($('#Ingrediant1').val())

    fetch('https://65859420022766bcb8c8ecd1.mockapi.io/Recettes', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body:
            JSON.stringify({nom: $('#nom').val(), Ingrediant1: $('#Ingrediant1').val() ,Ingrediant2: $('#Ingrediant2').val(),
                Ingrediant3 : $('#Ingrediant3').val(), Ingrediant4 : $('#Ingrediant4').val(), Ingrediant5 : $('#Ingrediant5').val(),
                qte1: $('#quantite1').val(),qte2: $('#quantite2').val(),qte3: $('#quantite3').val(),qte4: $('#quantite4').val(),
                qte5: $('#quantite5').val()
            })
    }).then(res => res.json())
        .then(res => window.location.reload());
}

function Supprimer(id){
    confirm("Vouler vous Supprimer cette recette?");
    fetch('https://65859420022766bcb8c8ecd1.mockapi.io/Recettes/' + id, {
        method: 'DELETE',
    })
        .then(res => res.text()) // or res.json()
        .then(res =>  window.location.reload())
}











//fonctions à lancer lors de l'ajout d'une nouvelle recette
$( ".form" ).on( "submit", function( event ) {
    event.preventDefault();
    CreerRecette()
    console.log($('#floatingTextarea2').text())




});


//validations des données

$('#nom').on('blur', function (){
    /*trouve le paragraphe de validation â partir du id du champs */
    const  $validation = $(`#${$(this).attr('id')}_validation`);
    if($(this).is(':valid')){
        $validation.text('OK').css('color', 'green');
    }else{
        $validation.text(' Le champ doit avoir minimum 5 charactères').css('color', 'red');
    }
})







$('#Ingrediant1').on('blur', function (){
    /*trouve le paragraphe de validation â partir du id du champs */
    const  $validation = $(`#${$(this).attr('id')}_validation`);
    if($(this).is(':valid')){
        $validation.text('OK').css('color', 'green');
    }else{
        $validation.text(' Le champ doit avoir minimum 3 charactères').css('color', 'red');
    }
})

$('#quantite1').on('blur', function (){
    /*trouve le paragraphe de validation â partir du id du champs */
    const  $validation = $(`#${$(this).attr('id')}_validation`);
    if($(this).is(':valid')){
        $validation.text('OK').css('color', 'green');
    }else{
        $validation.text(' La quantite doit être positif').css('color', 'red');
    }
})

$('#Ingrediant2').on('blur', function (){
    /*trouve le paragraphe de validation â partir du id du champs */
    const  $validation = $(`#${$(this).attr('id')}_validation`);
    if($(this).is(':valid')){
        $validation.text('OK').css('color', 'green');
    }else{
        $validation.text(' Le champ doit avoir minimum 3 charactères').css('color', 'red');
    }
})

$('#quantite2').on('blur', function (){
    /*trouve le paragraphe de validation â partir du id du champs */
    const  $validation = $(`#${$(this).attr('id')}_validation`);
    if($(this).is(':valid')){
        $validation.text('OK').css('color', 'green');
    }else{
        $validation.text(' La quantite doit être positif').css('color', 'red');
    }
})








