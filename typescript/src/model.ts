type Name = number | string;

let displayName: Name = 'Jess';
let inventoryType: number | string = 'furniture';
let trackingNumber: any = '1234';
let createDate: Date = new Date();
let originalCost = 425 as number;

enum InventoryItemType {
    Computer = "computer",
    Furniture = "furniture"
}

interface InventoryItem {
    readonly displayName: string;
    // inventoryType: InventoryItemType;
    inventoryType: "computer" | "furniture";
    trackingNumber: any;
    createDate: Date;
    originalCost?: number; // optional

    addNote(note: string): string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
    return null;
}

function saveInventoryItem(item: object): void {
    
}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);

function clone<T>(source: T): T {
    const serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}

const cloned = clone(inventoryItem);

declare var Vue:any