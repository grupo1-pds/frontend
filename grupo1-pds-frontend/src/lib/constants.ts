import type { Helper, MessageSent } from "./type";




export const sampleHelpers: Helper[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    avatarImage: "https://example.com/avatars/john-doe.jpg",
    phoneNumber: "1234567890",
    sms: true,
    phone: false,
    description: "John Doe is a helper"
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatarImage: "https://example.com/avatars/jane-smith.jpg",
    phoneNumber: "1234567890",
    sms: false,
    phone: true,
    description: "Jane Smith is a helper"
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    avatarImage: "https://example.com/avatars/bob-johnson.jpg",
    phoneNumber: "1234567890",
    sms: true,
    phone: true,
    description: "Bob Johnson is a helper"
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice.williams@example.com",
    avatarImage: "https://example.com/avatars/alice-williams.jpg",
    phoneNumber: "1234567890",
    sms: true,
    phone: false,
    description: "Alice Williams is a helper"
  },
  {
    id: "5",
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    avatarImage: "https://example.com/avatars/charlie-brown.jpg",
    phoneNumber: "1234567890",
    sms: false,
    phone: true,
    description: "Charlie Brown is a helper"
  },
  {
    id: "6",
    name: "Eva Garcia",
    email: "eva.garcia@example.com",
    avatarImage: "https://example.com/avatars/eva-garcia.jpg",
    phoneNumber: "1234567890",
    sms: true,
    phone: true,
    description: "Eva Garcia is a helper"
  },
  {
    id: "7",
    name: "David Lee",
    email: "david.lee@example.com",
    avatarImage: "https://example.com/avatars/david-lee.jpg",
    phoneNumber: "1234567890",
    sms: false,
    phone: true,
    description: "David Lee is a helper"
  },
  {
    id: "8",
    name: "Grace Kim",
    email: "grace.kim@example.com",
    avatarImage: "https://example.com/avatars/grace-kim.jpg",
    phoneNumber: "1234567890",
    sms: false,
    phone: true,
    description: "Grace Kim is a helper"
  },
  {
    id: "9",
    name: "Frank Zhang",
    email: "frank.zhang@example.com",
    avatarImage: "https://example.com/avatars/frank-zhang.jpg",
    phoneNumber: "1234567890",
    sms: true,
    phone: true,
    description: "Frank Zhang is a helper"
  },
  {
    id: "10",
    name: "Helen Patel",
    email: "helen.patel@example.com",
    avatarImage: "https://example.com/avatars/helen-patel.jpg",
    phoneNumber: "1234567890",
    sms: true,
    phone: false,
    description: "Helen Patel is a helper"
  },
  {
    id: "11",
    name: "Helen Patel",
    email: "helen.patel@example.com",
    avatarImage: "https://example.com/avatars/helen-patel.jpg",
    phoneNumber: "1234567890",
    sms: true,
    phone: false,
    description: "Helen Patel is a helper"
  },
  {
    id: "12",
    name: "Helen Patel",
    email: "helen.patel@example.com",
    avatarImage: "https://example.com/avatars/helen-patel.jpg",
    phoneNumber: "1234567890",
    sms: true,
    phone: false,
    description: "Helen Patel is a helper"
  },
  {
    id: "13",
    name: "Helen Patel",
    email: "helen.patel@example.com",
    avatarImage: "https://example.com/avatars/helen-patel.jpg",
    phoneNumber: "1234567890",
    sms: true,
    phone: false,
    description: "Helen Patel is a helper"
  },
  {
    id: "14",
    name: "Helen Patel",
    email: "helen.patel@example.com",
    avatarImage: "https://example.com/avatars/helen-patel.jpg",
    phoneNumber: "1234567890",
    sms: true,
    phone: false,
    description: "Helen Patel is a helper"
  }
];

export const features = [
  {
    title: "Monitoramento 24/7 e Resposta a Emergências",
    description: "Nossos sensores avançados e sistema de monitoramento rastreiam continuamente o bem-estar dos idosos e alertam imediatamente nossa equipe para qualquer emergência."
  },
  {
    title: "Planos de Cuidados Personalizados",
    description: "Nossa equipe de profissionais de saúde trabalha de perto com as famílias para criar planos de cuidados personalizados que atendam às necessidades únicas de cada idoso."
  },
  {
    title: "Gestão de Medicamentos",
    description: "O smart pillbox e os lembretes de medicação do SafeElder ajudam a garantir que os idosos tomem seus medicamentos na hora certa, reduzindo o risco de complicações."
  }
];

export const testimonials = [
  {
    name: "João Silva",
    quote: "O SafeElder tem sido uma salvação para minha mãe idosa. O monitoramento 24/7 e a resposta a emergências me dão tranquilidade, e o plano de cuidados personalizado melhorou muito a qualidade de vida dela."
  },
  {
    name: "Sara Oliveira",
    quote: "Eu estava hesitante em experimentar um novo serviço, mas o SafeElder superou minhas expectativas. O recurso de gestão de medicamentos foi revolucionário, e a equipe de suporte é extremamente prestativa."
  },
  {
    name: "Lisa Wong",
    quote: "O plano de cuidados personalizado criado pela equipe do SafeElder fez uma diferença significativa na vida diária do meu pai. Ele está mais independente, e eu me sinto confiante sabendo que ele está em boas mãos."
  },
  {
    name: "Roberto Lima",
    quote: "Os serviços do SafeElder foram inestimáveis para me ajudar a cuidar da minha mãe idosa. A equipe de suporte está sempre disponível para responder às minhas perguntas, e o sistema de monitoramento é incrivelmente confiável."
  }
];


export const sampleMessagesSent: MessageSent[] = [
  {
    id: "1",
    helper: sampleHelpers[0],
    messageStatus: {
      status: "pending"
    },
    notification: {
      type: "SMS"
    }
  },
  {
    id: "2",
    helper: sampleHelpers[1],
    messageStatus: {
      status: "delivered"
    },
    notification: {
      type: "SMS"
    }
  },
  {
    id: "3",
    helper: sampleHelpers[2],
    messageStatus: {
      status: "delivered"
    },
    notification: {
      type: "SMS"
    }
  },
  {
    id: "4",
    helper: sampleHelpers[3],
    messageStatus: {
      status: "failed"
    },
    notification: {
      type: "SMS"
    }
  },
  {
    id: "5",
    helper: sampleHelpers[4],
    messageStatus: {
      status: "delivered"
    },
    notification: {
      type: "SMS"
    }
  },
  {
    id: "6",
    helper: sampleHelpers[5],
    messageStatus: {
      status: "failed"
    },
    notification: {
      type: "SMS"
    }
  },
  {
    id: "7",
    helper: sampleHelpers[6],
    messageStatus: {
      status: "delivered"
    },
    notification: {
      type: "SMS"
    }
  },
  {
    id: "8",
    helper: sampleHelpers[7],
    messageStatus: {
      status: "pending"
    },
    notification: {
      type: "SMS"
    }
  },
  {
    id: "9",
    helper: sampleHelpers[8],
    messageStatus: {
      status: "delivered"
    },
    notification: {
      type: "SMS"
    }
  },
  {
    id: "10",
    helper: sampleHelpers[9],
      messageStatus: {
      status: "failed"
    },
    notification: {
      type: "SMS"
    }
  }
]