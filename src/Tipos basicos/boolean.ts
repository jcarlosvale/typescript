let active: boolean;

active = true;

function verificarAtivo(ativo: boolean) {
    if (active) {
        return 'Ativo';
    } else {
        return 'Inativo';
    }
}

verificarAtivo(false);