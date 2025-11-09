'use client';

import { commonContent } from '@/data';
import { useState } from 'react';

interface ContactFormProps {
  title: string;
  subtitle?: string;
}

export default function ContactForm({ title, subtitle }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const email = commonContent.profile.socialLinks.email;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
        formData.subject || 'Contact Form Submission'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open user's email client
      window.location.href = mailtoLink;

      setSubmitStatus('success');

      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-medium text-primary mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-body max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-primary mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-white text-heading"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-white text-heading"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-primary mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-white text-heading"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-primary mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-white text-heading resize-vertical"
              placeholder="Tell me about your project, ideas, or just say hello..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-block bg-primary text-white px-8 py-3 font-bold tracking-wider uppercase hover:bg-secondary transition-colors duration-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : 'Send Email'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="text-center p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-800">
                Email client opened! Please send the message from your email
                application.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-center p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800">
                There was an error processing your request. Please try again or
                contact me directly.
              </p>
            </div>
          )}
        </form>

        <div className="mt-12 text-center">
          <p className="text-body mb-4">Prefer to reach out directly?</p>
          <div className="space-y-2">
            <p>
              <a
                href={`mailto:${email}`}
                className="text-primary hover:text-secondary transition-colors duration-200 font-medium"
              >
                {email}
              </a>
            </p>
            <p className="text-sm text-body">
              I typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
