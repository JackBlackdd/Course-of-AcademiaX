console.log(process.pid);
console.log(process.versions);
console.log(process.platform);
console.log(process.arch);

process.on('exit', () => {
  process.stdout.write('Fin del proceso. \n');
});