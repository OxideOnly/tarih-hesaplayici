document.addEventListener('keydown', function(event) {
    if (event.keyCode === 123) {
        event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
    }

    if (event.ctrlKey && event.keyCode === 85) {
        event.preventDefault();
    }
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

function calculateTime() {
    const userDate = new Date(document.getElementById('user-date').value);
    const currentDate = new Date();
    const resultElement = document.getElementById('result');

    if (isNaN(userDate.getTime())) {
        resultElement.textContent = "Lütfen geçerli bir tarih girin.";
        return;
    }

    const timeDifference = userDate - currentDate;

    const days = Math.floor(Math.abs(timeDifference) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((Math.abs(timeDifference) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((Math.abs(timeDifference) % (1000 * 60 * 60)) / (1000 * 60));
    const years = Math.floor(days / 365);

    if (timeDifference > 0) {
        resultElement.textContent = `${userDate.toLocaleDateString()} tarihine ${days} gün (${years} yıl), ${hours} saat, ${minutes} dakika kaldı.`;
    } else {
        resultElement.textContent = `${userDate.toLocaleDateString()} tarihinden ${days} gün (${years} yıl), ${hours} saat, ${minutes} dakika geçti.`;
    }
}
