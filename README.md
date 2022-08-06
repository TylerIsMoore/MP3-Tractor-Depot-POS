# MP3-Tractor-Depot-POS

Tyler Moore's final Milestone Project, in which he attempts to recreate a retail POS.

## Routes
| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/login` | The login page |
| GET | `/register` | The register page after logging in |
| GET | `/help` | The Help Page (intentionally doesn't work) |
| GET | `/customer` | Assign a loyalty customer to the transaction |
| POST | `/new` | Adds a new customer into the system |
| GET | `/scan-book` | Lets the user look up an item to add to the transaction |

## Database

**items**

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| name | String |
| phone | Number |
| email | String |

**items**

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| desc | string |
| sku | Number |
| upc | Number |
| qty | Number |