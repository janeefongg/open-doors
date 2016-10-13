# Developer Documentation

## Back-end Custom RESTful API Documentation

### Auth

```
/api/auth/signin {POST}
  Expected Body:
    email   : STRING
    password: STRING
  
/api/auth/signup {POST}
  Expected Body:
    username: STRING
    email   : STRING
    password: STRING
```

### Companies

Retrieving a list of companies:

```
/api/companies {GET}
  Expected Query Params:
    N/A
  Expected Response:
    success: BOOLEAN
    result : ARRAY<OBJECT>
```
