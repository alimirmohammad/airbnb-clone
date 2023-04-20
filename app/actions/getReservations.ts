import prisma from '@/app/libs/prismadb';
import { SafeReservation } from '../types';

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservations(
  params: IParams
): Promise<SafeReservation[]> {
  const { listingId, userId, authorId } = params;

  const query: any = {};

  if (listingId) {
    query.listingId = listingId;
  }
  if (userId) {
    query.userId = userId;
  }
  if (authorId) {
    query.listing = { userId: authorId };
  }

  const reservations = await prisma.reservation.findMany({
    where: query,
    include: { listing: true },
    orderBy: { createdAt: 'desc' },
  });

  return reservations.map(r => ({
    ...r,
    createdAt: r.createdAt.toISOString(),
    startDate: r.startDate.toISOString(),
    endDate: r.endDate.toISOString(),
    listing: {
      ...r.listing,
      createdAt: r.listing.createdAt.toISOString(),
    },
  }));
}
