const nomes: string[] = ['João', 'Maria', 'Pedro'];

function printNames(nomes: string[]) {
  return `nomes: ${nomes.join(', ')}`;
}

console.log(printNames(nomes));