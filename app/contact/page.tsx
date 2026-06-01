"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <AnimatedSection className="py-16 lg:py-24 px-4 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-gold mb-3">Get in Touch</p>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
        <p className="text-brown-lighter max-w-lg mx-auto">
          We&apos;d love to hear from you. Whether you have a question about sizing, 
          care, or just want to say hello.
        </p>
      </AnimatedSection>

      <section className="max-w-3xl mx-auto px-4 pb-24">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-serif mb-4">Reach Us</h2>
                <div className="space-y-3 text-sm text-brown-lighter">
                  <p>
                    <span className="block text-brown font-medium">Email</span>
                    hello@mindjewel.com
                  </p>
                  <p>
                    <span className="block text-brown font-medium">Phone</span>
                    +1 (555) 123-4567
                  </p>
                  <p>
                    <span className="block text-brown font-medium">Hours</span>
                    Mon — Fri, 9am — 6pm EST
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium tracking-wide mb-2">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-sm text-brown-lighter hover:text-gold transition-colors">Instagram</a>
                  <a href="#" className="text-sm text-brown-lighter hover:text-gold transition-colors">Pinterest</a>
                  <a href="#" className="text-sm text-brown-lighter hover:text-gold transition-colors">TikTok</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-cream-dark border border-brown/15 text-sm focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-cream-dark border border-brown/15 text-sm focus:outline-none focus:border-gold transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-cream-dark border border-brown/15 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
