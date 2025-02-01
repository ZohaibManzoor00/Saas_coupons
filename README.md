This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
+------------------+          1       1         +---------------------------+
|   ProductTable   | <-------------------------> | ProductCustomizationTable |
|------------------|           (one-to-one)     |---------------------------|
| id (PK)          |                          1 | id (PK)                   |
| clerkUserId      |                            | productId (FK, unique)    |
| name             |                            | classPrefix               |
| url              |                            | locationMessage           |
| description      |                            | backgroundColor           |
| createdAt        |                            | textColor                 |
| updatedAt        |                            | fontSize                  |
+------------------+                            | bannerContainer           |
                                                | isSticky                  |
                                                | createdAt                 |
                                                | updatedAt                 |
                                                +---------------------------+

               +-------------------+
               |   ProductTable    |<-------------------------------------------+
               |-------------------|          (one-to-many)                    |
               | id (PK)           |                                          |
               | ...               |                                          |
               +-------------------+                                          |
                       |                                                     |
                       | 1                                                   | *
                       |                                                     |
                       V                                                     V
             +---------------------+                            +----------------------+
             | ProductViewTable    |                            | CountryGroupDiscount |
             |---------------------|                            | Table                |
             | id (PK)             |                            |----------------------|
             | productId (FK)      |<-----+                      | countryGroupId (FK)    |
             | countryId (FK)      |      | (many-to-one)        | productId (FK)         |
             | visitedAt           |      |                      | coupon                 |
             +---------------------+      |                      | discountPercentage     |
                                          |                      | createdAt              |
                                          |                      | updatedAt              |
                                          |                      +----------------------+
                                          |
                                          |
                                          |                +----------------------+
                                          |                |   CountryTable       |
                                          |                |----------------------|
                                          |                | id (PK)              |
                                          +--------------->| name (unique)        |
                                                           | code (unique)        |
                                                           | countryGroupId (FK)    |
                                                           | createdAt            |
                                                           | updatedAt            |
                                                           +----------------------+
                                                                  | 1
                                                                  |
                                                                  | (many-to-one)
                                                                  V
                                                           +----------------------+
                                                           | CountryGroupTable    |
                                                           |----------------------|
                                                           | id (PK)              |
                                                           | name (unique)        |
                                                           | recommendedDiscount  |
                                                           | createdAt            |
                                                           | updatedAt            |
                                                           +----------------------+
```