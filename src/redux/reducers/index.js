import { combineReducers } from 'redux';
import lob from './lob.reducer';

const rootReducer = combineReducers({
	lob,
});

export default rootReducer;