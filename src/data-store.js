import objectAssign from 'nested-object-assign';

let _ds = {};

class DataStore {
    constructor(props) {
        if (props) {
            this.addContent(props);
        }
    }

    addContent(props) {
        _ds = objectAssign({}, _ds, props);
    }

    getContent() {
        return _ds;
    }
}

export default DataStore;