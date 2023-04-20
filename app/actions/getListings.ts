import prisma from '@/app/libs/prismadb';
import { SafeListing } from '../types';

export default async function getListings(): Promise<SafeListing[]> {
  const listings = await prisma.listing.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return listings.map(listing => ({
    ...listing,
    createdAt: listing.createdAt.toISOString(),
  }));
}
