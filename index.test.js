//Não faça nada neste arquivo, esqueça que ele existe

const { execSync } = require('child_process');

test('verifica a extração correta da palavra', () => {
  const output = execSync('node index.js').toString();
  const linhas = output.trim().split('\n');
  const palavra = linhas[0];
  expect(palavra).toBe("Javascript");
});

test('verifica o número de caracteres da palavra extraída', () => {
  const output = execSync('node index.js').toString();
  const linhas = output.trim().split('\n');
  const quantidade = parseInt(linhas[1], 10);
  expect(quantidade).toBe(10);
});

test('verifica a conversão da palavra para letras maiúsculas', () => {
  const output = execSync('node index.js').toString();
  const linhas = output.trim().split('\n');
  const resultado = linhas[2];
  expect(resultado).toBe("JAVASCRIPT");
});
