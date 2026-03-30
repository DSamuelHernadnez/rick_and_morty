export const validate = (userData) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexNumber = /\d/;

    // --- Validación de Email ---
    if (!userData.email?.trim()) {
        errors.email = 'El email es requerido';
    } 
    if (!errors.email && !regexEmail.test(userData.email)) {
        errors.email = 'El email no es válido';
    } 
    if (!errors.email && userData.email.length > 35) {
        errors.email = 'No puede tener más de 35 caracteres';
    }

    // --- Validación de Password ---
    const pass = userData.password || ""; // Evita errores si password es undefined

    if (!regexNumber.test(pass)) {
        errors.password = 'La contraseña debe tener al menos un número';
    }
    // Usamos un if separado para que la validación de longitud sea la prioridad visual
    if (pass.length < 6 || pass.length > 10) {
        errors.password = 'Debe tener entre 6 y 10 caracteres';
    }

    return errors;
};