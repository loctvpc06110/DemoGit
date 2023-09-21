
// let HTMLmainSP = '';
// for(let i = 0 ; i<listSP.length; i++){
//     HTMLmainSP += `<div class="product-box">
//     <img src="images/${listSP[i].image}" alt="">
//     <h4>${listSP[i].name}</h4>
//     <h5>${listSP[i].price}VND</h5>
//     <div class="detail">
//        <a href="./details/detail.html">Xem chi tiết</a>
//     </div> 
// </div>`;
// }
// document.getElementById('listSP').innerHTML = HTMLmainSP;

function getDataProduct() {
    let HTMLdata =' ';
    for(let i = 0 ; i<listSP.length; i++){
        HTMLdata += 
        `<div class="product-box">
        <img src="images/${listSP[i].image}" alt="">
        <h4>${listSP[i].name}</h4>
        <h5>${listSP[i].price}VND</h5>
        <div class="detail">
        <a href="./details/detail.html?id=${listSP[i].id}" onclick="clickDetails(${listSP[i].id})">Xem chi tiết</a>
        </div> 
        </div>`;
    }
    document.getElementById('listSP').innerHTML = HTMLdata;
}
getDataProduct();

// function getDatatDepute() {
//     let dataDepute ='';
//     for (let j = 0; j < listDepute.length; j++){
//         dataDepute = `
//         <div class="image-item">
//         <div class="image">
//             <img src="images/${listDepute[j].img}" alt="">
//         </div>
//         <h4 class="image-title">${listDepute[j].name}</h4>
//         </div>
//         `
//     }
//     document.getElementById('dataDepute').innerHTML = dataDepute;
// }
// getDataProduct();