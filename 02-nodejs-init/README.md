1. folder baru : 02-nodejs-init
2. akses folder :
    cd ..\02-nodejs-init

3. init projek :
    npm init

    [enter hingga selesai]

4. tambahkan pada package.json:
    // setelah "scripts": { :
    "start" : "node index.js",

5. buat file index.js :
    console.log ("app is running")

6. jalankan :  
    node index.js
    npm start

7. install nodemon untuk menjalankan service node js tanpa berhenti :
    npm install --save-dev nodemon

    // uninstall
    npm uninstall nodemon

8. jalankan mode development :
    npm run dev

9. menghentikan service (cancel):
    Ctrl + c

10. di production :
    npm i

11. install express :
    npm install express

    // npm install akan menjadikan dependency berada di level "dependencies" sehingga ketika build akan terakses juga

