import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
    EmailValidatorFnProtocol,
    EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validateEmailClass(
    emailValidator: EmailValidatorProtocol,
    email: string,
): void {
    if (emailValidator.isEmail(email)) {
        console.log('Email é válido (CLASS)');
    } else {
        console.log('Email é inválido (CLASS)');
    }
}

function validateEmailFn(
    emailValidator: EmailValidatorFnProtocol,
    email: string,
): void {
    if (emailValidator(email)) {
        console.log('Email é válido (FN)');
    } else {
        console.log('Email é inválido (FN)');
    }
}

const email = 'lucas@email.com';
validateEmailClass(new EmailValidatorClassAdapter(), email);
validateEmailFn(emailValidatorFnAdapter, email);
