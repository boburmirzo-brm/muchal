

const form = document.querySelector('#form'),
    result = document.querySelector('#result');

let muchal;
let p = document.createElement('p');
let pIzoh = document.createElement('p');
let img = document.createElement('img');

form.addEventListener('submit', checkYear);

function checkYear(event){
    let inputValue = document.querySelector('#number__input').value;
    let checkYear = inputValue % 12 + 1;
    if(inputValue == 0){
        alert('Biror Yil Kiriting')

    }
    else{
        switch(checkYear){
            case 1:
                muchal = 'Maymun';
                img.setAttribute('src', './img/01.jpg');
            break;
            case 2:
                muchal = 'Tovuq';
                img.setAttribute('src', './img/02.jpg');
            break;
            case 3:
                muchal = 'It';
                img.setAttribute('src', './img/03.jpg');
            break;
            case 4:
                muchal = 'To`ng`iz';
                img.setAttribute('src', './img/04.jpg');
            break;
            case 5:
                muchal = 'Sichqon';
                img.setAttribute('src', './img/05.jpg');

            break;
            case 6:
                muchal = 'Sigir';
                img.setAttribute('src', './img/06.jpg');

            break;
            case 7:
                muchal = 'Yo`lbars';
                img.setAttribute('src', './img/07.jpg');

            break;
            case 8:
                muchal = 'Quyon';
                img.setAttribute('src', './img/08.jpg');
            break;
            case 9:
                muchal = 'Baliq';
                img.setAttribute('src', './img/09.jpg');

            break;
            case 10:
                muchal = 'Ilon';
                img.setAttribute('src', './img/10.jpg');

            break;
            case 11:
                muchal = 'Ot';
                img.setAttribute('src', './img/11.jpg');

            break;
            case 12:
                muchal = 'Qo`y';
                img.setAttribute('src', './img/12.jpg');

            break;
        }
        pIzoh.innerHTML = 'Dasturimizdan foydalanganingiz uchun Rahmat "B R M"';
        p.innerHTML = `Muchalingiz ${muchal}` ;
        result.append(p); 
        result.append(img);
        result.append(pIzoh);
    }

 

    event.preventDefault();
}

