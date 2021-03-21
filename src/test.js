for (let i = 1; i <= 100; i++) {
    document.getElementById('yes').click();
    let n = 0;
    let number;
    const path = [];
    do {
        n++;
        number = +document.getElementById('number').innerText;
        if (number > i) document.getElementById('less').click();
        if (number < i) document.getElementById('more').click();
        path.push(number);
    } while (n <= 7 && number != i);
    console[n > 7 || number != i ? 'error' : 'log'](i, path, n);
}