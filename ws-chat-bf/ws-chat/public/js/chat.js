// Obtener el nombre de usuario almacenado localmente
const username = localStorage.getItem('name');

// Verificar si el nombre de usuario existe
if (!username) {
  window.location.replace('/');
  throw new Error('Username is required');
}

// Conectar al socket con la información de autenticación
const socket = io({
  auth: {
    token: 'ABC-123',
    name: username,
  },
});

// Referencias HTML
const lblStatusOnline = document.querySelector('#status-online');
const lblStatusOffline = document.querySelector('#status-offline');
const userListElement = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('input');
const chatElement = document.querySelector('#chat');

// Renderizar la lista de usuarios
const renderUserList = (users) => {
  userListElement.innerHTML = '';
  users.forEach((user) => {
    const liElement = document.createElement('li');
    liElement.innerText = user.name;
    userListElement.appendChild(liElement);
  });
};

// Evento cuando se conecta al socket
socket.on('connect', () => {
  lblStatusOnline.classList.remove('hidden');
  lblStatusOffline.classList.add('hidden');
});

// Evento cuando se desconecta del socket
socket.on('disconnect', () => {
  lblStatusOffline.classList.remove('hidden');
  lblStatusOnline.classList.add('hidden');
});

// Evento para recibir mensajes de bienvenida
socket.on('welcome-message', (message) => {
  console.log(message);
});

// Evento para manejar cambios en la lista de usuarios
socket.on('on-clients-changed', (clients) => {
  renderUserList(clients);
});

// Evento para enviar mensajes cuando se envía el formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const message = input.value;
  input.value = '';

  // Enviar el mensaje al servidor
  socket.emit('send-message', message);
  console.log(message);
});

// Función para renderizar un mensaje en el chat
const renderMessage = (payload) => {
  const { userId, message, name } = payload;

  const divElement = document.createElement('div');
  divElement.classList.add('message');

  if (userId !== socket.id) {
    divElement.classList.add('incoming');
  }

  divElement.innerHTML = `
    <small>${name}</small>
    <p>${message}</p>
  `;
  chatElement.appendChild(divElement);

  // Hacer scroll hasta el final del chat
  chatElement.scrollTop = chatElement.scrollHeight;
};

// Evento para manejar mensajes entrantes
socket.on('on-message', (payload) => {
  renderMessage(payload);
});
