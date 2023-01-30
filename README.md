# INTEGRANTES
## GRUPO 5
- FIGUEROA PEÑARRIETA JONATHAN
- FLORES LOPEZ DENNYS
- HINOJOSA BAYON OMAR

# SERVICIOS

### Servicios de Productos(requiere token)

| SERVICIO      | url           | tipo          |      body        | 
| ------------- | ------------- | ------------- | ------------- |
| Listar Productos  | localhost:3000/api/v1/product  | GET |  |
| Obtener un Producto  | localhost:3000/api/v1/products/:id  | GET |  |
| Registrar Productos  | localhost:3000/api/v1/product  | POST |  { "name":"producto 1",  "price":2,  "inventory": 34, "unit":"caja"} | 
| Modificar Productos  | localhost:3000/api/v1/product/:id  | PUT |  { "name":"producto 1",  "price":2,  "inventory": 34, "unit":"caja"} |
| Eliminar Productos  | localhost:3000/api/v1/product/:id  | DELETE |   |

### Servicios de Usuarios(requiere token)

| SERVICIO      | url           | tipo          |      body        | 
| ------------- | ------------- | ------------- | ------------- |
| Listar Usuarios  | localhost:3000/api/v1/users  | GET |  |
| Obtener un Usuario  | localhost:3000/api/v1/users/:id  | GET |  |
| Registrar Usuarios  | localhost:3000/api/v1/users  | POST |  { "firstName":"Nombre 4", "lastName" : "Apellido 4", "email":"prueba4@gmail.com",  "password":"password" } | 
| Modificar Usuarios  | localhost:3000/api/v1/users/:id  | PUT |  { "firstName":"Nombre 4", "lastName" : "Apellido 4", "email":"prueba4@gmail.com",  "password":"password" } |
| Eliminar Usuarios  | localhost:3000/api/v1/users/:id  | DELETE |   |

### Servicios de Auth(No requiere token)

| SERVICIO      | url           | tipo          |      body        | 
| ------------- | ------------- | ------------- | ------------- |
| Login  | localhost:3000/api/v1/auth/login  | POST | { "email":"prueba3@gmail.com", "password":"password" } |
| Signup  | localhost:3000/api/v1/auth/signup  | POST | { "firstName":"Nombre 3", "lastName" : "Apellido 3", "email":"prueba3@gmail.com",  "password":"password"} |

### Servicios de Shopping Card(requiere token)

| SERVICIO      | url           | tipo          |      body        | 
| ------------- | ------------- | ------------- | ------------- |
| Listar Carritos  | localhost:3000/api/v1/cart/  | GET |  |
| Obtener un Carrito(usuario de token)  | localhost:3000/api/v1/cart/user  | GET |  |
| Agregar al carrrito(usuario de token)   | localhost:3000/api/v1/cart/product  | POST | { "products":[ { "productId":"63d740644e58ae272219eb99",  "quantity":2, "price":1 } ] } | 
| Eliminar producto del carrito(usuario de token)  | localhost:3000/api/v1/cart/product/:id  | DELETE |   |
| Pagar Compra(usuario de token)  | localhost:3000/api/v1/cart/pay  | POST |   |
