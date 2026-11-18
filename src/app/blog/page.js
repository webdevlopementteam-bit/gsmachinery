import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import WhatsAppButton from "@/components/FloatingButton";
import { getAllPosts, formatDate, SITE_URL } from "@/blogs";

export const metadata = {
  title: "Blog | PET Bottle Making Machine Guides & Prices | GS Machinery",
  description:
    "Guides, price lists and buying tips for PET bottle making machines, blow moulding machines and bottling plants from GS Machinery, Delhi.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-[#232831] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b99631] mb-4">
            Our Blog
          </p>
          <h1 className="text-[28px] sm:text-[42px] font-extrabold text-white leading-tight">
            PET Bottle Machine Guides &amp; Insights
          </h1>
          <div className="w-16 h-[3px] bg-[#b99631] mx-auto mt-6"></div>
          <p className="mt-5 text-[15px] leading-7 text-gray-400 max-w-xl mx-auto">
            Prices, buying guides and practical tips to help you start and grow
            your bottling business.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {post.image && (
                  <div className="relative w-full aspect-[16/10] bg-[#faf6ec] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw,33vw"
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b99631] mb-2">
                    {post.category} · {formatDate(post.date)}
                  </p>
                  <h2 className="text-[18px] font-bold text-[#232831] leading-snug group-hover:text-[#b99631] transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-gray-600 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#b99631]">
                    Read More <FaArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
