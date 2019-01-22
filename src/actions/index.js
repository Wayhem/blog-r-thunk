import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
    try {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    } catch (e) {
        console.log('Error while making api request')
    }
}

export const fetchUser = (id) => async (dispatch) => {
    try {
        const response = await jsonPlaceholder.get(`./users/${id}`);

        dispatch({ type: 'FETCH_USER', payload: response.data })
    } catch (e) {
        console.log('Error while fetching data for user')
    }
}