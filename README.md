# AuthKit

AuthKit is a Next.js starter project that integrates Authjs Shadcn, Prisma, and Neon.tech for database management. This starter kit provides a robust foundation for building authentication systems with modern technologies.

## Features

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Shadcn**: A UI component library for building accessible and customizable user interfaces.
- **Prisma**: An ORM for database access and management.
- **Neon.tech**: A serverless Postgres database for modern applications.
- **Authjs**: A newer version of Next Auth

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL database (Neon.tech)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/indrakhatiwada/authkit.git
    cd authkit
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```env
    DATABASE_URL=your_neon_tech_database_url
    ```

4. Run database migrations:

    ```bash
    npx prisma migrate dev
    ```

5. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/pages`: Next.js pages
- `/components`: Shadcn UI components
- `/prisma`: Prisma schema and migrations
- `/lib`: Utility functions and configurations

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.

s