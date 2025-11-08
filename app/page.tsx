'use client';

import { motion } from 'framer-motion';
import { Sparkles, Wand2, Image, Palette, Zap, Star, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prompt, setPrompt] = useState('');

  const features = [
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "AI Art Generation",
      description: "Transform your ideas into stunning artwork with advanced AI models"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Style Control",
      description: "Choose from dozens of artistic styles and customize every detail"
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "High Resolution",
      description: "Generate images up to 4K resolution for professional use"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Get your AI-generated art in seconds, not minutes"
    }
  ];

  const styles = [
    { name: "Photorealistic", color: "from-blue-500 to-cyan-500" },
    { name: "Oil Painting", color: "from-amber-500 to-orange-500" },
    { name: "Anime", color: "from-pink-500 to-purple-500" },
    { name: "Digital Art", color: "from-green-500 to-emerald-500" },
    { name: "3D Render", color: "from-indigo-500 to-purple-500" },
    { name: "Watercolor", color: "from-teal-500 to-blue-500" },
  ];

  const exampleImages = [
    { gradient: "from-purple-500 via-pink-500 to-red-500", prompt: "Cyberpunk cityscape at night" },
    { gradient: "from-blue-500 via-cyan-500 to-teal-500", prompt: "Underwater coral reef paradise" },
    { gradient: "from-orange-500 via-red-500 to-pink-500", prompt: "Fantasy dragon in mountains" },
    { gradient: "from-green-500 via-emerald-500 to-cyan-500", prompt: "Mystical forest with magic" },
    { gradient: "from-indigo-500 via-purple-500 to-pink-500", prompt: "Space nebula with stars" },
    { gradient: "from-yellow-500 via-orange-500 to-red-500", prompt: "Sunset over ocean waves" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Sparkles className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold gradient-text">Artistly</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#styles" className="text-gray-300 hover:text-white transition">Styles</a>
              <a href="#gallery" className="text-gray-300 hover:text-white transition">Gallery</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <button className="px-6 py-2 gradient-bg rounded-full text-white font-semibold hover:opacity-90 transition">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden glass-effect"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#features" className="block text-gray-300 hover:text-white py-2">Features</a>
              <a href="#styles" className="block text-gray-300 hover:text-white py-2">Styles</a>
              <a href="#gallery" className="block text-gray-300 hover:text-white py-2">Gallery</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white py-2">Pricing</a>
              <button className="w-full px-6 py-2 gradient-bg rounded-full text-white font-semibold mt-2">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Create <span className="gradient-text">Stunning Art</span>
              <br />with AI Magic
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Transform your imagination into breathtaking artwork. No artistic skills required.
            </p>

            {/* Prompt Input */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4 glass-effect rounded-2xl p-4">
                <input
                  type="text"
                  placeholder="Describe your dream artwork..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 px-4 py-2"
                />
                <button className="px-8 py-3 gradient-bg rounded-xl text-white font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
                  Generate <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Digital Art", "Photorealistic", "Anime", "3D"].map((tag) => (
                <span key={tag} className="px-4 py-2 glass-effect rounded-full text-sm text-gray-300 cursor-pointer hover:text-white transition">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Explore <span className="gradient-text">Endless Possibilities</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {exampleImages.map((img, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-square"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${img.gradient}`}></div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-end p-6">
                    <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition">
                      {img.prompt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Everything you need to create professional AI-generated artwork
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-2xl p-6 hover:glow-effect transition cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="text-purple-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Styles Section */}
      <section id="styles" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              Choose Your <span className="gradient-text">Artistic Style</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              From photorealistic to anime, we support every style you can imagine
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {styles.map((style, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${style.color}`}></div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                    <p className="text-white font-semibold text-center px-2">{style.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              Simple <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Choose the plan that fits your creative needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Starter", price: "9", credits: "100", features: ["100 AI generations", "Standard quality", "Basic styles", "Email support"] },
                { name: "Pro", price: "29", credits: "500", features: ["500 AI generations", "HD quality", "All styles", "Priority support", "Commercial license"], popular: true },
                { name: "Ultimate", price: "99", credits: "2000", features: ["2000 AI generations", "4K quality", "All styles + custom", "24/7 support", "Commercial license", "API access"] },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className={`glass-effect rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-purple-500 glow-effect' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  {plan.popular && (
                    <div className="flex items-center justify-center gap-1 text-purple-400 mb-4">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-semibold">MOST POPULAR</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold gradient-text">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <Star className="w-4 h-4 text-purple-400 fill-current flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-xl font-semibold transition ${plan.popular ? 'gradient-bg text-white hover:opacity-90' : 'glass-effect text-white hover:bg-white/10'}`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="glass-effect rounded-3xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create <span className="gradient-text">Amazing Art?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of artists and creators using AI to bring their visions to life
            </p>
            <button className="px-12 py-4 gradient-bg rounded-full text-white text-lg font-semibold hover:opacity-90 transition flex items-center gap-2 mx-auto">
              Start Creating Free <Sparkles className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">License</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="font-bold gradient-text">Artistly</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Artistly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
