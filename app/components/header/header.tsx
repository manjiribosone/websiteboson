import { useState } from 'react'

import {
	Flex, Box,
	Link, Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
} from "@chakra-ui/react";


const Nav = () => {

	return (
		<Box bg="lightgrey"
			w="100%" h="100%" p={4}>

			<Flex mt='3' justifyContent="center">
				<Flex
					direction="row"
					alignItems="left"
					w={{ base: "90%", md: "70%", lg: "50%" }}>
					<Menu>
						<MenuButton>
							<a href="https://www.geeksforgeeks.org/"
								target="_blank">
								Bosone
							</a>
						</MenuButton>
						<MenuList>
							<MenuItem as='a'
								href='https://www.geeksforgeeks.org/'>
								Home
							</MenuItem>
							<MenuItem as='a' href='#'>
								About Us
							</MenuItem>
							<MenuItem as='a' href='#'>
								Contact Us
							</MenuItem>
							<MenuDivider />
							<MenuItem as='a' href=
'https://www.geeksforgeeks.org/jobs?ref=ghm'>
								Careers
							</MenuItem>
							<MenuItem as='a' href=
'https://www.geeksforgeeks.org/courses/school-guide-course?'>
								Our Courses
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</Flex>
		</Box>
	);
};
export default Nav;
