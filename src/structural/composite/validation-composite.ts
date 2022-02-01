// Component
export abstract class ValidationComponent {
    abstract validation(value: unknown): boolean;
}

// Leaf
export class ValidateEmail extends ValidationComponent {
    validation(value: unknown): boolean {
        if (typeof value !== 'string') return false;
        return /@/.test(value);
    }
}

export class ValidateString extends ValidationComponent {
    validation(value: unknown): boolean {
        return typeof value === 'string';
    }
}

export class ValidateNumber extends ValidationComponent {
    validation(value: unknown): boolean {
        if (typeof value !== 'string') return false;
        return /\d+/.test(value);
    }
}

// Composite
export class ValidationComposite extends ValidationComponent {
    private readonly children: ValidationComponent[] = [];

    validation(value: unknown): boolean {
        for (const child of this.children) {
            const validation = child.validation(value);
            if (!validation) return false;
        }
        return true;
    }

    add(...validations: ValidationComponent[]): void {
        validations.forEach(validation => this.children.push(validation));
    }
}

// Client
const validateEmail = new ValidateEmail();
const validateString = new ValidateString();
const validateNumber = new ValidateNumber();
const validationComposite = new ValidationComposite();
validationComposite.add(validateEmail, validateString, validateNumber);
console.log(validationComposite.validation('lucas123@email.com'));
