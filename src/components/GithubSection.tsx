import { profile } from '../constants/portfolioData';

function GithubSection() {
  const username = profile.githubUsername;

  return (
    <section id="github" className="section">
      <h3>GitHub</h3>
      <div className="github-grid">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`}
          alt="GitHub Stats"
          loading="lazy"
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight`}
          alt="Top Languages"
          loading="lazy"
        />
        <img
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark`}
          alt="Contribution Graph"
          loading="lazy"
        />
        <img
          src={`https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake.svg`}
          alt="Contribution Snake"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default GithubSection;
