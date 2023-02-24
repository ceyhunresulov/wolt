export const getRestaurants = (payload) => {
  return {
    type: "GET_RESTAURANTS",
    payload,
  };
};

export const getCurrentRestaurant = (payload)=>{
  return{
    type:'GET_CURRENT_RESTAURANT',
    payload
  }
}
