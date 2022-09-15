export default {
  name: (name: any) => {
    if (!name) throw new Error('400 | "name" is required');
    if (typeof name !== 'string') throw new Error('422 | "name" must be a string');
    if (name.length <= 2) throw new Error('422 | "name" length must be at least 3 characters long');
  },
  amount: (amount: any) => {
    if (!amount) throw new Error('400 | "amount" is required');
    if (typeof amount !== 'string') throw new Error('422 | "amount" must be a string');
    if (amount.length <= 2) {
      throw new Error('422 | "amount" length must be at least 3 characters long');
    }
  },
};