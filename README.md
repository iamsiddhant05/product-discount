# **Product-Discount-Sample**


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```
- Add `.env` with values for variable in `.env.example`
- Run migrations.
```bash
$ yarn typeorm:run
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```
## API Details
- To create an user
```js
POST http://localhost:3001/user
{
    "name": "Siddhant"
}
```

- To get the product list
```js
GET http://localhost:3001/product
```
- To delete/deactivate a product
```js
DELETE http://localhost:3001/product/:productId
```

- To update cart
```js
POST http://localhost:3001/cart
{
    "user": "ea1bb3a8-1d49-4dbe-b5e3-3360bd4cf3f9",
    "product": "03d02acb-1d40-432d-b2b2-b062b0a4a7a7",
    "qty": 1 // can be negative if you want to remove from cart
}
```

- To get the cart details for a user
```js
GET http://localhost:3001/cart/:userId
```

- To get the final list of products in cart with item-wise discount and min value discount on the total
```js
GET http://localhost:3001/cart/checkout/:userId
```