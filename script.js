document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.animated-header');
    header.style.transition = 'transform 0.5s';
    
    header.addEventListener('mouseover', () => {
        header.style.transform = 'scale(1.1)';
    });

    header.addEventListener('mouseout', () => {
        header.style.transform = 'scale(1)';
    });

    // Matrix effect
    const canvas = document.getElementById('matrix');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
        context.fillStyle = "rgba(0, 0, 0, 0.05)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#0F0";
        context.font = fontSize + "px arial";

        for (let i = 0; i < drops.length; i++) {
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            context.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const inputText = document.getElementById('entrada-texto');
    const outputText = document.getElementById('saida-texto');
    const encryptButton = document.getElementById('cripto-button');
    const decryptButton = document.getElementById('decripto-button');
    const copyButton = document.getElementById('copiar-button');

    const encryptionMap = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const decryptionMap = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    function encrypt(text) {
        return text.replace(/[eioua]/g, (matched) => encryptionMap[matched]);
    }

    function decrypt(text) {
        return text.replace(/enter|imes|ai|ober|ufat/g, (matched) => decryptionMap[matched]);
    }

    encryptButton.addEventListener('click', () => {
        const text = inputText.value.toLowerCase();
        if (/^[a-z\s]*$/.test(text)) {
            outputText.value = encrypt(text);
        } else {
            alert('Por favor, use apenas letras minúsculas sem acentos ou caracteres especiais.');
        }
    });

    decryptButton.addEventListener('click', () => {
        const text = inputText.value.toLowerCase();
        if (/^[a-z\s]*$/.test(text)) {
            outputText.value = decrypt(text);
        } else {
            alert('Por favor, use apenas letras minúsculas sem acentos ou caracteres especiais.');
        }
    });

    copyButton.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado para a área de transferência.');
    });
});
