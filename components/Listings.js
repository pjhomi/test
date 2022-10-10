/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function Listings({ listing }) {
  return (
    <div className="card">
      <Link href={`/listing/${listing.listing_id}`}>
        <a>
          <img
            src={listing.media}
            alt={listing.street_name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/listing/${listing.listing_id}`}>
          <a>
            <h2 className="text-lg">{listing.residence}</h2>
            <h2 className="text-lg">{listing.listing_id}</h2>
          </a>
        </Link>
        <p className="mb-2">Location: {listing.street_name}</p>
        <p className="mb-2">Type: {listing.property_category}</p>
        <p>€{listing.price}</p>

      </div>
    </div>
  );
}