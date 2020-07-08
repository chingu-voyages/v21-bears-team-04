class Address extends DBbase {
    constructor(adapter, isInDB=false, dataObj=null) {
        super(adapter); // initializing super class, DBbase - communication with db methods
        if (!isInDB) { 
            // assign dataObj attributes to this instance of Address
            this.setAttributes(dataObj) 
        } else { // retrieve existing data for obj

        }

    }

    setAttributes(dataObj) {
        for (let attribute in dataObj) {
            this['attribute'] = dataObj[attribute]
        }   
    }
}