let displayName = 'Jess';
let inventoryType = 'furniture';
let trackingNumber = '1234';
let createDate = new Date();
let originalCost = 425;
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "computer";
    InventoryItemType["Furniture"] = "furniture";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
let inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem(inventoryItem);
function clone(source) {
    const serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}
const cloned = clone(inventoryItem);
