import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
    try {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    } catch (e) {
        console.log('error while making api request')
    }
    
}