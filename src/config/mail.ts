interface IMailConfig {
  driver: 'ethereal' | 'ses';

  default: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  default: {
    from: {
      email: 'master@resumobook.com.br',
      name: 'Contato | ResumoBook',
    },
  },
} as IMailConfig;
