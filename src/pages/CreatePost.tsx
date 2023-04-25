import { useAppDispatch } from '@/app/hooks'
import { HStack, Text, Flex, Heading, Input, Textarea } from '@chakra-ui/react'
import { useState } from 'react'

type Props = {}

const CreatePost = (props: Props) => {
	const [values, Values] = useState({ title: '', body: '' })
	const [showPost, setshowPost] = useState(false)

	const dispatch = useAppDispatch()

	return (
		<Flex justify={'center'} p={'2rem'}>
			<Flex gap={'2rem'} direction={'column'}>
				<Heading>Create post</Heading>
				<Input placeholder='Title' />
				<Textarea placeholder='Post' />
			</Flex>
		</Flex>
	)
}

export default CreatePost
