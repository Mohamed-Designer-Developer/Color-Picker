const button = document.querySelector('button');
const paragraph =document.querySelector('.colorValue')

// functions async and await

const KalarDooqe = async () => {
    const eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();
    paragraph.innerHTML = `The Color Code is ${sRGBHex}`;  
    paragraph.style.color = "sRGBHex";
    document.body.style.backgroundColor = sRGBHex;
}

button.addEventListener('click', KalarDooqe);