import React from 'react';
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';

interface SingleBlogProps {
  blogId: string;
  onNavigate: (page: string) => void;
}

export function SingleBlog({ blogId, onNavigate }: SingleBlogProps) {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-[#0A0F1C] to-[#1a1f3a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="px-4 py-2 bg-[#005CFF] text-white rounded-full text-sm">
              AI & Technology
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How AI is Transforming Business Operations in 2025
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-[#E7E9EF]">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>November 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <span>By Sarah Chen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1756908992154-c8a89f5e517f?w=1200"
              alt="AI Transformation"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-[#E7E9EF]">
            <span className="text-[#4A5568]">Share:</span>
            <button className="w-10 h-10 rounded-full bg-[#F7F9FC] flex items-center justify-center hover:bg-[#005CFF] hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#F7F9FC] flex items-center justify-center hover:bg-[#005CFF] hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#F7F9FC] flex items-center justify-center hover:bg-[#005CFF] hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#F7F9FC] flex items-center justify-center hover:bg-[#005CFF] hover:text-white transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-[#4A5568] mb-8 leading-relaxed">
              Artificial Intelligence is no longer a futuristic concept—it's transforming how businesses operate today. From automating repetitive tasks to providing deep insights through data analytics, AI is reshaping industries across the globe.
            </p>

            <h2 className="text-3xl font-bold text-[#0A0F1C] mb-4 mt-12">The Rise of AI in Business</h2>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              In 2025, AI has become an integral part of business operations. Companies are leveraging machine learning algorithms to predict customer behavior, optimize supply chains, and enhance decision-making processes. The technology has evolved from simple automation to sophisticated systems capable of understanding context and making intelligent recommendations.
            </p>

            <h2 className="text-3xl font-bold text-[#0A0F1C] mb-4 mt-12">Key Applications</h2>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              AI is being applied across various business functions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#4A5568] mb-8">
              <li>Customer Service: AI-powered chatbots providing 24/7 support</li>
              <li>Data Analytics: Processing massive datasets for actionable insights</li>
              <li>Process Automation: Streamlining repetitive tasks and workflows</li>
              <li>Predictive Maintenance: Anticipating equipment failures before they occur</li>
              <li>Personalization: Delivering tailored experiences to customers</li>
            </ul>

            <div className="bg-[#F7F9FC] border-l-4 border-[#005CFF] p-6 rounded-r-xl my-8">
              <p className="text-[#0A0F1C] italic">
                "AI is not about replacing humans—it's about augmenting human capabilities and allowing us to focus on what we do best: creativity, strategy, and innovation."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-[#0A0F1C] mb-4 mt-12">Implementation Strategies</h2>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              Successfully implementing AI requires a strategic approach. Organizations should start with pilot projects, measure results, and gradually scale up their AI initiatives. It's crucial to invest in data infrastructure, train employees, and establish clear governance frameworks.
            </p>

            <div className="bg-[#0A0F1C] rounded-2xl p-8 my-12">
              <pre className="text-[#E7E9EF] overflow-x-auto">
                <code>{`// Example: Simple AI Integration
import { AIModel } from 'ai-sdk';

const model = new AIModel({
  task: 'sentiment-analysis',
  model: 'transformer-v2'
});

const result = await model.analyze(userFeedback);
console.log(result.sentiment); // positive/negative/neutral`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold text-[#0A0F1C] mb-4 mt-12">Looking Ahead</h2>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              The future of AI in business is incredibly promising. As technologies like natural language processing, computer vision, and reinforcement learning continue to advance, we'll see even more innovative applications emerge. Organizations that embrace AI today will be better positioned to thrive in tomorrow's digital economy.
            </p>
          </article>

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-[#F7F9FC] rounded-2xl border border-[#E7E9EF]">
            <div className="flex items-start gap-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
                alt="Sarah Chen"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-[#0A0F1C] mb-2">Sarah Chen</h3>
                <p className="text-[#4A5568] mb-4">
                  Chief Technology Officer at AI Pulse. Passionate about AI, machine learning, and building innovative solutions that transform businesses.
                </p>
                <div className="flex gap-3">
                  <button className="text-[#005CFF] hover:underline">Follow</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0A0F1C] mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Top 10 Web Development Trends', image: 'https://images.unsplash.com/photo-1660810731526-0720827cbd38?w=400', category: 'Web Dev' },
              { title: 'Building Intelligent Chatbots', image: 'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?w=400', category: 'AI & ML' },
              { title: 'IoT for Smart Cities', image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?w=400', category: 'IoT' }
            ].map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => onNavigate('blog')}
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="px-3 py-1 bg-[#F7F9FC] text-[#005CFF] rounded-full text-sm">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#0A0F1C] mt-4 mb-3">
                    {article.title}
                  </h3>
                  <button className="text-[#005CFF] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
