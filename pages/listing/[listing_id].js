import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';

export default function ProductScreen() {
  const { query } = useRouter();
  console.log(query);
  const { listing_id } = query;
  const listing = data.listings.find((x) => x.listing_id === parseInt(listing_id));
  if (!listing) {
    return <div>Listing Not Found</div>;
  }
  return (
    <Layout title={listing.name}>
      <div className="py-2">
        <Link href="/">back to listings</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={listing.media}
            alt={listing.listing_id}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{listing.name}</h1>
            </li>
            <li>Category: {listing.property_category}</li>
            <li>Sub Category: {listing.property_subcategory}</li>
            <li>Year renovated: {listing.renovation_year}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>€{listing.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>Available</div>
            </div>
            <button className="primary-button w-full">Book appointment</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}