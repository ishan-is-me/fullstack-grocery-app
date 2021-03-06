import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma-client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const groceryID: any = req.query.id;

  if (req.method === 'DELETE') {
    const grocery = await prisma.grocery.delete({
      where: { id: groceryID },
    });
    res.json(grocery);
  }

  if (req.method === 'PUT') {
    const grocery = await prisma.grocery.update({
      where: { id: groceryID },
      data: {
        name: req.body.name,
        quantity: req.body.quantity,
        id: req.body.id,
      },
    });
    res.json(grocery);
  } else {
    new Error('Method not allowed');
  }
}
