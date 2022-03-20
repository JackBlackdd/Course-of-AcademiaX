//? Queue
//* Es una lista que se comporta como fila en la que,
//* lo primero que llega es lo primero que sale.

class Rocola {
    temas = [
        'Tell Me Tell Me',
        'Move',
        'Happy Pills',
        'Nights',
        'She Said',
        'Play Along',
        'Adderall',
        'Problematic',
        'Vowels',
        'Preacher man',
        'Head Right',
        'stole dance',
        'Lose money'
    ]

    queue = [];

    play(k) {
        if (this.queue.length >= k) {
            let primero = this.queue.shift();
            this.temas.push(primero);
        }
        let indiceRandom = Math.floor(Math.random() * this.temas.length);
        let tema = this.temas.splice(indiceRandom, 1)[0];
        this.queue.push(tema);
        return tema;
    }
}


let rocola = new Rocola();
console.log(rocola.play(5), rocola.queue);
console.log(rocola.play(5), rocola.queue);
console.log(rocola.play(5), rocola.queue);
console.log(rocola.play(5), rocola.queue);
console.log(rocola.play(5), rocola.queue);
console.log(rocola.play(5), rocola.queue);
console.log(rocola.play(5), rocola.queue);
console.log(rocola.play(5), rocola.queue);
console.log(rocola.play(5), rocola.queue);
console.log(rocola.play(5), rocola.queue);
console.log(rocola.play(5), rocola.queue);
console.log(rocola.play(5), rocola.queue);