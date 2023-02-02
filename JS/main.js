// Select language 
let selectLang = document.querySelector("header .social-media .lang-selector");

let clcikSelector = document.querySelector("header .social-media > p");

clcikSelector.onclick = function (e) {

    e.stopPropagation();

    selectLang.classList.toggle('active')

}
document.addEventListener('click', (e) => {

    if (e.target !== clcikSelector) {

        if (selectLang.classList.contains("active")) {
    
            selectLang.classList.remove('active');
    
        };

    }

});

let show = document.querySelector(".main .heading .heading-items .search");

let search = document.querySelector(".main .heading .heading-items div:nth-of-type(2)");

search.onclick = function (e) {

    show.classList.toggle("active");

}

let menuHome = document.querySelector(".menu .home h3");

let menuBlog = document.querySelector(".menu .blog h3");

let menuShop = document.querySelector(".menu .shop h3");

let menuPages = document.querySelector(".menu .pages h3");

let pageItemsH2 = document.querySelector(".menu .shop-items h2:first-of-type");

let productTypeH2 = document.querySelector(".menu .shop-items h2.product-h2");

function ShowItems(e) {

        e.classList.toggle("visable")

    };

menuHome.onclick = function() {

    ShowItems(document.querySelector(".home .hide"))

    };

menuBlog.onclick = function() {

    ShowItems(document.querySelector(".blog .hide"))

    };

menuShop.onclick = function() {

    ShowItems(document.querySelector(".shop .hide"))

    };
    
menuPages.onclick = function() {

    ShowItems(document.querySelector(".pages .hide"))

    }

pageItemsH2.onclick = function() {

    ShowItems(document.querySelector(".menu .shop-items .shop-pages"))

    }

productTypeH2.onclick = function() {

    ShowItems(document.querySelector(".menu .shop-items .product-type"))

    }


document.querySelector(".main .heading-items div.active").onclick = function () {

    document.querySelector(".menu").classList.add("active")

}

document.querySelector(".menu-items i").onclick = function () {

    document.querySelector(".menu").classList.remove("active")

}

let slideOne = document.querySelector(".slide-one")

let slideTwo = document.querySelector(".slide-two")

setInterval(() => {

    slideOne.style.transform = "scale(1.6)"

    slideOne.style.opacity = "0"

}, 10000)

setInterval(() => {

    slideOne.style.transform = "scale(1)"

    slideOne.style.opacity = "1"

}, 20000)

setTimeout(() => {

    setInterval(() => {

        slideTwo.style.transform = "scale(1.6)"

        slideTwo.style.opacity = "0"

    }, 10000)

    setInterval(() => {

        slideTwo.style.transform = "scale(1)"

        slideTwo.style.opacity = "1"

    }, 20000)

}, 10000)


let clickSpans1 = document.querySelector(".products .products-header span.right");

let clickSpans2 = document.querySelector(".products .products-header span.left");

let shoesContainer = document.querySelector(".products .product-items .product:first-of-type");

const swiper2 = new Swiper(".product-items", {

    slidesPerView: 4,

    watchSlidesProgress: true,

    loop: true,

    navigation: {

        prevEl: ".fa-chevron-left",

        nextEl: ".fa-chevron-right",

    },
})

let sectionMove = document.querySelector(".package-sections .latest-blog .latest-blog-items .latest-blog1");

var counter = 300;

var num = 30;

movingSction = setInterval(() => {

    sectionMove.style.marginLeft = -(counter+num)+"px";

    counter = counter + 300;

    num = num + 30;

    if (counter == 1200) {

        counter = 0;

    }
    
    if (num == 120) {

        num = 0;

    }

}, 10000);


var swiper = new Swiper(".swiper", {

    pagination: {

        el: ".swiper-pagination",

        dynamicBullets: true,

    },

});

let cartClick = document.querySelector(".main .heading .heading-items .shop-cart")

let cartShow = document.querySelector(".main .heading .cart-items")

cartClick.onclick = function () {

    if (cartShow.style.opacity == 0) {

        cartShow.style.opacity = '1'

        cartShow.style.visibility = 'visible'

        closeMenu.style.transform = 'rotate(45deg)'

    } else {

        cartShow.style.opacity = '0'

        cartShow.style.visibility = 'hidden'

    }

}

