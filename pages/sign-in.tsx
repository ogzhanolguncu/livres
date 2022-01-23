import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const loginSchema = yup
  .object({
    email: yup
      .string()
      .email('Input must be valid email!')
      .required('Email field is required!'),
  })
  .required();

export default function Auth() {
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

  const onSubmit = async () => {
    try {
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
          Join Livres!
        </Heading>
        <Text fontSize="3xl">Join via magic link with your email below.</Text>
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
            mt="1rem"
            color="#3D2C8D"
            size="lg"
            type="submit"
            fontSize="2rem"
            variant="solid"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            backgroundColor="gray.100"
            _hover={{
              backgroundColor: 'gray.300',
            }}
          >
            <Box>{isSubmitting ? 'Loading' : 'Send magic link'}</Box>
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
}
