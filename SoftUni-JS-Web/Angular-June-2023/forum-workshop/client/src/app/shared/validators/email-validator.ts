import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  const domainsString = domains.join('|');
  const emailRegex = new RegExp(`[^@]{6,}@gmail\.(${domainsString})$`);

  return (control) => {
    if (control.value && !emailRegex.test(control.value)) {
      return { invalidEmail: true };
    }

    return null;
  };
}
