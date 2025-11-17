import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface BlogProps {
  onNavigate: (page: string) => void;
}

export function Blog({ onNavigate }: BlogProps) {
  const blogs = [
    {
      id: 'ai-transformation',
      title: 'How AI is Transforming Business Operations in 2025',
      description: 'Explore the latest trends in artificial intelligence and how businesses are leveraging AI to optimize processes, reduce costs, and enhance customer experiences.',
      image: 'https://images.unsplash.com/photo-1756908992154-c8a89f5e517f?w=800',
      category: 'AI & Technology',
      date: 'November 15, 2025',
      readTime: '8 min read'
    },
    {
      id: 'web-dev-trends',
      title: 'Top 10 Web Development Trends to Watch',
      description: 'Discover the cutting-edge technologies and frameworks shaping modern web development, from serverless architecture to progressive web apps.',
      image: 'https://images.unsplash.com/photo-1660810731526-0720827cbd38?w=800',
      category: 'Web Development',
      date: 'November 10, 2025',
      readTime: '6 min read'
    },
    {
      id: 'iot-smart-cities',
      title: 'IoT Solutions for Smart Cities and Infrastructure',
      description: 'Learn how IoT sensors and real-time data analytics are revolutionizing urban planning and creating more efficient, sustainable cities.',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?w=800',
      category: 'IoT',
      date: 'November 5, 2025',
      readTime: '7 min read'
    },
    {
      id: 'mobile-ux',
      title: 'Best Practices for Mobile App UX Design',
      description: 'Essential principles and techniques for creating intuitive, engaging mobile experiences that users love.',
      image: 'https://images.unsplash.com/photo-1737573296361-75315239293a?w=800',
      category: 'Mobile Development',
      date: 'October 28, 2025',
      readTime: '5 min read'
    },
    {
      id: 'chatbot-guide',
      title: 'Building Intelligent Chatbots with NLP',
      description: 'A comprehensive guide to creating conversational AI chatbots using natural language processing and machine learning.',
      image: 'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?w=800',
      category: 'AI & ML',
      date: 'October 20, 2025',
      readTime: '10 min read'
    },
    {
      id: 'seo-2025',
      title: 'SEO Strategies That Actually Work in 2025',
      description: 'Evidence-based SEO techniques for improving search rankings, driving organic traffic, and growing your online presence.',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?w=800',
      category: 'Digital Marketing',
      date: 'October 15, 2025',
      readTime: '9 min read'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Web Development', 'Mobile Development', 'IoT', 'AI & ML', 'Digital Marketing'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0A0F1C] via-[#1a1f3a] to-[#0A0F1C]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#005CFF] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#7B3FFF] rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Insights & Innovations in{' '}
            <span className="bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-transparent bg-clip-text">
              Artificial Intelligence
            </span>
          </h1>
          <p className="text-xl text-[#E7E9EF]">
            Stay updated with the latest trends, tutorials, and insights from the world of AI and software development
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              {/* Category Filter */}
              <div className="mb-12 flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-[#005CFF] to-[#7B3FFF] text-white'
                        : 'bg-[#F7F9FC] text-[#4A5568] hover:bg-[#E7E9EF]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Blog Grid */}
              <div className="space-y-8">
                {filteredBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E7E9EF] hover:shadow-xl transition-all duration-300"
                    onClick={() => onNavigate(`blog-${blog.id}`)}
                  >
                    <div className="md:flex">
                      <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                        <ImageWithFallback
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-[#005CFF] text-white rounded-full text-sm">
                            {blog.category}
                          </span>
                        </div>
                      </div>
                      <div className="md:w-3/5 p-8">
                        <div className="flex items-center gap-4 text-sm text-[#4A5568] mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {blog.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {blog.readTime}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-[#0A0F1C] mb-3 group-hover:text-[#005CFF] transition-colors">
                          {blog.title}
                        </h2>
                        <p className="text-[#4A5568] mb-6">
                          {blog.description}
                        </p>
                        <button className="text-[#005CFF] flex items-center gap-2 group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 space-y-8">
              {/* Recent Posts */}
              <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-[#E7E9EF]">
                <h3 className="text-xl font-bold text-[#0A0F1C] mb-6">Recent Posts</h3>
                <div className="space-y-4">
                  {blogs.slice(0, 3).map((blog) => (
                    <button
                      key={blog.id}
                      onClick={() => onNavigate(`blog-${blog.id}`)}
                      className="block text-left hover:text-[#005CFF] transition-colors"
                    >
                      <p className="text-sm text-[#0A0F1C] mb-1">{blog.title}</p>
                      <p className="text-xs text-[#4A5568]">{blog.date}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-[#E7E9EF]">
                <h3 className="text-xl font-bold text-[#0A0F1C] mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['AI', 'Machine Learning', 'Web Development', 'Mobile Apps', 'IoT', 'Cloud', 'SEO', 'Automation', 'Chatbots'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white border border-[#E7E9EF] rounded-full text-sm text-[#4A5568] hover:border-[#005CFF] hover:text-[#005CFF] cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
