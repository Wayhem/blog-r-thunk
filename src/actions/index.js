import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => async (dispatch) => {
    try {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    } catch (e) {
        console.log('Error while making api request')
    }
}

export const fetchUser = (id) => (dispatch) => {
    _fetchUser(id, dispatch);
}

const _fetchUser = _.memoize(async (id, dispatch) => {
    try {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({ type: 'FETCH_USER', payload: response.data })
    } catch (e) {
        console.log('Error while fetching data for user')
    }
}); 

//ES5 version besides Async await
/*export var fetchUser = function(id) {
    return function(dispatch) {
        _fetchUser(id, dispatch)
    }
}

var _fetchUser = _.memoize(async function(id, dispatch){
    try {
        var response = await jsonPlaceholder.get('/users/' + id);

        dispatch({ type: 'FETCH_USER', payload: response.data })
    } catch (e) {
        console.log('Error while fetching data for user')
    }
})
*/