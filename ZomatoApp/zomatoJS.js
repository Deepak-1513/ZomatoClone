const restaurants =[
    {
        "image": "second",
        "name": "Fusion Feast",
        "rating": 4.5,
        "food_type": "Japanese",
        "price_for_two": 1582,
        "location": "Safdarjung Tomb",
        "distance_from_Customer_house": "5.1",
        "offers": 20,
        "alcohol": true,
        "restaurant_open_time": 16,
        "restaurant_close_time": 4
    },
    {
        "image": "nine",
        "name": "The Foodie's Hub",
        "rating": 1.5,
        "food_type": "Chinese",
        "price_for_two": 1631,
        "location": "Khan Market",
        "distance_from_Customer_house": "7.7",
        "offers": 9,
        "alcohol": true,
        "restaurant_open_time": 16,
        "restaurant_close_time": 4
    },
    {
        "image": "twelve",
        "name": "Flavor Junction",
        "rating": 5.0,
        "food_type": "Mexican",
        "price_for_two": 299,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "4.1",
        "offers": 29,
        "alcohol": false,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "thirteen",
        "name": "The Hungry Fork",
        "rating": 3.5,
        "food_type": "Japanese",
        "price_for_two": 1320,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "2.0",
        "offers": 12,
        "alcohol": false,
        "restaurant_open_time": 18,
        "restaurant_close_time": 6
    },
    {
        "image": "fifth",
        "name": "Bistro Bliss",
        "rating": 2.9,
        "food_type": "Japanese",
        "price_for_two": 2298,
        "location": "Red Fort",
        "distance_from_Customer_house": "1.3",
        "offers": 18,
        "alcohol": true,
        "restaurant_open_time": 19,
        "restaurant_close_time": 7
    },
    {
        "image": "Eigth",
        "name": "Zesty Bites",
        "rating": 4.8,
        "food_type": "Indian",
        "price_for_two": 163,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "5.5",
        "offers": 23,
        "alcohol": true,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "twelve",
        "name": "Taste Haven",
        "rating": 3.7,
        "food_type": "Indian",
        "price_for_two": 1119,
        "location": "Red Fort",
        "distance_from_Customer_house": "3.6",
        "offers": 23,
        "alcohol": false,
        "restaurant_open_time": 15,
        "restaurant_close_time": 3
    },
    {
        "image": "second",
        "name": "Urban Eatery",
        "rating": 1.9,
        "food_type": "Chinese",
        "price_for_two": 2458,
        "location": "Khan Market",
        "distance_from_Customer_house": "3.9",
        "offers": 3,
        "alcohol": false,
        "restaurant_open_time": 21,
        "restaurant_close_time": 9
    },
    {
        "image": "seventh",
        "name": "The Culinary Table",
        "rating": 2.8,
        "food_type": "Chinese",
        "price_for_two": 2294,
        "location": "Purana Qila",
        "distance_from_Customer_house": "1.8",
        "offers": 6,
        "alcohol": false,
        "restaurant_open_time": 14,
        "restaurant_close_time": 2
    },
    {
        "image": "twelve",
        "name": "Sizzle & Spice",
        "rating": 4.2,
        "food_type": "Chinese",
        "price_for_two": 761,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "5.8",
        "offers": 17,
        "alcohol": false,
        "restaurant_open_time": 6,
        "restaurant_close_time": 18
    },
    {
        "image": "thirteen",
        "name": "The Hungry Fork",
        "rating": 5.0,
        "food_type": "Indian",
        "price_for_two": 682,
        "location": "Connaught Place",
        "distance_from_Customer_house": "8.6",
        "offers": 17,
        "alcohol": false,
        "restaurant_open_time": 16,
        "restaurant_close_time": 4
    },
    {
        "image": "twelve",
        "name": "Wholesome Cravings",
        "rating": 4.9,
        "food_type": "Japanese",
        "price_for_two": 2276,
        "location": "Khan Market",
        "distance_from_Customer_house": "3.1",
        "offers": 26,
        "alcohol": false,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "seventh",
        "name": "Sizzle & Spice",
        "rating": 2.2,
        "food_type": "Thai",
        "price_for_two": 824,
        "location": "Safdarjung Tomb",
        "distance_from_Customer_house": "6.4",
        "offers": 3,
        "alcohol": true,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "nine",
        "name": "Gourmet Delight",
        "rating": 3.8,
        "food_type": "Chinese",
        "price_for_two": 1012,
        "location": "Khan Market",
        "distance_from_Customer_house": "0.9",
        "offers": 22,
        "alcohol": false,
        "restaurant_open_time": 13,
        "restaurant_close_time": 1
    },
    {
        "image": "thirteen",
        "name": "Spice Symphony",
        "rating": 4.2,
        "food_type": "Chinese",
        "price_for_two": 1406,
        "location": "Purana Qila",
        "distance_from_Customer_house": "0.3",
        "offers": 25,
        "alcohol": true,
        "restaurant_open_time": 7,
        "restaurant_close_time": 19
    },
    {
        "image": "second",
        "name": "Epicurean Escape",
        "rating": 4.1,
        "food_type": "Italian",
        "price_for_two": 254,
        "location": "National Museum",
        "distance_from_Customer_house": "1.9",
        "offers": 20,
        "alcohol": true,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "nine",
        "name": "Wholesome Cravings",
        "rating": 3.4,
        "food_type": "Mexican",
        "price_for_two": 297,
        "location": "Connaught Place",
        "distance_from_Customer_house": "1.5",
        "offers": 26,
        "alcohol": false,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "seventh",
        "name": "Epicurean Escape",
        "rating": 4.1,
        "food_type": "Italian",
        "price_for_two": 2445,
        "location": "Hauz Khas Village",
        "distance_from_Customer_house": "8.9",
        "offers": 16,
        "alcohol": false,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "third",
        "name": "Epicurean Escape",
        "rating": 3.3,
        "food_type": "Japanese",
        "price_for_two": 783,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "6.2",
        "offers": 24,
        "alcohol": false,
        "restaurant_open_time": 15,
        "restaurant_close_time": 3
    },
    {
        "image": "twelve",
        "name": "Zesty Bites",
        "rating": 3.6,
        "food_type": "Mexican",
        "price_for_two": 2410,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "2.8",
        "offers": 17,
        "alcohol": false,
        "restaurant_open_time": 14,
        "restaurant_close_time": 2
    },
    {
        "image": "First",
        "name": "The Foodie's Hub",
        "rating": 4.1,
        "food_type": "Thai",
        "price_for_two": 2306,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "8.3",
        "offers": 11,
        "alcohol": true,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "second",
        "name": "Spice Symphony",
        "rating": 2.8,
        "food_type": "Japanese",
        "price_for_two": 300,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "0.4",
        "offers": 6,
        "alcohol": true,
        "restaurant_open_time": 17,
        "restaurant_close_time": 5
    },
    {
        "image": "seventh",
        "name": "Fusion Feast",
        "rating": 4.7,
        "food_type": "Thai",
        "price_for_two": 326,
        "location": "India Gate",
        "distance_from_Customer_house": "0.2",
        "offers": 0,
        "alcohol": true,
        "restaurant_open_time": 23,
        "restaurant_close_time": 11
    },
    {
        "image": "twelve",
        "name": "Crispy Corner",
        "rating": 1.9,
        "food_type": "Thai",
        "price_for_two": 374,
        "location": "Safdarjung Tomb",
        "distance_from_Customer_house": "9.9",
        "offers": 27,
        "alcohol": false,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "second",
        "name": "The Hungry Fork",
        "rating": 2.1,
        "food_type": "Japanese",
        "price_for_two": 671,
        "location": "Connaught Place",
        "distance_from_Customer_house": "9.5",
        "offers": 21,
        "alcohol": false,
        "restaurant_open_time": 7,
        "restaurant_close_time": 19
    },
    {
        "image": "second",
        "name": "Tasty Treats",
        "rating": 5.0,
        "food_type": "Thai",
        "price_for_two": 2349,
        "location": "India Gate",
        "distance_from_Customer_house": "1.7",
        "offers": 6,
        "alcohol": false,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    },
    {
        "image": "twelve",
        "name": "Taste Haven",
        "rating": 4.0,
        "food_type": "Thai",
        "price_for_two": 1809,
        "location": "Khan Market",
        "distance_from_Customer_house": "9.8",
        "offers": 12,
        "alcohol": false,
        "restaurant_open_time": 15,
        "restaurant_close_time": 3
    },
    {
        "image": "fourth",
        "name": "Fusion Feast",
        "rating": 3.2,
        "food_type": "Indian",
        "price_for_two": 589,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "9.0",
        "offers": 4,
        "alcohol": true,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    },
    {
        "image": "Eigth",
        "name": "Golden Plate",
        "rating": 3.5,
        "food_type": "Chinese",
        "price_for_two": 1638,
        "location": "Hauz Khas Village",
        "distance_from_Customer_house": "2.0",
        "offers": 0,
        "alcohol": false,
        "restaurant_open_time": 6,
        "restaurant_close_time": 18
    },
    {
        "image": "Eigth",
        "name": "Zesty Bites",
        "rating": 3.6,
        "food_type": "Mexican",
        "price_for_two": 901,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "0.9",
        "offers": 28,
        "alcohol": false,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "twelve",
        "name": "The Dining Den",
        "rating": 2.5,
        "food_type": "Thai",
        "price_for_two": 291,
        "location": "India Gate",
        "distance_from_Customer_house": "1.8",
        "offers": 27,
        "alcohol": true,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "eleven",
        "name": "The Hungry Fork",
        "rating": 4.2,
        "food_type": "Chinese",
        "price_for_two": 594,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "2.8",
        "offers": 17,
        "alcohol": true,
        "restaurant_open_time": 8,
        "restaurant_close_time": 20
    },
    {
        "image": "nine",
        "name": "Wholesome Cravings",
        "rating": 2.9,
        "food_type": "Italian",
        "price_for_two": 1026,
        "location": "Chandni Chowk",
        "distance_from_Customer_house": "4.8",
        "offers": 11,
        "alcohol": false,
        "restaurant_open_time": 13,
        "restaurant_close_time": 1
    },
    {
        "image": "eleven",
        "name": "Bistro Bliss",
        "rating": 4.3,
        "food_type": "Italian",
        "price_for_two": 2014,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "7.0",
        "offers": 30,
        "alcohol": true,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "Eigth",
        "name": "Urban Eatery",
        "rating": 2.7,
        "food_type": "Indian",
        "price_for_two": 1379,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "5.9",
        "offers": 29,
        "alcohol": true,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "fifth",
        "name": "The Rustic Spoon",
        "rating": 4.3,
        "food_type": "Mexican",
        "price_for_two": 1804,
        "location": "Chandni Chowk",
        "distance_from_Customer_house": "7.4",
        "offers": 3,
        "alcohol": true,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "eleven",
        "name": "Crispy Corner",
        "rating": 1.6,
        "food_type": "Thai",
        "price_for_two": 1107,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "3.7",
        "offers": 27,
        "alcohol": true,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "Eigth",
        "name": "Flavor Junction",
        "rating": 2.1,
        "food_type": "Thai",
        "price_for_two": 2071,
        "location": "India Gate",
        "distance_from_Customer_house": "3.2",
        "offers": 7,
        "alcohol": false,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "thirteen",
        "name": "Flavor Junction",
        "rating": 1.8,
        "food_type": "Italian",
        "price_for_two": 1020,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "2.0",
        "offers": 14,
        "alcohol": false,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "eleven",
        "name": "Savory Spot",
        "rating": 1.9,
        "food_type": "Mexican",
        "price_for_two": 392,
        "location": "Raj Ghat",
        "distance_from_Customer_house": "7.8",
        "offers": 15,
        "alcohol": true,
        "restaurant_open_time": 21,
        "restaurant_close_time": 9
    },
    {
        "image": "second",
        "name": "Epicurean Escape",
        "rating": 5.0,
        "food_type": "Japanese",
        "price_for_two": 2453,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "1.6",
        "offers": 28,
        "alcohol": true,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "fourth",
        "name": "The Hungry Fork",
        "rating": 3.9,
        "food_type": "Mexican",
        "price_for_two": 282,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "2.2",
        "offers": 21,
        "alcohol": true,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    },
    {
        "image": "eleven",
        "name": "Zesty Bites",
        "rating": 3.8,
        "food_type": "Chinese",
        "price_for_two": 967,
        "location": "Safdarjung Tomb",
        "distance_from_Customer_house": "9.2",
        "offers": 23,
        "alcohol": false,
        "restaurant_open_time": 8,
        "restaurant_close_time": 20
    },
    {
        "image": "seventh",
        "name": "Fusion Feast",
        "rating": 2.7,
        "food_type": "Mexican",
        "price_for_two": 1112,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "3.4",
        "offers": 5,
        "alcohol": false,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    },
    {
        "image": "thirteen",
        "name": "Spice Symphony",
        "rating": 3.6,
        "food_type": "Japanese",
        "price_for_two": 2103,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "2.2",
        "offers": 9,
        "alcohol": false,
        "restaurant_open_time": 18,
        "restaurant_close_time": 6
    },
    {
        "image": "fourth",
        "name": "Taste Haven",
        "rating": 4.7,
        "food_type": "Italian",
        "price_for_two": 1898,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "1.1",
        "offers": 3,
        "alcohol": false,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "eleven",
        "name": "Bistro Bliss",
        "rating": 4.4,
        "food_type": "Japanese",
        "price_for_two": 1663,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "8.4",
        "offers": 13,
        "alcohol": true,
        "restaurant_open_time": 8,
        "restaurant_close_time": 20
    },
    {
        "image": "third",
        "name": "Golden Plate",
        "rating": 4.5,
        "food_type": "Japanese",
        "price_for_two": 832,
        "location": "Connaught Place",
        "distance_from_Customer_house": "0.4",
        "offers": 18,
        "alcohol": true,
        "restaurant_open_time": 5,
        "restaurant_close_time": 17
    },
    {
        "image": "fourth",
        "name": "Urban Eatery",
        "rating": 5.0,
        "food_type": "Japanese",
        "price_for_two": 2301,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "5.0",
        "offers": 8,
        "alcohol": true,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "First",
        "name": "Bistro Bliss",
        "rating": 3.6,
        "food_type": "Thai",
        "price_for_two": 1765,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "6.6",
        "offers": 3,
        "alcohol": false,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "sixth",
        "name": "The Foodie's Hub",
        "rating": 2.8,
        "food_type": "Mexican",
        "price_for_two": 1292,
        "location": "Khan Market",
        "distance_from_Customer_house": "9.6",
        "offers": 9,
        "alcohol": false,
        "restaurant_open_time": 5,
        "restaurant_close_time": 17
    },
    {
        "image": "seventh",
        "name": "The Foodie's Hub",
        "rating": 2.9,
        "food_type": "Chinese",
        "price_for_two": 849,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "5.8",
        "offers": 28,
        "alcohol": false,
        "restaurant_open_time": 17,
        "restaurant_close_time": 5
    },
    {
        "image": "fourth",
        "name": "Savory Spot",
        "rating": 3.7,
        "food_type": "Indian",
        "price_for_two": 108,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "4.3",
        "offers": 18,
        "alcohol": true,
        "restaurant_open_time": 21,
        "restaurant_close_time": 9
    },
    {
        "image": "second",
        "name": "Crispy Corner",
        "rating": 3.6,
        "food_type": "Italian",
        "price_for_two": 2028,
        "location": "Connaught Place",
        "distance_from_Customer_house": "7.3",
        "offers": 13,
        "alcohol": true,
        "restaurant_open_time": 0,
        "restaurant_close_time": 12
    },
    {
        "image": "tenth",
        "name": "Gourmet Delight",
        "rating": 2.6,
        "food_type": "Japanese",
        "price_for_two": 1397,
        "location": "India Gate",
        "distance_from_Customer_house": "5.6",
        "offers": 20,
        "alcohol": true,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "First",
        "name": "Bistro Bliss",
        "rating": 4.5,
        "food_type": "Japanese",
        "price_for_two": 2094,
        "location": "Hauz Khas Village",
        "distance_from_Customer_house": "7.9",
        "offers": 4,
        "alcohol": false,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "tenth",
        "name": "Bistro Bliss",
        "rating": 2.4,
        "food_type": "Indian",
        "price_for_two": 606,
        "location": "Khan Market",
        "distance_from_Customer_house": "8.2",
        "offers": 1,
        "alcohol": true,
        "restaurant_open_time": 14,
        "restaurant_close_time": 2
    },
    {
        "image": "First",
        "name": "Sizzle & Spice",
        "rating": 2.2,
        "food_type": "Italian",
        "price_for_two": 1450,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "4.3",
        "offers": 13,
        "alcohol": false,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "second",
        "name": "Gourmet Delight",
        "rating": 2.5,
        "food_type": "Mexican",
        "price_for_two": 508,
        "location": "Red Fort",
        "distance_from_Customer_house": "7.8",
        "offers": 21,
        "alcohol": false,
        "restaurant_open_time": 4,
        "restaurant_close_time": 16
    },
    {
        "image": "First",
        "name": "Wholesome Cravings",
        "rating": 4.3,
        "food_type": "Chinese",
        "price_for_two": 1191,
        "location": "Safdarjung Tomb",
        "distance_from_Customer_house": "6.5",
        "offers": 2,
        "alcohol": true,
        "restaurant_open_time": 19,
        "restaurant_close_time": 7
    },
    {
        "image": "fifth",
        "name": "Epicurean Escape",
        "rating": 2.4,
        "food_type": "Japanese",
        "price_for_two": 824,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "8.1",
        "offers": 24,
        "alcohol": false,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "fourth",
        "name": "Crispy Corner",
        "rating": 4.0,
        "food_type": "Japanese",
        "price_for_two": 1702,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "4.3",
        "offers": 13,
        "alcohol": true,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    },
    {
        "image": "Eigth",
        "name": "Wholesome Cravings",
        "rating": 2.0,
        "food_type": "Italian",
        "price_for_two": 1504,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "7.3",
        "offers": 0,
        "alcohol": true,
        "restaurant_open_time": 17,
        "restaurant_close_time": 5
    },
    {
        "image": "second",
        "name": "Bistro Bliss",
        "rating": 3.0,
        "food_type": "Mexican",
        "price_for_two": 765,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "8.2",
        "offers": 18,
        "alcohol": false,
        "restaurant_open_time": 5,
        "restaurant_close_time": 17
    },
    {
        "image": "second",
        "name": "The Foodie's Hub",
        "rating": 1.8,
        "food_type": "Japanese",
        "price_for_two": 1924,
        "location": "National Museum",
        "distance_from_Customer_house": "3.9",
        "offers": 14,
        "alcohol": false,
        "restaurant_open_time": 12,
        "restaurant_close_time": 0
    },
    {
        "image": "thirteen",
        "name": "Crispy Corner",
        "rating": 5.0,
        "food_type": "Japanese",
        "price_for_two": 1502,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "0.1",
        "offers": 7,
        "alcohol": false,
        "restaurant_open_time": 8,
        "restaurant_close_time": 20
    },
    {
        "image": "tenth",
        "name": "Crispy Corner",
        "rating": 4.4,
        "food_type": "Mexican",
        "price_for_two": 1600,
        "location": "Chandni Chowk",
        "distance_from_Customer_house": "7.8",
        "offers": 7,
        "alcohol": false,
        "restaurant_open_time": 14,
        "restaurant_close_time": 2
    },
    {
        "image": "nine",
        "name": "Flavor Junction",
        "rating": 3.3,
        "food_type": "Thai",
        "price_for_two": 2487,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "7.6",
        "offers": 19,
        "alcohol": true,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "sixth",
        "name": "Taste Haven",
        "rating": 3.2,
        "food_type": "Thai",
        "price_for_two": 2213,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "1.7",
        "offers": 24,
        "alcohol": false,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "thirteen",
        "name": "The Culinary Table",
        "rating": 3.1,
        "food_type": "Japanese",
        "price_for_two": 1579,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "2.3",
        "offers": 26,
        "alcohol": false,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "tenth",
        "name": "Epicurean Escape",
        "rating": 2.3,
        "food_type": "Indian",
        "price_for_two": 1122,
        "location": "Raj Ghat",
        "distance_from_Customer_house": "3.8",
        "offers": 10,
        "alcohol": true,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "fifth",
        "name": "The Hungry Fork",
        "rating": 4.1,
        "food_type": "Thai",
        "price_for_two": 1321,
        "location": "Raj Ghat",
        "distance_from_Customer_house": "6.0",
        "offers": 21,
        "alcohol": false,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "First",
        "name": "Epicurean Escape",
        "rating": 4.4,
        "food_type": "Japanese",
        "price_for_two": 508,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "8.3",
        "offers": 18,
        "alcohol": true,
        "restaurant_open_time": 6,
        "restaurant_close_time": 18
    },
    {
        "image": "tenth",
        "name": "Wholesome Cravings",
        "rating": 2.3,
        "food_type": "Chinese",
        "price_for_two": 1197,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "3.9",
        "offers": 25,
        "alcohol": false,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "third",
        "name": "The Culinary Table",
        "rating": 5.0,
        "food_type": "Indian",
        "price_for_two": 212,
        "location": "Chandni Chowk",
        "distance_from_Customer_house": "6.9",
        "offers": 0,
        "alcohol": true,
        "restaurant_open_time": 21,
        "restaurant_close_time": 9
    },
    {
        "image": "thirteen",
        "name": "The Foodie's Hub",
        "rating": 4.4,
        "food_type": "Thai",
        "price_for_two": 712,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "5.5",
        "offers": 5,
        "alcohol": false,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "third",
        "name": "Epicurean Escape",
        "rating": 4.5,
        "food_type": "Thai",
        "price_for_two": 2280,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "4.5",
        "offers": 7,
        "alcohol": false,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "seventh",
        "name": "The Foodie's Hub",
        "rating": 2.5,
        "food_type": "Chinese",
        "price_for_two": 327,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "4.4",
        "offers": 30,
        "alcohol": true,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "thirteen",
        "name": "Wholesome Cravings",
        "rating": 3.5,
        "food_type": "Indian",
        "price_for_two": 1901,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "4.3",
        "offers": 29,
        "alcohol": false,
        "restaurant_open_time": 15,
        "restaurant_close_time": 3
    },
    {
        "image": "fifth",
        "name": "Sizzle & Spice",
        "rating": 3.7,
        "food_type": "Indian",
        "price_for_two": 920,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "8.0",
        "offers": 15,
        "alcohol": false,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "sixth",
        "name": "Zesty Bites",
        "rating": 4.0,
        "food_type": "Thai",
        "price_for_two": 1364,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "1.5",
        "offers": 8,
        "alcohol": false,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "third",
        "name": "Urban Eatery",
        "rating": 2.9,
        "food_type": "Indian",
        "price_for_two": 2430,
        "location": "Lodi Gardens",
        "distance_from_Customer_house": "9.8",
        "offers": 25,
        "alcohol": false,
        "restaurant_open_time": 17,
        "restaurant_close_time": 5
    },
    {
        "image": "nine",
        "name": "Flavor Junction",
        "rating": 3.0,
        "food_type": "Italian",
        "price_for_two": 212,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "0.3",
        "offers": 22,
        "alcohol": true,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "thirteen",
        "name": "Golden Plate",
        "rating": 2.9,
        "food_type": "Chinese",
        "price_for_two": 1858,
        "location": "Red Fort",
        "distance_from_Customer_house": "4.9",
        "offers": 6,
        "alcohol": false,
        "restaurant_open_time": 0,
        "restaurant_close_time": 12
    },
    {
        "image": "First",
        "name": "Urban Eatery",
        "rating": 4.9,
        "food_type": "Japanese",
        "price_for_two": 1211,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "3.7",
        "offers": 15,
        "alcohol": false,
        "restaurant_open_time": 17,
        "restaurant_close_time": 5
    },
    {
        "image": "fifth",
        "name": "The Foodie's Hub",
        "rating": 3.8,
        "food_type": "Indian",
        "price_for_two": 1880,
        "location": "Red Fort",
        "distance_from_Customer_house": "2.3",
        "offers": 9,
        "alcohol": true,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "fifth",
        "name": "Taste Haven",
        "rating": 1.5,
        "food_type": "Japanese",
        "price_for_two": 261,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "0.4",
        "offers": 9,
        "alcohol": false,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "third",
        "name": "Bistro Bliss",
        "rating": 3.6,
        "food_type": "Thai",
        "price_for_two": 221,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "8.1",
        "offers": 25,
        "alcohol": false,
        "restaurant_open_time": 15,
        "restaurant_close_time": 3
    },
    {
        "image": "seventh",
        "name": "Flavor Junction",
        "rating": 5.0,
        "food_type": "Chinese",
        "price_for_two": 2469,
        "location": "India Gate",
        "distance_from_Customer_house": "5.9",
        "offers": 16,
        "alcohol": false,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "third",
        "name": "Fusion Feast",
        "rating": 2.4,
        "food_type": "Japanese",
        "price_for_two": 1722,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "2.4",
        "offers": 14,
        "alcohol": false,
        "restaurant_open_time": 7,
        "restaurant_close_time": 19
    },
    {
        "image": "fifth",
        "name": "Tasty Treats",
        "rating": 1.6,
        "food_type": "Japanese",
        "price_for_two": 1264,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "6.0",
        "offers": 26,
        "alcohol": true,
        "restaurant_open_time": 4,
        "restaurant_close_time": 16
    },
    {
        "image": "second",
        "name": "The Hungry Fork",
        "rating": 4.5,
        "food_type": "Mexican",
        "price_for_two": 667,
        "location": "Raj Ghat",
        "distance_from_Customer_house": "2.7",
        "offers": 13,
        "alcohol": true,
        "restaurant_open_time": 8,
        "restaurant_close_time": 20
    },
    {
        "image": "Eigth",
        "name": "Zesty Bites",
        "rating": 1.4,
        "food_type": "Thai",
        "price_for_two": 501,
        "location": "Raj Ghat",
        "distance_from_Customer_house": "0.1",
        "offers": 7,
        "alcohol": true,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "third",
        "name": "Sizzle & Spice",
        "rating": 3.3,
        "food_type": "Japanese",
        "price_for_two": 981,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "0.8",
        "offers": 5,
        "alcohol": false,
        "restaurant_open_time": 12,
        "restaurant_close_time": 0
    },
    {
        "image": "fourth",
        "name": "The Dining Den",
        "rating": 1.6,
        "food_type": "Japanese",
        "price_for_two": 1084,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "6.0",
        "offers": 10,
        "alcohol": false,
        "restaurant_open_time": 14,
        "restaurant_close_time": 2
    },
    {
        "image": "Eigth",
        "name": "Epicurean Escape",
        "rating": 4.0,
        "food_type": "Thai",
        "price_for_two": 1469,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "9.8",
        "offers": 1,
        "alcohol": false,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "sixth",
        "name": "Flavor Junction",
        "rating": 4.8,
        "food_type": "Indian",
        "price_for_two": 1821,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "7.6",
        "offers": 21,
        "alcohol": true,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "seventh",
        "name": "The Foodie's Hub",
        "rating": 4.8,
        "food_type": "Japanese",
        "price_for_two": 1319,
        "location": "Purana Qila",
        "distance_from_Customer_house": "6.8",
        "offers": 20,
        "alcohol": false,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "fifth",
        "name": "Bistro Bliss",
        "rating": 3.8,
        "food_type": "Chinese",
        "price_for_two": 1160,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "2.2",
        "offers": 5,
        "alcohol": true,
        "restaurant_open_time": 16,
        "restaurant_close_time": 4
    },
    {
        "image": "Eigth",
        "name": "The Dining Den",
        "rating": 2.7,
        "food_type": "Indian",
        "price_for_two": 2255,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "8.5",
        "offers": 2,
        "alcohol": false,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    }
]

 function get_restaurant(restaurants){
    const root=document.getElementById("root");


    restaurants.forEach(restaurant => {
        const Card=document.createElement("div");
        Card.className="card";



const wrapper = document.createElement("div");
wrapper.className = "image-wrapper";

const image = document.createElement("img");
image.src = `Images/${restaurant.image}.jpeg`;

const off = document.createElement('p');
off.className = "off";
off.innerHTML = `${restaurant.offers}% OFF`;

wrapper.appendChild(image); 
wrapper.appendChild(off);   

Card.appendChild(wrapper); 
         // const image=document.createElement("img")
        // const off=document.createElement('p');
        // off.className="off";
        // off.innerHTML=`${restaurants.offers}% OFF`;
        
        // image.src = `Images/${restaurant.image}.jpeg`;
        // // Card.appendChild(off);

        const Card_content=document.createElement("div");
        Card_content.className="card-content";


        // CARD_HEADER

        const card_header=document.createElement("div");
        card_header.className="card-header";

        const h3=document.createElement('h3');
        h3.textContent=restaurant.name;
        const rate=document.createElement('span');
        rate.textContent=`${restaurant.rating}*`;
        rate.className="rating";
        card_header.appendChild(h3);
        card_header.appendChild(rate);




        // CARD_FOOTER
        const card_footer=document.createElement("div");
        card_footer.className="card-footer";
        const food=document.createElement("span");
        food.textContent=restaurant.food_type;
        const price=document.createElement("span");
        price.textContent=`₹${restaurant.price_for_two}`;
        price.className="price";
        card_footer.appendChild(food);
        card_footer.appendChild(price);





        // CARD_LOCATION
        const card_location=document.createElement("div");
        card_location.className="card-location";
        const location=document.createElement("span");
        location.textContent=restaurant.location;
        const distance=document.createElement("span");
        distance.className="distance";

        distance.textContent=`${restaurant.distance_from_Customer_house}km`;
        distance.calssName="distance";
        card_location.appendChild(location);
        card_location.appendChild(distance);


        Card_content.appendChild(card_header);
        Card_content.appendChild(card_footer);
        Card_content.appendChild(card_location);



        // Card.appendChild(image);
        Card.appendChild(Card_content);



        
        root.appendChild(Card);



    })
}
get_restaurant(restaurants);

