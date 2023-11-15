let catalog = [
    {
        "title":"Hoodie",
        "category":"Clothing",
        "price":60.00,
        "image":"HoodyAI.png",
        "_id":"blackhoody",
    },
    {
        "title":"Sweater",
        "category":"Clothing",
        "price":45.00,
        "image":"SweaterAI.png",
        "_id":"blacksweater",
    },
    {
        "title":"Tee",
        "category":"Clothing",
        "price":35.00,
        "image":"WhiteTeeAI.png",
        "_id":"whitetee",
    },
    {
        "title":"Sweats",
        "category":"Clothing",
        "price":50.00,
        "image":"SweatsAI.png",
        "_id":"greysweats",
    },
    {
        "title":"Stickers (assorted)",
        "category":"Other",
        "price":10.00,
        "image":"StickersAI.png",
        "_id":"popstickers",
    },
    {
        "title":"Long Sleeve Tee",
        "category":"Clothing",
        "price":40.00,
        "image":"LongSleeveAI.png",
        "_id":"longsleeve",
    },
    {
        "title":"Beanie",
        "category":"Headgear",
        "price":30.00,
        "image":"BeanieAI.png",
        "_id":"beaniegg",
    }
]

class DataService {
    getProducts() {
        //retrieve the products to display
        return catalog;
    }

}

export default DataService;