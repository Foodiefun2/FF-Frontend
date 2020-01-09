import axios from "axios";

// MARK: -- Custom State Machine Logic
// MARK: -- GET REQUEST
export const FETCH_RESTAURANT_START = "FETCH_RESTAURANT_START";
export const FETCH_RESTAURANT_SUCCESS = "FETCH_RESTAURANT_SUCCESS";
export const FETCH_RESTAURANT_FAILURE = "FETCH_RESTAURANT_FAILURE";

export const POST_RESTAURANT_START = "POST_RESTAURANT_START";
export const POST_RESTAURANT_SUCCESS = "POST_RESTAURANT_SUCCESS";
export const POST_RESTAURANT_FAILURE = "POST_RESTAURANT_FAILURE";

export const PUT_RESTAURANT_START = "PUT_RESTAURANT_START";
export const PUT_RESTAURANT_SUCCESS = "PUT_RESTAURANT_SUCCESS";
export const PUT_RESTAURANT_FAILURE = "PUT_RESTAURANT_FAILURE";

export const DELETE_RESTAURANT_START = "DELETE_RESTAURANT_START";
export const DELETE_RESTAURANT_SUCCESS = "DELETE_RESTAURANT_SUCCESS";
export const DELETE_RESTAURANT_FAILURE = "DELETE_RESTAURANT_FAILURE";

// MARK: -- GET
export const getRestaurants = () => dispatch => {
	dispatch({ type: FETCH_RESTAURANT_START });
	// REMINDER: -- auth axios later
	// authAxios.get("/restaurants");
	axios.get("https://rayfoodiefun.herokuapp.com/api/restaurants")
		 .then(res => { 
		 	console.log(res);
		 	dispatch({ type: FETCH_RESTAURANT_SUCCESS, payload: res.data })
		 })
		 .catch(err => {
		 	console.log(err);
		 	dispatch({ type: FETCH_RESTAURANT_FAILURE, payload: err.response.statusText })
		 })

};

export const postRestaurant = (restaurant) => dispatch => {
	// REMINDER: -- auth axios later
	// authAxios.post("/restaurants");
	dispatch({ type: POST_RESTAURANT_START });
	axios.post("https://rayfoodiefun.herokuapp.com/api/restaurants", restaurant)
		 .then(res =>  {
		 	console.log(res);
		 	dispatch({ type: POST_RESTAURANT_SUCCESS, payload: restaurant })
		 })
		 .catch(err => {
		 	console.log(err)
		 	dispatch({ type: POST_RESTAURANT_FAILURE, payload: err.response.statusText })
		 })
};

export const putRestaurant = (restaurant) => dispatch => {
	// REMINDER: -- auth axios later
	// authAxios.put("/restaurants");
	dispatch({ type: PUT_RESTAURANT_START });
	axios.put(`https://rayfoodiefun.herokuapp.com/api/restaurant/${restaurant.id}`, restaurant)
		 .then(res => {
		 	console.log(res);
		 	dispatch({ type: PUT_RESTAURANT_SUCCESS, payload: restaurant });
		 })
		 .catch(err => { 
		 	console.log(err);
		 	dispatch({ type: PUT_RESTAURANT_FAILURE, payload: err.response.statusText });
		 })
};

export const deleteRestaurant = (restaurant) => dispatch => {
	// REMINDER: -- auth axios later
	// authAxios.get("/restaurants");
	dispatch({ type: DELETE_RESTAURANT_START });
	axios.delete(`https://rayfoodiefun.herokuapp.com/api/restaurant/${restaurant.id}`)
		 .then(res => { 
		 	console.log(res)
		 	dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: res.data })
		 })
		 .catch(err => { 
		 	console.log(err)
		 	dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: err.response.statusText })
		 })
}