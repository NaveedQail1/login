import React, { useState, useEffect, useRef } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.faqIndex]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-faq-index]');
    elements.forEach(el => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a Transaction Management System?",
      answer: "A Transaction Management System is a secure digital platform that helps brokers and financial professionals track, manage, and monitor all their transactions in real-time. It replaces manual record-keeping with automated, compliant, and secure digital processes. Our system handles everything from transaction logging and compliance tracking to automated reporting and audit trail generation."
    },
    {
      question: "How does it improve compliance tracking?",
      answer: "Our system automatically generates audit trails, maintains compliance documentation, and provides real-time reporting to meet regulatory requirements. All transactions are logged with timestamps, user information, and complete documentation trails. We support various regulatory frameworks including SEC, FINRA, and international compliance standards, ensuring you're always audit-ready."
    },
    {
      question: "Is my transaction data secure?",
      answer: "Yes, we use enterprise-grade encryption, secure cloud infrastructure, and follow industry best practices for data protection. Your transaction data is encrypted both in transit and at rest with AES-256 encryption. We maintain SOC 2 Type II certification, PCI DSS Level 1 compliance, and conduct regular third-party security audits. Our infrastructure is hosted on secure, geographically distributed data centers with 99.9% uptime guarantee."
    },
    {
      question: "Can multiple team members access the system?",
      answer: "Absolutely. Our system supports multi-user access with role-based permissions, allowing different team members to have appropriate access levels while maintaining security and audit trails for all actions. You can set up custom roles for brokers, compliance officers, administrators, and support staff, each with tailored permissions and access controls."
    },
    {
      question: "How quickly can I get started?",
      answer: "You can get started immediately with our free demo. Full setup typically takes less than 24 hours, including data migration assistance and team training to ensure a smooth transition from your current system. Our onboarding team provides comprehensive training, data import services, and ongoing support to help you maximize the platform's benefits from day one."
    },
    {
      question: "What integrations are available?",
      answer: "We offer 50+ pre-built integrations with popular financial platforms including QuickBooks, Salesforce, Microsoft Office 365, trading platforms, CRM systems, and accounting software. Our RESTful API allows for custom integrations, and we provide webhook support for real-time data synchronization. Our technical team can assist with custom integration requirements."
    },
    {
      question: "How much does it cost?",
      answer: "Our pricing is flexible and scales with your business needs. We offer plans starting from $99/month for small teams up to enterprise solutions for large organizations. All plans include core features, security compliance, and customer support. Contact our sales team for a customized quote based on your specific requirements and user count."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including 24/7 technical assistance, dedicated account management for enterprise clients, comprehensive documentation, video tutorials, and live training sessions. Our support team consists of financial industry experts who understand your specific needs and can provide both technical and business guidance."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="gradient-text block">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our transaction management system and how it can transform your financial operations.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-faq-index={index}
              className={`glass-card rounded-xl overflow-hidden transition-all duration-700 ${
                visibleItems.has(index.toString()) ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-purple-500/10 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-purple-400 transform transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-700 pt-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-8">
            Our team of experts is here to help you understand how our system can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg btn-hover-lift">
              Schedule Free Consultation
            </button>
            <button className="border border-purple-400/30 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;