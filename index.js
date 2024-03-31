const redux = require("redux")
const reduxLogger = require("redux-logger")

const createStore = redux.createStore
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

// Actions and action creators
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'Buy cake action'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: 'Buy ice cream action'
    }
}

// Initial state of the application
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 20,
}

// Reducers
// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }

//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

const rootReducer = combineReducer({
    cakes: cakeReducer,
    iceCreams: iceCreamReducer
})

// Creating store and implementing all the responsibilities 
const store = createStore(rootReducer, applyMiddleware(logger))
console.log("Initial State", store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
