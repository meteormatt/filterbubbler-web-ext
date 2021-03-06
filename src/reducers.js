import {combineReducers} from 'redux';
import { reducer as bayesReducer } from 'bayes-classifier';
import { 
    UPDATE_RECIPES,
    MAIN_TAB,
    UI_REQUEST_ACTIVE_URL,
    REQUEST_ACTIVE_TAB_TEXT,
    SET_CONTENT,
    ADD_CORPUS,
    CHANGE_CLASSIFICATION,
    ACTIVE_URL
} from './constants';
import { reducer as formReducer } from 'redux-form';

const initialState = {
    url: '',
    content: '',
    classifierStatus: '',
    currentClassification: '',
    servers: [],
    currentServer: 'http://filterbubbler.localhost',
    classifications: [],
    corpora: {},
    recipes: [],
    repositories: [],
    ui: {
        classification: ''
    }
}

function classifications(state = initialState.classifications, action) {
    console.log('REDUCER', action)
    return state;
}

const corpora = (state = initialState.corpora, action) => {
    switch (action.type) {
        case ADD_CORPUS:
            let newState = {...state}
            newState[action.corpus.url] = action.corpus
            return newState
        default:
            return state
    }
}

function content(state = initialState.content, action) {
    switch (action.type) {
        /*
        case REQUEST_ACTIVE_TAB_TEXT:
            return {...state, content: action.content}
            */
        default:
            return state
    }

    return state;
}

function urls(state = initialState.url, action) {
    switch (action.type) {
        case ACTIVE_URL:
            return (action.url != undefined) ? action.url : state
        default:
            return state
    }
}

function classify(state = initialState.currentClassification, action) {
    switch (action.type) {
        case CHANGE_CLASSIFICATION:
            return action.classification
        default:
            return state
    }
}

function ui(state = initialState.ui, action) {
    return state;
}

const recipes = (state = [], action) => {
    switch (action.type) {
        case UPDATE_RECIPES:
            return action.recipes
        default:
            return state
    }
}

const tabs = (state = 0, action) => {
    switch (action.type) {
        case MAIN_TAB:
            return action.index
        default:
            return state
    }
}

const servers = (state = initialState.servers, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const currentServer = (state = initialState.currentServer, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    url: urls,
    corpora: corpora,
    recipes: recipes,
    servers: servers,
    currentServer: currentServer,
    currentClassification: classify,
    classifications: classifications,
    content: content,
    form: formReducer,
    mainTab: tabs,
    ui: ui
});
