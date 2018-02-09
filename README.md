# Angular project to read C#/MVC/WebAPI/SQL Server backend

Follow the steps to build the Angular app.

    1. Create the project named *angular-to-webapi* and include routing
    2. in app.module.ts
      2.1. Import FormsModule and add to appropriate decorator key
      2.2. Import HttpClientModule and add to appropriate decorator key 
    3. Create the following folders under the *app* folder
      3.1. Create a folder named *model* under *app* folder
      3.2. Create a folder named *service* under *app* folder
      3.3. Create a folder named *user* under *app* folder
    4. Generate a *class* file named *user.ts* in the *user* folder
    5. Create the class *User* in the *user.ts* file with the following properties and methods (make sure you export it)
      5.1. ID: number;
      5.2. UserName: string;
      5.3. Password: string;
      5.4. FirstName: string;
      5.5. LastName: string;
      5.6. Phone: string;
      5.7. Email: string;
      5.8. IsReviewer: boolean;
      5.9. IsAdmin: boolean;
      5.10. Add a constructor to the *User* class that initializes all properties
    6. Create the service *user.service.ts* in the *app/service* folder
    7. Add an import and appropriate decorator key for *user.service.ts* to *app.module.ts*.
    8. Make the following changes in *user.service.ts*:
      8.1. Add an import for *HttpClient* from *@angular/common/http*
      8.2. Add an import for *Observable* from *rxjs/Observable*
      8.3. Add an import for *User* from *app/model/user* (user relative path!)
      8.4. Inject *UserService* into the class as *UserSvc*
      8.5. Create a function in the class named *list()* that returns a type of *Observable<User[]>*
      8.6. In the body of the *list()* function
        8.6.1. Make a call to the *get(..)* function of the *UserSrv* passing the following url 'http://prs.doudsystems.com/Users/List'. Return the result of this function call as *Observable<User[]>*
