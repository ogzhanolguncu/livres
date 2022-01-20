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
import Sidebar from "@components/Sidebar";
import { supabase } from "lib/supabaseClient";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

export default function Auth() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<{ email: string }>({
    resolver: yupResolver(loginSchema),
  });

  const [sentStatus, setSentStatus] = useState<"Sent" | "Error" | undefined>();
  const [emailData, setEmailData] =
    useState<{ email?: string; emailRequired?: boolean }>();

  const handleLogin = async (data: any) => {
    console.log({ data });
    try {
      // const { error } = await supabase.auth.signIn({ email: emailData?.email });
      setSentStatus("Sent");
    } catch (error) {
      setSentStatus("Error");
    }
  };

  return (
    <Flex>
      <Sidebar />
      <Flex
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Flex flexDirection="column" gap="1rem">
          <Heading as="h1" size="4xl">
            Join Livres!
          </Heading>
          <Text fontSize="3xl">Join via magic link with your email below.</Text>
          <FormControl
            isInvalid={emailData?.emailRequired}
            onSubmit={handleSubmit(handleLogin)}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...register("email")}
                  size="lg"
                  fontSize="2rem"
                  _placeholder={{
                    fontSize: "2rem",
                  }}
                  variant="outline"
                  type="email"
                  placeholder="Email address"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.email && (
              <FormErrorMessage fontSize="2rem">
                Email is required.
              </FormErrorMessage>
            )}
          </FormControl>

          <Button
            color="#3D2C8D"
            size="lg"
            type="submit"
            fontSize="2rem"
            variant="solid"
            disabled={isSubmitting}
            backgroundColor="gray.100"
            _hover={{
              backgroundColor: "gray.300",
            }}
            onClick={handleLogin}
            isSubmitting={isSubmitting}
          >
            <Box>{isSubmitting ? "Loading" : "Send magic link"}</Box>
          </Button>
          <Text fontSize="2rem" color="green.300">
            {sentStatus === "Sent" && "Check your email for the login link!"}
          </Text>
          <Text fontSize="2rem" color="red.500">
            {sentStatus === "Error" && "Something went wrong!"}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
