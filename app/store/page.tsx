'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import useSound from 'use-sound';
import { toast } from 'sonner';
import { Suspense } from 'react';
import Spinner from '@/components/animations/Spinner';

type Product = {
  id: string; 
  title: string;
  description: string;
  priceLabel: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    id: 'pdt_UQGMdDZWiH1LzU8CFFPwZ',
    title: 'Guide to life.',
    description: 'A guide to living your life at its fullest.',
    priceLabel: '100 Rs.',
    image: '/logos/citadel.png',
  },
  {
    id: 'pdt_WJab3E8YXUxbJBgL2UCTU',
    title: 'Why Kerala? Supporter Pack',
    description: 'Support the travel planner project.',
    priceLabel: '10 Rs.',
    image: '/logos/whykerala.png',
  },
];

async function startStaticCheckout(productId: string) {
  const res = await fetch(`/checkout?productId=${encodeURIComponent(productId)}`, {
    method: 'GET',
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Checkout request failed');
  }
  const data = await res.json();
  const checkoutUrl = data.checkout_url;
  if (!checkoutUrl) throw new Error('Missing checkout_url');
  window.location.href = checkoutUrl;
}

function StoreContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const [click] = useSound('/click.wav', { volume: 0.2 });

  if (status === 'succeeded') {
    toast.success('Payment successful! Thanks for your support.');
  } else if (status === 'cancelled') {
    toast('Payment cancelled.');
  }

  return (
    <section className="w-full min-h-screen text-foreground font-satoshi">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground/60">Store</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="p-6 rounded-xl border-2 border-foreground/10 border-dotted transition"
            >
              <div className="w-full h-36 relative rounded-lg overflow-hidden bg-white mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-3 border-2 border-foreground/15 border-dotted rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground/90">{product.title}</h3>
              <p className="text-sm text-foreground/60 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-foreground/80 font-semibold">{product.priceLabel}</span>
                <button
                  onClick={async () => {
                    try {
                      click();
                      if (!product.id || product.id.startsWith('pdt_replace_me')) {
                        toast('Configure productId in Store first.');
                        return;
                      }
                      await startStaticCheckout(product.id);
                    } catch (err) {
                      toast.error('Unable to start checkout.');
                      console.error(err);
                    }
                  }}
                  className="px-5 py-2 rounded-xl bg-foreground text-background text-sm hover:bg-foreground/90 active:scale-95 transition cursor-pointer"
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-8 text-center text-sm text-foreground/60">
          Need to manage your subscription? Ask me for your customer portal link.
        </div> */}
      </div>
    </section>
  );
}

export default function StorePage() {
  return (
    <Suspense fallback={<Spinner />}>
      <StoreContent />
    </Suspense>
  );
}