## Angular Questions

### What is scope?

Scope is an object that referse to the application model.

### What are modules?

Modules are containers for different parts of your app (controllers, services, filters, directives)

### What are directives?

Directives are markers on a DOM element that tell AngularJS’s HTML compiler ($compile) to attach specific behavior to that DOM element.  Angular comes with a variety of built in models (e.g. ngModel, ngClass, ngRepeat).  You can also create your own directives.  It’s good to create directives when you are going to be reusing an element often, across multiple pages

Angular normalizes element tag names but they are referred to in dash-delimited form in html.  It is best practice to add a two or three letter prefix to directives to avoid future naming conflicts

$compile can match directives based on: element names, attributes, class names and comments.  It is best to use directives via tag names and attributes.

Much like controllers, directives are registered on modules. Module.directive takes a directive name followed by a factory function which should return an object that tells $compile how the directive should behave when matched.

The factory function is invoked only once when the compiler matches the directive for the first time.

Common properties:
- restrict
- scope
- template
- templateUrl
- controller

The restrict option is typically set to:

- ‘A’ only matches attribute name
- ‘E’ only matches element name
- ‘C’ only matches class name
- ‘M’ comment

You should use an element when you are creating a component that is in control of the template.  Use an attribute when you are decorating an existing element with new functionality.

So that directives can be reused effectively, we want to create isolate scope (map outer scope to directive’s inner scope).  We can do this using a directive’s scope.  The scope option is an object that contains a property for each isolate scope binding.  The key corresponds to the directive’s isolate scope, the value tells $compile to bind a the data associated with a certain attribute.

Normally a scope prototypically inherits from its parents – an isolated scope does not.

Local Scope Properties

- @ access string values defined as attributes in the directive tag in the html.  This enables you to update values in directive when parent scope values change
- = creates two way data binding between the data in the isolate scope and the parent scope
- & pass in external function

### What is the link function in the directive?

The link function is where you add logic for manipulating the DOM.  Parameters are:
1. $scope
1. Element
1. Attributes
1. Controller
1. $transclude (optional)

### What does transclude do on directives?

The basic use case for transclusion is that you want to include content from another template.  If you set transclude: true in a directive, Angular grabs contents of the element and makes them available for us to attach somewhere in our template.  By doing so, we can access a fifth, transclude attribute in the link function.  Alternatively, you could pass $transclude as an attribute into the controller

Essentially, the contents of an element are slurped into a function that you can later call.  

You can also use ng-transclude to specify which div within the template you want the HTML content of a newly instantiated directive to be injected into.  This is the best way of doing it

### What is the digest cycle?

Angular offers two way data binding – data binding means that when you change something in the view, the scope model automatically updates, and vise versa.  Behind the scenes, Angular sets up a watcher on the scope model which, in turn, updates the view. 

Watchers are fired from the $digest cycle.  The $digest cycle starts as a result of a call to $scope.digest which automatically triggered by certain events (e.g. ng-click).

When a digest cycle runs, it doesn’t just loop once.  At the end of the current loop, it starts all over again to check if any of the models have changed.  This is called dirty checking and is done to account for any model changes that might have been done by listener functions.  The digest cycle keeps looping until there are no more model changes or it hits the max loop count of 10.   At a minimum it runs twice

Two remove data binding, use two colons:

    <div>{{::message}}</div>


### What is $scope.$apply?

If you change any model outside of the Angular context, then you need to inform Angular of the changes by calling $apply().  This function calls $rootScope.$digest() which triggers the digest cycle.  You can either put the function you want to change the scope within a $scope.$apply() function or you can put $scope.$apply() after the function. It is better to pass the function as argument though.

### What are the most commonly used out of the box directives?

- ng-app designate the root element of an angular application
- ng-bind replace text content of specified HTML element with the value of a given expression
- ng-class dynamically set class
- ng-controller attaches a controller class to the view
- ng-show shows element if expression is true
- ng-hide hides element if expression is true
- ng-repeat instantiates a template once per item from a collection

### What is state?

State corresponds to a place in the application in terms of the overall UI and navigation.  A state describes (through controller, view, etc.) what the UI looks like.  States often have things in common (e..g parent/child/nested states).

To add a state, add ``<ui-view>`` tag to html.  To activate a state, you can call $state.go() or include a link containing the ui-sref directive .

Tell me about a time you had problems with state on angular

### How to improve Angular performance issues?

- Minimize/avoid watchers
- Avoid ng-repeat (use limit with infinite scrolling) – especially when you are adding items but don’t need two way data binding
- Use bind once when possible {{::variable}}
- Use $watchCollection instead of $watch so that you only chck the first layer of object’s property
- Debounce ng-model  ensure that digest cycle won’t be triggered by this input model more than once per 250 ms
- Use ng-if instead of ng-show  ng-if actuall removes and re-creates element where ng-show creates it and sets display to none

### What do you like about Angular?  What do you dislike?

Like:
- Large community
- Many third party modules
- More learning resources available
- Includes template engine
- Two way data binding
- Easier to test

Dislike:
- Almost 7x the size of backbone
- Can be expensive (e.g. ng-repeat results in a  ton of  potentially unwanted data bindings)
- Putting logic in the view template makes it more difficult to test
- Sometimes can be tricky to know when to call $digest and when it is not necessary

### Why use a q promise as opposed to just returning $http’s promise?

Results in cleaner code without as many callbacks.  Instead of having callbacks, return function().then(response).  You can handle errors by using throw.  You can use $q.all to return the results of several promises all at once.

### What does $resource do?

Resource is a factory that creates a resource object that lets you interact with RESTful server-side data source

### What are config and run?

Angular runs your application in two phases: config and run.  The config phase is where you set up any providers as necessary.  This is also where directives, controllers, filters, etc. get set up.

The run phase is where Angular actually compiles your DOM and starts up your app.  

### What is $provide?

It’s a service that tells Angular how to recreate new injectable things (other services).  It is actually responsible for creating instances of our services using the code we provide via $provide.  factory,  provider and value are all just shortcuts to define various parts of a provider.
