import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Users, 
  Gift, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  Star,
  Smartphone,
  Watch,
  Shirt,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Truck,
  ShieldCheck,
  MessageSquare,
  Quote
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Rewards', href: '#rewards' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-2xl px-8 py-4 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'bg-black/60 border-white/10' : 'bg-white/[0.02] border-white/5'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 accent-gradient rounded-xl flex items-center justify-center shadow-2xl shadow-accent/20">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">EXTEND</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-white/60 hover:text-white transition-all hover:tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button className="text-sm font-bold text-white/60 hover:text-white transition-colors">Login</button>
            <button className="px-7 py-3 rounded-xl font-bold accent-gradient shadow-xl shadow-accent/20 hover:scale-105 transition-transform">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2 glass rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 px-6 lg:hidden"
          >
            <div className="glass rounded-3xl p-8 flex flex-col gap-6 border-white/10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xl font-bold text-white/70 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/5" />
              <button className="w-full py-4 rounded-2xl font-bold accent-gradient">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const GlassCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`glass-card rounded-3xl p-8 ${className}`}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle: string, centered?: boolean }) => (
  <div className={`mb-20 ${centered ? 'text-center' : ''}`}>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="inline-block px-4 py-1.5 rounded-full glass border-white/10 mb-6"
    >
      <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase">
        {subtitle}
      </span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-black tracking-tight text-gradient leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-accent/40">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-neon-blue/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.85]">
              Shop Smart. <br />
              <span className="text-gradient">Earn Points.</span> <br />
              Unlock Free Products.
            </h1>
            <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-xl leading-relaxed font-medium">
              Join <span className="text-white">EXTEND</span> and unlock exclusive rewards every time you shop. The future of premium eCommerce is here.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-5 rounded-2xl font-black text-lg accent-gradient shadow-2xl shadow-accent/30 hover:scale-105 transition-transform flex items-center gap-3">
                Shop Now <ArrowRight className="w-6 h-6" />
              </button>
              <button className="px-10 py-5 rounded-2xl font-black text-lg glass border-white/10 hover:bg-white/10 transition-all">
                Earn Rewards
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-8 p-6 glass rounded-3xl border-white/5 max-w-sm">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/face${i}/100/100`} 
                    className="w-12 h-12 rounded-full border-4 border-[#0B0B0F] object-cover"
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-black">25k+ Active Shoppers</p>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  <span className="text-[10px] text-white/40 ml-1 font-bold">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 glass rounded-[4rem] p-4 border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/premium/800/1000" 
                className="rounded-[3.2rem] w-full aspect-[4/5] object-cover shadow-inner"
                alt="Premium Gadget"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Glass Panels */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass p-6 rounded-3xl border-white/20 shadow-2xl backdrop-blur-3xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl accent-gradient flex items-center justify-center">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Reward Unlocked</p>
                    <p className="font-black">Smart Watch Pro</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl border-white/20 shadow-2xl backdrop-blur-3xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Points Earned</p>
                    <p className="font-black">+2,500 PTS</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="How EXTEND Works" subtitle="The Process" />
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: "01", icon: ShoppingBag, title: "Shop Products", desc: "Browse our premium collection of gadgets, fashion, and tech essentials.", color: "text-neon-blue" },
              { step: "02", icon: Star, title: "Earn Loyalty Points", desc: "Every purchase automatically adds points to your digital wallet.", color: "text-accent" },
              { step: "03", icon: Gift, title: "Unlock Free Rewards", desc: "Redeem your points for high-end products at no extra cost.", color: "text-pink-500" }
            ].map((item, i) => (
              <GlassCard key={i} delay={i * 0.1} className="text-center group glow-border">
                <div className="absolute top-6 right-8 text-4xl font-black text-white/[0.03] group-hover:text-white/[0.08] transition-all">
                  {item.step}
                </div>
                <div className={`w-20 h-20 mx-auto rounded-3xl glass flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <item.icon className={`w-10 h-10 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <SectionHeading title="Featured Products" subtitle="Curated Collection" centered={false} />
            <div className="flex gap-3 glass p-2 rounded-2xl border-white/5">
              {['All', 'Gadgets', 'Shoes', 'Fashion'].map(cat => (
                <button key={cat} className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${cat === 'All' ? 'accent-gradient' : 'hover:bg-white/5 text-white/40 hover:text-white'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "UltraPods Max", price: "$249", pts: "+2,500", img: "audio" },
              { title: "Cyber Runner X", price: "$189", pts: "+1,800", img: "shoes" },
              { title: "Titan Watch Pro", price: "$399", pts: "+4,000", img: "watch" },
              { title: "Neon Tech Jacket", price: "$159", pts: "+1,500", img: "fashion" },
              { title: "Smart Home Hub", price: "$129", pts: "+1,200", img: "home" },
              { title: "Pro Lens Kit", price: "$89", pts: "+900", img: "camera" }
            ].map((product, i) => (
              <GlassCard key={i} delay={i * 0.05} className="p-0 overflow-hidden group">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${product.img}/800/1000`} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6 glass px-3 py-1.5 rounded-xl text-[10px] font-black text-accent border-accent/20">
                    {product.pts} PTS
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <button className="w-full py-4 rounded-2xl accent-gradient font-black text-sm shadow-2xl">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-black tracking-tight">{product.title}</h3>
                    <span className="text-xl font-black text-white/40">{product.price}</span>
                  </div>
                  <button className="w-full py-4 rounded-2xl glass border-white/10 font-black text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" /> Buy Now
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why EXTEND */}
      <section id="why-us" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Why Choose EXTEND" subtitle="Our Edge" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Earn Points", desc: "Get rewarded for every single dollar you spend on our platform.", color: "text-accent" },
              { icon: Gift, title: "Free Products", desc: "Our rewards catalog features the world's most desired tech and fashion.", color: "text-neon-blue" },
              { icon: Truck, title: "Fast Delivery", desc: "Global shipping powered by the world's most reliable logistics.", color: "text-green-400" },
              { icon: ShieldCheck, title: "Trusted Suppliers", desc: "We only partner with verified brands to ensure 100% authenticity.", color: "text-pink-500" }
            ].map((item, i) => (
              <GlassCard key={i} delay={i * 0.1} className="text-center hover:border-accent/30">
                <div className="w-16 h-16 mx-auto rounded-2xl glass flex items-center justify-center mb-6">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h4 className="text-xl font-black mb-3">{item.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed font-medium">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 blur-[150px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Unlock Free Products" subtitle="Rewards Catalog" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Pro Earbuds", pts: "5,000", img: "audio2" },
              { title: "Limited Sneakers", pts: "12,000", img: "shoes2" },
              { title: "Smart Watch V2", pts: "8,500", img: "watch2" },
              { title: "Next-Gen Console", pts: "25,000", img: "gaming" }
            ].map((reward, i) => (
              <GlassCard key={i} delay={i * 0.1} className="group cursor-pointer border-white/5 hover:border-accent/40">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 relative">
                  <img 
                    src={`https://picsum.photos/seed/${reward.img}/600/600`} 
                    alt={reward.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="glass p-4 rounded-2xl font-black text-xs">Redeem Now</div>
                  </div>
                </div>
                <h3 className="font-black text-lg mb-2">{reward.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-black tracking-tighter">{reward.pts} PTS</span>
                  <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What Our Shoppers Say" subtitle="Testimonials" />
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Alex Rivera", role: "Elite Member", text: "EXTEND completely changed how I shop. I've already unlocked two pairs of sneakers for free just by buying my usual tech gear.", avatar: "p1" },
              { name: "Sarah Chen", role: "Pro Shopper", text: "The glass UI is beautiful, but the rewards are even better. Fast delivery and authentic products every single time.", avatar: "p2" },
              { name: "Marcus Thorne", role: "Tech Enthusiast", text: "The points system is so addictive. It feels like a game where you always win. Best eCommerce experience out there.", avatar: "p3" }
            ].map((t, i) => (
              <GlassCard key={i} delay={i * 0.1} className="relative">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/[0.03]" />
                <p className="text-lg text-white/70 italic mb-8 relative z-10 font-medium leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={`https://picsum.photos/seed/${t.avatar}/100/100`} 
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-white/10"
                    alt={t.name}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-black text-sm">{t.name}</h4>
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden border-white/10"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/20 blur-[120px] -ml-48 -mb-48" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Join EXTEND Today</h2>
              <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-medium">
                Start shopping the world's best products and unlock rewards that matter. Your premium journey starts now.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="px-12 py-5 rounded-2xl font-black text-lg accent-gradient shadow-2xl shadow-accent/30 hover:scale-105 transition-transform">
                  Shop Now
                </button>
                <button className="px-12 py-5 rounded-2xl font-black text-lg glass border-white/10 hover:bg-white/10 transition-all">
                  Start Earning
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 accent-gradient rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white fill-white" />
                </div>
                <span className="text-3xl font-black tracking-tighter">EXTEND</span>
              </div>
              <p className="text-white/40 max-w-sm mb-10 text-lg font-medium leading-relaxed">
                Redefining the premium shopping experience through gamified loyalty and curated excellence.
              </p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook, Mail, MessageSquare].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-white/10 transition-all border-white/5">
                    <Icon className="w-5 h-5 text-white/60" />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-black text-lg mb-8">About EXTEND</h4>
              <ul className="space-y-5 text-sm font-bold text-white/30">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rewards Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Authenticity</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-lg mb-8">Support</h4>
              <ul className="space-y-5 text-sm font-bold text-white/30">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs font-bold text-white/20">© 2026 EXTEND Global. All rights reserved.</p>
            <div className="flex gap-10">
              <p className="text-xs font-bold text-white/20 hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
              <p className="text-xs font-bold text-white/20 hover:text-white transition-colors cursor-pointer">Cookie Settings</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
