import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IGetSinglePost } from './postTypes'

export const getPost = createAsyncThunk('posts/getPost', async (id: number) => {
	return await axios
		.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then((res) => res.data)
})

export const deletePost = createAsyncThunk(
	'posts/deletePost',
	async (id: number) => {
		return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
	}
)

const initialState: IGetSinglePost = {
	post: [],
	loading: false,
	error: null
}

const postsSlice = createSlice({
	name: 'Posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPost.pending, (state) => {
				state.loading = true
			})
			.addCase(getPost.fulfilled, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.post = action.payload
				state.error = null
			})
			.addCase(getPost.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.post = []
				state.error = action.payload.message || 'Something went wrong'
			})
	}
})

export default postsSlice.reducer
