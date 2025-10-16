import { Webhooks } from '@dodopayments/nextjs';

export const POST = Webhooks({
  webhookKey: process.env.DODO_PAYMENTS_WEBHOOK_KEY!,
  onPayload: async (payload) => {
    console.log('Webhook payload', payload);
  },
  onPaymentSucceeded: async (payload) => {
    console.log('Payment succeeded', payload);
    // e.g., mark order as paid
  },
  onPaymentFailed: async (payload) => {
    console.log('Payment failed', payload);
    // e.g., notify user or retry
  },
  onPaymentProcessing: async (payload) => {
    console.log('Payment processing', payload);
  },
  onPaymentCancelled: async (payload) => {
    console.log('Payment cancelled', payload);
  },
  onRefundSucceeded: async (payload) => {
    console.log('Refund succeeded', payload);
  },
  onRefundFailed: async (payload) => {
    console.log('Refund failed', payload);
  },
  onDisputeOpened: async (payload) => {
    console.log('Dispute opened', payload);
  },
  onDisputeExpired: async (payload) => {
    console.log('Dispute expired', payload);
  },
  onDisputeAccepted: async (payload) => {
    console.log('Dispute accepted', payload);
  },
  onDisputeCancelled: async (payload) => {
    console.log('Dispute cancelled', payload);
  },
  onDisputeChallenged: async (payload) => {
    console.log('Dispute challenged', payload);
  },
  onDisputeWon: async (payload) => {
    console.log('Dispute won', payload);
  },
  onDisputeLost: async (payload) => {
    console.log('Dispute lost', payload);
  },
  onSubscriptionActive: async (payload) => {
    console.log('Subscription active', payload);
  },
  onSubscriptionOnHold: async (payload) => {
    console.log('Subscription on hold', payload);
  },
});

