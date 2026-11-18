import Link from "next/link";
import { notFound } from "next/navigation";
import ContactUsSection from "@/sections/ContactUs";
import WhatsAppButton from "@/components/FloatingButton";
import { getAllPosts, getPostBySlug, formatDate, SITE_URL } from "@/blogs";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.metaTitle || post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { Content, faqs } = post;
  const url = `${SITE_URL}/blog/${post.slug}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      image: post.image ? `${SITE_URL}${post.image}` : undefined,
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "GS Machinery" },
      publisher: {
        "@type": "Organization",
        name: "GS Machinery",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.jpeg` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  if (faqs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ===================== HEADER ===================== */}
      <section className="bg-[#232831] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <nav className="text-xs text-gray-400 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#b99631] transition-colors duration-300">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#b99631] transition-colors duration-300">
              Blog
            </Link>
          </nav>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b99631] mb-4">
            {post.category}
          </p>
          <h1 className="text-[28px] sm:text-[42px] font-extrabold text-white leading-tight">
            {post.title}
          </h1>
          <div className="w-16 h-[3px] bg-[#b99631] mx-auto mt-6"></div>
          <p className="mt-5 text-sm text-gray-400">
            By GS Machinery · {formatDate(post.date)}
          </p>
        </div>
      </section>

      <article className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-5">
          <Content />
        </div>
      </article>

      <ContactUsSection />
      <WhatsAppButton />
    </>
  );
}
