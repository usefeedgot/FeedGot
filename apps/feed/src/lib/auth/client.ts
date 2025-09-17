// import { toast } from "@marble/ui/components/sonner";
// import { polarClient } from "@polar-sh/better-auth";
import {
  inferOrgAdditionalFields,
  organizationClient,
  lastLoginMethodClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { auth } from "./auth";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  plugins: [
    organizationClient({ schema: inferOrgAdditionalFields<typeof auth>() }),
    lastLoginMethodClient(),
   // emailOTPClient(),
   // polarClient(),
  ],
  fetchOptions: {
    onError(e) {
      if (e.error.status === 429) {
       // toast.error("Too many requests. Please try again later.");
      }
    },
  },
});

export const {
  signUp,
  signIn,
  signOut,
  useSession,
  organization,
  useListOrganizations,
  useActiveOrganization,
 // checkout,
} = authClient;