import prisma from '@/app/libs/prismadb';
import { SafeListing } from '../types';

export interface IListingsParams {
  userId?: string;
}

export default async function getListings(
  params: IListingsParams
): Promise<SafeListing[]> {
  const { userId } = params;
  let query: any = {};

  if (userId) {
    query.userId = userId;
  }

  const listings = await prisma.listing.findMany({
    where: query,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return listings.map(listing => ({
    ...listing,
    createdAt: listing.createdAt.toISOString(),
  }));
}
