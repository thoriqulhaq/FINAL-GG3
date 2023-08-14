# TOKOPEDIA PLAY CLONE (BE)

  

The objective for the mid-term project within Generasi Gigih 3.0 is to craft an interactive live shopping platform. This platform's primary purpose is to facilitate user engagement during live shopping events, providing them with opportunities to explore diverse product offerings and actively participate by sharing comments throughout the live sessions.


&nbsp;
&nbsp;
&nbsp;
&nbsp;

## - Setting Up Project -

&nbsp;
  

Clone Project

  

```bash
git clone https://github.com/thoriqulhaq/MIDTERM-GG3.git
```

  &nbsp;

Initialize ENV File

  

```bash
mv .env.example .env
```

  &nbsp;

Install Dependencies

  

```bash
npm install
```

  &nbsp;

Start the server

  

```bash
npm run dev
```

  
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;

## - Database Structure - 

&nbsp;

  

![Alt text](/assets/database-structure.png)

  

Entity reference in the database



- One video can have one or many comments

  

- One video can have one or many products

  
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## - Api Structure -

  &nbsp;

The application serves as a crucial link between clients and the API, managing various API requests through distinct routes. Each route specifies a unique URL path and HTTP method (GET, POST, PUT, DELETE), determining the action to be executed on the server.

Before carrying out any actions, incoming requests are intercepted and processed by middleware functions. These middleware functions fulfill various roles, including validation checks to ensure that user inputs adhere to specific criteria or requirements.

After successful validation through middleware, the requests are handled by two main components: the controller and the service layer.

The controller acts as a mediator for user requests and generates appropriate responses. It receives incoming requests from clients and communicates with the service layer to perform the necessary operations. The controller does not contain business logic but coordinates the flow of data between clients and the service layer. Once the service layer processes the data, the controller formats it into JSON and sends it back as a response to the client.

The service layer is where the core business logic resides. It consists of functions that implement the application's business rules, perform computations, and coordinate data processing. When the controller calls a function from the service layer, the service layer executes essential business logic operations on the input data.

By organizing the application into separate controller and service layers, it becomes easier to manage and scale the project, promoting modularity and maintainability. The controller handles user interactions and communication, while the service layer focuses on the underlying business logic and data processing, ensuring a clear separation of concerns.

&nbsp;
&nbsp;
&nbsp;
&nbsp;

## - API Reference -

  &nbsp;

###  1. &nbsp; Video

  &nbsp;
  

```
{
	_id: string
	title: string
	thumbnail: string
	embeddedUrl: string
	createdAt: timestamp
	updatedAt: timestamp
}
```

  &nbsp;  

### GET Method (api/v1/video)

  

Get All Video
&nbsp;  
&nbsp;  

####  **Request :**

**Query Param**

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `page`    | `integer`| Number of pagination. (Optional)|
| `limit`   | `integer`| Number of results every page. (Optional)|
  
&nbsp;  
#### **Response :**

  

```
{
    "meta": {
        "code": 200,
        "status": "Success",
        "message": "All video successfully retrieved"
    },
    "data": {
        "docs": [
            {
                "_id": "string",
                "title": "string",
                "thumbnail": "string",
                "embeddedUrl": "string",
                "createdAt": "timestamp",
                "updatedAt": "timestamp",
            }
        ],
        "totalDocs": 0,
        "limit": 0,
        "totalPages": 0,
        "page": 0,
        "pagingCounter": 0,
        "hasPrevPage": false,
        "hasNextPage": false,
        "prevPage": null,
        "nextPage": null
    }
}
```

  &nbsp;  
  &nbsp;  
  &nbsp;  
  &nbsp;  

### GET Method (api/v1/video/:id)

Get Video

&nbsp;  

####  **Request :**
**Path Param**

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `id`    | `string`| Unique ID of Video. (Required)|


  &nbsp;  
#### **Response :**

```
{
    "meta": {
        "code": 200,
        "status": "Success",
        "message": "Video with id ${id} successfully retrieved"
    },
    "data": {
        "docs": {
			"_id": "string",
			"title": "string",
			"thumbnail": "string",
			"embeddedUrl": "string",
			"createdAt": "timestamp",
			"updatedAt": "timestamp",
		},
        "totalDocs": 0,
        "limit": 0,
        "totalPages": 0,
        "page": 0,
        "pagingCounter": 0,
        "hasPrevPage": false,
        "hasNextPage": false,
        "prevPage": null,
        "nextPage": null
    }
}
```

  &nbsp;  
  &nbsp;  
  &nbsp;  
  &nbsp;  

### POST Method (api/v1/video)

Add Video

 &nbsp;    
####  **Request :**
**Body Param**

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `title`    | `string`| Title of video. (Required)|
| `thumbnail`    | `string`| Thumbnail of video. (Required)|
| `embeddedUrl`    | `string`| Embedded URL of video. (Required)|


  &nbsp;  
#### **Response :**


```
{
    "meta": {
        "code": 200,
        "status": "Success",
        "message": "New video successfully added"
    },
    "data": {
		"_id": "string",
		"title": "string",
		"thumbnail": "string",
		"embeddedUrl": "string",
		"createdAt": "timestamp",
		"updatedAt": "timestamp",
    }
}
```

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

### 2. &nbsp; Product

