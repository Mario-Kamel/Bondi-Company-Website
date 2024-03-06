import strings from "../Assets/localization";
import ProductsSection from "../Components/products-section";
const ProductsPage = () => {
  
    const sauces = [
        {
            name: strings.redTkemaliBlack,
            description: strings.redTkemaliBlackDescription,
            imageUrl: "./sauces/tek_black_cherry.png"
        },
        {
            name: strings.yellowTkemaliKiwi,
            description: strings.yellowTkemaliKiwiDescription,
            imageUrl: "./sauces/tek_yell_kiw.png"
        },
        {
            name: strings.tkemaliBlackCherry,
            description: strings.tkemaliBlackCherryDescription,
            imageUrl: "./sauces/tek_red_cherry.png"
        },
        {
            name: strings.satsebeliTomatoSauce,
            description: strings.satsebeliTomatoSauceDescription,
            imageUrl: "./sauces/sas_cold.png"
        },
        {
            name: strings.satsebeliHotTomatoSauce,
            description: strings.satsebeliHotTomatoSauceDescription,
            imageUrl: "./sauces/sas_hot.png"
        },
        {
            name: strings.flameOfGeorgiaHotSauce,
            description: strings.flameOfGeorgiaHotSauceDescription,
            imageUrl: "./sauces/hot_sauce.png"
        },
    ]

    const cannedVegetablesAndSpices = [
        {
            name: strings.ajapsandaliSalad,
            description: strings.AjapsandaliSaladDescription,
            imageUrl: "./salad/ajap_cold.png"
        },
        {
            name: strings.ajikaEggplantDippingSauce,
            description: strings.ajikaEggplantDippingSauceDescription,
            imageUrl: "./salad/ajika_eggplant.png"
        },
        {
            name: strings.ajikaRedSauce,
            description: strings.ajikaRedSauceDescription,
            imageUrl: "./salad/ajika_red.png"
        },
        {
            name: strings.ajikaDrySauce,
            description: strings.ajikaDrySauceDescription,
            imageUrl: "./salad/ajika_dry.png"
        },
        {
            name: strings.svanSalt,
            description: strings.svanSaltDescription,
            imageUrl: "./salad/svan_salt.png"
        },
    ]

    const jams = [
        {
            name: strings.tangerineJam,
            description: strings.tangerineJamDescription,
            imageUrl: "./jam/jam_tang.png"
        },
        {
            name: strings.hotPepperJam,
            description: strings.hotPepperJamDescription,
            imageUrl: "./jam/jam_pepper.png"
        }
    ] 

    const Wines = [
        {
            name: strings.redSweetWine,
            description: strings.redSweetWineDescription,
            imageUrl: "./wine/wine_sweet.png"
        },
        {
            name: strings.redSemiSweetWine,
            description: strings.redSemiSweetWineDescription,
            imageUrl: "./wine/wine_semi.png"
        }
    ]
    
    
    return (
        <>
            <ProductsSection title={strings.sauces} description={strings.saucesDescription} products={sauces} />
            <ProductsSection title={strings.cannedVegetablesAndSpices} description={strings.cannedVegetablesAndSpicesDescription} products={cannedVegetablesAndSpices} />
            <ProductsSection title={strings.jams} description={strings.jamsDescription}products={jams} />
            <ProductsSection title={strings.wines} description={strings.winesDescription}products={Wines} />
        </>
    )
};


export default ProductsPage;