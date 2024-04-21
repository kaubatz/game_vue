
const { createApp } = Vue;

createApp({
    data() {
        return {
            heroi: {vida: 100},
            vilao: {vida: 100},
            ataque: 0,
            ataque_vilao: 0,
            acao_vilao: '',
            acao_n: 0
        }
    },
    methods: {
        atacar(isHeroi) {
            if(isHeroi) {
                this.ataque = 1
                this.vilao.vida -= 10;
                this.acaoVilao();
            } else {
                this.heroi.vida -= 20;
            }
        },
        defender(isHeroi) {
            if (isHeroi){       
                let vida_h = this.heroi.vida         
                this.acaoVilao();
                //sofreu ataque -20 e se defendeu +10
                if (this.heroi.vida < vida_h){
                    this.heroi.vida += 10
                }
            }
            else{         
                if (this.ataque === 1){
                    // recebeu ataque -10 e se defendeu +5
                    this.vilao.vida += 5
                }       
            }    
            this.ataque = 0            
        },
        pocao(isHeroi) {
            if (isHeroi) {
                if (this.heroi.vida < 100){
                    this.heroi.vida += 10
                    //nao deixa ultrapassar 100
                    if (this.heroi.vida > 100){
                        this.heroi.vida = 100
                    }
                }                    
            }
            else{
                if (this.vilao.vida < 100){
                    this.vilao.vida += 5
                    // nao deixa ultrapassar 100
                    if (this.vilao.vida > 100){
                        this.vilao.vida = 100
                    }
                }                    
            }     
            this.ataque = 0                
        },
        correr(isHeroi) {      
            if (isHeroi){
                this.acaoVilao();

                if (this.ataque_vilao === 1){
                    //recebeu ataque -20 e correu +6
                    this.heroi.vida += 6
                }
            }
            else {
                if (this.ataque === 1) {
                    //recebeu ataque -10 e correu +3
                    this.vilao.vida += 3
                }
            }
            this.ataque_vilao = 0
            this.ataque = 0            
        },
        acaoVilao() {
            const acoes = ['atacar', 'defender', 'pocao', 'correr'];
            const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
            this.acao_vilao = acaoAleatoria
            this.acao_n += 1
            if (acaoAleatoria === 'atacar'){
                this.ataque_vilao = 1
            }
            else {
                this.ataque_vilao = 0
            }

            this[acaoAleatoria](false);
        }
    }
}).mount("#app");
