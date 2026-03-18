import { useEffect } from 'react';
import { createChat } from '@n8n/chat';

export default function N8nChatWidget() {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://chatbotlookin.app.n8n.cloud/webhook/841a2b93-d431-4aac-844c-f9c83acae827/chat',
      target: '#n8n-chat',
      mode: 'window',
      initialMessages: [
        '¡Hola! Soy el asistente virtual de The Wellness Lab.',
        'Puedo ayudarte con talleres, inscripción, ubicación y próximos pasos.'
      ],
      i18n: {
        en: {
          title: 'Asistente The Wellness Lab',
          subtitle: 'Chat en vivo impulsado por IA',
          footer: '',
          getStarted: 'Nueva conversación',
          inputPlaceholder: 'Escribí tu mensaje...',
        },
      },
    });
  }, []);

  return <div id="n8n-chat" />;
}
