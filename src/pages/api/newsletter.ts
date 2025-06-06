import type { APIRoute } from 'astro';
import { z } from 'zod';

const subscriptionSchema = z.object({
  email: z.string().email(),
  language: z.string().default('en'),
});

// In a real application, you would store this in a database
const subscribers: Array<{
  email: string;
  language: string;
  subscribedAt: Date;
  isActive: boolean;
}> = [];

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, language } = subscriptionSchema.parse(body);

    // Check if email already exists
    const existingSubscriber = subscribers.find((sub) => sub.email === email);
    if (existingSubscriber) {
      return new Response(
        JSON.stringify({ error: 'Email already subscribed' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Add subscriber
    subscribers.push({
      email,
      language,
      subscribedAt: new Date(),
      isActive: true,
    });

    // In a real application, you might:
    // 1. Save to database
    // 2. Send welcome email
    // 3. Add to email service (like Mailchimp, ConvertKit, etc.)

    console.log(`New subscriber: ${email} (${language})`);

    return new Response(
      JSON.stringify({
        message: 'Successfully subscribed',
        email,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);

    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const GET: APIRoute = async () => {
  // Return subscriber count for public stats
  return new Response(
    JSON.stringify({
      subscriberCount: subscribers.filter((sub) => sub.isActive).length,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
