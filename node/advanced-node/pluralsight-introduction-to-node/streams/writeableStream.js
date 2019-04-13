console.log(`stdout is writeable? ${process.stdout.writable}`);

process.stdout.write("hello");
process.stdout.write("world");