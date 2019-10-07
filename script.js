document.getElementById("pokeSubmit").addEventListener("click", function(event) {
    event.preventDefault()
    let rand = Math.floor(Math.random() * 200)
    if (rand === 0) {
        rand = 1
    }

    const url = "https://pokeapi.co/api/v2/pokemon/" + rand
    fetch(url, { mode: 'cors' })
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            console.log(json)
            let name = (json.name).charAt(0).toUpperCase() + (json.name).substring(1)
            let results = ''
            results += '<div style="margin-left: 25%;">'
            results += '<div style="display: flex;">'
            results += '<img src="' + json.sprites.front_shiny + '" style="height: 20%; width: 20%;">'
            results += '<div>'
            results += '<div style="font-size: 100px; color: Indigo; font-family: Papyrus, fantasy; font-weight: 700;">' + name + '</div>'
            results += '<div style="font-size: 25px; padding-left: 15px;"> Height: ' + json.height + '</div>'
            results += '<div style="font-size: 25px; padding-left: 15px;"> Weight: ' + json.weight + '</div>'
            results += '<div style="font-size: 25px; padding-left: 15px;"> XP: ' + json.base_experience + '</div>'
            results += '</div>'
            results += '</div>'
            
            results += '<div style="display: flex; padding-left: 20%;">'
            
            results += '<div>'
            results += '<h2 style="color: Indigo; font-family: Papyrus, fantasy; font-weight: 700;"> Abilities </h2>'
            results += '<ul>'
            for (let i = 0; i < json.abilities.length; i++) {
                results += '<li>' + (json.abilities[i].ability.name).charAt(0).toUpperCase() + (json.abilities[i].ability.name).substring(1) + '</li>'
            }
            results += '</ul>'
            results += '</div>'
            
            results += '<div style="padding-left: 50px;">'
            results += '<h2 style="color: Indigo; font-family: Papyrus, fantasy; font-weight: 700;"> Types </h2>'
            results += '<ul>'
            for (let i = 0; i < json.types.length; i++) {
                results += '<li>' + (json.types[i].type.name).charAt(0).toUpperCase() + (json.types[i].type.name).substring(1) + '</li>'
            }
            results += '</ul>'
            results += '</div>'
            
            
            results += '</div>'
            results += '</div>'
            document.getElementById("pokeResult").innerHTML = results
        })
        
        
        .catch(function(error) {
            console.log(error)
        })
    
})
