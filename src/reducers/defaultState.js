export const filterState = Object.freeze({
    'age':{
        label: 'Kid\'s age',
        options: [
            {label: 'From 0 to 5', value:'0-5', checked: false},
            {label: 'From 6 to 10', value:'6-10', checked: false},
            {label: 'From 11 to 16', value:'11-16', checked: false},
            {label: 'From 17 to 30', value:'17-30', checked: false},
            {label: 'From 30', value:'30+', checked: false}
        ]
    },
    'diagnosis': {
        label: 'Diagnosis',
        options:[
            {label: 'Autism', value:'autism', checked: false},
            {label: 'Cerebral palsy', value:'cerebral', checked: false},
            {label: 'Down syndrome', value:'down', checked: false},
            {label: 'Hearing impairment', value:'hearing', checked: false},
            {label: 'Speech disturbance', value:'speech', checked: false},
            {label: 'Vision disorder', value:'vision', checked: false},
        ]
    },
    'price_level': {
        label:'Organization Type',
        options:[
            {label: 'All', value:'all', checked: false},
            {label: 'Charity', value:'charity', checked: false},
            {label: 'Government', value:'government', checked: false},
            {label: 'Private', value:'private', checked: false},
            {label: 'Not defined', value:'not_defined', checked: false},
        ]
    },
    'tags': {
        label:'Tags',
        options:[
            {label: 'Education', value:'education', checked: false},
            //{label: "With children", value:"children", checked: false},
            {label: 'With parents', value:'parents_included', checked: false},
            {label: 'Rehabilitation', value:'rehabilitation', checked: false},
        ]
    }
});

export const mapState = Object.freeze({
    specialists: [],
    filteredSpecialists:[],
    centerMap: {},
    displayedSpecialist: null,
    activeFilters : {
        'age': [],
        'diagnosis': [],
        'price_level': [],
        'tags': []
    }
});

export const barState = Object.freeze({
    barShown: false
});
