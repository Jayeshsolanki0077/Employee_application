import data from '../employee.json';

export default ( state= {data},action) => {
    switch(action.type) {
      default:
        console.log(state);
      return state
    }
} 
