export const PASSWORD_HASH_OPTIONS = {
  type: 2, // Argon2id
  memoryCost: 19456,
  timeCost: 2,
  parallelism: 1,
} as const;
