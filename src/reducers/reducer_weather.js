import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    return [ action.payload.data, ...state ]; 
  // gives us something like [city, city, city] NOT [city, [city, city]]
  }
  return state;
}