import {
	Box,
	Button,
	Flex,
	Heading,
	Input,
	Text,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
} from "@chakra-ui/react";
import { supabase } from "lib/supabaseClient";
import { useState } from "react";

export default function Auth() {
	const [loading, setLoading] = useState(false);
	const [sentStatus, setSentStatus] = useState<"Sent" | "Error" | undefined>();
	const [email, setEmail] = useState("");

	const isError = email === "" || null || undefined;

	const handleLogin = async () => {
		try {
			setLoading(true);
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			setSentStatus("Sent");
		} catch (error) {
			setSentStatus("Error");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Flex width="100%" height="100vh" justifyContent="center" alignItems="center">
			<Flex flexDirection="column" gap="1rem">
				<Heading as="h1" size="4xl">
					Join Livres!
				</Heading>
				<Text fontSize="3xl">Join via magic link with your email below</Text>
				<FormControl isInvalid={isError}>
					<Input
						size="lg"
						fontSize="2rem"
						_placeholder={{
							fontSize: "2rem",
						}}
						variant="outline"
						type="email"
						placeholder="Email address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					{isError && <FormErrorMessage fontSize="2rem">Email is required.</FormErrorMessage>}
				</FormControl>

				<Button
					color="#3D2C8D"
					size="lg"
					fontSize="2rem"
					variant="solid"
					disabled={loading}
					onClick={handleLogin}
					isLoading={loading}
				>
					<Box>{loading ? "Loading" : "Send magic link"}</Box>
				</Button>
				<Text fontSize="2rem" color="green.300">
					{sentStatus === "Sent" && "Check your email for the login link!"}
				</Text>
				<Text fontSize="2rem" color="red.500">
					{sentStatus === "Error" && "Something went wrong!"}
				</Text>
			</Flex>
		</Flex>
	);
}
