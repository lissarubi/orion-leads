window.onload = function() {
    const postBottom = document.querySelector('input#postFormLeadsFB')
    const nameInput = document.querySelector('input#name')
    const emailInput = document.querySelector('input#email')
    const telInput = document.querySelector('input#tel')
    const form = document.querySelector('form#form')
    postBottom.addEventListener('click', function(){
        if (nameInput.value == '' && emailInput.value == '' && telInput.value == ''){
            alert('Preencha o formulário!')
        }
        else if (emailInput.value == '' && telInput.value == ''){
            alert('Preencha o seu email e telefone!')
        }
        else if (nameInput.value == '' && telInput.value == ''){
            alert('Preencha o seu nome e telefone!')
        }
        else if (nameInput.value == '' && emailInput.value == ''){
            alert('Preencha o seu nome e email!')
        }
        else if (telInput.value == ''){
            alert('Preencha o seu telefone!')
        }
        else if (emailInput.value == ''){
            alert('Preencha o seu email!')
        }
        else if (nameInput.value == ''){
            alert('Preencha o seu nome!')
        }
        
        else{
            form.submit()
        }
    })
}