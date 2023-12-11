const username = localStorage.getItem('name');
if (!username) {
  window.location.replace('/');
  throw new Error('Username is required');
}

const socket = io({
  auth: {
    token: 'ABC-123',
    name: username,
  },
}); //Con esto ya nos conectamos y podemos mandar info

//Referencias HTML

const lblStatusOnline = document.querySelector('#status-online');
const lblStatusOffline = document.querySelector('#status-offline');

const useUlElement = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('input');
const chatElement = document.querySelector('#chat');

const renderUser = (users) => {
  useUlElement.innerHTML = '';
  users.forEach((user) => {
    const liElement = document.createElement('li');
    liElement.innerText = user.name;
    useUlElement.appendChild(liElement);
  });
};

socket.on('connect', () => {
  lblStatusOnline.classList.remove('hidden');
  lblStatusOffline.classList.add('hidden');
});

socket.on('disconnect', () => {
  lblStatusOffline.classList.remove('hidden');
  lblStatusOnline.classList.add('hidden');
});

socket.on('welcome-message', (message) => {
  console.log(message);
});

socket.on('on-clients-changed', (clientes) => {
  console.log(clientes[1].name);
  renderUser(clientes);
});
