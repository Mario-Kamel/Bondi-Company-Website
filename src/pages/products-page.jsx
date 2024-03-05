import ProductsSection from "../Components/products-section";
const ProductsPage = () => {
  
    const sauces = [
        {
            name: "Red Tkemali with Black Cherry",
            description: "This sauce is sweet and sour, refreshing taste. Suitable for meat, fish, and vegetables.",
            imageUrl: "./sauces/tek_black_cherry.png"
        },
        {
            name: "Yellow Tkemali with Kiwi",
            description: "This sauce is sweet and sour, refreshing taste. Suitable for meat, fish, and vegetables.",
            imageUrl: "./sauces/tek_yell_kiw.png"
        },
        {
            name: "Tkemali with Black Cherry",
            description: "This sauce is sweet and sour, refreshing taste. Suitable for meat, fish, and vegetables.",
            imageUrl: "./sauces/tek_red_cherry.png"
        },
        {
            name: "Satsebeli Tomato Sauce",
            description: "This tomato sauce has a refreshing taste. Suitable for meat, fish, and vegetables.",
            imageUrl: "./sauces/sas_cold.png"
        },
        {
            name: "Satsebeli Hot Tomato Sauce",
            description: "This tomato sauce has a refreshing taste. Suitable for meat, fish, and vegetables.",
            imageUrl: "./sauces/sas_hot.png"
        },
        {
            name: "Flame of Georgia Hot Sauce",
            description: "Hot sauce made from the eponymous hot georgian pepper with the addition of freshly squeezed apple juice.",
            imageUrl: "./sauces/hot_sauce.png"
        },
    ]

    const cannedVegetablesAndSpices = [
        {
            name: "Ajapsandali Eggplant Georgian Salad",
            description: "Traditional georgian salad consisting of fried eggplant, onion, tomato, bell pepper, and seasoned with garlic, basil, coriander leaves and other seasonings.",
            imageUrl: "./salad/ajap_cold.png"
        },
        {
            name: "Ajika Eggplant Dipping Sauce",
            description: "The zesty ajika, paired with garlic and onion, revives the typically bland eggplant. The vibrant red chili and bell peppers, harmonized by the rich green cilantro, create a colorful contrast against the subdued braised eggplant.",
            imageUrl: "./salad/ajika_eggplant.png"
        },
        {
            name: "Ajika Red Sauce",
            description: "Traditional georgian appetizer that can be used as a flavouring for food, consisting of red chilli pepper, tomatoes, herbs, and spices.",
            imageUrl: "./salad/ajika_red.png"
        },
        {
            name: "Ajika Dry Sauce",
            description: "Traditional georgian HOT appetizer that can be used as a flavouring for food, consisting of hot red pepper, tomatoes, herbs, and spices.",
            imageUrl: "./salad/ajika_dry.png"
        },
        {
            name: "Svan Salt",
            description: "Exquisite Spice Blend: Crafted from 2 parts dry coriander, a harmonious blend of dry fennel (dill), blue fenugreek, red pepper, and saffron, along with a touch of wild cumin. Enhanced by a generous amount of minced garlic, this seasoning elevates every dish. Sprinkle and savor the vibrant flavors!",
            imageUrl: "./salad/svan_salt.png"
        },
    ]

    const jams = [
        {
            name: "Tangerine Jam",
            description: "Tangerine jam is a sweet and sour jam with a refreshing taste.",
            imageUrl: "./jam/jam_tang.png"
        },
        {
            name: "Hot Pepper Jam",
            description: "This tantalizing hot pepper jam combines chopped red chili peppers, sweet red peppers, and onions, all bathed in a delightful blend of sugar, apple cider vinegar, and a touch of fresh lemon juice.",
            imageUrl: "./jam/jam_pepper.png"
        }
    ] 

    const Wines = [
        {
            name: "Red Sweet Acohol-Free Wine",
            description: "Red sweet wine is a sweet wine with a refreshing taste.",
            imageUrl: "./wine/wine_sweet.png"
        },
        {
            name: "Red Semi Sweet Acohol-Free Wine",
            description: "Red sweet wine is a sweet wine with a refreshing taste.",
            imageUrl: "./wine/wine_semi.png"
        }
    ]
    
    
    return (
        <>
            <ProductsSection title="Sauces" description="This is one of the best sauces to ever exist"products={sauces} />
            <ProductsSection title="Canned Vegetables and Spices" description="All of our canned food is 100% natural. We solely use fresh vegetables and herbs to transfer traditional Geogian dishes to the jar."products={cannedVegetablesAndSpices} />
            <ProductsSection title="Jams" description="Our Jams are made from local fruits. 100% Natural, without preservatives and flavors."products={jams} />
            <ProductsSection title="Halal Wine" description="The world renowned Georgian Wine but 100% alcohol-free"products={Wines} />
        </>
    )
};


export default ProductsPage;