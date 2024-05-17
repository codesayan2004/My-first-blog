fetch('https://coding-week-2024-api.onrender.com/api/data').then((response)=>{
    return response.json();
}).then(data => {
    //u hava access to data
    for(i=0;i<3;i++){
        let con = `<div class="box" style="display: flex;
        background-size: cover;
        background-image: url('${data[i].image}');
        align-items: flex-end;
        color: white;">
        <div class="box-info">
            <button id="butt">Culture</button>
            <button id="butt">Featured</button>
            <h2>${data[i].headline}</h2>
            <div class="one" style="display: flex;">
                <i class="fa-regular fa-calendar"></i>
                <pre> ${data[i].date}</pre>
            </div>
            <div class="one" style="display: flex;">
                <i class="fa-solid fa-user"></i>
                <pre> ${data[i].author}</pre>
            </div>
        </div>
        </div>`;
        document.querySelector('.content').innerHTML+=con;
    }
    for(i=4;i<10;i++){
        let con = `
        <div class="bo" style="display:flex; padding:0.4rem;">
        <div class="img4" style="background-image: url('${data[i].image}');"></div>
        <div class="con4">
            <p>${data[i].headline}</p>
            <div class="date4" style="display: flex;">
                <i class="fa-regular fa-calendar"></i>
                <pre> ${data[i].date}</pre>
            </div>
        </div>
        </div>`;
        document.querySelector('.slide').innerHTML+=con;
    }
});
//const va = document.querySelector('.content').innerHTML;
//console.log(va);
// let con = `<div class="box" style="display: flex;
//         background-size: cover;
//         background-image: url('https://cdn.pixabay.com/photo/2017/03/27/12/45/woman-2178480_1280.jpg');
//         align-items: flex-end;
//         color: white;">
//         <div class="box-info">
//             <button id="butt">Culture</button>
//             <button id="butt">Featured</button>
//             <h2>Why reading newspaper are more..</h2>
//             <div class="one" style="display: flex;">
//                 <i class="fa-regular fa-calendar"></i>
//                 <pre> October 18 2022</pre>
//             </div>
//             <div class="one" style="display: flex;">
//                 <i class="fa-solid fa-user"></i>
//                 <pre> Author</pre>
//             </div>
//         </div>
//         </div>`;
// document.querySelector('.content').innerHTML+=con;
// var con= document.querySelector('.slide').innerHTML;
// console.log(con);