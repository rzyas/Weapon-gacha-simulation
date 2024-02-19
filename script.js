const sfx_ding_001 = new Audio('sfx/ding.mp3')

const img_container = document.getElementById('img_container');
const btn_gacha = document.getElementById('btn_gacha')
const gacha_box = document.getElementById('gacha_box')
const gacha_img = document.getElementById('gacha_img')
const hasil_gacha_img = document.getElementById('hasil_gacha_img')
const btn_gacha_reset = document.getElementById('btn_gacha_reset')
const total_gacha = document.getElementById('total_gacha')
const btn_gacha_x10 = document.getElementById('btn_gacha_x10')
const btn_gacha_x100 = document.getElementById ('btn_gacha_x100')
const btn_gacha_x1000 = document.getElementById('btn_gacha_x1000')

let jp = 0
const total_jp = document.getElementById('total_jp')

total_jp.innerText = `Total Mendapatkan JP: 0`

const default_img = 'default_img/default_img.png'
let panjang_history = 1000
let add_total_gacha = 0

const hasil_gacha = []

const all_item = [
    'img_wpn/awm_class_1.jpg',
    'img_wpn/awm_class_2.jpg',
    'img_wpn/awm_class_3.jpg',
    'img_wpn/awm_class_4.jpg',
    'img_wpn/sf_lmg_class_1.jpg',
    'img_wpn/sf_lmg_class_2.jpg',
    'img_wpn/sf_lmg_class_3.jpg',
    'img_wpn/sf_lmg_class_4.jpg',
    'img_wpn/sf_magnum_volt_class_1.jpg',
    'img_wpn/sf_magnum_volt_class_2.jpg',
    'img_wpn/sf_magnum_volt_class_3.jpg',
    'img_wpn/sf_magnum_volt_class_4.jpg',
    'img_wpn/sf_revolver_class_1.jpg',
    'img_wpn/sf_revolver_class_2.jpg',
    'img_wpn/sf_revolver_class_3.jpg',
    'img_wpn/sf_revolver_class_4.jpg',
    'img_wpn/ss2_rz1_class_1.jpg',
    'img_wpn/ss2_rz1_class_2.jpg',
    'img_wpn/ss2_rz1_class_3.jpg',
    'img_wpn/ss2_rz1_class_4.jpg',
    'img_knf/karambit_class_1.jpg',
    'img_knf/karambit_class_2.jpg',
    'img_knf/karambit_class_3.jpg',
    'img_knf/karambit_class_4.jpg',
    'img_knf/m9_class_1.jpg',
    'img_knf/m9_class_2.jpg',
    'img_knf/m9_class_3.jpg',
    'img_knf/m9_class_4.jpg',
    'img_knf/zulfikar_knf_class_1.jpg',
    'img_knf/zulfikar_knf_class_2.jpg',
    'img_knf/zulfikar_knf_class_3.jpg',
    'img_knf/zulfikar_knf_class_4.jpg'
];


//! BTN GACHA X1000
btn_gacha_x1000.addEventListener('click', function(){
    for (let i = 0; i < 1000; i++) {
        setTimeout(function(){
            main_gacha()
            let soundEffect = new Audio(sfx_ding_001.src)
            soundEffect.play()
        }, i * 100); // Meningkatkan waktu penundaan setiap kali loop berjalan
    }
});


//! BTN GACHA X100
btn_gacha_x100.addEventListener('click', function(){
    for (let i = 0; i < 100; i++) {
        setTimeout(function(){
            main_gacha()
            let soundEffect = new Audio(sfx_ding_001.src)
            soundEffect.play()
        }, i * 100); // Meningkatkan waktu penundaan setiap kali loop berjalan
    }
});

//! BTN GACHA X10
btn_gacha_x10.addEventListener('click', function(){
    for (let i = 0; i < 10; i++) {
        setTimeout(function(){
            main_gacha()
            let soundEffect = new Audio(sfx_ding_001.src)
            soundEffect.play()
        }, i * 100)
    }
});


//! BTN GACHA X1
btn_gacha.addEventListener('click', function(){
    main_gacha()
    let soundEffect = new Audio(sfx_ding_001.src)
    soundEffect.play()
})

//! FUNC MAIN GACHA
function main_gacha(){
    add_total_gacha += 1
    total_gacha.innerText = `History Gacha ke: ${add_total_gacha}`
    const all_item_length = all_item.length;
    const random_index = random_gen(0, all_item_length - 1)
    let random_img = all_item[random_index]
    // More Filter
    let arr_random_img = random_img.split('')
    let class_num = arr_random_img[arr_random_img.length -5]
    console.log(`before: ${class_num}`);

    switch (class_num) {
    case '1':
        class_num = 1;
        break;
    case '2':
        class_num = Math.random() < 0.5 ? 1 : 2;
        break;
    case '3':
        let rand3 = Math.random();
        if (rand3 < 0.5) {
        class_num = 1;
        } else if (rand3 < 0.8) {
        class_num = 2;
        } else {
        class_num = 3;
        }
        break;
    case '4':
        let rand4 = Math.random();
        if (rand4 < 0.5) {
        class_num = 1;
        } else if (rand4 < 0.8) {
        class_num = 2;
        } else if (rand4 < 0.95) {
        class_num = 3;
        } else {
        class_num = 4;
        jp += 1
        total_jp.innerText = `Total Mendapatkan JP: ${jp}`
        }
        break;
    default:
        console.log('Angka tidak valid');
    }
    console.log(`after: ${class_num}`);

    arr_random_img[arr_random_img.length -5] = class_num
    const gabung = arr_random_img.join('')
    random_img = gabung

    // END More Filter
    gacha_img.setAttribute('src', random_img)
    if (hasil_gacha.length < panjang_history){
        hasil_gacha.push(random_img)
    }else{
        hasil_gacha.shift()
        hasil_gacha.push(random_img)
    }
    gacha_history()
    console.log(hasil_gacha);
}


//! BTN RESET
btn_gacha_reset.addEventListener('click', function(){
    total_gacha.innerText = 'History Gacha ke: 0'
    add_total_gacha = 0
    jp = 0
    total_jp.innerText = `Total Mendapatkan JP: 0`
    gacha_img.setAttribute('src', default_img)


    // Mendapatkan semua elemen gambar
    const images = Array.from(hasil_gacha_img.children);
    while (hasil_gacha_img.firstChild){
        hasil_gacha_img.removeChild(hasil_gacha_img.firstChild)
    }

    hasil_gacha.length = 0
    console.log(hasil_gacha);
})



//! ALL FUNCTION
function gacha_history(){
    const last_index = hasil_gacha[hasil_gacha.length -1]
    const elem_img = document.createElement('img')
    elem_img.setAttribute('src', last_index)
    elem_img.setAttribute('id', 'gacha_result_img')
    hasil_gacha_img.appendChild(elem_img)

    setTimeout(function() {
        elem_img.classList.remove('hidden');
    }, 100);

    const get_all_gacha_result = document.querySelectorAll('#gacha_result_img')
    if (get_all_gacha_result.length > panjang_history){
        hasil_gacha_img.removeChild(get_all_gacha_result[0])
    }
}

function random_gen(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

