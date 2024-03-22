import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../store/features/postsSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer
    },
})