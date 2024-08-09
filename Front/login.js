async function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const data = {
        email, 
        senha
    };

    const response = await fetch('http://localhost:3002/api/store/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    });

    const results = await response.json();
    console.log(results);

    if(results.success) {        
        alert(results.message);
        window.location.href="feed.html"; // redirecionar para a página correta
    } else {
        alert(results.message);
        console.log(results.data);
    }
}
