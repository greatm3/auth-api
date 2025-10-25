import * as zod from 'zod';

interface ValidationReturnSuccess {
    success: true
    data: Record<string, unknown>
}

interface ValidationReturnError {
    success: false
    message: string
}

type PostRequestReturnType = ValidationReturnSuccess | ValidationReturnError

export function validatePostRequest(email: string, password: string): PostRequestReturnType | string {
    const schema = zod.object({
        email: zod.email(),
        password: zod
            .string()
            .min(8, { message: 'Password must be at least 8 characters' })
            .regex(/[A-Z]/, {
                message: 'Password must contain at least one uppercase letter',
            })
            .regex(/[a-z]/, {
                message: 'Password must contain at least one lowercase letter',
            })
            .regex(/[0-9]/, {
                message: 'Password must contain at least one number',
            })
            .regex(/[!@#$%^&*]/, {
                message: 'Password must contain at least one special character',
            }),
    });

    const requestParams = {
        email,
        password,
    };

    const result = schema.safeParse(requestParams);

    return result.success
        ? result
        : result.error?.message
        ? {
              success: false,
              message: JSON.parse(result.error.message)[0].message,
          }
        : result.error.message;
}
