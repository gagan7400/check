import {createStore,applyMiddleware} from  'redux';
import logger from 'redux-logger';
import Axios from 'axios';
import {thunk} from 'redux-thunk'
const store = createStore( reducer ,applyMiddleware(logger.default ,thunk)) ; 
 function reducer(state={amount:1} , action){
    
    switch (action.type) {
        case 'INT': return {...state , amount : state.amount  +action.payload};
        case 'DECREMENT': return {...state , amount : state.amount -1};
        case 'INCBYAMT': return {...state , amount : state.amount + action.payload};
        default:  return state;
    }
                    
 } 
  function getuser(id){
    return  async (dispatch ,getState)=>{
      let {data} = await Axios.get(`http://localhost:3000/accounts/${id}`)
        dispatch(init(data.amount))
    }
}
let init =(value)=>{
   return { type:"INT" ,payload:value  }
}
store.dispatch(getuser(2))  
// store.subscribe(()=>{
//     console.log(store.getState())

// })
// let inc =()=>{  return { type:"INCREMENT" } };
// let dec =()=>{  return { type:"DECREMENT" } };
// let incbyamt =(num)=>{  return { type:"INCBYAMT" ,payload:num } };

    // store.dispatch(incbyamt(22) );
    // store.dispatch(inc() );
    // store.dispatch(dec( ) );

// let getdata = async ()=>{
//     let {data} = await axios.get('http://localhost:3000/accounts') 
//     console.log(data);
// }
// getdata();

// const {createStore} from "redux" ;

// let const store  = createStore("reducer");

// let reducer = { (state={amount:0},action)=>{
//     if(action.type == "inc"){
//         return state.amount = state.amount+1;
//     }else{
//         return state.amount
//     }

// }}
// store.dispatch({type:"inc"});
// store.subscribe(()=>{console.log(store.dispatch({type:"inc"}))})
// console.log(store.getState())    

// import {createStore,applyMiddleware} from  'redux';
// import logger from 'redux-logger'
// const store = createStore( reducer ,applyMiddleware(logger.default)) ; 
//  function reducer(state={amount:1} , action){
    // if(action.type === 'increment'){
    //     // return state.amount = state.amount+1
    //     // immutablility 
    //     return {amount:state.amount+1}
    // }else if(action.type === "decrement"){
    //     return {amount: state.amount -action.payload}
    // }
    // return state
      
                    
//  } 


 //global state ;
//   subscribe method -- ye tab tab chalta he jab jab state kuch changes hota he tab  
// store.subscribe(()=>{
//     console.log('Global State', store.getState())
// })

// setInterval(() => {
    // store.dispatch({type:"INCREMENT"} );
    
// }, 5000);
// console.log(store.getState());
 //  har acition ko koi list ener ki jarurat hoti he to 
//  reducer ek listener rhta he har action ka 
//  or dispatch usko bhej deta he lisetenr ke pass 

// const {createStore} from "redux" ;

// let const store  = createStore("reducer");

// let reducer = { (state={amount:0},action)=>{
//     if(action.type == "inc"){
//         return state.amount = state.amount+1;
//     }else{
//         return state.amount
//     }

// }}
// store.dispatch({type:"inc"});
// store.subscribe(()=>{console.log(store.dispatch({type:"inc"}))})
// console.log(store.getState())    
/* 
let product = []
function getdata() {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => {
            product = json.products;
            console.log(json.products)
        });

}
getdata();

function getall() {
    console.log(product)
    let cat = ["smartphones", "laptops", "groceries"]
    let count = 0;
    let l = 0;
    product.map((v, i) => {
        if (v.category == cat[count]) {
            l == 0 || console.log(v.title, count, l)
            if (l == 2) {
                count++;
                l = 0;
            }
            l++;
        }
    })
}


*/