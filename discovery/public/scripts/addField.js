// Procurar o botão
document.querySelector("#add-time")
    // Quando clicar no botão
    .addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {

    // Duplicar os campos. Que campo ?
    const newFieldContainer = document.querySelector('.schedule-item')
        .cloneNode(true)

    // Pegar os camps. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo limpar
    fields.forEach(field => field.value = "");

    // Colocar na página: onde ?
    document.querySelector('#schedule-items')
        .appendChild(newFieldContainer)
}