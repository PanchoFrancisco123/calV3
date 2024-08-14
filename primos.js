let currentPrime = 2;

function getNextPrime() {
    while (!isPrime(currentPrime)) {
        currentPrime++;
    }
    return currentPrime++;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function updatePrimosList(action) {
    const list = document.getElementById('primos-list');
    if (action === 'add') {
        const newPrime = getNextPrime();
        const item = document.createElement('div');
        item.textContent = newPrime;
        list.appendChild(item);
    } else if (action === 'subtract') {
        const items = list.getElementsByTagName('div');
        if (items.length > 0) {
            list.removeChild(items[items.length - 1]);
        }
    }
}

document.addEventListener('click', (e) => {
    if (e.button === 0) { // Click izquierdo
        updatePrimosList('add');
    }
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    updatePrimosList('subtract');
});
