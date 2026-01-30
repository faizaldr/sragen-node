1. akses folder :

    cd 05-api-lapor-sragen

2. init projek :

    npm init 

    (Enter hingga selesai)

3. install package :
    
    npm install express jsonwebtoken sequelize mysql2 bcrypt

    npm install joi

    npm install --save-dev nodemon

    # express framework: web server
    # jsonwebtoken: token authentication generator
    # sequelize: ORM (Object Relational Mapping), memetakan objek DB dengan Pemrograman

4. package.json :
    "main": "app.js",
    # "scripts": {
        "start":"node server.js",
        "dev":"nodemon server.js",

5. jalankan :
    npm run dev

6. akses :
    http://localhost:3000

7. Database MySQL db : diskominfo_sragen