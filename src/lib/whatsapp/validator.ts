const PORTUGAL_E164_REGEX = /^\+351[0-9]{9}$/;

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export function validatePortugueseNumber(
  phoneNumber: string,
): ValidationResult {
  if (!phoneNumber || typeof phoneNumber !== "string") {
    return { valid: false, error: "Phone number is required" };
  }

  const trimmed = phoneNumber.trim();

  if (!PORTUGAL_E164_REGEX.test(trimmed)) {
    return {
      valid: false,
      error:
        "Invalid Portuguese phone number. Must be in E.164 format (e.g., +351912345678)",
    };
  }

  return { valid: true };
}

export function isValidPortugueseNumber(phoneNumber: string): boolean {
  return validatePortugueseNumber(phoneNumber).valid;
}
