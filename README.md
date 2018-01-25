# The 'You can do this' assignment
## Build an Angular application using a real JSON service

1) Generate your project
  a) include routing
2) Run the project
3) Change AppComponent html to include <router-outlet>
4) Create the user.ts class
5) Create the user.service.ts service
  a) Import Injectable, HttpClient, Observable, User
  b) Create url constant for http address
  c) Add service decorator
  d) Add class name and export
  e) Add default constructor
  f) Inject HttpClient using http property(variable)
6) Generate user-list and user-detail components in app/user folder
7) Wire up your app-routing
  a) Import UserListComponent & UserDetailComponent (Can copy imports from AppModule)
  b) Add route { path: '', redirectTo: '/users/list', pathMatch: 'full' }
  c) Add routes for UserListComponent and UserDetailComponent 
            { path: 'users/list', component: UserListComponent }
  d) Add route: { path: '**', component: ? }
8) Additions to AppModule
  a) Import FormsModule from @angular/forms
  b) Import HttpClientModule from @angular/common/http;
  c) Import UserService
  d) Add FormsModule to imports array
  e) Add HttpClientModule to imports array
  f) Add UserService to ? array
9) Modify the UserListComponent.ts
  a) Import UserService and User
  b) Inside the class, create a property for User[] (I called mine users)
  c) Inject the UserService into the component as UserSvc
  d) Inside ngOnInit()
    i) Create a console log message saying, "Getting user list ..."
    ii) Call the list() method of UserService subscribing to the data
            this.UserSvc.list()
              .subscribe(users => {
                this.users = users;
                console.log(users);
              })
10) Modify the UserListComponent.html
  a) Add a <table>
  b) Add ngFor on <tr> to iterate through users
  c) Concatenate the FirstName and LastName to get Full Name
  d) Use ternary operator to display Yes if booleans are true
11) Modify the UserDetailComponent.ts
  a) Import Router & ActivatedRouter from @angular/router
  b) Import UserService and User
  c) Create a property for an instance of User
  d) Inject UserService as UserSvc, Router as router, and 
      ActivatedRoute as route into the component
  e) Include the following code in ngOnInit:
          let id: string;
          this.route.params.subscribe(params => id = params["id"]);
          console.log("id is ", id);
          console.log("Getting user ...");
          this.UserSvc.get(id)
            .subscribe(user => this.user = user);
12) Modify UserDetailComponent.html
  a) Add <table>
  b) Add a row for each property of user
    i) Label in first column, data in the second column
  c) Concatenate the FirstName and LastName to get Full Name
  d) Use ternary operator to display Yes if booleans are true
