import NextAuth from 'next-auth';

import { DrizzleAdapter } from '@auth/drizzle-adapter';

import { db } from '@/infrastructure/database/client';

export const { handlers, auth, signIn, signOut } = NextAuth({

  adapter: DrizzleAdapter(db),

  providers: [

    // Add providers here

  ],

  pages: {

    signIn: '/login',

    signUp: '/signup',

  },

});