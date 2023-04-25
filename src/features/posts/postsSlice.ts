import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPost = createAsyncThunk('posts/getPost', async (id: number) => {
	return await axios
		.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then((res) => res.data)
})

const initialState = {
    post: [],
    loading: false,
    error: null
}

const postsSlice = createSlice({
    name: 'Posts',
    initialState,
    reducers: {},
    extraReducers: {}
)