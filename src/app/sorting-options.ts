import { Sorts } from './sort';

export const SORT_OPTIONS: Sorts[] = [
    {
        "id": 0,
        "name": "select sorting option",
        "key": "",
        "type" : "",
        "desc" : false
    },
   {
        "id": 1,
        "name": "Alphabetically, A-Z",
        "key": "title",
        "type" : "string",
        "desc" : false
    },{
        "id": 2,
        "name": "Alphabetically, Z-A",
        "key": "title",
        "type" : "string",
        "desc" : true
    },{
        "id": 3,
        "name": "Price, low to high",
        "key": "price",
        "type" : "number",
        "desc" : false
    },{
        "id": 4,
        "name": "Price, high to low",
        "key": "price",
        "type" : "number",
        "desc" : true
    }
];
