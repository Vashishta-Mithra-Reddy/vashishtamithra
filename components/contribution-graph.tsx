import { unstable_cache } from "next/cache";
import ContributionGraphClient from "./contribution-graph-client";
import { subDays } from "date-fns";

const username = 'Vashishta-Mithra-Reddy';

const getCachedContributions = unstable_cache(
  async () => {
    const url = new URL(`/v4/${username}`, 'https://github-contributions-api.jogruber.de');
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch contributions');
    }

    const data = (await response.json()) as {
      contributions: Array<{ date: string; count: number; level: number }>;
      total: Record<string, number>;
    };
    
    // Filter contributions for the last 369 days
    const today = new Date();
    const oneYearAgo = subDays(today, 369);
    
    const contributions = data.contributions.filter((item) => {
      const date = new Date(item.date);
      return date >= oneYearAgo && date <= today;
    });

    const total = data.total[today.getFullYear()];

    return { contributions, total };
  },
  ['github-contributions'],
  { revalidate: 60 * 60 * 24 },
);

export default async function ContributionGraph() {
  const { contributions } = await getCachedContributions();

  return <ContributionGraphClient data={contributions} />;
}
