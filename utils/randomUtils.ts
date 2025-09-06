export const generateRandomEmail = (): string => {
    return `user_${Math.random().toString(36).substring(2, 11)}@test.com`;
  };