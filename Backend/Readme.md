# User Registration API Documentation

## Register User
Endpoint to register a new user in the system.

### Endpoint Details
- **URL**: `/users/register`
- **Method**: `POST`
- **Content-Type**: `application/json`

### Request Body
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "password": "string"
}

Validation Rules
fullname.firstname: Required, minimum 3 characters
fullname.lastname: Optional, minimum 3 characters if provided
email: Required, unique, minimum 5 characters, must be valid email format
password: Required, minimum 6 characters
Responses
Success Response
Status Code: 201 Created



Response Body:
{
    "token": "jwt_token_string",
    "user": {
        "_id": "user_id",
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "socketId": null
    }
}

Error Response
Status Code: 400 Bad Request
Response Body:

{
    "errors": [
        {
            "msg": "Invalid Email",
            "param": "email",
            "location": "body"
        }
    ]
}

Example Request

{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}


# User Registration API Documentation

// ...existing code...

## Login User
Endpoint to authenticate an existing user.

### Endpoint Details
- **URL**: `/users/login`
- **Method**: `POST`
- **Content-Type**: `application/json`

### Request Body
```json
{
    "email": "string",
    "password": "string"
}
```

### Validation Rules
- `email`: Required, must be valid email format
- `password`: Required, minimum 6 characters

### Responses

#### Success Response
- **Status Code**: `200 OK`
- **Response Body**:
```json
{
    "token": "jwt_token_string",
    "user": {
        "_id": "user_id",
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "socketId": null
    }
}
```

#### Error Response
- **Status Code**: `401 Unauthorized`
- **Response Body**:
```json
{
    "message": "Invalid email or password"
}
```

### Example Request
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}


# Captain API Documentation

## Register Captain
Endpoint to register a new captain (driver) in the system.

### Endpoint Details
- **URL**: `/captains/register`
- **Method**: `POST`
- **Content-Type**: `application/json`

### Request Body
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicleType": "string"
    }
}
```

### Validation Rules
- `fullname.firstname`: Required, minimum 3 characters
- `fullname.lastname`: Optional, minimum 3 characters
- `email`: Required, unique, valid email format
- `password`: Required, minimum 6 characters
- `vehicle.color`: Required, minimum 3 characters
- `vehicle.plate`: Required, minimum 3 characters
- `vehicle.capacity`: Required, minimum value of 1
- `vehicle.vehicleType`: Required, must be one of: ['car', 'motorcycle', 'auto']

### Responses

#### Success Response
- **Status Code**: `201 Created`
- **Response Body**:
```json
{
    "token": "jwt_token_string",
    "captain": {
        "_id": "captain_id",
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "status": "inactive",
        "vehicle": {
            "color": "string",
            "plate": "string",
            "capacity": 1,
            "vehicleType": "car"
        },
        "socketId": null,
        "location": {
            "lat": null,
            "lng": null
        }
    }
}
```

#### Error Responses
- **Status Code**: `400 Bad Request`
- **Validation Error**:
```json
{
    "errors": [
        {
            "msg": "Invalid Email",
            "param": "email",
            "location": "body"
        }
    ]
}
```

- **Duplicate Email Error**:
```json
{
    "message": "Captain already exists"
}
```

### Example Request
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Driver"
    },
    "email": "john.driver@example.com",
    "password": "password123",
    "vehicle": {
        "color": "Black",
        "plate": "ABC-123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```
### Example Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY3ZDNhMTJmNDhlMTIzNDU2Nzg5YWIiLCJpYXQiOjE3MTA2NzY4OTd9.xxx",
    "captain": {
        
        "fullname": {
            "firstname": "John",
            "lastname": "Driver"
        },
        "email": "john.driver@example.com",
        "status": "inactive",
        "vehicle": {
            "color": "Black",
            "plate": "ABC-123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "socketId": null,
        "location": {
            "lat": null,
            "lng": null
        },
      "_id": "65f7d3a12f48e123456789ab",
    }
}
```


# Captain API Documentation

## 1. Register Captain
Endpoint to register a new captain (driver).

### POST /captains/register
- **Content-Type**: `application/json`

### Request Body
```json
{
    "fullname": {
        "firstname": "string", // required, min 3 characters
        "lastname": "string"   // optional, min 3 characters if provided
    },
    "email": "string",        // required, unique, valid email format
    "password": "string",     // required, min 6 characters
    "vehicle": {
        "color": "string",    // required, min 3 characters
        "plate": "string",    // required, min 3 characters
        "capacity": 4,        // required, min 1
        "vehicleType": "car"  // required, enum: ['car', 'motorcycle', 'auto']
    }
}
```

### Success Response - 201 Created
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // JWT token
    "captain": {
        "_id": "65f7d3a12f48e123456789ab",
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "status": "inactive", // default status
        "vehicle": {
            "color": "string",
            "plate": "string",
            "capacity": 1,
            "vehicleType": "car"
        },
        "socketId": null,     // used for real-time updates
        "location": {         // captain's current location
            "lat": null,
            "lng": null
        }
    }
}
```

## 2. Login Captain
Authenticate existing captain.

### POST /captains/login
- **Content-Type**: `application/json`

### Request Body
```json
{
    "email": "string",    // required, valid email
    "password": "string"  // required, min 6 characters
}
```

### Success Response - 200 OK
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
        "_id": "65f7d3a12f48e123456789ab",
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "status": "inactive",
        "vehicle": {
            "color": "string",
            "plate": "string",
            "capacity": 1,
            "vehicleType": "car"
        },
        "socketId": null,
        "location": {
            "lat": null,
            "lng": null
        }
    }
}
```

## 3. Get Captain Profile
Get authenticated captain's profile.

### GET /captains/profile
- **Headers**: 
  - `Authorization`: Bearer <token>

### Success Response - 200 OK
```json
{
    "captain": {
        "_id": "65f7d3a12f48e123456789ab",
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "status": "inactive",
        "vehicle": {
            "color": "string",
            "plate": "string",
            "capacity": 1,
            "vehicleType": "car"
        },
        "socketId": null,
        "location": {
            "lat": null,
            "lng": null
        }
    }
}
```

## 4. Logout Captain
Logout and invalidate current token.

### GET /captains/logout
- **Headers**: 
  - `Authorization`: Bearer <token>

### Success Response - 200 OK
```json
{
    "message": "Logged Out Successfully"
}
```