import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@repo/db";
import { nextCookies } from "better-auth/next-js";
import dotenv from "dotenv";

dotenv.config();

export const auth = betterAuth({
	secret: process.env.BETTER_AUTH_SECRET as string,
	trustedOrigins: ["http://localhost:3000", "http://localhost:8080"],
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
	},
	plugins: [nextCookies()],
	advanced: {
		crossSubDomainCookies: { enabled: true },
		defaultCookieAttributes: {
			sameSite: "lax",
			secure: false,
		},
	},
});
