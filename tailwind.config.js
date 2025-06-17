module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    important: true, // Adicione esta linha para forçar a especificidade
    theme: {
      extend: {
        colors: {
          slate: {
            900: '#0f172a', // Certifique-se que esta cor existe
          }
        }
      },
    },
    plugins: [],
  }