import prisma from '@/app/libs/prismadb';
import { SafeListing } from '../types';

export interface IListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export default async function getListings({
  userId,
  guestCount,
  roomCount,
  bathroomCount,
  startDate,
  endDate,
  locationValue,
  category,
}: IListingsParams): Promise<SafeListing[]> {
  let query: any = {};

  if (userId) {
    query.userId = userId;
  }
  if (category) {
    query.category = category;
  }
  if (guestCount) {
    query.guestCount = {
      gte: +guestCount,
    };
  }
  if (roomCount) {
    query.roomCount = {
      gte: +roomCount,
    };
  }
  if (bathroomCount) {
    query.bathroomCount = {
      gte: +bathroomCount,
    };
  }
  if (locationValue) {
    query.locationValue = locationValue;
  }
  if (startDate && endDate) {
    query.NOT = {
      reservations: {
        some: {
          OR: [
            {
              startDate: { lte: startDate },
              endDate: { gte: startDate },
            },
            {
              startDate: { lte: endDate },
              endDate: { gte: endDate },
            },
          ],
        },
      },
    };
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