```
{
    _id: string,
    videoId: string,
    name: string,
    price: integer,
    link: string,
    createdAt: timestamp,
    updatedAt: timestamp,
}
```

&nbsp;  
&nbsp;  

### GET Method (api/v1/product)

Get All Products
&nbsp;  
&nbsp;  

#### **Request:**

**Query Param**

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `page`    | `integer`| Number of pagination. (Optional)|
| `limit`   | `integer`| Number of results every page. (Optional)|
| `videoId`   | `string`| Filter based on videoId. (Optional)|

&nbsp;  
#### **Response:**

```
{
    "meta": {
        "code": 200,
        "status": "Success",
        "message": "All products successfully retrieved"
    },
    "data": {
        "docs": [
            {
                "_id": "string",
                "videoId": "string",
                "name": "string",
                "price": "integer",
                "link": "string",
                "createdAt": "timestamp",
                "updatedAt": "timestamp",
            }
        ],
        "totalDocs": 0,
        "limit": 0,
        "totalPages": 0,
        "page": 0,
        "pagingCounter": 0,
        "hasPrevPage": false,
        "hasNextPage": false,
        "prevPage": null,
        "nextPage": null
    }
}
```

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

### GET Method (api/v1/product/:id)

Get Product

&nbsp;  

#### **Request:**

**Path Param**

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `id`      | `string` | Unique ID of the Product. (Required)|


&nbsp;  
#### **Response:**

```
{
    "meta": {
        "code": 200,
        "status": "Success",
        "message": "Product with id ${id} successfully retrieved"
    },
    "data": {
        "docs": {
            "_id": "string",
            "videoId": "string",
            "name": "string",
            "price": "integer",
            "link": "string",
            "createdAt": "timestamp",
            "updatedAt": "timestamp",
        },
        "totalDocs": 0,
        "limit": 0,
        "totalPages": 0,
        "page": 0,
        "pagingCounter": 0,
        "hasPrevPage": false,
        "hasNextPage": false,
        "prevPage": null,
        "nextPage": null
    }
}
```

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

### POST Method (api/v1/product)

Add Product

&nbsp;    

#### **Request:**

**Body Param**

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `videoId` | `string` | ID of the video to which the product belongs. (Required)|
| `name`    | `string` | Name of the product. (Required)|
| `price`   | `integer"| Price of the product. (Required)|
| `link`    | `string` | Link to the product. (Required)|


&nbsp;  
#### **Response:**

```
{
    "meta": {
        "code": 200,
        "status": "Success",
        "message": "New product successfully added"
    },
    "data": {
        "_id": "string",
        "videoId": "string",
        "name": "string",
        "price": "integer",
        "link": "string",
        "createdAt": "timestamp",
        "updatedAt": "timestamp",
    }
}
```

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  


### 3. &nbsp; Comment

```
{
    _id: string,
    videoId: string,
    username: string,
    message: string,
    createdAt: timestamp,
    updatedAt: timestamp,
}
```

&nbsp;  
&nbsp;  
### GET Method (api/v1/comment)

Get All Comments
&nbsp;  
&nbsp;  

#### **Request:**

**Query Param**

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `page`    | `integer`| Number of pagination. (Optional)|
| `limit`   | `integer`| Number of results every page. (Optional)|
| `videoId`   | `string`| Filter based on videoId. (Optional)|

&nbsp;  
#### **Response:**

```
{
    "meta": {
        "code": 200,
        "status": "Success",
        "message": "All comments successfully retrieved"
    },
    "data": {
        "docs": [
            {
                "_id": "string",
                "videoId": "string",
                "username": "string",
                "message": "string",
                "createdAt": "timestamp",
                "updatedAt": "timestamp",
            }
        ],
        "totalDocs": 0,
        "limit": 0,
        "totalPages": 0,
        "page": 0,
        "pagingCounter": 0,
        "hasPrevPage": false,
        "hasNextPage": false,
        "prevPage": null,
        "nextPage": null
    }
}
```

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

### GET Method (api/v1/comment/:id)

Get Comment

&nbsp;  

#### **Request:**

**Path Param**

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `id`      | `string` | Unique ID of the Comment. (Required)|


&nbsp;  
#### **Response:**

```
{
    "meta": {
        "code": 200,
        "status": "Success",
        "message": "Comment with id ${id} successfully retrieved"
    },
    "data": {
        "docs": {
            "_id": "string",
            "videoId": "string",
            "username": "string",
            "message": "string",
            "createdAt": "timestamp",
            "updatedAt": "timestamp",
        },
        "totalDocs": 0,
        "limit": 0,
        "totalPages": 0,
        "page": 0,
        "pagingCounter": 0,
        "hasPrevPage": false,
        "hasNextPage": false,
        "prevPage": null,
        "nextPage": null
    }
}
```

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

### POST Method (api/v1/comment)

Add Comment

&nbsp;    

#### **Request:**

**Body Param**

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `videoId` | `string` | ID of the video to which the comment belongs. (Required)|
| `username`| `string` | Username of the commenter. (Required)|
| `message` | `string` | Comment message. (Required)|


&nbsp;  
#### **Response:**

```
{
    "meta": {
        "code": 200,
        "status": "Success",
        "message": "New comment successfully added"
    },
	 "data": {
        "_id": "string",
        "videoId": "string",
        "username": "string",
        "message": "string",
        "createdAt": "timestamp",
        "updatedAt": "timestamp",
    }
}
```


