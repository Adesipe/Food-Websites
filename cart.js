const product = [
    {
        Id: 0, 
        image: 'images/pro7.jpg',
        title: 'Mini Van',
        price: 33100,
    },
    {
        Id: 1, 
        image: 'images/pro.jpg',
        title: 'Mercedes Benz',
        price: 37700,
    },
    {
        Id: 2, 
        image: 'images/pro1.jpg',
        title: 'Ford F-150',
        price: 47750,
    },
    {
        Id: 3, 
        image: 'images/pro3.jpg',
        title: 'Hilux Trucks',
        price: 42125,
    },
    {
        Id: 4, 
        image: 'images/pro5.jpg',
        title: 'Shelby GT-500',
        price: 73520,
    },
    {
        Id: 5, 
        image: 'images/pro6.jpg',
        title: 'White Colts',
        price: 98230,
    }, 
    {
        Id: 6, 
        image: 'images/pro2.jpg',
        title: 'Ash Sienna',
        price: 51230,
    },
    {
        Id: 7, 
        image: 'images/pro4.jpg',
        title: 'Blue G4',
        price: 60000,
    }
]; 
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}</h2>` +
                "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                `</div>
                </div>`
        )
    }).join('')

var cart =[];

function addtocart(a) {
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}
function displaycart(a) {
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if (cart.length==0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${price}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}