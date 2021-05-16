var produtos = require('./products.json')

function QuantidadeEst(){
    
    let qtd = 0

    for(let estoque of produtos){

        qtd += estoque.qtdEstoque

    }console.log(`A quantidade total de itens em estoque é: ${qtd}`);

}QuantidadeEst();

function QuantidadeDes(){
    
    let qtd = 0
    let dis = 0

    for(let estoque of produtos){

        if(estoque.emDestaque === "sim"){ 
            qtd += estoque.qtdEstoque       
        }

        if(estoque.disponivel === "sim"){
            dis += estoque.qtdEstoque
        }

    }
    console.log(`A quantidade total de itens em destaque é: ${qtd}`);
    console.log(`A quantidade total de itens disponivel é: ${dis}`);

}QuantidadeDes();

function inventario(){
    let valor = 0
    for(let estoque of produtos){
        valor += estoque.preco * estoque.qtdEstoque
    } console.log(`Valor total do inventario é: ${valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)

} inventario();

function TotalDepar(){
    let dep1 = 0; let dep2 = 0; let dep3 = 0; let dep4 = 0; let dep5 = 0; let dep6 = 0; let dep7 = 0; 
    let dep8 = 0; let dep9 = 0;
    for(let estoque of produtos){
        if(estoque.departamento.idDepto === 1){
            dep1 += estoque.qtdEstoque
        }

        if(estoque.departamento.idDepto === 2){
            dep2 += estoque.qtdEstoque
        }

        if(estoque.departamento.idDepto === 3){
            dep3 += estoque.qtdEstoque
        }
        
        if(estoque.departamento.idDepto === 4){
            dep4 += estoque.qtdEstoque
        }

        if(estoque.departamento.idDepto === 5){
            dep5 += estoque.qtdEstoque
        }

        if(estoque.departamento.idDepto === 6){
            dep6 += estoque.qtdEstoque
        }

        if(estoque.departamento.idDepto === 7){
            dep7 += estoque.qtdEstoque
        }

        if(estoque.departamento.idDepto === 8){
            dep8 += estoque.qtdEstoque
        }

        if(estoque.departamento.idDepto === 9){
            dep9 += estoque.qtdEstoque
        }
        
    }console.log(`A quantidade de itens por departamento é: \n 1 - ${dep1} \n 2 - ${dep2}\n 3 - ${dep3}\n 4 - ${dep4}
 5 - ${dep5}\n 6 - ${dep6}\n 7 - ${dep7}\n 8 - ${dep8}\n 9 - ${dep9}`)
}TotalDepar();

function InventarioDepar(){
    let dep1 = 0; let dep2 = 0; let dep3 = 0; let dep4 = 0; let dep5 = 0; let dep6 = 0; let dep7 = 0; 
    let dep8 = 0; let dep9 = 0;
    for(let estoque of produtos){
        if(estoque.departamento.idDepto === 1){
            dep1 += estoque.qtdEstoque * estoque.preco
        }

        if(estoque.departamento.idDepto === 2){
            dep2 += estoque.qtdEstoque * estoque.preco
        }

        if(estoque.departamento.idDepto === 3){
            dep3 += estoque.qtdEstoque * estoque.preco
        }
        
        if(estoque.departamento.idDepto === 4){
            dep4 += estoque.qtdEstoque * estoque.preco
        }

        if(estoque.departamento.idDepto === 5){
            dep5 += estoque.qtdEstoque * estoque.preco
        }

        if(estoque.departamento.idDepto === 6){
            dep6 += estoque.qtdEstoque * estoque.preco
        }

        if(estoque.departamento.idDepto === 7){
            dep7 += estoque.qtdEstoque * estoque.preco
        }

        if(estoque.departamento.idDepto === 8){
            dep8 += estoque.qtdEstoque * estoque.preco
        }

        if(estoque.departamento.idDepto === 9){
            dep9 += estoque.qtdEstoque * estoque.preco
        }
        
    }console.log(`O valor de cada departamento é: \n 1 - ${dep1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
 2 - ${dep2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
 3 - ${dep3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
 4 - ${dep4.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
 5 - ${dep5.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
 6 - ${dep6.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
 7 - ${dep7.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
 8 - ${dep8.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
 9 - ${dep9.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
    `)
}InventarioDepar();

function Ticket(){
    let valor = 0
    let qtd = 0
    let media = 0
    for(let estoque of produtos){
        qtd += estoque.qtdEstoque
        valor += estoque.preco * estoque.qtdEstoque
        media = valor/qtd
          
    } console.log(`Valor do Ticket medio é: ${media.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}\n`)
} Ticket();

function TicketDepar(){
    let dep1 = 0; media1 = 0; qtd1 = 0
    dep2 = 0; media2 = 0; qtd2 = 0
    dep3 = 0; media3 = 0; qtd3 = 0
    dep4 = 0; media4 = 0; qtd4 = 0
    dep5 = 0; media5 = 0; qtd5 = 0
    dep6 = 0; media6 = 0; qtd6 = 0
    dep7 = 0; media7 = 0; qtd7 = 0
    dep8 = 0; media8 = 0; qtd8 = 0
    dep9 = 0; media9 = 0; qtd9 = 0

    for(let estoque of produtos){
        if(estoque.departamento.idDepto === 1){
            qtd1 += estoque.qtdEstoque
            dep1 += estoque.preco * estoque.qtdEstoque
            media1 = dep1 / qtd1
        }
        
        if(estoque.departamento.idDepto === 2){
            qtd2 += estoque.qtdEstoque
            dep2 += estoque.qtdEstoque * estoque.preco
            media2 = dep2 / qtd2
        }

        if(estoque.departamento.idDepto === 3){
            qtd3 += estoque.qtdEstoque
            dep3 += estoque.qtdEstoque * estoque.preco
            media3 = dep3 / qtd3
        }
        
        if(estoque.departamento.idDepto === 4){
            qtd4 += estoque.qtdEstoque
            dep4 += estoque.qtdEstoque * estoque.preco
            media4 = dep4 / qtd4
        }

        if(estoque.departamento.idDepto === 5){
            qtd5 += estoque.qtdEstoque
            dep5 += estoque.qtdEstoque * estoque.preco
            media5 = dep5 / qtd5
        }

        if(estoque.departamento.idDepto === 6){
            qtd6 += estoque.qtdEstoque
            dep6 += estoque.qtdEstoque * estoque.preco
            media6 = dep6 / qtd6        
        }

        if(estoque.departamento.idDepto === 7){
            qtd7 += estoque.qtdEstoque
            dep7 += estoque.qtdEstoque * estoque.preco
            media7 = dep7 / qtd7
        }

        if(estoque.departamento.idDepto === 8){
            qtd8 += estoque.qtdEstoque
            dep8 += estoque.qtdEstoque * estoque.preco
            media8 = dep8 / qtd8
        }

        if(estoque.departamento.idDepto === 9){
            qtd9 += estoque.qtdEstoque
            dep9 += estoque.qtdEstoque * estoque.preco
            media9 = dep9 / qtd9
        }
        
    }console.log(`Valor do Ticket medio por departamento é: \n 1 - ${media1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
 2 - ${media2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
 3 - ${media3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
 4 - ${media4.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
 5 - ${media5.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
 6 - ${media6.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
 7 - ${media7.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
 8 - ${media8.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
 9 - ${media9.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
    `)
}TicketDepar();

function MaiorDpt(){
    let dep1 = 0; let dep2 = 0; let dep3 = 0; let dep4 = 0; let dep5 = 0; let dep6 = 0; let dep7 = 0; 
    let dep8 = 0; let dep9 = 0; let maior = 0;
    for(let estoque of produtos){
        if(estoque.departamento.idDepto === 1){
            dep1 += estoque.qtdEstoque * estoque.preco
        }

        if(estoque.departamento.idDepto === 2){
            dep2 += estoque.qtdEstoque * estoque.preco
        }

        if(estoque.departamento.idDepto === 3){
            dep3 += estoque.qtdEstoque * estoque.preco
        }
        
        if(estoque.departamento.idDepto === 4){
            dep4 += estoque.qtdEstoque * estoque.preco
        }

        if(estoque.departamento.idDepto === 5){
            dep5 += estoque.qtdEstoque * estoque.preco
        }

        if(estoque.departamento.idDepto === 6){
            dep6 += estoque.qtdEstoque * estoque.preco
        }

        if(estoque.departamento.idDepto === 7){
            dep7 += estoque.qtdEstoque * estoque.preco
        }

        if(estoque.departamento.idDepto === 8){
            dep8 += estoque.qtdEstoque * estoque.preco
        }

        if(estoque.departamento.idDepto === 9){
            dep9 += estoque.qtdEstoque * estoque.preco
        }

        if(dep1 > maior){
            maior = estoque.departamento.idDepto
        }

        if(dep2 > maior){
            maior = dep2
        }
        if(dep3 > maior){
            maior = dep3
        }
        
        if(dep4 > maior){
            maior = dep4
        }
        
        if(dep5 > maior){
            maior = dep5
        }
        
        if(dep6 > maior){
            maior = dep6
        }
        
        if(dep7 > maior){
            maior = dep7
        }
        
        if(dep8 > maior){
            maior = dep8
        }
        
        if(dep9 > maior){
            maior = dep9
        }


        
    }console.log(`O departamento mais valioso é o de Games custando: \n${maior.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
    `)
}MaiorDpt();
