import React from 'react';
import { 
  Bot, 
  Zap, 
  MessageSquare, 
  Instagram, 
  Users, 
  Layers, 
  BarChart3, 
  Headset,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  LayoutDashboard,
  Database,
  Workflow,
  Globe,
  Plus,
  Search,
  Bell,
  Settings,
  LogOut,
  MoreVertical,
  Mail,
  Phone,
  Calendar,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
export type View = 'landing' | 'dashboard';

// --- Components ---

export const Navbar = ({ onNavigate }: { onNavigate: (view: View) => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate('landing')}>
            <div className="w-10 h-10 bg-gradient-to-br from-lookin-primary to-lookin-secondary rounded-xl flex items-center justify-center shadow-lg shadow-lookin-primary/20 group-hover:scale-105 transition-transform">
              <span className="text-lookin-deep font-black text-2xl font-script leading-none pt-1">in.</span>
            </div>
            <span className="text-2xl font-black font-display tracking-tight text-white">Look<span className="text-gradient font-script text-3xl lowercase">in.</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Servicios</a>
            <a href="#como-funciona" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Metodología</a>
            <a href="#plataforma" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Plataforma</a>
            <a href="#demo" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Demo IA</a>
            <button 
              onClick={() => onNavigate('dashboard')}
              className="btn-secondary py-2 px-5 text-sm flex items-center gap-2"
            >
              <LayoutDashboard size={16} />
              Acceso Demo
            </button>
            <button className="btn-primary py-2 px-5 text-sm">Solicitar Demo</button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass border-t border-white/5 p-4 flex flex-col gap-4"
          >
            <a href="#servicios" onClick={() => setIsOpen(false)} className="px-4 py-2 text-white/70">Servicios</a>
            <a href="#como-funciona" onClick={() => setIsOpen(false)} className="px-4 py-2 text-white/70">Metodología</a>
            <a href="#plataforma" onClick={() => setIsOpen(false)} className="px-4 py-2 text-white/70">Plataforma</a>
            <button onClick={() => { onNavigate('dashboard'); setIsOpen(false); }} className="btn-secondary w-full">Acceso Demo</button>
            <button className="btn-primary w-full">Solicitar Demo</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-lookin-primary/30 transition-all group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
      <span className="text-5xl font-black font-script text-lookin-primary">in.</span>
    </div>
    <div className="w-14 h-14 rounded-2xl bg-lookin-primary/10 flex items-center justify-center mb-6 group-hover:bg-lookin-primary/20 transition-colors">
      <Icon className="text-lookin-primary w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
    <p className="text-lookin-soft/60 text-sm leading-relaxed mb-6">{description}</p>
    <a href="#" className="text-lookin-primary text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
      Saber más <ArrowRight size={16} />
    </a>
  </motion.div>
);

export const DashboardMockup = () => (
  <div className="relative w-full max-w-5xl mx-auto mt-20">
    <div className="absolute -top-20 -left-20 w-64 h-64 bg-lookin-primary/10 blur-[100px] rounded-full" />
    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-lookin-secondary/10 blur-[100px] rounded-full" />
    
    <div className="glass rounded-3xl overflow-hidden shadow-2xl border border-white/10">
      {/* Fake Browser Header */}
      <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="bg-white/5 px-4 py-1 rounded-lg text-[10px] text-white/30 font-mono">
          app.lookin.ai/dashboard
        </div>
        <div className="w-10" />
      </div>
      
      {/* Fake UI Content */}
      <div className="flex h-[500px]">
        {/* Sidebar */}
        <div className="w-48 border-r border-white/5 p-4 hidden sm:block">
          <div className="space-y-4">
            {[LayoutDashboard, MessageSquare, Users, Workflow, BarChart3, Settings].map((Icon, i) => (
              <div key={i} className={`flex items-center gap-3 p-2 rounded-lg ${i === 0 ? 'bg-lookin-primary/10 text-lookin-primary' : 'text-white/40'}`}>
                <Icon size={18} />
                <div className="h-2 w-16 bg-current opacity-20 rounded" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-8 overflow-hidden bg-lookin-deep/50">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="h-2 w-12 bg-white/20 rounded mb-3" />
                <div className="h-6 w-20 bg-white/40 rounded" />
              </div>
            ))}
          </div>
          
          <div className="bg-white/5 rounded-2xl border border-white/5 p-6 h-full">
            <div className="flex justify-between mb-6">
              <div className="h-4 w-32 bg-white/20 rounded" />
              <div className="h-4 w-20 bg-white/10 rounded" />
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                    <div className="space-y-2">
                      <div className="h-2 w-24 bg-white/30 rounded" />
                      <div className="h-2 w-16 bg-white/10 rounded" />
                    </div>
                  </div>
                  <div className="h-2 w-12 bg-lookin-primary/20 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ChatDemo = () => {
  const [messages, setMessages] = React.useState([
    { role: 'assistant', content: '¡Hola! Soy el asistente inteligente de Lookin. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [isTyping, setIsTyping] = React.useState(false);

  const suggestions = [
    "¿Cómo funciona Lookin?",
    "Quiero automatizar mi WhatsApp",
    "Ver planes de consultoría",
    "¿Qué es un CRM con IA?"
  ];

  const handleSend = (content: string) => {
    setMessages([...messages, { role: 'user', content }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Gracias por tu interés en "${content}". Esta es una simulación de cómo nuestra IA puede responder instantáneamente a tus clientes.` 
      }]);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      <div className="bg-gradient-to-r from-lookin-primary to-lookin-secondary p-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">
          <span className="text-lookin-deep font-black text-2xl font-script pt-1">in.</span>
        </div>
        <div>
          <h4 className="font-bold text-lg text-lookin-deep">Asistente Lookin</h4>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-lookin-deep/50 animate-pulse" />
            <span className="text-xs text-lookin-deep/70">En línea ahora</span>
          </div>
        </div>
      </div>
      
      <div className="h-[400px] overflow-y-auto p-6 space-y-4 bg-lookin-bg/50">
        {messages.map((msg, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={i} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
              msg.role === 'user' 
                ? 'bg-lookin-primary text-lookin-deep font-medium rounded-tr-none' 
                : 'bg-white/10 text-white/90 rounded-tl-none border border-white/5'
            }`}>
              {msg.content}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-white/5 bg-white/[0.02]">
        <div className="flex flex-wrap gap-2 mb-4">
          {suggestions.map((s, i) => (
            <button 
              key={i}
              onClick={() => handleSend(s)}
              className="text-[10px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/60"
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="Escribe tu mensaje..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lookin-primary/50 transition-colors"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.currentTarget.value) {
                handleSend(e.currentTarget.value);
                e.currentTarget.value = '';
              }
            }}
          />
          <button className="w-12 h-12 rounded-xl bg-lookin-primary text-lookin-deep flex items-center justify-center hover:opacity-90 transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
        <p className="text-[10px] text-center mt-4 text-white/30 italic">
          {/* COMENTARIO: Insertar aquí script de n8n o widget de chat real */}
          Espacio preparado para integración de Chatbot en vivo.
        </p>
      </div>
    </div>
  );
};
