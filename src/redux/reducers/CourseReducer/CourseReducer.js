import {GET_COURSE} from '../../actions/types/CourseReducerType';

const stateDefault = {
    arrayCourse: [],
}

export const CourseReducer = (state = stateDefault, action) => {
    
    switch (action.type) {
        case GET_COURSE: {

            state.course = action.res.data;
            return {...state};
        }
        default: 
            return {...state};
    }
}