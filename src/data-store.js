import objectAssign from 'nested-object-assign';

let _ds = {};

class DataStore {
    constructor(props) {
        if (props) {
            this.add(props);
        }
    }

    add(props) {
        _ds = objectAssign({}, _ds, props);
    }

    get() {
        return _ds;
    }
}

export default DataStore;