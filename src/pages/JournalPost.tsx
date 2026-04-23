import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationBreadcrumb from "@/components/destination/DestinationBreadcrumb";
import JournalArticleHeader from "@/components/journal/JournalArticleHeader";
import JournalAuthorCard from "@/components/journal/JournalAuthorCard";
import JournalArticleBody from "@/components/journal/JournalArticleBody";
import JournalContentCTA from "@/components/journal/JournalContentCTA";
import JournalRelatedArticles from "@/components/journal/JournalRelatedArticles";
import { journalData, CATEGORY_LABELS } from "@/data/journalData";

const JournalPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = journalData.articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="bg-background min-h-screen">
        <Header />
        <div
          style={{
            padding: "10vw 0",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 28,
              color: "#2f5550",
            }}
          >
            Article not found.
          </p>
          <a
            href="/journal"
            style={{
              display: "inline-block",
              marginTop: 24,
              fontFamily: "var(--font-body)",
              fontSize: 12,
              fontWeight: 500,
              color: "#d3a36e",
              letterSpacing: 2,
              textTransform: "uppercase",
              borderBottom: "1px solid #d3a36e",
              paddingBottom: 2,
              textDecoration: "none",
            }}
          >
            ← Back to Journal
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const categoryLabel = CATEGORY_LABELS[article.category];
  const truncatedTitle =
    article.title.length > 40 ? article.title.slice(0, 40) + "…" : article.title;

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <JournalArticleHeader article={article} />
      <DestinationBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Journal", href: "/journal" },
          { label: categoryLabel, href: `/journal?category=${article.category}` },
          { label: truncatedTitle },
        ]}
      />
      <JournalAuthorCard variant="top" />
      <JournalArticleBody blocks={article.body} />
      {article.cta && <JournalContentCTA cta={article.cta} />}
      <JournalAuthorCard variant="bottom" />
      <JournalRelatedArticles
        currentSlug={article.slug}
        currentCategory={article.category}
        allArticles={journalData.articles}
      />
      <Footer />
    </div>
  );
};

export default JournalPost;
