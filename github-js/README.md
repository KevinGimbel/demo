## github.js
#### A tiny Ajax & Github API helper

github.js provides a basic Ajax function that makes a call to the Github API - if it's user or organization and what you want to fetch is up to you.

NOTE: This is more of a showcase script than a "put in your project" thing.
You can learn from the code or help me improve it. :)

#### Options
````javascript
    # Everything behind "//" is the default
    useLoader: true or false                // true,
    loader: The loader                      // '[data-js="loader"]',
    output: container div for results       // '[data-js="repo--output"]',
    data_type: repos or members             // "repos",
    profile_type: users or orgs             // "users",
    name: Your name, this is the minimum
    failedText: when something goes wrong   // 'Unable to fetch repos from Github.',
    template: a HTML Template               // '<article class="repo">'+
                                               '<hgroup>'+
                                                 '<h3><a href="{html_url}">{name}</a></h3>'+
                                               '</hgroup>'+
                                               '<div class="repo--description">'+
                                                 '<p>{description}</p>'+
                                               '</div>'+
                                               '</article>'
    }
````
You can output whatever you want by taking a look at the JSON Response. If you want the count of watcher use `{watchers_count}` inside your template. Every value from the JSON Array can be outputted by using it's key with curly brackets in the template.

Below you can see an example using my Github Account and the following setup. 
````javascript
github({
        output: "[data-js='output']",
        profile_type: "users",
        name: "kevingimbel",
        data_type: "repos",
        useLoader: false
    });
````