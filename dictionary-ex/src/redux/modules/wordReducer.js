import { async } from "@firebase/util";
import { collection, getDocs, addDoc, getDoc } from "firebase/firestore";
import {db} from "../../firebase-config"

// Actions
const LOAD = 'wordReducer/LOAD';
const CREATE = 'wordReducer/CREATE';
const UPDATE = 'wordReducer/UPDATE';
const REMOVE = 'wordReducer/REMOVE';

//initialState
const initialState = {
    list: []
    // obj: {
    //     title:"word",
    //     pron:"[월드]",
    //     mean:"단어",
    //     example:"단어 공부 해라",
    //     exMean:"you should learn word" 
    //  }
}

// Action Creators
export function createWord(word_data){
    return { type:CREATE, word_data }
}

export function loadWord(word_list) {
    return { type: LOAD, word_list };
}

// export function createWidget(widget) {
// return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
// return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
// return { type: REMOVE, widget };
// }
export const loadWordFB = () => {
    return async function(dispatch) {
        const word_data = await getDocs(collection(db, "WordPost"));
        let word_list = [];

        word_data.forEach((doc) => {
            word_list.push({id: doc.id, ...doc.data()});
        });
        dispatch(loadWord(word_list));
    }
}

export const createWordFB = (wordData) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "WordPost"), wordData);
        const word_data = {id: docRef.id, ...wordData};
        dispatch(createWord(word_data));
    }
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case CREATE :{
            const new_word = [...state.list, action.word_data]
            return {list: new_word};
        }
        case LOAD :{
            return {list: action.word_list}
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