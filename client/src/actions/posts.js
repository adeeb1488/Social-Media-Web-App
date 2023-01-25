import * as api from '../API' //importing everything from API folder as 'API'

//Creating Action creaters

export const getPosts =()=> async(dispatch) =>{
   try{
    const{data} = await api.fetchPosts()
    dispatch({type:"FETCH_ALL", payload:data});
   }
catch(err){
console.log(err.message)
}   
    
    
}