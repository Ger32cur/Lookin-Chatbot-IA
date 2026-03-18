import N8nChatWidget from './components/N8nChatWidget';
import React from 'react';
import {
  Navbar,
  ServiceCard,
  DashboardMockup,
  View
} from './components/UI';
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
  LayoutDashboard,
  Database,
  Workflow,
  Search,
  Bell,
  Settings,
  LogOut,
  MoreVertical
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Landing View ---
const LandingView = ({ onNavigate }: { onNavigate: (view: View) => void }) => {
  return (
    <div className="min-h-screen bg-lookin-bg selection:bg-lookin-primary selection:text-lookin-deep">
      <Navbar onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-lookin-primary/30 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lookin-secondary/30 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-lookin-primary text-xs font-bold mb-8 tracking-wider uppercase backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lookin-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lookin-primary"></span>
              </span>
              Nueva Era de Automatización
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display mb-8 leading-[1.1] tracking-tight">
              Automatizá tu negocio con <br />
              <span className="text-gradient">IA y flujos inteligentes</span>
            </h1>
            <p className="text-lg md:text-xl text-lookin-soft/60 max-w-3xl mx-auto mb-12 leading-relaxed">
              Lookin centraliza conversaciones, automatizaciones, leads y asistentes inteligentes en una sola experiencia premium para tu equipo y tus clientes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary w-full sm:w-auto">Solicitar demo gratis</button>
              <button onClick={() => onNavigate('dashboard')} className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                Ver plataforma <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center gap-6 text-lookin-soft/40 text-sm font-medium"
          >
            {['Chatbots Web', 'WhatsApp Automation', 'Instagram Automation', 'CRM con IA', 'Integraciones'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-lookin-primary" />
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Soluciones End-to-End</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Diseñamos el ecosistema digital que tu empresa necesita para escalar sin límites.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={Bot}
              title="Consultoría IA"
              description="Diseñamos soluciones con IA adaptadas al flujo real de tu negocio y objetivos comerciales."
            />
            <ServiceCard
              icon={MessageSquare}
              title="Chatbots Web"
              description="Implementamos asistentes conversacionales para captar y convertir clientes 24/7."
            />
            <ServiceCard
              icon={Zap}
              title="WhatsApp Auto"
              description="Automatización completa de ventas y soporte en el canal más usado del mundo."
            />
            <ServiceCard
              icon={Instagram}
              title="Instagram Flow"
              description="Convertí tus comentarios y DMs en oportunidades de venta automáticas."
            />
            <ServiceCard
              icon={Database}
              title="CRM con IA"
              description="Gestión inteligente de leads con seguimiento automático y scoring predictivo."
            />
            <ServiceCard
              icon={Workflow}
              title="Integraciones"
              description="Conectamos tus herramientas favoritas para que la información fluya sin fricción."
            />
            <ServiceCard
              icon={Layers}
              title="Embudos de Leads"
              description="Estructuramos el camino del cliente desde el primer contacto hasta el cierre."
            />
            <ServiceCard
              icon={Headset}
              title="Asistentes Internos"
              description="IA entrenada con tu base de conocimientos para ayudar a tu equipo de soporte."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold font-display mb-8 leading-tight">
                Nuestra Metodología <br />
                <span className="text-lookin-primary">Paso a Paso</span>
              </h2>
              <div className="space-y-12">
                {[
                  { step: '01', title: 'Diagnóstico Estratégico', desc: 'Analizamos tus procesos actuales para identificar cuellos de botella y oportunidades de IA.' },
                  { step: '02', title: 'Diseño de Flujos', desc: 'Creamos la arquitectura conversacional y lógica de automatización personalizada.' },
                  { step: '03', title: 'Implementación Tech', desc: 'Configuramos los asistentes, conectamos APIs y desplegamos la infraestructura.' },
                  { step: '04', title: 'Optimización Continua', desc: 'Medimos cada interacción para ajustar la IA y maximizar la tasa de conversión.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-white/10 font-display">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-lookin-soft/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="aspect-square glass rounded-[40px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-lookin-primary/10 to-lookin-secondary/10" />
                <Workflow className="w-32 h-32 text-lookin-primary animate-pulse" />
                <div className="absolute top-10 left-10 w-20 h-20 bg-lookin-primary/20 blur-3xl rounded-full" />
                <div className="absolute bottom-10 right-10 w-20 h-20 bg-lookin-secondary/20 blur-3xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section - Chat embebido */}
      <section id="demo" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Probá la Experiencia Lookin</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Interactuá con nuestro asistente demo y descubrí cómo podemos transformar tu atención al cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(0,217,125,0.12)]">
              <h3 className="text-2xl font-semibold text-white mb-4">Qué puede hacer este asistente</h3>

              <div className="space-y-4 text-white/80">
                <div className="rounded-2xl border border-white/10 bg-[#12123a] p-4">
                  Responder preguntas frecuentes sobre servicios, talleres, automatizaciones y próximos pasos.
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#12123a] p-4">
                  Guiar al usuario hacia una inscripción, contacto comercial o solicitud de demo.
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#12123a] p-4">
                  Mantener el contexto de la conversación con memoria para responder de forma más natural.
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-3">Preguntas sugeridas</p>

                <div className="flex flex-wrap gap-3">
                  <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition">
                    Quiero info del taller
                  </button>
                  <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition">
                    ¿Cómo me anoto?
                  </button>
                  <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition">
                    ¿Qué temas se tratan?
                  </button>
                  <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition">
                    Necesito automatizar mi atención
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_0_30px_rgba(0,217,125,0.12)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#00D97D]/20 to-[#00A67D]/10 px-6 py-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">Asistente The Wellness Lab</h3>
                  <p className="text-sm text-white/60">Chat en vivo impulsado por IA</p>
                </div>
                <div className="h-3 w-3 rounded-full bg-[#00D97D] shadow-[0_0_12px_#00D97D]" />
              </div>

              <div className="w-full h-[700px] bg-[#0E0E30]">
  <N8nChatWidget />
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Soluciones por Industria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Salud & Clínicas', desc: 'Gestión de turnos, recordatorios y respuestas a consultas médicas frecuentes.' },
              { title: 'E-commerce', desc: 'Seguimiento de pedidos, recuperación de carritos y soporte post-venta 24/7.' },
              { title: 'Inmobiliarias', desc: 'Calificación de leads, envío de catálogos y agendamiento de visitas.' }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl glass border-white/5 hover:bg-white/5 transition-all">
                <h4 className="text-2xl font-bold mb-4 font-display">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lookin-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black font-display mb-8 tracking-tight">¿Listo para escalar tu negocio?</h2>
          <p className="text-xl text-lookin-soft/60 mb-12">
            Unite a las empresas que ya están ahorrando horas de trabajo y multiplicando sus ventas con Lookin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary px-12 py-4 text-lg">Agendar Reunión</button>
            <button className="btn-secondary px-12 py-4 text-lg">Ver Precios</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-lookin-deep/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-lookin-primary to-lookin-secondary rounded-lg flex items-center justify-center shadow-lg shadow-lookin-primary/20">
                  <span className="text-lookin-deep font-black text-xl font-script pt-0.5">in.</span>
                </div>
                <span className="text-xl font-black font-display tracking-tight">
                  Look<span className="text-gradient font-script text-2xl lowercase">in.</span>
                </span>
              </div>
              <p className="text-lookin-soft/40 text-sm leading-relaxed">
                Liderando la revolución de la IA y automatización para el mercado hispano.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6 font-display">Servicios</h5>
              <ul className="space-y-4 text-sm text-lookin-soft/40">
                <li><a href="#" className="hover:text-lookin-primary transition-colors">Consultoría IA</a></li>
                <li><a href="#" className="hover:text-lookin-primary transition-colors">Chatbots Web</a></li>
                <li><a href="#" className="hover:text-lookin-primary transition-colors">WhatsApp Business</a></li>
                <li><a href="#" className="hover:text-lookin-primary transition-colors">CRM Integrado</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 font-display">Compañía</h5>
              <ul className="space-y-4 text-sm text-lookin-soft/40">
                <li><a href="#" className="hover:text-lookin-primary transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-lookin-primary transition-colors">Casos de Éxito</a></li>
                <li><a href="#" className="hover:text-lookin-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-lookin-primary transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 font-display">Newsletter</h5>
              <p className="text-sm text-lookin-soft/40 mb-4">Recibí tips de automatización cada semana.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs flex-1 outline-none focus:border-lookin-primary/50 transition-colors"
                />
                <button className="bg-lookin-primary text-lookin-deep px-4 py-2 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity">
                  OK
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-lookin-soft/20 uppercase tracking-widest font-bold">
            <p>© 2026 Lookin AI. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-lookin-soft/40 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-lookin-soft/40 transition-colors">Términos</a>
              <a href="#" className="hover:text-lookin-soft/40 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Dashboard View ---
const DashboardView = ({ onNavigate }: { onNavigate: (view: View) => void }) => {
  return (
    <div className="flex h-screen bg-lookin-deep overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 flex flex-col bg-lookin-bg/80 backdrop-blur-xl">
        <div className="p-6 flex items-center gap-2 mb-8 cursor-pointer group" onClick={() => onNavigate('landing')}>
          <div className="w-8 h-8 bg-gradient-to-br from-lookin-primary to-lookin-secondary rounded-lg flex items-center justify-center shadow-lg shadow-lookin-primary/20 group-hover:scale-105 transition-transform">
            <span className="text-lookin-deep font-black text-xl font-script pt-0.5">in.</span>
          </div>
          <span className="text-xl font-black font-display tracking-tight">
            Look<span className="text-gradient font-script text-2xl lowercase">in.</span>
          </span>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {[
            { icon: LayoutDashboard, label: 'Overview', active: true },
            { icon: Users, label: 'Leads' },
            { icon: MessageSquare, label: 'Conversaciones' },
            { icon: Bot, label: 'Asistentes IA' },
            { icon: Workflow, label: 'Automatizaciones' },
            { icon: Database, label: 'Base de Conocimiento' },
            { icon: BarChart3, label: 'Métricas' },
          ].map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                item.active ? 'bg-lookin-primary/10 text-lookin-primary' : 'text-lookin-muted hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-lookin-muted hover:bg-white/5 hover:text-white transition-all">
            <Settings size={20} />
            Configuración
          </button>
          <button
            onClick={() => onNavigate('landing')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400/60 hover:bg-red-400/10 hover:text-red-400 transition-all"
          >
            <LogOut size={20} />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-lookin-bg/50 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold font-display">Dashboard Overview</h2>
            <div className="bg-lookin-primary/10 text-lookin-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
              Live
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={16} />
              <input
                type="text"
                placeholder="Buscar leads..."
                className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-lookin-primary/50 w-64 transition-colors"
              />
            </div>
            <button className="relative text-lookin-muted hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-lookin-primary rounded-full" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-white/5">
              <div className="text-right">
                <p className="text-sm font-bold">Admin Lookin</p>
                <p className="text-[10px] text-lookin-muted uppercase tracking-tighter">Plan Enterprise</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lookin-primary to-lookin-secondary flex items-center justify-center text-lookin-deep font-black font-display">
                AL
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Leads Hoy', value: '124', change: '+12%', icon: Users, color: 'text-lookin-primary' },
              { label: 'Conversaciones', value: '2,845', change: '+5%', icon: MessageSquare, color: 'text-lookin-secondary' },
              { label: 'Tasa Respuesta', value: '98.2%', change: '+0.4%', icon: Zap, color: 'text-lookin-primary' },
              { label: 'Ahorro Operativo', value: '$4,250', change: '+18%', icon: BarChart3, color: 'text-lookin-accent' },
            ].map((kpi, i) => (
              <div key={i} className="bg-lookin-bg border border-white/5 p-6 rounded-3xl hover:border-lookin-primary/20 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-2xl bg-white/5 ${kpi.color} group-hover:bg-current/10 transition-colors`}>
                    <kpi.icon size={24} />
                  </div>
                  <span className="text-xs font-bold text-lookin-primary bg-lookin-primary/10 px-2 py-1 rounded-lg">{kpi.change}</span>
                </div>
                <p className="text-lookin-muted text-xs font-medium uppercase tracking-wider mb-1">{kpi.label}</p>
                <h3 className="text-3xl font-black font-display">{kpi.value}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Leads Table */}
            <div className="lg:col-span-2 bg-lookin-bg border border-white/5 rounded-3xl overflow-hidden">
              <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h4 className="font-bold font-display">Leads Recientes</h4>
                <button className="text-xs text-lookin-primary font-bold hover:underline">Ver todos</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] text-lookin-muted uppercase tracking-widest border-b border-white/5">
                      <th className="px-6 py-4 font-bold">Nombre</th>
                      <th className="px-6 py-4 font-bold">Canal</th>
                      <th className="px-6 py-4 font-bold">Estado</th>
                      <th className="px-6 py-4 font-bold">Fecha</th>
                      <th className="px-6 py-4 font-bold"></th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      { name: 'Carlos Mendoza', canal: 'WhatsApp', status: 'Calificado', date: 'Hace 5m', color: 'bg-lookin-primary' },
                      { name: 'Ana García', canal: 'Web Chat', status: 'Pendiente', date: 'Hace 12m', color: 'bg-yellow-500' },
                      { name: 'Roberto Ruiz', canal: 'Instagram', status: 'Calificado', date: 'Hace 45m', color: 'bg-lookin-primary' },
                      { name: 'Elena Torres', canal: 'WhatsApp', status: 'Cerrado', date: 'Hace 1h', color: 'bg-lookin-secondary' },
                      { name: 'Javier López', canal: 'Web Chat', status: 'Pendiente', date: 'Hace 2h', color: 'bg-yellow-500' },
                    ].map((lead, i) => (
                      <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4 font-medium">{lead.name}</td>
                        <td className="px-6 py-4 text-lookin-muted">{lead.canal}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${lead.color}`} />
                            {lead.status}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-lookin-muted/60">{lead.date}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-white/20 hover:text-white">
                            <MoreVertical size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-8">
              <div className="bg-lookin-bg border border-white/5 rounded-3xl p-6">
                <h4 className="font-bold font-display mb-6">Estado del Asistente</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-lookin-primary/10 flex items-center justify-center text-lookin-primary">
                        <Bot size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold">IA Principal</p>
                        <p className="text-[10px] text-lookin-muted">Modelo: Lookin-v2</p>
                      </div>
                    </div>
                    <div className="w-12 h-6 bg-lookin-primary rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-widest text-lookin-muted">
                      <span>Carga de Trabajo</span>
                      <span>42%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[42%] bg-lookin-primary" />
                    </div>
                  </div>

                  <button className="w-full btn-secondary py-2 text-xs border-white/10 hover:border-lookin-primary/30">
                    Configurar IA
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-lookin-primary/10 to-lookin-secondary/10 border border-white/10 rounded-3xl p-6 relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="font-bold font-display mb-2">Nueva Automatización</h4>
                  <p className="text-xs text-lookin-soft/60 mb-6 leading-relaxed">
                    Conectá un nuevo canal y empezá a automatizar tus flujos en minutos.
                  </p>
                  <button className="flex items-center gap-2 text-sm font-bold text-lookin-primary group-hover:gap-3 transition-all">
                    Explorar Templates <ArrowRight size={16} />
                  </button>
                </div>
                <Workflow className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5 rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Main App ---
export default function App() {
  const [currentView, setCurrentView] = React.useState<View>('landing');

  return (
    <div className="bg-lookin-bg text-white selection:bg-lookin-primary/30">
      <AnimatePresence mode="wait">
        {currentView === 'landing' ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LandingView onNavigate={setCurrentView} />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DashboardView onNavigate={setCurrentView} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
