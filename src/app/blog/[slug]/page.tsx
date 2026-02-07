import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ContactForm";
import { getArticleBySlug, getRelatedArticles, getAllArticles } from "@/data/blog-articles";
import { BASE_PATH } from "@/lib/constants";

// Images
const imgHero = `${BASE_PATH}/assets/cdecb895a2e1e301e31eadfffa170feab26b3bf1.png`;
const imgStars1 = `${BASE_PATH}/assets/96e45ae1ba60f13f2644063a88546318f60a3bfb.png`;
const imgContactTick = `${BASE_PATH}/assets/contact-tick.png`;
const imgCalendar = `${BASE_PATH}/assets/faq-icon.png`;
const imgBtnArrowIconWhite = `${BASE_PATH}/assets/cc33d9c88b41312dae650fea64034944767af781.png`;

// Generate static params for all blog posts
export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 3);

  return (
    <div className="bg-white relative size-full">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-0 w-full">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          {/* Hero Section with Dark Background */}
          <div className="w-full relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgHero} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
            <div className="absolute inset-0 opacity-60">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStars1} />
            </div>

            <Header />

            {/* Article Hero Content */}
            <div className="relative z-10 max-w-[1360px] mx-auto px-4 md:px-[40px] pt-[40px] md:pt-[60px] pb-[80px]">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-[24px]">
                <Link href="/blog" className="font-['Inter',sans-serif] text-[14px] text-white/80 hover:text-white hover:underline transition-colors">
                  Blog
                </Link>
                <span className="text-white/50">/</span>
                <span className="font-['Inter',sans-serif] text-[14px] text-white/60 truncate max-w-[300px]">
                  {article.title}
                </span>
              </div>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-[16px] mb-[24px]">
                <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-white uppercase tracking-wide bg-white/20 backdrop-blur-sm px-[12px] py-[6px] rounded-full">
                  {article.category}
                </span>
                <span className="font-['Inter',sans-serif] font-semibold text-[14px] text-white/70">
                  {article.readTime} read
                </span>
                <span className="font-['Inter',sans-serif] text-[14px] text-white/70">
                  {article.date}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-['GT_Super_Ds_Trial:Bd',sans-serif] text-[32px] md:text-[48px] lg:text-[56px] leading-[1.2] tracking-[1px] bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-[24px] max-w-[900px] animate-fade-in-up">
                {article.title}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-[16px]">
                <div className="w-[56px] h-[56px] rounded-full bg-[#3f2fee] flex items-center justify-center text-white font-bold text-[24px]">
                  S
                </div>
                <div className="flex flex-col">
                  <span className="font-['Inter',sans-serif] font-bold text-[18px] text-white">{article.author}</span>
                  <span className="font-['Inter',sans-serif] text-[14px] text-white/70">Founder & CEO</span>
                </div>
              </div>

              {/* Featured Image - Inside dark hero */}
              <div className="w-full mt-[48px] md:mt-[60px] animate-fade-in-up delay-200">
                <div className="w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-[20px] overflow-hidden shadow-2xl img-scale-container">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom spacing for dark hero */}
            <div className="h-[60px] md:h-[80px]" />
          </div>

          {/* Article Content */}
          <div className="w-full bg-white py-[60px] md:py-[80px]">
            <div className="max-w-[800px] mx-auto px-4 md:px-[40px]">
              {/* Excerpt */}
              <p className="font-['Inter',sans-serif] text-[20px] md:text-[24px] text-[#1b1b1b] leading-[1.6] mb-[40px] font-medium">
                {article.excerpt}
              </p>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {article.content?.split('\n\n').map((paragraph, index) => {
                  // Handle headings
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="font-['Inter',sans-serif] font-bold text-[28px] md:text-[32px] text-[#1b1b1b] mt-[48px] mb-[24px]">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="font-['Inter',sans-serif] font-bold text-[22px] md:text-[24px] text-[#1b1b1b] mt-[32px] mb-[16px]">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  // Handle list items
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                    return (
                      <ul key={index} className="list-disc pl-[24px] mb-[24px] space-y-[8px]">
                        {items.map((item, i) => (
                          <li key={i} className="font-['Inter',sans-serif] text-[18px] text-[#3a3a3a] leading-[1.7]">
                            {item.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  // Handle numbered lists
                  if (/^\d+\.\s/.test(paragraph)) {
                    const items = paragraph.split('\n').filter(item => /^\d+\.\s/.test(item) || item.startsWith('**'));
                    return (
                      <div key={index} className="mb-[24px]">
                        {items.map((item, i) => {
                          if (item.startsWith('**')) {
                            // Bold item (like "1. **UserTesting**")
                            const match = item.match(/^\d+\.\s\*\*(.+?)\*\*\s*-?\s*(.*)$/);
                            if (match) {
                              return (
                                <div key={i} className="mb-[16px]">
                                  <span className="font-['Inter',sans-serif] font-bold text-[18px] text-[#1b1b1b]">
                                    {match[1]}
                                  </span>
                                  {match[2] && (
                                    <span className="font-['Inter',sans-serif] text-[18px] text-[#3a3a3a]">
                                      {' '}- {match[2]}
                                    </span>
                                  )}
                                </div>
                              );
                            }
                          }
                          return (
                            <p key={i} className="font-['Inter',sans-serif] text-[18px] text-[#3a3a3a] leading-[1.7] mb-[8px]">
                              {item}
                            </p>
                          );
                        })}
                      </div>
                    );
                  }
                  // Regular paragraph
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="font-['Inter',sans-serif] text-[18px] text-[#3a3a3a] leading-[1.8] mb-[24px]">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Share & Tags */}
              <div className="border-t border-[#e8e7e7] pt-[40px] mt-[60px]">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[24px]">
                  <div className="flex items-center gap-[12px]">
                    <span className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#1b1b1b]">Share:</span>
                    <div className="flex items-center gap-[8px]">
                      <a href="#" className="w-[40px] h-[40px] rounded-full bg-[#1b1b1b] flex items-center justify-center text-white hover:bg-[#3f2fee] transition-colors">
                        <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-[40px] h-[40px] rounded-full bg-[#1b1b1b] flex items-center justify-center text-white hover:bg-[#3f2fee] transition-colors">
                        <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-[40px] h-[40px] rounded-full bg-[#1b1b1b] flex items-center justify-center text-white hover:bg-[#3f2fee] transition-colors">
                        <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <Link
                    href="/blog"
                    className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#3f2fee] hover:underline flex items-center gap-[8px]"
                  >
                    <svg className="w-[16px] h-[16px] rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    Back to all articles
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="w-full bg-[#f8f8f8] py-[80px] md:py-[100px]">
              <div className="max-w-[1360px] mx-auto px-4 md:px-[40px]">
                <h2 className="font-['GT_Super_Ds_Trial:Md',sans-serif] text-[32px] md:text-[42px] leading-[1.25] tracking-[1px] text-[#1b1b1b] mb-[48px]">
                  Related Articles
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                  {relatedArticles.map((relatedArticle, index) => (
                    <Link
                      key={index}
                      href={`/blog/${relatedArticle.slug}`}
                      className="group flex flex-col bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <div className="w-full h-[200px] overflow-hidden">
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-[24px] flex flex-col flex-1">
                        <span className="font-['Inter',sans-serif] font-semibold text-[12px] text-[#3f2fee] uppercase tracking-wide mb-[12px]">
                          {relatedArticle.category}
                        </span>
                        <h3 className="font-['Inter',sans-serif] font-bold text-[18px] leading-[1.4] text-[#1b1b1b] mb-[12px] group-hover:text-[#3f2fee] transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <div className="flex items-center gap-[8px] mt-auto">
                          <span className="font-['Inter',sans-serif] text-[13px] text-[#7e7e81]">{relatedArticle.readTime}</span>
                          <span className="text-[#7e7e81]">•</span>
                          <span className="font-['Inter',sans-serif] text-[13px] text-[#7e7e81]">{relatedArticle.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="w-full bg-[#1b1b1b] py-[80px] md:py-[100px]">
            <div className="max-w-[1360px] mx-auto px-4 md:px-[40px]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-[40px]">
                <div className="flex flex-col items-start max-w-[600px]">
                  <h2 className="font-['GT_Super_Ds_Trial:Bd',sans-serif] text-[36px] md:text-[48px] leading-[1.2] text-white mb-[16px]">
                    Ready to build something amazing?
                  </h2>
                  <p className="font-['Inter',sans-serif] text-[18px] text-white/70 leading-[1.6]">
                    Let&apos;s discuss your project and create something extraordinary together.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-[#3f2fee] px-[32px] py-[18px] rounded-full btn-animated hover-glow flex items-center gap-3 group shrink-0"
                >
                  <span className="font-['Inter',sans-serif] font-semibold text-[18px] text-white">
                    Get in touch
                  </span>
                  <img
                    alt=""
                    className="w-[12px] h-[12px] group-hover:translate-x-1 transition-transform"
                    src={imgBtnArrowIconWhite}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-[#f0f0f0] content-stretch flex flex-col items-start py-[80px] md:py-[124px] relative shrink-0 w-full">
            <div className="max-w-[1440px] w-full mx-auto px-4 md:px-[40px]">
              <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-0 items-start justify-between">
                {/* Left Content */}
                <div className="flex flex-col items-start max-w-[434px]">
                  <h2 className="font-['GT_Super_Ds_Trial:Su',sans-serif] text-[40px] md:text-[55px] leading-[1.4] tracking-[1px] text-[#1b1b1b]">
                    Have a Project?<br />Let&apos;s talk!
                  </h2>

                  <div className="flex flex-col gap-[11px] mt-[31px]">
                    {[
                      "NDA? Absolutely just ask.",
                      "We'll respond in 24 hours — fast & focused.",
                      "Work with senior experts, not juniors.",
                    ].map((item, index) => (
                      <div key={index} className="flex gap-[10px] items-center">
                        <img alt="" className="w-[16px] h-[16px]" src={imgContactTick} />
                        <span className="font-['Inter',sans-serif] font-semibold text-[14px] md:text-[15px] text-[#1b1b1b]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-[12px] mt-[95px]">
                    <span className="font-['Inter',sans-serif] font-semibold text-[18px] text-[#1b1b1b]">Schedule a call:</span>
                    <div className="bg-white flex items-center p-[10px] pr-[24px] rounded-lg">
                      <div className="bg-[#3f2fee] w-[72px] h-[72px] rounded-full flex items-center justify-center text-white font-bold text-[24px]">S</div>
                      <div className="flex flex-col pl-[20px]">
                        <span className="font-['Inter',sans-serif] font-semibold text-[24px] text-[#1b1b1b]">Sivarsa</span>
                        <span className="font-['Inter',sans-serif] text-[18px] text-[#7e7e81]">Founder & CEO</span>
                      </div>
                      <img alt="" className="w-[48px] h-[48px] ml-[52px]" src={imgCalendar} />
                    </div>
                  </div>
                </div>

                {/* Right Form */}
                <ContactForm className="w-full lg:max-w-[672px]" />
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
