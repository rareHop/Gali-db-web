import React, { useState, useEffect, FormEvent } from 'react'
import ReactDOM from 'react-dom/client'
import './simple-app.css'

// Login component
function Login({ onClose }: { onClose: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    // Mock login - in a real app, you would call an API
    if (username === 'admin' && password === 'password') {
      // Success
      onClose();
    } else {
      setError('Invalid username or password');
    }
  };
  
  return (
    <div className="login-overlay">
      <div className="login-modal">
        <div className="login-header">
          <h2>Login</h2>
          <p>Enter your credentials to access your account</p>
        </div>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          
          <div className="login-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
        
        <button className="close-modal" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ maxWidth: '100%', margin: '0 auto', padding: '20px' }}>
      <div className="card">
        <h1>About Slang Dictionary</h1>
        
        <p style={{ marginBottom: '20px' }}>
          Welcome to the Hinglish Gaaliya DB - your go-to platform for exploring and sharing English and
          Hinglish slang expressions! This project was created by Mainak and Viccky to build a
          community-driven repository of contemporary slang language.
        </p>

        <div style={{ background: '#8b5cf6', padding: '20px', borderRadius: 'var(--radius-md)', marginBottom: '20px', color: 'white', boxShadow: 'var(--shadow-md)' }}>
          <h2>About the Creators</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '10px' }}>
            <div style={{ flex: 1, minWidth: '200px', textAlign: 'center' }}>
              <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', transition: 'var(--transition)' }}
                className="hover-scale">
                <span style={{ fontSize: '36px' }}>👨‍💻</span>
              </div>
              <h3 style={{ marginTop: '12px', color: 'white' }}>Mainak</h3>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>Lead Developer</p>
            </div>
            
            <div style={{ flex: 1, minWidth: '200px', textAlign: 'center' }}>
              <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', transition: 'var(--transition)' }}
                className="hover-scale">
                <span style={{ fontSize: '36px' }}>👨‍🎨</span>
              </div>
              <h3 style={{ marginTop: '12px', color: 'white' }}>Viccky</h3>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>UI/UX Designer</p>
            </div>
          </div>
        </div>
        
        <h2>Additional Ways to Contribute</h2>
        <p style={{ marginBottom: '20px' }}>
          You can also give gaaliya through our Discord bot! Join our community to interact with fellow
          language enthusiasts and contribute through our specialized Discord bot.
        </p>
        
        <div className="glass-card" style={{ padding: '20px', borderRadius: 'var(--radius-md)', marginBottom: '20px', boxShadow: 'var(--shadow)' }}>
          <h3 style={{ color: '#4338ca' }}>Discord Community</h3>
          <p style={{ marginBottom: '15px', color: '#4338ca' }}>
            Join our vibrant Discord community and connect with other slang enthusiasts!
          </p>
          <a 
            href="https://discord.gg/BKgwpnGJ" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-block', 
              background: '#8b5cf6', 
              color: 'white', 
              padding: '10px 20px', 
              borderRadius: 'var(--radius-sm)', 
              textDecoration: 'none',
              boxShadow: 'var(--shadow)',
              transition: 'var(--transition)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Join Discord
          </a>
        </div>
        
        <h2>Features</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
          <span className="badge badge-primary">Slang Submission</span>
          <span className="badge badge-success">Real-time Preview</span>
          <span className="badge badge-warning">Dark/Light Mode</span>
          <span className="badge badge-primary">Rich Text Editor</span>
          <span className="badge badge-success">Top Contributors</span>
          <span className="badge badge-warning">Discord Bot</span>
        </div>
        
        <ul style={{ paddingLeft: '20px' }}>
          <li>Submit and share slang expressions in English/Hinglish</li>
          <li>Real-time JSON preview with syntax highlighting</li>
          <li>Rich text editor with emoji support</li>
          <li>Dark/Light theme support</li>
          <li>Top contributors leaderboard</li>
          <li>Discord bot integration</li>
        </ul>
        
        <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--light-border)' }}>
          <a 
            href="#" 
            id="back-to-home" 
            style={{ color: 'var(--primary-color)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}
            onClick={(e) => { e.preventDefault(); window.history.back(); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

// Helper function to format JSON with syntax highlighting
function JsonFormatter({ jsonData }: { jsonData: any }) {
  const jsonString = JSON.stringify(jsonData, null, 2);
  
  // Simple syntax highlighting for JSON
  const highlightedJson = jsonString
    .replace(/"([^"]+)":/g, '<span class="json-key">"$1":</span>')
    .replace(/"([^"]+)"(?!:)/g, '<span class="json-string">"$1"</span>')
    .replace(/\b(\d+)(?![^<]*>)/g, '<span class="json-number">$1</span>');
  
  return (
    <pre className="json-preview">
      <div dangerouslySetInnerHTML={{ __html: highlightedJson }} />
    </pre>
  );
}

// Slang entry component with expand/collapse functionality
function SlangEntry({ entry, isExpanded, onToggleExpand }: { entry: any, isExpanded: boolean, onToggleExpand: () => void }) {
  const hasWarning = entry.meaning.toLowerCase().includes('caution:') || 
                    entry.meaning.toLowerCase().includes('vulgar') || 
                    entry.term.toLowerCase().includes('chutiya') ||
                    entry.term.toLowerCase().includes('ghanta');
  
  return (
    <div className="slang-entry" onClick={onToggleExpand}>
      <div className="slang-term">
        {entry.term} 
        {hasWarning && <span className="caution-badge">Adult</span>}
        <span className="slang-category">{entry.category}</span>
      </div>
      <div className="slang-meaning">{entry.meaning}</div>
      <div className="slang-footer">
        <div className="slang-author">Posted by <span style={{ color: 'var(--text-muted-dark)' }}>{entry.author}</span> • <span style={{ color: 'var(--text-muted-dark)' }}>{entry.timestamp}</span></div>
        <div className="slang-engagement">
          <span className="engagement-item">❤️ {entry.likes || 0}</span>
          <span className="engagement-item">🔗 {entry.shares || 0}</span>
          <span 
            style={{ color: 'var(--primary-color)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            {isExpanded ? 'Collapse' : 'Click to expand'} 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease'
              }}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
      </div>
      {isExpanded && (
        <div className="expanded-details active">
          <div style={{ marginTop: '1rem' }}>
            <JsonFormatter jsonData={entry} />
          </div>
        </div>
      )}
    </div>
  );
}

// Terms component
function Terms() {
  return (
    <div className="container">
      <h1>Terms & Conditions</h1>
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2>1. Acceptance of Terms</h2>
        <p>Welcome to the "Hinglish Gaaliya DB". By accessing or using our slang dictionary, you agree to these Terms & Conditions. If you don't agree, please refrain from using our services.</p>
        
        <div className="caution-box">
          <strong>CAUTION:</strong> The content in this application includes slang terms that may be considered offensive, vulgar, or inappropriate by some users. User discretion is advised.
        </div>
      </div>
      
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2>2. User Contributions</h2>
        <p>When you contribute slang terms to our database:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>You retain ownership of your content, but grant us a license to use it</li>
          <li>You confirm that your contributions don't violate any third-party rights</li>
          <li>We reserve the right to remove content that violates our guidelines</li>
          <li>Excessive offensive content may be moderated or removed</li>
        </ul>
      </div>
      
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2>3. Limitation of Liability</h2>
        <p>Our "Hinglish Gaaliya DB" is provided "as is" without any warranties. We are not responsible for the accuracy of user-submitted slang terms or any consequences resulting from using our service.</p>
      </div>
      
      <div className="card">
        <h2>4. Changes to Terms</h2>
        <p>We may update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
        <p><strong>Last Updated:</strong> April 3, 2024</p>
      </div>
    </div>
  );
}

// Privacy component  
function Privacy() {
  return (
    <div className="container">
      <h1>Privacy Policy</h1>
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2>1. Information We Collect</h2>
        <p>When using our Hinglish Gaaliya DB, we may collect:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Your username when you contribute terms</li>
          <li>Non-personally identifiable usage data (e.g., which slang terms you view)</li>
          <li>IP address and device information for security purposes</li>
        </ul>
      </div>
      
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2>2. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Display your username with your contributions</li>
          <li>Improve our slang dictionary's functionality</li>
          <li>Monitor for inappropriate content</li>
          <li>Analyze usage patterns to enhance user experience</li>
        </ul>
      </div>
      
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2>3. Cookies & Tracking</h2>
        <p>We use cookies to remember your preferences (like dark mode setting) and to analyze how users interact with our application. You can disable cookies in your browser settings, but this may affect some functionality.</p>
      </div>
      
      <div className="card">
        <h2>4. Data Security</h2>
        <p>While we implement reasonable security measures, no internet transmission is 100% secure. By using our slang dictionary, you acknowledge this risk.</p>
        <p><strong>Last Updated:</strong> April 3, 2024</p>
      </div>
    </div>
  );
}

// Help component
function Help() {
  return (
    <div className="container">
      <h1>Help & FAQ</h1>
      
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2>Getting Started</h2>
        <p>Hinglish Gaaliya DB is a community-driven slang dictionary focused on Hindi-English hybrid slang terms. Here's how to use it:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li><strong>Browse slang:</strong> View all available slang entries on the homepage</li>
          <li><strong>Learn meaning:</strong> Click on any slang term to expand and view its full details</li>
          <li><strong>Contribute:</strong> Login and add your own slang terms to help grow the database</li>
          <li><strong>Change theme:</strong> Toggle between light and dark mode using the button in the header</li>
        </ul>
      </div>
      
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2>Frequently Asked Questions</h2>
        
        <h3 style={{ marginTop: '1rem' }}>What is Hinglish?</h3>
        <p>Hinglish is a blend of Hindi and English languages, commonly used in everyday conversations in India and by the Indian diaspora.</p>
        
        <h3 style={{ marginTop: '1rem' }}>How can I add a new slang term?</h3>
        <p>Login to your account, then use the "Add New Slang" form at the top of the homepage.</p>
        
        <h3 style={{ marginTop: '1rem' }}>Why was my slang submission rejected?</h3>
        <p>Submissions may be rejected if they violate our community guidelines, contain hate speech, or duplicate existing entries.</p>
        
        <h3 style={{ marginTop: '1rem' }}>How do I report offensive content?</h3>
        <p>Currently, we're working on a reporting feature. For now, please contact us directly through our Discord community.</p>
      </div>
      
      <div className="card">
        <h2>Contact Support</h2>
        <p>Need more help? Join our Discord community or email us at:</p>
        <a href="mailto:support@hinglishdb.example.com" className="primary-button" style={{ display: 'inline-block', marginTop: '0.5rem' }}>
          support@hinglishdb.example.com
        </a>
      </div>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('light-mode')
  const [currentPage, setCurrentPage] = useState('home')
  const [term, setTerm] = useState('')
  const [category, setCategory] = useState('Hinglish')
  const [author] = useState('Anonymous')
  const [expandedEntryId, setExpandedEntryId] = useState<number | null>(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showAllContributors, setShowAllContributors] = useState(false)
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    setTheme(savedTheme);
  }, []);

  // Mock data for slang entries
  const slangEntries = [
    { id: 1, term: "Bhaisahab", meaning: "Brother/Sir - Used to express shock. Example: 'Bhaisahab, kitna kharab ho gaya yeh!'", category: "Hinglish", author: "Desi_User", timestamp: "2023-04-15", likes: 245, shares: 58 },
    { id: 2, term: "Jugaad", meaning: "A creative hack/solution when you're too broke for the real thing. When engineering meets desperation.", category: "Hinglish", author: "InnovatorX", timestamp: "2023-04-12", likes: 189, shares: 42 },
    { id: 3, term: "Chutiya", meaning: "CAUTION: Vulgar. A fool/idiot. Example: 'Don't be a chutiya, use your brain'", category: "Hindi Slang", author: "FreeSpirit", timestamp: "2023-04-10", likes: 156, shares: 31 },
    { id: 4, term: "Timepass", meaning: "Something so pointless you do it just to kill time. Like scrolling social media while your boss thinks you're working.", category: "Hinglish", author: "ChillDude", timestamp: "2023-04-08", likes: 134, shares: 27 },
    { id: 5, term: "Filmy", meaning: "Dramatic like a Bollywood movie. When someone overreacts as if there's background music playing.", category: "Hinglish", author: "BollywoodFan", timestamp: "2023-04-05", likes: 122, shares: 25 },
    { id: 6, term: "Chai-Pani", meaning: "Small bribe to get your work done. Because corruption needs a cute nickname.", category: "Hinglish", author: "TruthSpeaker", timestamp: "2023-04-01", likes: 105, shares: 19 },
    { id: 7, term: "Bakwaas", meaning: "Nonsense/rubbish. What your parents call everything you say in an argument.", category: "Hindi Slang", author: "StreetSmart", timestamp: "2023-03-29", likes: 99, shares: 22 },
    { id: 8, term: "Fundae", meaning: "Concepts or principles. What engineering students pretend to understand but actually don't.", category: "Hinglish", author: "Nerd123", timestamp: "2023-03-25", likes: 87, shares: 15 },
    { id: 9, term: "Ghanta", meaning: "CAUTION: Vulgar. Expressing 'absolutely nothing'. Example: 'Ghanta kuch hoga'", category: "Hindi Slang", author: "CynicKid", timestamp: "2023-03-20", likes: 76, shares: 14 },
    { id: 10, term: "Jhakaas", meaning: "Awesome/fantastic. When something's so good that English words aren't dramatic enough.", category: "Hinglish", author: "MumbaiBoy", timestamp: "2023-03-15", likes: 65, shares: 12 }
  ];
  
  // Mock data for top contributors - expanded to 10
  const topContributors = [
    { id: 1, name: "Divyanshu", avatar: "https://i.pravatar.cc/150?img=1", contributions: 47 },
    { id: 2, name: "Riya", avatar: "https://i.pravatar.cc/150?img=5", contributions: 35 },
    { id: 3, name: "Vikram", avatar: "https://i.pravatar.cc/150?img=3", contributions: 29 },
    { id: 4, name: "Ananya", avatar: "https://i.pravatar.cc/150?img=9", contributions: 24 },
    { id: 5, name: "Arjun", avatar: "https://i.pravatar.cc/150?img=6", contributions: 22 },
    { id: 6, name: "Sneha", avatar: "https://i.pravatar.cc/150?img=11", contributions: 19 },
    { id: 7, name: "Karan", avatar: "https://i.pravatar.cc/150?img=12", contributions: 17 },
    { id: 8, name: "Neha", avatar: "https://i.pravatar.cc/150?img=13", contributions: 15 },
    { id: 9, name: "Raj", avatar: "https://i.pravatar.cc/150?img=14", contributions: 13 },
    { id: 10, name: "Priya", avatar: "https://i.pravatar.cc/150?img=15", contributions: 11 },
  ];
  
  const toggleTheme = () => {
    const newTheme = theme === 'light-mode' ? 'dark-mode' : 'light-mode';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }
  
  const navigateTo = (page: string) => {
    setCurrentPage(page)
  }

  const toggleExpandEntry = (id: number) => {
    setExpandedEntryId(expandedEntryId === id ? null : id);
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Submitted: ${term} in category ${category}`);
    // In a real app, you would submit to a database here
    setTerm('');
  };
  
  const previewData = {
    "term": term || "slang****",
    "author": author || "author name",
    "category": category,
    "time-stamp": new Date().toISOString(),
  };
  
  return (
    <div className={`${theme}`}>
      {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}
      
      <header className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '20px 0', 
          borderBottom: `1px solid ${theme === 'dark-mode' ? 'var(--dark-border)' : 'var(--light-border)'}`, 
          flexWrap: 'wrap', 
          gap: '10px',
          background: theme === 'dark-mode' ? 'var(--bg-color)' : 'var(--bg-color)',
          zIndex: 10,
          position: 'relative'
        }}>
          <h1 
            style={{ cursor: 'pointer', fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--primary-color)', margin: '0' }} 
            onClick={() => navigateTo('home')}
          >
            Hinglish Gaaliya DB
          </h1>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#" 
              className="nav-link"
              style={{ 
                color: currentPage === 'home' ? 'var(--primary-color)' : theme === 'dark-mode' ? '#f1f5f9' : '#1e293b', 
                fontWeight: currentPage === 'home' ? '600' : '500' 
              }}
              onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
            >
              Home
            </a>
            <a 
              href="#" 
              className="nav-link"
              style={{ 
                color: currentPage === 'about' ? 'var(--primary-color)' : theme === 'dark-mode' ? '#f1f5f9' : '#1e293b', 
                fontWeight: currentPage === 'about' ? '600' : '500' 
              }}
              onClick={(e) => { e.preventDefault(); navigateTo('about'); }}
            >
              About
            </a>
            <a 
              href="#" 
              className="nav-link"
              style={{ 
                color: currentPage === 'help' ? 'var(--primary-color)' : theme === 'dark-mode' ? '#f1f5f9' : '#1e293b', 
                fontWeight: currentPage === 'help' ? '600' : '500' 
              }}
              onClick={(e) => { e.preventDefault(); navigateTo('help'); }}
            >
              Help
            </a>
            <a 
              href="#" 
              className="nav-link"
              style={{ 
                color: currentPage === 'terms' ? 'var(--primary-color)' : theme === 'dark-mode' ? '#f1f5f9' : '#1e293b', 
                fontWeight: currentPage === 'terms' ? '600' : '500' 
              }}
              onClick={(e) => { e.preventDefault(); navigateTo('terms'); }}
            >
              Terms
            </a>
            <a 
              href="#" 
              className="nav-link"
              style={{ 
                color: currentPage === 'privacy' ? 'var(--primary-color)' : theme === 'dark-mode' ? '#f1f5f9' : '#1e293b', 
                fontWeight: currentPage === 'privacy' ? '600' : '500' 
              }}
              onClick={(e) => { e.preventDefault(); navigateTo('privacy'); }}
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="nav-link"
              style={{ 
                color: theme === 'dark-mode' ? '#f1f5f9' : '#1e293b',
                fontWeight: '500'  
              }}
              onClick={(e) => { 
                e.preventDefault(); 
                setShowLoginModal(true); 
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '5px' }}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Login
            </a>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark-mode' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>
      
      <main>
        {currentPage === 'home' ? (
          <div className="container" style={{ marginTop: '2rem' }}>
            <div className="grid">
              <div>
                <div className="card caution-box">
                  <h2>Caution</h2>
                  
                  <div className="warning-notice">
                    <p style={{ margin: 0 }}>
                      कृपया सावधानी से उपयोग करें, और अपना दिल खोल कर गालियां दें, धन्यवाद!
                      <br />
                      <small>(Please use with caution, and feel free to express yourself openly, thank you!)</small>
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div style={{ marginTop: '1.5rem' }}>
                      <label>
                        Enter Gaali
                      </label>
                      <textarea 
                        value={term} 
                        onChange={(e) => setTerm(e.target.value)} 
                        placeholder="Type your slang term here"
                        style={{ minHeight: '120px', resize: 'vertical' }}
                      ></textarea>
                    </div>
                    
                    <div>
                      <label>
                        Category
                      </label>
                      <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Casual">Casual</option>
                        <option value="Formal">Formal</option>
                        <option value="Slang">Slang</option>
                        <option value="Hinglish">Hinglish</option>
                        <option value="Meme">Meme</option>
                        <option value="Abusive">Abusive</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div style={{ marginTop: '1.5rem' }}>
                      <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '500' }}>Preview</h3>
                      <JsonFormatter jsonData={previewData} />
                    </div>
                    
                    <button 
                      type="submit" 
                      className="primary-button"
                      style={{ marginTop: '1.5rem', width: '100%', position: 'relative', overflow: 'hidden' }}
                    >
                      <span style={{ position: 'relative', zIndex: 2 }}>Submit</span>
                    </button>
                  </form>
                </div>
                
                <div style={{ marginTop: '2rem' }}>
                  {slangEntries.map(entry => (
                    <SlangEntry 
                      key={entry.id}
                      entry={entry} 
                      isExpanded={expandedEntryId === entry.id}
                      onToggleExpand={() => toggleExpandEntry(entry.id)}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <div className="card" style={{ overflow: 'hidden' }}>
                  <div className="green-header">
                    <h2 style={{ margin: 0, fontWeight: '600', fontSize: '1.25rem' }}>Top Contributors</h2>
                  </div>
                  
                  <div className="contributors-list">
                    {topContributors.slice(0, showAllContributors ? 10 : 5).map(contributor => (
                      <div className="contributor-card" key={contributor.id}>
                        <img 
                          src={contributor.avatar} 
                          alt={`${contributor.name}'s avatar`} 
                          className="contributor-avatar hover-scale"
                        />
                        <div className="contributor-info">
                          <p className="contributor-name">{contributor.name}</p>
                          <p className="contribution-count">{contributor.contributions} contributions</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="contributors-toggle">
                    <button 
                      className={`show-more-button ${showAllContributors ? 'expanded' : ''}`}
                      onClick={() => setShowAllContributors(!showAllContributors)}
                    >
                      {showAllContributors ? 'Show Less' : 'Show More'}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="card" style={{ marginTop: '1.5rem', background: 'var(--gradient-orange)', color: 'white', overflow: 'hidden', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 0, right: 0, width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '0 0 0 80px', zIndex: 0 }}></div>
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{ margin: '0 0 1rem 0', fontWeight: '600' }}>Join Discord Community</h3>
                    <p style={{ marginBottom: '1.25rem', color: 'rgba(255,255,255,0.9)' }}>
                      Be part of our growing community! Share and discover new slang terms.
                    </p>
                    <a 
                      href="https://discord.gg/BKgwpnGJ" 
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        display: 'inline-block', 
                        background: 'white', 
                        color: '#f97316', 
                        padding: '0.5rem 1rem', 
                        borderRadius: 'var(--radius-sm)', 
                        textDecoration: 'none',
                        fontWeight: '500',
                        boxShadow: 'var(--shadow)',
                        transition: 'var(--transition)'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      Join Now
                    </a>
                  </div>
                </div>
                
                <div className="card glass-card" style={{ marginTop: '1.5rem' }}>
                  <h3 style={{ marginTop: '0', marginBottom: '1rem' }}>Latest Updates</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary-color)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <div>
                        <p style={{ margin: '0 0 4px', fontWeight: '500' }}>New Discord Bot Features</p>
                        <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text-muted-dark)' }}>Added slang voting system in Discord</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success-color)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                      </div>
                      <div>
                        <p style={{ margin: '0 0 4px', fontWeight: '500' }}>Daily Trending Slangs</p>
                        <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text-muted-dark)' }}>Now featuring daily trending slang terms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {currentPage === 'about' && <About />}
            {currentPage === 'terms' && <Terms />}
            {currentPage === 'privacy' && <Privacy />}
            {currentPage === 'help' && <Help />}
          </>
        )}
      </main>
      
      <footer style={{ padding: '2rem 0', textAlign: 'center', marginTop: '2rem', borderTop: `1px solid ${theme === 'dark-mode' ? 'var(--dark-border)' : 'var(--light-border)'}` }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.9rem', margin: '0 0 8px' }}>
            © 2025 Hinglish Gaaliya DB. Created by Mainak & Viccky with ❤️
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '12px' }}>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Help</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 