// Exercitiul 1 
console.log("Exercitiul 1:")

class Masina {
    constructor(marca, model, culoare, kilometrii)  {
            this.marca = marca;
            this.model = model;
            this.culoare = culoare;
            this.kilometrii = kilometrii;
            }

            getProprietati() {
                return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometrii=${this.kilometrii}]`;
            }
        };

function main(){
    let dateMasina1 = new Masina("BMW", "E46", "Verde", 505345);
    let dateMasina2 = new Masina("Volvo", "CX-90", "Alb", 14548);
    let dateMasina3 = new Masina("Hyunday", "I-30", "Maro", 143356);

    let masini = [dateMasina1,dateMasina2,dateMasina3]

    masini.forEach(masini => {
        console.log(masini.getProprietati())
    });
}
main()

// Exercitiul 2
console.log("Exercitiul 2:")

class MasinaDeCurse extends Masina {
    constructor(marca,model,culoare,kilometrii){
        super(marca, model, culoare, kilometrii);
    }

    participaLaCampionat(pozitiaInCampionat) {
        if(pozitiaInCampionat > 0) console.log(`Am castigat locul ${pozitiaInCampionat}`)
        else console.log("Nu am castigat niciun premiu");
    }
}

function main2() {
    let bmw = new MasinaDeCurse("BMW", "M3","Negru", 112000);
    let toyota = new MasinaDeCurse("Toyota", "Turbo","Rosu", 100000);
   
    bmw.participaLaCampionat(1);
    toyota.participaLaCampionat(0);
    

    console.log(bmw.getProprietati());
    console.log(toyota.getProprietati());  
}

main2()




