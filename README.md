# Next.js Blogging Website

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a fully responsive blogging platform built with **Next.js**. It leverages modern web technologies such as Server Actions, Server Components, Suspense, and integrates with **Kinde Auth** for user authentication. The frontend is styled using **TailwindCSS** along with **ShadCN UI** and **Magic UI** components for a sleek, modern design.

## Features

- **Server Actions**: Handle asynchronous server-side functions, reducing client-side load.
- **Server Components**: For better server-side rendering and improved SEO.
- **Suspense**: Lazy loading of components with better handling of loading states.
- **Kinde Auth**: Simple and secure authentication integration.
- **TailwindCSS**: Rapid UI development with utility-first CSS.
- **ShadCN UI**: Component library for building modern, accessible UIs.
- **Magic UI**: Additional UI components for complex designs.
- **Lucid React**: Streamlined, component-based logic for managing state and behavior.
- **TypeScript**: Ensures type safety throughout the project.

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![ShadCN UI](https://img.shields.io/badge/ShadCN_UI-000000?style=flat&logo=shadcnui&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Magic UI](https://img.shields.io/badge/Magic_UI-FF3E00?style=flat&logo=magicui&logoColor=white)
![Lucid React](https://img.shields.io/badge/Lucid_React-61DAFB?style=flat&logo=react&logoColor=white)
![Kinde Auth](https://img.shields.io/badge/Kinde_Auth-7F4EC1?style=flat&logo=kindeauth&logoColor=white)
![Suspense](https://img.shields.io/badge/Suspense-F7DF1E?style=flat&logo=javascript&logoColor=white)
![Server Actions](https://img.shields.io/badge/Server_Actions-333333?style=flat&logo=nextdotjs&logoColor=white)
![Server Components](https://img.shields.io/badge/Server_Components-333333?style=flat&logo=nextdotjs&logoColor=white)
- **Next.js**: React-based framework for building full-stack web applications.
- **TypeScript**: Superset of JavaScript that ensures static type checking.
- **TailwindCSS**: Utility-first CSS framework.
- **ShadCN UI**: Styled, customizable UI components.
- **Magic UI**: A set of ready-to-use UI components.
- **Lucid React**: A React state management library.
- **Kinde Auth**: Authentication and user management system.
- **Suspense**: Used for loading async components.
- **Server Actions**: Optimized server-side logic processing.
- **Server Components**: For improved performance and rendering.

## Getting Started

To get started with the project, clone the repository and install the dependencies.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-blogging-project.git
```

Install the dependencies:
```
npm install
# or
yarn install
```
Set up environment variables (see Environment Variables).

Run the development server:
```
npm run dev
# or
yarn dev
```
Environment Variables
You will need to set up the following environment variables in a .env.local file at the root of your project:
```
# Kinde Auth credentials
KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_DOMAIN=
```