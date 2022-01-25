import { prisma } from '@lib/prisma';

import type { NextApiHandler } from 'next';

const books: NextApiHandler = async (req, res) => {
    const body = req.body
    await prisma.book.create({data})
  };
  
  export default books;