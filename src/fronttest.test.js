const offfarm = require("./calculators/offfarm");
const crops = require("./calculators/crops");
const foodSecurity = require("./calculators/foodSecurity");
const home = require("./calculators/home");
const livelihood = require("./calculators/livelihood");
const livestock = require("./calculators/livestock");
const dataTest=[
    {
        "id_unique": "00092a73fe4fa534a56c4a954a2585f6",
        "id_country": "Burkina Faso",
        "region": "hauts bassins",
        "id_proj": "ta5",
        "id_form": "bf_ta5_2018",
        "api_gps": [
            11.07,
            -3.79
        ],
        "api_tot_ppp_income_pd_pmae": 0,
        "api_mae": 0,
        "api_currency_conversion": 198.7925,
        "api_income_lstk_ppp_pd_pmae": 0,
        "api_income_crop_ppp_pd_pmae": 0,
        "api_income_offfarm_ppp_pd_pmae": 0,
        "api_cons_lstk_ppp_pd_pmae": 0,
        "api_cons_crop_ppp_pd_pmae": 0,
        "api_hfias_status": "food_secure",
        "api_food_shortage_months": [],
        "api_hdds_flush": 5,
        "api_hdds_lean": 5,
        "api_food_flush": [
            "grainsrootstubers",
            "legumes",
            "vegetables",
            "meat",
            "nuts_seeds"
        ],
        "api_food_lean": [
            "grainsrootstubers",
            "legumes",
            "vegetables",
            "meat",
            "nuts_seeds"
        ],
        "api_crops_all": [
            "peanut",
            "maize",
            "cowpea",
            "other1"
        ],
        "api_consumed_sold1": [
            "cotton",
            0,
            10000
        ],
        "api_consumed_sold2": [
            "maize",
            36,
            0
        ],
        "api_consumed_sold3": [],
        "api_consumed_sold4": [],
        "api_consumed_sold5": [],
        "api_consumed_sold6": [],
        "api_consumed_sold7": [],
        "api_consumed_sold8": [],
        "api_name_yield1": [
            "cotton",
            10000
        ],
        "api_name_yield2": [
            "maize",
            40
        ],
        "api_name_yield3": [],
        "api_name_yield4": [],
        "api_name_yield5": [],
        "api_name_yield6": [],
        "api_name_yield7": [],
        "api_name_yield8": [],
        "api_landArea": 15,
        "api_livestocks_kept": [
            [
                "cattle",
                10
            ],
            [
                "sheep",
                20
            ],
            [
                "goats",
                0
            ],
            [
                "pigs",
                0
            ],
            [
                "chicken",
                10
            ],
            [
                "otherpoultry",
                0
            ],
            [
                "rabbits",
                0
            ],
            [
                "fish",
                0
            ],
            [
                "other_lstk",
                0
            ],
            [
                "other2_lstk",
                0
            ],
            [
                "other3_lstk",
                0
            ],
            [
                "donkeys_horses",
                2
            ],
            [
                "bees",
                0
            ]
        ],
        "api_meat_sold_consumed": [
            0,
            0
        ],
        "api_eggs_sold_consumed": [
            0,
            0
        ],
        "api_milk_sold_consumed": [
            0,
            0
        ],
        "api_breed_improved": [],
        "api_off_farm_months": [],
        "api_off_farm_activities": [],
        "api_off_farm_spending": ["invest"],
        "api_off_farm_propotion": null
},]

test('home page', () => {
    var t1=home.getMapData(dataTest)
    expect(Object.keys(t1[0]).length).toBe(7)
})

test('livelihood', () => {
    var t1=livelihood.getBarData(dataTest)
    expect(Object.keys(t1[0]).length).toBe(7)
    var t2=livelihood.getBoxData(dataTest)
    expect(Object.keys(t2).length).toBe(2)
    var t3=livelihood.getPieData(dataTest)
    expect(t3.length).toBe(3)
})

test('food security', () => {
    var t1=foodSecurity.buildFoodConsumedData(dataTest)
    expect(t1.length).toBe(10)
    var t2=foodSecurity.buildFoodShortageData(dataTest)
    expect(Object.keys(t2).length).toBe(2)
    var t3=foodSecurity.buildHDDSData(dataTest)
    expect(t3[0][0]).toBe(5)
})

test('crops', () => {
    var t1=crops.buildCropGrown(dataTest)
    expect(t1.length).toBe(4)
    var t2=crops.buildCropLand(dataTest)
    expect(t2[0][0]).toBe(15)
    var t3=crops.buildCropUsed(dataTest)
    expect(t3[0][0]).toBe("maize")
})

test('livestock', () => {
    var t1=livestock.buildBreedsData(dataTest)
    expect(Object.keys(t1[0]).length).toBe(2)
    var t2=livestock.buildHeadsData(dataTest)
    expect(Object.keys(t2).length).toBe(3)
    var t3=livestock.buildUseData(dataTest)
    expect(t3[0][0]).toBe("meat")
})

test('off farm income', () => {
    var t1=offfarm.buildOffFarmIncome(dataTest)
    var t2=offfarm.buildOffFarmActivity(dataTest)
    var t3=offfarm.buildOffFarmMonth(dataTest)
    var t4=offfarm.buildOffFarmUsage(dataTest)
    expect(Object.keys(t1).length).toBe(2)
    expect(Object.keys(t2).length).toBe(2)
    expect(Object.keys(t3).length).toBe(2)
    expect(Object.keys(t4).length).toBe(1)
})