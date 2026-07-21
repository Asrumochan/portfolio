import { Helmet } from 'react-helmet-async';
import { profile } from '../constants/portfolioData';

type SeoProps = {
  title: string;
  description: string;
};

function Seo({ title, description }: SeoProps) {
  const fullTitle = `${title} | ${profile.name}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://example.com" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1518773553398-650c184e0bb3" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

export default Seo;
