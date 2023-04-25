import { useAppDispatch } from '@/app/hooks'
import { useState } from 'react'

type Props = {}

const CreatePost = (props: Props) => {
	const [values, Values] = useState({ title: '', body: '' })
	const [showPost, setshowPost] = useState(false)

	const dispatch = useAppDispatch()

	return <div>CreatePost</div>
}

export default CreatePost
