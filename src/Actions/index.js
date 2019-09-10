import fetch from 'cross-fetch';

export function getuserdetails(data) {
    return {
        type: 'USER_DETAILS',
        payload: data
    };
}

export function getproducts(data) {
    return {
        type: 'PRODUCT_DETAILS',
        payload: data
    };
}

export function getwishlist(data) {
    return {
        type: 'WISHLIST_DETAILS',
        payload: data
    };
}

export function selectproduct(data) {
    console.log(data)
    return {
        type: 'SELECT_PRODUCT',
        payload: data
    };
}

export function fetchUsers() {

    const URL = 'http://192.168.20.121:8098/getUsers';

    return function (dispatch) {
        return fetch(URL)
            .then(
                response => response.json(),
                error => console.log('An Error Occured ', error)
            )
            .then(
                data => {
                    dispatch(getuserdetails(data));
                },
                error => console.log('An Error Occured ', error)
            )
    }
}


export function fetchProductsByFilter(filter) {
    console.log(filter, "From Redux")

    const URL = 'http://192.168.20.121:9098/getProducts/';

    return function (dispatch) {
        return fetch(URL)
            .then(
                response => response.json(),
                error => console.log('An Error Occured ', error)
            )
            .then(
                data => {
                    if (typeof filter === "string") {
                        data.sort(
                            (first, second) => {
                                if (filter === "lowToHigh") {
                                    return first.product_price - second.product_price
                                }
                                 return second.product_price - first.product_price
                            }
                        )
                    }
                    console.log(data)
                    dispatch(getproducts(data));
                },
                error => console.log('An Error Occured ', error)
            )
    }
}

export function fetchProducts() {

    const URL = 'http://192.168.20.121:9098/getProducts/';

    return function (dispatch) {
        return fetch(URL)
            .then(
                response => response.json(),
                error => console.log('An Error Occured ', error)
            )
            .then(
                data => {
                    dispatch(getproducts(data));
                },
                error => console.log('An Error Occured ', error)
            )
    }
}

export function fetchSelectedProducts(data) {

    return getproducts(data);
}

export function fetchWishList() {

    const URL = 'http://192.168.20.121:9088/getAllWishListItem';

    return function (dispatch) {
        return fetch(URL)
            .then(
                response => response.json(),
                error => console.log('An Error Occured ', error)
            )
            .then(
                data => {
                    dispatch(getwishlist(data));
                },
                error => console.log('An Error Occured ', error)
            )
    }
}