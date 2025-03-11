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