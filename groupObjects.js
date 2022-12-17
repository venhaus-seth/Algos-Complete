
const objects = [
    {
        name: "Baby Yoda",
        category: "cute",
    },
    {
        name: "Cricket Protein",
        category: "food",
    },
    {
        name: "Shibe",
        category: "Cute",
    },
    {
        name: "Ancient India",
        category: "Cradle of Civilization",
    },
    {
        name: "Wasp Crackers",
        category: "Food",
    },
    {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
    },
];

const expected = {
    cute: [
        {
        name: "Baby Yoda",
        category: "cute",
        },
        {
        name: "Shibe",
        category: "Cute",
        },
    ],
    food: [
        {
        name: "Cricket Protein",
        category: "food",
        },
        {
        name: "Wasp Crackers",
        category: "Food",
        },
    ],
    "cradle of civilization": [
        {
        name: "Ancient India",
        category: "Cradle of Civilization",
        },
        {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
        },
    ],
};

/**
 * Creates a hash table of case-insensitive categories mapped to the items
 * belonging to that category.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items
 * @param {string} items.category
 * @returns {Object<string, Array<Object>>} The hash category hash table with
 *    string keys and array of objects as values.
 */
function groupObjects(items) {
    const resultObj = {}
    // for(const item of items) {
    //     const category = item.category.toLowerCase()
    //     resultObj[category] ? resultObj[category].push(item) : resultObj[category] = [item]
    // }
    items.forEach(item => {
        const category = item.category.toLowerCase()
        resultObj[category] ? resultObj[category].push(item) : resultObj[category] = [item]
    })
    return resultObj
}

console.log(groupObjects(objects))
/*****************************************************************************/