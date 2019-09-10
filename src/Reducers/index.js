import { combineReducers } from 'redux';


// function getsignedusers() {
//     axios.get("http://192.168.20.121:8098/getUsers")
//         .then(response => {
//             signedusers = response.data
//            console.log("abcfunc");
//            console.log(signedusers);
//         }
//         )
//         .catch(error => console.log(error));
//     return signedusers;
// }

// function getDbProducts(){
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(response => {
//         let data = JSON.parse(JSON.stringify(response.data));
//         data=data.slice();
//         availableproducts= data;
//         console.log("prodfunc");
//         console.log(availableproducts);
//     }
//     )
//     .catch(error => console.log(error));
//     return availableproducts;
// }

function userdataretrival(data = [], action) {
    if (action.type === 'USER_DETAILS') {

        data = action.payload;
        console.log("ab");
        console.log(data);
        return data;
    }

    return data;
}
function productdataretrival(data1 = [], action) {

    //getDbProducts();
    if (action.type === 'PRODUCT_DETAILS') {
        data1 = action.payload;
        console.log("prod");
        console.log(data1);
        return data1;
    }
    return data1;
}

function wishlistdataretrival(data2 = [], action) {

    //getDbProducts();
    if (action.type === 'WISHLIST_DETAILS') {
        data2 = action.payload;
        console.log("wish");
        console.log(data2);
        return data2;
    }
    return data2;
}


function selectedProduct(dispproduct=null,action) {

    if (action.type === 'SELECT_PRODUCT') {
        console.log("abc")
        console.log("CHHHHHHHHHHH",action.payload)
        return action.payload;
    }
    console.log("CHHHHH",action.payload)
    return dispproduct;
}

export default combineReducers({
    userdatas: userdataretrival,
    proddatas: productdataretrival,
    wishdatas:wishlistdataretrival,
    selectedProduct: selectedProduct
});