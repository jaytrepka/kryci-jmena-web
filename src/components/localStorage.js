export function getLocaleData() {
  return JSON.parse(localStorage.getItem('KRYCI_JMENA')) || {};
}

export function setCards(data) {
  const oldData = getLocaleData();
  const updatedData = {...oldData, data};
  localStorage.setItem('KRYCI_JMENA', JSON.stringify(updatedData));
}

export function setGameId(id) {
  const oldData = getLocaleData();
  const updatedData = {...oldData, game: id};
  localStorage.setItem('KRYCI_JMENA', JSON.stringify(updatedData));
}
