
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === '1234') {
    alert('Acesso autorizado');
    window.location.href = 'pesquisa_advogado_associado.html';
  } else {
    alert('Usuário ou senha incorretos');
  }
});

function logout() {
  alert('Você saiu do sistema.');
  window.location.href = 'index.html';
}
