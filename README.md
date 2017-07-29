# DataStore class
This class is used to provide your classes and functions a common place to store, and retrieve, data.

It has two ways to set data, you can either include them as a object when initializing the `new DataStore({data: "example"})`, or you can use the `DataStore.AddContent({data: "example"})` method.

To retrieve data, use the `DataStore.GetContent()` method, which will return the entire DataStore.

## Example of usage
### File A

Here we set the title to be example
```js
import DataStore from 'data-store';

class ClassA {
    constructor() {
        this.ds = new DataStore({
            title: "Example"
        });
    }
}
```

Here we retrieve the title from datastore, and bind it to this.title.
### File B
```js
import DataStore from 'data-store';

class ClassB {
    constructor() {
        this.ds = new DataStore();

        this.title = ds.getContent().title;
    }
}
```