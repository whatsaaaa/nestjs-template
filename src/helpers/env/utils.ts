export function getEnv(key: string): string {
  if (typeof process.env[key] === 'undefined') {
    throw new Error(`Environment variable ${key} is not defined`);
  }

  return process.env[key] as string;
}

export function toBool(value: string): boolean {
  return value.toLowerCase() === 'true';
}
