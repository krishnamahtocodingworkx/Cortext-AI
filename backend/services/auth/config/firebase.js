// import { initializeApp, cert } from "firebase-admin/app";

// import serviceAccount from "../serviceAccount.json" with { type: "json" };

// export const app = initializeApp({
//   credential: cert(serviceAccount),
// });

import { initializeApp, cert } from "firebase-admin/app";

export const app = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  }),
});
