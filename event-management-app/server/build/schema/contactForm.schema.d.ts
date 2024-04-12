import { TypeOf } from "zod";
export declare const contactFormSchema: import("zod").ZodObject<{
    body: import("zod").ZodObject<{
        name: import("zod").ZodString;
        email: import("zod").ZodString;
        phoneNumber: import("zod").ZodString;
        message: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        email: string;
        phoneNumber: string;
        message: string;
    }, {
        name: string;
        email: string;
        phoneNumber: string;
        message: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    body: {
        name: string;
        email: string;
        phoneNumber: string;
        message: string;
    };
}, {
    body: {
        name: string;
        email: string;
        phoneNumber: string;
        message: string;
    };
}>;
export type ContactFormInput = TypeOf<typeof contactFormSchema>;
