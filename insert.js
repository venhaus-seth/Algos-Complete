const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

function insert(tableName, columnValuePairs) {
    const keysarray = [];
    const valuearray = [];
    for (key in columnValuePairs) {
        keysarray.push(key);
        if (typeof columnValuePairs[key] === "string") {
            valuearray.push('"' + columnValuePairs[key] + '"');
        } else {
            valuearray.push(columnValuePairs[key]);
        }
    }
    return `"INSERT INTO ${tableName} (${keysarray}) VALUES (${valuearray});"`;
}
console.log(insert(table, insertData2));

const insertFunctional = (tableName, columnValuePairs) => { 
    return `"INSERT INTO ${tableName} (${Object.keys(columnValuePairs)}) VALUES (${Object.values(columnValuePairs).map((value, idx) => {return typeof value[idx] === "string" ? '"' + value + '"'  : value})})";`
}

console.log(insertFunctional(table, insertData2));