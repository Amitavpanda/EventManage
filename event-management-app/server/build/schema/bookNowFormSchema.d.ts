import { TypeOf } from "zod";
export declare const bookNowFormSchema: import("zod").ZodObject<{
    body: import("zod").ZodObject<{
        nameBookNow: import("zod").ZodString;
        phoneNumberBookNow: import("zod").ZodString;
        budget: import("zod").ZodString;
        category: import("zod").ZodString;
        requirements: import("zod").ZodString;
        startDateTime: import("zod").ZodString;
        endDateTime: import("zod").ZodString;
        guestsNumber: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        nameBookNow: string;
        phoneNumberBookNow: string;
        budget: string;
        category: string;
        requirements: string;
        startDateTime: string;
        endDateTime: string;
        guestsNumber: string;
    }, {
        nameBookNow: string;
        phoneNumberBookNow: string;
        budget: string;
        category: string;
        requirements: string;
        startDateTime: string;
        endDateTime: string;
        guestsNumber: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    body: {
        nameBookNow: string;
        phoneNumberBookNow: string;
        budget: string;
        category: string;
        requirements: string;
        startDateTime: string;
        endDateTime: string;
        guestsNumber: string;
    };
}, {
    body: {
        nameBookNow: string;
        phoneNumberBookNow: string;
        budget: string;
        category: string;
        requirements: string;
        startDateTime: string;
        endDateTime: string;
        guestsNumber: string;
    };
}>;
export type BookNowFormInput = TypeOf<typeof bookNowFormSchema>;
