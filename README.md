
![thumbnail](https://user-images.githubusercontent.com/69359301/236298487-66c155d8-ec60-417c-804d-348255f9c4da.png)

# create-expressapi-boilerplate is a boilerplate to launch your express project in seconds with a built-in authentication system.

## First Step:

copy and paste this command into your terminal

```
npx create-expressapi-boilerplate@latest <project-name>
```

you replace project-name with the name you want

this is the result you will get


![stepOne](https://user-images.githubusercontent.com/69359301/236296732-20a05e5d-7d63-4f28-9306-a512c83ca076.png)



## Second Step:

then you will have a sub-folder with the name of your project in my case is "my-app", and you access it by using this command:

```
cd my-app
```

then open your code editor in my case is visual studio code:

```
code .
```

after opening vs code, your starter template will look like this:


![setpTwo](https://user-images.githubusercontent.com/69359301/236297002-0eda3a5b-7214-4d44-abcb-81fef8994fac.png)


## Third Step:

Now you have to install the necessary dependencies by opening the integrated terminal in vs code and using this command

```
npm i
```

this is the expected result:


![stepThird](https://user-images.githubusercontent.com/69359301/236297083-115b3e19-8dd8-41e2-9706-773d523b06b6.png)


then the project structure will look like this:

![stepFourth](https://user-images.githubusercontent.com/69359301/236297216-ec279f64-e637-46b0-891e-89204ee07afa.png)


## Fourth Step:

now in your root project folder create a file called "config.env" and paste into it this code

```
MONGODB_URI = mongodb+srv://username:password@cluster0.test.mongodb.net/test

SECRET_JWT = Gju!hWLSLPIN6%$5q1P1K7\*3qGoP6hdhhdehdhdhhdndbbebgygddhdehd
JWT_EXPIRES_IN = 1d
JWT_COOKIE_EXPIRES_IN = 1

```

the only variables you gonna change are MONGODB_URI and SECRET_JWT.

You have to change SECRET_JWT to another long string, the more complicated is it the more safe your authentication system is safe (Note: you have to make sure that no one has access to your SECRET_JWT )

you can get MONGODB_URI in your mongodb account, in order to get it you browse your project in Mongodb:

![stepFifth](https://user-images.githubusercontent.com/69359301/236297241-375f3d4f-f85f-4904-93e5-fbdd627c0a8f.png)


and click connect

![stepSixth](https://user-images.githubusercontent.com/69359301/236297300-8bc72e89-212e-437d-856c-518b982bda29.png)


choose the "VS code" option to get your connection string

## Final Step:

enter this command

```
npm start
```

expected result:

![finalStep](https://user-images.githubusercontent.com/69359301/236297605-043ff53c-7efa-4533-9c01-ffb91cee7cda.png)


go to Postman to test your endpoints

login: http://localhost:5000/api/v1/users/login

![login](https://user-images.githubusercontent.com/69359301/236297626-43861f15-2cf8-48fe-bcd1-c154226d1b1e.png)


signup: http://localhost:5000/api/v1/users/signup

![signup](https://user-images.githubusercontent.com/69359301/236297652-e34a9d7d-07a7-4446-a284-879a0e553799.png)

