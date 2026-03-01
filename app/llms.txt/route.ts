import { NextResponse } from 'next/server';
import { getWorkList } from '@/data/work';
import { EXPERIENCES, SKILLS } from '@/data/profile';

export const dynamic = 'force-static';

export async function GET() {
  const works = getWorkList();

//   const aiSaaS = works.filter(w => !w.type || w.type === 'personal').filter(w => 
//     ['Navi', 'Sift', 'Hita', 'Contxt', 'Kāryakramah', 'Kanri', 'Ahāra', 'Saransha', 'Nidhi', 'Vikraya', 'Kaizen', 'Krushi', 'Ishta.', 'Why Kerala?', 'Infernia', 'Kāryakramah AU'].some(title => w.title.includes(title))
//   );
  
  // Custom grouping based on the known list logic from previous context
  const aiProductTitles = ['Navi', 'Sift', 'Hita', 'Contxt', 'Kāryakramah', 'Kanri'];
  const agencyTitles = ['HireSynQ', 'Socionova', 'Citadel', 'Rare Cocoa', 'The Baga Village', 'Lost Escapes', 'Rohtang Apiary', 'White Waters'];
  const experientialTitles = ['Why Kerala?', 'Ishta.', 'Infernia', 'Ahāra', 'Saransha', 'Nidhi', 'Vikraya', 'Kāryakramah AU', 'Kaizen', 'Krushi'];

  const byTitleMatch = (titles: string[]) => works.filter(w => titles.some(t => w.title.includes(t)));
  const aiProducts = byTitleMatch(aiProductTitles);
  const agencyWork = byTitleMatch(agencyTitles);
  const experientialWork = byTitleMatch(experientialTitles);
  const knownSlugs = new Set([...aiProducts, ...agencyWork, ...experientialWork].map(w => w.slug));
  const otherWork = works.filter(w => !knownSlugs.has(w.slug));

  const formatField = (label: string, value?: string) => (value ? `    *   **${label}**: ${value}` : '');
  const formatSubList = (label: string, values?: string[]) => (
    values && values.length
      ? `    *   **${label}**:\n${values.map(v => `        *   ${v}`).join('\n')}`
      : ''
  );
  const formatLinks = (links?: { site?: string; repo?: string }) => {
    if (!links?.site && !links?.repo) return '';
    const items = [
      links?.site ? `        *   Website: ${links.site}` : '',
      links?.repo ? `        *   Repository: ${links.repo}` : ''
    ].filter(Boolean);
    return `    *   **Links**:\n${items.join('\n')}`;
  };
  const formatProject = (w: typeof works[0]) => {
    const parts = [
      `*   **${w.title}**`,
      formatField('Slug', w.slug),
      formatField('Type', w.type || 'personal'),
      formatField('Summary', w.summary),
      formatField('Description', w.description),
      formatSubList('Highlights', w.highlights),
      formatSubList('Roles', w.roles),
      formatSubList('Tech', w.tech),
      formatField('Platform', w.platform),
      formatField('Status', w.status),
      formatField('Date', w.date),
      formatLinks(w.links)
    ].filter(Boolean);
    return parts.join('\n');
  };

  const formatExperience = (exp: typeof EXPERIENCES[0]) => {
    const meta = [exp.period, exp.location].filter(Boolean).join(' | ');
    const tech = exp.tech?.length ? ` | ${exp.tech.join(', ')}` : '';
    const details = exp.description.map(item => `    *   ${item}`).join('\n');
    return `*   **${exp.role} — ${exp.company}**${meta ? ` (${meta})` : ''}${tech}\n${details}`;
  };

  const totalProjects = works.length;
  const personalProjects = works.filter(w => !w.type || w.type === 'personal').length;
  const agencyProjects = works.filter(w => w.type === 'agency').length;
  const content = `# Vashishta Mithra Reddy | Product Designer & Founding Engineer

## Brand Identity
**Vashishta Mithra Reddy** is a product-focused **Founding Engineer** and **Designer** who specializes in building **0-to-1 AI applications**. 

I bridge the gap between **visionary design** and **engineering excellence**, architecting production-ready MVPs for international startups. I don't just write code; I own the product lifecycle from concept to delivery, obsessing over performance, scalability, and user delight.

## Value Proposition
*   **AI-Native Builder**: Deep expertise in building Agentic Systems, RAG pipelines, and AI-driven workflows (OpenAI, Vector DBs, n8n).
*   **Full-Stack Architect**: Mastery of the modern web stack (Next.js 15, TypeScript, Supabase, Tailwind CSS 4) to build fast, scalable, and beautiful applications.
*   **Product Visionary**: Ability to translate abstract business goals into concrete, high-converting digital products.
*   **Speed & Precision**: Rapid iteration for MVPs without compromising on code quality, security, or aesthetic polish.

## Portfolio Snapshot
*   **Total Projects**: ${totalProjects}
*   **Personal Builds**: ${personalProjects}
*   **Agency & Client Work**: ${agencyProjects}

## Portfolio Highlights
### 🚀 AI & SaaS Products
${aiProducts.map(formatProject).join('\n\n')}

### 💼 Agency & Business Solutions
${agencyWork.map(formatProject).join('\n\n')}

### 🎨 Experiential & E-Commerce
${experientialWork.map(formatProject).join('\n\n')}

${otherWork.length ? `### 🧪 Labs & Archives\n${otherWork.map(formatProject).join('\n\n')}\n` : ''}

## Core Capabilities

### Engineering & Product
*   ${SKILLS.join(', ')}

### Design & Strategy
*   **UI/UX**: Minimalist, high-performance interfaces with a focus on micro-interactions and accessibility.
*   **System Design**: Scalable architecture for SaaS and AI products.
*   **0-to-1 Execution**: Taking projects from a napkin sketch to a shipped product with paying users.

## Professional Experience
${EXPERIENCES.map(formatExperience).join('\n')}

## Contact & Socials
*   **Website**: [vashishtamithra.com](https://vashishtamithra.com)
*   **Email**: [me@vashishtamithra.com](mailto:me@vashishtamithra.com)
*   **LinkedIn**: [Vashishta Mithra Reddy](https://www.linkedin.com/in/vashishta-mithra-reddy-vundyala/)
*   **GitHub**: [@Vashishta-Mithra-Reddy](https://github.com/Vashishta-Mithra-Reddy)
*   **Profile**: [ishta.v19.tech](https://ishta.v19.tech/vashishta)

---
*This context is optimized for understanding the V19 brand: High-Performance, AI-Native, and Design-First.*
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
