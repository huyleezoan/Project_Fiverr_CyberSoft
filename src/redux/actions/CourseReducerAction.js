import axios from 'axios';
import { domain } from '../../util/setting';
import { GET_COURSE } from './types/CourseReducerType';

export const getAllCourseAction = (dispatch) => {
    let promise = axios({
        url: `${domain}/api/jobs`,
        method: 'GET'
    });
    promise.then((result) => {
        const action = {
            type: GET_COURSE,
            data: result.data.content
        }

        dispatch(action)
    })
}      