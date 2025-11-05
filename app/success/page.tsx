'use client';

import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { Copy, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import useSound from 'use-sound';
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible';
import { useEffect, Suspense } from 'react';
import Spinner from '@/components/animations/Spinner';

function SuccessContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const paymentId = searchParams.get('payment_id') || '';
  const [click] = useSound('/click.wav', { volume: 0.2 });

  useEffect(() => {
    if (status === 'succeeded') {
      toast.success('Payment successful! Thank you for your support.');
    }
  }, [status]);

  const handleCopyPaymentId = async () => {
    try {
      await navigator.clipboard.writeText(paymentId);
      toast.success('Payment ID copied to clipboard');
      click();
    } catch {
      toast.error('Failed to copy Payment ID');
    }
  };

  return (
    <section className="w-full min-h-screen text-foreground font-satoshi wrapperx flex-center">
      <div className="max-w-7xl mx-auto">
        <FadeInWhenVisible>
          <div className="flex flex-col items-center gap-6 p-12 px-16 rounded-2xl border-2 border-foreground/10 border-dotted">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
            <div>
            <h2 className="text-2xl font-bold text-foreground/80 text-center mb-2">Payment Successful</h2>
            <p className="text-foreground/60 text-center">
              Your payment has been processed.
            </p>
            </div>

            <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-foreground/5 dark:bg-foreground/10">
              <span className="text-sm text-foreground/70">Payment ID:</span>
              <code className="text-sm text-foreground/90">{paymentId}</code>
              <button
                onClick={handleCopyPaymentId}
                className="rounded-xl border-2 border-foreground/10 border-dotted hover:bg-foreground/5 p-2 active:scale-95 transition"
              >
                <Copy className="w-5 h-5 text-foreground/70" />
              </button>
            </div>

            <div className="flex gap-3 mt-2">
              <Link
                href="/store"
                className="px-6 py-3 rounded-xl font-satoshi bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90"
              >
                Back to Store
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl font-satoshi bg-foreground/10 text-foreground text-sm tracking-wide hover:bg-foreground/15"
              >
                Contact
              </Link>
              <Link
                href="/"
                className="px-6 py-3 rounded-xl font-satoshi bg-foreground/10 text-foreground text-sm tracking-wide hover:bg-foreground/15"
              >
                View Projects
              </Link>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <SuccessContent />
    </Suspense>
  );
}