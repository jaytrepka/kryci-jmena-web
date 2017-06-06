export function getLocaleData() {
  return JSON.parse(localStorage.getItem('KRYCI_JMENA')) || {};
}

export function setCards(data) {
  console.log('setC', data);
  const oldData = getLocaleData();
  const updatedData = {...oldData, data};
  localStorage.setItem('KRYCI_JMENA', JSON.stringify(updatedData));
}

export function setGameId(id) {
  console.log('setId', id);
  const oldData = getLocaleData();
  const updatedData = {...oldData, game: id};
  localStorage.setItem('KRYCI_JMENA', JSON.stringify(updatedData));
}
