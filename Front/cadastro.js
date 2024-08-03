async function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmesenha = document.getElementById("confirmesenha").value;

    //if cofirmesenha
    if (senha !== confirmesenha) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        return;
    }

    const data = {
        email, 
        senha
    }

    const response = await fetch('http://localhost:3001/api/store/user', {
        method: 'POST',
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    })

    const results = await response.json();
    console.log(results);
    if(results.success) {        
        alert(results.message)
        //redirecionar para a pagina correta
    } else {
        alert(results.message)
        console.log(results.data)
    }
}