document.getElementById("Alcohal").addEventListener('click',()=>{
    const result=restaurants.filter((obj)=>obj.alcohol);
    document.getElementById("root").innerHTML="";
    get_restaurant(result);
})

document.getElementById("Rating").addEventListener('click',()=>{
    const result=restaurants.filter((obj)=>obj.rating>=4.5);
    document.getElementById("root").innerHTML="";
    get_restaurant(result);

})

document.getElementById("Filters").addEventListener('click',()=>{
    document.getElementById("filterPopup").classList.remove("hidden");
    
})

document.getElementById("Offers").addEventListener('click',()=>{
    const result=restaurants.sort((a,b)=>b.offers-a.offers);
    document.getElementById("root").innerHTML="";
    get_restaurant(result);
})





document.getElementById("Apply").addEventListener('click',()=>{
    const element=document.querySelector('input[name="filterOption"]:checked');
    const answer=element.value;
    if(answer==="rating"){
        restaurants.sort((a,b)=>b.rating-a.rating);
    }
    else if(answer==="highlow"){
        restaurants.sort((a,b)=>b.price_for_two-a.price_for_two);
    }
    else if(answer==="lowhigh"){
        restaurants.sort((a,b)=>a.price_for_two-b.price_for_two);
    }
    else{
        restaurants.sort((a,b)=>a.distance_from_Customer_house-b.distance_from_Customer_house);
    }
    
    document.getElementById('root').replaceChildren();
    document.getElementById("filterPopup").classList.add("hidden");
   
    get_restaurant(restaurants);
})
// mine


function closePage() {
  document.getElementById("filterPopup").classList.add("hidden");
}

document.getElementById("close-btn").addEventListener('click',()=>{
   closePage();
})