import { useAppDispatch } from '@/app/hooks'
import { HStack, Text, Flex, Heading } from '@chakra-ui/react'
import { useState } from 'react'

type Props = {}

const CreatePost = (props: Props) => {
	const [values, Values] = useState({ title: '', body: '' })
	const [showPost, setshowPost] = useState(false)

	const dispatch = useAppDispatch()

	return (
		<HStack spacing={'1rem'}>
			<Flex justify={'center'}>
				<Heading>Create post</Heading>
			</Flex>
		</HStack>
	)
}

export default CreatePost
