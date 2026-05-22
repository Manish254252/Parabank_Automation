const FIRST_NAMES = [
  'alex', 'sam', 'jordan', 'mike', 'sara', 'chris', 'emma', 'nina', 'dave', 'lucy',
];

const LAST_NAMES = [
  'smith', 'johnson', 'lee', 'patel', 'brown', 'taylor', 'clark', 'wong', 'khan', 'gupta',
];

export function generateUsername(): string {
  const first = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  const last = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  const number = 100 + Math.floor(Math.random() * 900);
  return `${first}.${last}${number}`;
}

export function generatePassword(): string {
  return `Pass@${1000 + Math.floor(Math.random() * 9000)}`;
}
