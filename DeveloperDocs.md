# Developer Documentation

## Back-end Custom RESTful API Documentation

### Auth

```
/api/auth/signin {POST}
  Expected Body
    email   : STRING
    password: STRING
  
/api/auth/signup {POST}
  Expected Body
    username: STRING
    email   : STRING
    password: STRING
```

### Companies

Retrieving a company or list of companies:

```
/api/companies {GET}
  Optional Query Params
    id  : company id
    name: company name
  Expected Response
    success: BOOLEAN
    result : ARRAY<OBJECT>
```

Creating a new company:

```
/api/companies {POST}
  Expected Body
    name   : STRING
    address: STRING
```
