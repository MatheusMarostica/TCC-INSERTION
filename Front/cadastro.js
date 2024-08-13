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

    const response = await fetch('http://localhost:3002/api/store/user', {
        method: 'POST',
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    })

    const results = await response.json();
    console.log(results);
    if (results.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Seus cadastro foi feito com sucesso",
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            setTimeout(() => {
              window.location.href = "login.html"; // redirecionar para a página de login
            }, 0); // tempo de espera em milissegundos (0 segundos, pois o timer já foi executado)
          }
        });
    } else {
        alert(results.message)
        console.log(results.data)
    }

}