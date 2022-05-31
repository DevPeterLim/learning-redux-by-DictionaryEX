// widgets.js

// Actions
// const LOAD = 'my-app/widgets/LOAD';
const CREATE = 'word/CREATE';
const UPDATE = 'word/UPDATE';
const REMOVE = 'word/REMOVE';

//initialState
const initialState = {
    // list: [1, 2, 3]
    obj: {
        title:"word",
        pron:"[월드]",
        mean:"단어",
        example:"단어 공부 해라",
        exMean:"you should learn word" 
     }
}

// Action Creators
export function createWord(word){
    return {type:CREATE, word}
}

// export function loadWidgets() {
// return { type: LOAD };
// }

// export function createWidget(widget) {
// return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
// return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
// return { type: REMOVE, widget };
// }

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "word/CREATE":{
            const new_word = [...state.list, action.word];
            return {list: new_word};
        }
    // do reducer stuff
    default: return state;
    }
    }

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }