"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BASE_PATH } from "@/lib/constants";

const imgHero = `${BASE_PATH}/assets/cdecb895a2e1e301e31eadfffa170feab26b3bf1.png`;
const imgPattern2 = `${BASE_PATH}/assets/e943fd303c0291fd9475f87f73eb8662aae4ab65.png`;
const imgStars1 = `${BASE_PATH}/assets/96e45ae1ba60f13f2644063a88546318f60a3bfb.png`;
const imgEllipse1 = `${BASE_PATH}/assets/ellipse-decoration.svg`;

export default function TermsAndConditionsPage() {
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
                    Terms &amp; Conditions
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
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Agreement to Terms</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    By accessing or using the Sivarsa website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our website or use our services.
                  </p>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Services</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    Sivarsa provides software development, staffing solutions, and growth marketing services. The specific scope, deliverables, timelines, and fees for each project will be defined in a separate Statement of Work (SOW) or service agreement between Sivarsa and the client.
                  </p>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Intellectual Property</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    Unless otherwise agreed in writing:
                  </p>
                  <ul className="list-disc pl-[24px] flex flex-col gap-[12px] text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    <li>All content on this website, including text, graphics, logos, and software, is the property of Sivarsa and is protected by intellectual property laws.</li>
                    <li>Upon full payment, clients receive ownership of custom deliverables as specified in the project agreement.</li>
                    <li>Sivarsa retains the right to use general knowledge, techniques, and experience gained during the project.</li>
                    <li>Sivarsa reserves the right to showcase completed work in its portfolio unless a Non-Disclosure Agreement (NDA) is in place.</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Confidentiality</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of engagement. An NDA can be executed upon request prior to sharing confidential information.
                  </p>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Payment Terms</h2>
                  <ul className="list-disc pl-[24px] flex flex-col gap-[12px] text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    <li>Payment terms will be outlined in the project proposal or SOW.</li>
                    <li>Unless otherwise agreed, an upfront deposit is required before work commences.</li>
                    <li>Late payments may result in project delays or suspension of services.</li>
                    <li>All fees are non-refundable once work has commenced, unless otherwise specified in the agreement.</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Client Responsibilities</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    Clients agree to:
                  </p>
                  <ul className="list-disc pl-[24px] flex flex-col gap-[12px] text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    <li>Provide timely feedback and approvals to keep the project on schedule</li>
                    <li>Supply all necessary content, assets, and access credentials as required</li>
                    <li>Designate a single point of contact for project communication</li>
                    <li>Review and accept deliverables within the agreed timeline</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Limitation of Liability</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    To the fullest extent permitted by law, Sivarsa shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of our services or website. Our total liability shall not exceed the total fees paid by the client for the specific project in question.
                  </p>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Termination</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    Either party may terminate the engagement with written notice as specified in the project agreement. Upon termination, the client shall pay for all work completed up to the date of termination. Any materials or deliverables completed will be provided to the client upon receipt of outstanding payments.
                  </p>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Governing Law</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Uttar Pradesh, India.
                  </p>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Changes to Terms</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    Sivarsa reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page. Continued use of our website or services after any changes constitutes acceptance of the revised terms.
                  </p>
                </section>

                <section className="flex flex-col gap-[16px]">
                  <h2 className="font-[family-name:var(--font-headings)] font-bold text-[24px] md:text-[32px] text-[#1b1b1b]">Contact Us</h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#7e7e81]">
                    If you have any questions about these Terms and Conditions, please contact us at:
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
