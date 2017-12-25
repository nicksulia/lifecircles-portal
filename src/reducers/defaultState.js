export const filterState = Object.freeze({
    "age":{
        label: "Kid's age",
        options: [
            {label: "From 0 to 1", value:"0-1", checked: false},
            {label: "From 2 to 5", value:"2-5", checked: false},
            {label: "From 6 to 10", value:"6-10", checked: false},
            {label: "From 11 to 16", value:"11-16", checked: false},
            {label: "From 17 to 30", value:"17-30", checked: false},
            {label: "From 30", value:"30+", checked: false}
        ]
    },
    "diagnosis": {
        label: "Diagnosis",
        options:[
            {label: "Autism", value:"autism", checked: false},
            {label: "DTS", value:"dts", checked: false},
        ]
    },
    "price_level": {
        label:"Payment",
        options:[
            {label: "Free", value:"free", checked: false},
            {label: "Low", value:"low", checked: false},
            {label: "Medium", value:"medium", checked: false},
            {label: "High", value:"high", checked: false},
        ]
    },
    "tags": {
        options:[
            {label: "Education", value:"education", checked: false},
            //{label: "With children", value:"children", checked: false},
            {label: "With parents", value:"parents_included", checked: false},
            {label: "Rehabilitation", value:"rehabilitation", checked: false},
        ]
    }
});

export const mapState = Object.freeze({
    specialists: [],
    centerMap: {},
    displayedSpecialist: null,
    activeFilters : {
        "age": [],
        "diagnosis": [],
        "price_level": [],
        "tags": []
    }
});