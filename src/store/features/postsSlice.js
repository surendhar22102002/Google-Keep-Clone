import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = {
    posts: [
        {
            id: '1',
            title: 'Title 1',
            content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            date: sub(new Date(), { minutes: 10 }).toISOString(),
        },
        {
            id: '2',
            title: 'Title 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            date: sub(new Date(), { minutes: 5 }).toISOString(),
        },
        {
            id: '3',
            title: 'Title 3',
            content: 'This is Google Keep Clone Project',
            date: sub(new Date(), { minutes: 3 }).toISOString(),
        }
    ]
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdd: {
            reducer(state, action) {
                state.posts.push(action.payload)
            },
            prepare(title, content,) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                    },
                };
            },
        },
        postDelete(state, action) {
            state.posts = state.posts.filter((post) => post.id !== action.payload.id)
        }
    },
})

export const selectAllPosts = (state) => state.posts.posts
export const { postAdd, postDelete } = postsSlice.actions
export default postsSlice.reducer;