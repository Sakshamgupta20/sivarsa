"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BASE_PATH } from "@/lib/constants";

const imgHero = `${BASE_PATH}/assets/cdecb895a2e1e301e31eadfffa170feab26b3bf1.png`;
const imgPattern2 = `${BASE_PATH}/assets/e943fd303c0291fd9475f87f73eb8662aae4ab65.png`;
const imgStars1 = `${BASE_PATH}/assets/96e45ae1ba60f13f2644063a88546318f60a3bfb.png`;
const imgEllipse1 = `${BASE_PATH}/assets/ellipse-decoration.svg`;

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black relative w-full">
      <div className="w-full flex flex-col items-center">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          {/* Hero Section */}
          <div className="min-h-[350px] md:min-h-[450px] lg:min-h-[500px] overflow-hidden relative shrink-0 w-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-5.86%] max-w-none top-0 w-[111.73%]" src={imgHero} />
            </div>
            <Header />
            <div className="absolute inset-0 opacity-35 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgPattern2} />
            </div>
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(110.159deg, rgb(0, 0, 0) 21.698%, rgba(0, 0, 0, 0.26) 84.415%)" }} />
            <div className="absolute inset-0 opacity-60 pointer-events-none">
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgStars1} />
            </div>

            <div className="relative w-full max-w-[1360px] mx-auto">
              <div className="absolute left-[40%] lg:left-[568.31px] size-[500px] md:size-[850px] top-[100px] opacity-50 md:opacity-100 pointer-events-none">
                <div className="absolute inset-[-37.62%]">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
                </div>
              </div>

              <div className="relative flex items-center justify-center pt-[80px] md:pt-[120px] pb-[60px] md:pb-[80px]">
                <div className="flex flex-col gap-[16px] items-center text-center w-full max-w-[1060px] px-4">
                  <h1 className="font-[family-name:var(--font-headings)] font-bold text-[36px] md:text-[56px] lg:text-[72px] leading-[1.1] tracking-[-2px] bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                    Privacy Policy
                  </h1>
                  <p className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[18px] text-white/50">
                    Last updated: March 18, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white w-full">
            <div className="max-w-[900px] mx-auto px-4 lg:px-0 py-[60px] md:py-[100px]">
              <div className="flex flex-col gap-[40px] md:gap-[56px] font-['Inter',sans-serif] text-[#1b1b1b]">

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Introduction</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    Sivarsa (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                  </p>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Information We Collect</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    We may collect information about you in a variety of ways. The information we may collect includes:
                  </p>
                  <ul className="list-disc pl-[24px] flex flex-col gap-[12px] text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    <li><strong className="text-[#1b1b1b]">Personal Data:</strong> Name, email address, phone number, company name, and other contact details you provide through our contact forms or when engaging our services.</li>
                    <li><strong className="text-[#1b1b1b]">Project Information:</strong> Details about your project requirements, budget, and goals shared during consultations.</li>
                    <li><strong className="text-[#1b1b1b]">Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                    <li><strong className="text-[#1b1b1b]">Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information.</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">How We Use Your Information</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-[24px] flex flex-col gap-[12px] text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    <li>To provide, operate, and maintain our services</li>
                    <li>To respond to your inquiries and fulfill your requests</li>
                    <li>To send you project updates and service-related communications</li>
                    <li>To improve our website and services</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect against fraudulent or unauthorized activity</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Sharing of Information</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following situations:
                  </p>
                  <ul className="list-disc pl-[24px] flex flex-col gap-[12px] text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    <li><strong className="text-[#1b1b1b]">Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and providing our services.</li>
                    <li><strong className="text-[#1b1b1b]">Legal Requirements:</strong> When required by law or to protect our rights and safety.</li>
                    <li><strong className="text-[#1b1b1b]">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Data Security</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Your Rights</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-[24px] flex flex-col gap-[12px] text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Withdraw consent at any time where processing is based on consent</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Cookies</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.
                  </p>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Changes to This Policy</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Contact Us</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    Email: <a href="mailto:contact@sivarsa.com" className="text-[#3f2fee] hover:underline">contact@sivarsa.com</a><br />
                    Phone: <a href="tel:+919259108248" className="text-[#3f2fee] hover:underline">+91-9259108248</a>
                  </p>
                </section>

              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
