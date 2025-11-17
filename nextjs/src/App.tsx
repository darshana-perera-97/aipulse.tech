import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Solutions } from './pages/Solutions';
import { SingleSolution } from './pages/SingleSolution';
import { Blog } from './pages/Blog';
import { SingleBlog } from './pages/SingleBlog';
import { CaseStudies } from './pages/CaseStudies';
import { SingleCaseStudy } from './pages/SingleCaseStudy';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageParams, setPageParams] = useState<string>('');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    // Check if it's a page with parameters (e.g., solution-wordpress, blog-ai-transformation)
    if (page.startsWith('solution-')) {
      const solutionId = page.replace('solution-', '');
      setPageParams(solutionId);
      setCurrentPage('single-solution');
    } else if (page.startsWith('blog-')) {
      const blogId = page.replace('blog-', '');
      setPageParams(blogId);
      setCurrentPage('single-blog');
    } else if (page.startsWith('case-study-')) {
      const caseStudyId = page.replace('case-study-', '');
      setPageParams(caseStudyId);
      setCurrentPage('single-case-study');
    } else {
      setCurrentPage(page);
      setPageParams('');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'solutions':
        return <Solutions onNavigate={handleNavigate} />;
      case 'single-solution':
        return <SingleSolution solutionId={pageParams} onNavigate={handleNavigate} />;
      case 'blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'single-blog':
        return <SingleBlog blogId={pageParams} onNavigate={handleNavigate} />;
      case 'case-studies':
        return <CaseStudies onNavigate={handleNavigate} />;
      case 'single-case-study':
        return <SingleCaseStudy caseStudyId={pageParams} onNavigate={handleNavigate} />;
      case 'resources':
        return <Resources />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
