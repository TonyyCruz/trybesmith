export default {
  username: (username: any) => {
    if (!username) throw new Error('400 | "username" is required');
    if (typeof username !== 'string') throw new Error('422 | "username" must be a string');
    if (username.length <= 2) {
      throw new Error('422 | "username" length must be at least 3 characters long');
    }
  },
  classe: (classe: any) => {
    if (!classe) throw new Error('400 | "classe" is required');
    if (typeof classe !== 'string') throw new Error('422 | "classe" must be a string');
    if (classe.length <= 2) {
      throw new Error('422 | "classe" length must be at least 3 characters long');
    }
  },

  level: (level: any) => {
    if (level === undefined) throw new Error('400 | "level" is required');
    if (typeof level !== 'number') throw new Error('422 | "level" must be a number');
    if (level < 1) {
      throw new Error('422 | "level" must be greater than or equal to 1');
    }
  },

  password: (password: any) => {
    if (!password) throw new Error('400 | "password" is required');
    if (typeof password !== 'string') throw new Error('422 | "password" must be a string');
    if (password.length < 8) {
      throw new Error('422 | "password" length must be at least 8 characters long');
    }
  },
};