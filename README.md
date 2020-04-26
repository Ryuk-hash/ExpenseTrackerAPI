# Expense Tracker API

A simple app that tracks expenses for the respective user. | NodeJS + Express +MongoDB |

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

First of all, simply clone/download the project to your local machine location.

### Prerequisites

#### Recommended IDE: 
VSCode  
Others: Atom, Sublime or simply choose as per your comfortability and experience.  

#### Knowledge: 
 Scripting: NodeJS  
 Database: SQL or NoSQL [Used here: MongoDB]  
 Hosting [Optional]: AWS or GCP or you can host it on the local machine as well. [Used here: Atlas for hosting on AWS]  

```
 https://nodejs.dev
```

### Installing

A step by step series of examples that tell you how to get a development env running.

#### Installing dependencies:
If you are using VSCode pop up the terminal (Ctrl + \`) and make sure you're in the correct folder directory [final-expense-tracker] (if for some reason you are not, use 'cd + <dir-name>' to visit the required directory).  

```
npm i(nstall)
```
Now comes to your preference of hosting (as mentioned above I am using Atlas). I will be using Atlas to create a cluster which after successful hosting will contain all my database records and it has several functionalities like you can manually edit/delete your documents, create new collections, create an entire database. You can link a normal local-hosted database as well.   

Basically the following details need to be used in order to successfully establish a connection with Atlas:  
  
P.S: I'll not be including my account details here (duh), you will have to create your own account. Please watch a tutorial if you don't know how.  
```
serviceID: '',  
accountSID: '',  
authToken: '',  
dataBase: '',  
dataBasePassword: ''  
```
  
After all the dependencies are installed and database link established and npm start (following message will be visible in console if successful) - then run the following command and a database-established message will be display (if it's not, there was some problem).  


```
>> npm start  
App running on port: 3000
DB Connection Successful!
```  
  
## Running the tests

API Testing was done using Postman software. It's a very handy and useful tool, very easy to use once you get the hang of it.  
  
<p align="center">
 <b>Test-Collections:</b>
 <br>
 Categories<br>Expenses<br>User<br>PhoneAuth
 <br><br>
</p>

These above test-collections were created. In them, several http calls (GET, POST, PATCH, DEL) were made to specific routes as defined in the code.  
  
As an example, one of them to display the list of all expenses is as follows:  
  
<p align="center">
  <img alt="ReturnsAllExpensesFromDatabase" width="800" height="400" src="/public/images/returnExpenses.png">
</p> 
  
### Filtering inclusive

One of the features in this API is that we can make API Testing calls for the parameters (e.g: >, <, >=, <=) and these parameters are included in the postman <route> tab on which the request is being made. As an example of parametric fetching results from the database:   
<p align="center">
  <img alt="ReturnsParametricExpensesFromDatabase" width="800" height="400" src="/public/images/parametricExpenses.png">
</p>  
     
## Built With

* [NodeJS](https://nodejs.org/en/download/) - JavaScript Runtime Environment
* [Express](https://nodejs.org/en/download/) - Web Application Framework
* [VSCode](https://code.visualstudio.com/download) - IDE
* [MongoDB: ](https://www.mongodb.com/download-center/community) - Database /NoSQL/
* [Hosting on Atlas (cloud service): ](https://www.mongodb.com/cloud/atlas ) - Cloud Database
* [Postman: ](https://www.postman.com) - API Testing
* [Optional] [GUI for MongoDB: ](https://www.mongodb.com/products/compass) - Software i.e. GUI version for MongoDB


## Authors

* **Mandeep Singh** - [Ryuk-hash](https://github.com/ryuk-hash)
