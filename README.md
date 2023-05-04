# create-expressapi-boilerplate is a boilerplate to launch your express project in seconds with a built-in authentication system.

## First Step:

copy and paste this command into your terminal

```
npx create-expressapi-boilerplate@latest <project-name>
```

you replace project-name with the name you want

this is the result you will get

Second Step:

then you will have a sub-folder with the name of your project in my case is "my-app", and you access it by using this command:

```
cd my-app
```

then open your code editor in my case is visual studio code:

````
code .
```


after opening vs code, your starter template will look like this:

Third Step:

Now you have to install the necessary dependencies by opening the integrated terminal in vs code and using this command

```
npm i
```


this is the expected result:

then the project structure will look like this:

Fourth Step:

now in your root project folder create a file called "config.env" and paste into it this code

````

MONGODB_URI = mongodb+srv://username:password@cluster0.test.mongodb.net/test

SECRET_JWT = Gju!hWLSLPIN6%$5q1P1K7\*3qGoP6hdhhdehdhdhhdndbbebgygddhdehd
JWT_EXPIRES_IN = 1d
JWT_COOKIE_EXPIRES_IN = 1

```


the only variables you gonna change are MONGODB_URI and SECRET_JWT.

You have to change SECRET_JWT to another long string, the more complicated is it the more safe your authentication system is (Note: you have to make sure that no one has access to your SECRET_JWT )

you can get MONGODB_URI in your mongodb account, in order to get it you browse your project in Mongodb:

and click connect

choose the "VS code" option to get your connection string

Final Step:

enter this command

```

npm start

```


expected result:

go to Postman to test your endpoints

login: http://localhost:5000/api/v1/users/login

signup: http://localhost:5000/api/v1/users/signup


```
