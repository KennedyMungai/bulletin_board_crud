import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Button, Flex, Heading, Input, VStack } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
	const dispatch = useAppDispatch()
	const { post, loading } = useAppSelector((state) => state.posts)

	return (
		<VStack spacing={'2rem'} p={'1rem'}>
			<Flex justify={'center'} gap={'2rem'} direction={'column'}>
				<Heading textAlign={'center'}>Fetch Posts</Heading>
				<Input placeholder={'Enter Post ID'} type='number' />
				<Flex gap={'0.5rem'}>
					<Button isLoading={loading}>Fetch User Post</Button>
					<Button>
						<Link href='/CreatePost'>Create User Post</Link>
					</Button>
				</Flex>
			</Flex>
		</VStack>
	)
}
