### E-Commerce Project.

# This is e-commerce website which fetch data from fake json server and display on home page.
# Here to mange the state of website. I use Redux 

### FOLDER STRUCTURE FOR REDUX

# --> **components**
        --> All Components
# --> **services**
        --> Actions
                --> example_1_Action.js
                --> example_2_Action.js
                --> example_3_Action.js  
        --> Constants
                --> actionTypes.js
        --> Reducers
                --> example_1_Reducer.js
                --> example_2_Reducer.js
                --> example_3_Reducer.js 
                --> rootReducer.js
        --> store.js



### WHAT CHANGES HAPPENS IN OUR FILES, LETS EXPLORE EACH OF THEM.

**WHAT HAPPEN IN services FOLDER --> Actions FOLDER --> example_1_Action.js**

1) We import actionTypes from actionTypes.js file which created in Constants folder.
--> import { actionTypes } from '../Constants/actionTypes';

2) Actions are the function which return the object 

3) Inside object there are two properties 
--> export const action_name_1 = (data) => {
        return {
            type: actionTypes.SET_PRODUCTS,
            payload: data
        }
    };

and so on .....

**WHAT HAPPEN IN services FOLDER --> Constants FOLDER --> actionTypes.js**

1) This file containe the plane object. and its just export that object 
--> example:
    export const actionTypes = {
        SET_PRODUCTS: 'SET_PRODUCTS',
        SELECTED_PRODUCT: 'SELECTED_PRODUCT',
        REMOVE_SELECTED_PRODUCT: 'REMOVE_SELECTED_PRODUCT',
        and so on.....
    };

**WHAT HAPPEN IN services FOLDER --> Reducers FOLDER --> example_1_Reducer.js**

1) We import actionTypes from actionTypes.js file which created in Constants folder.
--> import { actionTypes } from '../Constants/actionTypes';

2) Declare the intial State.
--> const initialState = {
        state_name: []
    };

3) Reducer is a function which take two argument a) state = initialState b) action

6) Reducer contain the if else or switch loop to perform the opration, as per action.type

4) Reducer set new State as per the new data comes in action.payload 

5) Reducer return the new state in form of object. 
--> Example,
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        case actionTypes.REMOVE_PRODUCTS:
            return { }     

        default:
            return state
    }
}
and so on....

**WHAT HAPPEN IN services FOLDER --> Reducers FOLDER --> rootReducer.js**

1) we import combineReducers from redux.
--> import { combineReducers } from "redux";

2) we import all the reducers present in our website.
--> import { productReducer } from './productReducer';
    import { selectedProductReducer } from "./selectedProductReducer";

3) rootReducer contain the combineReducers function and work something like this
--> export const rootReducers = combineReducers( {
        allProducts: productReducer,
        selectedProduct: selectedProductReducer,
        and so on.....
    } )

**WHAT HAPPEN IN services FOLDER --> store.js**

1) In one react website only one store will be there.

2) And one store need only one reducers that why we combine the reducers in one place and act as one reducer.

3) we import createStore form redux to create the store.
--> import { createStore } from "redux";

4) we import rootReducer which alredy combine all the reducers in one place.
--> import { rootReducers } from "./Reducers";

5) store is a veriable which assign to the createStore function.

6) createStore function takes parameter a) rootReducer b) initialValue.
--> const store = createStore(
        rootReducers, 
        {}
        <!-- window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  -->
    );

7) And export the store.

**WHAT HAPPEN IN index.js**

1) we import Provider from react-redux.
--> import { Provider } from 'react-redux';

2) we import store form store file which is in services.
--> import store from './services/store';

3) index.js wrap the App component with Provider and pass store as props
--> ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
    )

4) Now our store is created and ready to access in any of the component.

**WHAT HAPPEN IN components Folder**

1) consider any one component in our case lets take ProductList.jsx.

2) In component we need to access the state and dispatch the action to setState.

3) To access the state in functional component we use useSelector from react-redux.
--> import { useSelector } from 'react-redux';

4) To get the state and store it in local variable.
--> const variable_name = useSelector((state) => state); <!-- write once -->

5) To dispatch the action in functional component we use useDispatch from react-redux.
--> import { useDispatch } from 'react-redux';

6) import all actions which dispatch in that component
--> import {action_name} from '../../services/Actions/productActions'

7) dispatch actions 
--> const dispatch = useDispatch(); <!-- write once -->

--> dispatch(action_name(data)) <!-- whenever the action need to dispatch -->
