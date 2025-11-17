function formatValue(value: string | number | boolean): string | number | boolean | undefined {
    if (typeof value === 'string') {
        const res = (value).toUpperCase();
        return res;
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else if (typeof value === 'boolean') {
        return !value;
    }
}


function getLength(value: string | (number | string)[]): string | (number | string) | undefined {
    if (typeof value === 'string') {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
}


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}


function filterByRating(items: { rating: number }[]) {
    return items.filter(item => item.rating >= 4);
}


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};
function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive === true);
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
function printBookDetails(book: Book) {
    const { title, author, publishedYear, isAvailable } = book;
    const bookDetails = `Title: ${title}, Author: ${author}, Published: ${publishedYear}, 
    Available: ${isAvailable === true ? 'Yes' : 'No'}`
    return bookDetails;
}


function getUniqueValues(array1: (number | string)[], array2: (number | string)[]): (number | string)[] {
    const mergeValue = [...array1, ...array2];
    let sortValue: (number | string)[] = []
    mergeValue.map((value) => {
        if (!sortValue.includes(value)) {
            sortValue.push(value);
        }
    });
    return sortValue;
}


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number
}
function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) return 0;

    return products
        .map(product => {
            const productPrice = product.price * product.quantity;
            if (product.discount) {
                const discountAmount = productPrice * (product.discount / 100);
                return productPrice - discountAmount;
            }
            return productPrice;
        })
        .reduce((total, current) => total + current, 0);
}