let closeMenu = document.querySelector(".main .heading .cart-items i");

closeMenu.onclick = function() {

        cartShow.style.opacity = '0'

        cartShow.style.visibility = 'hidden'

        closeMenu.style.transform = 'rotate(90deg)'

}

let shoping = document.querySelectorAll(".whish")

shoping.forEach(item => {

    item.addEventListener('click', (e) => {

        let itemShop = document.createElement("div")

        let imageShop = document.createElement("img")

        let textShop = document.createElement("p")

        let nameShop = document.createElement("h5")

        let priceItem = document.createElement("p")

        let priceCost = document.createElement("p")

        let markPrice = document.createElement("span")

        let textContainer = document.createElement("div")

        let markPriceText = document.createTextNode("$")

        let nameShopText = document.createTextNode(e.target.dataset.name)

        let textShopAppend = document.createTextNode(e.target.dataset.total)

        let Xmark = document.createElement("i")

        Xmark.classList.add("fa-solid", "fa-xmark")

        Xmark.style.position = "absolute"

        Xmark.style.top = "45%"

        Xmark.style.right = "10px"

        Xmark.style.transform = "translateX(-20%)"

        Xmark.style.fontSize = "22px"

        Xmark.style.cursor = "pointer"

        imageShop.src = e.target.dataset.image

        imageShop.style.width = "120px"

        imageShop.style.border = "1px solid var(--special--color)"

        markPrice.classList.add("mark-price")

        markPrice.appendChild(markPriceText)

        textShop.appendChild(nameShop)

        nameShop.appendChild(nameShopText)

        nameShop.style.fontSize = "13px"

        nameShop.style.marginBottom = "5px"

        itemShop.appendChild(imageShop)

        priceCost.appendChild(textShopAppend)

        priceItem.appendChild(markPrice)

        priceItem.appendChild(priceCost)

        itemShop.appendChild(priceItem)

        itemShop.appendChild(textShop)

        textContainer.appendChild(textShop)

        textContainer.appendChild(priceItem)

        itemShop.appendChild(textContainer)

        priceCost.classList.add('price-know')

        priceItem.classList.add('price-cost')

        textShop.classList.add("text-shop")

        itemShop.classList.add("items-shop")

        let containerSection = document.querySelector(".category")

        itemShop.appendChild(Xmark)

        containerSection.appendChild(itemShop)

        cartShow.appendChild(containerSection)

        Xmark.onclick = function () {

            containerSection.removeChild(itemShop)

        }

    })

})

var sumTotal = document.querySelector(".price")

const ckeckOut = document.querySelector(".ckeckout")

document.addEventListener('click', function() {

    var totalContainer = document.querySelectorAll(".price-know")

    let x = []

    for (i = 0; i < totalContainer.length; i++) {

        var totalArray = totalContainer[i]

        x[i] = parseInt(totalArray.textContent)

    }

    var total = x.reduce(function(acc, val) { return acc + val; }, 0)

    sumTotal.textContent = total

    ckeckOut.onclick = function() {

        const shopMessage = document.querySelector(".message")

        const emtyMessage = document.querySelector(".emty-message")

        const itemShopAll = document.querySelectorAll(".items-shop")

        const categoryAll = document.querySelector(".category")

        if (itemShopAll.length == 0) {

            emtyMessage.style.top = "5px"

            setTimeout(() => {

                emtyMessage.style.top = "-200px"

            }, 5000)

        } else {

            shopMessage.style.top = "5px"

            categoryAll.innerHTML = ""

            setTimeout(() => {

                shopMessage.style.top = "-200px"

            }, 5000)

        }

    }

    let numItems = document.querySelector(".num-items")

        let itemsLength = document.querySelectorAll(".items-shop")

        if (itemsLength.length > 0) {

            numItems.style.opacity = '1'

        } else {

            numItems.style.opacity = '0'

        }

        numItems.textContent = itemsLength.length

})

const swiper3 = new Swiper(".logos-container", {

    pagination: {

        el: ".swiper-pagination",

        dynamicBullets: true,

    },

})