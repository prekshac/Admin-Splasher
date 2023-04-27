const cloudData = {
    users : [
        { name: 'Ramu', email : 'ramu@mail.com', phone : '1234567890', address : 'Bangalore', role : 'user', password : '36546' },
        {name: 'Raju', email : 'raju@mail.com', phone : '2234567890', address : 'Delhi', role : 'user', password : '13546' },
        {name: 'Shyam', email : 'raju@mail.com' , phone : '3234567890', address : 'Mumbai', role : 'user', password : '23546' },
        {name: 'Ravi', email : 'ravi@mail.com', phone : '4234567890', address : 'Chennai', role : 'user', password : '33546' },
    ],
    products : [
        { name: 'T-shirt', price : 300, description : 'Cool T-shirts', image : 'https://picsum.photos/200/300', category : 'category 1' },
        { name: 'Shirt', price : 500, description : 'Cool Shirts', image : 'https://picsum.photos/200/300', category : 'category 2' },
        { name: 'Jeans', price : 1000, description : 'Trendy Jeans', image : 'https://picsum.photos/200/300', category : 'category 3' },
        { name: 'Shoes', price : 1200, description : 'Shoes', image : 'https://picsum.photos/200/300', category : 'category 5' },
    ],
    orders : [
        { id : 1, user : 'Ramu', product : 'T-shirt', quantity : 2, price : 600, status : 'pending' },
        { id : 2, user : 'Raju', product : 'Shirt', quantity : 1, price : 500, status : 'pending' },
        { id:  3, user : 'Shyam', product: 'Jeans', quantity: 2, price: 2000, status: 'pending' },
        { id:  4, user : 'Ravi', product: 'Shoes', quantity: 1, price: 1200, status: 'pending' },
    ],
};

export default cloudData;