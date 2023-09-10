export enum EMAIL_ERRORS {
  REQUIRED = "REQUIRED",
  INVALID = "INVALID"
}

export enum PASSWORD_ERRORS {
  REQUIRED = "REQUIRED",
  INVALID_LENGTH = "INVALID_LENGTH",
  MISSING_UPPERCASE_LETTER = "MISSING_UPPERCASE_LETTER"
}

export function validateEmail(text: string) {
  if (!text.trim()) return EMAIL_ERRORS.REQUIRED;

  if (!text.includes("@")) return EMAIL_ERRORS.INVALID;
  if (text.length < 5) return EMAIL_ERRORS.INVALID;

  return null;
}

export function validatePassword(text: string) {
  if (!text.trim()) return PASSWORD_ERRORS.REQUIRED;

  if (text.length < 7) return PASSWORD_ERRORS.INVALID_LENGTH;

  if (!/[A-Z]/.test(text)) return PASSWORD_ERRORS.MISSING_UPPERCASE_LETTER;

  return null;
}
