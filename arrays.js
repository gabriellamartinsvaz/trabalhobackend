// ==========================================
// CONTROLE DE PACOTES
// ==========================================

const pacotes = [
    { codigo: 101, destino: "Curitiba", pesoKg: 12.5 },
    { codigo: 102, destino: "Londrina", pesoKg: 5.2 },
    { codigo: 103, destino: "Ponta Grossa", pesoKg: 18.0 },
    { codigo: 104, destino: "Maringá", pesoKg: 7.8 },
    { codigo: 105, destino: "Cascavel", pesoKg: 3.5 }
];

// ==========================================
// LISTAR PACOTES
// ==========================================

function listarPacotes() {
    console.log("=== PACOTES NO GALPÃO ===");

    pacotes.forEach(pacote => {
        console.log(
            `Código: ${pacote.codigo} | Destino: ${pacote.destino} | Peso: ${pacote.pesoKg}kg`
        );
    });
}

// ==========================================
// SELECTION SORT
// MAIS LEVE -> MAIS PESADO
// ==========================================

function ordenarPacotes() {

    for (let i = 0; i < pacotes.length - 1; i++) {

        let menor = i;

        for (let j = i + 1; j < pacotes.length; j++) {

            if (pacotes[j].pesoKg < pacotes[menor].pesoKg) {
                menor = j;
            }
        }

        let temp = pacotes[i];
        pacotes[i] = pacotes[menor];
        pacotes[menor] = temp;
    }

    console.log("\n=== PACOTES ORDENADOS ===");

    pacotes.forEach(pacote => {
        console.log(
            `Código: ${pacote.codigo} | Destino: ${pacote.destino} | Peso: ${pacote.pesoKg}kg`
        );
    });
}

// ==========================================
// BUSCA BINÁRIA
// ==========================================

function buscaBinaria(codigo) {

    let inicio = 0;
    let fim = pacotes.length - 1;

    while (inicio <= fim) {

        let meio = Math.floor((inicio + fim) / 2);

        if (pacotes[meio].codigo === codigo) {
            return pacotes[meio];
        }

        if (pacotes[meio].codigo < codigo) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return null;
}

// ==========================================
// EXECUÇÃO
// ==========================================

listarPacotes();

ordenarPacotes();

console.log("\n=== BUSCA DE PACOTE ===");

const resultado = buscaBinaria(103);

if (resultado) {
    console.log(resultado);
} else {
    console.log("Pacote não encontrado.");