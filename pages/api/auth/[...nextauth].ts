import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GithubProvider from 'next-auth/providers/github';

import { prisma } from '@lib/prisma';

import type { NextApiHandler } from 'next';

const authHandler: NextApiHandler = async (req, res) => {
  return await NextAuth(req, res, {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
    pages: {
      signIn: '/sign-in',
    },
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET,
  });
};

export default authHandler;
