module.exports = class DB {
    constructor(){
        this.collections = {
            user: [],
            survey: [],
            answer: [],
        }
    }

    fetch(type, ids = []) {
        const collection = this.collections[type];

        if( ids.length === 0 ) return collection;
        return collection.filter( item => ids.includes(item._id) );
    }

    save(type, data) {
        this.collections[type].push( data );
        return true;
    }

    update(type, ids = [], update) {
        this.collections[type] = this.collections[type].map(
            item => {
                if(ids.includes(item._id)){
                    item = {
                        ...item,
                        ...update
                    }
                }

                return item;
            }
        );

        return true;
    }
}