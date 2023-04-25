import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { getPost } from '@/features/posts/postsSlice'
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Flex,
	HStack,
	Heading,
	Input,
	Spacer,
	Text,
	VStack
} from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
	const [id, setId] = useState<number | string>('')
	const dispatch = useAppDispatch()
	const { post, loading } = useAppSelector((state) => state.posts)

	const fetchUserPost = () => {
		if (!id) {
			window.alert('Please provide a post id')
		} else {
			dispatch(getPost(+id))
			setId('')
		}
	}

	return (
		<VStack spacing={'2rem'} p={'1rem'}>
			<Flex
				justify={'center'}
				gap={'2rem'}
				direction={'column'}
				maxWidth={'25rem'}
			>
				<Heading textAlign={'center'}>Fetch Posts</Heading>
				<Input
					placeholder={'Enter Post ID'}
					type='number'
					value={id}
					onChange={(e) => setId(e.target.value)}
				/>
				<Flex gap={'0.5rem'}>
					<Button isLoading={loading} onClick={fetchUserPost}>
						Fetch User Post
					</Button>
					<Button>
						<Link href='/CreatePost'>Create User Post</Link>
					</Button>
				</Flex>
				<Flex>
					<Card>
						<CardHeader>
							<Text
								textColor={'blue.500'}
								fontWeight={'bold'}
								fontSize={'lg'}
								textTransform={'uppercase'}
							>
								{post?.title}
							</Text>
						</CardHeader>
						<CardBody>
							<Text
								textColor={'gray.400'}
								fontSize={'sm'}
								textTransform={'capitalize'}
							>
								{post?.body}
							</Text>
						</CardBody>
						<Divider color={'gray.300'} />
						<CardFooter>
							<HStack spacing={'4rem'} justifyContent={'center'}>
								<Button cursor={'pointer'} bg={'teal.500'}>
									Edit
								</Button>
								<Spacer />
								<Button cursor={'pointer'} bg={'red.500'}>
									Delete
								</Button>
							</HStack>
						</CardFooter>
					</Card>
				</Flex>
			</Flex>
		</VStack>
	)
}
