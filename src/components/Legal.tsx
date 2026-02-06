import React, { useEffect } from 'react';

interface LegalProps {
  title: string;
  lastUpdated: string;
  content: React.ReactNode;
}

export const Legal: React.FC<LegalProps> = ({ title, lastUpdated, content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F2F2F7] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#1C1C1E] mb-2">{title}</h1>
          <p className="text-[#4A90D9] font-medium text-sm">Last Updated: {lastUpdated}</p>
        </div>
        
        <div className="prose prose-slate max-w-none text-[#1C1C1E]/80 leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

export const PrivacyContent = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">1. Introduction</h2>
      <p>Rep Fitness ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use the Rep iOS application or visit our website at repapp.io.</p>
      <p className="mt-4">For any privacy-related questions, contact us at: <span className="text-[#4A90D9]">privacy@repapp.io</span></p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">2. Information We Collect</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Account Information:</strong> Email and display name via Sign in with Apple.</li>
        <li><strong>Workout Data:</strong> Exercises, sets, reps, and weights logged by you.</li>
        <li><strong>Health Data:</strong> With your permission, heart rate and calories via Apple HealthKit.</li>
        <li><strong>Device Information:</strong> Basic device model and OS version for app stability.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">3. How We Use Your Information</h2>
      <p>We use your data to provide core app functionality, including syncing your workouts across devices via iCloud, calculating your progress, and managing leaderboards (if opted-in).</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">4. Data Storage & Security</h2>
      <p>Your data is primarily stored in Apple's iCloud (CloudKit), providing industry-standard encryption. We do not sell your personal information to third parties.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">5. Your Rights</h2>
      <p>You have the right to access, export, or delete your data at any time directly from the app settings.</p>
    </section>
  </div>
);

export const TermsContent = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">1. Acceptance of Terms</h2>
      <p>By downloading or using Rep, you agree to these Terms of Service. You must be at least 13 years old to use the application.</p>
    </section>

    <div className="bg-[#FF6B6B]/10 border-l-4 border-[#FF6B6B] p-6 rounded-r-xl">
      <h3 className="text-[#FF6B6B] font-bold text-lg mb-2 flex items-center gap-2">
        ⚠️ Health & Safety Disclaimer
      </h3>
      <p className="text-[#1C1C1E] font-medium">Rep is not a medical advisor. You should consult with a healthcare professional before starting any new exercise program. You assume all risk for physical injuries that may occur during your workouts.</p>
    </div>

    <section>
      <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">2. User Accounts</h2>
      <p>Sign in with Apple is required for full functionality. You are responsible for maintaining the security of your account credentials.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">3. Subscriptions</h2>
      <p>Premium features are available via monthly or annual subscriptions. Payments are processed through the Apple App Store. Cancellations must be managed via your Apple ID settings.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">4. Intellectual Property</h2>
      <p>The design, code, and brand assets of Rep are the exclusive property of Rep Fitness. You may not reverse-engineer or redistribute our exercise database. For legal inquiries, contact <span className="text-[#4A90D9]">legal@repapp.io</span>.</p>
    </section>
  </div>
);
