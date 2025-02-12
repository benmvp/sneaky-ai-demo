# "Sneaky" AI Demos

This repository contains the code for the demos accompanying my "Sneaky" AI talk, which explores practical and subtle ways to integrate Generative AI into applications.

## Running locally

1. **Clone the repository:**

```bash
git clone https://github.com/benmvp/sneaky-ai-demos.git
```

2. **Install dependencies:**

This project uses `pnpm` for package management. If you don't have it installed, follow the instructions at [pnpm.io.](pnpm.io.) Then, navigate to the project directory and install the dependencies:

```bash
cd sneaky-ai-demos
pnpm install
```

3. **Set up your OpenAI API key:**

- Create an OpenAI account and obtain an API key from the [OpenAI website](https://platform.openai.com/docs/quickstart#create-and-export-an-api-key).
- Create a file named `.env.local` at the root of the project directory.
- Add the following line to `.env.local`, replacing `YOUR_API_KEY` with your actual OpenAI API key:

```.env
OPENAI_API_KEY=YOUR_API_KEY
```

4. **Run the development server:**

```bash
pnpm run dev
```

This will start the development server, and you can access the demos in your web browser at the address shown in the terminal (usually http://localhost:3848).

## Demos Included

- **AI-Assisted Writing:** Experience how AI can provide real-time suggestions and feedback to improve your writing.

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for building web applications.
- [OpenAI API](https://platform.openai.com): Used for accessing the generative AI models.
- [MUI](https://mui.com/): React UI tools.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE.txt) file for details.
