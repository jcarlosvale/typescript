enum Profiles{
    admin,
    editor, 
    user
}

enum Cores {
    red = '\u001b[31m',
    black = '\u001b[30m',
}

const usuario = {
    level: Profiles.admin
}

console.log(usuario);