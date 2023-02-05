
// Para formatear un valor y convertirlo en Currency
const formatearDinero = (valor) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    return formatter.format(valor)
}

// Para calcular el total a pagar
const calcularTotal = (cantidad, plazo) => {
    let total;

    // Cantidad
    if(cantidad < 5000) {
        total = cantidad * 1.5;
    }
    else if(cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.4;
    }
    else if(cantidad >= 10000 && cantidad < 15000) {
        total = cantidad * 1.3;
    }
    else {
        total = cantidad * 1.2;
    }

    // Plazo
    if(plazo === 6) {
        total *= 1.1;
    }
    else if(plazo === 12) {
        total *= 1.2;
    }
    else {
        total *= 1.3;
    }

    return total;
}

// Exports
export {
    formatearDinero,
    calcularTotal
}