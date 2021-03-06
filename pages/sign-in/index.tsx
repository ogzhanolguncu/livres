import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { getProviders, signIn } from 'next-auth/react';
import { loginSchema } from 'validations/signInValidationSchema';
import type { InferGetStaticPropsType } from 'next';

type InferedProviders = InferGetStaticPropsType<typeof getServerSideProps>;

const SignIn = ({ providers }: InferedProviders) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<{ email: string }>({
    resolver: yupResolver(loginSchema),
  });

  const [sentStatus, setSentStatus] = useState<'Sent' | 'Error' | undefined>();

  const onSubmit = async (data: { email: string }) => {
    try {
      signIn(providers?.email.id, {
        email: data.email,
      });
      setSentStatus('Sent');
      reset();
    } catch (error) {
      setSentStatus('Error');
      reset();
    }
  };
  return (
    <Flex
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex flexDirection="column" gap="1rem" maxWidth="370px">
        <Heading as="h1" size="4xl">
          Sign in to Livres!
        </Heading>
        <Text fontSize="3xl">Sign in via Google, Github or Email.</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...register('email')}
                size="lg"
                fontSize="2rem"
                pl="0.5rem"
                _placeholder={{
                  fontSize: '2rem',
                }}
                variant="outline"
                type="email"
                placeholder="Email address"
                value={field.value || ''}
                onChange={field.onChange}
              />
            )}
          />
          <Text fontSize="2rem" color="red.500" pl="0.5rem">
            {errors.email?.message}
          </Text>

          <Button
            width="100%"
            mt="1rem"
            color="#3D2C8D"
            size="lg"
            type="submit"
            fontSize="2rem"
            variant="solid"
            backgroundColor="gray.100"
            _hover={{
              backgroundColor: 'gray.300',
            }}
            isLoading={isSubmitting}
          >
            <Box>Join with Email</Box>
          </Button>
          <Button
            width="100%"
            mt="1rem"
            color="#3D2C8D"
            size="lg"
            type="submit"
            fontSize="2rem"
            variant="solid"
            backgroundColor="gray.100"
            _hover={{
              backgroundColor: 'gray.300',
            }}
            onClick={(event) => {
              event.preventDefault();
              signIn(providers?.github.id, {
                redirect: true,
                callbackUrl: '/dashboard',
              });
            }}
          >
            <Box>Join with Github</Box>
          </Button>
          <Button
            width="100%"
            mt="1rem"
            color="#3D2C8D"
            size="lg"
            type="submit"
            fontSize="2rem"
            variant="solid"
            backgroundColor="gray.100"
            _hover={{
              backgroundColor: 'gray.300',
            }}
            onClick={(event) => {
              event.preventDefault();
              signIn(providers?.google.id, {
                redirect: true,
                callbackUrl: '/',
              });
            }}
          >
            <Box>Join with Google</Box>
          </Button>
        </form>

        <Text fontSize="2rem" color="green.300">
          {sentStatus === 'Sent' && 'Check your email for the login link!'}
        </Text>
        <Text fontSize="2rem" color="red.500">
          {sentStatus === 'Error' && 'Something went wrong!'}
        </Text>
      </Flex>
    </Flex>
  );
};

export default SignIn;
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
