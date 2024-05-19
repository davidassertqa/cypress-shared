export const COMMANDS_VERSION = '1.0.2';

Cypress.Commands.add('printCommandVersion', () => {
  console.log(`${COMMANDS_VERSION}`);
});
