var cartBtn = document.querySelector('#cartBtn');
var banner = document.querySelector('.banner');
var enterTitle = document.querySelector('#enterTitle');
var enterCtg = document.querySelector('#enterCtg');
var enterImg = document.querySelector('#enterImg');
var closebtn = document.querySelector('#closebtn');
var enterBtn = document.querySelector('#enterBtn');
var lowerBody = document.querySelector('#lowerBody');

cartBtn.addEventListener('click',function(){
    banner.style.display = 'flex';
});

closeBtn.addEventListener('click',function(){
    banner.style.display = 'none';
});

enterBtn.addEventListener('click',function(){
    let titleValue = enterTitle.value;
    let ctgValue = enterCtg.value;
    let imgValue = enterImg.value;
    lowerBody.innerHTML += `
                <div id="card">
                    <div id="cardImg">
                        <img src="${imgValue}"></img>
                    </div>
                    <div id="cardTitle">${titleValue}</div>
                    <div id="cardCtg">${ctgValue}</div>
                    <button id="cardBtn">Add Now</button>
                </div>
                        `;
    enterTitle.value = '';
    enterCtg.value = '';
    enterImg.value = '';
});


