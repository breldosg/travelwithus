var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var files = JSON.parse(xhr.responseText);
        var imageList = document.getElementById('imageList');

        // Create a list item for each image URL
        files.forEach(function(file) {
            var fileName = file.split('/').pop().split('.')[0]; // Extract the file name
            var li = document.createElement('li');
            li.className = 'card';

            var img = document.createElement('img');
            img.className = 'card_img';
            img.src = file;
            img.alt = '';

            var divOverlay = document.createElement('div');
            divOverlay.className = 'overlay';

            var divDetails = document.createElement('div');
            divDetails.className = 'details';

            var divCreator = document.createElement('div');
            divCreator.className = 'creator';

            var divIcon = document.createElement('div');
            divIcon.className = 'icon';

            var iconImg = document.createElement('img');
            iconImg.src = '../pics/icon/Picture.svg';
            iconImg.alt = '';

            var p = document.createElement('p');
            p.textContent = fileName; // Set the text content to the file name

            divIcon.appendChild(iconImg);
            divCreator.appendChild(divIcon);
            divCreator.appendChild(p);
            divDetails.appendChild(divCreator);
            divOverlay.appendChild(divDetails);
            li.appendChild(img);
            li.appendChild(divOverlay);
            imageList.appendChild(li);
        });


        const images = document.querySelectorAll(".overlay"),
        closebtn = document.querySelector(".close"),
        popup = document.querySelector(".pop");
        
        images.forEach(img =>{
            img.addEventListener("click",()=>{
                popup.classList.add("active");
                //selecting parent
                var parent=img.closest(".card");
                var clickedimg=parent.querySelector(".card_img");
                var clickedname=parent.querySelector("p");
                var popupimg=popup.querySelector(".pop_img");
                var popupname=popup.querySelector("p");
                popupimg.src=clickedimg.src;
                popupname.innerText=clickedname.innerText;
            })
        });
        closebtn.addEventListener("click",()=>{
                popup.classList.remove("active");
        })
    }
};
xhr.open('GET', 'image_display.php', true);
xhr.send();

        
        
        
//         const images = document.querySelectorAll(".overlay"),
// closebtn = document.querySelector(".close"),
// popup = document.querySelector(".pop");

// images.forEach(img =>{
//     img.addEventListener("click",()=>{
//         popup.classList.add("active");
//         //selecting parent
//         var parent=img.closest(".card");
//         var clickedimg=parent.querySelector(".card_img");
//         var clickedname=parent.querySelector("p");
//         var popupimg=popup.querySelector(".pop_img");
//         var popupname=popup.querySelector("p");
//         popupimg.src=clickedimg.src;
//         popupname.innerText=clickedname.innerText;
//     })
// });
// closebtn.addEventListener("click",()=>{
//         popup.classList.remove("active");
// })
